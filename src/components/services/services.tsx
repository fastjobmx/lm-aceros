'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useScroll, useTransform } from 'framer-motion'
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
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1])
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1])

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
      {/* Elementos decorativos mejorados */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-100px] right-[-100px] w-[300px] h-[300px] bg-primary opacity-5 rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-[-100px] left-[-100px] w-[300px] h-[300px] bg-accent opacity-5 rounded-full animate-pulse-slow"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-accent/10 to-primary/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-[1]">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            id="servicios-title" 
            className="text-4xl md:text-5xl mb-6 text-light relative inline-block"
            style={{ opacity, scale }}
          >
            Qué Hacemos
            <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-accent to-accent-alt"></span>
          </motion.h2>
          <motion.p 
            className="text-neutral-pale text-lg mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Ofrecemos soluciones integrales en acero inoxidable con los más altos estándares de calidad y acabados impecables.
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              openModal={() => openModal(service.id)}
              aosDelay={(index + 1) * 100}
            />
          ))}
        </motion.div>
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