import { useRef, useEffect, useState } from 'react';
import { motion, useAnimation, useMotionValue } from 'framer-motion';

const clients = [
  {
    name: "Walmart",
    logo: "/logos_clientes/Walmart_logo.svg",
    description: "Líder global en retail y autoservicio, comprometidos con precios bajos todos los días."
  },
  {
    name: "Costco",
    logo: "/logos_clientes/Costco_logo.svg",
    description: "Club de precios líder mundial, ofreciendo productos de alta calidad al mejor valor."
  },
  {
    name: "H-E-B",
    logo: "/logos_clientes/H-E-B_logo.svg",
    description: "Cadena de supermercados reconocida por su frescura, calidad y servicio al cliente superior."
  },
  {
    name: "Amazon",
    logo: "/logos_clientes/Amazon_logo.svg",
    description: "El gigante del comercio electrónico global, redefiniendo la logística y la conveniencia."
  },
  {
    name: "Casa Ley",
    logo: "/logos_clientes/Casa_Ley_logo.png",
    description: "Líder en autoservicios en el noroeste de México, con tradición y cercanía familiar."
  },
  {
    name: "Aeroméxico",
    logo: "/logos_clientes/Aeromexico_logo.svg",
    description: "La aerolínea global de México, conectando al mundo con servicio de clase mundial."
  },
  {
    name: "Hyundai",
    logo: "/logos_clientes/Hyundai_logo.svg",
    description: "Innovación automotriz y tecnología global, impulsando el futuro de la movilidad."
  },
  {
    name: "Super Sánchez",
    logo: "/logos_clientes/Super_sanchez_logo.png",
    description: "Cadena líder en el sureste mexicano, abasteciendo a miles de familias diariamente."
  },
  {
    name: "Yema",
    logo: "/logos_clientes/Yema_logo.png",
    description: "Supermercado consciente con productos accesibles, saludables y sostenibles."
  }
];

export default function ClientCarousel() {
  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const controls = useAnimation();

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, []);

  return (
    <div className="w-full overflow-hidden bg-white py-10">
      <motion.div 
        ref={carousel} 
        className="cursor-grab overflow-hidden"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div 
          drag="x" 
          dragConstraints={{ right: 0, left: -width }}
          className="flex gap-8 px-4"
        >
          {clients.map((client, index) => (
            <motion.div 
              key={index} 
              className="min-w-[280px] md:min-w-[320px] h-full p-6 bg-white rounded-xl shadow-md border border-gray-100 flex flex-col items-center justify-between hover:shadow-lg transition-shadow duration-300"
            >
              <div className="h-24 w-full flex items-center justify-center mb-4 p-2">
                <img 
                  src={client.logo} 
                  alt={`${client.name} logo`} 
                  className="max-h-full max-w-full object-contain pointer-events-none grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="text-center">
                <h3 className="text-lg font-bold text-gray-800 mb-2">{client.name}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{client.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      
      <div className="flex justify-center mt-6 gap-2 text-gray-400 text-sm">
        <p>← Desliza para ver más →</p>
      </div>
    </div>
  );
}
