# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Groq Chatbot Setup

This portfolio now includes a chatbot powered by Groq through a server-side proxy endpoint at `/api/chat`.

### 1) Add environment variable

Create/update your local `.env` file:

```env
GROQ_API=your_groq_api_key_here
```

You can also use:

```env
GROQ_API_KEY=your_groq_api_key_here
```

For production on Vercel, add the same `GROQ_API_KEY` in your Vercel project environment variables.

### 2) Enable PDF CV parsing

CV text is parsed from [`public/assets/Ozair-Khan-CV-V2.pdf`](public/assets/Ozair-Khan-CV-V2.pdf) using `pdf-parse` on the server side.

Install dependency:

```bash
npm install pdf-parse
```

The extracted text is cached in memory and injected into chatbot facts automatically.

### 2) Run locally

```bash
npm run dev
```

The chat button appears on all pages and sends requests to the serverless function so the API key stays private.
