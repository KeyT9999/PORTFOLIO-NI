const footerItems = [
  { label: 'PHONE: 0867 792 106' },
  { label: 'EMAIL: ninihereee2106@gmail.com' },
  { label: 'INSTAGRAM', href: 'https://www.instagram.com/nini.hereee/' },
  { label: 'FACEBOOK', href: 'https://www.facebook.com/inhthithaolinh' },
]

export default function Footer() {
  return (
    <footer
      className="w-full flex flex-col items-center gap-8 py-16 border-t"
      style={{
        backgroundColor: '#f9f9f9',
        borderColor: '#f3f3f3',
      }}
    >
      <div className="flex flex-wrap justify-center gap-10 md:gap-12">
        {footerItems.map((item) => (
          item.href ? (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs tracking-widest transition-all duration-200"
              style={{ fontFamily: 'Inter, sans-serif', color: '#aaaaaa' }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = '#000')}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = '#aaaaaa')}
            >
              {item.label}
            </a>
          ) : (
            <span
              key={item.label}
              className="text-xs tracking-widest uppercase"
              style={{ fontFamily: 'Inter, sans-serif', color: '#aaaaaa' }}
            >
              {item.label}
            </span>
          )
        ))}
      </div>
      <div
        className="mt-8 uppercase tracking-[0.3em]"
        style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '10px',
          color: 'rgba(71,71,71,0.4)',
        }}
      >
        © 2026 NI. FASHION STYLIST &nbsp;•&nbsp; FASHION DESIGN
      </div>
    </footer>
  )
}
