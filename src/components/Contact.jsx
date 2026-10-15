function Contact() {
  return (
    <footer className="footer reveal" id="contact">
      <p className="section-label">KONTAK</p>

      <h2>Mari terhubung.</h2>

      <p>
        Terbuka untuk belajar, berkolaborasi, dan kesempatan baru
        di bidang teknologi.
      </p>

      <div className="contact-links">
        <a
          href="https://github.com/Lerigo12"
          target="_blank"
          rel="noreferrer"
        >
          GitHub ↗
        </a>
        <a
          href="https://www.instagram.com/nooppaal_/?hl=en"
          target="_blank"
          rel="noreferrer"
        >
          Instagram ↗
        </a>
        <a
          href="https://wa.me/+6289663452211"
          target="_blank"
          rel="noreferrer"
        >
          Whatsapp ↗
        </a>
      </div>

      <p className="copyright">
        © {new Date().getFullYear()} Achmad Naufal Ilhamdy
      </p>
    </footer>
  )
}

export default Contact