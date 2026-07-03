import { motion } from 'motion/react';
import { Calendar, ArrowRight } from 'lucide-react';

export default function AgendaSection() {
  return (
    <section id="agenda" className="py-24 md:py-32 relative overflow-hidden bg-[var(--pd-bg)] border-t border-[rgba(255,255,255,0.02)]">
      
      {/* Background blurs */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[70%] bg-[radial-gradient(ellipse,rgba(67,97,238,0.1)_0%,transparent_60%)]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[70%] bg-[radial-gradient(ellipse,rgba(212,175,55,0.05)_0%,transparent_60%)]"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="bg-[var(--pd-surface)] border border-[rgba(212,175,55,0.2)] rounded-3xl p-10 md:p-16 shadow-[0_25px_60px_rgba(11,13,23,0.95),0_0_40px_rgba(212,175,55,0.03)] flex flex-col items-center relative overflow-hidden"
        >
          {/* Inner ambient glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(67,97,238,0.08)_0%,transparent_70%)] pointer-events-none"></div>

          {/* Icon Badge */}
          <div className="w-14 h-14 rounded-2xl bg-[rgba(212,175,55,0.04)] border border-[rgba(212,175,55,0.2)] flex items-center justify-center text-[var(--pd-gold-light)] mb-8 relative z-10">
            <Calendar size={28} strokeWidth={1.5} />
          </div>
          
          <h2 className="text-3xl md:text-5xl font-display font-bold text-[var(--pd-text)] mb-6 tracking-tight relative z-10 max-w-2xl leading-tight">
            Reserva una llamada conmigo
          </h2>
          
          <p className="text-sm md:text-base text-[var(--pd-text-2)] font-body max-w-lg mx-auto mb-10 leading-relaxed relative z-10">
            Elige el horario que mejor te funcione y conversemos sobre cómo puedo ayudarte a implementar estas soluciones de alta conversión en tu negocio.
          </p>
          
          {/* Action Button */}
          <div className="w-full sm:w-auto relative z-10">
            <a 
              href="https://calendar.app.google/uaQpwSEWSHYadWcp6" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center gap-3 bg-[var(--pd-primary)] text-white border-none cursor-pointer font-body font-semibold text-base px-10 py-4.5 rounded-xl shadow-[0_8px_24px_rgba(67,97,238,0.35)] transition-all duration-300 overflow-hidden group hover:bg-[var(--pd-primary-hover)] hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(67,97,238,0.5)] active:translate-y-0 w-full sm:w-auto"
            >
              <div className="absolute top-0 left-[-100%] w-full h-full bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.2),transparent)] transition-all duration-500 ease-out group-hover:left-[100%] z-0"></div>
              <span className="relative z-10">Ver horarios disponibles</span>
              <ArrowRight size={16} className="relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
          
          <div className="mt-8 font-mono text-[9px] text-[var(--pd-text-3)] uppercase tracking-[0.18em] relative z-10 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            Llamada virtual de 15 minutos sin costo
          </div>

        </motion.div>
      </div>
    </section>
  );
}
