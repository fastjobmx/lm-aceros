import { useState } from 'react'
import { motion } from 'framer-motion'
import { useScroll, useTransform } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react'

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

  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1])
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1])

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
    <section id="contacto" className="contacto py-20 bg-neutral-dark relative overflow-hidden" aria-labelledby="contacto-title">
      {/* Elementos decorativos mejorados */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-100px] right-[-100px] w-[300px] h-[300px] bg-primary opacity-5 rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-[-100px] left-[-100px] w-[300px] h-[300px] bg-accent opacity-5 rounded-full animate-pulse-slow"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-accent/10 to-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-[1]">
        <motion.h2 
          id="contacto-title"
          className="text-3xl md:text-4xl mb-12 text-light text-center relative inline-block"
          style={{ opacity, scale }}
        >
          Contáctanos
          <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-accent to-accent-alt"></span>
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-light">Información de Contacto</h3>
            
            <div className="space-y-6">
              <motion.div 
                className="flex items-start group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center group-hover:bg-accent transition-all duration-300">
                  <MapPin className="text-accent group-hover:text-white" size={24} />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-light">Dirección</h4>
                  <p className="text-neutral-pale group-hover:text-accent transition-colors">Calle 123 #45-67, Pereira, Colombia</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center group-hover:bg-accent transition-all duration-300">
                  <Phone className="text-accent group-hover:text-white" size={24} />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-light">Teléfono</h4>
                  <p className="text-neutral-pale group-hover:text-accent transition-colors">+57 302 683 6359</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center group-hover:bg-accent transition-all duration-300">
                  <Mail className="text-accent group-hover:text-white" size={24} />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-light">Email</h4>
                  <p className="text-neutral-pale group-hover:text-accent transition-colors">leidermorales@gmail.com</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center group-hover:bg-accent transition-all duration-300">
                  <Clock className="text-accent group-hover:text-white" size={24} />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-light">Horario</h4>
                  <p className="text-neutral-pale group-hover:text-accent transition-colors">Lunes - Viernes: 8:00 AM - 6:00 PM</p>
                  <p className="text-neutral-pale group-hover:text-accent transition-colors">Sábado: 8:00 AM - 1:00 PM</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {formStatus.submitted ? (
              <motion.div 
                className="bg-accent/10 p-8 rounded-lg text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <p className={`text-lg ${formStatus.success ? 'text-accent' : 'text-red-400'}`}>
                  {formStatus.message}
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-light mb-2">Nombre completo</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-neutral-medium border border-neutral-pale/30 rounded-lg focus:outline-none focus:border-accent text-light transition-all duration-300"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-light mb-2">Correo electrónico</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-neutral-medium border border-neutral-pale/30 rounded-lg focus:outline-none focus:border-accent text-light transition-all duration-300"
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
                    className="w-full px-4 py-3 bg-neutral-medium border border-neutral-pale/30 rounded-lg focus:outline-none focus:border-accent text-light transition-all duration-300"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-light mb-2">Servicio de Interés</label>
                  <select 
                    id="service" 
                    name="service" 
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-neutral-medium border border-neutral-pale/30 rounded-lg focus:outline-none focus:border-accent text-light transition-all duration-300"
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
                    className="w-full px-4 py-3 bg-neutral-medium border border-neutral-pale/30 rounded-lg focus:outline-none focus:border-accent text-light resize-none transition-all duration-300"
                    required
                  ></textarea>
                </div>
                
                <motion.button 
                  type="submit" 
                  className="w-full px-6 py-3 bg-gradient-to-r from-accent to-accent-alt text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Enviar Mensaje
                  <Send className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}