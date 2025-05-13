import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSearchPlus, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// Tipo para los proyectos
type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  location?: string;
  year?: string;
};

export default function ProjectsCarousel3D() {
  // Datos de proyectos con las imágenes copiadas
  const projects: Project[] = [
    {
      id: 1,
      title: 'Estructura Metálica Industrial',
      description: 'Diseño y construcción de estructura metálica para nave industrial',
      image: '/images/projects/project-estructura-metalica-01.png',
      location: 'Pereira',
      year: '2024'
    },
    {
      id: 2,
      title: 'Estructura Metálica A-Frame',
      description: 'Construcción de estructura metálica con diseño a dos aguas en terreno montañoso',
      image: '/images/projects/project-taller-01.png',
      location: 'Zona Montañosa',
      year: '2023'
    },
    {
      id: 3,
      title: 'Estructura Metálica para Terraza',
      description: 'Instalación de estructura metálica rectangular para pérgola exterior',
      image: '/images/projects/project-taller-02.png',
      location: 'Residencia Privada',
      year: '2023'
    },
    {
      id: 4,
      title: 'Escalera Metálica',
      description: 'Diseño y fabricación de escalera metálica para edificio residencial',
      image: '/images/projects/proyecto-taller-04.png',
      location: 'Manizales',
      year: '2022'
    },
    {
      id: 5,
      title: 'Baranda de Acero',
      description: 'Instalación de baranda de acero inoxidable en centro comercial',
      image: '/images/projects/proyecto-taller-05.png',
      location: 'Armenia',
      year: '2023'
    },
    {
      id: 6,
      title: 'Puente Peatonal',
      description: 'Construcción de puente peatonal con estructura metálica reforzada',
      image: '/images/projects/proyecto-taller-06.png',
      location: 'Pereira',
      year: '2021'
    },
    {
      id: 7,
      title: 'Cubierta Industrial',
      description: 'Montaje de cubierta metálica para nave industrial',
      image: '/images/projects/proyecto-taller-07.png',
      location: 'Cali',
      year: '2022'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextProject = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevProject = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  // Calcular índices para el efecto 3D
  const getProjectIndex = (offset: number) => {
    return (currentIndex + offset + projects.length) % projects.length;
  };

  return (
    <section id="proyectos" className="proyectos py-24 bg-neutral-dark relative overflow-hidden" aria-labelledby="proyectos-title">
      {/* Gradientes decorativos para efecto visual */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-br from-accent/30 to-primary/10 rounded-full blur-3xl z-0" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-gradient-to-tl from-primary/30 to-accent/10 rounded-full blur-3xl z-0" />
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 
          id="proyectos-title"
          className="text-3xl md:text-4xl mb-16 text-light text-center relative after:content-[''] after:absolute after:-bottom-4 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-accent"
        >
          Nuestros Proyectos
        </h2>
        
        {/* Carrusel 3D */}
        <div className="max-w-6xl mx-auto relative h-[500px] flex items-center justify-center">
          {/* Proyectos en carrusel */}
          {[-1, 0, 1].map((offset) => {
            const index = getProjectIndex(offset);
            const project = projects[index];
            
            return (
              <motion.div
                key={project.id}
                className={`absolute w-full max-w-md rounded-xl overflow-hidden shadow-2xl transition-all duration-500 border border-white/20 ${offset === 0 ? 'z-30' : 'z-10'}`}
                initial={{ opacity: 0, x: offset * 100, scale: offset === 0 ? 1 : 0.8, rotateY: offset * 15 }}
                animate={{ 
                  opacity: offset === 0 ? 1 : 0.7,
                  x: offset * 300, 
                  scale: offset === 0 ? 1 : 0.8,
                  rotateY: offset * 15,
                  filter: offset === 0 ? 'brightness(1)' : 'brightness(0.7)'
                }}
                transition={{ duration: 0.5 }}
                style={{ perspective: '1000px' }}
              >
                <div className="relative aspect-video bg-neutral-medium group">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-72 object-cover transition-all duration-500 group-hover:scale-105" 
                  />
                  
                  {/* Overlay glassmorphism animado */}
                  <motion.div
                    className="absolute inset-0 bg-black/50 backdrop-blur-sm flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 p-6"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-lg text-center">{project.title}</h3>
                    <p className="text-neutral-pale mb-4 text-center max-w-xs drop-shadow-lg">{project.description}</p>
                    {offset === 0 && (
                      <motion.button
                        className="btn px-6 py-2 rounded-full text-white bg-accent hover:bg-accent/80 shadow-lg flex items-center gap-2 transition-all"
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setSelectedProject(project)}
                      >
                        <FaSearchPlus className="text-lg" /> Ver más
                      </motion.button>
                    )}
                  </motion.div>
                  
                  <div className="p-5 w-full z-0">
                    <span className="block text-xs text-accent mb-1 text-center">
                      {project.location}, {project.year}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
          
          {/* Botones de navegación */}
          <button 
            onClick={prevProject}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-accent hover:bg-accent/80 text-white w-12 h-12 rounded-full flex items-center justify-center transition-colors z-40"
            aria-label="Proyecto anterior"
            disabled={isAnimating}
          >
            <FaChevronLeft className="text-lg" />
          </button>
          
          <button 
            onClick={nextProject}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-accent hover:bg-accent/80 text-white w-12 h-12 rounded-full flex items-center justify-center transition-colors z-40"
            aria-label="Proyecto siguiente"
            disabled={isAnimating}
          >
            <FaChevronRight className="text-lg" />
          </button>
        </div>
        
        {/* Indicadores */}
        <div className="flex justify-center mt-8 space-x-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (!isAnimating) {
                  setIsAnimating(true);
                  setCurrentIndex(index);
                  setTimeout(() => setIsAnimating(false), 500);
                }
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-accent w-6' : 'bg-neutral-pale'}`}
              aria-label={`Ver proyecto ${index + 1}`}
              disabled={isAnimating}
            />
          ))}
        </div>
      </div>
      
      {/* Modal de detalles */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 max-w-lg w-full relative shadow-2xl border border-white/30"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-3 right-3 text-2xl text-white hover:text-accent"
                onClick={() => setSelectedProject(null)}
                aria-label="Cerrar"
              >
                &times;
              </button>
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title} 
                className="w-full h-56 object-cover rounded-lg mb-4 shadow-lg" 
              />
              <h3 className="text-2xl font-bold text-white mb-2 text-center">{selectedProject.title}</h3>
              <span className="block text-xs text-accent mb-2 text-center">
                {selectedProject.location}, {selectedProject.year}
              </span>
              <p className="text-neutral-pale mb-4 text-center">{selectedProject.description}</p>
              <motion.button
                className="btn px-6 py-2 rounded-full text-white bg-accent hover:bg-accent/80 shadow-lg transition-all mt-2 mx-auto block"
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedProject(null)}
              >
                Cerrar
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}