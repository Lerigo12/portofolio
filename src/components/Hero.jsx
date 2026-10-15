import { useEffect, useRef } from 'react'
import gsap from 'gsap'

function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.profile-photo', {
        y: 40,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: 'power3.out',
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={heroRef} className="hero" id="home">
      <div className="hero-content">
        <div className="hero-text">
          <p className="hero-label">
            <span className="status-dot" />
            PORTOFOLIO · 2026
          </p>

          <h1 className="hero-title">
            <span>Merancang dan membangun</span>
            <br/>
            <span>pengalaman digital.</span>
          </h1>

          <p className="hero-description">
            Saya Achmad Naufal Ilhamdy, seorang pembelajar di bidang
            teknologi yang membangun aplikasi web untuk menyelesaikan
            masalah nyata.
          </p>

          <div className="hero-actions">
            <a className="button-primary" href="#projects">
              Lihat proyek <span>↘</span>
            </a>

            <a className="button-secondary" href="#about">
              Kenali saya
            </a>
          </div>
        </div>

        <div className="hero-image">
          <img
            className="profile-photo"
            src="/images/profile.jpg"
            alt="Foto profil Achmad Naufal Ilhamdy"
          />
        </div>
      </div>

      <div className="hero-bottom">
        <span>WEB DEVELOPMENT</span>
      </div>
    </section>
  )
}

export default Hero
