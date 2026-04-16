import { motion } from 'motion/react';
import { Cpu } from 'lucide-react';

export default function AmaraFeature() {
  return (
    <section id="modelos" className="py-24 relative overflow-hidden bg-[var(--pd-bg)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center bg-[var(--pd-surface-2)] border border-[var(--pd-border)] rounded-[var(--radius-xl)] p-8 md:p-12">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center space-x-2 bg-[rgba(67,97,238,0.12)] border border-[var(--pd-border)] rounded-[var(--radius-full)] px-4 py-2 mb-8">
              <div className="w-2 h-2 rounded-full bg-[var(--pd-primary)] animate-pulse"></div>
              <span className="text-[var(--pd-primary-light)] font-mono text-xs font-bold tracking-[0.08em] uppercase">
                IA Generativa · Producción Propia
              </span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-display font-semibold text-[var(--pd-text)] mb-6 leading-tight">
              Conoce a <span className="text-[var(--pd-primary-light)]">Amara</span>
            </h2>
            
            <p className="text-xl text-[var(--pd-text-2)] font-body mb-6 leading-relaxed">
              Nuestra Modelo Digital Exclusiva.
            </p>
            
            <p className="text-lg text-[var(--pd-text-2)] font-body mb-8 leading-relaxed">
              Creamos modelos digitales hiperrealistas generadas con IA. Hacemos que interactúen directamente con tu producto físico, eliminando los altos costos de producciones tradicionales, locaciones y viáticos.
            </p>
            
            <ul className="space-y-4 mb-10">
              {['Modelos o mascotas digitales a medida', 'Tu producto real en manos de la IA', 'Campañas visuales sin límites creativos'].map((item, i) => (
                <li key={i} className="flex items-center text-[var(--pd-text-2)] font-body">
                  <Cpu className="text-[var(--pd-primary)] mr-3" size={20} />
                  {item}
                </li>
              ))}
            </ul>
            
            <a href="https://wa.me/51920690260" target="_blank" rel="noopener noreferrer" className="inline-block px-[28px] py-[14px] rounded-[var(--radius-md)] bg-[var(--pd-primary)] text-white font-body font-semibold hover:bg-[var(--pd-primary-hover)] hover:-translate-y-[1px] hover:shadow-[var(--pd-shadow-glow)] transition-all duration-300 text-center">
              Cotizar Modelo Digital
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[var(--radius-lg)] bg-gradient-to-tr from-[var(--pd-primary)]/5 to-[var(--pd-primary)]/20 border border-[var(--pd-border)] p-2 shadow-[var(--pd-shadow-glow)] relative overflow-hidden group">
              {/* Placeholder for Amara Image/Video */}
              <div className="w-full h-full rounded-[var(--radius-md)] bg-[var(--pd-bg)] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/ddn6qh7ve/image/upload/q_auto/f_auto/v1776347918/AmaraDigital_PD_ro7gez.png')] bg-cover bg-center opacity-100 group-hover:scale-105 transition-transform duration-700"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--pd-bg)]/60 via-transparent to-transparent"></div>
              </div>
            </div>
            
            {/* Decorative floating elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-[var(--pd-primary)]/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[var(--pd-primary)]/10 rounded-full blur-2xl"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
