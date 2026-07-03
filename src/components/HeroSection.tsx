import { motion } from 'motion/react';
import { Sparkles, ArrowRight, Zap, Cpu, CheckCircle } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden bg-[var(--pd-bg)] pt-[110px] pb-20 md:pb-28 z-10 w-full">
      {/* Background glow and watermarks */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[10%] w-[60%] h-[70%] bg-[radial-gradient(ellipse_at_center,rgba(67,97,238,0.15)_0%,transparent_70%)]"></div>
        <div className="absolute bottom-[-10%] right-[5%] w-[50%] h-[60%] bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.06)_0%,transparent_75%)]"></div>
        
        {/* Abstract Geometric Eagle Watermark (Brand Connection) */}
        <div className="absolute top-[15%] left-[5%] w-[45%] h-[45%] md:w-[35%] md:h-[35%] opacity-[0.03] select-none pointer-events-none text-[var(--pd-gold)]">
          <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full">
            <path d="M50 10 L60 28 L85 28 L65 42 L75 68 L50 52 L25 68 L35 42 L15 28 L40 28 Z" />
            <path d="M50 35 L58 48 L72 48 L60 56 L65 72 L50 62 L35 72 L40 56 L28 48 L42 48 Z" className="opacity-60" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Badges container */}
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="inline-flex items-center gap-1.5 bg-[rgba(67,97,238,0.06)] border border-[rgba(67,97,238,0.2)] rounded-full px-3 py-1 font-mono text-[10px] text-[var(--pd-primary-light)] tracking-wider uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--pd-primary)] animate-pulse"></span>
                IA aplicada a negocios reales
              </span>
              <span className="inline-flex items-center gap-1.5 bg-[rgba(212,175,55,0.06)] border border-[rgba(212,175,55,0.2)] rounded-full px-3 py-1 font-mono text-[10px] text-[var(--pd-gold-light)] tracking-wider uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--pd-gold)]"></span>
                Sistemas para escalar
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display font-bold text-[clamp(2.5rem,5.5vw,4.8rem)] tracking-[-0.03em] leading-[1.05] text-[var(--pd-text)] mb-6">
              Automatiza. Escala.<br/>
              <span className="bg-[linear-gradient(135deg,#4361ee_0%,#7b9eff_50%,#e7c97a_100%)] bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                Domina tu mercado con IA.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="font-body text-base md:text-lg lg:text-xl text-[var(--pd-text-2)] leading-relaxed max-w-[620px] mb-8">
              Implementamos sistemas digitales, automatizaciones y modelos de inteligencia artificial para que tu negocio venda más, opere mejor y dependa menos del caos manual.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-10 z-20">
              <a 
                href="#diagnostico" 
                className="relative inline-flex items-center justify-center gap-2.5 bg-[var(--pd-primary)] text-white border-none cursor-pointer font-body font-semibold text-base px-8 py-4 rounded-xl shadow-[0_8px_24px_rgba(67,97,238,0.35)] transition-all duration-300 group hover:bg-[var(--pd-primary-hover)] hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(67,97,238,0.5)] active:translate-y-0 text-center"
              >
                <div className="absolute top-0 left-[-100%] w-full h-full bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.15),transparent)] transition-all duration-500 ease-out group-hover:left-[100%] z-0"></div>
                <span className="relative z-10">Agendar diagnóstico</span>
                <Sparkles size={16} className="relative z-10 text-[var(--pd-gold-light)] animate-pulse" />
              </a>
              
              <a 
                href="#servicios" 
                className="inline-flex items-center justify-center gap-2.5 bg-transparent text-[var(--pd-text)] border border-[rgba(255,255,255,0.15)] hover:border-[var(--pd-gold)] cursor-pointer font-body font-semibold text-base px-8 py-4 rounded-xl transition-all duration-300 hover:text-[var(--pd-gold-light)] hover:-translate-y-0.5 text-center"
              >
                <span>Ver soluciones digitales</span>
                <ArrowRight size={16} />
              </a>
            </div>

            {/* Subtle disclaimer */}
            <div className="flex items-center gap-4 text-xs font-mono text-[var(--pd-text-3)]">
              <span className="flex items-center gap-1">
                <CheckCircle size={12} className="text-[var(--pd-gold)]" />
                Entrega rápida de prototipos
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[rgba(255,255,255,0.15)]"></span>
              <span className="flex items-center gap-1">
                <CheckCircle size={12} className="text-[var(--pd-primary)]" />
                Soporte y consultoría VIP
              </span>
            </div>

          </div>

          {/* Right Column: Premium AI System Flow Visualization */}
          <div className="lg:col-span-5 relative w-full flex justify-center items-center">
            
            {/* Visual container */}
            <div className="relative w-full max-w-[440px] aspect-[1/1] bg-[var(--pd-surface)]/40 border border-[rgba(67,97,238,0.15)] rounded-3xl p-6 shadow-[0_20px_50px_rgba(11,13,23,0.8)] backdrop-blur-md overflow-hidden flex flex-col justify-between group hover:border-[var(--pd-gold)]/40 transition-colors duration-500">
              
              {/* Internal glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(67,97,238,0.08)_0%,transparent_60%)]"></div>
              
              {/* Header card info */}
              <div className="relative z-10 flex justify-between items-center border-b border-[rgba(255,255,255,0.05)] pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[rgba(67,97,238,0.1)] border border-[rgba(67,97,238,0.2)] flex items-center justify-center text-[var(--pd-primary-light)]">
                    <Cpu size={20} className="animate-spin-slow" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-sm text-[var(--pd-text)] leading-none mb-1">Ecosistema Power</h3>
                    <span className="font-mono text-[9px] text-[var(--pd-text-3)] uppercase tracking-wider">Motor de automatización comercial</span>
                  </div>
                </div>
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping"></span>
              </div>

              {/* Central flow nodes */}
              <div className="relative z-10 flex flex-col gap-3 my-6">
                
                {/* Node 1 */}
                <div className="flex items-center justify-between bg-[rgba(16,18,31,0.6)] border border-[rgba(255,255,255,0.04)] rounded-xl p-3 hover:border-[rgba(67,97,238,0.3)] transition-all duration-300">
                  <div className="flex items-center gap-2.5">
                    <div className="w-6 h-6 rounded-lg bg-[rgba(212,175,55,0.1)] flex items-center justify-center text-[var(--pd-gold)] text-xs font-bold font-mono">P</div>
                    <span className="text-xs font-semibold text-[var(--pd-text)]">Propósito & Oferta</span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400">Listo</span>
                </div>

                {/* Flow connector line */}
                <div className="w-[1.5px] h-3 bg-gradient-to-b from-[var(--pd-gold)] to-[var(--pd-primary)] mx-6 opacity-60"></div>

                {/* Node 2 */}
                <div className="flex items-center justify-between bg-[rgba(16,18,31,0.6)] border border-[rgba(255,255,255,0.04)] rounded-xl p-3 hover:border-[rgba(67,97,238,0.3)] transition-all duration-300">
                  <div className="flex items-center gap-2.5">
                    <div className="w-6 h-6 rounded-lg bg-[rgba(67,97,238,0.1)] flex items-center justify-center text-[var(--pd-primary-light)] text-xs font-bold font-mono">W</div>
                    <span className="text-xs font-semibold text-[var(--pd-text)]">Workflows & IA Agentes</span>
                  </div>
                  <span className="text-[10px] font-mono text-[var(--pd-primary-light)] animate-pulse">Ejecutando</span>
                </div>

                {/* Flow connector line */}
                <div className="w-[1.5px] h-3 bg-[var(--pd-primary)] mx-6 opacity-60"></div>

                {/* Node 3 */}
                <div className="flex items-center justify-between bg-[rgba(16,18,31,0.6)] border border-[rgba(255,255,255,0.04)] rounded-xl p-3 hover:border-[rgba(67,97,238,0.3)] transition-all duration-300">
                  <div className="flex items-center gap-2.5">
                    <div className="w-6 h-6 rounded-lg bg-[rgba(255,255,255,0.05)] flex items-center justify-center text-white text-xs font-bold font-mono">R</div>
                    <span className="text-xs font-semibold text-[var(--pd-text)]">Resultados Medibles</span>
                  </div>
                  <span className="text-[10px] font-mono text-[var(--pd-text-3)]">Pendiente</span>
                </div>

              </div>

              {/* Bottom stats widget */}
              <div className="relative z-10 bg-[rgba(212,175,55,0.05)] border border-[rgba(212,175,55,0.15)] rounded-2xl p-3.5 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Zap size={14} className="text-[var(--pd-gold)]" />
                  <span className="text-[11px] font-body text-[var(--pd-text-2)]">Eficiencia operativa</span>
                </div>
                <span className="font-display font-bold text-base text-[var(--pd-gold-light)]">+400%</span>
              </div>

              {/* Futuristic background lines */}
              <svg className="absolute inset-0 w-full h-full text-[var(--pd-primary)] opacity-[0.06] z-0" xmlns="http://www.w3.org/2000/svg">
                <line x1="10%" y1="0" x2="10%" y2="100%" stroke="currentColor" strokeWidth="1" strokeDasharray="4" />
                <line x1="30%" y1="0" x2="30%" y2="100%" stroke="currentColor" strokeWidth="1" strokeDasharray="4" />
                <line x1="70%" y1="0" x2="70%" y2="100%" stroke="currentColor" strokeWidth="1" strokeDasharray="4" />
                <line x1="90%" y1="0" x2="90%" y2="100%" stroke="currentColor" strokeWidth="1" strokeDasharray="4" />
              </svg>

            </div>

            {/* Glowing orb decorative background behind the visual widget */}
            <div className="absolute -z-10 w-[250px] h-[250px] bg-[var(--pd-primary)] opacity-[0.2] blur-[80px] rounded-full"></div>
            <div className="absolute -bottom-4 -right-4 -z-10 w-[150px] h-[150px] bg-[var(--pd-gold)] opacity-[0.1] blur-[60px] rounded-full"></div>

          </div>

        </div>
      </div>
    </section>
  );
}
