import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useEffect } from 'react'

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div style={{ backgroundColor: '#f9f9f9', color: '#1b1b1b', fontFamily: 'Inter, sans-serif' }}>
      <Navbar />

      <main className="pt-32 pb-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">

          {/* Hero Title */}
          <div className="mb-24 flex flex-col md:flex-row justify-between items-end gap-8">
            <div className="max-w-4xl">
              <span className="text-xs tracking-[0.4em] uppercase mb-4 block" style={{ fontFamily: 'Inter, sans-serif', color: '#777777' }}>
                AVAILABLE FOR CREATIVE DIRECTION
              </span>
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-tight tracking-tighter uppercase italic" style={{ fontFamily: 'Noto Serif, serif' }}>
                LET'S CONNECT
              </h1>
            </div>
            <div className="text-right">
              <p className="text-2xl italic mb-1" style={{ fontFamily: 'Noto Serif, serif' }}>Đinh Thị Thảo Linh</p>
              <p className="text-xs tracking-widest uppercase" style={{ fontFamily: 'Inter, sans-serif', color: '#777777' }}>STYLING ARCHIVE 24</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-3xl">
            {/* Direct */}
            <div>
              <h3 className="text-[10px] tracking-[0.3em] uppercase mb-6" style={{ fontFamily: 'Inter, sans-serif', color: '#777777' }}>Direct Communication</h3>
              <div className="flex flex-col gap-3">
                <a href="tel:0867792106" className="text-3xl hover:italic transition-all duration-300" style={{ fontFamily: 'Noto Serif, serif' }}>0867 792 106</a>
                <a href="mailto:ninihereee2106@gmail.com" className="text-sm tracking-widest transition-colors hover:text-black" style={{ fontFamily: 'Inter, sans-serif', color: '#474747' }}>ninihereee2106@gmail.com</a>
              </div>
            </div>

            {/* Socials */}
            <div>
              <h3 className="text-[10px] tracking-[0.3em] uppercase mb-6" style={{ fontFamily: 'Inter, sans-serif', color: '#777777' }}>Digital Presence</h3>
              <div className="flex flex-col gap-4">
                <a href="https://www.instagram.com/nini.hereee/" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between border-b pb-4" style={{ borderColor: 'rgba(198,198,198,0.4)' }}>
                  <span className="text-xs tracking-widest transition-all duration-300 group-hover:pl-2" style={{ fontFamily: 'Inter, sans-serif' }}>INSTAGRAM</span>
                  <span className="text-xs italic transition-all duration-300 group-hover:text-black" style={{ fontFamily: 'Inter, sans-serif', color: '#777777' }}>@nini.hereee</span>
                </a>
                <a href="https://www.facebook.com/inhthithaolinh" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between border-b pb-4" style={{ borderColor: 'rgba(198,198,198,0.4)' }}>
                  <span className="text-xs tracking-widest transition-all duration-300 group-hover:pl-2" style={{ fontFamily: 'Inter, sans-serif' }}>FACEBOOK</span>
                  <span className="text-xs italic transition-all duration-300 group-hover:text-black" style={{ fontFamily: 'Inter, sans-serif', color: '#777777' }}>Đinh Thị Thảo Linh</span>
                </a>
                <a href="https://linkedin.com/in/thaolinhdinh" className="group flex items-center justify-between border-b pb-4" style={{ borderColor: 'rgba(198,198,198,0.4)' }}>
                  <span className="text-xs tracking-widest transition-all duration-300 group-hover:pl-2" style={{ fontFamily: 'Inter, sans-serif' }}>LINKEDIN</span>
                  <span className="text-xs italic transition-all duration-300 group-hover:text-black" style={{ fontFamily: 'Inter, sans-serif', color: '#777777' }}>/in/thaolinhdinh</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  )
}
