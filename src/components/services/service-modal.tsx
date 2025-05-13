type Service = {
  id: string
  icon: string
  title: string
  description: string
  details: string[]
}

type ServiceModalProps = {
  service: Service
  isOpen: boolean
  onClose: () => void
}

export default function ServiceModal({ service, isOpen, onClose }: ServiceModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 z-[1000] flex items-center justify-center px-4 backdrop-blur-sm">
      <div 
        className="bg-neutral-light rounded-xl p-8 max-w-xl w-full relative animate-[fadeIn_0.3s_ease-in-out] border border-accent/20 shadow-2xl"
        role="dialog"
        aria-labelledby={`modal-${service.id}-title`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4 text-neutral-pale hover:text-accent transition-colors w-8 h-8 flex items-center justify-center rounded-full hover:bg-accent/10"
          onClick={onClose}
          aria-label="Cerrar modal"
        >
          <i className="fas fa-times text-xl"></i>
        </button>

        <div className="text-center mb-8">
          <div className="inline-flex justify-center items-center w-20 h-20 rounded-full bg-accent/10 mb-6">
            <i className={`${service.icon} text-5xl text-accent`}></i>
          </div>
          <h3 id={`modal-${service.id}-title`} className="text-3xl font-bold mb-4">{service.title}</h3>
          <p className="text-neutral-pale max-w-md mx-auto">{service.description}</p>
        </div>

        <div className="mt-8 bg-neutral-medium/30 p-6 rounded-lg border border-accent/10">
          <h4 className="text-xl font-semibold mb-6 text-light relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-0.5 after:bg-accent">Servicios incluidos:</h4>
          <ul className="space-y-4 mt-4">
            {service.details.map((detail, index) => (
              <li key={index} className="flex items-start group transition-all duration-300 hover:translate-x-1">
                <i className="fas fa-check-circle text-accent mt-1 mr-3 group-hover:scale-110 transition-transform duration-300"></i>
                <span className="text-neutral-pale">{detail}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 text-center">
          <a 
            href="#contacto" 
            className="btn principal inline-block"
            onClick={() => {
              onClose()
              document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Solicitar este servicio
          </a>
        </div>
      </div>
    </div>
  )
}