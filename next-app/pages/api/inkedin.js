"use client";
import { useState } from "react";

export default function LinkedIn() {
  const [skills, setSkills] = useState("");
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCerts = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://127.0.0.1:5000/api/linkedin/recommend", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ skills: skills.split(",") }),
      });
      const data = await res.json();
      setRecommendations(data.recommended_certifications || []);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
