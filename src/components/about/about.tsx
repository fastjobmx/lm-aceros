import { motion } from 'framer-motion'
import { useScroll, useTransform } from 'framer-motion'

export default function About() {
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1])
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1])

  return (
    <section id="sobre" className="sobre py-24 bg-neutral-medium relative overflow-hidden" aria-labelledby="sobre-title">
      {/* Elementos decorativos mejorados */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-100px] right-[-100px] w-[300px] h-[300px] bg-primary opacity-5 rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-[-100px] left-[-100px] w-[300px] h-[300px] bg-accent opacity-5 rounded-full animate-pulse-slow"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-accent/10 to-primary/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-[1]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          <motion.div 
            className="sobre-img relative rounded-xl overflow-hidden shadow-lg group"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img 
              src="/images/about/about-worker.jpg" 
              alt="Trabajador utilizando careta protectora en taller de acero inoxidable"
              className="w-full h-auto transition-transform duration-500 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute top-5 left-5 right-5 bottom-5 border-2 border-white opacity-0 z-[1] transition-all duration-300 ease-out 
              group-hover:opacity-50 group-hover:top-8 group-hover:left-8 group-hover:right-8 group-hover:bottom-8"></div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              id="sobre-title"
              className="text-3xl md:text-4xl mb-8 text-light relative inline-block"
              style={{ opacity, scale }}
            >
              Acerca de Nosotros
              <span className="absolute -bottom-4 left-0 w-20 h-1 bg-gradient-to-r from-accent to-accent-alt"></span>
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-base leading-relaxed text-neutral-pale mb-4">
                Con más de 15 años de experiencia, Leider Morales lidera LM – Aceros en Pereira, Colombia. Certificado en soldadura industrial y con formación especializada, se ha consolidado como un referente en proyectos de alta exigencia.
              </p>
              <p className="text-base leading-relaxed text-neutral-pale mb-4">
                Nuestro equipo de profesionales está comprometido con la excelencia, garantizando calidad, seguridad y acabados impecables en cada trabajo. Utilizamos tecnología de punta y materiales de primera calidad para asegurar resultados duraderos.
              </p>
              <p className="text-base leading-relaxed text-neutral-pale">
                En LM - Aceros creemos que cada proyecto merece atención personalizada y soluciones a medida, adaptándonos a las necesidades específicas de cada cliente.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}