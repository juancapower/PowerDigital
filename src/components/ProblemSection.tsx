import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Zap, 
  Flame, 
  AlertTriangle, 
  CheckCircle2, 
  Video, 
  Smartphone, 
  Target, 
  Palette, 
  Globe, 
  TrendingUp, 
  Terminal, 
  ArrowRight,
  RefreshCw
} from 'lucide-react';

export default function ProblemSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [systemActive, setSystemActive] = useState(false);

  const pillars = [
    {
      id: "contenido",
      title: "Contenido con IA",
      icon: <Video className="w-5 h-5" />,
      tagline: "Producción de videos de alto impacto sin demoras ni grabaciones tediosas",
      chaos: {
        title: "La tortura del método tradicional",
        desc: "Te demoras semanas planificando, editando, lidiando con cámaras, o simplemente evitas hacer videos porque no quieres salir en cámara. Tu marca es invisible para el algoritmo.",
        metrics: [
          { label: "Tiempo de producción", value: "12 - 15 horas", percent: 90, color: "bg-red-500" },
          { label: "Consistencia en redes", value: "Inestable (1 al mes)", percent: 15, color: "bg-red-500" },
          { label: "Esfuerzo del equipo", value: "Máximo y saturado", percent: 95, color: "bg-red-500" }
        ],
        logs: [
          "ERROR: Guion descartado por falta de ideas.",
          "WARN: Edición de video retrasada por software lento.",
          "FAIL: Alcance nulo por falta de consistencia."
        ]
      },
      power: {
        title: "Contenido Ágil impulsado por IA",
        desc: "Videos cortos de 30-60 segundos con scripts ganadores, voz premium y subtítulos dinámicos de alta retención. Avatares IA profesionales y consistentes que comunican y venden por ti 24/7.",
        metrics: [
          { label: "Tiempo de producción", value: "15 minutos con IA", percent: 10, color: "bg-[var(--pd-gold)]" },
          { label: "Consistencia en redes", value: "Firme (7+ semanales)", percent: 100, color: "bg-[var(--pd-gold)]" },
          { label: "Esfuerzo del equipo", value: "Mínimo (Automatizado)", percent: 5, color: "bg-[var(--pd-gold)]" }
        ],
        logs: [
          "SUCCESS: Guion de alta conversión generado por IA.",
          "SUCCESS: Render de Avatar Premium completado en 4K.",
          "SUCCESS: Publicación programada en TikTok e Instagram."
        ]
      }
    },
    {
      id: "marca",
      title: "Diseño y Marca",
      icon: <Palette className="w-5 h-5" />,
      tagline: "Identidad visual premium que transmite autoridad desde el primer segundo",
      chaos: {
        title: "Presencia amateur y desalineada",
        desc: "Tus recursos visuales varían en cada posteo, usas plantillas genéricas que no conectan, y la baja calidad visual de tus propuestas aleja a los clientes de alto valor.",
        metrics: [
          { label: "Percepción de autoridad", value: "Baja o amateur", percent: 20, color: "bg-red-500" },
          { label: "Consistencia de marca", value: "Incoherente (20%)", percent: 20, color: "bg-red-500" },
          { label: "Precios de tus servicios", value: "Limitados por estética", percent: 40, color: "bg-red-500" }
        ],
        logs: [
          "WARN: Fuentes tipográficas mezcladas sin criterio.",
          "FAIL: Flyers con baja calidad de exportación.",
          "ERROR: Logo estirado en formato no adecuado."
        ]
      },
      power: {
        title: "Estética Premium Unificada",
        desc: "Kit Visual Rápido para redes y diseños corporativos de lujo (banners, flyers, posts) que elevan tu precio percibido, generan confianza instantánea y transmiten el estatus de marca líder.",
        metrics: [
          { label: "Percepción de autoridad", value: "Líder de Industria", percent: 100, color: "bg-[var(--pd-gold)]" },
          { label: "Consistencia de marca", value: "Impecable (100%)", percent: 100, color: "bg-[var(--pd-gold)]" },
          { label: "Precios de tus servicios", value: "Valor Premium Justificado", percent: 95, color: "bg-[var(--pd-gold)]" }
        ],
        logs: [
          "SUCCESS: Isotipo vectorial moderno entregado.",
          "SUCCESS: Paleta hex y fuentes oficiales aplicadas.",
          "SUCCESS: Kit de carruseles premium listos para publicar."
        ]
      }
    },
    {
      id: "presencia",
      title: "Presencia Web",
      icon: <Globe className="w-5 h-5" />,
      tagline: "Activos digitales optimizados para informar, captar y recibir solicitudes",
      chaos: {
        title: "El embudo roto en WhatsApp",
        desc: "Explicas tus ofertas y precios uno por uno a mano, mandas PDFs de 50MB que nadie descarga y los prospectos se enfrían esperando horas en el chat a que respondas.",
        metrics: [
          { label: "Tiempo de respuesta", value: "15 a 45 minutos", percent: 85, color: "bg-red-500" },
          { label: "Apertura de catálogos", value: "Baja (PDFs pesados)", percent: 30, color: "bg-red-500" },
          { label: "Fuga de clientes", value: "Crítica en la espera", percent: 75, color: "bg-red-500" }
        ],
        logs: [
          "WARN: Cliente abandonó por demora en cotización.",
          "FAIL: PDF del catálogo no abre en celulares.",
          "ERROR: Link del perfil social roto u obsoleto."
        ]
      },
      power: {
        title: "Infraestructura Digital 24/7",
        desc: "Una Landing Page de carga ultrarrápida combinada con un Catálogo de Precios interactivo de lujo. Tu propuesta de valor está siempre disponible para cerrar ventas de forma automatizada.",
        metrics: [
          { label: "Tiempo de respuesta", value: "0.1 segundos (Online)", percent: 5, color: "bg-[var(--pd-gold)]" },
          { label: "Apertura de catálogos", value: "Instantánea (Link Web)", percent: 100, color: "bg-[var(--pd-gold)]" },
          { label: "Fuga de clientes", value: "Mínima / Flujo fluido", percent: 5, color: "bg-[var(--pd-gold)]" }
        ],
        logs: [
          "SUCCESS: Landing page activa con hosting de alta velocidad.",
          "SUCCESS: Catálogo interactivo con precios actualizados.",
          "SUCCESS: Redirección directa a checkout o WhatsApp."
        ]
      }
    },
    {
      id: "captacion",
      title: "Captación y Ads",
      icon: <Target className="w-5 h-5" />,
      tagline: "Lanzamiento y configuración de campañas estratégicas de anuncios",
      chaos: {
        title: "Dependencia del orgánico muerto",
        desc: "Publicas esperando que el algoritmo te bendiga con alcance gratuito. La realidad es que casi nadie ve tus publicaciones y tu bandeja de entrada pasa días en silencio absoluto.",
        metrics: [
          { label: "Alcance de tus posts", value: "<3% de tus seguidores", percent: 10, color: "bg-red-500" },
          { label: "Leads calificados diarios", value: "0 a 1 fortuitos", percent: 5, color: "bg-red-500" },
          { label: "Previsibilidad de ventas", value: "Inexistente / Al azar", percent: 5, color: "bg-red-500" }
        ],
        logs: [
          "WARN: Reducción drástica del alcance orgánico.",
          "FAIL: 0 mensajes de prospectos recibidos hoy.",
          "ERROR: Esfuerzo de publicación desaprovechado."
        ]
      },
      power: {
        title: "Inyección de Leads Predecible",
        desc: "Meta Ads Básico configurado de forma inteligente. Con un creativo diseñado para captar atención y una segmentación optimizada, inyectamos interesados reales directo a tu WhatsApp.",
        metrics: [
          { label: "Alcance de tus posts", value: "Segmentación de Precisión", percent: 100, color: "bg-[var(--pd-gold)]" },
          { label: "Leads calificados diarios", value: "10 a 25 prospectos", percent: 90, color: "bg-[var(--pd-gold)]" },
          { label: "Previsibilidad de ventas", value: "Alta y Medible", percent: 95, color: "bg-[var(--pd-gold)]" }
        ],
        logs: [
          "SUCCESS: Creativo publicitario de alta retención aprobado.",
          "SUCCESS: Segmentación de nicho activa en Meta Ads.",
          "SUCCESS: Flujo diario constante de mensajes de consulta."
        ]
      }
    }
  ];

  const currentPillar = pillars[activeTab];

  return (
    <section className="py-24 md:py-32 bg-[var(--pd-bg)] relative overflow-hidden border-t border-white/[0.02]">
      {/* Dynamic Background Blurs */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[20%] left-[-10%] w-[50%] h-[50%] bg-[radial-gradient(ellipse_at_center,rgba(67,97,238,0.04)_0%,transparent_60%)]"></div>
        <div className="absolute bottom-[20%] right-[-10%] w-[50%] h-[50%] bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.03)_0%,transparent_60%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--pd-gold)] mb-4 inline-block">Realidad vs. Solución</span>
          <h2 className="font-display font-bold text-[clamp(2.1rem,4.5vw,3.5rem)] text-white leading-[1.15] tracking-tight mb-6">
            Tu negocio no está frenado por falta de talento.<br/>
            <span className="bg-[linear-gradient(135deg,#e7c97a_0%,#d4af37_60%,#4361ee_100%)] bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              Está frenado por infraestructura digital débil.
            </span>
          </h2>
          <p className="font-body text-base md:text-lg text-[var(--pd-text-2)] leading-relaxed max-w-2xl mx-auto">
            Compara el cuello de botella tradicional con el impacto de integrar los sistemas de Power Digital en tus canales de venta.
          </p>
        </div>

        {/* Central Switch Dashboard */}
        <div className="bg-[var(--pd-surface)] border border-white/[0.05] rounded-3xl p-6 md:p-10 shadow-[0_25px_60px_rgba(11,13,23,0.9)] relative overflow-hidden">
          
          {/* Dashboard Header decoration */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--pd-primary)]/20 to-transparent"></div>
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 pb-8 border-b border-white/[0.05] mb-8">
            
            {/* System Pillar Selector */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start w-full lg:w-auto">
              {pillars.map((pillar, index) => (
                <button
                  key={pillar.id}
                  onClick={() => setActiveTab(index)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono tracking-wider transition-all duration-300 ${
                    activeTab === index 
                      ? 'bg-white/[0.05] border border-[var(--pd-gold)] text-[var(--pd-gold-light)] shadow-[0_0_15px_rgba(212,175,55,0.08)]' 
                      : 'bg-transparent border border-white/[0.04] text-[var(--pd-text-3)] hover:text-white hover:bg-white/[0.02]'
                  }`}
                >
                  {pillar.icon}
                  <span>{pillar.title.toUpperCase()}</span>
                </button>
              ))}
            </div>

            {/* Central Fuse System Switch */}
            <div className="flex items-center gap-4 bg-[var(--pd-bg)] border border-white/[0.08] p-2 rounded-2xl shrink-0">
              <span className={`text-[10px] font-mono tracking-widest font-bold uppercase ${!systemActive ? 'text-red-400' : 'text-[var(--pd-text-3)]'}`}>
                CAOS OPERATIVO
              </span>
              
              <button
                onClick={() => setSystemActive(!systemActive)}
                className={`relative w-16 h-8 rounded-full transition-colors duration-300 focus:outline-none p-1 ${
                  systemActive ? 'bg-[#25D366]' : 'bg-red-500'
                }`}
                aria-label="Toggle System State"
              >
                <motion.div
                  layout
                  className="w-6 h-6 rounded-full bg-white shadow-md"
                  animate={{ x: systemActive ? 32 : 0 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              </button>

              <span className={`text-[10px] font-mono tracking-widest font-bold uppercase flex items-center gap-1.5 ${systemActive ? 'text-[var(--pd-gold-light)]' : 'text-[var(--pd-text-3)]'}`}>
                <Zap size={10} className={systemActive ? 'animate-pulse text-[var(--pd-gold)]' : ''} />
                SISTEMA POWER
              </span>
            </div>

          </div>

          {/* Subtitle / Tagline of active pillar */}
          <div className="text-center md:text-left mb-10">
            <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-[var(--pd-gold)] block mb-1">Pilar de Negocio</span>
            <h3 className="font-display font-extrabold text-xl md:text-2xl text-white">
              {currentPillar.title}
            </h3>
            <p className="text-xs md:text-sm text-[var(--pd-text-2)] font-body leading-relaxed mt-1">
              {currentPillar.tagline}
            </p>
          </div>

          {/* Side-by-Side Dynamic Dashboard Screen */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative">
            
            {/* Chaotic State (Visible or emphasized when deactivated) */}
            <div className={`col-span-12 lg:col-span-6 transition-all duration-500 ${
              systemActive ? 'opacity-30 blur-[1px] pointer-events-none scale-98' : 'opacity-100 scale-100'
            }`}>
              <div className="bg-[rgba(239,68,68,0.02)] border border-red-500/20 rounded-2xl p-6 md:p-8 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2.5 mb-5 text-red-400">
                    <AlertTriangle size={18} />
                    <h4 className="font-display font-bold text-sm tracking-tight uppercase">
                      {currentPillar.chaos.title}
                    </h4>
                  </div>

                  <p className="text-xs md:text-sm text-[var(--pd-text-2)] font-body leading-relaxed mb-8">
                    {currentPillar.chaos.desc}
                  </p>

                  {/* Metrics and indicators */}
                  <div className="space-y-4 mb-8">
                    {currentPillar.chaos.metrics.map((metric, i) => (
                      <div key={i}>
                        <div className="flex justify-between text-[11px] font-mono mb-1.5">
                          <span className="text-[var(--pd-text-3)]">{metric.label}</span>
                          <span className="text-red-400 font-bold">{metric.value}</span>
                        </div>
                        <div className="w-full h-1.5 bg-red-950/40 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: `${metric.percent}%` }}
                            transition={{ duration: 0.8 }}
                            className={`h-full ${metric.color}`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Simulated Error logs */}
                <div className="bg-red-950/20 border border-red-900/30 rounded-xl p-4 font-mono text-[10px] space-y-1.5 text-red-300">
                  <div className="flex items-center gap-2 mb-1.5 pb-1 border-b border-red-900/20 text-[9px] text-red-400 uppercase tracking-wider font-bold">
                    <Terminal size={10} /> Terminal de Fricción
                  </div>
                  {currentPillar.chaos.logs.map((log, i) => (
                    <div key={i} className="flex items-start gap-1.5 leading-normal">
                      <span className="text-red-500 font-bold">➜</span>
                      <span>{log}</span>
                    </div>
                  ))}
                </div>

              </div>
            </div>

            {/* Separator / Switch Reminder (Visible in desktop) */}
            <div className="hidden lg:flex col-span-1 items-center justify-center pointer-events-none">
              <div className="h-full w-[1px] bg-gradient-to-b from-transparent via-white/[0.05] to-transparent relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[var(--pd-bg)] border border-white/[0.05] flex items-center justify-center">
                  <RefreshCw size={12} className={`text-[var(--pd-text-3)] ${systemActive ? 'animate-spin' : ''}`} />
                </div>
              </div>
            </div>

            {/* Optimized Power State (Active glowing or emphasized when activated) */}
            <div className={`col-span-12 lg:col-span-5 transition-all duration-500 ${
              !systemActive ? 'opacity-30 blur-[1px] pointer-events-none scale-98' : 'opacity-100 scale-100'
            }`}>
              <div className="bg-[rgba(212,175,55,0.02)] border border-[var(--pd-gold)]/20 rounded-2xl p-6 md:p-8 h-full flex flex-col justify-between shadow-[0_0_30px_rgba(212,175,55,0.03)]">
                <div>
                  <div className="flex items-center gap-2.5 mb-5 text-[var(--pd-gold-light)]">
                    <CheckCircle2 size={18} className="text-[var(--pd-gold)]" />
                    <h4 className="font-display font-bold text-sm tracking-tight uppercase">
                      {currentPillar.power.title}
                    </h4>
                  </div>

                  <p className="text-xs md:text-sm text-[var(--pd-text-2)] font-body leading-relaxed mb-8">
                    {currentPillar.power.desc}
                  </p>

                  {/* Metrics and indicators */}
                  <div className="space-y-4 mb-8">
                    {currentPillar.power.metrics.map((metric, i) => (
                      <div key={i}>
                        <div className="flex justify-between text-[11px] font-mono mb-1.5">
                          <span className="text-[var(--pd-text-3)]">{metric.label}</span>
                          <span className="text-[var(--pd-gold-light)] font-bold">{metric.value}</span>
                        </div>
                        <div className="w-full h-1.5 bg-neutral-950/40 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: `${metric.percent}%` }}
                            transition={{ duration: 0.8 }}
                            className={`h-full ${metric.color}`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Simulated Success logs */}
                <div className="bg-[rgba(212,175,55,0.03)] border border-[var(--pd-gold)]/10 rounded-xl p-4 font-mono text-[10px] space-y-1.5 text-[var(--pd-gold-soft)]">
                  <div className="flex items-center gap-2 mb-1.5 pb-1 border-b border-white/[0.05] text-[9px] text-[var(--pd-gold-light)] uppercase tracking-wider font-bold">
                    <Terminal size={10} /> Terminal de Conversión
                  </div>
                  {currentPillar.power.logs.map((log, i) => (
                    <div key={i} className="flex items-start gap-1.5 leading-normal">
                      <span className="text-[var(--pd-gold)] font-bold">➜</span>
                      <span>{log}</span>
                    </div>
                  ))}
                </div>

              </div>
            </div>

          </div>

          {/* Interactive Tooltip Callout */}
          <AnimatePresence mode="wait">
            {!systemActive && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mt-8 text-center bg-red-950/20 border border-red-900/30 rounded-xl p-3 text-[11px] font-mono text-red-300"
              >
                ⚠️ Tu infraestructura digital actual presenta fugas de clientes. Haz clic arriba en <strong className="text-white font-bold">"SISTEMA POWER"</strong> para activar la optimización comercial.
              </motion.div>
            )}
            {systemActive && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mt-8 text-center bg-emerald-950/20 border border-emerald-900/30 rounded-xl p-3 text-[11px] font-mono text-emerald-300 flex items-center justify-center gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse"></span>
                <span>¡INFRAESTRUCTURA DE VENTAS ACTIVA! Estás captando, reteniendo y convirtiendo un 18.4% más visitas en clientes reales.</span>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

        {/* Global Action Trigger bottom */}
        <div className="mt-16 text-center">
          <p className="font-serif italic text-base md:text-xl text-[var(--pd-gold-soft)] max-w-2xl mx-auto leading-relaxed mb-6">
            “No dejes tus ventas al azar ni satures a tu equipo con tareas manuales. Estructura un ecosistema visual que automatice el valor y el cierre de tu negocio.”
          </p>
          <a 
            href="#agenda"
            className="inline-flex items-center justify-center gap-2 text-xs md:text-sm font-mono font-bold tracking-widest text-[var(--pd-primary-light)] hover:text-white transition-colors duration-200 uppercase"
          >
            <span>[ QUIERO INTEGRAR ESTOS SISTEMAS EN MI MARCA ]</span>
            <ArrowRight size={14} className="animate-pulse" />
          </a>
        </div>

      </div>
    </section>
  );
}
