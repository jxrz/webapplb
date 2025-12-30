import React from 'react';
import { MainLayout } from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/Button';
import ClientCarousel from '@/components/ui/ClientCarousel';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Globe, Truck, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-gray-900">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent z-10" />
          {/* Placeholder Background - Replace with high-res Asian food image */}
          <img 
            src="https://images.unsplash.com/photo-1552611052-33e04de081de?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Asian Food Wholesale" 
            className="w-full h-full object-cover opacity-50"
          />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-20 pt-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-lb-primary/20 text-lb-accent font-semibold text-sm mb-6 border border-lb-primary/30">
              Socio Estratégico B2B
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Distribuidor mayorista de <span className="text-transparent bg-clip-text bg-gradient-to-r from-lb-primary to-lb-accent">alimentos asiáticos</span> en México
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              Más de 10 años conectando marcas líderes de Asia con cadenas comerciales, mayoristas y food service en todo el país.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/portafolio">
                <Button size="lg" className="w-full sm:w-auto shadow-xl shadow-lb-primary/20">
                  Descargar Portafolio B2B
                </Button>
              </Link>
              <Link to="/contacto">
                <Button variant="outline" size="lg" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-gray-900">
                  Agendar Llamada con Ventas
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Bar */}
      <div className="bg-lb-primary py-8 relative z-30 -mt-20 container mx-auto rounded-t-lg shadow-2xl hidden md:block">
        <div className="grid grid-cols-3 divide-x divide-red-800/50">
          <div className="flex items-center justify-center gap-4 px-4">
            <div className="p-3 bg-red-800/30 rounded-full text-white">
              <Users size={24} />
            </div>
            <div>
              <p className="text-red-200 text-sm font-medium">Experiencia</p>
              <p className="text-white font-bold text-lg">+10 Años en el Mercado</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-4 px-4">
            <div className="p-3 bg-red-800/30 rounded-full text-white">
              <Globe size={24} />
            </div>
            <div>
              <p className="text-red-200 text-sm font-medium">Cobertura</p>
              <p className="text-white font-bold text-lg">Presencia Nacional</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-4 px-4">
            <div className="p-3 bg-red-800/30 rounded-full text-white">
              <Truck size={24} />
            </div>
            <div>
              <p className="text-red-200 text-sm font-medium">Logística</p>
              <p className="text-white font-bold text-lg">Cadena de Suministro Integral</p>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Confianza que nos respalda</h2>
            <p className="text-gray-500">Trabajamos con las principales cadenas y marcas líderes</p>
          </div>
          
          <ClientCarousel />
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-lb-primary font-semibold tracking-wider uppercase text-sm">Nuestra Propuesta</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">Soluciones Integrales para el Canal Moderno y Tradicional</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Importación Directa',
                desc: 'Sin intermediarios. Traemos lo mejor de Asia directamente a tus estantes, garantizando frescura y precios competitivos.',
                icon: Globe,
              },
              {
                title: 'Distribución a Cadenas',
                desc: 'Experiencia probada con retailers nacionales (Wal-Mart, Costco, HEB). Cumplimiento normativo y logístico total.',
                icon: Truck,
              },
              {
                title: 'Mayoreo y Food Service',
                desc: 'Abastecimiento constante para mayoristas y restaurantes que buscan autenticidad en sus ingredientes.',
                icon: Users,
              },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-2xl shadow-lg border-b-4 border-transparent hover:border-lb-primary transition-all"
              >
                <div className="w-14 h-14 bg-blue-50 text-lb-secondary rounded-xl flex items-center justify-center mb-6">
                  <feature.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{feature.desc}</p>
                <Link to="/soluciones" className="text-lb-primary font-medium flex items-center gap-2 hover:gap-3 transition-all">
                  Saber más <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20 bg-gray-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-lb-primary/10 rounded-l-full blur-3xl" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Por qué elegir a <span className="text-lb-primary">LB Asian Food</span></h2>
              <p className="text-gray-300 mb-8 text-lg">
                No solo vendemos productos; construimos categorías exitosas. Nuestro enfoque se basa en datos, tendencias y una profunda comprensión del mercado mexicano.
              </p>
              
              <ul className="space-y-4">
                {[
                  'Experiencia comprobada en el mercado mexicano (+10 años)',
                  'Alianzas exclusivas con marcas líderes (CJ, Samyang, Lotte)',
                  'Infraestructura logística para atender cadenas nacionales',
                  'Soporte en marketing y trade marketing en punto de venta'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="text-lb-accent shrink-0 mt-1" size={20} />
                    <span className="text-gray-200">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                <Link to="/nosotros">
                  <Button variant="secondary" size="lg">Conoce nuestra historia</Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-tr from-lb-secondary to-lb-primary rounded-2xl p-2 shadow-2xl rotate-3 hover:rotate-0 transition-all duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Asian Food Platter" 
                  className="rounded-xl w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">¿Listo para expandir tu catálogo?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            Descubre por qué somos el socio preferido de las principales cadenas de autoservicio en México.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/portafolio">
              <Button size="lg" className="shadow-xl shadow-lb-primary/20">Ver Portafolio Completo</Button>
            </Link>
            <Link to="/contacto">
              <Button variant="outline" size="lg">Contactar al Equipo Comercial</Button>
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Home;
