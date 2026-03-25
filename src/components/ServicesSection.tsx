import { Sparkles, Video, Palette, Smartphone, Monitor, Target } from 'lucide-react';
import GlassCard from './GlassCard';

export default function ServicesSection() {
  const services = [
    {
      icon: <Sparkles size={28} />,
      title: "Modelos Digitales",
      description: "Nuestro servicio TOP. Creamos modelos o mascotas digitales hiperrealistas interactuando con tu producto real.",
      metric: "100% Personalizable"
    },
    {
      icon: <Monitor size={28} />,
      title: "Páginas Web & Embudos",
      description: "Desarrollo de landing pages, configuración en Systeme.io para captación de leads e integración de pasarelas de pago.",
      metric: "Alta Conversión"
    },
    {
      icon: <Video size={28} />,
      title: "Edición & Flyers",
      description: "Edición de video dinámica y diseño de flyers publicitarios de alto impacto visual para capturar la atención.",
      metric: "Alto Impacto"
    },
    {
      icon: <Palette size={28} />,
      title: "Identidad, Brochures & Ebooks",
      description: "Construimos la identidad visual de negocios y marcas personales. Diseño de logotipos, brochures corporativos y eBooks.",
      metric: "Diseño Premium"
    },
    {
      icon: <Smartphone size={28} />,
      title: "Optimización RRSS",
      description: "Diseño de assets visuales, configuración de WhatsApp Business y optimización de Fan Pages en Facebook e Instagram.",
      metric: "Engagement Visual"
    },
    {
      icon: <Target size={28} />,
      title: "Ads Manager (Meta Ads)",
      description: "Gestión de campañas publicitarias con Meta Ads. Segmentación estratégica para maximizar tu retorno de inversión (ROAS).",
      metric: "Tráfico Calificado"
    }
  ];

  return (
    <section id="servicios" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black font-orbitron mb-4">
            Nuestros <span className="text-brand-cyan">Servicios</span>
          </h2>
          <p className="text-gray-400 font-poppins max-w-2xl mx-auto">
            Soluciones visuales y estratégicas para escalar tu negocio.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <GlassCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              metric={service.metric}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
