import { useState, useEffect } from "react";

// Resume Images
import r1 from "../assets/certificates/resume1.jpg";
import r2 from "../assets/certificates/resume2.jpg";
import r3 from "../assets/certificates/resume3.jpg";
import r4 from "../assets/certificates/resume4.jpg";
import r5 from "../assets/certificates/resume5.jpg";

// Library Images
import l1 from "../assets/certificates/library1.jpg";
import l2 from "../assets/certificates/library2.jpg";
import l3 from "../assets/certificates/library3.jpg";
import l4 from "../assets/certificates/library4.jpg";
import l5 from "../assets/certificates/library5.jpg";
import l6 from "../assets/certificates/library6.jpg";

// GUVI Images
import g2 from "../assets/certificates/guvi2.jpeg";
import g3 from "../assets/certificates/guvi3.jpeg";
import g4 from "../assets/certificates/guvi4.jpeg";

// ✅ Bootcamp Images
import b1 from "../assets/certificates/day1.jpeg";
import b2 from "../assets/certificates/day2.jpeg";
import b3 from "../assets/certificates/login.png";
import b4 from "../assets/certificates/updateuser.png";
import b5 from "../assets/certificates/console.png";
import b6 from "../assets/certificates/day4.png";
import b7 from "../assets/certificates/update.png";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImg, setCurrentImg] = useState(0);

  const projects = [
    {
      title: "AI Resume Analyzer",
      tag: "Python · Flask · AI",
      desc: "Smart web app that analyzes resumes and gives AI-powered suggestions for content, formatting, and presentation. Helps users optimize resumes for better job opportunities.",
      features: [
        "Resume upload system",
        "AI-based analysis engine",
        "Improvement suggestions",
        "Clean UI for result display"
      ],
      images: [r1, r2, r3, r4, r5],
      github: "https://github.com/Subaranjanibalasubramanian11/resume-analyzer"
    },
    {
      title: "E-Library System",
      tag: "React · Node.js · MySQL",
      desc: "Digital library management system that allows users to upload, view, and manage books with authentication, chatbot assistance, and an interactive dashboard.",
      features: [
        "User login & signup",
        "Upload and view books",
        "Chatbot support",
        "Responsive UI design"
      ],
      images: [l1, l2, l3, l4, l5, l6],
      github: "https://github.com/Subaranjanibalasubramanian11/E_library_management"
    },
    {
      title: "GUVI Internship Project",
      tag: "Full Stack · MySQL · Auth",
      desc: "Full stack user management system developed during internship. Includes authentication, MySQL database integration, and user profile management with a secure backend.",
      features: [
        "User registration & login",
        "Database integration (MySQL)",
        "Secure authentication",
        "Responsive frontend"
      ],
      images: [g2, g3, g4],
      github: "https://github.com/Subaranjanibalasubramanian11/internship-project"
    },
    {
      title: "Full Stack AI Bootcamp",
      tag: "MERN · MongoDB · Express · React · Node",
      badge: "New",
      desc: "Complete MERN stack project built during a Full Stack AI Bootcamp covering Day 1 to Day 5. Includes user management, login system, update operations, and real-time console logging with MongoDB integration.",
      features: [
        "MERN stack (MongoDB, Express, React, Node.js)",
        "User login & registration system",
        "Update user functionality",
        "Day-by-day task progression (Day 1 – Day 5)",
        "REST API with Express backend",
        "MongoDB database integration"
      ],
      images: [b1, b2, b3, b4, b5, b6, b7],
      github: "https://github.com/Subaranjanibalasubramanian11/fullstack-ai-bootcamp"
    }
  ];

  useEffect(() => {
    if (!selectedProject) return;
    const interval = setInterval(() => {
      setCurrentImg(prev => (prev + 1) % selectedProject.images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [selectedProject]);

  const openProject = (project) => {
    setSelectedProject(project);
    setCurrentImg(0);
  };

  return (
    <section id="projects">
      <h2>Projects</h2>

      <div className="project-grid">
        {projects.map((proj, index) => (
          <div
            key={index}
            className={`card ${selectedProject?.title === proj.title ? "card-active" : ""}`}
            onClick={() => openProject(proj)}
          >
            {proj.badge && <span className="proj-badge">{proj.badge}</span>}
            <h3>{proj.title}</h3>
            <p className="proj-tag-label">{proj.tag}</p>
            <p className="proj-hint">Click to view details ↗</p>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="project-details">

          <div className="proj-detail-header">
            <div>
              <h3>{selectedProject.title}</h3>
              <span className="proj-detail-tag">{selectedProject.tag}</span>
            </div>
            <button className="proj-close" onClick={() => setSelectedProject(null)}>✕ Close</button>
          </div>

          <p>{selectedProject.desc}</p>

          <div className="proj-features">
            {selectedProject.features.map((f, i) => (
              <div className="proj-feature-item" key={i}>
                <span className="feat-dot"></span> {f}
              </div>
            ))}
          </div>

          <div className="slider">
            <div className="slider-dots">
              {selectedProject.images.map((_, i) => (
                <span
                  key={i}
                  className={`dot ${i === currentImg ? "dot-active" : ""}`}
                  onClick={() => setCurrentImg(i)}
                />
              ))}
            </div>
            <img src={selectedProject.images[currentImg]} alt="project screenshot" />
          </div>

          <a href={selectedProject.github} target="_blank" rel="noreferrer" className="proj-github-btn">
            View on GitHub ↗
          </a>

        </div>
      )}
    </section>
  );
}