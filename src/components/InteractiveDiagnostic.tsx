import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, Calendar, ArrowRight, Loader2 } from 'lucide-react';

export default function InteractiveDiagnostic() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    email: '',
    service: '',
    budget: '',
    notes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API request
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
    }, 1200);
  };

  return (
    <section id="diagnostico" className="relative z-10 bg-[var(--pd-bg)] px-4 py-24 md:py-32 border-t border-white/[0.01]">
      {/* Background glowing effects */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[20%] left-[20%] w-[60%] h-[50%] bg-[radial-gradient(ellipse_at_center,rgba(67,97,238,0.08)_0%,transparent_60%)]"></div>
        <div className="absolute bottom-[10%] right-[10%] w-[40%] h-[40%] bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.04)_0%,transparent_60%)]"></div>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--pd-gold)] mb-4 inline-block">Paso Final para tu Crecimiento</span>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[clamp(2.1rem,4.5vw,3.5rem)] font-display font-bold text-[var(--pd-text)] mb-4 tracking-tight"
          >
            Agenda tu llamada Power Digital
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[var(--pd-text-2)] font-body text-base max-w-xl mx-auto leading-relaxed"
          >
            Completa tus datos brevemente y solicita una cotización personalizada de nuestros servicios digitales.
          </motion.p>
        </div>

        {/* Form Container Card */}
        <div className="bg-[var(--pd-surface)] border border-[rgba(212,175,55,0.15)] rounded-3xl shadow-[0_25px_60px_rgba(11,13,23,0.9),0_0_30px_rgba(212,175,55,0.02)] overflow-hidden">
          
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--pd-gold)]/30 to-transparent"></div>

          <div className="p-8 md:p-12 relative min-h-[400px] flex flex-col justify-center">
            
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div className="flex flex-col">
                      <label className="text-[10px] font-mono text-[var(--pd-text-3)] tracking-wider uppercase mb-2">Nombre completo</label>
                      <input 
                        required
                        type="text" 
                        placeholder="Ej: Juan Cabrera"
                        value={formData.name}
                        onChange={e => setFormData({...formData, name: e.target.value})}
                        className="w-full bg-[var(--pd-bg)] border border-white/[0.08] focus:border-[var(--pd-gold)]/60 rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-all duration-300 font-body placeholder:text-[var(--pd-text-3)]"
                      />
                    </div>

                    {/* WhatsApp */}
                    <div className="flex flex-col">
                      <label className="text-[10px] font-mono text-[var(--pd-text-3)] tracking-wider uppercase mb-2">WhatsApp de contacto</label>
                      <input 
                        required
                        type="text" 
                        placeholder="Ej: +51 920 690 260"
                        value={formData.whatsapp}
                        onChange={e => setFormData({...formData, whatsapp: e.target.value})}
                        className="w-full bg-[var(--pd-bg)] border border-white/[0.08] focus:border-[var(--pd-gold)]/60 rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-all duration-300 font-body placeholder:text-[var(--pd-text-3)]"
                      />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col md:col-span-2">
                      <label className="text-[10px] font-mono text-[var(--pd-text-3)] tracking-wider uppercase mb-2">Correo electrónico</label>
                      <input 
                        required
                        type="email" 
                        placeholder="Ej: hola@tuempresa.com"
                        value={formData.email}
                        onChange={e => setFormData({...formData, email: e.target.value})}
                        className="w-full bg-[var(--pd-bg)] border border-white/[0.08] focus:border-[var(--pd-gold)]/60 rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-all duration-300 font-body placeholder:text-[var(--pd-text-3)]"
                      />
                    </div>

                    {/* Target Service Dropdown */}
                    <div className="flex flex-col">
                      <label className="text-[10px] font-mono text-[var(--pd-text-3)] tracking-wider uppercase mb-2">¿Qué servicio te interesa cotizar hoy?</label>
                      <select 
                        required
                        value={formData.service}
                        onChange={e => setFormData({...formData, service: e.target.value})}
                        className="w-full bg-[var(--pd-bg)] border border-white/[0.08] focus:border-[var(--pd-gold)]/60 rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-all duration-300 font-body"
                      >
                        <option value="" disabled>Selecciona una opción</option>
                        <option value="Videos con IA (TikTok/Reels)">Videos con IA (TikTok/Reels)</option>
                        <option value="Avatar IA Premium">Avatar IA Premium</option>
                        <option value="Diseño, Edición o Marca Rápida">Diseño, Edición o Marca Rápida</option>
                        <option value="Presencia Web o Catálogo Digital">Presencia Web o Catálogo Digital</option>
                        <option value="Meta Ads (Anuncios Básicos)">Meta Ads (Anuncios Básicos)</option>
                        <option value="Otro servicio / Consultoría personalizada">Otro servicio / Consultoría personalizada</option>
                      </select>
                    </div>

                    {/* Budget Dropdown */}
                    <div className="flex flex-col">
                      <label className="text-[10px] font-mono text-[var(--pd-text-3)] tracking-wider uppercase mb-2">¿Cuál es tu presupuesto estimado para este proyecto?</label>
                      <select 
                        required
                        value={formData.budget}
                        onChange={e => setFormData({...formData, budget: e.target.value})}
                        className="w-full bg-[var(--pd-bg)] border border-white/[0.08] focus:border-[var(--pd-gold)]/60 rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-all duration-300 font-body"
                      >
                        <option value="" disabled>Selecciona una opción</option>
                        <option value="Menos de $150 USD">Menos de $150 USD</option>
                        <option value="Entre $150 y $400 USD">Entre $150 y $400 USD</option>
                        <option value="Más de $400 USD">Más de $400 USD</option>
                      </select>
                    </div>

                    {/* Brief notes textarea */}
                    <div className="flex flex-col md:col-span-2">
                      <label className="text-[10px] font-mono text-[var(--pd-text-3)] tracking-wider uppercase mb-2">Cuéntanos brevemente sobre tu negocio y qué esperas lograr</label>
                      <textarea 
                        required
                        rows={4}
                        placeholder="Ej: Vendo asesorías de finanzas personales y quiero automatizar la entrega de mi catálogo de precios e integrar videos dinámicos hechos con IA..."
                        value={formData.notes}
                        onChange={e => setFormData({...formData, notes: e.target.value})}
                        className="w-full bg-[var(--pd-bg)] border border-white/[0.08] focus:border-[var(--pd-gold)]/60 rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-all duration-300 font-body placeholder:text-[var(--pd-text-3)] resize-none"
                      />
                    </div>
                  </div>

                  {/* Submission CTA */}
                  <div className="pt-4 flex justify-center">
                    <button 
                      type="submit"
                      disabled={loading}
                      className="w-full md:w-auto min-w-[240px] relative inline-flex items-center justify-center gap-3 bg-[var(--pd-primary)] text-white border-none cursor-pointer font-body font-semibold text-sm px-8 py-4 rounded-xl shadow-[0_8px_24px_rgba(67,97,238,0.35)] transition-all duration-300 overflow-hidden group hover:bg-[var(--pd-primary-hover)] hover:-translate-y-0.5"
                    >
                      {loading ? (
                        <Loader2 className="animate-spin text-white" size={16} />
                      ) : (
                        <>
                          <span>Enviar datos y agendar llamada</span>
                          <ArrowRight size={16} />
                        </>
                      )}
                    </button>
                  </div>
                </motion.form>
              ) : (
                <motion.div
                  key="form-success"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8 flex flex-col items-center"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6 shadow-[0_0_20px_rgba(16,185,129,0.15)] animate-pulse">
                    <Check size={32} />
                  </div>
                  
                  <h3 className="font-display font-bold text-2xl text-white mb-4">
                    ¡Felicidades, {formData.name}!
                  </h3>
                  
                  <p className="text-sm md:text-base text-[var(--pd-text-2)] font-body max-w-lg mx-auto mb-8 leading-relaxed">
                    ¡Datos recibidos con éxito! Hemos guardado tu información. Ahora, para elegir tu horario de llamada, haz clic en el siguiente botón:
                  </p>
                  
                  <a 
                    href="https://calendar.app.google/uaQpwSEWSHYadWcp6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[var(--pd-gold)] to-[var(--pd-gold-light)] hover:from-[var(--pd-gold-light)] hover:to-[var(--pd-gold)] text-[var(--pd-bg)] font-body font-bold text-sm px-8 py-4.5 rounded-xl shadow-[0_8px_24px_rgba(212,175,55,0.25)] transition-all duration-300 hover:-translate-y-0.5 group"
                  >
                    <Calendar size={16} />
                    <span>Ir a Calendly para agendar horario</span>
                    <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
                  </a>
                  
                  <p className="text-[10px] font-mono text-[var(--pd-text-3)] mt-6 uppercase tracking-wider">
                    Soporte directo de Power Digital
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </div>

      </div>
    </section>
  );
}
