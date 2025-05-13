'use client'

import { motion, useAnimation } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import { useEffect } from 'react'

export default function WhatsAppButton() {
  const controls = useAnimation()

  useEffect(() => {
    const interval = setInterval(() => {
      controls.start({
        scale: [1, 1.2, 1],
        rotate: [0, 5, -5, 0],
        transition: {
          duration: 2,
          ease: "easeInOut"
        }
      })
    }, 5000)

    return () => clearInterval(interval)
  }, [controls])

  return (
    <motion.a
      href="https://wa.me/573026836359"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 group"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative">
        {/* Efecto de pulso múltiple */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute inset-0 bg-accent rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
          />
        ))}
        
        {/* Botón principal con efecto de brillo */}
        <motion.div 
          className="relative bg-gradient-to-r from-accent to-accent-alt p-4 rounded-full shadow-lg 
            hover:shadow-xl transition-all duration-300 group-hover:shadow-accent/50 overflow-hidden"
          animate={controls}
        >
          {/* Efecto de brillo */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
            translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
          
          <FaWhatsapp className="text-white text-2xl relative z-10" />
        </motion.div>

        {/* Tooltip mejorado */}
        <motion.div 
          className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-neutral-dark/90 backdrop-blur-sm 
            text-white px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 
            pointer-events-none shadow-lg border border-accent/20"
          initial={{ x: 20, opacity: 0 }}
          whileHover={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="relative">
            <span className="text-sm whitespace-nowrap font-medium">¡Contáctanos!</span>
            <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-0 h-0 
              border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent 
              border-l-[8px] border-l-neutral-dark/90" />
          </div>
        </motion.div>

        {/* Contador de mensajes */}
        <motion.div 
          className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold 
            w-5 h-5 rounded-full flex items-center justify-center"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1 }}
        >
          3
        </motion.div>
      </div>
    </motion.a>
  )
}