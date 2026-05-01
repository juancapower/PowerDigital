import { motion } from 'motion/react';

export default function HeroSection() {
  return (
    <section className="relative min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden bg-[var(--pd-bg)] pt-[100px] pb-24 md:pb-32 z-10 w-full">
      {/* Background glow pseudo-elements */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[55%] h-[80%] bg-[radial-gradient(ellipse,rgba(67,97,238,0.18)_0%,transparent_65%)]"></div>
        <div className="absolute bottom-0 right-[-5%] w-[40%] h-[60%] bg-[radial-gradient(ellipse,rgba(123,158,255,0.08)_0%,transparent_65%)]"></div>
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 text-center flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center w-full"
        >
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 bg-[rgba(67,97,238,0.08)] border border-[rgba(67,97,238,0.25)] rounded-full px-4 py-1.5 font-mono text-[10px] text-[var(--pd-primary-light)] tracking-[0.1em] mb-7">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--pd-primary)] shadow-[0_0_8px_rgba(67,97,238,0.8)] animate-pulse"></span>
            Agencia de Marketing con IA · Perú
          </div>

          <h1 className="font-display font-bold text-[clamp(2.8rem,6vw,5.5rem)] tracking-[-0.03em] leading-[1.08] text-[var(--pd-text)] text-center mb-6">
            Transforma tu Negocio<br/>
            <span className="bg-[linear-gradient(135deg,#4361EE_0%,#7B9EFF_60%,#a5c0ff_100%)] bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              con Inteligencia Artificial
            </span>
          </h1>
          
          <p className="font-body text-[clamp(1rem,2vw,1.2rem)] text-[var(--pd-text-2)] leading-[1.7] text-center max-w-[560px] mx-auto mb-10">
            Automatiza tu captación, potencia tu marca y escala tus ventas
            sin sesiones costosas — en tiempo récord.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <a href="#agenda" className="relative inline-flex items-center gap-2.5 bg-[var(--pd-primary)] text-white border-none cursor-pointer font-body font-semibold text-base px-8 py-4 rounded-xl shadow-[0_0_0_0_rgba(67,97,238,0.4)] transition-all duration-[220ms] ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden group hover:bg-[var(--pd-primary-hover)] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(67,97,238,0.45)] active:translate-y-0 text-center">
              <div className="absolute top-0 left-[-100%] w-full h-full bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.12),transparent)] transition-all duration-500 ease-out group-hover:left-[100%] z-0"></div>
              <span className="relative z-10">Agenda una llamada</span>
              <svg className="relative z-10" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a 
              href="https://res.cloudinary.com/ddn6qh7ve/image/upload/v1777612918/Brochure_PowerDigital_Abr26_a4tkhk.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              data-track="brochure-cta-hero" 
              className="flex items-center gap-2.5 bg-transparent text-[#4361EE] border-[1.5px] border-[#4361EE] rounded-xl px-8 py-4 font-body font-semibold text-base transition-all duration-200 hover:bg-[#4361EE] hover:text-white"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>
              </svg>
              Brochure: Servicios y Precios
            </a>
          </div>
        </motion.div>
      </div>

      {/* Stats */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        className="relative z-10 w-full"
      >
        <div className="flex gap-12 justify-center mt-14 pt-10 border-t border-[rgba(255,255,255,0.07)] px-4 mx-auto max-w-5xl flex-wrap">
          <div className="flex flex-col items-center gap-1 sm:border-r border-[rgba(255,255,255,0.07)] sm:pr-12">
            <span className="font-display font-bold text-[clamp(2rem,4vw,3rem)] text-[var(--pd-text)] tracking-[-0.03em]">+20</span>
            <span className="font-mono text-[9px] text-[var(--pd-text-3)] tracking-[0.14em] uppercase text-center">Negocios y marcas escaladas</span>
          </div>
          <div className="flex flex-col items-center gap-1 sm:border-r border-[rgba(255,255,255,0.07)] sm:pr-12">
            <span className="font-display font-bold text-[clamp(2rem,4vw,3rem)] text-[var(--pd-text)] tracking-[-0.03em]">+3</span>
            <span className="font-mono text-[9px] text-[var(--pd-text-3)] tracking-[0.14em] uppercase text-center">Ciudades (Trujillo,<br/>Lima, Ayacucho)</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="font-display font-bold text-[clamp(2rem,4vw,3rem)] text-[var(--pd-text)] tracking-[-0.03em]">100%</span>
            <span className="font-mono text-[9px] text-[var(--pd-text-3)] tracking-[0.14em] uppercase text-center">Sistemas<br/>automatizados</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
