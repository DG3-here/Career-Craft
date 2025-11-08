"use client";
import { useState } from "react";

export default function GitHub() {
  const [skills, setSkills] = useState("");
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);

  const getProjects = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://127.0.0.1:5000/api/github/projects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ skills: skills.split(",") }),
      });
      const data = await res.json();
      setProjects(data.suggested_projects || []);
    } catch (err) {
      console.error("Error fetching projects:", err);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-[#1e3a8a] to-[#312e81] text-white p-8">
      <h2 className="text-4xl font-bold mb-4">💡 GitHub Project Ideas</h2>
      <p className="text-gray-300 mb-6 text-center">
        Enter your main skills and explore AI-suggested project ideas to level up your portfolio.
      </p>

      <input
        type="text"
        className="w-full max-w-3xl p-3 rounded-md text-black mb-4 shadow-lg"
        placeholder="e.g., Python, ML, Web"
        value={skills}
        onChange={(e) => setSkills(e.target.value)}
      />

      <button
        onClick={getProjects}
        className="bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-2 rounded-lg hover:scale-105 transition-all"
      >
        {loading ? "Fetching..." : "Get Projects"}
      </button>

      {projects.length > 0 && (
        <div className="mt-8 bg-white/10 p-6 rounded-lg shadow-xl w-full max-w-3xl text-left">
          {projects.map((project, i) => (
            <p key={i} className="mb-2">🚀 {project}</p>
          ))}
        </div>
      )}
    </div>
  );
}
