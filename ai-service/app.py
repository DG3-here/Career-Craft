from flask import Flask, jsonify, request
from flask_cors import CORS
from routes.resume_analysis import resume_blueprint
from routes.linkedin_recommend import linkedin_blueprint
from routes.github_ideas import github_blueprint
from routes.roadmap import roadmap_blueprint

app = Flask(__name__)
CORS(app)  # Enable CORS for frontend communication

# Registering API routes
app.register_blueprint(resume_blueprint, url_prefix='/api/resume')
app.register_blueprint(linkedin_blueprint, url_prefix='/api/linkedin')
app.register_blueprint(github_blueprint, url_prefix='/api/github')
app.register_blueprint(roadmap_blueprint, url_prefix='/api/roadmap')

@app.route('/')
def home():
    return jsonify({
        "message": "CareerCraft AI Service is Running 🚀",
        "available_routes": [
            "/api/resume/analyze",
            "/api/linkedin/recommend",
            "/api/github/projects",
            "/api/roadmap/generate"
        ]
    })

if __name__ == '__main__':
    app.run(debug=True, port=5000)
