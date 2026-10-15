import React, { useState } from "react";
import { GoogleGenAI } from "@google/genai";

const Message = ({ message }) => {
  const [reply, setReply] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleAskAI = async () => {
    try {
      setLoading(true);
      setError("");
      setReply("");

      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

      if (!apiKey) {
        throw new Error("API key nahi mili. .env file check karo.");
      }

      const ai = new GoogleGenAI({ apiKey });

      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: message,
        config: {
          systemInstruction: `You are Ayan's personal AI assistant.

## About Ayan

My name is Ayan, and I am a Full-Stack AI Developer currently pursuing a B.Tech degree at B.A. College of Engineering and Technology.

I have knowledge of multiple programming languages, including Java, C++, Python, and JavaScript. I also work with various frameworks, libraries, and AI development tools, including React.js, Node.js, and LangChain.

## Your Rules and Instructions

1. Answer questions only using the information provided in this context.

2. If a question is unrelated to Ayan's background, skills, education, or the information provided in this context, do not answer it.

3. Do not make up information or assume facts that are not explicitly mentioned in this context.

4. If a question is outside the scope of this context, respond with exactly the following sentence:

   "Sorry Ayan ne Mujhe is Question pe Train nahi kiya hai.."

5. Keep your answers clear, concise, professional, and easy to understand.

6. Follow these instructions strictly for every user query.
`,
        },
      });

      setReply(response.text || "No response received.");
    } catch (err) {
      console.error("Gemini API Error:", err);
      setError(err.message || "AI response nahi mila.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 ">
      <div className="bg-blue-900 text-white p-3 rounded-xl mb-3 w-50 ml-130">
        {message}
      </div>

      <button
        onClick={handleAskAI}
        disabled={loading}
        className="bg-gray-800 text-white px-4 py-2 rounded-xl disabled:opacity-50"
      >
        {loading ? "Thinking..." : "Ask AI"}
      </button>

      {reply && (
        <div className="bg-gray-100 text-black p-3 rounded-xl mt-3 whitespace-pre-wrap ">
          {reply}
        </div>
      )}

      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};

export default Message;
