import { motion } from 'motion/react';
import { Video, UserCheck, Palette, Award, Globe, Target, ArrowRight, Check } from 'lucide-react';

export default function ServicesSection() {
  const categories = [
    {
      id: "videos-ia",
      icon: <Video className="w-6 h-6 text-[var(--pd-gold)]" />,
      title: "Videos con IA",
      subtitle: "Video IA 30s · Video IA 60s",
      desc: "Videos cortos, modernos y llamativos para redes, anuncios, lanzamientos o presentación de marca.",
      idealFor: "E-commerce, infoproductores, creadores de contenido y marcas de servicios.",
      services: [
        "Video IA 30s (Script optimizado + Voz premium + Animación visual)",
        "Video IA 60s (Alineado para alta retención en TikTok e IG Reels)",
        "Edición moderna de alta dinámica con subtítulos dinámicos"
      ],
      colorClass: "text-[var(--pd-gold-light)]",
      badge: "Tendencia",
      badgeColor: "bg-[rgba(212,175,55,0.06)] border-[rgba(212,175,55,0.2)] text-[var(--pd-gold-light)]"
    },
    {
      id: "avatar-ia",
      icon: <UserCheck className="w-6 h-6 text-[var(--pd-primary-light)]" />,
      title: "Avatar IA Premium",
      subtitle: "Rostro personalizado · 5 poses profesionales",
      desc: "Crea una presencia digital profesional y consistente para campañas, contenido o atención visual de marca.",
      idealFor: "Marcas personales, directores comerciales y negocios que no quieren salir en cámara.",
      services: [
        "1 Rostro digital exclusivo con identidad personalizada",
        "5 Poses profesionales en fondo de alta calidad",
        "Estilo visual fotográfico premium alineado a tu marca"
      ],
      colorClass: "text-[var(--pd-primary-light)]",
      badge: "Insignia",
      badgeColor: "bg-[rgba(67,97,238,0.08)] border-[rgba(67,97,238,0.2)] text-[var(--pd-primary-light)]"
    },
    {
      id: "edicion-diseno",
      icon: <Palette className="w-6 h-6 text-white" />,
      title: "Edición y Diseño",
      subtitle: "Publicaciones · Flyers · Banners",
      desc: "Piezas visuales listas para publicar, promocionar o presentar tu negocio con calidad profesional.",
      idealFor: "Negocios locales, clínicas, pymes y perfiles activos en redes.",
      services: [
        "Solo Edición (Cortar, mejorar audio, colorizar y subtitular)",
        "Posts: carruseles de valor y flyers simples altamente estéticos",
        "Flyers individuales de alta conversión para ofertas especiales",
        "Diseños corporativos para banners físicos, roll-ups y volantes"
      ],
      colorClass: "text-white",
      badge: "Esencial",
      badgeColor: "bg-white/[0.04] border-white/[0.08] text-white"
    },
    {
      id: "marca-rapida",
      icon: <Award className="w-6 h-6 text-[var(--pd-gold)]" />,
      title: "Marca Rápida",
      subtitle: "Kit Visual Rápido",
      desc: "Una identidad básica pero profesional para empezar a comunicar con coherencia y autoridad en digital.",
      idealFor: "Startups, consultores, profesionales independientes y nuevos proyectos.",
      services: [
        "Diseño de Isotipo / Logotipo principal moderno",
        "Paleta de colores oficial con códigos hex para Canva/Web",
        "Selección y jerarquía de fuentes tipográficas recomendadas",
        "Entrega rápida y lista para aplicar en redes"
      ],
      colorClass: "text-[var(--pd-gold-light)]",
      badge: "Lanzamiento",
      badgeColor: "bg-[rgba(212,175,55,0.06)] border-[rgba(212,175,55,0.2)] text-[var(--pd-gold-light)]"
    },
    {
      id: "presencia-web",
      icon: <Globe className="w-6 h-6 text-[var(--pd-primary-light)]" />,
      title: "Presencia Web y Social",
      subtitle: "Landings · Perfiles · Catálogos",
      desc: "Ordenamos tu presencia digital para que tu cliente entienda rápido quién eres, qué ofreces y cómo comprarte.",
      idealFor: "Empresas B2B, prestadores de servicios, agencias y lanzamientos.",
      services: [
        "Landing Page Premium: incluye dominio, hosting y diseño ultra rápido",
        "Optimización de Perfil Social: configuración pro de IG, WA y TikTok",
        "Catálogo de Precios digital de carga inmediata y estética de lujo"
      ],
      colorClass: "text-[var(--pd-primary-light)]",
      badge: "Alta Conversión",
      badgeColor: "bg-[rgba(67,97,238,0.08)] border-[rgba(67,97,238,0.2)] text-[var(--pd-primary-light)]"
    },
    {
      id: "captacion-basica",
      icon: <Target className="w-6 h-6 text-white" />,
      title: "Captación Básica",
      subtitle: "Meta Ads Básico",
      desc: "Una campaña inicial para validar tu oferta, atraer atención directa y comenzar a generar oportunidades reales.",
      idealFor: "Negocios locales, clínicas, consultores y lanzamientos express.",
      services: [
        "Creación de 1 creativo publicitario de alta retención",
        "Segmentación estratégica básica en Meta Ads (FB & IG)",
        "Lanzamiento y optimización de campaña durante 7 días",
        "Reporte básico de rendimiento y mensajes conseguidos"
      ],
      colorClass: "text-white",
      badge: "Directo a Ventas",
      badgeColor: "bg-white/[0.04] border-white/[0.08] text-white"
    }
  ];

  return (
    <section id="servicios" className="py-24 md:py-32 relative z-10 bg-[var(--pd-bg)] border-t border-[rgba(255,255,255,0.01)]">
      {/* Background decoration */}
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[80%] h-[40%] bg-[radial-gradient(ellipse_at_center,rgba(67,97,238,0.04)_0%,transparent_70%)] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center mb-16 md:mb-24">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--pd-gold)] mb-4 inline-block">Portafolio Comercial</span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[clamp(2.2rem,4.5vw,3.6rem)] font-display font-bold text-[var(--pd-text)] mb-4 tracking-tight leading-tight"
          >
            Servicios Digitales de <span className="text-[var(--pd-primary-light)]">Alta Conversión</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[var(--pd-text-2)] font-body max-w-2xl mx-auto text-base md:text-lg leading-relaxed"
          >
            Soluciones visuales y de pauta inicial diseñadas bajo estrictos criterios de marca para comunicar profesionalismo y detonar la acción de compra.
          </motion.p>
        </div>
        
        {/* Services Grid (6 categories) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 pt-4 mb-16">
          {categories.map((cat, index) => (
            <motion.div 
              key={cat.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="bg-[var(--pd-surface)] border border-[var(--pd-border)] rounded-2xl p-6 md:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:border-[var(--pd-gold)]/30 hover:shadow-[0_12px_40px_rgba(0,0,0,0.5),0_0_20px_rgba(212,175,55,0.03)]"
            >
              <div>
                {/* Header Row */}
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {cat.icon}
                  </div>
                  {cat.badge && (
                    <span className={`inline-block border rounded-full font-mono text-[9px] font-bold tracking-[0.08em] px-3 py-1 uppercase ${cat.badgeColor}`}>
                      {cat.badge}
                    </span>
                  )}
                </div>
                
                {/* Titles */}
                <h3 className="font-display font-extrabold text-xl md:text-2xl text-white tracking-tight mb-1">
                  {cat.title}
                </h3>
                <span className="font-mono text-[10px] text-[var(--pd-gold-light)] block uppercase tracking-wider mb-4">
                  {cat.subtitle}
                </span>
                
                {/* Core description */}
                <p className="font-body text-xs md:text-sm text-[var(--pd-text-2)] leading-relaxed mb-6">
                  {cat.desc}
                </p>

                {/* Services Bullets list */}
                <div className="space-y-2.5 border-t border-white/[0.04] pt-5 mb-6">
                  <span className="font-mono text-[9px] uppercase tracking-wider text-[var(--pd-text-3)] block mb-1">Lo que incluye:</span>
                  {cat.services.map((srv, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-[var(--pd-text-2)] font-body leading-tight">
                      <Check size={12} className="text-[var(--pd-gold)] mt-0.5 flex-shrink-0" />
                      <span>{srv}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ideal for & Action Button */}
              <div className="mt-auto pt-4 border-t border-white/[0.04]">
                <div className="mb-5">
                  <span className="font-mono text-[8px] uppercase tracking-wider text-[var(--pd-text-3)] block mb-1">IDEAL PARA:</span>
                  <span className="text-[11px] text-[var(--pd-text-2)] font-body font-medium leading-normal block">
                    {cat.idealFor}
                  </span>
                </div>

                <a 
                  href="#agenda" 
                  className="w-full inline-flex items-center justify-center gap-2 bg-white/[0.03] hover:bg-[var(--pd-primary)] text-[var(--pd-text)] hover:text-white border border-white/[0.08] hover:border-transparent cursor-pointer font-body font-semibold text-xs py-3 rounded-xl transition-all duration-300 shadow-sm"
                >
                  <span>Cotizar este servicio</span>
                  <ArrowRight size={12} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Catalog Call to Action */}
        <div className="text-center">
          <p className="font-serif italic text-base md:text-lg text-[var(--pd-text-2)] mb-4">
            ¿Quieres revisar el desglose y las tarifas de lanzamiento?
          </p>
          <a 
            href="https://res.cloudinary.com/ddn6qh7ve/image/upload/v1777612918/Brochure_PowerDigital_Abr26_a4tkhk.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-mono font-bold tracking-widest text-[var(--pd-gold-light)] hover:text-white transition-colors duration-200 uppercase"
          >
            <span>[ Ver catálogo de precios PDF ]</span>
            <ArrowRight size={14} />
          </a>
        </div>

      </div>
    </section>
  );
}
