import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

const projectDatabase = {
  'vinfast-x-phuong-anh-dao': {
    category: 'PRODUCTION STYLIST',
    title: 'VINFAST X \nPHƯƠNG ANH ĐÀO',
    client: 'VINFAST',
    role: 'PRODUCTION STYLIST',
    year: '2024',
    starring: 'Phương Anh Đào',
    styling: 'NI STUDIO',
    brand: 'VinFast Vietnam',
    description: 'A sophisticated blend of modern automotive aesthetics and high-fashion sensibility. This campaign captures the elegance of Phương Anh Đào, harmonizing her styling with the luxurious lines of VinFast vehicles. Every outfit was meticulously curated to project a sense of forward-thinking mobility and refined personal expression.',
    nextProjectTitle: 'VINFAST X KATLEEN',
    nextProjectSlug: '/project/vinfast-x-katleen',
    images: [
      "https://scontent.fsgn2-3.fna.fbcdn.net/v/t39.30808-6/649318764_10225485604485313_2131731991573042496_n.jpg?stp=dst-jpg_s590x590_tt6&_nc_cat=110&ccb=1-7&_nc_sid=dd6889&_nc_eui2=AeFFYdUYyDyHHntI318Vu6NjO_g-lK1tKew7-D6UrW0p7Nle89bd4iKaH3aDZVDjoCNuONQOCOK5Y290HHNJ3-zS&_nc_ohc=WSFe4hg8bGYQ7kNvwHmAx3r&_nc_oc=AdqT7C6kFuiydGCBF_3ILqrxyjiWp4ISp6GGDeRqvmBjJX21oti3eCjN7tHOv2CiRPI&_nc_zt=23&_nc_ht=scontent.fsgn2-3.fna&_nc_gid=X1M7YbSinKV2fXrsQ7BCjw&_nc_ss=7a3a8&oh=00_Af0usXf6-xwv8JswTQKIwKyJRgGnJXjhbfEPv9xzpDgSPg&oe=69DB8279",
      "https://scontent.fsgn2-3.fna.fbcdn.net/v/t39.30808-6/651036901_10225485604685318_5274370676096748393_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd6889&_nc_eui2=AeHgw-AJ4HaZBc02kCUhY4tAI4h_J4NtJ4kjiH8ng20nidCDdnuPbdS8rz0ABvR4VRrMnUZB90s941Cvy-L7D-o3&_nc_ohc=zL_ezKn05_EQ7kNvwHkJ84K&_nc_oc=Adr5YoV3SejgKP3D9svTz58J9uNVSEa-h2ot2bqT0eLJqpJzew5a-SSmnCiFx_LcnhM&_nc_zt=23&_nc_ht=scontent.fsgn2-3.fna&_nc_gid=wZ6QE2Rsb4Nxu0aEMBPyGg&_nc_ss=7a3a8&oh=00_Af0QPfJcUfoZyt-GQg7uJLxOp2shwWIadj4vYiKm3V7gYg&oe=69DB7E9C",
      "https://scontent.fsgn2-3.fna.fbcdn.net/v/t39.30808-6/650187919_10225485604005301_642062110204138523_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=dd6889&_nc_eui2=AeEW-0Xf9jSUsfVlJKugyLSDRrYxx2CUMJVGtjHHYJQwldZzqpFz9LFK1fHFYiVHAxJpdO5PgycTiMubxRYIsu2Z&_nc_ohc=fiZSBI77j8AQ7kNvwGM6si8&_nc_oc=AdpzV_1TCuzf6Qrrp4wjY8Zjh3hD5Ci6jfs2qn9vNvRmtPUkC79zVKU1CGk5ut5sUfc&_nc_zt=23&_nc_ht=scontent.fsgn2-3.fna&_nc_gid=KxtZA3M4-EVDrzrA3YcLTA&_nc_ss=7a3a8&oh=00_Af21sgUynrlTRvZF1Xz38TAME1NONMmUJNlkAa1lSCqmhQ&oe=69DB5ED2",
      "https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/650236227_10225485604565315_5213298981281754350_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=dd6889&_nc_eui2=AeHSO32xRaRRUIAKPEZ96_0ay5VWaDcaXS_LlVZoNxpdL7sTCL8DwzrUwL7mIKA653fSFuqEHmT4RmbpkOZDJZrH&_nc_ohc=QQdS_zAANv0Q7kNvwGGK_rU&_nc_oc=AdrLGUbT7fqwl34ejbppTCg2c81Gp-O5dWKuVk9HeLiSkaTyD39AFBs5K1E_YU0R36s&_nc_zt=23&_nc_ht=scontent.fsgn2-4.fna&_nc_gid=SoRhwi6UtDCzHmv5lst8dw&_nc_ss=7a3a8&oh=00_Af0-LMO7LzIaqQXV0TfsNJhKiQ14TwjnUomQ4RW-Un4nUA&oe=69DB6E51",
      "https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/649646927_10225485603165280_2925534572490076149_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=dd6889&_nc_eui2=AeGGoLzK1EdGhvhXr0bSf4_DxdbEcWC0lD_F1sRxYLSUPyVQZjK-W5zJ6sv2sRq0C30iCneFCdcZL-TfexESGraK&_nc_ohc=Xuop13dLzJwQ7kNvwHVfHXu&_nc_oc=Adpd2LsZpK2eWKbvYo4AWO91wMMV68TBaOJ02sb7qyBQcxMDHUzd1mK9A6fCYudcBdc&_nc_zt=23&_nc_ht=scontent.fsgn2-5.fna&_nc_gid=PZesg85XZc7XnncBZ1yCuw&_nc_ss=7a3a8&oh=00_Af0F8_oOUH9f8lMap0ACptfTRZN2hTVSGgrctf8kouVEsw&oe=69DB56DB",
      "https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-6/650392499_10225485606805371_2549385099493291247_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=dd6889&_nc_eui2=AeFxkejX2Fy2b-PJcOBYyngUV4UzXzjzrRJXhTNfOPOtEjTJcLDXO2y4fCWYhkcOx03nUCoEQB6wJVHY4-NqX5Ch&_nc_ohc=16WN0tmYis0Q7kNvwF_1Hsq&_nc_oc=AdpVxeCW8EGgi9IiK-LI0b2u5_zm9saWv4CkJ3bSiMfGCW_clPQNnoYpJFWE5DWY90M&_nc_zt=23&_nc_ht=scontent.fsgn2-9.fna&_nc_gid=u_Wi58eh-d2UqX47zzhFOQ&_nc_ss=7a3a8&oh=00_Af0K1-FgK0yPlw0ds4Tb8qcujZNy4PZKRISMrKBwAIznzg&oe=69DB6A9C",
      "https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/649288096_10225485603485288_1477983483860343842_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=dd6889&_nc_eui2=AeEJDRuo4eznrx5n7E6UjfZtYvgYvflgStpi-Bi9-WBK2mxpc_y5G4ULEop4nnVVlYXBiS8uFTZg173iHOoZL9PN&_nc_ohc=k-hs12sPZOMQ7kNvwEu_N8V&_nc_oc=AdrtYP-Z_XKoZ0vxuM2_J2xfPOa3r_n9i8IwQJSgO8abqtCKXntRXvbrWyyRrkJvERc&_nc_zt=23&_nc_ht=scontent.fsgn2-5.fna&_nc_gid=zn6QY5QISsfXER3Cmh-QJw&_nc_ss=7a3a8&oh=00_Af1DKACxeXj2Dbl6FvskBpW6Se85F30OnGggMvIApiVK6g&oe=69DB7FE3",
      "https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/649821704_10225485606125354_8450901591467487968_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=dd6889&_nc_eui2=AeFJG8L91NPOUd2UFfoXfwNIox0c2WCNk3mjHRzZYI2TebG0hsNvb04pnfrAXhUSiMAdeAhI2bIOxT5EMVrcKANO&_nc_ohc=6i_M0fljlKsQ7kNvwGMMiZg&_nc_oc=Adq_ECKgPslvdGdZ2AfNWwlj3KS1aNgtY3DrRDGaQQuwfDUDFlLA9E4dClKXtRmRrWA&_nc_zt=23&_nc_ht=scontent.fsgn2-4.fna&_nc_gid=7ioc1GWeIUKmRAZ8W-UTgA&_nc_ss=7a3a8&oh=00_Af0yiRYxSqeNiOgDBVlkt6YdSYp0w2FsRWatVMTX5qosTg&oe=69DB5973",
      "https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-6/650996639_10225485603285283_5331053055016082706_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=dd6889&_nc_eui2=AeGNYu5W2kbclFNlFtMSFRRIF82b8eBj39oXzZvx4GPf2p4A5YbyMbmqmFHM8F1ww_NrE1KPwQiABQ-YfV1sjaAd&_nc_ohc=k26vmHBRfnEQ7kNvwG-roAq&_nc_oc=Adq51dH-jA8q6iYFV2KBzSubvWNxFdCFaxaMsBsVqD6CeBKByd0LzA_FQI84Bt8JvvE&_nc_zt=23&_nc_ht=scontent.fsgn2-9.fna&_nc_gid=UnGcoxZTHm1QzG9YcIwGLA&_nc_ss=7a3a8&oh=00_Af0JGUHd-hATsquCM7BXeBA6AoagDkBtaGf_wXclJS1Opw&oe=69DB5E53",
      "https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-6/650379042_10225485604285308_8646338854921025726_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=dd6889&_nc_eui2=AeEAA56Et1fwb1JWCBh_M-07_tD7sHVwt3b-0PuwdXC3dl81CDsD5ynbmbeZ2Ff4hC-cVbaFquv-CeVYQNyyAwEL&_nc_ohc=9fFC8NHa9FcQ7kNvwEwohXt&_nc_oc=AdpMUY987FHyksY0-Hs3ASSBh-SK3AUvTdh6xtizQ1uvZJTbQ_kx0-JC4F55MqWil4U&_nc_zt=23&_nc_ht=scontent.fsgn2-9.fna&_nc_gid=YAwvMU6GmKp2xUO7rCE-vQ&_nc_ss=7a3a8&oh=00_Af0dhGXAGt-H9OuF1YtUAtWQA4Q-mZFI5rqVqYxTUs9RwQ&oe=69DB5CCB"
    ]
  },
  'vinfast-x-katleen': {
    category: 'PRODUCTION STYLIST',
    title: 'VINFAST X \nKATLEEN',
    client: 'VINFAST',
    role: 'PRODUCTION STYLIST',
    year: '2024',
    starring: 'Katleen Phan Võ',
    styling: 'NI STUDIO',
    brand: 'VinFast Vietnam',
    description: 'A dynamic fusion of sport-chic styling and the powerful presence of VinFast. Emphasizing the sharp contours of the vehicle while matching Katleen’s bold and active energy, the project delivers a contemporary visual narrative built on contrast and modern elegance.',
    nextProjectTitle: 'VINFAST X THUẬN NGUYỄN',
    nextProjectSlug: '/project/vinfast-x-thuan-nguyen',
    images: [
      "https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/505014408_24621796100753628_1511799363778032029_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeEHTxi-it1K06gLAHQpMZUZYVSVRyMqSL1hVJVHIypIvXRDl517pTeIhaU5tKFatW9iVy82zU9YyqFNu7GFGJ1_&_nc_ohc=AVu4n4Oq45QQ7kNvwE7U_7p&_nc_oc=AdpPtMfFCK-YZLzVAaKRxxM93gYMBpzOnsUew1guBjXnSjuPwcue0fwMrEa8K5vj2kI&_nc_zt=23&_nc_ht=scontent.fsgn2-4.fna&_nc_gid=1APOqM7Ehdzi0jtsX8BPJQ&_nc_ss=7a3a8&oh=00_Af0LRBGoE_KP00aALwJNZFzbWJ0juyD7ER7QoA_tHGzk3Q&oe=69DB5487",
      "https://scontent.fsgn2-10.fna.fbcdn.net/v/t39.30808-6/504673129_24621796137420291_1093317610295890444_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeFl3JJNWTdceCSpD75ngXY4GghdTAD3aGwaCF1MAPdobMUAYs716zM1fT0jlz-hfjks_8GVLnyF_5DY6Rtat1e_&_nc_ohc=S-D14qpjImwQ7kNvwEeUo0e&_nc_oc=Adqe8Mp6JuIu9njfKUIT-o2sf-V54Io9UZWEl6jA3i7KkkoWso2GHDA5SzZhPWrmioo&_nc_zt=23&_nc_ht=scontent.fsgn2-10.fna&_nc_gid=-XRdF6wjrC-pS1isbh1LrQ&_nc_ss=7a3a8&oh=00_Af1mYZhuuykKfaU1mXEbU1TfAI0zPVSPOYzM1U80l8c3jA&oe=69DB5578"
    ]
  },
  'vinfast-x-thuan-nguyen': {
    category: 'PRODUCTION STYLIST',
    title: 'VINFAST X \nTHUẬN NGUYỄN',
    client: 'VINFAST',
    role: 'PRODUCTION STYLIST',
    year: '2024',
    starring: 'Thuận Nguyễn',
    styling: 'NI STUDIO',
    brand: 'VinFast Vietnam',
    description: 'A powerful representation of masculine elegance combined with the premium appeal of VinFast. Featuring Thuận Nguyễn, this campaign sets a confident, refined tone. The styling balances crisp tailoring with a sense of approachable luxury, echoing the spirit of the modern vehicle.',
    nextProjectTitle: 'VIETCOMBANK X CON CÒ ĐÂY',
    nextProjectSlug: '/project/vietcombank-x-con-co-day',
    images: [
      "https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-6/482028442_1196384488512812_1806176564379977814_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeHdZr-GvBnlzLSZamI6ZGHnmqyD48JD5FuarIPjwkPkW6t8VjP1MXPVsdy_wMNdqn9UH6LAHQvWvD8chuv94YpG&_nc_ohc=Uq6mXILwTy0Q7kNvwEWBW68&_nc_oc=Ados5j6EAbZsPTX2qvpV9IcPrOSHxPWXStCR48Yq0TZxVCubrecHLOPOPwd8Wix8nEc&_nc_zt=23&_nc_ht=scontent.fsgn2-9.fna&_nc_gid=r190YAmeq9m3ZqhJLZJ59A&_nc_ss=7a3a8&oh=00_Af0EPTU8_Jb6d9yLVosE5pL2iu6fFnDeWuU-NkRlF4IRsA&oe=69DB7691",
      "https://scontent.fsgn2-8.fna.fbcdn.net/v/t39.30808-6/482021231_1196384681846126_2945758807469789048_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeFoRqgoZ-ZMe9ZliUIxDEnUeddCXrUr5DF510JetSvkMZAU_lQhrdg3sQRSfUi5OUXolfP08zrmnZ9uQAYnDOGM&_nc_ohc=kDpKUwJyK40Q7kNvwHekUUE&_nc_oc=AdpcJT79IIDRdFu3K7Jmz5wx73wo5z4X7jb0Pup-xsa4IJthyANUy6UY218m9B3bnz0&_nc_zt=23&_nc_ht=scontent.fsgn2-8.fna&_nc_gid=psZB3e3YcGusAMI7NMa6hw&_nc_ss=7a3a8&oh=00_Af0cbEPxkE11p8jPVQhBOc1Ac9zdM1qNLKOlZmetMkCGzg&oe=69DB78F0",
      "https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/482032393_1196384395179488_542806003683485570_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeGwSFvyEhQTojd9-_9d3eXGpmtoIEM1HvSma2ggQzUe9Mbk15GKGrvzvuA9Un77F0bUA5HO8X2_EWoI7Cii0Na2&_nc_ohc=nXEkd3_-Y24Q7kNvwGBWOLZ&_nc_oc=AdrjNuOE4oTDmKbhRM9JOUtslruIQIG44-aHGePj0lpcGX1mgUb20vWm4pPvt2ywOFU&_nc_zt=23&_nc_ht=scontent.fsgn2-4.fna&_nc_gid=xc2Aiq8ThXSS5kj9ynayEw&_nc_ss=7a3a8&oh=00_Af2jhT4HL8ox8ez09ehh4f_mxQ3bcfkHefa68Fb8WdZkZA&oe=69DB7DDB",
      "https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/482015359_1196384255179502_2909525787357989483_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeEtfkQMYd29V2NRncwxavVJR9BZ62_dEqZH0Fnrb90SpqNaixC1QKT3VPo8D04M64qyo2sB305RWzRnHaIgEQOF&_nc_ohc=uBmk9pvGMJ8Q7kNvwGLYHHI&_nc_oc=AdonA3zTee64vIxHQkJxBRKlGBLvhvFBZpvqT0H6UPyZ8fnImxg-Su-f70TL9plheNk&_nc_zt=23&_nc_ht=scontent.fsgn2-5.fna&_nc_gid=SHq-K0fm3Nyf8K0uzgZ-LQ&_nc_ss=7a3a8&oh=00_Af0-29KT42WW-8ZSH3AHnSccynMaxcnTG4GQCg9aMuIe_w&oe=69DB63C0"
    ]
    ]
  },
  'vietcombank-x-con-co-day': {
    category: 'PRODUCTION STYLIST',
    title: 'VIETCOMBANK X \nCON CÒ ĐÂY',
    client: 'VIETCOMBANK',
    role: 'PRODUCTION STYLIST',
    year: '2024',
    starring: 'Các Diễn Viên',
    styling: 'NI STUDIO',
    brand: 'Vietcombank',
    description: 'Một chiến dịch đặc biệt kết hợp cùng Vietcombank và đạo diễn, mang đến hình ảnh chuyên nghiệp nhưng vẫn giữ được sự gần gũi, truyền tải trọn vẹn tinh thần của nhãn hàng thông qua từng bộ trang phục.',
    nextProjectTitle: 'RETURN HOME',
    nextProjectSlug: '/',
    images: [
      '<iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fmaincourseconcept%2Fvideos%2F876293058189768%2F&show_text=false&width=100%25&t=0" width="100%" height="400" style="border:none;overflow:hidden;max-width:100%" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>',
      'https://scontent.fdad1-2.fna.fbcdn.net/v/t39.30808-6/603894841_1297030942464003_3292556104082335180_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeHPulppIxtYDhKiMXX3-yZexr60C3xAA6nGvrQLfEADqQhh6UHznyqMvzlzEdd0koWoKV3NRCt6hFZSZAhXZlCq&_nc_ohc=Vp_9xXPZM9oQ7kNvwFo__Vm&_nc_oc=Adr8aYlh9Hf3A7lc2FUaYA1hSCDLEmAXLueGmYMSTMY-W9iEHn2SP3HVthCqWLI5-fc&_nc_zt=23&_nc_ht=scontent.fdad1-2.fna&_nc_gid=EdlYGi0VzQfFGeSGp8lSlw&_nc_ss=7a3a8&oh=00_Af3a4TRfWR_p3bcKN9sF58S76aYj2SBPk2UodBfasipKeA&oe=69DBD7CB'
    ]
  }
}

export default function ProjectDetail() {
  const { projectId } = useParams()
  const data = projectDatabase[projectId as keyof typeof projectDatabase]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [projectId])

  if (!data) {
    return (
      <div style={{ backgroundColor: '#f9f9f9', color: '#1b1b1b', fontFamily: 'Inter, sans-serif', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Navbar />
        <main className="flex-1 flex items-center justify-center pt-32">
          <h1 className="text-3xl font-bold font-serif">Project Not Found</h1>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div style={{ backgroundColor: '#f9f9f9', color: '#1b1b1b', fontFamily: 'Inter, sans-serif' }}>
      <Navbar />

      <main className="pt-32 pb-24">
        {/* Project Hero Section */}
        <section className="px-6 md:px-12 mb-24 md:mb-32 grid grid-cols-12 gap-8 items-end">
          <div className="col-span-12 md:col-span-8">
            <p className="text-xs tracking-[0.4em] mb-6 uppercase" style={{ color: '#777777', fontFamily: 'Inter, sans-serif' }}>
              {data.category}
            </p>
            <h1
              className="text-5xl md:text-7xl lg:text-8xl leading-none font-bold tracking-tighter mb-8 uppercase whitespace-pre-line"
              style={{ color: '#000', fontFamily: 'Noto Serif, serif' }}
            >
              {data.title}
            </h1>
          </div>
          <div className="col-span-12 md:col-span-4 pb-4">
            <div className="flex flex-col gap-4 border-l pl-8" style={{ borderColor: 'rgba(119,119,119,0.2)' }}>
              <div>
                <span className="text-[10px] tracking-widest uppercase block mb-1" style={{ color: '#777777' }}>Client</span>
                <span className="text-sm font-medium tracking-wide text-gray-900">{data.client}</span>
              </div>
              <div>
                <span className="text-[10px] tracking-widest uppercase block mb-1" style={{ color: '#777777' }}>Role</span>
                <span className="text-sm font-medium tracking-wide text-gray-900">{data.role}</span>
              </div>
              <div>
                <span className="text-[10px] tracking-widest uppercase block mb-1" style={{ color: '#777777' }}>Year</span>
                <span className="text-sm font-medium tracking-wide text-gray-900">{data.year}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Masonry Gallery */}
        <section id="gallery" className="px-4 md:px-12 mb-32 md:mb-40">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {data.images.map((src, index) => {
              if (src.startsWith('<iframe')) {
                return (
                  <div key={index} className="break-inside-avoid relative overflow-hidden flex justify-center w-full mb-6" dangerouslySetInnerHTML={{ __html: src }} />
                )
              }
              return (
                <div key={index} className="break-inside-avoid relative overflow-hidden" style={{ backgroundColor: '#f3f3f3', cursor: 'zoom-in' }}>
                  <img
                    src={src}
                    className="w-full h-auto object-cover transition-all duration-700 ease-out-expo hover:scale-[1.02]"
                    alt={`${data.title.replace('\n', ' ')} - Image ${index + 1}`}
                  />
                </div>
              )
            })}
          </div>
        </section>

        {/* Process & Credits Section */}
        <section className="py-24 md:py-32 px-6 md:px-12" style={{ backgroundColor: '#f3f3f3' }}>
          <div className="max-w-7xl mx-auto grid grid-cols-12 gap-12">
            <div className="col-span-12 md:col-span-4">
              <h2 className="text-4xl font-bold mb-12" style={{ fontFamily: 'Noto Serif, serif' }}>
                Process <br />&amp; Credits.
              </h2>
              <div className="space-y-8">
                <div>
                  <span className="text-[10px] tracking-widest uppercase block mb-2" style={{ color: '#777777' }}>Starring</span>
                  <p className="text-sm font-semibold uppercase">{data.starring}</p>
                </div>
                <div>
                  <span className="text-[10px] tracking-widest uppercase block mb-2" style={{ color: '#777777' }}>Styling</span>
                  <p className="text-sm font-semibold uppercase">{data.styling}</p>
                </div>
                <div>
                  <span className="text-[10px] tracking-widest uppercase block mb-2" style={{ color: '#777777' }}>Brand</span>
                  <p className="text-sm font-semibold uppercase">{data.brand}</p>
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-7 md:col-start-6 flex items-center">
              <p className="leading-relaxed text-lg" style={{ color: '#474747', fontFamily: 'Noto Serif, serif' }}>
                {data.description}
              </p>
            </div>
          </div>
        </section>

        {/* Next Project CTA */}
        <section className="px-6 md:px-12 py-32 md:py-40 flex flex-col items-center justify-center text-center">
          <span className="text-[10px] tracking-[0.5em] uppercase mb-8" style={{ color: '#777777' }}>Next</span>
          <Link to={data.nextProjectSlug} className="group">
            <h2
              className="text-4xl md:text-5xl lg:text-7xl font-bold transition-all duration-500 hover:italic uppercase"
              style={{ fontFamily: 'Noto Serif, serif', color: '#000' }}
            >
              {data.nextProjectTitle}
            </h2>
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  )
}
