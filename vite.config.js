import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'
import fs from 'node:fs'
import path from 'node:path'
import { PDFParse } from 'pdf-parse'

dotenv.config()

let cachedCvText = null

function detectReplyLanguage(messages) {
  const latestUser = [...messages].reverse().find((m) => m?.role === 'user' && typeof m?.content === 'string')
  const text = (latestUser?.content || '').trim()
  const lower = text.toLowerCase()

  if (!text) return 'English'

  if (/[\u0600-\u06FF]/.test(text)) {
    return 'Urdu'
  }

  const romanUrduHints = [
    'kese', 'kaise', 'kahan', 'kese ho', 'kaisa', 'kaisay', 'kyun', 'kya', 'or ', 'aur ', 'sunao',
    'theek', 'thik', 'shukriya', 'aap', 'tum', 'main', 'mein', 'mera', 'meri', 'mujhe', 'hain', 'hoon',
    'bhai', 'sahi', 'chalo', 'kr', 'kar', 'h ', ' h?', ' h',
  ]

  const score = romanUrduHints.reduce((acc, token) => (lower.includes(token) ? acc + 1 : acc), 0)
  if (score >= 2) {
    return 'Roman Urdu'
  }

  return 'English'
}

async function getCvText() {
  if (cachedCvText) return cachedCvText

  try {
    const cvPath = path.join(process.cwd(), 'public', 'assets', 'Ozair-Khan-CV-V2.pdf')
    const fileBuffer = fs.readFileSync(cvPath)
    const parser = new PDFParse({ data: fileBuffer })
    const data = await parser.getText()
    await parser.destroy()
    const cleanText = data?.text?.replace(/\s+/g, ' ').trim()

    cachedCvText = cleanText || 'CV text unavailable.'
    return cachedCvText
  } catch {
    cachedCvText = 'CV text unavailable.'
    return cachedCvText
  }
}

function readJsonBody(req) {
  return new Promise((resolve, reject) => {
    let data = ''
    req.on('data', (chunk) => {
      data += chunk
    })
    req.on('end', () => {
      try {
        resolve(data ? JSON.parse(data) : {})
      } catch (error) {
        reject(error)
      }
    })
    req.on('error', reject)
  })
}

const groqDevApiPlugin = {
  name: 'groq-dev-api',
  configureServer(server) {
    server.middlewares.use('/api/chat', async (req, res) => {
      if (req.method !== 'POST') {
        res.statusCode = 405
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify({ error: 'Method not allowed' }))
        return
      }

      const apiKey = process.env.GROQ_API || process.env.GROQ_API_KEY
      if (!apiKey) {
        res.statusCode = 500
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify({ error: 'Missing GROQ_API or GROQ_API_KEY in .env' }))
        return
      }

      try {
        const cvText = await getCvText()
        const body = await readJsonBody(req)
        const incomingMessages = Array.isArray(body?.messages) ? body.messages : []
        const sanitizedMessages = incomingMessages
          .filter((m) => m && typeof m.content === 'string' && (m.role === 'user' || m.role === 'assistant'))
          .slice(-12)
        const replyLanguage = detectReplyLanguage(sanitizedMessages)

        const configuredBaseUrl = process.env.PORTFOLIO_BASE_URL || process.env.VITE_PORTFOLIO_BASE_URL || ''
        const normalizedConfiguredBaseUrl = configuredBaseUrl.replace(/\/+$/, '')
        const host = req.headers.host
        const origin = normalizedConfiguredBaseUrl || (host ? `http://${host}` : '')
        const buildUrl = (path) => (origin ? `${origin}${path}` : path)

        const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${apiKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            model: 'openai/gpt-oss-20b',
            temperature: 0.6,
            max_tokens: 500,
            messages: [
              {
                role: 'system',
                content: [
                  'You are Ozair Khan portfolio assistant.',
                  'CRITICAL RULES:',
                  '1) Never invent projects, links, technologies, or achievements.',
                  '2) Use ONLY the FACTS section below and user-provided messages.',
                  '3) If a fact is not available, say: "I don\'t have that in this portfolio yet."',
                  '4) Keep answers natural, friendly, and human-like (not robotic).',
                  '5) Keep answers concise: usually 2-5 lines unless user asks for detail.',
                  '6) Prefer plain conversational language over corporate wording.',
                  '7) Use bullets only when listing multiple items; otherwise reply in a short paragraph.',
                  '8) If user asks a direct question, answer first, then add helpful context.',
                  '9) Always reply in the same language the user used in their latest message.',
                  '10) If the user mixes languages, reply in the dominant language they used.',
                  `11) For this reply, you must answer in: ${replyLanguage}.`,
                  '5) When user asks about games, provide real game names and links from FACTS.',
                  '12) For facts that ARE in FACTS, never refuse to share links; answer directly with available links.',
                  '13) Always provide full absolute links (http/https), never relative-only links.',
                  '',
                  'FACTS:',
                  'Owner: Ozair Khan',
                  'Age: 18',
                  'Gender: Boy (Male)',
                  'Qualification: College 2nd year (Computer Science), FG College.',
                  'Role: MERN Developer and Game Developer.',
                  'Email: ozairk.work@gmail.com',
                  'Phone: +92 335 8180215',
                  'Location: D773, Bhittai Colony, Korangi Crossing, Karachi',
                  'Portfolio: https://ok-folio.vercel.app',
                  'GitHub: https://github.com/Ozair-Khan1',
                  'Instagram: https://www.instagram.com/ozair_nvm/',
                  'Facebook: https://www.facebook.com/ozair.khan.352476',
                  'LinkedIn: https://www.linkedin.com/in/ozair-khan-4389983b4/',
                  'Indeed: https://profile.indeed.com/?hl=en_PK&co=PK&from=gnav-homepage',
                  'Website projects include: Glimpse, Starbucks Website Clone, Prime Inspire Website Clone.',
                  'Project links:',
                  '- Glimpse: https://glimpse-pearl.vercel.app/',
                  '- Starbucks Website Clone: https://star-bucks-clone-two.vercel.app/',
                  '- Prime Inspire Website Clone: https://prime-inspire-clone.vercel.app/',
                  origin ? `Portfolio base URL: ${origin}` : 'Portfolio base URL: not available',
                  'Game projects and links:',
                  `- Jolly 2D Pirate Game: ${buildUrl('/assets/Jolly/Jolly-Roger.html?v=1.3')}`,
                  `- Brotato 2D Wave Game: ${buildUrl('/assets/Brotato/Brotato.html?v=1.3')}`,
                  `- ANF Road Crossing Game: ${buildUrl('/assets/RoadCross/index.html')}`,
                  `- Save The Cat: ${buildUrl('/assets/Save The Cat/index.html')}`,
                  `- Parking Jam: ${buildUrl('/assets/ParkingJam/index.html')}`,
                  `- The Escape: ${buildUrl('/assets/TheEscape/index.html')}`,
                  'Primary web stack: React, Next.js, Node.js, Express, MongoDB.',
                  'Game engines used: Godot, GDevelop.',
                  `CV extracted text: ${cvText}`,
                  'Always provide full absolute links (http/https), never relative-only links.',
                ].join('\n'),
              },
              ...sanitizedMessages,
            ],
          }),
        })

        if (!response.ok) {
          const errorText = await response.text()
          res.statusCode = response.status
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify({ error: errorText || 'Groq API request failed' }))
          return
        }

        const data = await response.json()
        const reply = data?.choices?.[0]?.message?.content?.trim() || 'I could not generate a response right now.'

        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify({ reply }))
      } catch (error) {
        res.statusCode = 500
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify({ error: error?.message || 'Unexpected server error' }))
      }
    })
  },
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), groqDevApiPlugin],
})
