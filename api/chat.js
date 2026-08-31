function detectReplyLanguage(messages) {
    const latestUser = [...messages].reverse().find((m) => m?.role === 'user' && typeof m?.content === 'string');
    const text = (latestUser?.content || '').trim();
    const lower = text.toLowerCase();

    if (!text) return 'English';

    if (/[\u0600-\u06FF]/.test(text)) {
        return 'Urdu';
    }

    const romanUrduHints = [
        'kese', 'kaise', 'kahan', 'kese ho', 'kaisa', 'kaisay', 'kyun', 'kya', 'or ', 'aur ', 'sunao',
        'theek', 'thik', 'shukriya', 'aap', 'tum', 'main', 'mein', 'mera', 'meri', 'mujhe', 'hain', 'hoon',
        'bhai', 'sahi', 'chalo', 'kr', 'kar', 'h ', ' h?', ' h',
    ];

    const score = romanUrduHints.reduce((acc, token) => (lower.includes(token) ? acc + 1 : acc), 0);
    if (score >= 2) {
        return 'Roman Urdu';
    }

    return 'English';
}

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const apiKey = process.env.GROQ_API_KEY || process.env.GROQ_API;

    if (!apiKey) {
        return res.status(500).json({ error: 'Missing GROQ_API_KEY or GROQ_API on server' });
    }

    const ip = (req.headers['x-forwarded-for'] || req.socket?.remoteAddress || 'unknown').toString().split(',')[0].trim();
    globalThis.__chatRateLimiter = globalThis.__chatRateLimiter || new Map();
    const now = Date.now();
    const windowMs = 60 * 1000;
    const maxPerWindow = 20;
    const prev = globalThis.__chatRateLimiter.get(ip);
    const next = !prev || now - prev.start > windowMs
        ? { start: now, count: 1 }
        : { start: prev.start, count: prev.count + 1 };
    globalThis.__chatRateLimiter.set(ip, next);

    if (next.count > maxPerWindow) {
        return res.status(429).json({ error: 'Too many requests. Please wait a minute and try again.' });
    }

    try {
        const cvText = `Front End: React, Next JS, JavaScript (ES6+), TypeScript, CSS 3, Tailwind CSS. Ozair Khan. Education. Work Experience. Contact Me. About me. Skills & Expertise. Full Stack & 2D Game Developer. I am a Full-Stack Developer specializing in the MERN & PERN stacks (MongoDB, PostgreSQL, Express, React, Node.js) and an avid 2D Game Developer. I bridge the gap between robust backend logic and engaging user interfaces. With hands-on experience building everything from responsive web applications to interactive games in Godot and GDevelop, I am passionate about creating seamless, high-performance digital experiences. +92 335 8180215. ozairk.work@gmail.com. ok-folio.vercel.app. D773, Bhittai Colony, Korangi Crossing, Karachi. Game Dev: Godot, GDevelop 5, Sprite Animation, Game Physics. Tools: Git/GitHub, Vercel, VS Code, Piskel 4, Itch.io. Matriculation. Intermediate - Computer Science (2024 - 2025). Expected 2027. 2D Game Developer, Digital Bee Studio (6 Months): Built three 2D platformer games, built one 3D endless runner game, implemented game physics, implemented sprite animations, developed on GDevelop 5. github.com/Ozair-Khan1. Back End: Node JS, Express, Mongo DB, PostgreSQL.`;
        const protocol = req.headers['x-forwarded-proto'] || 'https';
        const host = req.headers.host;
        const configuredBaseUrl = process.env.PORTFOLIO_BASE_URL || process.env.VITE_PORTFOLIO_BASE_URL || '';
        const normalizedConfiguredBaseUrl = configuredBaseUrl.replace(/\/+$/, '');
        const fallbackOrigin = host ? `${protocol}://${host}` : '';
        const isLocalFallback = /localhost|127\.0\.0\.1/i.test(fallbackOrigin);
        const origin = normalizedConfiguredBaseUrl || (isLocalFallback ? '' : fallbackOrigin);
        const buildUrl = (path) => (origin ? `${origin}${path}` : path);

        const portfolioFacts = [
            'Owner: Ozair Khan',
            'Age: 18',
            'Gender: Boy (Male)',
            'Qualification: College 2nd year (Computer Science), FG College.',
            'Role: MERN & PERN Developer and Game Developer.',
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
            origin
                ? `Portfolio base URL: ${origin}`
                : 'Portfolio base URL: not configured. Set PORTFOLIO_BASE_URL for public full links.',
            'Game projects and links:',
            origin ? `- Jolly 2D Pirate Game: ${buildUrl('/assets/Jolly/Jolly-Roger.html?v=1.3')}` : '- Jolly 2D Pirate Game: public link unavailable (set PORTFOLIO_BASE_URL).',
            origin ? `- Brotato 2D Wave Game: ${buildUrl('/assets/Brotato/Brotato.html?v=1.3')}` : '- Brotato 2D Wave Game: public link unavailable (set PORTFOLIO_BASE_URL).',
            origin ? `- ANF Road Crossing Game: ${buildUrl('/assets/RoadCross/index.html')}` : '- ANF Road Crossing Game: public link unavailable (set PORTFOLIO_BASE_URL).',
            origin ? `- Save The Cat: ${buildUrl('/assets/SaveTheCat/index.html')}` : '- Save The Cat: public link unavailable (set PORTFOLIO_BASE_URL).',
            origin ? `- Parking Jam: ${buildUrl('/assets/ParkingJam/index.html')}` : '- Parking Jam: public link unavailable (set PORTFOLIO_BASE_URL).',
            origin ? `- The Escape: ${buildUrl('/assets/TheEscape/index.html')}` : '- The Escape: public link unavailable (set PORTFOLIO_BASE_URL).',
            'Primary web stack: React, Next.js, Node.js, Express, PostgreSQL, MongoDB.',
            'Game engines used: Godot, GDevelop.',
            `CV extracted text: ${cvText}`,
        ].join('\n');

        let body;
        try {
            body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
        } catch {
            return res.status(400).json({ error: 'Invalid JSON body' });
        }

        const incomingMessages = Array.isArray(body?.messages) ? body.messages : [];

        const sanitizedMessages = incomingMessages
            .filter((m) => m && typeof m.content === 'string' && (m.role === 'user' || m.role === 'assistant'))
            .slice(-12);
        const replyLanguage = detectReplyLanguage(sanitizedMessages);

        const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${apiKey}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                model: 'openai/gpt-oss-20b',
                temperature: 0.2,
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
                            '11) When user asks about games, provide real game names and their links from FACTS.',
                            '12) For facts that ARE in FACTS, never refuse to share links; answer directly with available links.',
                            '13) Always provide full absolute links (starting with http/https), never relative-only links.',
                            '',
                            'FACTS:',
                            portfolioFacts,
                        ].join('\n'),
                    },
                    ...sanitizedMessages,
                ],
            }),
        });

        if (!response.ok) {
            const errorText = await response.text();
            return res.status(response.status).json({ error: errorText || 'Groq API request failed' });
        }

        const data = await response.json();
        const reply = data?.choices?.[0]?.message?.content?.trim();

        return res.status(200).json({ reply: reply || 'I could not generate a response right now.' });
    } catch (error) {
        return res.status(500).json({ error: error?.message || 'Unexpected server error' });
    }
}
