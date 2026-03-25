import { motion } from 'motion/react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Video and grid effect */}
      <div className="absolute inset-0 z-0 bg-black">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-screen"
        >
          <source src="https://res.cloudinary.com/ddn6qh7ve/video/upload/v1774480440/2026-03-18-231026258_jpdxhx.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0CE6F311_1px,transparent_1px),linear-gradient(to_bottom,#0CE6F311_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-orbitron mb-6 leading-tight glitch-hover cursor-default">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-cyan via-white to-brand-cyan bg-[length:200%_auto] animate-[gradient_3s_linear_infinite]">
              Transformamos tu Marca
            </span>
            <br />
            <span className="text-white">con Inteligencia Artificial</span>
          </h1>
          
          <p className="mt-6 text-xl md:text-2xl text-gray-400 font-poppins max-w-3xl mx-auto font-light">
            No vendemos marketing. <span className="text-brand-cyan font-medium">Vendemos resultados medibles.</span>
          </p>

          <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-6">
            <a href="#diagnostico" className="px-8 py-4 rounded-full bg-brand-cyan text-black font-orbitron text-lg font-bold tracking-wider hover:bg-white hover:text-black transition-all duration-300 box-glow hover:scale-105 text-center">
              Obtén tu Score Gratis
            </a>
            <a href="https://res.cloudinary.com/ddn6qh7ve/image/upload/v1774479688/PriceBrochure_Mar25PowerDigital_ojwihn.pdf" target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-full bg-transparent border-2 border-brand-cyan text-brand-cyan font-orbitron text-lg font-bold tracking-wider hover:bg-brand-cyan hover:text-black transition-all duration-300 box-glow hover:scale-105 text-center">
              Ver Brochure y Precios
            </a>
          </div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-[30px] h-[50px] rounded-full border-2 border-brand-cyan/50 flex justify-center p-2">
          <div className="w-1 h-3 bg-brand-cyan rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
