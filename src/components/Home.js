import { useState, useEffect } from "react";
import profile from "../assets/certificates/profile.jpeg";

export default function Home() {
  const roles = [
    "Aspiring Full Stack Developer",
    "Software Developer",
    "Web Developer"
  ];

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[index];
    const speed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      setText(current.substring(0, charIndex));

      if (!isDeleting && charIndex < current.length) {
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === current.length) {
        setIsDeleting(true);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setIndex((index + 1) % roles.length);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, index]);
return (
  <section id="home" className="home-container">
    <div className="home-text">
      <div className="hero-badge">
        <div className="badge-dot"></div> Open to opportunities
      </div>
      <h1 className="hero-title">
        Hi, I'm <span className="name">Subaranjani&nbsp;K&nbsp;B</span>
      </h1>
      <h2 className="typing">{text}</h2>
      <p>Passionate about building modern web applications and solving real-world problems using technology.</p>
      <div className="hero-btns">
        <a href="#projects"><button>View My Work</button></a>
        <a href="#contact"><button className="btn-outline">Get in Touch</button></a>
      </div>
    </div>
    <div className="home-img">
      <div className="avatar-ring"></div>
      <img src={profile} alt="profile" />
    </div>
  </section>
);
}