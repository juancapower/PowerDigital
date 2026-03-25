import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, CheckCircle2, Loader2, Zap } from 'lucide-react';
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
    <section id="diagnostico" className="py-24 relative z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black font-orbitron mb-4">
            Obtén tu <span className="text-brand-cyan text-glow">Score de Visibilidad</span>
          </h2>
          <p className="text-gray-400 font-poppins">
            Descubre el potencial oculto de tu marca con nuestro diagnóstico impulsado por IA.
          </p>
        </div>

        <div className="bg-brand-glass backdrop-blur-xl border border-brand-cyan/20 rounded-3xl p-8 md:p-12 box-glow relative overflow-hidden">
          
          {/* Stepper Progress */}
          {step < 4 && (
            <div className="flex justify-center mb-12">
              <div className="flex items-center space-x-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-orbitron font-bold text-sm transition-colors duration-300 ${step >= i ? 'bg-brand-cyan text-black box-glow' : 'bg-black border border-gray-700 text-gray-500'}`}>
                      {step > i ? <CheckCircle2 size={20} /> : i}
                    </div>
                    {i < 3 && (
                      <div className={`w-12 h-1 mx-2 rounded-full transition-colors duration-300 ${step > i ? 'bg-brand-cyan' : 'bg-gray-800'}`}></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="min-h-[300px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-orbitron text-white mb-6">Datos Básicos</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-poppins text-gray-400 mb-2">Tu Nombre</label>
                      <input 
                        type="text" 
                        className="w-full bg-black/50 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-colors font-poppins"
                        value={formData.name}
                        onChange={e => setFormData({...formData, name: e.target.value})}
                        placeholder="Ej. Juan Pérez"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-poppins text-gray-400 mb-2">Nombre de Empresa</label>
                      <input 
                        type="text" 
                        className="w-full bg-black/50 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-colors font-poppins"
                        value={formData.company}
                        onChange={e => setFormData({...formData, company: e.target.value})}
                        placeholder="Ej. Power Corp"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-poppins text-gray-400 mb-2">Sector / Industria</label>
                      <input 
                        type="text" 
                        className="w-full bg-black/50 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-colors font-poppins"
                        value={formData.sector}
                        onChange={e => setFormData({...formData, sector: e.target.value})}
                        placeholder="Ej. E-commerce, Salud, Tecnología..."
                      />
                    </div>
                  </div>
                  <div className="flex justify-end mt-8">
                    <button 
                      onClick={() => setStep(2)}
                      disabled={!formData.name || !formData.company || !formData.sector}
                      className="flex items-center px-6 py-3 bg-brand-cyan text-black rounded-full font-orbitron font-bold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white transition-colors"
                    >
                      Siguiente <ChevronRight size={20} className="ml-2" />
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
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-orbitron text-white mb-6">Presencia Digital</h3>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-poppins text-gray-400 mb-3">¿Tienes sitio web?</label>
                      <div className="flex space-x-4">
                        {['Sí', 'No', 'En construcción'].map(opt => (
                          <button
                            key={opt}
                            onClick={() => setFormData({...formData, hasWebsite: opt})}
                            className={`px-6 py-3 rounded-xl border font-poppins transition-all ${formData.hasWebsite === opt ? 'bg-brand-cyan/20 border-brand-cyan text-brand-cyan' : 'border-gray-700 text-gray-400 hover:border-gray-500'}`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-poppins text-gray-400 mb-3">¿Usas redes sociales activamente?</label>
                      <div className="flex space-x-4">
                        {['Sí', 'No', 'A veces'].map(opt => (
                          <button
                            key={opt}
                            onClick={() => setFormData({...formData, usesSocialMedia: opt})}
                            className={`px-6 py-3 rounded-xl border font-poppins transition-all ${formData.usesSocialMedia === opt ? 'bg-brand-cyan/20 border-brand-cyan text-brand-cyan' : 'border-gray-700 text-gray-400 hover:border-gray-500'}`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-poppins text-gray-400 mb-3">Presupuesto mensual en marketing (USD)</label>
                      <select 
                        className="w-full bg-black/50 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-colors font-poppins appearance-none"
                        value={formData.budget}
                        onChange={e => setFormData({...formData, budget: e.target.value})}
                      >
                        <option value="" disabled>Selecciona un rango</option>
                        <option value="< $500">Menos de $500</option>
                        <option value="$500 - $2,000">$500 - $2,000</option>
                        <option value="$2,000 - $5,000">$2,000 - $5,000</option>
                        <option value="$5,000+">Más de $5,000</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex justify-between mt-8">
                    <button 
                      onClick={() => setStep(1)}
                      className="px-6 py-3 text-gray-400 hover:text-white font-poppins transition-colors"
                    >
                      Atrás
                    </button>
                    <button 
                      onClick={() => setStep(3)}
                      disabled={!formData.hasWebsite || !formData.usesSocialMedia || !formData.budget}
                      className="flex items-center px-6 py-3 bg-brand-cyan text-black rounded-full font-orbitron font-bold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white transition-colors"
                    >
                      Siguiente <ChevronRight size={20} className="ml-2" />
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
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-orbitron text-white mb-6">¿Cuál es tu mayor desafío?</h3>
                  <p className="text-sm text-gray-400 font-poppins mb-4">Selecciona todos los que apliquen:</p>
                  
                  <div className="flex flex-wrap gap-3">
                    {challenges.map(challenge => (
                      <button
                        key={challenge}
                        onClick={() => handleChallengeToggle(challenge)}
                        className={`px-4 py-2 rounded-full border text-sm font-poppins transition-all ${formData.challenge.includes(challenge) ? 'bg-brand-cyan/20 border-brand-cyan text-brand-cyan box-glow' : 'border-gray-700 text-gray-400 hover:border-gray-500'}`}
                      >
                        {challenge}
                      </button>
                    ))}
                  </div>

                  <div className="flex justify-between mt-12">
                    <button 
                      onClick={() => setStep(2)}
                      className="px-6 py-3 text-gray-400 hover:text-white font-poppins transition-colors"
                    >
                      Atrás
                    </button>
                    <button 
                      onClick={handleSubmit}
                      disabled={formData.challenge.length === 0 || loading}
                      className="flex items-center px-8 py-3 bg-brand-cyan text-black rounded-full font-orbitron font-bold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white transition-colors box-glow"
                    >
                      {loading ? (
                        <><Loader2 className="animate-spin mr-2" size={20} /> Analizando con IA...</>
                      ) : (
                        'Generar Score'
                      )}
                    </button>
                  </div>
                </motion.div>
              )}

              {step === 4 && result && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center"
                >
                  <h3 className="text-3xl font-orbitron text-white mb-8">Tu Score de Visibilidad</h3>
                  
                  {/* Circular Progress */}
                  <div className="relative w-48 h-48 mx-auto mb-10">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="45" fill="none" stroke="#1f2937" strokeWidth="8" />
                      <motion.circle 
                        cx="50" cy="50" r="45" fill="none" stroke="#0CE6F3" strokeWidth="8"
                        strokeDasharray="283"
                        initial={{ strokeDashoffset: 283 }}
                        animate={{ strokeDashoffset: 283 - (283 * result.score) / 100 }}
                        transition={{ duration: 2, ease: "easeOut" }}
                        className="drop-shadow-[0_0_10px_rgba(12,230,243,0.8)]"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center flex-col">
                      <span className="text-5xl font-black font-orbitron text-white">{result.score}</span>
                      <span className="text-xs text-brand-cyan font-orbitron tracking-widest mt-1">/ 100</span>
                    </div>
                  </div>

                  <div className="text-left bg-black/40 rounded-2xl p-6 border border-brand-cyan/20">
                    <h4 className="text-xl font-orbitron text-brand-cyan mb-4 flex items-center">
                      <Zap size={20} className="mr-2" /> Recomendaciones de Amara IA
                    </h4>
                    <ul className="space-y-4">
                      {result.recommendations.map((rec, idx) => (
                        <motion.li 
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 1 + (idx * 0.3) }}
                          className="flex items-start text-gray-300 font-poppins text-sm"
                        >
                          <div className="w-6 h-6 rounded-full bg-brand-cyan/20 flex items-center justify-center text-brand-cyan mr-3 flex-shrink-0 mt-0.5">
                            {idx + 1}
                          </div>
                          <p>{rec}</p>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <button 
                    onClick={() => { setStep(1); setFormData({...formData, challenge: []}); setResult(null); }}
                    className="mt-8 px-6 py-2 text-brand-cyan border border-brand-cyan rounded-full font-orbitron text-sm hover:bg-brand-cyan hover:text-black transition-colors"
                  >
                    Realizar nuevo diagnóstico
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
