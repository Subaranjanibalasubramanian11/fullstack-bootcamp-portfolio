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

export default function Projects() {

  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImg, setCurrentImg] = useState(0);

  const projects = [
    {
      title: "AI Resume Analyzer",
      desc: "This project is a smart web-based application that analyzes resumes and provides intelligent suggestions to improve content, formatting, and overall presentation. It helps users identify missing skills, improve readability, and optimize resumes for better job opportunities.",
      features: [
        "Resume upload system",
        "AI-based analysis",
        "Improvement suggestions",
        "Clean UI for result display"
      ],
      images: [r1, r2, r3, r4, r5],
      github: "https://github.com/Subaranjanibalasubramanian11/resume-analyzer"
    },
    {
      title: "E-Library System",
      desc: "This is a digital library management system that allows users to upload, view, and manage books efficiently. It includes authentication, chatbot assistance, and an interactive dashboard for better user experience.",
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
  desc: "A full stack user management system developed during my internship. It includes authentication, database integration, and user profile management with a secure backend.",
  features: [
    "User registration & login",
    "Database integration (MySQL)",
    "Secure authentication",
    "Responsive frontend"
  ],
  images: [g2, g3, g4], // ✅ only these (removed g1)
  github: "https://github.com/Subaranjanibalasubramanian11/internship-project"

    }
  ];

  // 🔥 Auto slider
  useEffect(() => {
    if (selectedProject) {
      const interval = setInterval(() => {
        setCurrentImg((prev) =>
          (prev + 1) % selectedProject.images.length
        );
      }, 2000);

      return () => clearInterval(interval);
    }
  }, [selectedProject]);

  const openProject = (project) => {
    setSelectedProject(project);
    setCurrentImg(0);
  };

  return (
    <section id="projects">
      <h2>Projects</h2>

      {/* PROJECT CARDS */}
      <div className="project-grid">
        {projects.map((proj, index) => (
          <div
            key={index}
            className="card"
            onClick={() => openProject(proj)}
            style={{ cursor: "pointer" }}
          >
            <h3>{proj.title}</h3>
            <p>Click to view details</p>
          </div>
        ))}
      </div>

      {/* 🔥 BELOW DETAILS */}
      {selectedProject && (
        <div className="project-details">

          <h3>{selectedProject.title}</h3>

          <p>{selectedProject.desc}</p>

          <ul>
            {selectedProject.features.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>

          {/* IMAGE SLIDER */}
          <div className="slider">
            <img src={selectedProject.images[currentImg]} alt="project" />
          </div>

          <a href={selectedProject.github} target="_blank" rel="noreferrer">
            🔗 View GitHub
          </a>

        </div>
      )}

    </section>
  );
}