import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { label: 'PRODUCTION STYLIST', href: '/category/production-project' },
  { label: 'FASHION STYLIST', href: '/category/fashion-stylist' },
  { label: 'PERSONAL STYLIST', href: '/category/personal-stylist' },
  { label: 'STYLIST ASSISTANT', href: '/category/stylist-assistant' },
  { label: 'FASHION DESIGN', href: '/category/fashion-design' },
  { label: 'CONTACT', href: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 flex justify-between items-center px-8 md:px-12 py-5 md:py-6 transition-all duration-500 ${
        scrolled ? 'bg-white/90 shadow-sm backdrop-blur-xl' : 'bg-white/70 backdrop-blur-xl'
      }`}
    >
      {/* Logo */}
      <Link to="/"
        className="text-xl md:text-2xl font-black tracking-[0.2em] text-black"
        style={{ fontFamily: 'Inter, sans-serif' }}
      >
        NI
      </Link>

      {/* Desktop Nav */}
      <div className="hidden lg:flex items-center gap-8 lg:gap-10">
        {navLinks.map((link) => {
          const isActive = location.pathname === link.href || (location.pathname === '/' && link.href === '/')

          return (
            <Link
              key={link.label}
              to={link.href}
              className={`font-medium transition-all duration-300 text-[10px] uppercase tracking-widest ease-out-expo hover:tracking-[0.25em] ${
                isActive
                  ? 'text-black font-bold border-b border-black pb-1'
                  : 'text-gray-500 hover:text-black'
              }`}
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              {link.label}
            </Link>
          )
        })}
      </div>

      {/* Mobile Menu Icon */}
      <div className="flex items-center gap-6">
        <button
          className="text-black lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined">{menuOpen ? 'close' : 'menu'}</span>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl flex flex-col items-center gap-6 py-10 shadow-lg lg:hidden">
          {navLinks.map((link) => {
             const isActive = location.pathname === link.href

             return (
               <Link
                 key={link.label}
                 to={link.href}
                 className={`text-[10px] tracking-[0.25em] transition-all duration-300 hover:tracking-[0.3em] uppercase ${
                   isActive ? 'text-black font-bold border-b border-black pb-1' : 'text-gray-500 hover:text-black'
                 }`}
                 onClick={() => setMenuOpen(false)}
               >
                 {link.label}
               </Link>
             )
          })}
        </div>
      )}
    </nav>
  )
}
