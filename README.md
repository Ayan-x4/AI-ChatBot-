# 🤖 Ayan AI Chatbot

Ayan AI Chatbot is a single-page React application that answers questions about Ayan's background, education, programming languages, and development skills using Google's Gemini AI.

The application provides a simple, interactive chat interface where users can ask questions and receive AI-generated responses.

## ✨ Features

* 💬 **Interactive Chat Interface** — Ask questions through a clean, user-friendly chat UI.
* 🤖 **Google Gemini AI** — Generate responses using the Gemini API.
* 👨‍💻 **Personal AI Assistant** — Answer questions about Ayan's background, education, and technical skills.
* ⏳ **Loading Indicator** — Display a `Thinking...` indicator while waiting for responses.
* ⚠️ **Error Handling** — Display API errors directly in the interface.
* 📜 **Automatic Scrolling** — Automatically scroll to the latest message.
* 🎨 **Styled Interface** — Full-screen background with a customized chat panel.
* 📝 **Multiline Input** — Type questions using a multiline text input.
* 🎯 **Focused Responses** — Use a system instruction to avoid inventing information about Ayan.

## 📸 Screenshots

### Chatbot Interface

![Ayan AI Chatbot Interface](https://github.com/user-attachments/assets/37045b47-2eba-4bf7-9987-4a3d9fe49db6)

## 🛠️ Tech Stack

* **React 19** — Frontend UI library
* **Vite 8** — Development server and build tool
* **Tailwind CSS 4** — Styling
* **Google GenAI SDK** — Gemini API integration
* **Oxlint** — Code linting

## 📋 Prerequisites

Before running this project, make sure you have:

* [Node.js](https://nodejs.org/) `20.19+` or `22.12+`
* npm
* A Gemini API key from [Google AI Studio](https://aistudio.google.com/app/apikey)
* Git

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone <your-repository-url>
```

### 2. Navigate to the Project Directory

```bash
cd <repository-directory>
```

### 3. Install Dependencies

```bash
npm ci
```

### 4. Configure Environment Variables

Create a `.env.local` file in the project's root directory and add your Gemini API key:

```env
VITE_GEMINI_API_KEY=your_gemini_api_key
```

Replace `your_gemini_api_key` with your actual Gemini API key.

**Important:** Never commit your real API key to GitHub.

### 5. Start the Development Server

```bash
npm run dev
```

Open the local URL displayed in your terminal. By default, Vite usually uses:

```text
http://localhost:5173
```

## 💻 Available Commands

| Command           | Description                          |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start the development server         |
| `npm run build`   | Build the application for production |
| `npm run preview` | Preview the production build         |
| `npm run lint`    | Run Oxlint to check the code         |

## 🗂️ Project Structure

```text
Ayan-AI-Chatbot/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── components/
│   │   ├── Chatinput.jsx
│   │   ├── Message.jsx
│   │   └── Navbar.jsx
│   ├── Context/
│   │   └── MessageContext.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .env.local
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js
```

## 💬 How to Use

1. Start the application using `npm run dev`.
2. Open the application in your browser.
3. Enter a question about Ayan in the message input.
4. Click **Send** to add your question to the chat.
5. Click **Ask AI** on the submitted question to request a response from Gemini.
6. Wait for the AI to generate its response.
7. Read the answer displayed below your question.

## 🔐 Security Notes

* The Gemini API key is configured through `.env.local`.
* Files containing environment variables should be excluded from Git using `.gitignore`.
* Variables prefixed with `VITE_` are exposed to browser-side code. Therefore, the API key in this implementation can be accessed by users through browser tools.
* For production use, move Gemini API requests to a backend server and keep the API key on the server.
* Never upload API keys or other secrets to a public repository.

## ⚠️ Current Limitations

* Chat messages are stored in React state and are cleared when the page is refreshed.
* Previous messages remain visible but are not included in the Gemini API request.
* The application requires an internet connection to communicate with Gemini and load the external background image.
* AI responses depend on the availability and limits of the Gemini API.
* Automated tests are not currently configured.

## 🔮 Future Improvements

* [ ] Maintain conversation history in Gemini requests.
* [ ] Add chat history and persistent message storage.
* [ ] Improve mobile responsiveness.
* [ ] Add a backend API to protect the Gemini API key.
* [ ] Add a typing animation for AI responses.
* [ ] Support Markdown formatting in AI responses.
* [ ] Add a clear-chat option.
* [ ] Improve error handling and API quota feedback.

## 👨‍💻 Author

**Md Ayan**

Aspiring AI Full Stack Developer interested in web development and AI-powered applications.

### Connect With Me

* GitHub: [Ayan-x4](https://github.com/Ayan-x4)

---

⭐ If you find this project interesting, consider giving the repository a star!
