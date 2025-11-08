export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#172554] text-white p-8 flex flex-col items-center">
      <h2 className="text-4xl font-bold mb-4">🌐 Portfolio Generator</h2>
      <p className="text-gray-300 mb-6 text-center max-w-2xl">
        Automatically create a personal portfolio using your CareerCraft data — projects, certifications, and roadmap.
      </p>

      <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-xl w-full max-w-3xl">
        <h3 className="text-2xl font-semibold text-cyan-300 mb-2">👤 John Doe</h3>
        <p className="text-gray-400 mb-4">Aspiring Data Scientist | AI Enthusiast</p>

        <h4 className="text-lg font-semibold text-purple-300">🔧 Skills</h4>
        <ul className="list-disc ml-6 text-gray-300 mb-4">
          <li>Python</li>
          <li>Machine Learning</li>
          <li>Data Visualization</li>
        </ul>

        <h4 className="text-lg font-semibold text-purple-300">🚀 Projects</h4>
        <ul className="list-disc ml-6 text-gray-300 mb-4">
          <li>Employee Attrition Prediction</li>
          <li>Portfolio Website</li>
          <li>AI Resume Analyzer</li>
        </ul>

        <button className="bg-gradient-to-r from-blue-500 to-cyan-400 px-6 py-2 rounded-lg hover:scale-105 transition">
          Download Portfolio PDF
        </button>
      </div>
    </div>
  );
}
