"use client";
import { useState } from "react";

export default function Resume() {
  const [resumeText, setResumeText] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const analyzeResume = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://127.0.0.1:5000/api/resume/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ resume_text: resumeText }),
      });
      const data = await res.json();
      setResult(data);
    } catch (err) {
      console.error("Error analyzing resume:", err);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-br from-[#0f172a] to-[#172554] text-white p-8">
      <h2 className="text-4xl font-bold mb-4">📄 Resume Analyzer</h2>
      <p className="text-gray-400 mb-6">
        Paste your resume content below to get your ATS score and missing skills.
      </p>

      <textarea
        rows="10"
        className="w-full max-w-3xl p-4 rounded-lg text-black shadow-xl mb-4"
        placeholder="Paste your resume text here..."
        value={resumeText}
        onChange={(e) => setResumeText(e.target.value)}
      ></textarea>

      <button
        onClick={analyzeResume}
        className="bg-gradient-to-r from-blue-500 to-cyan-400 px-6 py-2 rounded-lg font-medium hover:scale-1
