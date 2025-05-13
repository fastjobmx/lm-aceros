// No se necesita importar Image desde react-router-dom

type NavigationProps = {
  isSticky: boolean
  isMobileMenuOpen: boolean
  toggleMobileMenu: () => void
}

export default function Navigation({ isSticky, isMobileMenuOpen, toggleMobileMenu }: NavigationProps) {
  return (
    <nav 
      className={`nav fixed top-0 left-0 w-full py-4 z-[1000] flex justify-between items-center transition-all duration-300 ${isSticky ? 'sticky' : ''}`}
      role="navigation" 
      aria-label="Menú principal"
    >
      <div className="logo ml-10">
        <img 
          src="/images/logo.jpg" 
          alt="Logo LM Aceros" 
          className="logo-img"
          width={120}
          height={56}
        />
        <span className="logo-text sr-only">Logo LM Aceros</span>
      </div>
      
      <ul className="nav-links hidden md:flex">
        <li className="mx-4"><a href="#servicios" className="font-semibold relative hover:after:w-full after:content-[''] after:absolute after:w-0 after:h-0.5 after:-bottom-1.5 after:left-0 after:bg-accent after:transition-all after:duration-300">Servicios</a></li>
        <li className="mx-4"><a href="#proyectos" className="font-semibold relative hover:after:w-full after:content-[''] after:absolute after:w-0 after:h-0.5 after:-bottom-1.5 after:left-0 after:bg-accent after:transition-all after:duration-300">Proyectos</a></li>
        <li className="mx-4"><a href="#sobre" className="font-semibold relative hover:after:w-full after:content-[''] after:absolute after:w-0 after:h-0.5 after:-bottom-1.5 after:left-0 after:bg-accent after:transition-all after:duration-300">Nosotros</a></li>
        <li className="mx-4"><a href="#contacto" className="font-semibold relative hover:after:w-full after:content-[''] after:absolute after:w-0 after:h-0.5 after:-bottom-1.5 after:left-0 after:bg-accent after:transition-all after:duration-300">Contacto</a></li>
      </ul>
      
      <a href="#contacto" className="btn cta hidden md:inline-block mr-10">Contáctanos</a>
      
      <button 
        className={`hamburger md:hidden mr-10 bg-transparent border-none z-[1002] ${isMobileMenuOpen ? 'active' : ''}`} 
        aria-label="Menú móvil" 
        aria-expanded={isMobileMenuOpen}
        onClick={toggleMobileMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  )
}