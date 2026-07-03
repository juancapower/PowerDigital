import { motion } from 'motion/react';

export default function FounderSection() {
  return (
    <section className="py-24 md:py-32 relative z-10 overflow-hidden bg-[var(--pd-bg)]">
      
      {/* Background glow behind founder */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[30%] left-[5%] w-[45%] h-[55%] bg-[radial-gradient(ellipse_at_center,rgba(67,97,238,0.04)_0%,transparent_60%)]"></div>
        <div className="absolute bottom-[10%] right-[5%] w-[45%] h-[55%] bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.03)_0%,transparent_60%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          
          {/* Left Block: Premium Portrait (3:4 or vertical) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full md:w-1/2 relative"
          >
            {/* Elegant container with dual border structure and subtle gold shimmer */}
            <div className="relative rounded-2xl overflow-hidden aspect-[3/4] border border-[var(--pd-border-gold)] p-2 bg-[rgba(212,175,55,0.02)] shadow-[0_20px_50px_rgba(11,13,23,0.8)] group">
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--pd-bg)]/80 via-transparent to-transparent z-10 opacity-60"></div>
              <img 
                src="https://res.cloudinary.com/ddn6qh7ve/image/upload/f_auto,q_auto/v1783046674/hf_20260702_180619_3edec26b-fcca-4008-8821-66cae05edc7c_h4jswp.png" 
                alt="Juan Cabrera (JuanCa Power) - CEO & Fundador" 
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700 rounded-xl"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Decorative ambient flare behind portrait */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[var(--pd-primary)] opacity-[0.1] blur-[50px] -z-10"></div>
          </motion.div>

          {/* Right Block: Brand Narrative & Connection */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="w-full md:w-1/2 flex flex-col justify-center text-left"
          >
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--pd-gold)] mb-4 inline-block">Sub-landing Oficial</span>
            
            <h2 className="text-3xl md:text-5xl font-display font-bold text-[var(--pd-text)] mb-6 leading-tight tracking-tight">
              El respaldo detrás de tu marca
            </h2>
            
            <div className="space-y-6 text-[var(--pd-text-2)] font-body text-base md:text-lg leading-relaxed">
              <p>
                Power Digital no es una agencia de software frío. Es la vertical digital de <span className="text-white font-semibold">JuanCa Power</span>, enfocada en transformar negocios a través de sistemas de contenido, marca y tecnología que te devuelven tiempo y multiplican tu valor.
              </p>
              
              {/* Serif Quote Block using Cormorant Garamond */}
              <p className="font-serif italic text-xl md:text-2xl text-[var(--pd-gold-soft)] border-l-2 border-[var(--pd-gold)] pl-5 py-1.5 my-8 leading-relaxed">
                “La tecnología debe estar al servicio de tu propósito, no al revés. Automatizamos lo mecánico para que puedas enfocarte en lo estratégico.”
              </p>
            </div>

            {/* Signature Block */}
            <div className="mt-8 pt-6 border-t border-white/[0.05]">
              <p className="font-display font-bold text-[var(--pd-text)] tracking-tight text-xl mb-1">
                Juan Cabrera (JuanCa Power)
              </p>
              <p className="text-xs text-[var(--pd-gold)] font-mono uppercase tracking-[0.12em] mb-1">
                CEO & Fundador
              </p>
              <p className="text-[11px] text-[var(--pd-text-3)] font-mono uppercase tracking-[0.08em]">
                Contenido IA · Marca · Tecnología para Escalar
              </p>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
