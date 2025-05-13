'use client'

import { useState } from 'react'
import ServiceCard from './service-card'
import ServiceModal from './service-modal'

const services = [
  {
    id: 'soldadura',
    icon: 'fas fa-fire',
    title: 'Soldadura Especializada',
    description: 'Soldadura TIG, MIG y por puntos con acabados de alta calidad.',
    details: [
      'Soldadura TIG para acero inoxidable',
      'Soldadura MIG para estructuras',
      'Soldadura por puntos para láminas',
      'Acabados pulidos y satinados'
    ]
  },
  {
    id: 'estructuras',
    icon: 'fas fa-building',
    title: 'Estructuras Metálicas',
    description: 'Diseño y fabricación de estructuras para todo tipo de proyectos.',
    details: [
      'Escaleras y barandas',
      'Mezanines y plataformas',
      'Puertas y ventanas',
      'Estructuras industriales'
    ]
  },
  {
    id: 'mantenimiento',
    icon: 'fas fa-tools',
    title: 'Mantenimiento Industrial',
    description: 'Servicio de mantenimiento preventivo y correctivo.',
    details: [
      'Reparación de equipos',
      'Mantenimiento preventivo',
      'Optimización de sistemas',
      'Asesoría técnica'
    ]
  },
  {
    id: 'asesoria',
    icon: 'fas fa-comments',
    title: 'Asesoría y Diseño',
    description: 'Consultoría especializada y diseño de proyectos a medida.',
    details: [
      'Diseño de proyectos',
      'Consultoría técnica',
      'Presupuestos detallados',
      'Planos y renders'
    ]
  }
]

export default function Services() {
  const [activeModal, setActiveModal] = useState<string | null>(null)

  const openModal = (serviceId: string) => {
    setActiveModal(serviceId)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setActiveModal(null)
    document.body.style.overflow = ''
  }

  return (
    <section 
      id="servicios" 
      className="servicios py-24 bg-neutral-medium relative overflow-hidden" 
      aria-labelledby="servicios-title"
    >
      {/* Elementos decorativos */}
      <div className="absolute top-[-100px] right-[-100px] w-[300px] h-[300px] bg-primary opacity-5 rounded-full"></div>
      <div className="absolute bottom-[-100px] left-[-100px] w-[300px] h-[300px] bg-accent opacity-5 rounded-full"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2760%27%20height%3D%2760%27%20viewBox%3D%270%200%2060%2060%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%3E%3Cg%20fill%3D%27none%27%20fill-rule%3D%27evenodd%27%3E%3Cg%20fill%3D%27%23A3A9AD%27%20fill-opacity%3D%270.05%27%3E%3Cpath%20d%3D%27M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%27%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-80 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <h2 
            id="servicios-title" 
            className="text-4xl md:text-5xl mb-6 text-light relative inline-block"
          >
            Qué Hacemos
            <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 bg-accent block"></span>
          </h2>
          <p className="text-neutral-pale text-lg mt-8">Ofrecemos soluciones integrales en acero inoxidable con los más altos estándares de calidad y acabados impecables.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              openModal={() => openModal(service.id)}
              aosDelay={(index + 1) * 100}
            />
          ))}
        </div>
      </div>

      {services.map(service => (
        <ServiceModal
          key={service.id}
          service={service}
          isOpen={activeModal === service.id}
          onClose={closeModal}
        />
      ))}
    </section>
  )
}