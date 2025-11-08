from flask import Blueprint, request, jsonify
import json
import re

resume_blueprint = Blueprint('resume', __name__)

# Load skill keywords
with open('models/skill_keywords.json', 'r') as file:
    keywords = json.load(file)

@resume_blueprint.route('/analyze', methods=['POST'])
def analyze_resume():
    resume_text = request.json.get("resume_text", "").lower()
    if not resume_text:
        return jsonify({"error": "Resume text missing"}), 400

    score = 0
    matched_keywords = []

    for skill, weight in keywords.items():
        if re.search(r'\b' + re.escape(skill.lower()) + r'\b', resume_text):
            score += weight
            matched_keywords.append(skill)

    ats_score = min(100, (score / len(keywords)) * 100)
    missing = [k for k in keywords.keys() if k not in matched_keywords]

    return jsonify({
        "ats_score": round(ats_score, 2),
        "matched_skills": matched_keywords,
        "missing_skills": missing[:10]
    })
