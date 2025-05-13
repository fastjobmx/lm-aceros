import { useEffect, useRef } from 'react'

export default function Statistics() {
  const statsRef = useRef<HTMLDivElement>(null)
  const animatedRef = useRef(false)
  
  // Datos de estadísticas
  const stats = [
    { count: 150, label: 'Proyectos Completados' },
    { count: 15, label: 'Años de Experiencia' },
    { count: 50, label: 'Clientes Satisfechos' },
    { count: 10, label: 'Certificaciones Alcanzadas' }
  ]
  
  useEffect(() => {
    const animateStats = () => {
      if (!statsRef.current || animatedRef.current) return
      
      const statElements = statsRef.current.querySelectorAll('.stat-number')
      
      statElements.forEach(statEl => {
        const el = statEl as HTMLElement
        const target = parseInt(el.getAttribute('data-count') || '0', 10)
        const duration = 2000 // ms
        const frameDuration = 1000 / 60 // 60fps
        const totalFrames = Math.round(duration / frameDuration)
        const easeOutQuad = (t: number) => t * (2 - t)
        
        let frame = 0
        let currentCount = 0
        
        const counter = setInterval(() => {
          frame++
          
          const progress = easeOutQuad(frame / totalFrames)
          currentCount = Math.round(target * progress)
          
          if (parseInt(el.innerText, 10) !== currentCount) {
            el.innerText = currentCount.toString()
          }
          
          if (frame === totalFrames) {
            clearInterval(counter)
          }
        }, frameDuration)
      })
      
      animatedRef.current = true
    }
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateStats()
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.1 })
    
    if (statsRef.current) {
      observer.observe(statsRef.current)
    }
    
    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current)
      }
    }
  }, [])
  
  return (
    <section id="estadisticas" className="estadisticas py-14 sm:py-20 bg-neutral-dark text-white text-center relative overflow-hidden">
      {/* Gradientes decorativos */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-gradient-to-br from-accent/30 to-primary/10 rounded-full blur-2xl z-0" />
      <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-gradient-to-tl from-primary/30 to-accent/10 rounded-full blur-2xl z-0" />
      <div 
        className="container mx-auto px-2 sm:px-4 relative z-10"
        ref={statsRef}
      >
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-10 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="estadistica relative glass-effect card-shine hover-lift p-6 sm:p-8 rounded-2xl shadow-xl flex flex-col items-center justify-center transition-all duration-300"
            >
              <div className="stat-number text-4xl xs:text-5xl sm:text-6xl font-extrabold mb-2 text-gradient text-shadow animate-float" data-count={stat.count}>0</div>
              <div className="stat-text text-base xs:text-lg sm:text-xl font-semibold text-neutral-pale tracking-wide text-center">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}