import { useState, useEffect } from 'react'
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin, Clock, ChevronUp, MessageCircle, Send } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const [isVisible, setIsVisible] = useState(false)
  const [email, setEmail] = useState('')
  const [subscribeStatus, setSubscribeStatus] = useState<null | 'error' | 'success'>(null)

  // Animación de entrada para elementos del footer
  useEffect(() => {
    setIsVisible(true)
    
    // Detector para elementos que aparecen con scroll
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll')
      elements.forEach(el => {
        const top = el.getBoundingClientRect().top
        const windowHeight = window.innerHeight
        if (top < windowHeight - 100) {
          el.classList.add('animate-in')
        }
      })
    }
    
    window.addEventListener('scroll', handleScroll)
    handleScroll() // Verificar elementos visibles inicialmente
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Scroll hacia arriba
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  // Manejar suscripción al newsletter
  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!email || !email.includes('@')) {
      setSubscribeStatus('error')
      return
    }
    // Aquí normalmente enviarías la información a tu backend
    setSubscribeStatus('success')
    setTimeout(() => {
      setSubscribeStatus(null)
      setEmail('')
    }, 3000)
  }

  return (
    <footer className="relative bg-gradient-to-br from-neutral-dark via-neutral-dark to-black text-white overflow-hidden" role="contentinfo">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-accent blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-accent-alt blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-accent blur-3xl opacity-20"></div>
      </div>
      
      {/* Botón para subir */}
      <button 
        onClick={scrollToTop}
        className="absolute right-8 -top-6 bg-accent hover:bg-accent-alt text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl z-10 group"
        aria-label="Volver arriba"
      >
        <ChevronUp className="group-hover:animate-bounce" size={24} />
      </button>

      <div className={`container mx-auto px-4 pt-20 pb-10 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        {/* Grid principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Columna 1: Logo e información */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-accent to-accent-alt bg-clip-text text-transparent inline-block">LM - Aceros</h3>
            </div>
            
            <p className="text-neutral-pale">
              Expertos en estructuras metálicas, acero inoxidable y soluciones personalizadas para proyectos residenciales, comerciales e industriales.
            </p>
            
            <div className="flex flex-col space-y-3 text-neutral-pale">
              <div className="flex items-center space-x-3 group">
                <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center group-hover:bg-accent transition-all duration-300">
                  <MapPin size={16} className="text-accent group-hover:text-white" />
                </div>
                <span className="group-hover:text-accent transition-colors">Calle 123 #45-67, Pereira, Colombia</span>
              </div>
              
              <div className="flex items-center space-x-3 group">
                <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center group-hover:bg-accent transition-all duration-300">
                  <Phone size={16} className="text-accent group-hover:text-white" />
                </div>
                <span className="group-hover:text-accent transition-colors">+57 302 683 6359</span>
              </div>
              
              <div className="flex items-center space-x-3 group">
                <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center group-hover:bg-accent transition-all duration-300">
                  <Mail size={16} className="text-accent group-hover:text-white" />
                </div>
                <span className="group-hover:text-accent transition-colors">leidermorales@gmail.com</span>
              </div>
              
              <div className="flex items-center space-x-3 group">
                <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center group-hover:bg-accent transition-all duration-300">
                  <Clock size={16} className="text-accent group-hover:text-white" />
                </div>
                <span className="group-hover:text-accent transition-colors">Lun - Vie: 8:00 AM - 6:00 PM</span>
              </div>
            </div>
          </div>
          
          {/* Columna 2: Enlaces rápidos */}
          <div>
            <h4 className="text-lg font-semibold mb-6 relative pb-2 inline-block">
              Enlaces rápidos
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-accent to-accent-alt"></span>
            </h4>
            
            <nav className="flex flex-col space-y-2">
              {[
                { name: 'Inicio', href: '#' },
                { name: 'Servicios', href: '#servicios' },
                { name: 'Proyectos', href: '#proyectos' },
                { name: 'Sobre Nosotros', href: '#sobre' },
                { name: 'Contacto', href: '#contacto' }
              ].map((link, index) => (
                <a 
                  key={index}
                  href={link.href} 
                  className="group text-neutral-pale py-2 flex items-center transform transition-all duration-300 hover:translate-x-2"
                >
                  <span className="w-0 h-0.5 bg-accent mr-0 transition-all duration-300 group-hover:w-4 group-hover:mr-2"></span>
                  {link.name}
                </a>
              ))}
            </nav>
          </div>
          
          {/* Columna 3: Servicios */}
          <div>
            <h4 className="text-lg font-semibold mb-6 relative pb-2 inline-block">
              Servicios principales
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-accent to-accent-alt"></span>
            </h4>
            
            <div className="space-y-4">
              {[
                'Estructuras metálicas',
                'Herrería arquitectónica',
                'Corte y doblado',
                'Soldadura especializada',
                'Diseño personalizado',
                'Instalación profesional'
              ].map((service, index) => (
                <div key={index} className="flex items-center space-x-2 group">
                  <div className="w-2 h-2 rounded-full bg-accent transform transition-all duration-300 group-hover:scale-150"></div>
                  <span className="text-neutral-pale group-hover:text-white transition-colors">{service}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Columna 4: Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-6 relative pb-2 inline-block">
              Mantente conectado
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-accent to-accent-alt"></span>
            </h4>
            
            <p className="text-neutral-pale mb-4">Suscríbete para recibir noticias y ofertas especiales.</p>
            
            <form onSubmit={handleSubscribe} className="mb-6">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Tu correo electrónico"
                  className={`w-full px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border ${
                    subscribeStatus === 'error' ? 'border-red-500' : 'border-accent/40'
                  } focus:outline-none focus:border-accent text-white placeholder-neutral-pale transition-all duration-300`}
                  required
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1 bottom-1 px-4 rounded-md bg-gradient-to-r from-accent to-accent-alt text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-accent/25"
                >
                  <Send size={16} />
                </button>
              </div>
              {subscribeStatus === 'success' && (
                <p className="text-accent-alt text-sm mt-2">¡Gracias por suscribirte!</p>
              )}
              {subscribeStatus === 'error' && (
                <p className="text-red-400 text-sm mt-2">Por favor ingresa un correo válido.</p>
              )}
            </form>
            
            <h5 className="text-md font-medium mb-4">Síguenos en redes:</h5>
            <div className="flex space-x-3">
              {[
                { icon: <Facebook size={18} />, label: 'Facebook', href: '#', color: 'hover:bg-blue-600' },
                { icon: <Instagram size={18} />, label: 'Instagram', href: '#', color: 'hover:bg-pink-600' },
                { icon: <Twitter size={18} />, label: 'Twitter', href: '#', color: 'hover:bg-sky-500' },
                { icon: <Linkedin size={18} />, label: 'LinkedIn', href: '#', color: 'hover:bg-blue-700' },
                { icon: <MessageCircle size={18} />, label: 'WhatsApp', href: 'https://wa.me/573001234567', color: 'hover:bg-green-600' }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className={`w-10 h-10 rounded-lg bg-white/10 flex justify-center items-center text-white transition-all duration-300 ${social.color} hover:-translate-y-1 hover:shadow-lg`}
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        {/* División con línea decorativa */}
        <div className="relative py-6 my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/10"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-neutral-dark px-4 text-sm text-neutral-pale">LM ACEROS</span>
          </div>
        </div>
        
        {/* Copyright y certificaciones */}
        <div className="flex flex-col md:flex-row justify-between items-center text-neutral-pale text-sm">
          <div className="mb-4 md:mb-0">
            <p>&copy; {currentYear} LM - Aceros. Todos los derechos reservados.</p>
          </div>
          
          <div className="flex items-center space-x-4">
            <span>ISO 9001</span>
            <span className="w-1 h-1 rounded-full bg-neutral-pale"></span>
            <span>Empresa Verificada</span>
            <span className="w-1 h-1 rounded-full bg-neutral-pale"></span>
            <a href="#privacidad" className="hover:text-accent transition-colors">Privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  )
}