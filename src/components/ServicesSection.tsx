import { Sparkles, Video, Palette, Smartphone, Monitor, Target } from 'lucide-react';
import { motion } from 'motion/react';

export default function ServicesSection() {
  const services = [
    {
      icon: <Sparkles className="w-[28px] h-[28px]" strokeWidth={1.5} />,
      title: "Modelos / Avatares Digitales IA Realistas",
      description: "Mascotas y modelos hiperrealistas interactuando con tu producto. Nuestro servicio insignia.",
      className: "md:col-span-2 md:row-span-2 border-[rgba(67,97,238,0.25)] shadow-[0_0_40px_rgba(67,97,238,0.12),0_4px_16px_rgba(0,0,0,0.4)] md:-translate-y-[8px]",
      titleSize: "text-[clamp(1.6rem,3vw,2.2rem)] text-[#fff]",
      descriptionStyles: "text-[rgba(238,240,255,0.7)] text-[0.9rem]",
      image: "https://res.cloudinary.com/ddn6qh7ve/image/upload/q_auto/f_auto/v1776358636/hf_20260416_160626_821b925e-3e3e-4b81-b982-614100c2d1a9_nlsbky.png",
      isLarge: true
    },
    {
      icon: <Monitor className="w-[28px] h-[28px]" strokeWidth={1.5} />,
      title: "Webs y Landing Pages",
      description: "Desde la administración del dominio y hosting hasta la publicación de web moderna, premium que tu marca necesita con presencia en internet",
      className: "md:col-span-1 border-[var(--pd-border-n)] bg-[var(--pd-surface)]",
      titleSize: "text-[1.1rem] text-[var(--pd-text)]",
      descriptionStyles: "text-[var(--pd-text-2)] text-[0.85rem] leading-[1.6]",
      image: "https://res.cloudinary.com/ddn6qh7ve/image/upload/q_auto/f_auto/v1776358636/hf_20260416_160629_bff53f32-44f0-4eec-a977-484087d2dc42_i7pg4v.png"
    },
    {
      icon: <Target className="w-[28px] h-[28px]" strokeWidth={1.5} />,
      title: "Meta Ads",
      description: "Tráfico calificado y maximización de ROAS con segmentación avanzada.",
      className: "md:col-span-1 border-[var(--pd-border-n)] bg-[var(--pd-surface)]",
      titleSize: "text-[1.1rem] text-[var(--pd-text)]",
      descriptionStyles: "text-[var(--pd-text-2)] text-[0.85rem] leading-[1.6]",
      image: "https://res.cloudinary.com/ddn6qh7ve/image/upload/q_auto/f_auto/v1776358636/hf_20260416_160634_70670c60-6943-4677-891a-ad8749fa51dd_exfp0y.png"
    },
    {
      icon: <Video className="w-[28px] h-[28px]" strokeWidth={1.5} />,
      title: "Flyers, banners y edición de videos",
      description: "Contenido visual dinámico y de alto impacto para capturar atención.",
      className: "md:col-span-1 border-[var(--pd-border-n)] bg-[var(--pd-surface)]",
      titleSize: "text-[1.1rem] text-[var(--pd-text)]",
      descriptionStyles: "text-[var(--pd-text-2)] text-[0.85rem] leading-[1.6]",
      image: "https://res.cloudinary.com/ddn6qh7ve/image/upload/q_auto/f_auto/v1776358636/hf_20260416_160640_56b29b85-4a95-4de3-9e0e-b0f72d58cf1c_qmtnry.png"
    },
    {
      icon: <Palette className="w-[28px] h-[28px]" strokeWidth={1.5} />,
      title: "Identidad visual Premium",
      description: "Construcción de marca, logotipos y diseño de assets corporativos.",
      className: "md:col-span-1 border-[var(--pd-border-n)] bg-[var(--pd-surface)]",
      titleSize: "text-[1.1rem] text-[var(--pd-text)]",
      descriptionStyles: "text-[var(--pd-text-2)] text-[0.85rem] leading-[1.6]",
      image: "https://res.cloudinary.com/ddn6qh7ve/image/upload/q_auto/f_auto/v1776359100/hf_20260416_165639_51312f82-72bc-4d4e-9f41-29610eab0f46_j8pxnq.png"
    },
    {
      icon: <Smartphone className="w-[28px] h-[28px]" strokeWidth={1.5} />,
      title: "Optimización de Redes Sociales",
      description: "Configuración profesional y diseño de perfil para Instagram, WhatsApp, Facebook, TikTok y YouTube.",
      className: "md:col-span-1 border-[var(--pd-border-n)] bg-[var(--pd-surface)]",
      titleSize: "text-[1.1rem] text-[var(--pd-text)]",
      descriptionStyles: "text-[var(--pd-text-2)] text-[0.85rem] leading-[1.6]",
      image: "https://res.cloudinary.com/ddn6qh7ve/image/upload/q_auto/f_auto/v1776359100/hf_20260416_165409_08dd62cc-da6d-41c0-83fa-608e75bb1dee_fweyew.png"
    }
  ];

  return (
    <section id="servicios" className="py-24 md:py-32 relative z-10 bg-[var(--pd-bg)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-[clamp(40px,6vw,80px)]">
        <div className="text-center mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[clamp(2rem,4vw,3.5rem)] font-display font-bold text-[var(--pd-text)] mb-4 tracking-[-0.025em]"
          >
            El Ecosistema <span className="text-[var(--pd-primary-light)]">Power</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[var(--pd-text-2)] font-body max-w-[520px] mx-auto text-lg"
          >
            No ofrecemos servicios sueltos. Construimos sistemas integrales para dominar tu mercado.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[14px] auto-rows-[minmax(200px,auto)] pt-[clamp(40px,6vw,80px)] pb-[clamp(40px,6vw,80px)]">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-[18px] border p-[28px] transition-all duration-[220ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-[4px] hover:border-[rgba(67,97,238,0.3)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.4),0_0_20px_rgba(67,97,238,0.1)] ${service.className}`}
            >
              {/* Background Image & Gradient Overlay */}
              {service.image && (
                <>
                  <div 
                    className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:opacity-50 transition-opacity duration-700 mix-blend-luminosity"
                    style={{ backgroundImage: `url(${service.image})` }}
                  ></div>
                  <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(12,13,17,0.96)_0%,rgba(12,13,17,0.55)_55%,rgba(12,13,17,0.15)_100%)]"></div>
                </>
              )}
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-[48px] h-[48px] rounded-[10px] bg-[rgba(67,97,238,0.1)] flex items-center justify-center text-[var(--pd-primary-light)] mb-6 group-hover:scale-110 transition-all duration-300 p-[10px]">
                  {service.icon}
                </div>
                
                <div className="mt-auto">
                  {service.isLarge && (
                    <span className="inline-block bg-[var(--pd-primary)] text-[#fff] rounded-full font-mono text-[9px] tracking-[0.1em] px-[12px] py-[4px] uppercase mb-4">
                      Servicio Insignia
                    </span>
                  )}
                  <h3 className={`${service.titleSize} font-display font-[${service.isLarge ? '700' : '600'}] tracking-[-0.02em] mb-3`}>
                    {service.title}
                  </h3>
                  <p className={`${service.descriptionStyles} font-body`}>
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
