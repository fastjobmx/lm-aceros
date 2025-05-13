'use client'

import { useEffect, useRef } from 'react'

export default function WhatsappButton() {
  const buttonRef = useRef<HTMLAnchorElement>(null)
  
  useEffect(() => {
    const button = buttonRef.current
    if (!button) return
    
    const handleMouseMove = (e: MouseEvent) => {
      const rect = button.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      
      const centerX = rect.width / 2
      const centerY = rect.height / 2
      const deltaX = (x - centerX) / centerX
      const deltaY = (y - centerY) / centerY
      
      button.style.transform = `scale(1.1) perspective(500px) rotateX(${deltaY * 5}deg) rotateY(${deltaX * -5}deg)`
      
      const icon = button.querySelector('i')
      if (icon) {
        icon.style.textShadow = `${deltaX * -5}px ${deltaY * -5}px 5px rgba(255,255,255,0.5)`
      }
    }
    
    const handleMouseLeave = () => {
      button.style.transform = 'scale(1)'
      const icon = button.querySelector('i')
      if (icon) {
        icon.style.textShadow = 'none'
      }
    }
    
    const handleMouseDown = () => {
      button.style.transform = 'scale(0.95)'
    }
    
    const handleMouseUp = () => {
      button.style.transform = 'scale(1.1)'
    }
    
    button.addEventListener('mousemove', handleMouseMove)
    button.addEventListener('mouseleave', handleMouseLeave)
    button.addEventListener('mousedown', handleMouseDown)
    button.addEventListener('mouseup', handleMouseUp)
    
    return () => {
      button.removeEventListener('mousemove', handleMouseMove)
      button.removeEventListener('mouseleave', handleMouseLeave)
      button.removeEventListener('mousedown', handleMouseDown)
      button.removeEventListener('mouseup', handleMouseUp)
    }
  }, [])
  
  return (
    <a
      ref={buttonRef}
      href="https://wa.me/573122456789?text=Hola,%20me%20gustaría%20obtener%20información%20sobre%20sus%20servicios"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 right-8 w-16 h-16 bg-[#25D366] text-white rounded-full flex justify-center items-center text-3xl shadow-metal z-50 transition-all duration-300 hover:shadow-metal-strong"
      aria-label="Contactar por WhatsApp"
    >
      <i className="fab fa-whatsapp"></i>
      
      <div className="absolute -top-2 -right-2 w-5 h-5 bg-accent rounded-full animate-pulse-slow"></div>
      
      <div className="absolute w-full h-full rounded-full bg-[#25D366] animate-ping opacity-25"></div>
    </a>
  )
}