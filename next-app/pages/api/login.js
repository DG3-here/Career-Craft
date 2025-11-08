"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";

export default function Login() {
  const [phone, setPhone] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [msg, setMsg] = useState("");

  const sendOtp = async () => {
    setMsg("");
    try {
      const res = await fetch("/api/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone }),
      });
      if (res.ok) {
        setOtpSent(true);
        setMsg("OTP sent successfully ✅");
      } else {
        const data = await res.json();
        setMsg(data?.error || "Failed to send OTP ❌");
      }
    } catch (e) {
      setMsg("Network error while sending OTP ❌");
    }
  };

  const verifyOtp = async () => {
    setMsg("");
    // Auth.js credential provider (id: "otp-login") handles Twilio verify
    await signIn("otp-login", {
      redirect: true,
      phone,
      otp,
      callbackUrl: "/dashboard",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1A1A2E] to-[#00C8FF] text-white">
      <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-10 shadow-2xl w-[90%] sm:w-[420px]">
        <h1 className="text-3xl font-semibold mb-2 text-center">🔐 CareerCraft Login</h1>
        <p className="text-center text-white/80 mb-6">
          Secure OTP sign-in powered by Twilio + Auth.js
        </p>

        {!otpSent ? (
          <>
            <label className="block text-sm mb-2">Phone Number (with country code)</label>
            <input
              type="text"
              placeholder="+91XXXXXXXXXX"
              className="w-full p-3 rounded-md mb-4 text-black"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <button
              onClick={sendOtp}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 py-2 px-4 rounded-md hover:scale-105 transition"
            >
              Send OTP
            </button>
          </>
        ) : (
          <>
            <label className="block text-sm mb-2">Enter OTP</label>
            <input
              type="text"
              placeholder="4-6 digit code"
              className="w-full p-3 rounded-md mb-4 text-black tracking-widest"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
            <button
              onClick={verifyOtp}
              className="w-full bg-gradient-to-r from-green-500 to-blue-600 py-2 px-4 rounded-md hover:scale-105 transition"
            >
              Verify & Continue
            </button>
            <button
              onClick={sendOtp}
              className="w-full mt-3 bg-white/10 py-2 px-4 rounded-md hover:bg-white/20 transition"
            >
              Resend OTP
            </button>
          </>
        )}

        {msg && <p className="text-center mt-4 text-sm">{msg}</p>}

        <p className="text-xs text-center mt-6 text-white/70">
          By continuing, you agree to our Terms & Privacy.
        </p>
      </div>
    </div>
  );
}
