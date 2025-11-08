"use client";
import { useState } from "react";
import Link from "next/link";

export default function Dashboard() {
  const [active, setActive] = useState("resume");

  const sections = [
    { id: "resume", label: "Resume Analyzer", emoji: "📄" },
    { id: "linkedin", label: "LinkedIn Recommender", emoji: "🎓" },
    { id: "github", label: "GitHub Tracker", emoji: "💡" },
    { id: "roadmap", label: "Career Roadmap", emoji: "🧭" },
    { id: "portfolio", label: "Portfolio", emoji: "🌐" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#172554] text-white flex flex-col">
      <nav className="flex justify-center gap-4 flex-wrap p-5 bg-white/10 backdrop-blur-md sticky top-0 rounded-b-lg shadow-md">
        {sections.map((sec) => (
          <Link key={sec.id} href={`/${sec.id}`}>
            <button
              onClick={() => setActive(sec.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                active === sec.id
                  ? "bg-gradient-to-r from-blue-500 to-cyan-400 text-white shadow-md"
                  : "bg-transparent hover:text-cyan-300"
              }`}
            >
              {sec.emoji} {sec.label}
            </button>
          </Link>
        ))}
      </nav>

      <div className="flex-1 flex flex-col justify-center items-center text-center p-8">
        <h1 className="text-5xl font-bold mb-3 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          Welcome to CareerCraft 🚀
        </h1>
        <p className="text-gray-400 max-w-2xl">
          Your AI-powered personal career assistant — analyze your resume, discover certifications, generate project ideas, and plan your roadmap to success!
        </p>
      </div>

      <footer className="text-center text-gray-500 p-4 border-t border-gray-700">
        CareerCraft © 2025 | Empowering Careers with AI
      </footer>
    </div>
  );
}
