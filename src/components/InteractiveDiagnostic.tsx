import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, CheckCircle2, Loader2, Zap, Terminal } from 'lucide-react';
import { GoogleGenAI, Type } from '@google/genai';

export default function InteractiveDiagnostic() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ score: number; recommendations: string[] } | null>(null);
  
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    sector: '',
    hasWebsite: '',
    usesSocialMedia: '',
    budget: '',
    challenge: [] as string[]
  });

  const challenges = [
    "Poco tráfico web",
    "Baja conversión",
    "Falta de reconocimiento de marca",
    "Costo por lead muy alto",
    "No sé cómo usar IA",
    "Competencia agresiva"
  ];

  const handleChallengeToggle = (challenge: string) => {
    setFormData(prev => {
      const current = prev.challenge;
      if (current.includes(challenge)) {
        return { ...prev, challenge: current.filter(c => c !== challenge) };
      } else {
        return { ...prev, challenge: [...current, challenge] };
      }
    });
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      // Initialize Gemini API
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      
      const prompt = `
        Actúa como un director de arte y experto en branding digital con IA.
        Analiza los siguientes datos de una empresa y genera un "Score de Visibilidad Digital" del 1 al 100,
        y provee exactamente 3 recomendaciones personalizadas y accionables sobre diseño visual, creación de contenido, edición de video o uso de modelos digitales.
        
        Datos de la empresa:
        - Nombre: ${formData.name}
        - Empresa: ${formData.company}
        - Sector: ${formData.sector}
        - ¿Tiene web?: ${formData.hasWebsite}
        - ¿Usa redes sociales?: ${formData.usesSocialMedia}
        - Presupuesto mensual: ${formData.budget}
        - Desafíos principales: ${formData.challenge.join(', ')}
      `;

      const response = await ai.models.generateContent({
        model: "gemini-3.1-flash-preview",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              score: {
                type: Type.INTEGER,
                description: "Score del 1 al 100"
              },
              recommendations: {
                type: Type.ARRAY,
                items: { type: Type.STRING },
                description: "Exactamente 3 recomendaciones"
              }
            },
            required: ["score", "recommendations"]
          }
        }
      });

      if (response.text) {
        const data = JSON.parse(response.text);
        setResult(data);
        setStep(4);
      }
    } catch (error) {
      console.error("Error calling Gemini API:", error);
      // Fallback in case of error
      setResult({
        score: 45,
        recommendations: [
          "Integrar modelos digitales generados con IA usando tus productos para destacar en redes sociales.",
          "Renovar tu identidad visual y brochures para transmitir una imagen más premium y tecnológica.",
          "Optimizar la edición de tus videos y flyers publicitarios para capturar la atención en los primeros 3 segundos."
        ]
      });
      setStep(4);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="diagnostico" className="py-24 md:py-32 relative z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-raleway mb-4"
          >
            Terminal de <span className="text-brand-cyan">Diagnóstico IA</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 font-poppins text-lg"
          >
            Descubre el potencial oculto de tu marca con nuestro análisis en tiempo real.
          </motion.p>
        </div>

        <div className="bg-[#050505] border border-white/10 rounded-xl p-1 md:p-2 shadow-2xl relative overflow-hidden">
          {/* Terminal Header */}
          <div className="flex items-center px-4 py-3 border-b border-white/5 bg-white/[0.02]">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            </div>
            <div className="mx-auto flex items-center text-xs font-mono text-gray-500">
              <Terminal size={14} className="mr-2" /> power-digital-ai-core
            </div>
          </div>

          <div className="p-6 md:p-10 bg-black/50 backdrop-blur-md min-h-[400px] flex flex-col justify-center relative">
            
            {/* Stepper Progress */}
            {step < 4 && (
              <div className="absolute top-6 right-6 font-mono text-xs text-brand-cyan/50">
                [ PROCESO: {step}/3 ]
              </div>
            )}

            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-8"
                >
                  <h3 className="text-xl font-mono text-brand-cyan mb-6 flex items-center">
                    <span className="mr-2">&gt;</span> INICIALIZANDO_DATOS
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-xs font-mono text-gray-500 mb-2 uppercase tracking-widest">INPUT: Nombre_Usuario</label>
                      <input 
                        type="text" 
                        className="w-full bg-transparent border-b border-gray-800 px-0 py-2 text-white focus:outline-none focus:border-brand-cyan transition-colors font-mono text-sm placeholder-gray-800"
                        value={formData.name}
                        onChange={e => setFormData({...formData, name: e.target.value})}
                        placeholder="Ej. Juan Pérez"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-gray-500 mb-2 uppercase tracking-widest">INPUT: Nombre_Empresa</label>
                      <input 
                        type="text" 
                        className="w-full bg-transparent border-b border-gray-800 px-0 py-2 text-white focus:outline-none focus:border-brand-cyan transition-colors font-mono text-sm placeholder-gray-800"
                        value={formData.company}
                        onChange={e => setFormData({...formData, company: e.target.value})}
                        placeholder="Ej. Power Corp"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-xs font-mono text-gray-500 mb-2 uppercase tracking-widest">INPUT: Sector_Industria</label>
                      <input 
                        type="text" 
                        className="w-full bg-transparent border-b border-gray-800 px-0 py-2 text-white focus:outline-none focus:border-brand-cyan transition-colors font-mono text-sm placeholder-gray-800"
                        value={formData.sector}
                        onChange={e => setFormData({...formData, sector: e.target.value})}
                        placeholder="Ej. E-commerce, Salud, Tecnología..."
                      />
                    </div>
                  </div>
                  <div className="flex justify-end mt-12">
                    <button 
                      onClick={() => setStep(2)}
                      disabled={!formData.name || !formData.company || !formData.sector}
                      className="flex items-center px-6 py-2 bg-white/5 text-brand-cyan border border-brand-cyan/30 rounded font-mono text-sm disabled:opacity-30 disabled:cursor-not-allowed hover:bg-brand-cyan/10 transition-colors"
                    >
                      EJECUTAR_SIGUIENTE <ChevronRight size={16} className="ml-2" />
                    </button>
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-8"
                >
                  <h3 className="text-xl font-mono text-brand-cyan mb-6 flex items-center">
                    <span className="mr-2">&gt;</span> ANALISIS_PRESENCIA_DIGITAL
                  </h3>
                  <div className="space-y-8">
                    <div>
                      <label className="block text-xs font-mono text-gray-500 mb-3 uppercase tracking-widest">QUERY: ¿Tiene_Sitio_Web?</label>
                      <div className="flex flex-wrap gap-4">
                        {['Sí', 'No', 'En construcción'].map(opt => (
                          <button
                            key={opt}
                            onClick={() => setFormData({...formData, hasWebsite: opt})}
                            className={`px-4 py-2 text-sm font-mono transition-all border ${formData.hasWebsite === opt ? 'bg-brand-cyan/10 border-brand-cyan text-brand-cyan' : 'border-gray-800 text-gray-500 hover:border-gray-600'}`}
                          >
                            [{opt}]
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-gray-500 mb-3 uppercase tracking-widest">QUERY: ¿Uso_Activo_RRSS?</label>
                      <div className="flex flex-wrap gap-4">
                        {['Sí', 'No', 'A veces'].map(opt => (
                          <button
                            key={opt}
                            onClick={() => setFormData({...formData, usesSocialMedia: opt})}
                            className={`px-4 py-2 text-sm font-mono transition-all border ${formData.usesSocialMedia === opt ? 'bg-brand-cyan/10 border-brand-cyan text-brand-cyan' : 'border-gray-800 text-gray-500 hover:border-gray-600'}`}
                          >
                            [{opt}]
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-gray-500 mb-3 uppercase tracking-widest">PARAM: Presupuesto_Mensual_USD</label>
                      <select 
                        className="w-full md:w-1/2 bg-transparent border-b border-gray-800 px-0 py-2 text-white focus:outline-none focus:border-brand-cyan transition-colors font-mono text-sm appearance-none"
                        value={formData.budget}
                        onChange={e => setFormData({...formData, budget: e.target.value})}
                      >
                        <option value="" disabled className="bg-black text-gray-500">Selecciona un rango...</option>
                        <option value="< $500" className="bg-black text-white">Menos de $500</option>
                        <option value="$500 - $2,000" className="bg-black text-white">$500 - $2,000</option>
                        <option value="$2,000 - $5,000" className="bg-black text-white">$2,000 - $5,000</option>
                        <option value="$5,000+" className="bg-black text-white">Más de $5,000</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex justify-between mt-12">
                    <button 
                      onClick={() => setStep(1)}
                      className="px-4 py-2 text-gray-500 hover:text-white font-mono text-sm transition-colors"
                    >
                      &lt; VOLVER
                    </button>
                    <button 
                      onClick={() => setStep(3)}
                      disabled={!formData.hasWebsite || !formData.usesSocialMedia || !formData.budget}
                      className="flex items-center px-6 py-2 bg-white/5 text-brand-cyan border border-brand-cyan/30 rounded font-mono text-sm disabled:opacity-30 disabled:cursor-not-allowed hover:bg-brand-cyan/10 transition-colors"
                    >
                      EJECUTAR_SIGUIENTE <ChevronRight size={16} className="ml-2" />
                    </button>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-8"
                >
                  <h3 className="text-xl font-mono text-brand-cyan mb-6 flex items-center">
                    <span className="mr-2">&gt;</span> IDENTIFICACION_DE_FALLOS
                  </h3>
                  <p className="text-xs text-gray-500 font-mono mb-4 uppercase tracking-widest">SELECCIONAR_VECTORES_DE_FRICCION:</p>
                  
                  <div className="flex flex-wrap gap-3">
                    {challenges.map(challenge => (
                      <button
                        key={challenge}
                        onClick={() => handleChallengeToggle(challenge)}
                        className={`px-4 py-2 text-sm font-mono transition-all border ${formData.challenge.includes(challenge) ? 'bg-brand-cyan/10 border-brand-cyan text-brand-cyan' : 'border-gray-800 text-gray-500 hover:border-gray-600'}`}
                      >
                        {formData.challenge.includes(challenge) ? '[x]' : '[ ]'} {challenge}
                      </button>
                    ))}
                  </div>

                  <div className="flex justify-between mt-12">
                    <button 
                      onClick={() => setStep(2)}
                      className="px-4 py-2 text-gray-500 hover:text-white font-mono text-sm transition-colors"
                    >
                      &lt; VOLVER
                    </button>
                    <button 
                      onClick={handleSubmit}
                      disabled={formData.challenge.length === 0 || loading}
                      className="flex items-center px-6 py-2 bg-brand-cyan text-black rounded font-mono text-sm font-bold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white transition-colors"
                    >
                      {loading ? (
                        <><Loader2 className="animate-spin mr-2" size={16} /> PROCESANDO_IA...</>
                      ) : (
                        'INICIAR_ANALISIS'
                      )}
                    </button>
                  </div>
                </motion.div>
              )}

              {step === 4 && result && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-left"
                >
                  <h3 className="text-xl font-mono text-brand-cyan mb-8 flex items-center">
                    <span className="mr-2">&gt;</span> RESULTADOS_DEL_ANALISIS
                  </h3>
                  
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-10 mb-10">
                    {/* Circular Progress */}
                    <div className="relative w-40 h-40 flex-shrink-0">
                      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="45" fill="none" stroke="#111" strokeWidth="4" />
                        <motion.circle 
                          cx="50" cy="50" r="45" fill="none" stroke="#0CE6F3" strokeWidth="4"
                          strokeDasharray="283"
                          initial={{ strokeDashoffset: 283 }}
                          animate={{ strokeDashoffset: 283 - (283 * result.score) / 100 }}
                          transition={{ duration: 2, ease: "easeOut" }}
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center flex-col">
                        <span className="text-4xl font-mono text-white">{result.score}</span>
                        <span className="text-[10px] text-brand-cyan font-mono tracking-widest mt-1">SCORE</span>
                      </div>
                    </div>

                    <div className="flex-grow w-full">
                      <h4 className="text-sm font-mono text-gray-500 mb-4 uppercase tracking-widest border-b border-gray-800 pb-2">
                        OUTPUT: RECOMENDACIONES_SISTEMA
                      </h4>
                      <ul className="space-y-4">
                        {result.recommendations.map((rec, idx) => (
                          <motion.li 
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1 + (idx * 0.2) }}
                            className="flex items-start text-gray-300 font-mono text-sm leading-relaxed"
                          >
                            <span className="text-brand-cyan mr-3 mt-0.5">&gt;</span>
                            <p>{rec}</p>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex justify-center border-t border-gray-800 pt-8">
                    <button 
                      onClick={() => { setStep(1); setFormData({...formData, challenge: []}); setResult(null); }}
                      className="px-6 py-2 text-gray-500 border border-gray-800 rounded font-mono text-xs hover:text-white hover:border-gray-500 transition-colors"
                    >
                      [ REINICIAR_SISTEMA ]
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
