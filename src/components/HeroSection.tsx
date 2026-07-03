import { motion } from 'motion/react';
import { Sparkles, ArrowRight, Play, CheckCircle, Flame, Video, Globe, Award, TrendingUp } from 'lucide-react';

const heroBg = "https://res.cloudinary.com/ddn6qh7ve/image/upload/f_auto,q_auto/v1783047099/power_digital_hero_bg_1783047099076.jpg";

export default function HeroSection() {
  const badges = [
    "Videos IA",
    "Avatares digitales",
    "Landing pages",
    "Meta Ads básico",
    "Diseño premium"
  ];

  const metrics = [
    { value: "+20", label: "marcas atendidas" },
    { value: "+3", label: "ciudades impactadas" },
    { value: "100%", label: "enfoque visual y comercial" }
  ];

  return (
    <section className="relative min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden bg-[var(--pd-bg)] pt-[110px] pb-20 md:pb-28 z-10 w-full">
      
      {/* Background Image with Cinematic Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <img 
          src={heroBg} 
          alt="Power Digital Hero Cinematic Studio Background" 
          className="w-full h-full object-cover opacity-25 object-center scale-105 filter brightness-[0.7] contrast-[1.1]"
        />
        {/* Gradients to blend background cleanly into the deep dark theme */}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--pd-bg)] via-[var(--pd-bg)]/80 to-[var(--pd-bg)]/90"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(67,97,238,0.1)_0%,transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(212,175,55,0.03)_0%,transparent_75%)]"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Top Badges */}
            <div className="flex flex-wrap gap-2 mb-6">
              {badges.map((badge, index) => (
                <span 
                  key={index}
                  className={`inline-flex items-center gap-1.5 border rounded-full px-3 py-1 font-mono text-[9px] tracking-wider uppercase ${
                    index === 0 
                      ? 'bg-[rgba(212,175,55,0.06)] border-[rgba(212,175,55,0.2)] text-[var(--pd-gold-light)]' 
                      : 'bg-[rgba(67,97,238,0.06)] border-[rgba(67,97,238,0.25)] text-[var(--pd-primary-light)]'
                  }`}
                >
                  <span className={`w-1 h-1 rounded-full ${index === 0 ? 'bg-[var(--pd-gold)] animate-pulse' : 'bg-[var(--pd-primary)]'}`}></span>
                  {badge}
                </span>
              ))}
            </div>

            {/* Headline */}
            <h1 className="font-display font-bold text-[clamp(2.4rem,5.2vw,4.5rem)] tracking-[-0.03em] leading-[1.05] text-[var(--pd-text)] mb-6">
              Convierte tu presencia digital en una<br/>
              <span className="bg-[linear-gradient(135deg,#4361ee_0%,#7b9eff_50%,#e7c97a_100%)] bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                máquina visual de ventas.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="font-body text-base md:text-lg text-[var(--pd-text-2)] leading-relaxed max-w-[620px] mb-8">
              Creamos videos con IA, avatares digitales, diseños, landings y campañas básicas para que tu negocio se vea profesional, venda mejor y destaque en redes.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-10 z-20">
              <a 
                href="#agenda" 
                className="relative inline-flex items-center justify-center gap-2.5 bg-[var(--pd-primary)] text-white border-none cursor-pointer font-body font-semibold text-base px-8 py-4 rounded-xl shadow-[0_8px_24px_rgba(67,97,238,0.35)] transition-all duration-300 group hover:bg-[var(--pd-primary-hover)] hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(67,97,238,0.5)] text-center"
              >
                <div className="absolute top-0 left-[-100%] w-full h-full bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.15),transparent)] transition-all duration-500 ease-out group-hover:left-[100%] z-0"></div>
                <span>Agenda una llamada</span>
                <Sparkles size={16} className="text-[var(--pd-gold-light)] animate-pulse" />
              </a>
              
              <a 
                href="https://res.cloudinary.com/ddn6qh7ve/image/upload/v1777612918/Brochure_PowerDigital_Abr26_a4tkhk.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-transparent text-[var(--pd-text)] border border-[rgba(255,255,255,0.15)] hover:border-[var(--pd-gold)] cursor-pointer font-body font-semibold text-base px-8 py-4 rounded-xl transition-all duration-300 hover:text-[var(--pd-gold-light)] hover:-translate-y-0.5 text-center"
              >
                <span>Ver catálogo de servicios</span>
                <ArrowRight size={16} />
              </a>
            </div>

            {/* Metrics Row */}
            <div className="grid grid-cols-3 gap-6 md:gap-8 border-t border-white/[0.05] pt-8 w-full max-w-[580px]">
              {metrics.map((metric, i) => (
                <div key={i} className="flex flex-col items-start text-left">
                  <span className="font-display font-black text-2xl md:text-3xl text-white bg-gradient-to-r from-white to-[var(--pd-text-2)] bg-clip-text">
                    {metric.value}
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-wider text-[var(--pd-text-3)] leading-tight mt-1">
                    {metric.label}
                  </span>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Premium AI Visual Assets Dashboard Mockup */}
          <div className="lg:col-span-5 relative w-full flex justify-center items-center">
            
            {/* Visual Container representing High Conversion Assets */}
            <div className="relative w-full max-w-[430px] aspect-[1/1] bg-[var(--pd-surface)]/35 border border-[rgba(67,97,238,0.15)] rounded-3xl p-6 shadow-[0_20px_50px_rgba(11,13,23,0.85)] backdrop-blur-md overflow-hidden flex flex-col justify-between group hover:border-[var(--pd-gold)]/40 transition-colors duration-500">
              
              {/* Internal glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(67,97,238,0.06)_0%,transparent_60%)]"></div>
              
              {/* Header card info */}
              <div className="relative z-10 flex justify-between items-center border-b border-[rgba(255,255,255,0.05)] pb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-white/[0.02] border border-white/[0.08] flex items-center justify-center text-[var(--pd-gold-light)]">
                    <Flame size={18} className="animate-pulse" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xs text-white leading-none mb-1">Visual Assets Hub</h3>
                    <span className="font-mono text-[8px] text-[var(--pd-text-3)] uppercase tracking-wider">Activos de Alta Conversión</span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 bg-[rgba(16,185,129,0.08)] border border-emerald-500/20 px-2 py-0.5 rounded-full">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                  <span className="font-mono text-[8px] text-emerald-400 uppercase font-semibold">LIVE PREVIEW</span>
                </div>
              </div>

              {/* Central Mockups Group */}
              <div className="relative z-10 my-4 flex-1 flex flex-col justify-center gap-3">
                
                {/* Simulated Video IA Widget */}
                <div className="flex items-center justify-between bg-[var(--pd-bg)]/80 border border-white/[0.04] hover:border-[var(--pd-gold)]/30 rounded-xl p-3 transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-8 rounded bg-gradient-to-tr from-[var(--pd-primary-dark)] to-[var(--pd-primary)] flex items-center justify-center relative overflow-hidden group/vid">
                      <Play size={10} className="text-white fill-current relative z-10" />
                      <div className="absolute inset-0 bg-black/20"></div>
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-white block">Video IA de Alto Impacto</span>
                      <span className="font-mono text-[8px] text-[var(--pd-text-3)] block uppercase tracking-wider">TikTok / Reels · 30s</span>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1 bg-[rgba(212,175,55,0.06)] border border-[rgba(212,175,55,0.2)] text-[10px] text-[var(--pd-gold-light)] px-2.5 py-0.5 rounded-md font-mono font-medium">
                    <Video size={10} /> 4K Rendering
                  </span>
                </div>

                {/* Simulated Landing Page Mockup */}
                <div className="flex items-center justify-between bg-[var(--pd-bg)]/80 border border-white/[0.04] hover:border-[var(--pd-primary)]/30 rounded-xl p-3 transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-8 rounded bg-gradient-to-br from-[#10121f] to-[#1e213b] border border-white/[0.05] flex flex-col justify-between p-1">
                      <div className="flex gap-0.5">
                        <span className="w-1 h-1 rounded-full bg-red-400"></span>
                        <span className="w-1 h-1 rounded-full bg-yellow-400"></span>
                        <span className="w-1 h-1 rounded-full bg-green-400"></span>
                      </div>
                      <div className="w-full h-1.5 bg-white/10 rounded-sm"></div>
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-white block">Landing Page de Ventas</span>
                      <span className="font-mono text-[8px] text-[var(--pd-text-3)] block uppercase tracking-wider">Dominio + Hosting Incluido</span>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1 bg-[rgba(67,97,238,0.06)] border border-[rgba(67,97,238,0.2)] text-[10px] text-[var(--pd-primary-light)] px-2.5 py-0.5 rounded-md font-mono font-medium">
                    <Globe size={10} /> Ultra-Fast
                  </span>
                </div>

                {/* Simulated Meta Ads Widget */}
                <div className="flex items-center justify-between bg-[var(--pd-bg)]/80 border border-white/[0.04] hover:border-white/20 rounded-xl p-3 transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-8 rounded bg-gradient-to-r from-neutral-800 to-neutral-700 flex items-center justify-center">
                      <Award size={14} className="text-[var(--pd-gold-light)]" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-white block">Avatar IA Premium</span>
                      <span className="font-mono text-[8px] text-[var(--pd-text-3)] block uppercase tracking-wider">Identidad Visual de Marca</span>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1 bg-white/[0.03] border border-white/[0.08] text-[10px] text-white px-2.5 py-0.5 rounded-md font-mono font-medium">
                    1 Rostro, 5 Poses
                  </span>
                </div>

              </div>

              {/* Bottom Conversion Tag */}
              <div className="relative z-10 bg-[rgba(212,175,55,0.04)] border border-[rgba(212,175,55,0.15)] rounded-2xl p-3.5 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <TrendingUp size={14} className="text-[var(--pd-gold)]" />
                  <span className="text-[10px] md:text-xs font-body text-[var(--pd-text-2)] font-medium">Conversión promedio de visitas</span>
                </div>
                <span className="font-display font-bold text-sm md:text-base text-[var(--pd-gold-light)]">+18.4%</span>
              </div>

              {/* Futuristic background lines */}
              <svg className="absolute inset-0 w-full h-full text-[var(--pd-primary)] opacity-[0.05] z-0" xmlns="http://www.w3.org/2000/svg">
                <line x1="10%" y1="0" x2="10%" y2="100%" stroke="currentColor" strokeWidth="1" strokeDasharray="4" />
                <line x1="30%" y1="0" x2="30%" y2="100%" stroke="currentColor" strokeWidth="1" strokeDasharray="4" />
                <line x1="70%" y1="0" x2="70%" y2="100%" stroke="currentColor" strokeWidth="1" strokeDasharray="4" />
                <line x1="90%" y1="0" x2="90%" y2="100%" stroke="currentColor" strokeWidth="1" strokeDasharray="4" />
              </svg>

            </div>

            {/* Glowing background orbs */}
            <div className="absolute -z-10 w-[240px] h-[240px] bg-[var(--pd-primary)] opacity-[0.15] blur-[80px] rounded-full"></div>
            <div className="absolute -bottom-4 -right-4 -z-10 w-[160px] h-[160px] bg-[var(--pd-gold)] opacity-[0.08] blur-[60px] rounded-full"></div>

          </div>

        </div>
      </div>
    </section>
  );
}
