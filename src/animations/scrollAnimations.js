
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function initScrollAnimations() {
  const elements = gsap.utils.toArray('.reveal')

  const animations = elements.map((element) =>
    gsap.fromTo(
      element,
      {
        y: 35,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 88%',
          once: true,
        },
      },
    ),
  )

  return () => {
    animations.forEach((animation) => {
      animation.scrollTrigger?.kill()
      animation.kill()
    })
  }
}
