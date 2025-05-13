'use client'

import { useState, useEffect } from 'react'
import Navigation from './navigation'
import MobileMenu from './mobile-menu'
import Hero from './hero'

export default function Header() {
  const [isSticky, setIsSticky] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true)
      } else {
        setIsSticky(false)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
    if (!isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }

  return (
    <header className="header relative">
      <Navigation 
        isSticky={isSticky} 
        isMobileMenuOpen={isMobileMenuOpen} 
        toggleMobileMenu={toggleMobileMenu} 
      />
      
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        closeMobileMenu={() => {
          setIsMobileMenuOpen(false)
          document.body.style.overflow = ''
        }} 
      />
      
      <Hero />
    </header>
  )
}