import { motion, useScroll, useTransform } from 'framer-motion';
import { FaArrowDown, FaTools, FaIndustry, FaCog } from 'react-icons/fa';

export default function Hero() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    <section 
      className="hero min-h-screen bg-hero-pattern bg-cover bg-center flex justify-center items-center text-light relative overflow-hidden" 
      id="hero"
    >
      {/* Overlay con gradiente mejorado */}
      <div 
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-neutral-dark/95 via-accent/40 to-primary/30 z-[1]"
      ></div>
      
      {/* Efecto de partículas mejorado */}
      <div className="absolute inset-0 z-[1] opacity-40">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-accent rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      {/* Iconos flotantes */}
      <div className="absolute inset-0 z-[1] opacity-20">
        <motion.div
          className="absolute top-1/4 left-1/4"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <FaTools className="text-6xl text-accent" />
        </motion.div>
        <motion.div
          className="absolute bottom-1/4 right-1/4"
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          <FaIndustry className="text-6xl text-primary" />
        </motion.div>
        <motion.div
          className="absolute top-1/3 right-1/3"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          <FaCog className="text-6xl text-accent-alt" />
        </motion.div>
      </div>
      
      <motion.div 
        className="hero-content text-center max-w-4xl px-5 relative z-[2]"
        style={{ opacity, scale }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6 font-bold">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-accent to-primary">
              Soldadura & Estructuras
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent-alt to-accent">
              de Acero Inoxidable
            </span>
          </h1>
          
          <motion.p 
            className="text-xl md:text-2xl mb-10 text-shadow max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Precisión, resistencia y acabado de alto nivel en cada proyecto
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a 
              href="#contacto" 
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-white font-bold rounded-lg shadow-metal hover:shadow-metal-strong transition-all duration-300 transform hover:scale-105 text-lg"
            >
              Solicita tu cotización
              <FaArrowDown className="group-hover:translate-y-1 transition-transform duration-300" />
            </a>
            <a 
              href="#servicios" 
              className="group inline-flex items-center gap-3 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold rounded-lg border border-white/20 hover:border-white/40 transition-all duration-300 transform hover:scale-105 text-lg"
            >
              Nuestros Servicios
            </a>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Indicador de scroll mejorado */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-[2]"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm text-white/60">Scroll</span>
          <FaArrowDown className="text-white/60 text-xl" />
        </div>
      </motion.div>
    </section>
  )
}