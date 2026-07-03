import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, Loader2, Play, RefreshCw, CheckCircle, Smartphone, Mail, Sparkles, AlertCircle } from 'lucide-react';
import { GoogleGenAI, Type } from '@google/genai';

export default function InteractiveDiagnostic() {
  const [step, setStep] = useState(1); // 1: Info, 2: Challenge, 3: Contact, 4: Analysis Animation, 5: Results
  const [analysisText, setAnalysisText] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ score: number; recommendations: string[] } | null>(null);
  
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    sector: '',
    challenge: '',
    contact: ''
  });

  const challenges = [
    "Leads sin seguimiento constante",
    "Demasiados procesos manuales y repetitivos",
    "Contenido para redes muy lento e inconsistente",
    "Atención desordenada o lenta en WhatsApp",
    "Datos de ventas y marketing dispersos",
    "Equipo saturado con tareas administrativas"
  ];

  // Simulated terminal typing for AI analysis steps
  useEffect(() => {
    if (step === 4) {
      const phrases = [
        "Iniciando diagnóstico estratégico POWER...",
        "Analizando procesos internos y cuellos de botella...",
        "Detectando fugas de tiempo y oportunidades comerciales...",
        "Evaluando integraciones de agentes autónomos de IA...",
        "Generando ruta POWER personalizada para tu negocio...",
        "Consolidando reporte de optimización..."
      ];
      
      let currentIdx = 0;
      setAnalysisText(phrases[0]);

      const interval = setInterval(() => {
        currentIdx++;
        if (currentIdx < phrases.length) {
          setAnalysisText(phrases[currentIdx]);
        } else {
          clearInterval(interval);
          setStep(5);
        }
      }, 1500);

      return () => clearInterval(interval);
    }
  }, [step]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Custom tailormade recommendation algorithm based on user selection
    let score = 35;
    let recs: string[] = [];

    // Score calculations
    if (formData.challenge.includes("WhatsApp")) {
      score += 15;
      recs.push("Configurar un agente IA conversacional conectado a tu WhatsApp Business para filtrar leads, responder FAQs y agendar citas 24/7 sin fallar.");
    } else {
      recs.push("Implementar un flujo de automatización comercial en WhatsApp para responder en menos de 5 minutos a cualquier prospecto interesado.");
    }

    if (formData.challenge.includes("manuales")) {
      score += 10;
      recs.push("Conectar tu CRM, hojas de cálculo y Google Calendar mediante Make o Zapier, automatizando el 90% del traspaso manual de datos de tus vendedores.");
    } else {
      recs.push("Realizar una auditoría de workflows internos para detectar tareas que repites semanalmente y sustituirlas por prompts automáticos.");
    }

    if (formData.challenge.includes("Contenido") || formData.challenge.includes("lento")) {
      score += 12;
      recs.push(`Desarrollar un Modelo Digital / Avatar IA personalizado (estilo Amara) para producir videos de marca altamente estables y profesionales para TikTok y Meta Ads sin depender de locaciones.`);
    } else {
      recs.push("Consolidar un ecosistema de diseño automatizado para generar copys publicitarios y banners de ofertas con un solo clic con plantillas preaprobadas.");
    }

    if (formData.challenge.includes("seguimiento") || formData.challenge.includes("Leads")) {
      score += 18;
      recs.push("Configurar un pipeline automatizado de e-mail marketing y remarketing telefónico automatizado para reactivar leads fríos e incrementar la conversión.");
    }

    // Limit to exactly 3 recommendations
    recs = recs.slice(0, 3);
    if (score > 90) score = 88; // Always room for improvement

    setResult({
      score: score,
      recommendations: recs
    });

    // Go to step 4 (simulation)
    setStep(4);
    setLoading(false);
  };

  return (
    <section id="diagnostico" className="relative z-10 bg-[var(--pd-bg)] px-5 py-24 md:py-32">
      {/* Background glowing effects */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[20%] left-[20%] w-[60%] h-[50%] bg-[radial-gradient(ellipse_at_center,rgba(67,97,238,0.12)_0%,transparent_60%)]"></div>
        <div className="absolute bottom-[10%] right-[10%] w-[40%] h-[40%] bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.06)_0%,transparent_60%)]"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--pd-gold)] mb-4 inline-block">Herramienta de Diagnóstico Gratis</span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[clamp(2.2rem,4.5vw,3.5rem)] font-display font-bold text-[var(--pd-text)] mb-4 tracking-tight"
          >
            Diagnóstico <span className="bg-[linear-gradient(135deg,#4361ee,#7b9eff,#e7c97a)] bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">Power Digital</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[var(--pd-text-2)] font-body text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Descubre en minutos qué procesos de tu negocio pueden automatizarse, optimizarse o escalarse con inteligencia artificial.
          </motion.p>
        </div>

        {/* Terminal Container */}
        <div className="bg-[var(--pd-surface)] border border-[rgba(67,97,238,0.2)] rounded-3xl shadow-[0_0_60px_rgba(67,97,238,0.12),0_25px_60px_rgba(11,13,23,0.8)] relative overflow-hidden max-w-[780px] mx-auto">
          
          {/* Terminal Header */}
          <div className="bg-[#171a2e] border-b border-[rgba(67,97,238,0.15)] py-4 px-6 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
              <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
            </div>
            
            <span className="font-mono text-xs text-[var(--pd-text-3)] tracking-[0.1em]">
              diagnostico-power-system-v2
            </span>
            
            <div className="flex items-center gap-2 font-mono text-[10px] text-[var(--pd-gold)] tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--pd-gold)] animate-ping"></span>
              ONLINE
            </div>
          </div>

          {/* Terminal Body */}
          <div className="py-8 px-6 md:px-10 min-h-[420px] flex flex-col justify-center relative bg-[var(--pd-surface)]">
            
            {/* Stepper Progress Indicator */}
            {step < 4 && (
              <div className="flex items-center gap-4 mb-8">
                <span className="font-mono text-[10px] text-[var(--pd-text-3)] tracking-widest uppercase">
                  Fase: {step}/3
                </span>
                <div className="flex-1 h-1 bg-[rgba(255,255,255,0.06)] rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-gradient-to-r from-[var(--pd-primary)] to-[var(--pd-gold)] rounded-full shadow-[0_0_8px_rgba(67,97,238,0.5)]"
                    initial={{ width: 0 }}
                    animate={{ width: `${(step / 3) * 100}%` }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
              </div>
            )}

            <AnimatePresence mode="wait">
              
              {/* STEP 1: General Info */}
              {step === 1 && (
                <motion.form
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  onSubmit={(e) => { e.preventDefault(); setStep(2); }}
                  className="space-y-6"
                >
                  <h3 className="font-mono text-xs font-bold text-[var(--pd-gold)] tracking-wider mb-6 flex items-center">
                    <span className="text-[var(--pd-primary)] mr-2">&gt;</span> INICIALIZANDO_DATOS_EMPRESA
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[10px] font-mono text-[var(--pd-text-3)] tracking-wider uppercase mb-2">Nombre Completo</label>
                      <input 
                        required
                        type="text" 
                        className="w-full bg-[var(--pd-surface-2)] border border-[rgba(255,255,255,0.06)] rounded-xl px-4 py-3 text-[var(--pd-text)] focus:outline-none focus:border-[var(--pd-gold)] focus:shadow-[0_0_15px_rgba(212,175,55,0.1)] transition-all font-body text-sm placeholder:text-[var(--pd-text-3)]"
                        value={formData.name}
                        onChange={e => setFormData({...formData, name: e.target.value})}
                        placeholder="Ej. Juan Cabrera"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-mono text-[var(--pd-text-3)] tracking-wider uppercase mb-2">Nombre de Empresa</label>
                      <input 
                        required
                        type="text" 
                        className="w-full bg-[var(--pd-surface-2)] border border-[rgba(255,255,255,0.06)] rounded-xl px-4 py-3 text-[var(--pd-text)] focus:outline-none focus:border-[var(--pd-gold)] focus:shadow-[0_0_15px_rgba(212,175,55,0.1)] transition-all font-body text-sm placeholder:text-[var(--pd-text-3)]"
                        value={formData.company}
                        onChange={e => setFormData({...formData, company: e.target.value})}
                        placeholder="Ej. Power Corp"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-[10px] font-mono text-[var(--pd-text-3)] tracking-wider uppercase mb-2">Rubro / Sector del Negocio</label>
                      <input 
                        required
                        type="text" 
                        className="w-full bg-[var(--pd-surface-2)] border border-[rgba(255,255,255,0.06)] rounded-xl px-4 py-3 text-[var(--pd-text)] focus:outline-none focus:border-[var(--pd-gold)] focus:shadow-[0_0_15px_rgba(212,175,55,0.1)] transition-all font-body text-sm placeholder:text-[var(--pd-text-3)]"
                        value={formData.sector}
                        onChange={e => setFormData({...formData, sector: e.target.value})}
                        placeholder="Ej. Consultoría, Retail, Clínicas, Educación, E-commerce..."
                      />
                    </div>
                  </div>

                  <div className="flex justify-end pt-4">
                    <button 
                      type="submit"
                      disabled={!formData.name || !formData.company || !formData.sector}
                      className="inline-flex items-center gap-2 bg-[var(--pd-primary)] text-white border-none cursor-pointer font-body font-semibold text-sm px-6 py-3.5 rounded-xl transition-all duration-300 hover:bg-[var(--pd-primary-hover)] hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(67,97,238,0.4)] disabled:opacity-30 disabled:cursor-not-allowed"
                    >
                      <span>Siguiente paso</span>
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </motion.form>
              )}

              {/* STEP 2: Main Challenge */}
              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h3 className="font-mono text-xs font-bold text-[var(--pd-gold)] tracking-wider mb-6 flex items-center">
                    <span className="text-[var(--pd-primary)] mr-2">&gt;</span> SELECCIONAR_RETO_PRINCIPAL
                  </h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {challenges.map(challenge => (
                      <button
                        key={challenge}
                        type="button"
                        onClick={() => setFormData({...formData, challenge: challenge})}
                        className={`text-left px-4 py-3.5 rounded-xl border font-body text-xs md:text-sm transition-all duration-200 flex items-start gap-3 ${
                          formData.challenge === challenge 
                            ? 'bg-[rgba(212,175,55,0.06)] border-[var(--pd-gold)] text-white font-medium shadow-[0_0_15px_rgba(212,175,55,0.1)]' 
                            : 'bg-[var(--pd-surface-2)] border-[rgba(255,255,255,0.05)] text-[var(--pd-text-2)] hover:border-[var(--pd-primary-light)] hover:text-white'
                        }`}
                      >
                        <span className={`w-4 h-4 rounded-full border flex-shrink-0 flex items-center justify-center mt-0.5 ${formData.challenge === challenge ? 'border-[var(--pd-gold)] bg-[var(--pd-gold)] text-[var(--pd-bg)]' : 'border-[rgba(255,255,255,0.2)]'}`}>
                          {formData.challenge === challenge && <span className="w-1.5 h-1.5 rounded-full bg-white"></span>}
                        </span>
                        <span>{challenge}</span>
                      </button>
                    ))}
                  </div>

                  <div className="flex justify-between items-center pt-6">
                    <button 
                      type="button"
                      onClick={() => setStep(1)}
                      className="px-4 py-2 text-[var(--pd-text-3)] hover:text-white font-mono text-xs transition-colors"
                    >
                      &lt; VOLVER
                    </button>
                    <button 
                      type="button"
                      onClick={() => setStep(3)}
                      disabled={!formData.challenge}
                      className="inline-flex items-center gap-2 bg-[var(--pd-primary)] text-white border-none cursor-pointer font-body font-semibold text-sm px-6 py-3.5 rounded-xl transition-all duration-300 hover:bg-[var(--pd-primary-hover)] hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(67,97,238,0.4)] disabled:opacity-30 disabled:cursor-not-allowed"
                    >
                      <span>Siguiente paso</span>
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* STEP 3: Contact details */}
              {step === 3 && (
                <motion.form
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <h3 className="font-mono text-xs font-bold text-[var(--pd-gold)] tracking-wider mb-6 flex items-center">
                    <span className="text-[var(--pd-primary)] mr-2">&gt;</span> REGISTRO_CANAL_CONTACTO
                  </h3>

                  <div className="max-w-md mx-auto space-y-4">
                    <p className="text-xs text-[var(--pd-text-2)] font-body leading-relaxed mb-4 text-center">
                      Ingresa tu canal de comunicación preferido para recibir tu reporte detallado de automatización y Score de madurez.
                    </p>

                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[var(--pd-text-3)]">
                        <Smartphone size={16} className="text-[var(--pd-gold)]" />
                      </div>
                      <input 
                        required
                        type="text" 
                        className="w-full bg-[var(--pd-surface-2)] border border-[rgba(255,255,255,0.06)] rounded-xl pl-11 pr-4 py-4 text-[var(--pd-text)] focus:outline-none focus:border-[var(--pd-gold)] focus:shadow-[0_0_15px_rgba(212,175,55,0.1)] transition-all font-body text-sm placeholder:text-[var(--pd-text-3)]"
                        value={formData.contact}
                        onChange={e => setFormData({...formData, contact: e.target.value})}
                        placeholder="WhatsApp (ej: +51 920690260) o Email"
                      />
                    </div>
                  </div>

                  <div className="flex justify-between items-center pt-6">
                    <button 
                      type="button"
                      onClick={() => setStep(2)}
                      className="px-4 py-2 text-[var(--pd-text-3)] hover:text-white font-mono text-xs transition-colors"
                    >
                      &lt; VOLVER
                    </button>
                    <button 
                      type="submit"
                      disabled={!formData.contact || loading}
                      className="inline-flex items-center gap-2 bg-[var(--pd-primary)] text-white border-none cursor-pointer font-body font-semibold text-sm px-8 py-3.5 rounded-xl transition-all duration-300 hover:bg-[var(--pd-primary-hover)] hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(67,97,238,0.4)] disabled:opacity-30 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <Loader2 className="animate-spin" size={16} />
                      ) : (
                        <>Iniciar diagnóstico</>
                      )}
                    </button>
                  </div>
                </motion.form>
              )}

              {/* STEP 4: Beautiful Immersive AI Simulation */}
              {step === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-12 flex flex-col items-center justify-center"
                >
                  <div className="w-16 h-16 rounded-full bg-[rgba(212,175,55,0.06)] border border-[rgba(212,175,55,0.2)] flex items-center justify-center mb-6 text-[var(--pd-gold)] relative">
                    <RefreshCw className="animate-spin text-[var(--pd-gold)]" size={24} />
                    <span className="absolute inset-0 rounded-full border border-dashed border-[var(--pd-primary)] animate-spin-slow"></span>
                  </div>

                  <div className="font-mono text-xs md:text-sm text-[var(--pd-gold)] uppercase tracking-widest animate-pulse max-w-md mx-auto mb-3">
                    {analysisText}
                  </div>

                  <div className="w-48 h-1 bg-[rgba(255,255,255,0.06)] rounded-full overflow-hidden mt-4 mx-auto">
                    <div className="h-full bg-gradient-to-r from-[var(--pd-primary)] to-[var(--pd-gold)] animate-pulse w-full"></div>
                  </div>
                </motion.div>
              )}

              {/* STEP 5: Results panel */}
              {step === 5 && result && (
                <motion.div
                  key="step5"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="space-y-6 text-left"
                >
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-8">
                    
                    {/* Circle Score visualization */}
                    <div className="relative w-36 h-36 flex-shrink-0 bg-[rgba(11,13,23,0.5)] rounded-full border border-[rgba(255,255,255,0.05)] flex items-center justify-center">
                      <svg className="absolute inset-0 w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="4" />
                        <motion.circle 
                          cx="50" cy="50" r="45" fill="none" stroke="var(--pd-gold)" strokeWidth="4"
                          strokeDasharray="283"
                          initial={{ strokeDashoffset: 283 }}
                          animate={{ strokeDashoffset: 283 - (283 * result.score) / 100 }}
                          transition={{ duration: 1.5, ease: "easeOut" }}
                        />
                      </svg>
                      <div className="text-center">
                        <span className="font-display font-bold text-4xl text-white block">{result.score}%</span>
                        <span className="font-mono text-[8px] text-[var(--pd-text-3)] uppercase tracking-widest">Score de Madurez</span>
                      </div>
                    </div>

                    {/* Quick description */}
                    <div className="flex-1">
                      <div className="inline-flex items-center gap-1.5 bg-[rgba(212,175,55,0.06)] border border-[rgba(212,175,55,0.25)] rounded-full px-3 py-1 font-mono text-[9px] text-[var(--pd-gold)] uppercase tracking-wider mb-3">
                        <Sparkles size={10} /> Reporte POWER Generado
                      </div>
                      <h4 className="font-display font-bold text-lg text-white mb-2">Análisis de {formData.company}</h4>
                      <p className="text-xs md:text-sm text-[var(--pd-text-2)] font-body leading-relaxed">
                        Tu nivel de madurez e infraestructura digital actual tiene amplio margen de optimización. Al implementar procesos lógicos automatizados podrías recuperar hasta un <span className="text-[var(--pd-gold-light)] font-bold">40% del tiempo operativo semanal</span> de tu equipo.
                      </p>
                    </div>

                  </div>

                  {/* Recommendations */}
                  <div className="space-y-4">
                    <span className="font-mono text-[9px] uppercase tracking-wider text-[var(--pd-text-3)] block border-b border-[rgba(255,255,255,0.05)] pb-1.5">Recomendaciones prioritarias del sistema:</span>
                    
                    <div className="grid grid-cols-1 gap-3">
                      {result.recommendations.map((rec, i) => (
                        <div key={i} className="bg-[rgba(16,18,31,0.6)] border border-[rgba(255,255,255,0.04)] rounded-xl p-4 flex gap-3 hover:border-[var(--pd-gold)]/20 transition-all duration-300">
                          <span className="font-mono text-sm text-[var(--pd-gold)] font-bold">0{i+1}.</span>
                          <p className="text-xs md:text-sm text-[var(--pd-text-2)] font-body leading-relaxed">{rec}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Booking CTA trigger inside results */}
                  <div className="bg-[rgba(67,97,238,0.06)] border border-[rgba(67,97,238,0.15)] rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 mt-8">
                    <div className="text-center sm:text-left">
                      <p className="text-xs font-semibold text-white mb-1">¿Quieres ver cómo luciría esta implementación en vivo?</p>
                      <p className="text-[10px] text-[var(--pd-text-3)] font-mono uppercase">Te mostramos ejemplos reales en una llamada estratégica.</p>
                    </div>
                    <a 
                      href="#agenda" 
                      className="bg-[var(--pd-primary)] hover:bg-[var(--pd-primary-hover)] text-white text-xs font-bold px-4 py-2.5 rounded-lg transition-all duration-300 flex items-center gap-1.5 shrink-0"
                    >
                      <span>Conversar en vivo</span>
                      <ChevronRight size={14} />
                    </a>
                  </div>

                  {/* Restart button */}
                  <div className="flex justify-center pt-6 border-t border-[rgba(255,255,255,0.05)]">
                    <button 
                      type="button"
                      onClick={() => { setStep(1); setFormData({ name: '', company: '', sector: '', challenge: '', contact: '' }); setResult(null); }}
                      className="font-mono text-[9px] text-[var(--pd-text-3)] hover:text-white uppercase tracking-widest border border-[rgba(255,255,255,0.05)] rounded-lg px-3 py-1.5"
                    >
                      [ RE-INICIAR TERMINAL ]
                    </button>
                  </div>
                </motion.div>
              )}

            </AnimatePresence>

          </div>
        </div>

      </div>
    </section>
  );
}
