import { useState } from 'react'
import gsap from 'gsap'

function Navbar({ darkMode, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="navbar">
      <a
        className="brand"
        href="#home"
        aria-label="Beranda"
        onClick={closeMenu}
      >
        Achmad<span>.</span>
      </a>

      <button
        className={`nav-toggle ${menuOpen ? 'active' : ''}`}
        type="button"
        aria-label={menuOpen ? 'Tutup menu' : 'Buka menu'}
        aria-expanded={menuOpen}
        aria-controls="nav-menu"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div
        className={`nav-menu ${menuOpen ? 'open' : ''}`}
        id="nav-menu"
      >
        <nav className="nav-links" aria-label="Navigasi utama">
          <a href="#about" onClick={closeMenu}>Tentang</a>
          <a href="#experience" onClick={closeMenu}>Pengalaman</a>
          <a href="#certifications" onClick={closeMenu}>sertifikat</a>
          <a href="#skills" onClick={closeMenu}>Keahlian</a>
          <a href="#projects" onClick={closeMenu}>Proyek</a>
        </nav>

        <button
          className="theme-toggle"
          type="button"
          onClick={onToggleTheme}
          aria-label={`Aktifkan tema ${darkMode ? 'terang' : 'gelap'}`}
          aria-pressed={darkMode}
        >
          <span className="theme-toggle-icon" aria-hidden="true">
            {darkMode ? '☀' : '☾'}
          </span>
          <span>{darkMode ? 'Terang' : 'Gelap'}</span>
        </button>

        <a
          className="nav-cta"
          href="#contact"
          onClick={closeMenu}
        >
          Hubungi saya <span aria-hidden="true">↗</span>
        </a>
      </div>
    </header>
  )
}


export default Navbar