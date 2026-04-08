export default function ClientCTA() {
  return (
    <section
      className="py-32 md:py-40 flex flex-col items-center text-center px-6"
      style={{ backgroundColor: '#000', color: '#e2e2e2' }}
    >
      <h2
        className="mb-12 max-w-4xl px-4 leading-tight italic"
        style={{
          fontFamily: 'Noto Serif, serif',
          fontSize: 'clamp(2rem, 5vw, 4.5rem)',
        }}
      >
        Defining the visual identity of tomorrow's tastemakers.
      </h2>
      <a
        href="#"
        className="group inline-flex items-center gap-4 uppercase transition-all duration-300 hover:tracking-[0.5em]"
        style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '12px',
          letterSpacing: '0.4em',
          color: '#e2e2e2',
        }}
      >
        Start a Collaboration
        <span className="material-symbols-outlined text-sm">arrow_forward</span>
      </a>
    </section>
  )
}
