from flask import Blueprint, jsonify, request

roadmap_blueprint = Blueprint('roadmap', __name__)

career_paths = {
    "data scientist": [
        "Learn Python, Pandas, and Numpy",
        "Master Data Visualization (Power BI, Tableau)",
        "Understand Statistics and Probability",
        "Study Machine Learning algorithms",
        "Build 3+ ML projects and publish on GitHub"
    ],
    "web developer": [
        "Learn HTML, CSS, and JavaScript",
        "Understand React or Next.js",
        "Backend with Flask/Django/Node",
        "Deploy projects on Vercel or Render",
        "Create a personal portfolio site"
    ],
    "ai engineer": [
        "Master Python and Linear Algebra",
        "Learn TensorFlow or PyTorch",
        "Work on NLP and Computer Vision",
        "Deploy ML models as APIs",
        "Publish 2-3 AI projects"
    ]
}

@roadmap_blueprint.route('/generate', methods=['POST'])
def generate_roadmap():
    career_goal = request.json.get("goal", "").lower()
    roadmap = career_paths.get(career_goal, ["Please choose a valid career path."])
    return jsonify({"career_goal": career_goal.title(), "roadmap_steps": roadmap})
