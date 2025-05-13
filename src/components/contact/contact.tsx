import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Simulación de envío exitoso
    setFormStatus({
      submitted: true,
      success: true,
      message: '¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.'
    })

    // Resetear el formulario después de 3 segundos
    setTimeout(() => {
      setFormStatus({
        submitted: false,
        success: false,
        message: ''
      })
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      })
    }, 3000)
  }

  return (
    <section id="contacto" className="contacto py-20 bg-neutral-dark" aria-labelledby="contacto-title">
      <div className="container mx-auto px-4">
        <h2 
          id="contacto-title"
          className="text-3xl md:text-4xl mb-12 text-light text-center relative after:content-[''] after:absolute after:-bottom-4 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-accent"
        >
          Contáctanos
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="contact-info">
            <h3 className="text-2xl font-semibold mb-6 text-light">Información de Contacto</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="text-accent mr-4">
                  <i className="fas fa-map-marker-alt text-2xl"></i>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-light">Dirección</h4>
                  <p className="text-neutral-pale">Calle 123 #45-67, Pereira, Colombia</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-accent mr-4">
                  <i className="fas fa-phone-alt text-2xl"></i>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-light">Teléfono</h4>
                  <p className="text-neutral-pale">+57 300 123 4567</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-accent mr-4">
                  <i className="fas fa-envelope text-2xl"></i>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-light">Email</h4>
                  <p className="text-neutral-pale">info@lmaceros.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-accent mr-4">
                  <i className="fas fa-clock text-2xl"></i>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-light">Horario</h4>
                  <p className="text-neutral-pale">Lunes - Viernes: 8:00 AM - 6:00 PM</p>
                  <p className="text-neutral-pale">Sábado: 8:00 AM - 1:00 PM</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="text-lg font-medium text-light mb-4">Síguenos</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-neutral-pale hover:text-accent transition-colors" aria-label="Facebook">
                  <i className="fab fa-facebook-f text-xl"></i>
                </a>
                <a href="#" className="text-neutral-pale hover:text-accent transition-colors" aria-label="Instagram">
                  <i className="fab fa-instagram text-xl"></i>
                </a>
                <a href="#" className="text-neutral-pale hover:text-accent transition-colors" aria-label="Twitter">
                  <i className="fab fa-twitter text-xl"></i>
                </a>
                <a href="#" className="text-neutral-pale hover:text-accent transition-colors" aria-label="LinkedIn">
                  <i className="fab fa-linkedin-in text-xl"></i>
                </a>
              </div>
            </div>
          </div>
          
          <div className="contact-form">
            {formStatus.submitted ? (
              <div className={`p-4 rounded-lg ${formStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                {formStatus.message}
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-light mb-2">Nombre Completo</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-neutral-medium border border-neutral-pale/30 rounded-lg focus:outline-none focus:border-accent text-light"
                    required
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-light mb-2">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-neutral-medium border border-neutral-pale/30 rounded-lg focus:outline-none focus:border-accent text-light"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-light mb-2">Teléfono</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-neutral-medium border border-neutral-pale/30 rounded-lg focus:outline-none focus:border-accent text-light"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-light mb-2">Servicio de Interés</label>
                  <select 
                    id="service" 
                    name="service" 
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-neutral-medium border border-neutral-pale/30 rounded-lg focus:outline-none focus:border-accent text-light"
                    required
                  >
                    <option value="">Selecciona un servicio</option>
                    <option value="estructuras">Estructuras Metálicas</option>
                    <option value="acero">Acero Inoxidable</option>
                    <option value="aluminio">Carpintería en Aluminio</option>
                    <option value="automatizacion">Automatización</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-light mb-2">Mensaje</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    value={formData.message}
                    onChange={handleChange}
                    rows={5} 
                    className="w-full px-4 py-3 bg-neutral-medium border border-neutral-pale/30 rounded-lg focus:outline-none focus:border-accent text-light resize-none"
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="btn principal w-full"
                >
                  Enviar Mensaje
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}