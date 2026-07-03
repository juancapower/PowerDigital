import { Sparkles, Bot, Network, Target, Monitor, Search, Smartphone, BarChart3, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function ServicesSection() {
  const services = [
    {
      icon: <Sparkles className="w-[28px] h-[28px]" strokeWidth={1.5} />,
      title: "Modelos / Avatares Digitales IA Realistas",
      description: "Mascotas y modelos hiperrealistas interactuando con tu producto. Nuestro servicio insignia para posicionarte.",
      result: "Mascota o modelo interactivo de marca que vende 24/7 sin salir en cámara.",
      forWho: "Creadores, marcas personales y e-commerce de alto impacto.",
      image: "https://res.cloudinary.com/ddn6qh7ve/image/upload/q_auto/f_auto/v1776358636/hf_20260416_160626_821b925e-3e3e-4b81-b982-614100c2d1a9_nlsbky.png",
      isLarge: true,
      className: "md:col-span-2 md:row-span-2 border-[rgba(67,97,238,0.25)] shadow-[0_0_40px_rgba(67,97,238,0.12),0_4px_16px_rgba(0,0,0,0.4)] md:-translate-y-[8px]"
    },
    {
      icon: <Bot className="w-[28px] h-[28px]" strokeWidth={1.5} />,
      title: "Automatización Comercial con IA",
      description: "Chatbots calificados integrados en WhatsApp e Instagram que resuelven dudas y guían hacia la compra.",
      result: "Atención inmediata y precalificación de leads automáticos.",
      forWho: "Negocios de servicios, infoproductores y agencias.",
      image: "https://res.cloudinary.com/ddn6qh7ve/image/upload/q_auto/f_auto/v1776358636/hf_20260416_160629_bff53f32-44f0-4eec-a977-484087d2dc42_i7pg4v.png",
      className: "md:col-span-1 border-[var(--pd-border-n)] bg-[var(--pd-surface)]"
    },
    {
      icon: <Network className="w-[28px] h-[28px]" strokeWidth={1.5} />,
      title: "Workflows y Agentes Inteligentes",
      description: "Automatizamos el traspaso de información entre plataformas (CRM, Notion, Email, ERP) mediante flujos lógicos avanzados.",
      result: "Operación optimizada, cero errores manuales y ahorro masivo de horas.",
      forWho: "PYMEs, equipos comerciales y directores de operaciones.",
      image: "https://res.cloudinary.com/ddn6qh7ve/image/upload/q_auto/f_auto/v1776358636/hf_20260416_160634_70670c60-6943-4677-891a-ad8749fa51dd_exfp0y.png",
      className: "md:col-span-1 border-[var(--pd-border-n)] bg-[var(--pd-surface)]"
    },
    {
      icon: <Target className="w-[28px] h-[28px]" strokeWidth={1.5} />,
      title: "Meta Ads + IA para captación",
      description: "Campañas de pauta publicitaria impulsadas por análisis inteligente de audiencias y creativos de alta conversión.",
      result: "Flujo constante de prospectos y maximización de retorno (ROAS).",
      forWho: "Empresas B2B, consultores, agencias y clínicas.",
      image: "https://res.cloudinary.com/ddn6qh7ve/image/upload/q_auto/f_auto/v1776358636/hf_20260416_160640_56b29b85-4a95-4de3-9e0e-b0f72d58cf1c_qmtnry.png",
      className: "md:col-span-1 border-[var(--pd-border-n)] bg-[var(--pd-surface)]"
    },
    {
      icon: <Monitor className="w-[28px] h-[28px]" strokeWidth={1.5} />,
      title: "Landing Pages y Embudos",
      description: "Diseño y desarrollo de sitios de destino optimizados para cargar al instante y guiar a la acción sin rodeos.",
      result: "Páginas web rápidas que multiplican el porcentaje de conversión de visitas.",
      forWho: "Lanzamientos de productos, profesionales y marcas personales.",
      image: "https://res.cloudinary.com/ddn6qh7ve/image/upload/q_auto/f_auto/v1776359100/hf_20260416_165639_51312f82-72bc-4d4e-9f41-29610eab0f46_j8pxnq.png",
      className: "md:col-span-1 border-[var(--pd-border-n)] bg-[var(--pd-surface)]"
    },
    {
      icon: <Search className="w-[28px] h-[28px]" strokeWidth={1.5} />,
      title: "Diagnóstico Digital IA",
      description: "Auditoría en profundidad de tus canales comerciales y embudos digitales actuales para diseñar una hoja de ruta ideal.",
      result: "Plan POWER personalizado y detección de fugas de dinero.",
      forWho: "Startups y dueños de negocio que buscan acelerar.",
      image: "https://res.cloudinary.com/ddn6qh7ve/image/upload/q_auto/f_auto/v1776359100/hf_20260416_165409_08dd62cc-da6d-41c0-83fa-608e75bb1dee_fweyew.png",
      className: "md:col-span-1 border-[var(--pd-border-n)] bg-[var(--pd-surface)]"
    },
    {
      icon: <Smartphone className="w-[28px] h-[28px]" strokeWidth={1.5} />,
      title: "Optimización de Redes Sociales",
      description: "Alineamos y configuramos profesionalmente tus perfiles (Instagram, WhatsApp, TikTok, YouTube) para convertirlos en imanes de clientes.",
      result: "Canales optimizados con alta conversión y posicionamiento de autoridad.",
      forWho: "Creadores de contenido y marcas personales exigentes.",
      image: "https://res.cloudinary.com/ddn6qh7ve/image/upload/q_auto/f_auto/v1776358636/hf_20260416_160629_bff53f32-44f0-4eec-a977-484087d2dc42_i7pg4v.png",
      className: "md:col-span-1 border-[var(--pd-border-n)] bg-[var(--pd-surface)]"
    },
    {
      icon: <BarChart3 className="w-[28px] h-[28px]" strokeWidth={1.5} />,
      title: "Dashboards y Seguimiento",
      description: "Integración de tableros de control con Looker Studio para que tengas visibilidad completa del rendimiento comercial en tiempo real.",
      result: "Claridad absoluta del ROI y simplificación de reportes.",
      forWho: "CEOs, gerentes de ventas y fundadores.",
      image: "https://res.cloudinary.com/ddn6qh7ve/image/upload/q_auto/f_auto/v1776358636/hf_20260416_160634_70670c60-6943-4677-891a-ad8749fa51dd_exfp0y.png",
      className: "md:col-span-1 border-[var(--pd-border-n)] bg-[var(--pd-surface)]"
    }
  ];

  return (
    <section id="servicios" className="py-24 md:py-32 relative z-10 bg-[var(--pd-bg)]">
      
      {/* Background decoration */}
      <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-[70%] h-[40%] bg-[radial-gradient(ellipse_at_center,rgba(67,97,238,0.04)_0%,transparent_70%)] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--pd-gold)] mb-4 inline-block">El Ecosistema Power Digital</span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[clamp(2.2rem,4.5vw,3.8rem)] font-display font-bold text-[var(--pd-text)] mb-4 tracking-[-0.025em]"
          >
            Sistemas y Soluciones de <span className="text-[var(--pd-primary-light)]">Alta Conversión</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[var(--pd-text-2)] font-body max-w-2xl mx-auto text-base md:text-lg"
          >
            No ofrecemos servicios sueltos. Construimos infraestructura unificada para digitalizar tu captación, automatizar tus procesos y consolidar tu marca.
          </motion.p>
        </div>
        
        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8 pb-12">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className={`group relative overflow-hidden rounded-2xl border p-6 md:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:border-[var(--pd-gold)]/30 hover:shadow-[0_12px_40px_rgba(0,0,0,0.5),0_0_20px_rgba(212,175,55,0.06)] ${service.className}`}
            >
              {/* Background Image & Gradient Overlay */}
              {service.image && (
                <>
                  <div 
                    className="absolute inset-0 bg-cover bg-center opacity-[0.25] group-hover:opacity-[0.35] transition-opacity duration-700 mix-blend-luminosity"
                    style={{ backgroundImage: `url(${service.image})` }}
                  ></div>
                  <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(11,13,23,0.98)_0%,rgba(11,13,23,0.7)_60%,rgba(11,13,23,0.2)_100%)]"></div>
                </>
              )}
              
              <div className="relative z-10 flex flex-col h-full justify-between">
                
                {/* Header */}
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[rgba(67,97,238,0.08)] border border-[rgba(67,97,238,0.2)] flex items-center justify-center text-[var(--pd-primary-light)] group-hover:scale-110 transition-all duration-300 p-2.5">
                      {service.icon}
                    </div>
                    {service.isLarge && (
                      <span className="inline-block bg-[var(--pd-gold)] text-[var(--pd-bg)] rounded-full font-mono text-[9px] font-bold tracking-[0.1em] px-3 py-1 uppercase shadow-[0_0_12px_rgba(212,175,55,0.3)]">
                        Insignia
                      </span>
                    )}
                  </div>
                  
                  <h3 className="font-display font-bold text-xl md:text-2xl tracking-tight text-[var(--pd-text)] mb-3 group-hover:text-[var(--pd-gold-light)] transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="font-body text-sm text-[var(--pd-text-2)] leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Meta details */}
                <div className="mt-4 pt-4 border-t border-[rgba(255,255,255,0.05)] flex flex-col gap-3">
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-wider text-[var(--pd-text-3)] block mb-0.5">Qué entrega:</span>
                    <p className="text-xs font-semibold text-white group-hover:text-[var(--pd-gold-soft)] transition-colors duration-300 leading-normal">
                      {service.result}
                    </p>
                  </div>
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-wider text-[var(--pd-text-3)] block mb-0.5">Ideal para:</span>
                    <p className="text-xs text-[var(--pd-text-2)] leading-normal">
                      {service.forWho}
                    </p>
                  </div>

                  <div className="pt-2">
                    <a 
                      href="#agenda" 
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--pd-primary-light)] hover:text-[var(--pd-gold)] transition-colors duration-300"
                    >
                      <span>Explorar solución</span>
                      <ArrowRight size={12} className="transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
