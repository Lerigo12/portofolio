const experiences = [
  {
    period: 'SEP 2025 — NOV 2025',
    type: 'ADMINISTRASI',
    role: 'Admin',
    company: 'PT Solusi Inspirasi Mandhiri',
    description:
      'Mengelola dan menganalisis data, menyusun laporan kinerja berkala, serta membantu pelaksanaan program pengembangan karier karyawan.',
    skills: ['Pengolahan Data', 'Laporan Berkala', 'Administrasi'],
  },
  {
    period: 'AGU 2024 — NOV 2024',
    type: 'DATA ENTRY',
    role: 'Tim Input Data PILKADA',
    company: 'PDI Perjuangan — Fraksi PDIP Wali Kota Bekasi',
    description:
      'Mengonsolidasikan hasil perolehan suara dari ratusan TPS dan memverifikasi data rekapitulasi untuk menjaga konsistensi data.',
    skills: ['Input Data', 'Verifikasi Data', 'Rekapitulasi'],
  },
  {
    period: 'JAN 2024 — MAR 2024',
    type: 'DATA ENTRY',
    role: 'Tim Input Data PILPRES',
    company: 'PDI Perjuangan — Fraksi PDIP Wali Kota Bekasi',
    description:
      'Memasukkan data rekapitulasi TPS dan melakukan pemeriksaan silang terhadap data menggunakan spreadsheet.',
    skills: ['Spreadsheet', 'Input Data', 'Pemeriksaan Data'],
  },
]

function Experience() {
  return (
    <section className="experience-section reveal" id="experience">
      <div className="experience-heading">
        <p className="section-label">02 / PERJALANAN PROFESIONAL</p>
        <h2>
          Pengalaman <span>kerja.</span>
        </h2>
        <p className="experience-intro">
          Pengalaman dalam administrasi, pengolahan data, dan
          pemeriksaan informasi di lingkungan kerja nyata.
        </p>
      </div>

      <div className="experience-list">
        {experiences.map((item, index) => (
          <article className="experience-card" key={item.role}>
            <div className="experience-index">
              0{index + 1}
            </div>

            <div className="experience-main">
              <div className="experience-meta">
                <span className="experience-period">
                  {item.period}
                </span>
                <span className="experience-type">
                  {item.type}
                </span>
              </div>

              <h3>{item.role}</h3>
              <p className="experience-company">{item.company}</p>
              <p className="experience-description">
                {item.description}
              </p>

              <div className="experience-skills">
                {item.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>

            <div className="experience-arrow" aria-hidden="true">
              ↗
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Experience
