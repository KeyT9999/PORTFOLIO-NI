// Hero image from the user's public folder
const heroImage = '/BIA.png'

export default function Hero() {
  return (
    <header className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-[#f9f9f9]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0" style={{ transform: 'scale(1.05)' }}>
        <img
          src={heroImage}
          alt="Fashion portrait – striking high-contrast monochrome studio portrait"
          className="w-full h-full object-cover"
          style={{ opacity: 0.9 }}
        />
      </div>

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background: 'linear-gradient(to bottom, transparent 50%, rgba(249,249,249,0.8) 100%)',
        }}
      />

      {/* Hero Text */}
      <div className="relative z-20 text-center px-4 flex flex-col items-center justify-center w-full max-w-4xl mx-auto">
        <p
          className="uppercase tracking-[0.8em] text-[10px] md:text-xs mb-2 md:mb-4 ml-[0.8em]"
          style={{ fontFamily: 'Inter, sans-serif', color: '#111', textShadow: '0px 0px 10px rgba(255,255,255,0.5)' }}
        >
          PORTFOLIO
        </p>
        
        <h1
          className="leading-[0.85] font-black tracking-tight drop-shadow-md"
          style={{
            fontFamily: 'Noto Serif, serif',
            fontSize: 'clamp(8rem, 25vw, 20rem)',
            color: '#000',
          }}
        >
          NI
        </h1>
        
        <div className="w-full max-w-md mt-6 md:mt-8 mb-5 md:mb-6 border-t" style={{ borderColor: 'rgba(0,0,0,0.3)' }}></div>
        
        <p
          className="uppercase tracking-[0.3em] md:tracking-[0.5em] text-[9px] md:text-xs italic flex items-center justify-center"
          style={{ fontFamily: 'Noto Serif, serif', color: '#111', textShadow: '0px 0px 10px rgba(255,255,255,0.5)' }}
        >
          FASHION STYLIST <span className="mx-3 md:mx-6 text-[10px] not-italic text-gray-500">•</span> FASHION DESIGN
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20">
        <span className="material-symbols-outlined text-black animate-bounce">arrow_downward</span>
      </div>
    </header>
  )
}
