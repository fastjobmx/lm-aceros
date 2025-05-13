'use client'

import { useState, useEffect } from 'react'

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)
  
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }
    
    window.addEventListener('scroll', toggleVisibility, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])
  
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault()
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  
  return (
    <a 
      href="#" 
      className={`fixed bottom-8 right-8 w-12 h-12 bg-accent text-white rounded-full flex justify-center items-center text-xl cursor-pointer opacity-0 invisible transition-all duration-400 z-50 hover:bg-accent/90 hover:-translate-y-1 ${isVisible ? 'opacity-100 visible' : ''}`}
      aria-label="Volver arriba"
      onClick={scrollToTop}
    >
      <i className="fas fa-chevron-up"></i>
    </a>
  )
}