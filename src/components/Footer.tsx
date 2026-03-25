export default function Footer() {
  return (
    <footer className="bg-black border-t border-brand-cyan/30 pt-12 pb-8 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <img 
              src="https://res.cloudinary.com/ddn6qh7ve/image/upload/v1774478696/Recurso_24_n6hfz5.png" 
              alt="Power Digital Logo" 
              className="h-10 w-auto object-contain mb-2" 
              referrerPolicy="no-referrer"
            />
            <p className="text-gray-500 font-poppins text-sm mt-2">
              Marketing impulsado por algoritmos.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a href="https://instagram.com/powerdigital.ai" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-cyan transition-colors">Instagram</a>
            <a href="https://tiktok.com/@powerdigital.ai" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-cyan transition-colors">TikTok</a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 font-poppins text-sm">
            Power Digital © 2026 · Trujillo, Perú
          </p>
          <p className="text-brand-cyan/70 font-orbitron text-xs tracking-widest mt-4 md:mt-0">
            CONSTRUIDO CON IA
          </p>
        </div>
      </div>
    </footer>
  );
}
