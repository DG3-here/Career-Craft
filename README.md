# 🚀 CareerCraft – AI-Powered Career Growth Platform

CareerCraft is an **AI-driven career enhancement platform** designed to help students and professionals manage their **entire career journey in one place**.  
Instead of visiting multiple websites for resume analysis, job readiness, certifications, or project ideas — **CareerCraft** brings it all together with an intuitive, futuristic UI.

> 💼 *"Your personal career coach — powered by AI, built for growth."*

---

## 🌟 Key Features

### 🧠 AI-Powered Resume & ATS Analysis
- Upload your resume and get **ATS Score** instantly.
- View **missing keywords**, format issues, and optimization suggestions.
- Personalized **career roadmap** based on your skills and goals.

### 🔗 LinkedIn & Certification Integration
- Get **course recommendations** (free or paid) to improve your profile.
- Skill-specific **certification paths** curated from trusted sources.

### 💻 GitHub Project Assignment
- Automatically suggests **domain-specific project ideas**.
- Assigns **deadlines** and tracks **streak consistency**.
- Helps maintain an **active GitHub profile** with project insights.

### 🪪 OTP-Verified Authentication
- **Twilio-based secure login system** using one-time passwords (OTP).
- Ensures only genuine users access and track their data.

### 🧩 Portfolio Auto-Generation
- Automatically builds a **personal portfolio** if the user doesn’t have one.
- Dynamic sections for skills, certifications, and completed projects.

### 🕹️ Gamified Dashboard
- Tracks **career progress**, **skill growth**, and **streaks**.
- Motivational interface with progress bars, badges, and visual stats.

---

## 🏗️ Tech Stack

| Layer | Technology |
|:------|:------------|
| **Frontend** | Next.js 14 (React), Tailwind CSS, Framer Motion |
| **Backend** | Flask (Python) – AI microservice for ML models |
| **Authentication** | Auth.js + Twilio OTP |
| **Database** | Prisma + PostgreSQL |
| **AI / ML** | scikit-learn, NumPy, Pandas |
| **Design** | Glassmorphism + Neon gradients |
| **Deployment (Planned)** | Vercel (Frontend) & Render (Backend) |

---

## 🧩 Project Structure
<pre>
CareerCraft/
│
├── next-app/ # 🌐 Frontend (Next.js)
│ ├── pages/
│ │ ├── api/
│ │ │ ├── auth/[...nextauth].js # Auth.js configuration
│ │ │ ├── send-otp.js # Twilio - Send OTP
│ │ │ └── verify-otp.js # Twilio - Verify OTP
│ │ ├── login.js # OTP login screen
│ │ ├── dashboard.js # User dashboard (AI sections)
│ │ ├── resume.js # Resume analyzer
│ │ ├── linkedin.js # Certification recommender
│ │ ├── github.js # GitHub project tracker
│ │ ├── roadmap.js # Skill roadmap page
│ │ ├── portfolio.js # Auto portfolio generator
│ │ ├── about.js # About page
│ │ └── contact.js # Contact support page
│ │
│ ├── components/
│ │ ├── Navbar.js # Floating neon navbar
│ │ ├── Footer.js # Gradient footer
│ │ ├── ATSScoreCard.js # Resume score visual
│ │ ├── CertificationCard.js # LinkedIn course recommender
│ │ ├── ProjectCard.js # GitHub project assignment card
│ │ └── Loader.js # Animated loader
│ │
│ ├── public/
│ │ ├── logo.png
│ │ ├── otp-bg.svg
│ │ └── hero-bg.svg
│ │
│ ├── styles/
│ │ ├── globals.css # Tailwind base styles
│ │ └── custom.css # Gradient + glassmorphism
│ │
│ ├── utils/
│ │ ├── apiHelper.js # Reusable fetch wrappers
│ │ ├── resumeHelper.js # Resume API helpers
│ │ └── roadmapData.js # Career roadmap data
│ │
│ ├── .env.local # Environment variables
│ ├── tailwind.config.js
│ ├── next.config.js
│ ├── package.json
│ └── README.md
│
├── ai-service/ # 🧠 Flask AI microservice
│ ├── app.py # Main API for ML scoring
│ ├── models/
│ │ ├── ats_model.pkl
│ │ └── skill_keywords.json
│ ├── routes/
│ │ ├── resume_analysis.py
│ │ ├── linkedin_recommend.py
│ │ ├── github_ideas.py
│ │ └── roadmap.py
│ ├── static/
│ │ └── report_templates/
│ ├── templates/
│ │ └── index.html
│ ├── requirements.txt
│ └── README.md
│
├── database/
│ ├── prisma/schema.prisma # Database schema
│ ├── migrations/
│ ├── seed.js
│ └── connection.js
│
├── docs/
│ ├── architecture_diagram.png
│ ├── flow_diagram.png
│ └── system_design.md
│
├── .gitignore
└── README.md # Main Project Documentation
</pre>


---


## ⚙️ Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone https://github.com/DG3-here/Career-Craft.git
   cd CareerCraf
   
2. **Set up the Backend (AI Service - Flask)**
    ```bash
    cd ai-service
    python -m venv venv
    venv\Scripts\activate        # On Windows
    source venv/bin/activate     # On macOS/Linux
    pip install -r requirements.txt
    python app.py
    Backend will start on: 👉 http://127.0.0.1:5000

3. **Set up the Frontend (Next.js App)**
    ```bash
    cd ../next-app
    npm install
    npm run dev
    Frontend will start on: 👉 http://localhost:3000

4. **Environment Setup**
    ```bash
    Create a .env.local file inside the next-app/ folder and add:

    NEXT_PUBLIC_API_URL=http://127.0.0.1:5000
    TWILIO_ACCOUNT_SID=your_twilio_sid
    TWILIO_AUTH_TOKEN=your_twilio_auth_token
    TWILIO_PHONE_NUMBER=your_twilio_number


5. **Open in Browser**
    ```bash
    Visit: http://localhost:3000
    Log in with your verified OTP
    Start exploring CareerCraft 🚀