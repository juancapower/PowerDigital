export default function BrandsSection() {
  const brands = [
    { name: 'MK Store', url: 'https://res.cloudinary.com/ddn6qh7ve/image/upload/q_auto/f_auto/v1775671332/Recurso_4_og65rp.png' },
    { name: 'IE 251 Pesatalozzi', url: 'https://res.cloudinary.com/ddn6qh7ve/image/upload/q_auto/f_auto/v1775673023/LogoPestalozziIE251_a5haq9.png' },
    { name: 'Ely Cabrera Abogada', url: 'https://res.cloudinary.com/ddn6qh7ve/image/upload/q_auto/f_auto/v1775672928/LogElyCabrera_ydzusc.png' },
    { name: 'Elizabeth Laurente Coach', url: 'https://res.cloudinary.com/ddn6qh7ve/image/upload/q_auto/f_auto/v1775672941/Recurso_2_dy6yzg.png' },
    { name: 'Abira Ayacucho', url: 'https://res.cloudinary.com/ddn6qh7ve/image/upload/q_auto/f_auto/v1775673051/Recurso_1_skrtlj.png' },
    { name: 'Trujillo Market', url: 'https://res.cloudinary.com/ddn6qh7ve/image/upload/q_auto/f_auto/v1775673246/Logo_TM_white_qltavj.png' },
    { name: 'SISO', url: 'https://res.cloudinary.com/ddn6qh7ve/image/upload/q_auto/f_auto/v1775670163/Mesa_de_trabajo_7_vhzllm.png' },
    { name: 'Odaguiri Global Express', url: 'https://res.cloudinary.com/ddn6qh7ve/image/upload/q_auto/f_auto/v1775673080/Odaguiri_GE_Logo_jvuv83.png' },
    { name: 'Masamor', url: 'https://res.cloudinary.com/ddn6qh7ve/image/upload/q_auto/f_auto/v1775673064/Logo_masamor_pfpqwc.png' },
    { name: 'Fruit Daily', url: 'https://res.cloudinary.com/ddn6qh7ve/image/upload/q_auto/f_auto/v1775673203/LogoFruitDaily_white_x9zizr.png' },
    { name: 'Trascendiendo el duelo', url: 'https://res.cloudinary.com/ddn6qh7ve/image/upload/q_auto/f_auto/v1775669958/Recurso_62_wmsbfr.png' },
    { name: 'JuanCa Power', url: 'https://res.cloudinary.com/ddn6qh7ve/image/upload/q_auto/f_auto/v1775515143/logoJuanCaPower_z5roiw.png' }
  ];

  return (
    <section className="py-16 bg-[var(--pd-surface)] border-y border-[var(--pd-border-n)] overflow-hidden">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
          display: flex;
          width: max-content;
        }
        .group:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}</style>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <h2 className="text-center font-mono text-xs text-[var(--pd-text-3)] uppercase tracking-[0.16em]">
          Marcas que confían en nosotros
        </h2>
      </div>

      <div className="group relative w-full overflow-hidden flex">
        {/* Gradientes laterales para suavizar la entrada y salida */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[var(--pd-surface)] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[var(--pd-surface)] to-transparent z-10 pointer-events-none"></div>

        <div className="animate-marquee gap-12 md:gap-16 px-6 items-center">
          {/* Duplicamos el array para el efecto infinito */}
          {[...brands, ...brands].map((brand, i) => (
            <img 
              key={i} 
              src={brand.url} 
              alt={brand.name} 
              className="h-10 md:h-14 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-[180ms] cursor-pointer" 
              referrerPolicy="no-referrer"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
