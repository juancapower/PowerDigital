import { Instagram, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[var(--pd-surface)] border-t border-[var(--pd-border-n)] pt-12 pb-8 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="https://res.cloudinary.com/ddn6qh7ve/image/upload/q_auto/f_auto/v1776312319/LogoPDHorizotal_principal_nr194f.png" 
                alt="Power Digital Logo" 
                className="h-8 w-auto"
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="text-[var(--pd-text-3)] font-mono text-xs tracking-[0.1em] mt-2 max-w-xs">
              Sistemas con Inteligencia Artificial para escalar tu negocio y posicionar tu marca.
            </p>
          </div>
          
          <div className="flex flex-col space-y-4">
            <h4 className="text-[var(--pd-primary-light)] font-mono text-xs tracking-[0.16em] uppercase">Contacto</h4>
            <a href="mailto:digital@juancapower.com" className="flex items-center text-[var(--pd-text-3)] hover:text-[var(--pd-text)] transition-colors duration-[180ms] text-sm font-body">
              <Mail size={16} className="mr-2" /> digital@juancapower.com
            </a>
            <a href="https://wa.me/51920690260" target="_blank" rel="noopener noreferrer" className="flex items-center text-[var(--pd-text-3)] hover:text-[var(--pd-text)] transition-colors duration-[180ms] text-sm font-body">
              <Phone size={16} className="mr-2" /> +51 920 690 260
            </a>
          </div>

          <div className="flex flex-col space-y-4">
            <h4 className="text-[var(--pd-primary-light)] font-mono text-xs tracking-[0.16em] uppercase">Síguenos</h4>
            <div className="flex space-x-4">
              <a href="https://instagram.com/powerdigital.ai" target="_blank" rel="noopener noreferrer" className="text-[var(--pd-text-3)] hover:text-[var(--pd-primary)] transition-colors duration-[180ms]" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://www.tiktok.com/@powerdigital.ia" target="_blank" rel="noopener noreferrer" className="text-[var(--pd-text-3)] hover:text-[var(--pd-primary)] transition-colors duration-[180ms]" aria-label="TikTok">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-[var(--pd-border-n)] mt-12 pt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center">
          <p className="text-[var(--pd-text-3)] font-mono text-xs">
            Power Digital © 2026 · Trujillo, Perú
          </p>
          <p className="text-[var(--pd-text-3)] font-mono text-xs tracking-widest mt-4 md:mt-0">
            CONSTRUIDO CON IA
          </p>
        </div>
      </div>
    </footer>
  );
}
