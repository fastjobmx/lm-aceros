import { useEffect, useRef } from 'react'

export default function Statistics() {
  const statsRef = useRef<HTMLDivElement>(null)
  const animatedRef = useRef(false)
  
  // Datos de estadísticas
  const stats = [
    { count: 150, label: 'Proyectos Completados' },
    { count: 15, label: 'Años de Experiencia' },
    { count: 50, label: 'Clientes Satisfechos' },
    { count: 10, label: 'Premios Recibidos' }
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
    <section id="estadisticas" className="estadisticas py-20 bg-neutral-dark text-white text-center">
      <div 
        className="container mx-auto px-4"
        ref={statsRef}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="estadistica relative"
            >
              <div className="stat-number text-5xl font-bold mb-2 text-accent" data-count={stat.count}>0</div>
              <div className="stat-text text-lg font-semibold">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}