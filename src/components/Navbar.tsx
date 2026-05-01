import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 top-0 transition-all duration-300 ${
        scrolled 
          ? 'bg-[var(--pd-surface)]/90 backdrop-blur-[16px] border-b border-[var(--pd-border-n)]' 
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center cursor-pointer gap-3">
            <img 
              src="https://res.cloudinary.com/ddn6qh7ve/image/upload/q_auto/f_auto/v1776312319/LogoPDHorizotal_principal_nr194f.png" 
              alt="Power Digital Logo" 
              className="h-8 w-auto"
              referrerPolicy="no-referrer"
            />
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="https://www.juancapower.com" target="_blank" rel="noopener noreferrer" className="text-[var(--pd-text-2)] hover:text-[var(--pd-text)] transition-colors duration-[180ms] ease-in-out text-[14px] font-medium font-body">Inicio</a>
            <a href="#servicios" className="text-[var(--pd-text-2)] hover:text-[var(--pd-text)] transition-colors duration-[180ms] ease-in-out text-[14px] font-medium font-body">Servicios</a>
            <a href="#modelos" className="text-[var(--pd-text-2)] hover:text-[var(--pd-text)] transition-colors duration-[180ms] ease-in-out text-[14px] font-medium font-body">Modelos Digitales</a>
            <a href="#diagnostico" className="text-[var(--pd-text-2)] hover:text-[var(--pd-text)] transition-colors duration-[180ms] ease-in-out text-[14px] font-medium font-body">Diagnóstico</a>
            <a href="https://wa.me/51920690260" target="_blank" rel="noopener noreferrer" className="text-[var(--pd-text-2)] hover:text-[var(--pd-text)] transition-colors duration-[180ms] ease-in-out text-[14px] font-medium font-body">Contacto</a>
            <a href="#agenda" className="px-[18px] py-[8px] rounded-[var(--radius-md)] bg-[var(--pd-primary)] text-white text-[14px] font-medium font-body hover:bg-[var(--pd-primary-hover)] hover:shadow-[var(--pd-shadow-glow)] transition-all duration-[180ms] ease-in-out">
              Agenda una llamada
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-[var(--pd-text-2)] hover:text-[var(--pd-text)] transition-colors">
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
          className="md:hidden bg-[var(--pd-surface)] border-b border-[var(--pd-border-n)]"
        >
          <div className="px-4 pt-4 pb-6 space-y-4 flex flex-col items-center">
            <a href="https://www.juancapower.com" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)} className="block text-[16px] font-medium text-[var(--pd-text-2)] hover:text-[var(--pd-text)] font-body">Inicio</a>
            <a href="#servicios" onClick={() => setIsOpen(false)} className="block text-[16px] font-medium text-[var(--pd-text-2)] hover:text-[var(--pd-text)] font-body">Servicios</a>
            <a href="#modelos" onClick={() => setIsOpen(false)} className="block text-[16px] font-medium text-[var(--pd-text-2)] hover:text-[var(--pd-text)] font-body">Modelos Digitales</a>
            <a href="#diagnostico" onClick={() => setIsOpen(false)} className="block text-[16px] font-medium text-[var(--pd-text-2)] hover:text-[var(--pd-text)] font-body">Diagnóstico</a>
            <a href="https://wa.me/51920690260" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)} className="block text-[16px] font-medium text-[var(--pd-text-2)] hover:text-[var(--pd-text)] font-body">Contacto</a>
            <a href="#agenda" onClick={() => setIsOpen(false)} className="mt-4 px-[18px] py-[8px] rounded-[var(--radius-md)] bg-[var(--pd-primary)] text-white text-[14px] font-medium font-body hover:bg-[var(--pd-primary-hover)] hover:shadow-[var(--pd-shadow-glow)] transition-all duration-[180ms] ease-in-out w-3/4 text-center">
              Agenda una llamada
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
