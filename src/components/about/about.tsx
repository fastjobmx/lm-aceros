import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="sobre" className="sobre py-14 sm:py-24 bg-neutral-medium relative overflow-hidden" aria-labelledby="sobre-title">
      {/* Gradientes decorativos */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-gradient-to-br from-accent/30 to-primary/10 rounded-full blur-2xl z-0" />
      <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-gradient-to-tl from-primary/30 to-accent/10 rounded-full blur-2xl z-0" />
      <div className="container mx-auto px-2 sm:px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
          <motion.div 
            className="sobre-img relative rounded-2xl overflow-hidden shadow-xl card-shine glass-effect hover-lift"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img 
              src="/images/about/about-worker.jpg" 
              alt="Trabajador utilizando careta protectora en taller de acero inoxidable"
              className="w-full h-auto transition-transform duration-500 ease-out group-hover:scale-105 img-hover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute top-4 left-4 right-4 bottom-4 border-2 border-white/30 opacity-0 z-[1] transition-all duration-300 ease-out group-hover:opacity-60 group-hover:top-8 group-hover:left-8 group-hover:right-8 group-hover:bottom-8"></div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              id="sobre-title"
              className="text-2xl xs:text-3xl sm:text-4xl mb-6 text-light relative inline-block text-gradient text-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
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
              <p className="text-base xs:text-lg sm:text-xl leading-relaxed text-neutral-pale mb-4">
                Con más de 15 años de experiencia, Leider Morales lidera LM – Aceros en Pereira, Colombia. Certificado en soldadura industrial y con formación especializada, se ha consolidado como un referente en proyectos de alta exigencia.
              </p>
              <p className="text-base xs:text-lg sm:text-xl leading-relaxed text-neutral-pale mb-4">
                Nuestro equipo de profesionales está comprometido con la excelencia, garantizando calidad, seguridad y acabados impecables en cada trabajo. Utilizamos tecnología de punta y materiales de primera calidad para asegurar resultados duraderos.
              </p>
              <p className="text-base xs:text-lg sm:text-xl leading-relaxed text-neutral-pale">
                En LM - Aceros creemos que cada proyecto merece atención personalizada y soluciones a medida, adaptándonos a las necesidades específicas de cada cliente.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}