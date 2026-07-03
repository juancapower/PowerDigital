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
    { name: 'JuanCa Power', url: 'https://res.cloudinary.com/ddn6qh7ve/image/upload/q_auto/f_auto/v1775515143/logoJuanCaPower_z5roiw.png' },
    { name: 'Tunay Wasi', url: 'https://res.cloudinary.com/ddn6qh7ve/image/upload/f_auto,q_auto/v1783048452/ClientesPowerDigital_Empresa_TunayWasi_elrm3i.png' },
    { name: 'Desafío Ecoaventura', url: 'https://res.cloudinary.com/ddn6qh7ve/image/upload/f_auto,q_auto/v1783048452/ClientesPowerDigital_Empresa_DesafioEcoaventura_d8re8t.png' },
    { name: 'SwellPro Perú', url: 'https://res.cloudinary.com/ddn6qh7ve/image/upload/f_auto,q_auto/v1783048451/ClientesPowerDigital_Empresa_SwellProPer%C3%BA_yivbes.png' },
    { name: 'Levitas', url: 'https://res.cloudinary.com/ddn6qh7ve/image/upload/f_auto,q_auto/v1783048451/ClientesPowerDigital_Empresa_Levitas_kkhggj.png' },
    { name: 'Consciente Creativo', url: 'https://res.cloudinary.com/ddn6qh7ve/image/upload/f_auto,q_auto/v1783048451/ClientesPowerDigital_Empresa_ConscienteCreativo_mdbgjb.png' },
    { name: 'Carmen Giraldo', url: 'https://res.cloudinary.com/ddn6qh7ve/image/upload/f_auto,q_auto/v1783048450/ClientesPowerDigital_MarcaPersonal_CarmenGiraldo_lmsnky.png' },
    { name: 'Warmi Kapital', url: 'https://res.cloudinary.com/ddn6qh7ve/image/upload/f_auto,q_auto/v1783048450/ClientesPowerDigital_Empresa_WarmiKapital_zkguh6.png' },
    { name: 'Eversafe Financial', url: 'https://res.cloudinary.com/ddn6qh7ve/image/upload/f_auto,q_auto/v1783048450/ClientesPowerDigital_Empresa_EversafeFinancial__d7um7a.png' },
    { name: 'Grace Ramírez', url: 'https://res.cloudinary.com/ddn6qh7ve/image/upload/f_auto,q_auto/v1783048450/ClientesPowerDigital_MarcaPersonal_GraceRamirez_i5fjzi.png' },
    { name: 'Heydy Coach', url: 'https://res.cloudinary.com/ddn6qh7ve/image/upload/f_auto,q_auto/v1783048450/ClientesPowerDigital_MarcaPersonal_HeydyCoach_gtfpqp.png' },
    { name: 'Hugo Dam', url: 'https://res.cloudinary.com/ddn6qh7ve/image/upload/f_auto,q_auto/v1783048450/ClientesPowerDigital_MarcaPersonal_HugoDam_xknkti.png' },
    { name: 'CRTech', url: 'https://res.cloudinary.com/ddn6qh7ve/image/upload/f_auto,q_auto/v1783048450/ClientesPowerDigital_Empresa_CRTech_tcotdg.png' }
  ];

  return (
    <section className="py-20 bg-[var(--pd-surface)] border-y border-[var(--pd-border-n)] overflow-hidden">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 75s linear infinite;
          display: flex;
          width: max-content;
        }
        .group:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}</style>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <h2 className="font-display font-bold text-xl md:text-2xl text-[var(--pd-text)] mb-3 tracking-tight">
          Negocios y marcas que ya confían en el ecosistema Power
        </h2>
        <p className="font-serif italic text-sm md:text-base text-[var(--pd-gold-light)] opacity-95">
          “Estrategia, sistemas e inteligencia artificial aplicada a negocios reales.”
        </p>
      </div>

      <div className="group relative w-full overflow-hidden flex">
        {/* Lateral gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-[var(--pd-surface)] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-[var(--pd-surface)] to-transparent z-10 pointer-events-none"></div>

        <div className="animate-marquee gap-14 md:gap-20 px-6 items-center">
          {/* Double the array for smooth endless looping */}
          {[...brands, ...brands].map((brand, i) => (
            <img 
              key={i} 
              src={brand.url} 
              alt={brand.name} 
              className="h-9 md:h-12 w-auto object-contain grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer" 
              referrerPolicy="no-referrer"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
