import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 top-0 transition-all duration-300 bg-black/50 backdrop-blur-md border-b border-brand-cyan/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center cursor-pointer">
            <img 
              src="https://res.cloudinary.com/ddn6qh7ve/image/upload/v1774969465/LogoLightHor_twp0u4.png" 
              alt="Power Digital Logo" 
              className="h-10 w-auto object-contain" 
              referrerPolicy="no-referrer"
            />
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="https://www.juancapower.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-brand-cyan transition-colors text-sm font-medium tracking-wide">Inicio</a>
            <a href="#servicios" className="text-gray-300 hover:text-brand-cyan transition-colors text-sm font-medium tracking-wide">Servicios</a>
            <a href="#modelos" className="text-gray-300 hover:text-brand-cyan transition-colors text-sm font-medium tracking-wide">Modelos Digitales</a>
            <a href="#diagnostico" className="text-gray-300 hover:text-brand-cyan transition-colors text-sm font-medium tracking-wide">Diagnóstico</a>
            <a href="https://wa.me/51920690260" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-brand-cyan transition-colors text-sm font-medium tracking-wide">Contacto</a>
            <a href="https://wa.me/51920690260" target="_blank" rel="noopener noreferrer" className="px-6 py-2 rounded-full bg-transparent border border-brand-cyan text-brand-cyan font-orbitron text-sm font-bold tracking-wider hover:bg-brand-cyan hover:text-black transition-all duration-300 box-glow">
              Conversemos
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-brand-cyan hover:text-white transition-colors">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-black/95 backdrop-blur-xl border-b border-brand-cyan/20"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
            <a href="https://www.juancapower.com" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-brand-cyan">Inicio</a>
            <a href="#servicios" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-brand-cyan">Servicios</a>
            <a href="#modelos" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-brand-cyan">Modelos Digitales</a>
            <a href="#diagnostico" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-brand-cyan">Diagnóstico</a>
            <a href="https://wa.me/51920690260" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-brand-cyan">Contacto</a>
            <a href="https://wa.me/51920690260" target="_blank" rel="noopener noreferrer" className="mt-4 px-6 py-2 rounded-full bg-transparent border border-brand-cyan text-brand-cyan font-orbitron text-sm font-bold tracking-wider box-glow w-3/4 text-center">
              Conversemos
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
