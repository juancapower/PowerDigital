import { Instagram, Mail, Phone, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0b0d17] border-t border-[rgba(255,255,255,0.05)] pt-16 pb-8 relative z-10">
      
      {/* Eagle background watermark subtle */}
      <div className="absolute bottom-4 right-8 opacity-[0.01] text-[var(--pd-gold)] select-none pointer-events-none">
        <svg viewBox="0 0 100 100" fill="currentColor" className="w-32 h-32">
          <path d="M50 10 L60 28 L85 28 L65 42 L75 68 L50 52 L25 68 L35 42 L15 28 L40 28 Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-8 pb-12">
          
          {/* Logo & Corporate Tagline */}
          <div className="max-w-md">
            <div className="flex flex-col items-start gap-3 mb-4">
              <img 
                src="https://res.cloudinary.com/ddn6qh7ve/image/upload/q_auto/f_auto/v1776312319/LogoPDHorizotal_principal_nr194f.png" 
                alt="Power Digital Logo" 
                className="h-8 w-auto mb-1"
                referrerPolicy="no-referrer"
              />
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--pd-gold)] bg-[rgba(212,175,55,0.05)] border border-[rgba(212,175,55,0.15)] rounded-full px-3 py-1">
                Una vertical de JuanCa Power
              </span>
            </div>
            <p className="text-[var(--pd-text-3)] font-body text-xs leading-relaxed max-w-sm mt-3">
              Construimos ecosistemas e infraestructura digital inteligente. Automatizamos tu captación comercial para liberar tiempo operativo y acelerar tu escala.
            </p>
          </div>
          
          {/* Contact Details */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-[var(--pd-gold-light)] font-mono text-xs tracking-[0.16em] uppercase border-b border-[rgba(255,255,255,0.05)] pb-1.5">Contacto</h4>
            <a href="mailto:digital@juancapower.com" className="flex items-center text-[var(--pd-text-2)] hover:text-white transition-colors duration-[180ms] text-xs font-body">
              <Mail size={14} className="mr-2 text-[var(--pd-primary-light)]" /> digital@juancapower.com
            </a>
            <a href="https://wa.me/51920690260" target="_blank" rel="noopener noreferrer" className="flex items-center text-[var(--pd-text-2)] hover:text-white transition-colors duration-[180ms] text-xs font-body">
              <Phone size={14} className="mr-2 text-[var(--pd-primary-light)]" /> +51 920 690 260
            </a>
          </div>

          {/* Social Profiles */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-[var(--pd-gold-light)] font-mono text-xs tracking-[0.16em] uppercase border-b border-[rgba(255,255,255,0.05)] pb-1.5">Social</h4>
            <div className="flex space-x-4">
              <a href="https://instagram.com/powerdigital.ai" target="_blank" rel="noopener noreferrer" className="text-[var(--pd-text-3)] hover:text-[var(--pd-primary-light)] transition-colors duration-[180ms]" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="https://www.tiktok.com/@powerdigital.ia" target="_blank" rel="noopener noreferrer" className="text-[var(--pd-text-3)] hover:text-[var(--pd-primary-light)] transition-colors duration-[180ms]" aria-label="TikTok">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-4.5 h-4.5"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
              </a>
            </div>
            <a href="https://juancapower.com" target="_blank" rel="noopener noreferrer" className="flex items-center text-[var(--pd-text-3)] hover:text-white transition-colors duration-150 text-[11px] font-mono tracking-wider">
              <span>JUANCAPOWER.COM</span>
              <ExternalLink size={10} className="ml-1" />
            </a>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-[rgba(255,255,255,0.05)] mt-8 pt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[var(--pd-text-3)] font-mono text-[10px] tracking-wider">
            Power Digital © 2026 · Trujillo, Perú. Todos los derechos reservados.
          </p>
          <p className="text-[var(--pd-text-3)] font-mono text-[10px] tracking-widest">
            ENGINEERED WITH applied intelligence
          </p>
        </div>
      </div>
    </footer>
  );
}
