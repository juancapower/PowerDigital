import { motion } from 'motion/react';

export default function FounderSection() {
  return (
    <section className="py-24 md:py-32 relative z-10 overflow-hidden bg-[var(--pd-bg)]">
      
      {/* Background glow behind founder */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[30%] right-[5%] w-[45%] h-[55%] bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.04)_0%,transparent_60%)]"></div>
        <div className="absolute bottom-[10%] left-[5%] w-[45%] h-[55%] bg-[radial-gradient(ellipse_at_center,rgba(67,97,238,0.05)_0%,transparent_60%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          
          {/* Left Block: Elite Grayscale Portrait with Dual Border */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full md:w-1/2 relative"
          >
            {/* Elegant double border structure with slight gold shimmer */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] md:aspect-square border border-[var(--pd-border-gold)] p-2 bg-[rgba(212,175,55,0.02)] shadow-[0_20px_50px_rgba(11,13,23,0.8)] group">
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--pd-bg)] via-transparent to-transparent z-10 opacity-80"></div>
              <img 
                src="https://res.cloudinary.com/ddn6qh7ve/image/upload/q_auto/f_auto/v1775514393/JuanCaPower_fondonegro_fo2v6n.jpg" 
                alt="JuanCa Cabrera - Fundador de Power Digital" 
                className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700 rounded-xl"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Abstract brand decorative element behind portrait */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[var(--pd-primary)] opacity-[0.1] blur-[50px] -z-10"></div>
          </motion.div>

          {/* Right Block: Personal Brand Narrative & Vision */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="w-full md:w-1/2 flex flex-col justify-center text-left"
          >
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--pd-gold)] mb-4 inline-block">Visión Estratégica</span>
            
            <h2 className="text-3xl md:text-5xl font-display font-bold text-[var(--pd-text)] mb-6 leading-tight tracking-tight">
              La IA no reemplaza el talento.<br/>
              <span className="bg-[linear-gradient(135deg,#4361ee_0%,#7b9eff_60%,#e7c97a_100%)] bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                Lo escala exponencialmente.
              </span>
            </h2>
            
            <div className="space-y-6 text-[var(--pd-text-2)] font-body text-base md:text-lg leading-relaxed">
              <p>
                JuanCa Cabrera une estrategia, tecnología y transformación humana para construir sistemas que no solo automatizan tareas, sino que elevan la forma en que una persona o negocio opera, vende y crece.
              </p>
              <p>
                El talento oculto no factura. Por eso creé <span className="text-white font-semibold">Power Digital</span>: para estructurar e implementar sistemas inteligentes robustos que multiplican la productividad y convierten tu conocimiento único en autoridad comercial indiscutible.
              </p>
              
              {/* Serif Manifesto Block */}
              <p className="font-serif italic text-lg md:text-xl text-[var(--pd-gold-soft)] border-l-2 border-[var(--pd-gold)] pl-5 py-1 my-6 leading-relaxed">
                “No necesitas trabajar más horas en tareas mecánicas. Necesitas un sistema inteligente conectado que opere con precisión quirúrgica por ti.”
              </p>
            </div>

            {/* Premium Signature block */}
            <div className="mt-8 pt-6 border-t border-[rgba(255,255,255,0.05)]">
              <p className="font-display font-bold text-[var(--pd-text)] tracking-tight text-xl mb-1">
                JuanCa Cabrera
              </p>
              <p className="text-xs text-[var(--pd-gold)] font-mono uppercase tracking-[0.12em] mb-1">
                Fundador de JuanCa Power & Power Digital
              </p>
              <p className="text-[11px] text-[var(--pd-text-3)] font-mono uppercase tracking-[0.08em]">
                Estrategia IA | Automatización | Transformación Digital
              </p>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
