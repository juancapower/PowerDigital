import { Instagram, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-brand-cyan/30 pt-12 pb-8 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="mb-6 md:mb-0">
            <img 
              src="https://res.cloudinary.com/ddn6qh7ve/image/upload/v1774969465/LogoLightHor_twp0u4.png" 
              alt="Power Digital Logo" 
              className="h-10 w-auto object-contain mb-4" 
              referrerPolicy="no-referrer"
            />
            <p className="text-gray-500 font-poppins text-sm mt-2 max-w-xs">
              Sistemas con Inteligencia Artificial para escalar tu negocio y posicionar tu marca.
            </p>
          </div>
          
          <div className="flex flex-col space-y-4">
            <h4 className="text-white font-raleway font-bold tracking-wide">Contacto</h4>
            <a href="mailto:digital@juancapower.com" className="flex items-center text-gray-400 hover:text-brand-cyan transition-colors text-sm font-poppins">
              <Mail size={16} className="mr-2" /> digital@juancapower.com
            </a>
            <a href="https://wa.me/51920690260" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-400 hover:text-brand-cyan transition-colors text-sm font-poppins">
              <Phone size={16} className="mr-2" /> +51 920 690 260
            </a>
          </div>

          <div className="flex flex-col space-y-4">
            <h4 className="text-white font-raleway font-bold tracking-wide">Síguenos</h4>
            <div className="flex space-x-4">
              <a href="https://instagram.com/powerdigital.ai" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-cyan transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://www.tiktok.com/@powerdigital.ia" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-cyan transition-colors" aria-label="TikTok">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 font-poppins text-sm">
            Power Digital © 2026 · Trujillo, Perú
          </p>
          <p className="text-brand-cyan/70 font-orbitron text-xs tracking-widest mt-4 md:mt-0">
            CONSTRUIDO CON IA
          </p>
        </div>
      </div>
    </footer>
  );
}
