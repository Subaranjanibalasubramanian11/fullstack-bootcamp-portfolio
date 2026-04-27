export default function About() {
  return (
    <section id="about">

      <h2>About me</h2>

      {/* ── TOP: Avatar + Intro ── */}
      <div className="about-top">
        <div className="about-avatar">SKB</div>
        <div className="about-intro">
          <h3 className="about-name">Subaranjani K B</h3>
          <p className="about-role">Aspiring Full Stack Developer</p>
          <p className="about-bio">
            Passionate IT student who loves transforming ideas into scalable,
            user-friendly web applications. I write clean code, learn fast,
            and build things that matter.
          </p>
          <div className="about-tags">
            <span>Full Stack</span>
            <span>React</span>
            <span>Python</span>
            <span>Open to work</span>
          </div>
        </div>
      </div>

      {/* ── INFO CARDS ── */}
      <div className="about-info-grid">
        <div className="about-info-card">
          <span className="info-label">Degree</span>
          <span className="info-val">B.Sc. – Information Technology</span>
        </div>
        <div className="about-info-card">
          <span className="info-label">Focus area</span>
          <span className="info-val">Full Stack Web Development</span>
        </div>
        <div className="about-info-card">
          <span className="info-label">Projects built</span>
          <span className="info-val">3 real-world applications</span>
        </div>
        <div className="about-info-card">
          <span className="info-label">Currently learning</span>
          <span className="info-val">MongoDB · Node.js · Express.js</span>
        </div>
      </div>

      <hr className="about-divider" />

      {/* ── BOTTOM: Timeline + Skills ── */}
      <div className="about-bottom-grid">

        {/* Timeline */}
        <div>
          <p className="about-sub-title">Journey</p>
          <div className="about-timeline">
            {[
              { title: "Started web development", sub: "HTML, CSS, JavaScript fundamentals", year: "Year 1" },
              { title: "Built AI Resume Analyzer", sub: "Python · Flask · AI integration", year: "Year 2" },
              { title: "GUVI Internship", sub: "Full stack user management system", year: "Internship" },
              { title: "Mastering MERN stack", sub: "MongoDB · Express · React · Node", year: "Now" },
            ].map((item, i) => (
              <div className="timeline-item" key={i}>
                <p className="tl-title">{item.title}</p>
                <p className="tl-sub">{item.sub}</p>
                <span className="tl-year">{item.year}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Skill bars */}
        <div>
          <p className="about-sub-title">Skill confidence</p>
          {[
            { name: "HTML / CSS", pct: 90 },
            { name: "JavaScript / React", pct: 80 },
            { name: "Python / Flask", pct: 75 },
            { name: "MySQL / Databases", pct: 70 },
            { name: "Node.js / Express", pct: 55 },
          ].map((s, i) => (
            <div className="skill-bar-row" key={i}>
              <div className="skill-bar-header">
                <span>{s.name}</span><span>{s.pct}%</span>
              </div>
              <div className="skill-bar-bg">
                <div className="skill-bar-fill" style={{ width: `${s.pct}%` }}></div>
              </div>
            </div>
          ))}

          <div className="about-goal-box">
            <p><strong>Goal:</strong> Become a skilled Full Stack Developer — building impactful, scalable applications that solve real-world problems.</p>
          </div>
        </div>

      </div>
    </section>
  );
}