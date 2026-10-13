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
        systemInstruction:
          `My name is Ayan , and I am a fullstack Ai developer , currently i am parsuing btech from B.a college of engineering and technology,
          I know multiple programming languages like Java,c++,python,javascript and I aslo know framework or labirary such as Langchai , React.js,Node and so on.. . Answer only this context , other wise say Sorry Ayan ne Mujhe is Question pe Train nahi kiya hai..`
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