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
      className="bg-brand-glass backdrop-blur-md border border-brand-cyan/30 rounded-2xl p-8 flex flex-col h-full transition-all duration-300 box-glow-hover group"
    >
      <div className="w-14 h-14 rounded-xl bg-brand-cyan/10 flex items-center justify-center text-brand-cyan mb-6 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-2xl font-orbitron font-bold text-white mb-4">{title}</h3>
      <p className="text-gray-400 font-poppins text-sm leading-relaxed flex-grow mb-6">
        {description}
      </p>
      <div className="mt-auto pt-4 border-t border-brand-cyan/20">
        <span className="text-brand-cyan font-orbitron font-bold text-xl text-glow">{metric}</span>
      </div>
    </motion.div>
  );
}
