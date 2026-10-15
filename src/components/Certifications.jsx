const certifications = [
  {
    name: 'database-system',
    issuer: 'IAII',
    date: '16 july 2023',
    category: 'Database',
    image: '/certificates/database-system.png',
  },
  {
    name: 'Uji Profisiensi ERP Odoo',
    issuer: 'PT. Jidoka System Indonesia',
    date: 'january 6-8, 2026',
    category: 'ERP',
    image: '/certificates/jidoka.png',
  },
  {
    name: 'Akselerasi Transformasi Digital Untuk Mendukung Ekonomi Kreatif',
    issuer: 'UBSI',
    date: '18 November 2022',
    image: '/certificates/ubsi.png',
    category: 'Seminar',
  },
  {
    name: 'Sertifikat Kompetensi',
    issuer: 'LSP UBSI',
    date: '15 September 2025',
    image: '/certificates/serkom.png',
    category: 'Analisis Program',
  },
]

function Certifications() {
  return (
    <section
      className="certifications-section reveal"
      id="certifications"
    >
      <div className="certifications-heading">
        <p className="section-label">03 / VALIDASI KOMPETENSI</p>
        <h2>
          Sertifikasi 
        </h2>
        <p className="certifications-intro">
          Pelatihan dan sertifikasi yang mendukung pengembangan
          kemampuan profesional saya.
        </p>
      </div>

      <div className="certifications-grid">
        {certifications.map((cert, index) => (
          <article className="certification-card" key={cert.name}>
            <div className="certification-top">
              <span className="certification-number">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="certification-category">
                {cert.category}
              </span>
            </div>

            <div className="certification-preview">
              {cert.image ? (
                <a
                  className="certification-image-link"
                  href={cert.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Buka gambar sertifikat ${cert.name}`}
                >
                  <img
                    className="certification-image"
                    src={cert.image}
                    alt={`Sertifikat ${cert.name}`}
                    loading="lazy"
                  />
                </a>
              ) : (
                <div className="certification-image-placeholder">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect x="3" y="4" width="18" height="16" rx="2" />
                    <circle cx="8.5" cy="9" r="1.5" />
                    <path d="m21 15-5-5L5 20" />
                  </svg>
                  <span>Tambahkan gambar sertifikat</span>
                </div>
              )}
            </div>

            <h3>{cert.name}</h3>
            <p className="certification-issuer">{cert.issuer}</p>
            <p className="certification-date">{cert.date}</p>

            {cert.credentialUrl ? (
              <a
                className="certification-link"
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Lihat sertifikat <span aria-hidden="true">↗</span>
              </a>
            ) : (
              <span className="certification-no-link">
              </span>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}

export default Certifications