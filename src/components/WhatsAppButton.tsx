import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/51920690260?text=Hola%20JuanCa%20Power,%20quiero%20escalar%20mi%20negocio."
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200, damping: 20 }}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[var(--pd-primary)] text-white rounded-[var(--radius-full)] shadow-[0_4px_16px_rgba(67,97,238,0.35)] hover:shadow-[var(--pd-shadow-glow)] hover:bg-[var(--pd-primary-hover)] hover:scale-110 transition-all duration-200 ease-in-out group"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle size={28} className="fill-current" />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-[var(--pd-surface-2)] border border-[var(--pd-border-n)] text-[var(--pd-text)] text-xs font-body rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
        Hablemos por WhatsApp
      </span>
    </motion.a>
  );
}
