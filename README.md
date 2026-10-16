# Ayan AI Chatbot

A single-page React chatbot that answers questions about Ayan's background, education, programming languages, and development skills. The interface uses Google Gemini to generate responses and presents them in a simple, styled chat experience.

## Features

- Chat-style interface with a full-screen background and styled message panel.
- Send questions from a multiline text input.
- Ask Gemini to answer each submitted question individually.
- Per-message loading state with a `Thinking...` indicator.
- Inline display of AI responses and API errors.
- Automatic scrolling to the newest message.
- Scope-limited assistant prompt that avoids inventing information about Ayan.

## Tech stack

- [React](https://react.dev/) 19
- [Vite](https://vite.dev/) 8
- [Tailwind CSS](https://tailwindcss.com/) 4
- [Google GenAI JavaScript SDK](https://www.npmjs.com/package/@google/genai)
- [Oxlint](https://oxc.rs/docs/guide/usage/linter.html)

## Getting started

### Prerequisites

- Node.js `20.19+` or `22.12+`
- A Gemini API key from [Google AI Studio](https://aistudio.google.com/app/apikey)

### Installation

1. Clone the repository and move into the project directory.

   ```bash
   git clone <your-repository-url>
   cd <repository-directory>
   ```

2. Install the locked dependencies:

   ```bash
   npm ci
   ```

3. Create a local environment file named `.env.local` in the project root:

   ```env
   VITE_GEMINI_API_KEY=your_gemini_api_key
   ```

   Do not commit this file or expose your real API key in the repository. The `.env` and `.env.local` files are ignored by Git.

### Run locally

Start the Vite development server:

```bash
npm run dev
```

Open the local URL printed in the terminal, usually `http://localhost:5173`.

## How to use

1. Type a question about Ayan into the message box.
2. Click **Send** to add the question to the chat.
3. Click **Ask AI** on that question to request a Gemini response.
4. Read the response or any error shown below the question.

The current implementation sends only the selected question to Gemini. Earlier messages remain visible in the interface but are not included as conversation history in the API request.

## Screenshots

Add your project images to `public/screenshots/`, then uncomment or copy the Markdown examples below. Use descriptive filenames such as `chatbot-interface.png` or `ai-response.png`.

```md
<img width="1917" height="1078" alt="Image" src="https://github.com/user-attachments/assets/37045b47-2eba-4bf7-9987-4a3d9fe49db6" />
<img width="1917" height="1078" alt="Image" src="https://github.com/user-attachments/assets/37045b47-2eba-4bf7-9987-4a3d9fe49db6" />
```

<!-- Add your screenshots here when they are available. -->

## Project structure

```text
.
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── components/
│   │   ├── Chatinput.jsx       # Message input and send button
│   │   ├── Message.jsx         # Gemini request, response, and error UI
│   │   └── Navbar.jsx          # Application header
│   ├── Context/
│   │   └── MessageContext.jsx  # In-memory message list and auto-scroll
│   ├── App.jsx                 # Main page layout
│   ├── index.css               # Tailwind import and custom styles
│   └── main.jsx                # React entry point
├── .env.local                  # Local API key; do not commit
├── index.html
├── package.json
└── vite.config.js
```

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server with hot reload. |
| `npm run build` | Create a production build in `dist/`. |
| `npm run preview` | Preview the production build locally. |
| `npm run lint` | Run Oxlint against the project. |

There is currently no automated test script or test suite in the repository.

## Important notes

- The Gemini request is made directly from the browser. Because Vite exposes variables prefixed with `VITE_` to client-side code, the API key should be treated as public in this version. For production, move the Gemini request behind a server-side API route or backend proxy.
- Chat messages are stored only in React state, so they are cleared when the page is refreshed.
- The assistant uses a hard-coded Gemini model and system instruction in `src/components/Message.jsx`.
- The visual background is loaded from an external wallpaper URL, so it requires network access.
- There is no client-side routing; the application is served from the root page.
