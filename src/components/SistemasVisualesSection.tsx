import { motion } from 'motion/react';
import { Sparkles, Palette, Globe, Megaphone, ArrowRight, Video, FileText, CheckCircle } from 'lucide-react';

export default function SistemasVisualesSection() {
  const blocks = [
    {
      id: "A",
      icon: <Sparkles className="w-6 h-6 text-[var(--pd-gold)]" />,
      title: "Contenido con IA",
      desc: "Producción ágil de videos de alto impacto y avatares personalizados para dinamizar tus redes sin salir en cámara.",
      services: ["Video IA de 30 segundos", "Video IA de 60 segundos", "Avatar IA Premium (1 rostro, 5 poses)"],
      color: "var(--pd-gold)",
      bgGradient: "from-[rgba(212,175,55,0.02)] to-[rgba(156,106,22,0.05)]",
      borderColor: "border-[rgba(212,175,55,0.15)]",
      hoverBorder: "hover:border-[var(--pd-gold)]/50",
      glow: "hover:shadow-[0_0_25px_rgba(212,175,55,0.06)]"
    },
    {
      id: "B",
      icon: <Palette className="w-6 h-6 text-[var(--pd-primary-light)]" />,
      title: "Diseño y Marca",
      desc: "Identidad visual y recursos gráficos profesionales listos para captar la atención de tus clientes potenciales.",
      services: ["Kit Visual Rápido (Logo + Paleta + Font)", "Posts, carruseles y flyers para redes", "Flyers individuales premium", "Diseños corporativos (banners, roll-ups, volantes)"],
      color: "var(--pd-primary-light)",
      bgGradient: "from-[rgba(67,97,238,0.02)] to-[rgba(110,141,255,0.05)]",
      borderColor: "border-[rgba(67,97,238,0.15)]",
      hoverBorder: "hover:border-[var(--pd-primary)]/50",
      glow: "hover:shadow-[0_0_25px_rgba(67,97,238,0.06)]"
    },
    {
      id: "C",
      icon: <Globe className="w-6 h-6 text-white" />,
      title: "Presencia Digital",
      desc: "Canales oficiales optimizados para generar credibilidad, informar tu propuesta de valor y recibir solicitudes de compra.",
      services: ["Landing Page (Dominio + Hosting + Diseño)", "Optimización de Perfil Social (IG/WA/TK/YT)", "Catálogo de Precios interactivo"],
      color: "#ffffff",
      bgGradient: "from-[rgba(255,255,255,0.01)] to-[rgba(255,255,255,0.03)]",
      borderColor: "border-[rgba(255,255,255,0.1)]",
      hoverBorder: "hover:border-white/30",
      glow: "hover:shadow-[0_0_25px_rgba(255,255,255,0.03)]"
    },
    {
      id: "D",
      icon: <Megaphone className="w-6 h-6 text-[var(--pd-primary-light)]" />,
      title: "Captación",
      desc: "Lanzamiento y configuración de campañas de anuncios iniciales para captar prospectos interesados en tu oferta.",
      services: ["Meta Ads Básico (1 creativo + pauta)", "Segmentación estratégica de audiencias", "Lanzamiento y validación inicial"],
      color: "var(--pd-primary-light)",
      bgGradient: "from-[rgba(67,97,238,0.02)] to-[rgba(30,46,134,0.08)]",
      borderColor: "border-[rgba(67,97,238,0.15)]",
      hoverBorder: "hover:border-[var(--pd-primary-light)]/50",
      glow: "hover:shadow-[0_0_25px_rgba(110,141,255,0.06)]"
    }
  ];

  return (
    <section className="py-24 md:py-32 relative z-10 bg-[var(--pd-bg)] border-t border-[rgba(255,255,255,0.02)]">
      {/* Decorative ambient lights */}
      <div className="absolute top-[30%] left-[10%] w-[60%] h-[40%] bg-[radial-gradient(ellipse_at_center,rgba(67,97,238,0.04)_0%,transparent_70%)] pointer-events-none -z-10"></div>
      <div className="absolute bottom-[20%] right-[10%] w-[50%] h-[40%] bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.03)_0%,transparent_70%)] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center mb-16 md:mb-24">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--pd-gold)] mb-4 inline-block">Sinergia Comercial</span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[clamp(2.2rem,4.5vw,3.6rem)] font-display font-bold text-[var(--pd-text)] mb-6 tracking-tight leading-[1.15]"
          >
            Sistemas Visuales para <span className="text-[var(--pd-primary-light)]">Vender en Digital</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[var(--pd-text-2)] font-body max-w-3xl mx-auto text-base md:text-lg leading-relaxed"
          >
            No necesitas más piezas sueltas. Necesitas una presencia digital coherente: <span className="text-white font-medium">marca, contenido, página y anuncios</span> trabajando con la misma intención para convertir visitas en clientes reales.
          </motion.p>
        </div>

        {/* 4 Block Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {blocks.map((block, index) => (
            <motion.div
              key={block.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className={`group bg-gradient-to-br ${block.bgGradient} border ${block.borderColor} rounded-2xl p-6 md:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 ${block.hoverBorder} ${block.glow}`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {block.icon}
                  </div>
                  <span className="font-mono text-xs font-bold text-[var(--pd-text-3)] tracking-widest bg-[var(--pd-surface)] border border-white/[0.05] rounded-full px-3 py-1">
                    BLOQUE 0{index + 1}
                  </span>
                </div>

                <h3 className="font-display font-bold text-xl text-white mb-3 group-hover:text-[var(--pd-gold-light)] transition-colors duration-300">
                  {block.title}
                </h3>
                
                <p className="font-body text-sm text-[var(--pd-text-2)] leading-relaxed mb-6">
                  {block.desc}
                </p>

                {/* Service Bullet Items */}
                <div className="space-y-2.5 border-t border-white/[0.05] pt-5 mb-8">
                  {block.services.map((srv, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs text-[var(--pd-text-2)] font-body">
                      <CheckCircle size={13} className="text-[var(--pd-gold)] opacity-70 flex-shrink-0" />
                      <span>{srv}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Little CTA Button inside card */}
              <div className="pt-2">
                <a 
                  href="#servicios" 
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-medium tracking-wider text-[var(--pd-primary-light)] hover:text-[var(--pd-gold)] transition-colors duration-200"
                >
                  <span>VER DETALLES</span>
                  <ArrowRight size={12} className="transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global Catalog callout box */}
        <div className="bg-[var(--pd-surface)] border border-[rgba(212,175,55,0.15)] rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden shadow-[0_15px_30px_rgba(11,13,23,0.5)]">
          <div className="absolute top-0 right-0 w-[30%] h-full bg-[radial-gradient(ellipse_at_right,rgba(212,175,55,0.03)_0%,transparent_70%)] pointer-events-none"></div>
          
          <div className="text-center md:text-left">
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--pd-gold)] block mb-1">Catálogo Oficial</span>
            <h4 className="font-display font-bold text-lg text-white mb-2">¿Ya sabes qué pieza, página o campaña necesitas?</h4>
            <p className="text-xs md:text-sm text-[var(--pd-text-2)] font-body leading-normal">
              Si ya tienes claro tu requerimiento, descarga nuestro catálogo oficial de precios y elige el servicio ideal para tu momento.
            </p>
          </div>
          
          <a 
            href="https://res.cloudinary.com/ddn6qh7ve/image/upload/v1777612918/Brochure_PowerDigital_Abr26_a4tkhk.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[var(--pd-gold)] to-[var(--pd-gold-light)] hover:from-[var(--pd-gold-light)] hover:to-[var(--pd-gold)] text-[var(--pd-bg)] font-body font-bold text-xs md:text-sm px-6 py-3 rounded-xl shadow-[0_8px_20px_rgba(212,175,55,0.25)] transition-all duration-300 hover:-translate-y-0.5 shrink-0"
          >
            <span>Descargar Catálogo de Precios</span>
            <ArrowRight size={14} />
          </a>
        </div>

      </div>
    </section>
  );
}
