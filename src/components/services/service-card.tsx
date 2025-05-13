type Service = {
  id: string
  icon: string
  title: string
  description: string
  details: string[]
}

type ServiceCardProps = {
  service: Service
  openModal: () => void
  aosDelay: number
}

export default function ServiceCard({ service, openModal, aosDelay }: ServiceCardProps) {
  const { icon, title, description } = service
  
  return (
    <div 
      className="servicio-card bg-neutral-light p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group border border-transparent hover:border-accent/10 overflow-hidden relative" 
      data-aos="fade-up" 
      data-aos-delay={aosDelay}
    >
      {/* Elemento decorativo de fondo */}
      <div className="absolute -right-10 -top-10 w-40 h-40 bg-accent/5 rounded-full transition-all duration-300 group-hover:bg-accent/10"></div>
      
      <div className="relative z-10">
        <div className="flex justify-center items-center w-16 h-16 rounded-full bg-neutral-medium mb-6 mx-auto group-hover:bg-accent/10 transition-all duration-300">
          <i className={`icon ${icon} text-3xl text-primary transition-all duration-300 group-hover:text-accent group-hover:scale-110`} aria-hidden="true"></i>
        </div>
        
        <h3 className="mb-4 text-xl font-bold text-center">{title}</h3>
        <p className="text-neutral-pale mb-6 text-center">{description}</p>
        
        <div className="text-center">
          <button 
            className="ver-mas inline-block text-accent font-semibold relative pb-1.5 cursor-pointer 
                     after:content-[''] after:absolute after:w-full after:h-0.5 after:bottom-0 after:left-0 
                     after:bg-accent after:scale-x-0 after:origin-right after:transition-transform 
                     after:duration-300 hover:after:scale-x-100 hover:after:origin-left"
            onClick={openModal}
            aria-label={`Ver más sobre ${title}`}
          >
            Ver más
          </button>
        </div>
      </div>
    </div>
  )
}