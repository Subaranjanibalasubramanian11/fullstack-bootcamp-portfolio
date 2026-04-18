export default function Skills() {
  const skills = [
    "HTML", "CSS", "JavaScript",
    "React", "Python", "Flask",
    "MySQL", "GitHub","Node.js","Express.js","MongoDB",
  ];

  return (
    <section id="skills">
      <h2>Skills</h2>

      <div style={{
        display:"grid",
        gridTemplateColumns:"repeat(auto-fit, minmax(150px,1fr))",
        gap:"15px"
      }}>
        {skills.map((skill, index) => (
          <div className="card" key={index}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}