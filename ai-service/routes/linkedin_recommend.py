from flask import Blueprint, jsonify, request

linkedin_blueprint = Blueprint('linkedin', __name__)

certification_map = {
    "python": ["Python for Everybody (Coursera)", "Advanced Python (Udemy)"],
    "data": ["Data Science Specialization (Coursera)", "Google Data Analytics"],
    "ml": ["Machine Learning by Andrew Ng", "TensorFlow Developer Certificate"],
    "sql": ["SQL for Data Analysis", "PostgreSQL Bootcamp"],
    "excel": ["Excel to MySQL: Business Analytics", "Advanced Excel Skills"],
}

@linkedin_blueprint.route('/recommend', methods=['POST'])
def recommend_certifications():
    user_skills = request.json.get("skills", [])
    suggestions = []

    for skill in user_skills:
        for key, certs in certification_map.items():
            if key in skill.lower():
                suggestions.extend(certs)

    if not suggestions:
        suggestions = ["Explore trending LinkedIn certifications in your field."]

    return jsonify({"recommended_certifications": list(set(suggestions))})
