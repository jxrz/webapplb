import { useState, useEffect } from 'react';
import logo from "@/assets/logo.png";
import { Link, useLocation } from 'react-router-dom';

import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '../ui/Button';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { name: 'Inicio', path: '/' },
  { name: 'Nosotros', path: '/nosotros' },
  { name: 'Soluciones B2B', path: '/soluciones' },
  { name: 'Portafolio', path: '/portafolio' },
  { name: 'Marcas', path: '/marcas' },
  { name: 'Recursos', path: '/recursos' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 z-50">
          <img src={logo} alt="LB Asian Food" className="h-10 w-10 object-contain" />
          <span className={`text-2xl font-bold tracking-tight ${scrolled ? 'text-lb-secondary' : 'text-white drop-shadow-md'}`}>
            LB Asian Food
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-medium transition-colors hover:text-lb-accent ${
                location.pathname === item.path
                  ? 'text-lb-primary font-bold'
                  : scrolled
                  ? 'text-gray-700'
                  : 'text-white drop-shadow-sm'
              }`}
            >
              {item.name}
            </Link>
          ))}
          <Link to="/contacto">
            <Button variant="primary" size="sm" className="shadow-lg">
              Contacto / Cotizar
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden z-50 p-2 text-gray-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="text-gray-800" /> : <Menu className={scrolled ? 'text-gray-800' : 'text-white'} />}
        </button>

        {/* Mobile Navigation Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-0 left-0 w-full bg-white shadow-xl flex flex-col pt-20 pb-10 px-6 gap-6 lg:hidden"
            >
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-medium border-b border-gray-100 pb-2 ${
                    location.pathname === item.path ? 'text-lb-primary' : 'text-gray-800'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link to="/contacto" onClick={() => setIsOpen(false)}>
                <Button className="w-full mt-4">Contacto / Cotizar</Button>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};
