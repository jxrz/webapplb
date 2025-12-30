import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="h-8 w-8 bg-lb-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                LB
              </div>
              <span className="text-xl font-bold tracking-tight">LB Asian Food</span>
            </div>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              Distribuidor mayorista líder de alimentos asiáticos en México. Conectando sabores auténticos con el mercado nacional.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-lb-primary transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-lb-primary transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-lb-primary transition-colors">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 border-b-2 border-lb-primary inline-block pb-1">Navegación</h3>
            <ul className="space-y-3">
              {['Inicio', 'Nosotros', 'Soluciones B2B', 'Portafolio', 'Marcas', 'Recursos'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Inicio' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`} 
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-lg font-semibold mb-6 border-b-2 border-lb-primary inline-block pb-1">Soluciones</h3>
            <ul className="space-y-3">
              <li className="text-gray-400 text-sm hover:text-white cursor-pointer">Distribución a Cadenas</li>
              <li className="text-gray-400 text-sm hover:text-white cursor-pointer">Mayoreo y Food Service</li>
              <li className="text-gray-400 text-sm hover:text-white cursor-pointer">Tiendas Especializadas</li>
              <li className="text-gray-400 text-sm hover:text-white cursor-pointer">Logística Internacional</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6 border-b-2 border-lb-primary inline-block pb-1">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin size={18} className="text-lb-primary shrink-0 mt-0.5" />
                <span>Bolívar 219, Int. 102, Col. Obrera,<br/>Cuauhtémoc, 06800 CDMX.</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone size={18} className="text-lb-primary shrink-0" />
                <span>(55) 5578-7863</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <Mail size={18} className="text-lb-primary shrink-0 mt-0.5" />
                <div className="flex flex-col">
                   <span>ventaslbasianfood1@gmail.com</span>
                   <span>venta.cadenalb@gmail.com</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} LB Asian Food. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-white text-xs">Aviso de Privacidad</a>
            <a href="#" className="text-gray-500 hover:text-white text-xs">Términos y Condiciones</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
