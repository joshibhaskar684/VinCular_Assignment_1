"use client";

import Modal from "@mui/material/Modal";
import axios from "axios";
import { useState } from "react";
import {
  FaRobot,
  FaTimes,
  FaPaperPlane,
} from "react-icons/fa";

export default function AiModal({
  openModal,
  setOpenModal,
}) {
  const [input, setInput] = useState("");

  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "👋 Hi, I am Vincular AI Assistant. Ask me anything about certifications & compliance.",
    },
  ]);

  const [loading, setLoading] = useState(false);

  const handleClose = () => {
    setOpenModal(false);
  };

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = {
      role: "user",
      content: input,
    };

    setMessages((prev) => [...prev, userMessage]);

    const currentInput = input;
    setInput("");

    try {
      setLoading(true);

      const res = await axios.post("/api/chat", {
        message: currentInput,
      });

      const botMessage = {
        role: "assistant",
        content: res.data.reply,
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.log(error);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "⚠️ Failed to fetch response.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal open={openModal} onClose={handleClose}>
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-3xl h-[90vh] rounded-3xl overflow-hidden border border-white/10 bg-[#0B1020] text-white shadow-2xl flex flex-col">

          {/* HEADER */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-white/10 bg-gradient-to-r from-blue-600 to-purple-600">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-2xl bg-white/20 flex items-center justify-center">
                <FaRobot className="text-white text-xl" />
              </div>

              <div>
                <h2 className="text-xl font-semibold">
                  Vincular AI
                </h2>

                <p className="text-sm text-white/80">
                  Compliance Assistant
                </p>
              </div>
            </div>

            <FaTimes
              className="cursor-pointer text-xl hover:rotate-90 transition"
              onClick={handleClose}
            />
          </div>

          {/* CHAT AREA */}
          <div className="flex-1 overflow-y-auto px-5 py-6 space-y-5 bg-[#0F172A]">

            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${
                  msg.role === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-5 py-4 text-sm leading-relaxed shadow-lg ${
                    msg.role === "user"
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                      : "bg-white/10 border border-white/10 text-gray-200"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {/* LOADING */}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white/10 border border-white/10 px-5 py-4 rounded-2xl">
                  <div className="flex gap-2">
                    <div className="h-2 w-2 rounded-full bg-white animate-bounce" />
                    <div className="h-2 w-2 rounded-full bg-white animate-bounce delay-100" />
                    <div className="h-2 w-2 rounded-full bg-white animate-bounce delay-200" />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* INPUT */}
          <div className="border-t border-white/10 p-4 bg-[#0B1020]">
            <div className="flex items-center gap-3">
              <input
                type="text"
                value={input}
                onChange={(e) =>
                  setInput(e.target.value)
                }
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    sendMessage();
                  }
                }}
                placeholder="Ask about BIS, WPC, TEC..."
                className="flex-1 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <button
                onClick={sendMessage}
                disabled={loading}
                className="h-14 w-14 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center hover:scale-105 transition disabled:opacity-50"
              >
                <FaPaperPlane />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}