import { Link } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Belleza', path: '/belleza' },
    { name: 'Salud', path: '/salud' },
    { name: 'Educación', path: '/educacion' },
  ];

  return (
    <nav className="bg-slate-950 border-b border-slate-800 sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold tracking-tight text-white">
                Fundación <span className="text-green-400">Centenario</span>
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-slate-300 hover:text-green-400 font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-slate-950 px-5 py-2.5 rounded-full font-bold flex items-center space-x-2 hover:bg-green-400 transition-all shadow-sm"
            >
              <Phone size={18} />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-green-400 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-950 border-t border-slate-800 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-3 text-base font-medium text-slate-300 hover:text-green-400 hover:bg-slate-900 rounded-lg"
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 w-full bg-green-500 text-slate-950 px-4 py-3 rounded-lg font-bold hover:bg-green-400 transition-colors"
              >
                <Phone size={18} />
                <span>Contactar por WhatsApp</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="bg-slate-950 text-white py-16 border-t-4 border-green-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Fundación Centenario</h3>
            <p className="text-slate-400 leading-relaxed">
              Transformando vidas a través de la formación técnica y humana. 
              Comprometidos con el desarrollo integral de nuestra comunidad.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6 text-green-400">Nuestras Áreas</h4>
            <ul className="space-y-3 text-slate-300">
              <li><Link to="/belleza" className="hover:text-green-400 transition-colors">Belleza Integral</Link></li>
              <li><Link to="/salud" className="hover:text-green-400 transition-colors">Salud y Bienestar</Link></li>
              <li><Link to="/educacion" className="hover:text-green-400 transition-colors">Educación Continua</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6 text-green-400">Contacto</h4>
            <p className="text-slate-300 mb-2">Email: info@fundacioncentenario.org</p>
            <p className="text-slate-300 mb-6">Teléfono: +123 456 7890</p>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-slate-900 text-center text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} Fundación Centenario. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
