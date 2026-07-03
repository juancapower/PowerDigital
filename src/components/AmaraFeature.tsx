import { motion } from 'motion/react';
import { Cpu, CheckCircle } from 'lucide-react';

export default function AmaraFeature() {
  const bullets = [
    "Atención y presentación de marca interactiva.",
    "Contenido visual consistente y alineado a tu branding.",
    "Campañas de alto impacto con identidad propia.",
    "Experiencias interactivas escalables sin límites creativos.",
    "Escalabilidad sin perder presencia física en ningún canal."
  ];

  return (
    <section id="modelos" className="py-24 md:py-32 relative overflow-hidden bg-[var(--pd-bg)]">
      
      {/* Background lights */}
      <div className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.03)_0%,transparent_60%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center bg-[var(--pd-surface)] border border-[var(--pd-border)] rounded-3xl p-8 md:p-16 relative">
          
          {/* Subtle gold brand watermark top right */}
          <div className="absolute top-6 right-8 opacity-[0.02] text-[var(--pd-gold)] hidden md:block select-none pointer-events-none">
            <svg viewBox="0 0 100 100" fill="currentColor" className="w-16 h-16">
              <path d="M50 10 L60 28 L85 28 L65 42 L75 68 L50 52 L25 68 L35 42 L15 28 L40 28 Z" />
            </svg>
          </div>

          {/* Left Block: Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            <div className="inline-flex items-center space-x-2 bg-[rgba(212,175,55,0.06)] border border-[rgba(212,175,55,0.2)] rounded-full px-4 py-1.5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--pd-gold)] animate-pulse"></span>
              <span className="text-[var(--pd-gold-light)] font-mono text-[10px] font-bold tracking-widest uppercase">
                CASO ESTRELLA · MODELOS DIGITALES IA
              </span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-display font-bold text-[var(--pd-text)] mb-6 leading-[1.15] tracking-tight">
              Modelos digitales que trabajan para tu marca <br/>
              <span className="bg-[linear-gradient(135deg,#e7c97a_0%,#d4af37_60%,#9c6a16_100%)] bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                incluso cuando tú no estás conectado.
              </span>
            </h2>

            <p className="font-serif italic text-base md:text-lg text-[var(--pd-gray-light)] mb-6 leading-relaxed">
              Te presentamos a <span className="font-semibold text-white">Amara</span>, nuestra modelo digital exclusiva e insignia del ecosistema.
            </p>
            
            <p className="text-sm md:text-base text-[var(--pd-text-2)] font-body mb-8 leading-relaxed">
              Creamos modelos e influyentes digitales hiperrealistas a medida. Logramos que interactúen directamente con tus productos físicos o digitales, eliminando de raíz los elevados costos de agencias de modelaje, producciones tradicionales, alquiler de locaciones y viáticos.
            </p>
            
            {/* Elegant Bullet List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-10">
              {bullets.map((bullet, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="mt-1 w-4 h-4 rounded-full bg-[rgba(212,175,55,0.1)] flex items-center justify-center text-[var(--pd-gold)] flex-shrink-0">
                    <CheckCircle size={12} className="text-[var(--pd-gold)]" />
                  </div>
                  <span className="text-xs md:text-sm text-[var(--pd-text-2)] font-body font-medium">
                    {bullet}
                  </span>
                </div>
              ))}
            </div>
            
            <a 
              href="#agenda" 
              className="relative inline-flex items-center justify-center gap-2.5 bg-[var(--pd-primary)] text-white border-none cursor-pointer font-body font-semibold text-sm px-8 py-4 rounded-xl shadow-[0_8px_24px_rgba(67,97,238,0.3)] transition-all duration-300 hover:bg-[var(--pd-primary-hover)] hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(67,97,238,0.45)]"
            >
              <Cpu size={16} />
              <span>Cotizar modelo digital</span>
            </a>
          </motion.div>

          {/* Right Block: Showcase Portrait Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative w-full flex justify-center"
          >
            <div className="w-full max-w-[340px] aspect-[3/4] rounded-2xl bg-gradient-to-tr from-[rgba(212,175,55,0.05)] to-[rgba(67,97,238,0.15)] border border-[rgba(212,175,55,0.15)] p-2 shadow-[0_20px_40px_rgba(11,13,23,0.7)] hover:border-[var(--pd-gold)]/40 transition-all duration-500 relative overflow-hidden group">
              
              <div className="w-full h-full rounded-xl bg-[var(--pd-bg)] flex items-center justify-center relative overflow-hidden">
                <img 
                  src="https://res.cloudinary.com/ddn6qh7ve/image/upload/q_auto/f_auto/v1776347918/AmaraDigital_PD_ro7gez.png" 
                  alt="Amara Modelo Digital" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 mix-blend-normal"
                  referrerPolicy="no-referrer"
                />
                
                {/* Title badge in corner of image */}
                <div className="absolute bottom-4 left-4 right-4 bg-[var(--pd-surface)]/80 backdrop-blur-md border border-[rgba(255,255,255,0.06)] rounded-xl p-3 flex justify-between items-center z-20">
                  <div>
                    <h4 className="font-display font-bold text-xs text-white">Amara V1.2</h4>
                    <span className="font-mono text-[8px] text-[var(--pd-gold-light)] uppercase tracking-wider">Hiperrealismo Generado por IA</span>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-[var(--pd-bg)]/80 via-transparent to-transparent"></div>
              </div>
            </div>
            
            {/* Glowing background halo */}
            <div className="absolute -bottom-8 -right-8 w-44 h-44 bg-[var(--pd-primary)]/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -top-8 -left-8 w-44 h-44 bg-[var(--pd-gold)]/5 rounded-full blur-3xl -z-10"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
