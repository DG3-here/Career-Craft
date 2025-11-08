from flask import Blueprint, jsonify, request

github_blueprint = Blueprint('github', __name__)

project_suggestions = {
    "data": ["Employee Attrition Predictor", "E-commerce Data Dashboard", "Sales Forecasting Model"],
    "web": ["Portfolio Website", "Flask Task Tracker", "React Blog Platform"],
    "ml": ["Diabetes Prediction App", "Spam Email Classifier", "Face Recognition System"],
    "ai": ["Chatbot with NLP", "Image Caption Generator", "Speech Emotion Detector"]
}

@github_blueprint.route('/projects', methods=['POST'])
def suggest_projects():
    skillset = request.json.get("skills", [])
    projects = []

    for skill in skillset:
        for key, project_list in project_suggestions.items():
            if key in skill.lower():
                projects.extend(project_list)

    if not projects:
        projects = ["Try a small personal project to get started!"]

    return jsonify({"suggested_projects": list(set(projects))})
