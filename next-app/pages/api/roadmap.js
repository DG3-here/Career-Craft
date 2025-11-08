"use client";
import { useState } from "react";

export default function Roadmap() {
  const [goal, setGoal] = useState("");
  const [steps, setSteps] = useState([]);
  const [loading, setLoading] = useState(false);

  const generateRoadmap = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://127.0.0.1:5000/api/roadmap/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ goal }),
      });
      const data = await res.json();
      setSteps(data.roadmap_steps || []);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-[#312e81] to-[#0f172a] text-white p-8">
      <h2 className="text-4xl font-bold mb-4">🧭 Career Roadmap Generator</h2>
      <p className="text-gray-300 mb-6 text-center">
        Enter your career goal below to generate a customized step-by-step learning path.
      </p>

      <input
        type="text"
        className="w-full max-w-3xl p-3 rounded-md text-black mb-4 shadow-lg"
        placeholder="e.g., Data Scientist, Web Developer, AI Engineer"
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
      />

      <button
        onClick={generateRoadmap}
        className="bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-2 rounded-lg hover:scale-105 transition-all"
      >
        {loading ? "Generating..." : "Generate Roadmap"}
      </button>

      {steps.length > 0 && (
        <div className="mt-8 bg-white/10 p-6 rounded-lg shadow-xl w-full max-w-3xl text-left">
          {steps.map((s, i) => (
            <p key={i} className="mb-2">➡️ {s}</p>
          ))}
        </div>
      )}
    </div>
  );
}
