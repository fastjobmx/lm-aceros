import { motion } from 'framer-motion';

type ProductImage = {
  src: string;
  alt: string;
};

const products: ProductImage[] = [
  { src: '/productos/tanque-industrial-1.png', alt: 'Tanque industrial de acero inoxidable' },
  { src: '/productos/mueble-acero-1.png', alt: 'Mueble de acero inoxidable' },
  { src: '/productos/estructura-metalica-1.png', alt: 'Estructura metálica industrial' },
  { src: '/productos/tanque-industrial-2.png', alt: 'Otro tanque industrial' },
  { src: '/productos/mueble-acero-2.png', alt: 'Otro mueble de acero inoxidable' },
  { src: '/productos/estructura-metalica-2.png', alt: 'Otra estructura metálica' },
];

export default function ProductGallery() {
  return (
    <section id="productos" className="productos py-16 bg-neutral-medium" aria-labelledby="productos-title">
      <div className="container mx-auto px-4">
        <motion.h2 
          id="productos-title"
          className="text-3xl md:text-4xl mb-12 text-light text-center relative inline-block text-gradient text-shadow"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Galería de Productos
          <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-accent to-accent-alt"></span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <motion.div
              key={index}
              className="rounded-xl overflow-hidden shadow-lg glass-effect card-hover img-container"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <img 
                src={product.src} 
                alt={product.alt} 
                className="w-full h-auto object-cover img-hover"
              />
              {/* Overlay para información al pasar el mouse */}
              <div className="img-overlay flex items-center justify-center p-4">
                <p className="text-white text-center font-semibold text-lg">{product.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 