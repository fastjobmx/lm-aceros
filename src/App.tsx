import Header from './components/header/header'
import Services from './components/services/services'
import Projects from './components/projects/projects'
import Statistics from './components/statistics/statistics'
import About from './components/about/about'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'
import WhatsappButton from './components/ui/whatsapp-button'
import BackToTop from './components/ui/back-to-top'
import Preloader from './components/ui/preloader'
import ProductGallery from './components/ProductGallery'

function App() {
  return (
    <>
      <a href="#main-content" className="skip-link sr-only focus:not-sr-only">
        Saltar al contenido principal
      </a>
      
      <Preloader />
      <WhatsappButton />
      <BackToTop />
      
      <Header />
      
      <main id="main-content">
        <Services />
        <Projects />
        <ProductGallery />
        <Statistics />
        <About />
        <Contact />
      </main>
      
      <Footer />
    </>
  )
}

export default App
