import React, { useState } from "react";
import axios from "axios";

const Chatbot = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi! I'm your AI assistant. Ask me anything!" },
  ]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { sender: "user", text: input }];
    setMessages(newMessages);
    setInput("");

    try {
      const res = await axios.post("http://localhost:3001/chat", {
        message: input,
      });

      setMessages([...newMessages, { sender: "bot", text: res.data.content }]);
    } catch (err) {
      console.error("Chat error:", err);
      setMessages([
        ...newMessages,
        { sender: "bot", text: "Sorry, I couldn't get a response." },
      ]);
    }
  };

  return (
    <div className="fixed bottom-6 left-6 bg-white dark:bg-gray-900 border rounded-xl shadow-lg w-80 max-h-[400px] overflow-hidden z-50">
      <div className="p-4 bg-blue-600 text-white font-bold text-lg rounded-t-xl">
        💬 AI Chatbot
      </div>
      <div className="p-4 h-64 overflow-y-auto space-y-2 text-sm">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`p-2 rounded-md ${
              msg.sender === "bot"
                ? "bg-gray-200 dark:bg-gray-700 text-left"
                : "bg-blue-100 dark:bg-blue-800 text-right"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className="flex items-center border-t p-2">
        <input
          type="text"
          className="flex-grow px-2 py-1 border rounded dark:bg-gray-800"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Ask something..."
        />
        <button
          onClick={sendMessage}
          className="ml-2 px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
