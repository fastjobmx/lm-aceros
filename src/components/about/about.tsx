export default function About() {
  return (
    <section id="sobre" className="sobre py-24 bg-neutral-medium relative overflow-hidden" aria-labelledby="sobre-title">
      <div className="absolute top-[-100px] right-[-100px] w-[300px] h-[300px] bg-primary opacity-5 rounded-full"></div>
      <div className="absolute bottom-[-100px] left-[-100px] w-[300px] h-[300px] bg-accent opacity-5 rounded-full"></div>
      
      <div className="container mx-auto px-4 relative z-[1]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          <div 
            className="sobre-img relative rounded-xl overflow-hidden shadow-lg"
          >
            <img 
              src="/images/about/about-worker.jpg" 
              alt="Trabajador utilizando careta protectora en taller de acero inoxidable"
              className="w-full h-auto transition-transform duration-500 ease-out hover:scale-105"
            />
            <div className="absolute top-5 left-5 right-5 bottom-5 border-2 border-white opacity-0 z-[1] transition-all duration-300 ease-out 
              group-hover:opacity-50 group-hover:top-8 group-hover:left-8 group-hover:right-8 group-hover:bottom-8"></div>
          </div>
          
          <div className="sobre-info">
            <h2 
              id="sobre-title"
              className="text-3xl md:text-4xl mb-8 text-light relative after:content-[''] after:absolute after:-bottom-4 after:left-0 after:w-20 after:h-1 after:bg-accent"
            >
              Acerca de Nosotros
            </h2>
            <p className="text-base leading-relaxed text-neutral-pale mb-4">
              Con más de 15 años de experiencia, Leider Morales lidera LM – Aceros en Pereira, Colombia. Certificado en soldadura industrial y con formación especializada, se ha consolidado como un referente en proyectos de alta exigencia.
            </p>
            <p className="text-base leading-relaxed text-neutral-pale mb-4">
              Nuestro equipo de profesionales está comprometido con la excelencia, garantizando calidad, seguridad y acabados impecables en cada trabajo. Utilizamos tecnología de punta y materiales de primera calidad para asegurar resultados duraderos.
            </p>
            <p className="text-base leading-relaxed text-neutral-pale">
              En LM - Aceros creemos que cada proyecto merece atención personalizada y soluciones a medida, adaptándonos a las necesidades específicas de cada cliente.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}