import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface GlassCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  metric: string;
  delay?: number;
}

export default function GlassCard({ icon, title, description, metric, delay = 0 }: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col h-full group"
      style={{
        background: 'rgba(19,21,32,0.7)',
        backdropFilter: 'blur(20px) saturate(180%)',
        WebkitBackdropFilter: 'blur(20px) saturate(180%)',
        border: '1px solid var(--pd-border-n)',
        borderRadius: 'var(--radius-lg)',
        boxShadow: 'var(--pd-shadow-md)',
        transition: 'transform 200ms ease, box-shadow 200ms ease, border-color 200ms ease',
        padding: '32px'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = 'var(--pd-shadow-glow)';
        e.currentTarget.style.borderColor = 'var(--pd-border)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'none';
        e.currentTarget.style.boxShadow = 'var(--pd-shadow-md)';
        e.currentTarget.style.borderColor = 'var(--pd-border-n)';
      }}
    >
      <div className="w-14 h-14 rounded-[var(--radius-md)] bg-[rgba(67,97,238,0.08)] flex items-center justify-center text-[var(--pd-primary)] mb-6 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-2xl font-display font-semibold text-[var(--pd-text)] mb-4">{title}</h3>
      <p className="text-[var(--pd-text-2)] font-body text-sm leading-relaxed flex-grow mb-6">
        {description}
      </p>
      <div className="mt-auto pt-4 border-t border-[var(--pd-border-n)]">
        <span className="text-[var(--pd-text)] font-display font-bold text-xl">{metric}</span>
      </div>
    </motion.div>
  );
}
