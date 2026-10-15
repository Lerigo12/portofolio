
const projects = [
  {
    number: '01',
    name: 'RW Digital',
    category: 'WEB APPLICATION',
    description:
      'Sistem informasi administrasi RW untuk pengelolaan warga, iuran, dan layanan digital.',
    tech: ['Laravel', 'MySQL', 'Tailwind', 'CSS','Blade'],
    image: '/images/projects/rw-digital.png',
    github: 'https://github.com/Lerigo12/rw_digitalisasi',
    demo: 'https://rwdigital29alamanda.my.id/',
  },
  {
    number: '02',
    name: 'Kedai Kopi Lens',
    category: 'LANDING PAGE',
    description:
      'Website portofolio untuk menampilkan profil, kemampuan, dan proyek yang telah dikerjakan.',
    tech: ['HTML','CSS','JS'],
    image: '/images/projects/kedai-lens.png',
    github: 'https://github.com/Lerigo12/kedai-kopi-lens',
    demo: 'https://kedai-kopi-lens.vercel.app/',
  },
]

function Projects() {
  return (
    <section className="content-section reveal" id="projects">
      <p className="section-label">05 / KARYA PILIHAN</p>

      <h2>
        Proyek yang saya <span>bangun.</span>
      </h2>

      <p>
        Beberapa proyek untuk menerapkan kemampuan dan menyelesaikan
        kebutuhan nyata.
      </p>

      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.number}>
            <div className="project-image-link">
              <img
                className="project-image"
                src={project.image}
                alt={`Preview website ${project.name}`}
                loading="lazy"
                onError={(event) => {
                  event.currentTarget.style.visibility = 'hidden'
                }}
              />
            </div>

            <div className="project-content">
              <div className="project-top">
                <span className="project-number">
                  {project.number}
                </span>

                <span className="project-status">
                  {project.category}
                </span>
              </div>

              <h3>{project.name}</h3>

              <p>{project.description}</p>

              <div className="project-tech">
                {project.tech.map((tech) => (
                  <span className="project-tech-tag-rw" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Lihat kode ${project.name} di GitHub`}
                >
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.53v-2.07c-3.1.67-3.76-1.32-3.76-1.32-.5-1.28-1.23-1.62-1.23-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15.99 1.7 2.6 1.21 3.23.93.1-.72.39-1.21.7-1.49-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.21 1.15-2.99-.12-.28-.5-1.42.11-2.95 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.12-1.44 3.05-1.14 3.05-1.14.61 1.53.23 2.67.11 2.95.72.78 1.15 1.77 1.15 2.99 0 4.29-2.61 5.23-5.1 5.51.4.35.75 1.03.75 2.08V22c0 .29.2.63.76.52A11.1 11.1 0 0 0 12 .9Z"
                    />
                  </svg>

                  <span>GitHub</span>
                  <span aria-hidden="true">↗</span>
                </a>

                {project.demo ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Buka website ${project.name}`}
                  >
                    <span>Live Website</span>
                    <span aria-hidden="true">↗</span>
                  </a>
                ) : (
                  <span className="project-link-disabled">
                    Website belum tersedia
                  </span>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects