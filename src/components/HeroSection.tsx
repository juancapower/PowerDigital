import { motion } from 'motion/react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20 pb-24 md:pb-32">
      {/* Background Video and grid effect */}
      <div className="absolute inset-0 z-0 bg-black">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-screen"
        >
          <source src="https://res.cloudinary.com/ddn6qh7ve/video/upload/v1774969443/0318-01_gtjqrf.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0CE6F311_1px,transparent_1px),linear-gradient(to_bottom,#0CE6F311_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex-grow flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-orbitron mb-6 leading-tight glitch-hover cursor-default">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-cyan via-white to-brand-cyan bg-[length:200%_auto] animate-[gradient_3s_linear_infinite]">
              Potenciamos tu negocio
            </span>
            <br />
            <span className="text-white">o marca personal</span>
          </h1>
          
          <p className="mt-6 text-xl md:text-2xl text-gray-400 font-poppins max-w-3xl mx-auto font-light">
            Sin sesiones costosas y en tiempo récord gracias a la IA.
          </p>

          <div className="mt-12 flex justify-center items-center">
            <a href="#diagnostico" className="px-8 py-4 rounded-full bg-black border border-brand-cyan/50 text-brand-cyan font-poppins font-semibold tracking-wide hover:bg-brand-cyan/10 hover:border-brand-cyan transition-all duration-300 shadow-[0_0_15px_rgba(12,230,243,0.15)] hover:shadow-[0_0_25px_rgba(12,230,243,0.3),inset_0_0_15px_rgba(12,230,243,0.2)] text-center">
              Obtén tu Score de visibilidad en redes
            </a>
          </div>
        </motion.div>
      </div>

      {/* Quantitative Social Proof Metrics */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        className="relative z-10 w-full max-w-5xl mx-auto px-4 mt-16 md:mt-0"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 border-t border-white/10 pt-8">
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-orbitron font-bold text-white mb-2">+20</p>
            <p className="text-sm text-gray-400 font-poppins uppercase tracking-widest">Negocios y marcas escaladas</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-orbitron font-bold text-white mb-2">+3</p>
            <p className="text-sm text-gray-400 font-poppins uppercase tracking-widest">Ciudades (Trujillo, Lima, Ayacucho)</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-orbitron font-bold text-white mb-2">100%</p>
            <p className="text-sm text-gray-400 font-poppins uppercase tracking-widest">Sistemas automatizados</p>
          </div>
        </div>
      </motion.div>

      {/* Decorative elements */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-[30px] h-[50px] rounded-full border border-white/20 flex justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
