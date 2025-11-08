"use client";
import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your message has been sent successfully!");
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#172554] text-white flex flex-col items-center justify-center p-8">
      <h2 className="text-4xl font-bold mb-6">📩 Contact / Support</h2>
      <form onSubmit={handleSubmit} className="bg-white/10 p-8 rounded-lg shadow-xl w-full max-w-lg">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full p-3 mb-4 rounded-md text-black"
        />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full p-3 mb-4 rounded-md text-black"
        />
        <textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className="w-full p-3 mb-4 rounded-md text-black"
          rows="5"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-500 to-cyan-400 py-2 rounded-lg hover:scale-105 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
