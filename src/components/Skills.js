export default function Skills() {
  const skills = ["HTML","CSS","JavaScript","React","Python","Flask","MySQL","GitHub","Node.js","Express.js","MongoDB"];
  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="skills-wrap">
        {skills.map((skill, i) => (
          <div className="skill-pill" key={i}>{skill}</div>
        ))}
      </div>
    </section>
  );
}