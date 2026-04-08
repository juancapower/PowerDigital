import { Sparkles, Video, Palette, Smartphone, Monitor, Target } from 'lucide-react';
import { motion } from 'motion/react';

export default function ServicesSection() {
  const services = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Modelos Digitales IA",
      description: "Mascotas y modelos hiperrealistas interactuando con tu producto. Nuestro servicio insignia.",
      className: "md:col-span-2 md:row-span-2",
      titleSize: "text-3xl md:text-4xl",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop"
    },
    {
      icon: <Monitor className="w-6 h-6" />,
      title: "Embudos & Web",
      description: "Sistemas de captación y ventas automatizadas de alta conversión.",
      className: "md:col-span-1",
      titleSize: "text-xl",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Meta Ads",
      description: "Tráfico calificado y maximización de ROAS con segmentación avanzada.",
      className: "md:col-span-1",
      titleSize: "text-xl",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"
    },
    {
      icon: <Video className="w-6 h-6" />,
      title: "Edición & Flyers",
      description: "Contenido visual dinámico y de alto impacto para capturar atención.",
      className: "md:col-span-1",
      titleSize: "text-xl",
      image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=800&auto=format&fit=crop"
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Identidad Premium",
      description: "Construcción de marca, logotipos y diseño de assets corporativos.",
      className: "md:col-span-1",
      titleSize: "text-xl",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop"
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Optimización RRSS",
      description: "Configuración profesional y diseño de perfil para Instagram y WhatsApp.",
      className: "md:col-span-1",
      titleSize: "text-xl",
      image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <section id="servicios" className="py-24 md:py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-raleway mb-4"
          >
            El Ecosistema <span className="text-brand-cyan">Power</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 font-poppins max-w-2xl mx-auto text-lg"
          >
            No ofrecemos servicios sueltos. Construimos sistemas integrales para dominar tu mercado.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[minmax(200px,auto)]">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-3xl border border-white/5 bg-black p-8 transition-all hover:border-white/10 ${service.className}`}
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity duration-700 mix-blend-luminosity"
                style={{ backgroundImage: `url(${service.image})` }}
              ></div>
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-brand-cyan/0 to-brand-cyan/0 group-hover:from-brand-cyan/10 transition-all duration-500"></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-12 h-12 rounded-2xl bg-black/50 border border-white/10 flex items-center justify-center text-brand-cyan mb-6 group-hover:scale-110 group-hover:border-brand-cyan/30 transition-all duration-300">
                  {service.icon}
                </div>
                
                <div className="mt-auto">
                  <h3 className={`${service.titleSize} font-raleway font-bold text-white mb-3`}>
                    {service.title}
                  </h3>
                  <p className="text-gray-400 font-poppins text-sm leading-relaxed">
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
