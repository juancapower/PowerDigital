import { motion } from 'motion/react';
import { Calendar } from 'lucide-react';

export default function AgendaSection() {
  return (
    <section id="agenda" className="py-32 relative overflow-hidden bg-[var(--pd-bg)] border-t border-[rgba(255,255,255,0.02)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="bg-[var(--pd-surface-2)] border border-[rgba(67,97,238,0.25)] rounded-3xl p-10 md:p-16 shadow-[0_0_50px_rgba(67,97,238,0.1)] flex flex-col items-center relative overflow-hidden"
        >
          {/* Inner glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(67,97,238,0.15)_0%,transparent_70%)] pointer-events-none"></div>

          <div className="w-16 h-16 rounded-2xl bg-[rgba(67,97,238,0.15)] border border-[rgba(67,97,238,0.3)] flex items-center justify-center text-[var(--pd-primary-light)] mb-8 relative z-10">
            <Calendar size={32} strokeWidth={1.5} />
          </div>
          
          <h2 className="text-3xl md:text-5xl font-display font-bold text-[var(--pd-text)] mb-6 tracking-tight relative z-10">
            Reserva una llamada conmigo
          </h2>
          
          <p className="text-lg md:text-xl text-[var(--pd-text-2)] font-body max-w-2xl mx-auto mb-10 leading-relaxed relative z-10">
            Elige el horario que mejor te funcione y conversemos sobre cómo puedo ayudarte.
          </p>
          
          <a 
            href="https://calendar.app.google/uaQpwSEWSHYadWcp6" 
            target="_blank" 
            rel="noopener noreferrer"
            className="relative inline-flex items-center gap-3 bg-[var(--pd-primary)] text-white border-none cursor-pointer font-body font-semibold text-lg px-8 py-4 md:px-10 md:py-5 rounded-xl shadow-[0_4px_20px_rgba(67,97,238,0.4)] transition-all duration-300 overflow-hidden group hover:bg-[var(--pd-primary-hover)] hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(67,97,238,0.5)] active:translate-y-0 z-10"
          >
            <div className="absolute top-0 left-[-100%] w-full h-full bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.2),transparent)] transition-all duration-500 ease-out group-hover:left-[100%] z-0"></div>
            <span className="relative z-10">Ver horarios disponibles</span>
            <svg className="relative z-10 transition-transform duration-300 group-hover:translate-x-1" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </motion.div>
      </div>
      
      {/* Decorative blurs */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[80%] bg-[radial-gradient(ellipse,rgba(67,97,238,0.12)_0%,transparent_60%)] pointer-events-none"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[80%] bg-[radial-gradient(ellipse,rgba(67,97,238,0.08)_0%,transparent_60%)] pointer-events-none"></div>
    </section>
  );
}
