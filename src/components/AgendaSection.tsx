import { motion } from 'motion/react';
import { Calendar, Sparkles, ArrowRight, Bot } from 'lucide-react';

export default function AgendaSection() {
  return (
    <section id="agenda" className="py-24 md:py-32 relative overflow-hidden bg-[var(--pd-bg)] border-t border-[rgba(255,255,255,0.02)]">
      
      {/* Background blurs */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[70%] bg-[radial-gradient(ellipse,rgba(67,97,238,0.12)_0%,transparent_60%)]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[70%] bg-[radial-gradient(ellipse,rgba(212,175,55,0.06)_0%,transparent_60%)]"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="bg-[var(--pd-surface)] border border-[rgba(212,175,55,0.2)] rounded-3xl p-10 md:p-20 shadow-[0_20px_50px_rgba(11,13,23,0.9),0_0_30px_rgba(212,175,55,0.05)] flex flex-col items-center relative overflow-hidden"
        >
          {/* Inner glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(67,97,238,0.1)_0%,transparent_70%)] pointer-events-none"></div>

          {/* Icon Badge */}
          <div className="w-16 h-16 rounded-2xl bg-[rgba(212,175,55,0.05)] border border-[rgba(212,175,55,0.2)] flex items-center justify-center text-[var(--pd-gold-light)] mb-8 relative z-10">
            <Calendar size={32} strokeWidth={1.5} />
          </div>
          
          <h2 className="text-3xl md:text-5xl font-display font-bold text-[var(--pd-text)] mb-6 tracking-tight relative z-10 max-w-3xl leading-tight">
            La IA no transforma negocios desordenados.<br/>
            <span className="bg-[linear-gradient(135deg,#e7c97a_0%,#d4af37_60%,#9c6a16_100%)] bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              Los sistemas sí.
            </span>
          </h2>
          
          <p className="text-base md:text-xl text-[var(--pd-text-2)] font-body max-w-2xl mx-auto mb-10 leading-relaxed relative z-10">
            Agenda un diagnóstico Power Digital y descubre qué parte de tu operación puede empezar a trabajar mejor, más rápido y con menos desgaste.
          </p>
          
          {/* Action Button cluster */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto relative z-10">
            <a 
              href="https://calendar.app.google/uaQpwSEWSHYadWcp6" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center gap-3 bg-[var(--pd-primary)] text-white border-none cursor-pointer font-body font-semibold text-base px-8 py-4.5 rounded-xl shadow-[0_8px_24px_rgba(67,97,238,0.4)] transition-all duration-300 overflow-hidden group hover:bg-[var(--pd-primary-hover)] hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(67,97,238,0.5)] active:translate-y-0 w-full sm:w-auto"
            >
              <div className="absolute top-0 left-[-100%] w-full h-full bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.2),transparent)] transition-all duration-500 ease-out group-hover:left-[100%] z-0"></div>
              <span className="relative z-10">Agendar llamada (Calendar)</span>
              <ArrowRight size={18} className="relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <a 
              href="#diagnostico"
              className="inline-flex items-center justify-center gap-2.5 bg-transparent text-[var(--pd-text)] border border-[rgba(255,255,255,0.15)] hover:border-[var(--pd-gold)] cursor-pointer font-body font-semibold text-base px-8 py-4.5 rounded-xl transition-all duration-300 hover:text-[var(--pd-gold-light)] hover:-translate-y-0.5 w-full sm:w-auto text-center"
            >
              <Bot size={18} className="text-[var(--pd-gold)]" />
              <span>Diagnóstico online</span>
            </a>
          </div>
          
          <div className="mt-8 font-mono text-[10px] text-[var(--pd-text-3)] uppercase tracking-[0.15em] relative z-10 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            Horarios actualizados en tiempo real
          </div>

        </motion.div>
      </div>
    </section>
  );
}
