import { motion } from 'motion/react';
import { Cpu } from 'lucide-react';

export default function AmaraFeature() {
  return (
    <section id="modelos" className="py-24 relative overflow-hidden bg-gradient-to-b from-black to-[#000510]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center space-x-2 bg-brand-cyan/10 border border-brand-cyan/30 rounded-full px-4 py-2 mb-8">
              <div className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse"></div>
              <span className="text-brand-cyan font-orbitron text-xs font-bold tracking-widest uppercase">
                IA Generativa · Producción Propia
              </span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black font-orbitron mb-6 leading-tight">
              Conoce a <span className="text-brand-cyan text-glow">Amara</span>
            </h2>
            
            <p className="text-xl text-gray-300 font-poppins mb-6 leading-relaxed">
              Nuestra Modelo Digital Exclusiva.
            </p>
            
            <p className="text-lg text-gray-400 font-poppins mb-8 leading-relaxed font-light">
              Creamos modelos digitales hiperrealistas generadas con IA. Hacemos que interactúen directamente con tu producto físico, eliminando los altos costos de producciones tradicionales, locaciones y viáticos.
            </p>
            
            <ul className="space-y-4 mb-10">
              {['Modelos o mascotas digitales a medida', 'Tu producto real en manos de la IA', 'Campañas visuales sin límites creativos'].map((item, i) => (
                <li key={i} className="flex items-center text-gray-300 font-poppins">
                  <Cpu className="text-brand-cyan mr-3" size={20} />
                  {item}
                </li>
              ))}
            </ul>
            
            <a href="https://wa.me/51920690260" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-3 rounded-full bg-transparent border-2 border-brand-cyan text-brand-cyan font-orbitron font-bold tracking-wider hover:bg-brand-cyan hover:text-black transition-all duration-300 box-glow">
              Cotizar Modelo Digital
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl bg-gradient-to-tr from-brand-cyan/5 to-brand-cyan/20 border border-brand-cyan/40 p-2 box-glow relative overflow-hidden group">
              {/* Placeholder for Amara Image/Video */}
              <div className="w-full h-full rounded-xl bg-black flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/ddn6qh7ve/image/upload/v1774478528/hf_20260313_184816_fc5087de-2ff6-498d-a0a0-3c6f3bcef096_tfwmtg.jpg')] bg-cover bg-center opacity-100 group-hover:scale-105 transition-transform duration-700"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>
            </div>
            
            {/* Decorative floating elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-brand-cyan/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-brand-cyan/10 rounded-full blur-2xl"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
