type MobileMenuProps = {
  isOpen: boolean
  closeMobileMenu: () => void
}

export default function MobileMenu({ isOpen, closeMobileMenu }: MobileMenuProps) {
  return (
    <div 
      className={`mobile-menu fixed top-0 left-0 w-full h-full bg-white transform transition-transform duration-300 ease-in-out z-[1001] ${isOpen ? 'translate-x-0' : '-translate-x-full'}`} 
      aria-label="Menú móvil"
      aria-hidden={!isOpen}
    >
      <ul className="text-center pt-20">
        <li className="my-5">
          <a 
            href="#servicios" 
            className="text-dark text-xl font-semibold"
            onClick={closeMobileMenu}
          >
            Servicios
          </a>
        </li>
        <li className="my-5">
          <a 
            href="#proyectos" 
            className="text-dark text-xl font-semibold"
            onClick={closeMobileMenu}
          >
            Proyectos
          </a>
        </li>
        <li className="my-5">
          <a 
            href="#sobre" 
            className="text-dark text-xl font-semibold"
            onClick={closeMobileMenu}
          >
            Nosotros
          </a>
        </li>
        <li className="my-5">
          <a 
            href="#contacto" 
            className="text-dark text-xl font-semibold"
            onClick={closeMobileMenu}
          >
            Contacto
          </a>
        </li>
      </ul>
      
      <div className="text-center mt-8">
        <a 
          href="#contacto" 
          className="btn cta inline-block"
          onClick={closeMobileMenu}
        >
          Contáctanos
        </a>
      </div>
    </div>
  )
}