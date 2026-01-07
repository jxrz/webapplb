import { useRef, useEffect, useState } from 'react';
import { motion, useAnimation, useMotionValue } from 'framer-motion';

interface Brand {
  name: string;
  logo: string;
}

interface Category {
  title: string;
  color: string;
  brands: Brand[];
}

const categories: Category[] = [
  {
    title: "Sopas",
    color: "bg-orange-500",
    brands: [
      { name: "Nongshim", logo: "/logo_marcas/nongshim_logo.svg" },
      { name: "Paldo", logo: "/logo_marcas/paldo_logo.svg" },
      { name: "Ottogi", logo: "/logo_marcas/otoggi_logo.svg" },
      { name: "Wang", logo: "/logo_marcas/wang_logo.png" },
    ]
  },
  {
    title: "Dulces y snacks",
    color: "bg-red-600",
    brands: [
      { name: "Lotte", logo: "/logo_marcas/lotte_logo.svg" },
      { name: "Crown", logo: "/logo_marcas/crown_logo.svg" },
      { name: "Nongshim", logo: "/logo_marcas/nongshim_logo.svg" },
      { name: "Haitai", logo: "/logo_marcas/haitai_logo.svg" },
      { name: "Seoju", logo: "/logo_marcas/seoju_logo.svg" },
    ]
  },
  {
    title: "Bebidas",
    color: "bg-blue-600",
    brands: [
      { name: "McNulty Korea", logo: "/logo_marcas/mcnulty_logo.png" },
      { name: "Yeon Ho", logo: "/logo_marcas/yeonho_logo.svg" },
      { name: "Haitai", logo: "/logo_marcas/haitai_logo.svg" },
      { name: "Meet Seoul", logo: "/logo_marcas/meetseoul_logo.svg" },
      { name: "Binggrae", logo: "/logo_marcas/binggrae_logo.svg" },
      { name: "Lotte", logo: "/logo_marcas/lotte_logo.svg" },
      { name: "VTalk", logo: "/logo_marcas/vtalk_logo.svg" },
      { name: "OKF", logo: "/logo_marcas/okf_logo.svg" },
    ]
  },
  {
    title: "Licores",
    color: "bg-lime-600",
    brands: [
      { name: "Chum Churum", logo: "/logo_marcas/chumchuru_logo.webp" },
      { name: "Soon Hari", logo: "/logo_marcas/soonhari_logo.png" },
      { name: "Saero", logo: "/logo_marcas/saero_logo.png" },
    ]
  },
  {
    title: "Abarrotes",
    color: "bg-gray-500",
    brands: [
      { name: "Natureat", logo: "/logo_marcas/natureat_logo.png" },
      { name: "Sukina", logo: "/logo_marcas/sukina_logo.png" },
      { name: "Beksul", logo: "/logo_marcas/beksul_logo.png" },
      { name: "Surasang", logo: "/logo_marcas/surasang_logo.svg" },
      { name: "Ottogi", logo: "/logo_marcas/otoggi_logo.svg" },
      { name: "Bibigo", logo: "/logo_marcas/bibigo_logo.svg" },
    ]
  }
];

export default function PortfolioCarousel() {
  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, []);

  return (
    <div className="w-full overflow-hidden bg-white py-12">
      <motion.div 
        ref={carousel} 
        className="cursor-grab overflow-hidden"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div 
          drag="x" 
          dragConstraints={{ right: 0, left: -width }}
          className="flex gap-6 px-4 md:px-8"
        >
          {categories.map((category, index) => (
            <motion.div 
              key={index} 
              className="min-w-[260px] md:min-w-[300px] flex flex-col"
            >
              {/* Category Header */}
              <div className={`${category.color} text-white py-3 px-6 rounded-full text-center font-bold text-lg mb-8 shadow-md`}>
                {category.title}
              </div>
              
              {/* Brands Grid for this Category */}
              <div className="flex flex-col gap-8 items-center">
                {category.brands.map((brand, bIndex) => (
                  <div key={bIndex} className="w-full flex items-center justify-center h-24 p-4 bg-white rounded-lg hover:shadow-sm transition-all duration-300">
                    <img 
                      src={brand.logo} 
                      alt={`${brand.name} logo`} 
                      className="max-h-full max-w-[140px] w-auto h-auto object-contain hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      
      <div className="flex justify-center mt-12 gap-2 text-gray-400 text-sm">
        <p>← Desliza para explorar las categorías →</p>
      </div>
    </div>
  );
}
