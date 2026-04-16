import { motion } from 'motion/react';

export default function FounderSection() {
  return (
    <section className="py-24 md:py-32 relative z-10 overflow-hidden bg-[var(--pd-bg)]" style={{ backgroundImage: 'radial-gradient(ellipse at 80% 50%, rgba(67,97,238,0.12) 0%, transparent 55%)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          
          {/* Image Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full md:w-1/2 relative"
          >
            <div className="relative rounded-[var(--radius-lg)] overflow-hidden aspect-[4/5] md:aspect-square border border-[var(--pd-border)] bg-white/5">
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--pd-bg)] via-transparent to-transparent z-10"></div>
              <img 
                src="https://res.cloudinary.com/ddn6qh7ve/image/upload/q_auto/f_auto/v1775514393/JuanCaPower_fondonegro_fo2v6n.jpg" 
                alt="JuanCa Power" 
                className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </motion.div>

          {/* Text Column */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="w-full md:w-1/2 flex flex-col justify-center"
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold text-[var(--pd-text)] mb-6 leading-tight">
              La IA no reemplaza el talento. <br />
              <span className="text-[var(--pd-primary-light)]">Lo escala.</span>
            </h2>
            
            <div className="space-y-6 text-[var(--pd-text-2)] font-body text-lg leading-[1.75]">
              <p>
                Soy Juan Cabrera. He visto a decenas de profesionales brillantes perder clientes frente a competidores mediocres, simplemente porque no sabían cómo posicionarse.
              </p>
              <p>
                El talento oculto no factura. Por eso creé Power Digital: para construir sistemas automatizados con Inteligencia Artificial que transforman tu conocimiento en autoridad indiscutible.
              </p>
              <p className="text-[var(--pd-text)] font-medium border-l-[3px] border-[var(--pd-primary)] pl-4 italic rounded-l-[2px]">
                "No necesitas trabajar más horas. Necesitas un sistema que trabaje por ti."
              </p>
            </div>

            <div className="mt-10">
              <p className="font-display font-bold text-[var(--pd-text)] tracking-[-0.02em] text-xl">JUAN CABRERA</p>
              <p className="text-xs text-[var(--pd-primary-light)] font-mono uppercase tracking-[0.14em] mt-1">Ingeniero de Sistemas, Fundador y Estratega IA</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
