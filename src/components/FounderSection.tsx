import { motion } from 'motion/react';

export default function FounderSection() {
  return (
    <section className="py-24 md:py-32 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          
          {/* Image Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full md:w-1/2 relative"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] md:aspect-square border border-white/10 bg-white/5">
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
              <img 
                src="https://res.cloudinary.com/ddn6qh7ve/image/upload/q_auto/f_auto/v1775514393/JuanCaPower_fondonegro_fo2v6n.jpg" 
                alt="JuanCa Power" 
                className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-cyan/20 blur-3xl rounded-full pointer-events-none"></div>
          </motion.div>

          {/* Text Column */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="w-full md:w-1/2 flex flex-col justify-center"
          >
            <h2 className="text-3xl md:text-5xl font-bold font-raleway mb-6 leading-tight">
              La IA no reemplaza el talento. <br />
              <span className="text-brand-cyan">Lo escala.</span>
            </h2>
            
            <div className="space-y-6 text-gray-400 font-poppins text-lg font-light leading-relaxed">
              <p>
                Soy Juan Cabrera. He visto a decenas de profesionales brillantes perder clientes frente a competidores mediocres, simplemente porque no sabían cómo posicionarse.
              </p>
              <p>
                El talento oculto no factura. Por eso creé Power Digital: para construir sistemas automatizados con Inteligencia Artificial que transforman tu conocimiento en autoridad indiscutible.
              </p>
              <p className="text-white font-medium border-l-2 border-brand-cyan pl-4 italic">
                "No necesitas trabajar más horas. Necesitas un sistema que trabaje por ti."
              </p>
            </div>

            <div className="mt-10">
              <p className="font-orbitron font-bold text-white tracking-wider">JUAN CABRERA</p>
              <p className="text-sm text-brand-cyan font-poppins uppercase tracking-widest mt-1">Ingeniero de Sistemas, Fundador y Estratega IA</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
