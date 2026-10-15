
const technicalSkills = [
  "HTML",
  "CSS",
  "JavaScript",
  "PHP",
  "Laravel",
  "React",
  "Next.js",
  "Tailwind CSS",
  "MySQL",
  "Git",
  "GitHub",
  "Supabase",
];

export default function Skills() {
  return (
    <section className="content-section reveal" id="skills">
      <p className="section-label">04 / TECHNICAL SKILLS</p>

      <h2>
        <span>Tools</span> I use to <span>build things.</span>
      </h2>

      <p>
        Teknologi yang saya gunakan untuk membangun dan mengembangkan aplikasi web.
      </p>

      <div className="skills-marquee" aria-label="Daftar technical skills">
        <div className="skills-track">
          {[...technicalSkills, ...technicalSkills].map((skill, index) => (
            <span className="skill-chip" key={`${skill}-${index}`}>
              <span className="skill-indicator" />
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
