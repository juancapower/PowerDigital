import { motion } from 'motion/react';
import { Target, Eye, Sparkles, Cpu, Award } from 'lucide-react';

export default function MethodologySection() {
  const steps = [
    {
      letter: "P",
      title: "Propósito",
      desc: "Definimos qué quieres comunicar, a quién quieres llegar y qué acción debe tomar tu cliente para que cada pieza tenga una intención comercial real.",
      icon: <Target className="w-5 h-5 text-[var(--pd-gold)]" />,
      circleColor: "from-[var(--pd-gold)] to-[var(--pd-gold-light)]",
      circleBorder: "border-[rgba(212,175,55,0.4)]",
      textColor: "text-[var(--pd-gold-light)]",
      accentGlow: "shadow-[0_0_15px_rgba(212,175,55,0.2)]"
    },
    {
      letter: "O",
      title: "Orden Visual",
      desc: "Organizamos tu identidad, mensaje, piezas y canales para que todo se vea coherente, profesional y digno de una marca premium.",
      icon: <Eye className="w-5 h-5 text-[var(--pd-primary-light)]" />,
      circleColor: "from-[var(--pd-primary)] to-[var(--pd-primary-light)]",
      circleBorder: "border-[rgba(110,141,255,0.4)]",
      textColor: "text-[var(--pd-primary-light)]",
      accentGlow: "shadow-[0_0_15px_rgba(67,97,238,0.2)]"
    },
    {
      letter: "W",
      title: "Wow Content",
      desc: "Creamos contenido visual de alto impacto: videos IA cortos, avatares digitales consistentes, flyers de alta conversión, carruseles educativos y piezas comerciales irresistibles.",
      icon: <Sparkles className="w-5 h-5 text-[var(--pd-gold)]" />,
      circleColor: "from-[var(--pd-gold)] to-[var(--pd-gold-light)]",
      circleBorder: "border-[rgba(212,175,55,0.4)]",
      textColor: "text-[var(--pd-gold-light)]",
      accentGlow: "shadow-[0_0_15px_rgba(212,175,55,0.2)]"
    },
    {
      letter: "E",
      title: "Ejecución Digital",
      desc: "Convertimos la idea en activos reales y listos para facturar: landing page optimizada, perfil social alineado, catálogo de precios interactivo o anuncios listos para publicar.",
      icon: <Cpu className="w-5 h-5 text-[var(--pd-primary-light)]" />,
      circleColor: "from-[var(--pd-primary)] to-[var(--pd-primary-light)]",
      circleBorder: "border-[rgba(110,141,255,0.4)]",
      textColor: "text-[var(--pd-primary-light)]",
      accentGlow: "shadow-[0_0_15px_rgba(67,97,238,0.2)]"
    },
    {
      letter: "R",
      title: "Resultado Comercial",
      desc: "Orientamos cada entrega a generar confianza, recordación de marca, mensajes en bandeja de entrada, clics calificados y ventas directas.",
      icon: <Award className="w-5 h-5 text-[var(--pd-gold)]" />,
      circleColor: "from-[var(--pd-gold)] to-[var(--pd-gold-light)]",
      circleBorder: "border-[rgba(212,175,55,0.4)]",
      textColor: "text-[var(--pd-gold-light)]",
      accentGlow: "shadow-[0_0_15px_rgba(212,175,55,0.2)]"
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-[var(--pd-surface)] border-y border-[var(--pd-border-n)] relative overflow-hidden">
      
      {/* Background blurs and lines */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[10%] left-[-10%] w-[50%] h-[50%] bg-[radial-gradient(ellipse_at_center,rgba(67,97,238,0.04)_0%,transparent_60%)]"></div>
        <div className="absolute bottom-[10%] right-[-10%] w-[50%] h-[50%] bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.03)_0%,transparent_60%)]"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Intro Header */}
        <div className="text-center mb-20 md:mb-28">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--pd-primary-light)] mb-4 inline-block">Proceso de Trabajo Unificado</span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[clamp(2.1rem,4.5vw,3.5rem)] font-display font-bold text-[var(--pd-text)] leading-tight tracking-tight mb-6"
          >
            Metodología <span className="bg-[linear-gradient(135deg,#e7c97a_0%,#d4af37_60%,#4361ee_100%)] bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">POWER</span> para construir presencia digital
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[var(--pd-text-2)] font-body text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Cada proyecto sigue una ruta clara: entender, diseñar, producir, lanzar y optimizar para garantizar que tus activos digitales funcionen de manera óptima.
          </motion.p>
        </div>

        {/* Vertical Timeline Process Grid */}
        <div className="relative pl-6 md:pl-0 pt-4">
          
          {/* Vertical Center Line for Desktop / Left Line for Mobile */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[rgba(212,175,55,0.2)] via-[rgba(67,97,238,0.2)] to-[rgba(212,175,55,0.2)] -translate-x-1/2"></div>

          {/* Vertical Steps */}
          <div className="space-y-16 md:space-y-24">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={step.letter}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className={`relative flex flex-col md:flex-row items-start ${isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  
                  {/* Circle Badge (Timeline Center) */}
                  <div className="absolute left-0 md:left-1/2 top-0 -translate-x-1/2 flex flex-col items-center z-10">
                    <div className={`w-14 h-14 rounded-full bg-[var(--pd-bg)] border-2 ${step.circleBorder} flex items-center justify-center ${step.accentGlow} transition-transform duration-300 hover:scale-110`}>
                      <span className={`font-display font-black text-2xl bg-gradient-to-br ${step.circleColor} bg-clip-text text-transparent`}>
                        {step.letter}
                      </span>
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className={`w-full md:w-[calc(50%-40px)] pl-12 md:pl-0 ${isEven ? 'md:pr-10 md:text-right' : 'md:pl-10 md:text-left'}`}>
                    <div className="bg-[var(--pd-bg)] border border-[rgba(255,255,255,0.04)] hover:border-[var(--pd-gold)]/20 p-6 md:p-8 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.3)] transition-all duration-300 group relative overflow-hidden">
                      {/* Accent glow on top */}
                      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--pd-gold)]/20 to-transparent"></div>
                      
                      {/* Meta header */}
                      <div className={`flex items-center gap-2 mb-4 ${isEven ? 'md:justify-end' : 'justify-start'}`}>
                        <div className="w-8 h-8 rounded-lg bg-white/[0.02] border border-white/[0.05] flex items-center justify-center">
                          {step.icon}
                        </div>
                        <span className={`font-mono text-xs font-bold ${step.textColor} tracking-widest`}>
                          ETAPA 0{index + 1}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-display font-extrabold text-xl md:text-2xl text-white mb-3 tracking-tight group-hover:text-[var(--pd-gold-light)] transition-colors duration-300">
                        {step.letter} · {step.title}
                      </h3>

                      {/* Desc */}
                      <p className="font-body text-xs md:text-sm text-[var(--pd-text-2)] leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>

                  {/* Empty Spacer column on the other side */}
                  <div className="hidden md:block w-[calc(50%-40px)]"></div>

                </motion.div>
              );
            })}
          </div>

        </div>

        {/* Call to action text below process */}
        <div className="mt-20 text-center relative z-10">
          <p className="font-serif italic text-base md:text-xl text-[var(--pd-gold-soft)] max-w-2xl mx-auto leading-relaxed border-t border-[rgba(255,255,255,0.04)] pt-12">
            “No se trata de usar IA por moda. Se trata de estructurar y unificar una presencia digital que transmita autoridad y opere con absoluta claridad comercial.”
          </p>
          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--pd-text-3)] mt-4 block">JuanCa Cabrera · Director Creativo</span>
        </div>

      </div>
    </section>
  );
}
