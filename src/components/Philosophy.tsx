export default function Philosophy() {
  return (
    <section
      className="py-24 md:py-32 px-8 md:px-24 grid md:grid-cols-2 gap-16 md:gap-24 items-center"
      style={{ backgroundColor: '#f3f3f3' }}
    >
      {/* Left: Quote */}
      <div>
        <span
          className="block mb-6 uppercase tracking-[0.3em] text-xs"
          style={{ fontFamily: 'Inter, sans-serif', color: '#777777' }}
        >
          Philosophy
        </span>
        <h2
          className="leading-tight"
          style={{
            fontFamily: 'Noto Serif, serif',
            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            color: '#000',
          }}
        >
          The garment is but a canvas for the soul's expression.
        </h2>
      </div>

      {/* Right: Text + CTA */}
      <div className="space-y-6">
        <p
          className="text-lg leading-relaxed max-w-lg"
          style={{ fontFamily: 'Inter, sans-serif', color: '#474747' }}
        >
          For over a decade, we have curated visual narratives that transcend trends. Our approach is surgical; every silhouette, texture, and hue is selected to evoke a visceral emotional response.
        </p>
        <div className="pt-4">
          <a
            href="#"
            className="inline-block py-4 px-10 text-xs tracking-[0.2em] transition-all duration-300 hover:tracking-[0.25em]"
            style={{
              fontFamily: 'Inter, sans-serif',
              backgroundColor: '#000',
              color: '#e2e2e2',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#3b3b3b'
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#000'
            }}
          >
            VIEW SERVICES
          </a>
        </div>
      </div>
    </section>
  )
}
