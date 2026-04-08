import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const projects = [
  {
    id: 1,
    title: 'VINFAST X PHƯƠNG ANH ĐÀO',
    category: 'Production Stylist',
    image: 'https://scontent.fsgn2-3.fna.fbcdn.net/v/t39.30808-6/649318764_10225485604485313_2131731991573042496_n.jpg?stp=dst-jpg_s590x590_tt6&_nc_cat=110&ccb=1-7&_nc_sid=dd6889&_nc_eui2=AeFFYdUYyDyHHntI318Vu6NjO_g-lK1tKew7-D6UrW0p7Nle89bd4iKaH3aDZVDjoCNuONQOCOK5Y290HHNJ3-zS&_nc_ohc=WSFe4hg8bGYQ7kNvwHmAx3r&_nc_oc=AdqT7C6kFuiydGCBF_3ILqrxyjiWp4ISp6GGDeRqvmBjJX21oti3eCjN7tHOv2CiRPI&_nc_zt=23&_nc_ht=scontent.fsgn2-3.fna&_nc_gid=X1M7YbSinKV2fXrsQ7BCjw&_nc_ss=7a3a8&oh=00_Af0usXf6-xwv8JswTQKIwKyJRgGnJXjhbfEPv9xzpDgSPg&oe=69DB8279',
    slug: '/project'
  },
  {
    id: 2,
    title: 'ELLE X FASHION WEEK',
    category: 'Production Stylist',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDqN89jExyODTHR5DSy1lIZXQ2auDkBqX4vPooydP-egqplO61_C9COdvnOTL8BWJdrt9N1dqhPb2xrOex01g3pwcdyW1QvlGF-sUrhKm1RyF8X_m6jnMY9kf97sY2E_YljRkSB_lE9YfV5UH0_ilETlhfKlcxDvd72TfLElp6FEpI6MOAPjaQ73hG9aPQKDPPEZcEbdFO2raF5bQhlwLy_ocNQw-Z90WFQGXvgU9nKjqhziIDz8NVO-9KlkTwyZvXpaifWaeVuS-5I',
    slug: '#'
  },
  {
    id: 3,
    title: 'VOGUE EDITORIAL',
    category: 'Production Stylist',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA8Cy5mWnJKYQMEyhSxIqRHZ82Peo5WIGQVw73ZpBbFnf31hflYFmygxkGYqWx-trlxauN3sW1TpVB8cFjoMEljLaRErEnVfJcl1mTazhUdUDtOlItj86gQiqlqPTvukaF47o72TPpCX2PZ2sZdBIA-moASy4zTnBfGCpZcp6LAPxm-P5wqpOrL2AjnImn6yxdlGHMxiA7M7VHP39vcpYMmxiy2H5PRfbStGuP185rXHejQ_ppUZGIJodkQ1zNESvr-fDiEDLvVFWpb',
    slug: '#'
  }
]

export default function ProductionStylist() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div style={{ backgroundColor: '#FCFBF6', color: '#111', fontFamily: 'Inter, sans-serif', minHeight: '100vh' }}>
      <Navbar />
      
      <main className="pt-32 pb-24 px-6 md:px-12 max-w-[1600px] mx-auto">
        <div className="mb-16">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4" style={{ fontFamily: 'Noto Serif, serif' }}>
            Production Stylist
          </h1>
          <p className="text-gray-600 text-sm tracking-wide">
            Curated campaigns, editorials, and commercial styling projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {projects.map((project) => (
            <div key={project.id} className="group flex flex-col">
              <Link to={project.slug} className="overflow-hidden mb-6 aspect-[4/3] block">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </Link>
              
              <h3 className="text-xl font-bold mb-2 text-[#000]" style={{ fontFamily: 'Noto Serif, serif' }}>
                {project.title}
              </h3>
              
              <p className="text-[#666] text-xs italic mb-4" style={{ fontFamily: 'Noto Serif, serif' }}>
                {project.category}
              </p>
              
              <Link 
                to={project.slug} 
                className="text-[10px] font-bold tracking-[0.2em] uppercase flex items-center gap-2 text-[#444] hover:text-[#000] transition-colors mt-auto"
              >
                VIEW DETAILS <span className="material-symbols-outlined text-[14px]">arrow_outward</span>
              </Link>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}
