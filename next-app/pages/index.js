export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-darkblue to-black text-white">
      <h1 className="text-6xl font-extrabold mb-6">🚀 Welcome to CareerCraft</h1>
      <p className="text-lg max-w-xl text-center opacity-80">
        Your all-in-one platform for AI-powered career growth. <br />
        Login to begin your personalized journey!
      </p>
      <a
        href="/login"
        className="mt-8 px-6 py-3 bg-neon text-darkblue font-semibold rounded-full hover:scale-105 transition-transform duration-300"
      >
        Go to Login
      </a>
    </div>
  );
}
