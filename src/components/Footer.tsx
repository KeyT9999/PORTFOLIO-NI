const footerLinks = [
  { label: 'INSTAGRAM', href: '#' },
  { label: 'LINKEDIN', href: '#' },
  { label: 'BEHANCE', href: '#' },
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
        {footerLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-xs tracking-widest transition-all duration-200"
            style={{ fontFamily: 'Inter, sans-serif', color: '#aaaaaa' }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = '#000')}
            onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = '#aaaaaa')}
          >
            {link.label}
          </a>
        ))}
        <a
          href="#"
          className="text-xs tracking-widest underline underline-offset-8"
          style={{ fontFamily: 'Inter, sans-serif', color: '#000' }}
        >
          CONTACT
        </a>
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
