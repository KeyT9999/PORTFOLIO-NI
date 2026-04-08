import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ClientCTA from '../components/ClientCTA'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div style={{ backgroundColor: '#f9f9f9', color: '#1b1b1b', fontFamily: 'Inter, sans-serif' }}>
      <Navbar />
      <Hero />
      <ClientCTA />
      <Footer />
    </div>
  )
}
