import { motion } from 'motion/react';
import { Target, Sliders, Network, TrendingUp, BarChart3 } from 'lucide-react';

export default function MethodologySection() {
  const steps = [
    {
      letter: "P",
      title: "Propósito Estratégico",
      desc: "Clarificamos el objetivo del negocio, la oferta de alto valor, el perfil del cliente ideal y la oportunidad digital real antes de programar una sola línea de código.",
      result: "Claridad absoluta y dirección estratégica comercial",
      icon: <Target size={28} className="text-[var(--pd-gold)]" />,
      accentColor: "rgba(212,175,55,0.2)"
    },
    {
      letter: "O",
      title: "Optimización de Procesos",
      desc: "Auditamos tu operación actual para detectar tareas repetitivas, fugas de tiempo, cuellos de botella comerciales y puntos donde la IA puede multiplicar la eficiencia.",
      result: "Reducción de fricción interna y liberación de tiempo",
      icon: <Sliders size={28} className="text-[var(--pd-primary-light)]" />,
      accentColor: "rgba(67,97,238,0.2)"
    },
    {
      letter: "W",
      title: "Workflows Inteligentes",
      desc: "Construimos e integramos automatizaciones complejas, agentes de IA conversacionales, embudos de captación y sistemas CRM sincronizados para operar de forma fluida.",
      result: "Sistemas conectados que operan 24/7 sin errores",
      icon: <Network size={28} className="text-[var(--pd-gold)]" />,
      accentColor: "rgba(212,175,55,0.2)"
    },
    {
      letter: "E",
      title: "Escalamiento Comercial",
      desc: "Potenciamos la captación de leads premium, secuencias de seguimiento automatizado, creación acelerada de contenido inteligente y Meta Ads integrados para acelerar las ventas.",
      result: "Flujo constante de prospectos altamente calificados",
      icon: <TrendingUp size={28} className="text-[var(--pd-primary-light)]" />,
      accentColor: "rgba(67,97,238,0.2)"
    },
    {
      letter: "R",
      title: "Resultados Medibles",
      desc: "Sustentamos el impacto del sistema mediante dashboards dinámicos. Medimos, iteramos y convertimos la IA en una ventaja competitiva real para el negocio, no en una moda pasajera.",
      result: "Toma de decisiones con datos reales e incremento de ROI",
      icon: <BarChart3 size={28} className="text-[var(--pd-gold)]" />,
      accentColor: "rgba(212,175,55,0.2)"
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-[var(--pd-surface)] border-y border-[var(--pd-border-n)] relative overflow-hidden">
      {/* Background blurs */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[10%] w-[45%] h-[50%] bg-[radial-gradient(ellipse_at_center,rgba(67,97,238,0.06)_0%,transparent_60%)]"></div>
        <div className="absolute bottom-[-10%] left-[10%] w-[45%] h-[50%] bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.04)_0%,transparent_60%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Intro */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--pd-primary-light)] mb-4 inline-block">La Fórmula de Transformación</span>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-[var(--pd-text)] leading-tight tracking-tight mb-6">
            Metodología POWER<br/>
            <span className="bg-[linear-gradient(135deg,#e7c97a_0%,#d4af37_60%,#4361ee_100%)] bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              para Negocios Digitales
            </span>
          </h2>
          <p className="font-body text-base md:text-lg text-[var(--pd-text-2)] leading-relaxed max-w-2xl mx-auto">
            No vendemos herramientas aisladas ni software genérico. Implementamos un sistema de transformación integral diseñado para dotar a tu negocio de infraestructura escalable.
          </p>
        </div>

        {/* Horizontal or Grid Steps with letters */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-4 lg:gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className="bg-[var(--pd-bg)] border border-[var(--pd-border)] rounded-2xl p-6 relative flex flex-col justify-between group hover:border-[var(--pd-gold)]/40 transition-all duration-300 hover:-translate-y-1.5"
            >
              {/* Massive subtle letter in background */}
              <span className="absolute top-2 right-4 font-display font-bold text-7xl md:text-8xl opacity-[0.03] text-white select-none pointer-events-none group-hover:opacity-[0.06] group-hover:text-[var(--pd-gold)] transition-all duration-300">
                {step.letter}
              </span>

              <div>
                {/* Icon Circle */}
                <div 
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border transition-colors duration-300"
                  style={{ 
                    backgroundColor: step.accentColor.replace('0.2', '0.04'),
                    borderColor: step.accentColor 
                  }}
                >
                  {step.icon}
                </div>

                <h3 className="font-display font-bold text-lg md:text-xl text-[var(--pd-text)] mb-3 group-hover:text-[var(--pd-gold-light)] transition-colors duration-300">
                  {step.letter}. {step.title}
                </h3>

                <p className="font-body text-xs md:text-sm text-[var(--pd-text-2)] leading-relaxed mb-6">
                  {step.desc}
                </p>
              </div>

              {/* Bottom tag for result */}
              <div className="pt-4 border-t border-[rgba(255,255,255,0.04)]">
                <span className="font-mono text-[9px] uppercase text-[var(--pd-text-3)] block mb-1 tracking-wider">Entregable / Resultado:</span>
                <span className="text-xs font-semibold text-white group-hover:text-[var(--pd-gold-soft)] transition-colors duration-300 leading-tight block">
                  {step.result}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Brand Manifesto Callout */}
        <div className="mt-20 text-center">
          <p className="font-serif italic text-base md:text-xl text-[var(--pd-gray-light)] max-w-2xl mx-auto leading-relaxed">
            “La verdadera transformación digital no ocurre al instalar una nueva herramienta, sino al unificar estrategia, tecnología y propósito humano bajo un mismo sistema.”
          </p>
          <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-[var(--pd-gold)] mt-3 block">— JuanCa Cabrera</span>
        </div>

      </div>
    </section>
  );
}
