'use client'

import { useState, useEffect } from 'react'

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true)
  
  useEffect(() => {
    // Preloader mejorado
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)
    
    return () => clearTimeout(timer)
  }, [])
  
  if (!isLoading) return null
  
  return (
    <div id="preloader" aria-label="Cargando sitio" className="fixed top-0 left-0 w-full h-full bg-neutral-dark z-[9999] flex justify-center items-center">
      <div className="spinner w-16 h-16 relative">
        <div className="absolute top-0 left-0 w-full h-full rounded-full border-[5px] border-transparent border-t-accent animate-spin"></div>
        <div className="absolute top-0 left-0 w-full h-full rounded-full border-[5px] border-transparent border-t-primary animate-[spin_1s_linear_infinite_reverse]"></div>
      </div>
    </div>
  )
}