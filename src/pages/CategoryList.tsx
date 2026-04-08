import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

// In a real app, this data would come from an API or a centralized data file
const mockProjects = {
  'production-project': {
    title: 'Production Stylist',
    description: 'Curated campaigns, editorials, and commercial styling projects.',
    projects: [
      {
        id: 1,
        title: 'VINFAST X PHƯƠNG ANH ĐÀO',
        category: 'Production Stylist',
        image: 'https://scontent.fsgn2-3.fna.fbcdn.net/v/t39.30808-6/649318764_10225485604485313_2131731991573042496_n.jpg?stp=dst-jpg_s590x590_tt6&_nc_cat=110&ccb=1-7&_nc_sid=dd6889&_nc_eui2=AeFFYdUYyDyHHntI318Vu6NjO_g-lK1tKew7-D6UrW0p7Nle89bd4iKaH3aDZVDjoCNuONQOCOK5Y290HHNJ3-zS&_nc_ohc=WSFe4hg8bGYQ7kNvwHmAx3r&_nc_oc=AdqT7C6kFuiydGCBF_3ILqrxyjiWp4ISp6GGDeRqvmBjJX21oti3eCjN7tHOv2CiRPI&_nc_zt=23&_nc_ht=scontent.fsgn2-3.fna&_nc_gid=X1M7YbSinKV2fXrsQ7BCjw&_nc_ss=7a3a8&oh=00_Af0usXf6-xwv8JswTQKIwKyJRgGnJXjhbfEPv9xzpDgSPg&oe=69DB8279',
        slug: '/project/vinfast-x-phuong-anh-dao'
      },
      {
        id: 2,
        title: 'VINFAST X KATLEEN',
        category: 'Production Stylist',
        image: 'https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/505014408_24621796100753628_1511799363778032029_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeEHTxi-it1K06gLAHQpMZUZYVSVRyMqSL1hVJVHIypIvXRDl517pTeIhaU5tKFatW9iVy82zU9YyqFNu7GFGJ1_&_nc_ohc=AVu4n4Oq45QQ7kNvwE7U_7p&_nc_oc=AdpPtMfFCK-YZLzVAaKRxxM93gYMBpzOnsUew1guBjXnSjuPwcue0fwMrEa8K5vj2kI&_nc_zt=23&_nc_ht=scontent.fsgn2-4.fna&_nc_gid=1APOqM7Ehdzi0jtsX8BPJQ&_nc_ss=7a3a8&oh=00_Af0LRBGoE_KP00aALwJNZFzbWJ0juyD7ER7QoA_tHGzk3Q&oe=69DB5487',
        slug: '/project/vinfast-x-katleen'
      },
      {
        id: 3,
        title: 'VINFAST X THUẬN NGUYỄN',
        category: 'Production Stylist',
        image: 'https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-6/482028442_1196384488512812_1806176564379977814_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeHdZr-GvBnlzLSZamI6ZGHnmqyD48JD5FuarIPjwkPkW6t8VjP1MXPVsdy_wMNdqn9UH6LAHQvWvD8chuv94YpG&_nc_ohc=Uq6mXILwTy0Q7kNvwEWBW68&_nc_oc=Ados5j6EAbZsPTX2qvpV9IcPrOSHxPWXStCR48Yq0TZxVCubrecHLOPOPwd8Wix8nEc&_nc_zt=23&_nc_ht=scontent.fsgn2-9.fna&_nc_gid=r190YAmeq9m3ZqhJLZJ59A&_nc_ss=7a3a8&oh=00_Af0EPTU8_Jb6d9yLVosE5pL2iu6fFnDeWuU-NkRlF4IRsA&oe=69DB7691',
        slug: '/project/vinfast-x-thuan-nguyen'
      }
    ]
  },
  'fashion-stylist': {
    title: 'Fashion Stylist',
    description: 'High-end wardrobe curations mapping narratives to apparel.',
    projects: [
      {
        id: 1,
        title: 'GLAMOUR EDITORIAL',
        category: 'Fashion Stylist',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBOy5339jiXaETpjHrJBdBhFNrQ-_UfmWQIxfXbQZu7VokfwLpXgoZyIHh8bn7p7JgsX2cQoYjgVxCHHTfT2zdfkVjiqyaOqw0-q7Ompw81-l1K4TkaMxtR2uovQY0qTBmn3byM7d1eKtVnt75rpfek5fEri2Sf_13qcWQxOX3K4XnRSLLhgUrnptcWTxP9nSDejc5S8a7gtd5ItWOdIS6gsDzdNU4h5DJPrtmNt7IsaSlFXr2bLeENi9eRpFQLNf3rHwz_HSGpXm96',
        slug: '/project'
      }
    ]
  },
  'personal-stylist': {
    title: 'Personal Stylist',
    description: 'Bespoke image consulting and personal branding transformations.',
    projects: [
      {
        id: 1,
        title: 'CELEBRITY FITTING',
        category: 'Personal Stylist',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB6vSw3BznuV1pFQc5RM1ww8f1_GNY9jlmbk7p9JhkxBeWGS-fKLQ946h_HortAx6xWhGazH8x4tG13qMDvwynRL1EaMa-HgzcstzjJBEYZ9HnDw0dQGuq5yPwMGXzCkgXIm2MRfWci2gRqM6U6nllBrLOJL7wnOZ4dGK5HmhGDhg5e3yFTdE0h1gjf-uEV-BwMdCxCRM6jYHQiYvFtHZ829cCi0l8qhxjqhKeC6LiNKlfSA-OHe-v8ROofy0cGK-7WFgZvyBAT7KwE',
        slug: '/project'
      }
    ]
  },
  'stylist-assistant': {
    title: 'Stylist Assistant',
    description: 'Behind the scenes magic in major film and fashion productions.',
    projects: [
      {
        id: 1,
        title: 'BTS: MILAN FASHION WEEK',
        category: 'Stylist Assistant',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB8111PNC9Q2Fe8SR4Z9p92AXE8kd1KQ13e5lvKN0cCk8DdtoQoWqdGfNqPxwuaO5fy-_WWCa210ABckh_Q161YshENbDanOnkYYUAyXYfxGzO_zGuv4DxE-BAL9BaG9B_iJyywihYdZVRBwJR_RXTyGkd_DmXNHoiqutqHs2WBIy-UKSJeKX1hqM65v-FM27CjslLcfz9F1O3V_vVqpnvJhviFvwNYRHcwBlogyIgPgrYFN8Q2z18D1xAMxNwmNc5ocu9xIFULg9jU',
        slug: '/project'
      }
    ]
  },
  'fashion-design': {
    title: 'Fashion Design',
    description: 'Original garments crafted with a unique perspective on form and function.',
    projects: [
      {
        id: 1,
        title: 'AUTUMN/WINTER COLLECTION',
        category: 'Fashion Design',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA_NBpDWMz4EhZ-A0PXuglpt7inXkt1AfE_qKZBcO2WBpwixRYZ0ImJ9ImcS0BgS3279mlSknxLiY03uyQ-HBB77JUml6G8V8zaxXEFMh2do2jhEFy3xd8JKM4PVPCMISQvGWRSwLtvbGRogdwdPovYGYm9zbU1Lj7fVuyiXdMKg32o9-b0JXGFpXaAnbP07tU3KEFkJbAUfC5IzgyzNq-ZIqaVoMriIy5rH_U2PiInNqnVSB0k-Cha7Q3Hgoo2-UKP36xNpFV__35i',
        slug: '/project'
      }
    ]
  }
}

export default function CategoryList() {
  const { categoryId } = useParams()
  const data = mockProjects[categoryId as keyof typeof mockProjects]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [categoryId])

  if (!data) {
    return (
      <div style={{ backgroundColor: '#FCFBF6', color: '#111', fontFamily: 'Inter, sans-serif', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Navbar />
        <main className="flex-1 flex items-center justify-center pt-32">
          <h1 className="text-3xl font-bold font-serif">Category Not Found</h1>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div style={{ backgroundColor: '#FCFBF6', color: '#111', fontFamily: 'Inter, sans-serif', minHeight: '100vh' }}>
      <Navbar />
      
      <main className="pt-32 pb-24 px-6 md:px-12 max-w-[1600px] mx-auto">
        <div className="mb-16">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 uppercase" style={{ fontFamily: 'Noto Serif, serif' }}>
            {data.title}
          </h1>
          <p className="text-gray-600 text-sm tracking-wide">
            {data.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {data.projects.map((project) => (
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
