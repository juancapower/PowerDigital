import { motion } from 'motion/react';
import { UserX, Clock, FileWarning, MessageSquareOff, Database, Users } from 'lucide-react';

export default function ProblemSection() {
  const painPoints = [
    {
      icon: <UserX size={24} className="text-[var(--pd-gold)]" />,
      title: "Leads sin seguimiento",
      desc: "Contactos valiosos que llegan de campañas y se pierden por no responder a tiempo o por olvidos humanos."
    },
    {
      icon: <Clock size={24} className="text-[var(--pd-primary-light)]" />,
      title: "Procesos manuales",
      desc: "Tu equipo pierde valiosas horas copiando datos, enviando correos uno a uno o rellenando Excels infinitos."
    },
    {
      icon: <FileWarning size={24} className="text-[var(--pd-gold)]" />,
      title: "Contenido lento",
      desc: "Falta de consistencia y demoras en crear videos, posts o anuncios para mantener tu marca posicionada."
    },
    {
      icon: <MessageSquareOff size={24} className="text-[var(--pd-primary-light)]" />,
      title: "Atención desordenada",
      desc: "Clientes esperando horas en WhatsApp por información básica, perdiendo interés antes de agendar."
    },
    {
      icon: <Database size={24} className="text-[var(--pd-gold)]" />,
      title: "Datos dispersos",
      desc: "Sin claridad de dónde vienen tus mejores clientes, qué embudo funciona o cuánta inversión estás perdiendo."
    },
    {
      icon: <Users size={24} className="text-[var(--pd-primary-light)]" />,
      title: "Equipo saturado",
      desc: "Colaboradores talentosos haciendo tareas mecánicas en lugar de concentrarse en cerrar ventas y crear valor."
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-[var(--pd-bg)] relative overflow-hidden">
      {/* Background radial effects */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[20%] left-[-10%] w-[50%] h-[50%] bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.04)_0%,transparent_60%)]"></div>
        <div className="absolute bottom-[20%] right-[-10%] w-[50%] h-[50%] bg-[radial-gradient(ellipse_at_center,rgba(67,97,238,0.05)_0%,transparent_60%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--pd-gold)] mb-4 inline-block">La cruda realidad operativa</span>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-[var(--pd-text)] leading-tight tracking-tight mb-6">
            Tu negocio no está frenado por falta de talento.<br/>
            <span className="bg-[linear-gradient(135deg,#e7c97a_0%,#d4af37_60%,#9c6a16_100%)] bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              Está frenado por sistemas débiles.
            </span>
          </h2>
          <p className="font-body text-base md:text-lg text-[var(--pd-text-2)] leading-relaxed max-w-2xl mx-auto">
            Si tus ventas dependen de seguimiento manual, tus procesos viven en WhatsApp y tu equipo repite tareas todos los días, la IA no es un lujo: es infraestructura.
          </p>
        </div>

        {/* Pain Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {painPoints.map((pain, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[var(--pd-surface)] border border-[var(--pd-border)] rounded-2xl p-6 md:p-8 hover:border-[var(--pd-gold)]/40 transition-all duration-300 group hover:shadow-[0_10px_30px_rgba(212,175,55,0.03)] flex flex-col items-start text-left"
            >
              <div className="w-12 h-12 rounded-xl bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] flex items-center justify-center mb-6 group-hover:bg-[rgba(212,175,55,0.05)] group-hover:border-[rgba(212,175,55,0.2)] transition-colors duration-300">
                {pain.icon}
              </div>
              <h3 className="font-display font-bold text-lg text-[var(--pd-text)] mb-3 group-hover:text-[var(--pd-gold-light)] transition-colors duration-300">
                {pain.title}
              </h3>
              <p className="font-body text-sm text-[var(--pd-text-2)] leading-relaxed">
                {pain.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
