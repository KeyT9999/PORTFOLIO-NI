interface Project {
  id: number
  category: string
  title: string
  image: string
  span: 'tall' | 'short' | 'med'
}

const projects: Project[] = [
  {
    id: 1,
    category: 'Production Styling',
    title: 'Velvet Silence',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBnmmBcusoZdf6yflxJqXFD1QEYBgZzYI0T3TmFxFtIbh0HJ1Xdm3xreY6C2aTLrCFpt3FQ4e1OsfoPfdB69hqmTy53mwLv4SBP_O45NksrDE1bPIP2z631TWweFV7_m_u8uq6mA6enoPWUthl856EnhjU9ZEH064bhGt5yBJzH1D7Bj7TVUYwCmICmK13Ao9-ssLMMs1GtEikBlLnKt4P26ezt721dYyKpQfcp0ejQ__Naf1xvoPKkQJ-kV7acBSewK_yM8UP0bVlv',
    span: 'tall',
  },
  {
    id: 2,
    category: 'Street Editorial',
    title: 'Concrete Pulse',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDG-U8Xn-TymQ8EwxPJNhykzOqptv3Vsie7LqYw3sVLL52fkUo1pXx95I_eIGO2VpTqEdm4BaKM5zhagEHKElBbgC0Qw_zdqIZTfcSKpPXbtMZMIvs1RgmgVxcxlnHblYdVMauI6ybZR7ZkS-RETIXwoksCy_RoyH5OakMjoOx74bM3mg6IHHCJS8ilrJJFZXGDkeP9o034fhsGjYMHFdILjnHPU6nyRCYdXAoo-MTSy98UuH53s7BDDcOTj5hYCrfen4QXYn_3sKyK',
    span: 'med',
  },
  {
    id: 3,
    category: 'Fashion Design',
    title: 'Solar Flare',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDi-1haxJSWUzu8C0Z0iX78td_MuZ6hNfBtqFJVYMgezZdoHe_8PjeSKuHMDxfTVBi0pX1-9IqbwzGTc0hFNUN2I6dYv4MA8xnVO6kXoStfPA69XuyOshRy5BRoEN2DdbgkatupYcGnrG7_QKuxlxiT4Kq7eMNqYiJ0KGNCTHlC22SUDxFfutmlHlZoZT0Rb25FInesDBgSpC6Gqve4FI8YsS7JLMxKQR4QVpnlNCNBnjhB-Csj3tVz2T22xQXyidU_XuhX8Flg28m8',
    span: 'short',
  },
  {
    id: 4,
    category: 'Personal Styling',
    title: 'The Detailist',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAbaZ5MSEYmWlkF8dsCgrggV27XdSpC2QtCSAi5hdaVAZh7BVDW7fWUo_7cT_ql5tjpSLM1lGro-p6FeoZmHcqBUlgBSbkHav4z2Xv9vYAHBL4eTsK1wbC5CSvyja7YbA9ii13aVk-a8iSibWc5b-Cupt0CEavYIZQU_2j-E-VczjcPf3tXDEi5M-Eev3OXq_5MkVVa02HhXz7yFdpHbuAo1rU4yqPk1j9ihvUCvy_xXj_wd4YRyvqVkZ-TI_tgb2G-XO4ah4ptRNor',
    span: 'med',
  },
  {
    id: 5,
    category: 'Avant Garde',
    title: 'Shadow Form',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBtFg79Vovwa9TtZnJe7lmAR7diK2gXNyOrKmc5kyS4YeSZFkdxlsOWA-7vdyD5oagW61wz6p4wUZdHghWvoqVZKDWat1yXB22XYEMck2XJfWDsFHvRl2Ic7093RGqP1YVj_sP3yshMlN5UhXsyc3g30m-xxsUYndefLVkGR5P0OA_kI8lE5xac7qAWSL6yXQLnloUAyY-eaRABqkEEh4RKgG1ABqRNIBjPYobKcHSDeKm4-PaykxCfCfTJCwmn-HJGeALAeSZtkXa-',
    span: 'tall',
  },
  {
    id: 6,
    category: 'Location Editorial',
    title: 'Desert Nomad',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCOY-CCRHtJqSaZWnx1z36Mj5TLPSyKOHIm86M1TOhIaIYlrQmkSsrW6lPAMKHuZjbN-RrgXI5wK_ktQ-6dkK1ooUM6P7utmgAdRus5VlcV8XdbrpBIV6blUuhOsPGMaSPQ1bzxc4vyOPyRxkKtYXrtIK539dkpECD-aQn9564mzcaWmD26ibOY8OfQNdgDo7UfigpkVAKNlAxpaVI9t3ulVI9RYBomAjeGi_m1Mw-BOnuj90oRNvhUk-7yYNVl9VBk1aHlafFlTGcS',
    span: 'med',
  },
]

function ProjectCard({ project }: { project: Project }) {
  const spanClass =
    project.span === 'tall'
      ? 'masonry-item-tall'
      : project.span === 'short'
      ? 'masonry-item-short'
      : 'masonry-item-med'

  return (
    <div
      className={`${spanClass} group relative overflow-hidden cursor-pointer`}
      style={{ backgroundColor: '#e8e8e8' }}
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transition-all duration-700 ease-out-expo group-hover:scale-105"
      />
      {/* Overlay */}
      <div
        className="absolute inset-0 flex flex-col justify-end p-8 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
        style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}
      >
        <p
          className="text-white mb-2 uppercase tracking-[0.3em]"
          style={{ fontFamily: 'Inter, sans-serif', fontSize: '10px' }}
        >
          {project.category}
        </p>
        <h3
          className="text-white text-3xl"
          style={{ fontFamily: 'Noto Serif, serif' }}
        >
          {project.title}
        </h3>
      </div>
    </div>
  )
}

export default function FeaturedWork() {
  return (
    <main className="py-24 md:py-32 px-4 md:px-12" style={{ backgroundColor: '#f9f9f9' }}>
      {/* Header */}
      <div className="flex justify-between items-end mb-16 md:mb-24 px-4 md:px-6">
        <div>
          <span
            className="block mb-4 uppercase tracking-[0.3em] text-xs"
            style={{ fontFamily: 'Inter, sans-serif', color: '#777777' }}
          >
            Archive
          </span>
          <h2
            className="text-5xl"
            style={{ fontFamily: 'Noto Serif, serif', color: '#000' }}
          >
            Featured Work
          </h2>
        </div>
        <div className="hidden md:block">
          <p
            className="text-xs tracking-[0.2em] italic"
            style={{ fontFamily: 'Inter, sans-serif', color: '#777777' }}
          >
            Curated Selection — 2024
          </p>
        </div>
      </div>

      {/* Masonry Grid */}
      <div className="masonry-grid max-w-[1600px] mx-auto">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* Discover Button */}
      <div className="mt-16 md:mt-24 flex justify-center">
        <button
          className="px-12 py-5 text-xs tracking-[0.3em] transition-all duration-500 border"
          style={{
            fontFamily: 'Inter, sans-serif',
            borderColor: 'rgba(119,119,119,0.2)',
            color: '#1b1b1b',
            backgroundColor: 'transparent',
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLButtonElement
            el.style.backgroundColor = '#000'
            el.style.color = '#e2e2e2'
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLButtonElement
            el.style.backgroundColor = 'transparent'
            el.style.color = '#1b1b1b'
          }}
        >
          DISCOVER ALL ARCHIVES
        </button>
      </div>
    </main>
  )
}
