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
    nextProjectTitle: 'VICENZO',
    nextProjectSlug: '/project/vicenzo',
    images: [
      '<iframe src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F896648029539665%2F&show_text=false&width=476&t=0" width="100%" height="476" style="border:none;overflow:hidden;max-width:100%" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>',
      'https://scontent.fdad1-2.fna.fbcdn.net/v/t39.30808-6/603894841_1297030942464003_3292556104082335180_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeHPulppIxtYDhKiMXX3-yZexr60C3xAA6nGvrQLfEADqQhh6UHznyqMvzlzEdd0koWoKV3NRCt6hFZSZAhXZlCq&_nc_ohc=Vp_9xXPZM9oQ7kNvwFo__Vm&_nc_oc=Adr8aYlh9Hf3A7lc2FUaYA1hSCDLEmAXLueGmYMSTMY-W9iEHn2SP3HVthCqWLI5-fc&_nc_zt=23&_nc_ht=scontent.fdad1-2.fna&_nc_gid=EdlYGi0VzQfFGeSGp8lSlw&_nc_ss=7a3a8&oh=00_Af3a4TRfWR_p3bcKN9sF58S76aYj2SBPk2UodBfasipKeA&oe=69DBD7CB'
    ]
  },
  'vicenzo': {
    category: 'PRODUCTION STYLIST',
    title: 'VICENZO',
    client: 'VICENZO',
    role: 'PRODUCTION STYLIST',
    year: '2024',
    starring: 'Các Người Mẫu',
    styling: 'NI STUDIO',
    brand: 'Vicenzo',
    description: 'Chiến dịch hình ảnh đậm chất thời trang cao cấp dành cho Vicenzo, được xây dựng dựa trên sự tinh giản về phông nền nhằm làm nổi bật tối đa phom dáng và chất liệu của trang phục. Ánh sáng và bóng đổ được sử dụng một cách có chủ đích để tôn vinh tinh thần thanh lịch và hiện đại của thương hiệu.',
    nextProjectTitle: 'BÁO BEAUTY FAMILY X BÉ THIÊN KIM',
    nextProjectSlug: '/project/bao-beauty-family-x-be-thien-kim',
    images: [
      'https://scontent.fdad1-4.fna.fbcdn.net/v/t39.30808-6/508999165_1228267432015307_5385936854439932724_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeHJ2HpuBYN6pCHSWAQP0Gw7rn9dTC7fc3Suf11MLt9zdFdEi-fMdeEngcz0U0R2q7e6fmXCFTuTC53ck6xHMeb0&_nc_ohc=iJLsowcbCR4Q7kNvwFLjDqC&_nc_oc=AdqOoMJnPUXsNcGsVWPb9UMJXit7BGHujrtE9QGadyNrXUAFeIOg8_iQJJtqziLr42U&_nc_zt=23&_nc_ht=scontent.fdad1-4.fna&_nc_gid=pbpmJ5tP3YPnv3lVCioGiA&_nc_ss=7a3a8&oh=00_Af05PHBajqNlvwcogh56h-JsQ-C4QeBXDQkmPsg8wdobdA&oe=69DBBF68',
      'https://scontent.fdad1-4.fna.fbcdn.net/v/t39.30808-6/509364133_1228267475348636_8330230165800908032_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeFCQVKdGzT1DeVRR2r8zj6LzJJH8nb0tfXMkkfydvS19emOeR5LT0u0VFuJYFPdTI_B2fE8bcdcJVMff87XELfO&_nc_ohc=3XvEJW-ok0MQ7kNvwFFDca8&_nc_oc=AdpdSpR0B3xwjI808lStXaR33ZTnkjpHMRgWhhL5cjDxNc9K61UqRKt__x2arDxlvmk&_nc_zt=23&_nc_ht=scontent.fdad1-4.fna&_nc_gid=t0UQWEBpXJSVdbFnTYoCJg&_nc_ss=7a3a8&oh=00_Af2sBYyJb0DAF49pFytXbW3UOE_XaFYNCL6rQ6KsWPwtDg&oe=69DBADB8',
      'https://scontent.fdad1-3.fna.fbcdn.net/v/t39.30808-6/509362101_1228267438681973_6547303695075354680_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeFMyl3c7amLdj3Oao_lr80TJ-jICQUwggon6MgJBTCCCn3rfMVOa4f_IMcN0dfy80XGBsMzjXJtsB1cgkV9chOO&_nc_ohc=UpqNS5qx7d8Q7kNvwFywdrr&_nc_oc=Adq2PwZVjFCP68aQn9o6YJ20_IqBWCxhw1H_9a5nLGWlwoWgCH3e5vsgrxmXrG3AIZI&_nc_zt=23&_nc_ht=scontent.fdad1-3.fna&_nc_gid=iObn90JmHA8v-spcGhlFlg&_nc_ss=7a3a8&oh=00_Af0eXQy35cj0VPGVNmfqTJ8I0kGRJd8CGMmVTLkhDHv1Cw&oe=69DBD003',
      'https://scontent.fdad1-1.fna.fbcdn.net/v/t39.30808-6/508736244_1228267492015301_2859687712190232849_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=109&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeHQfr8qooNB22os7v9PYy8Qc8B6J2ApKPBzwHonYCko8K81P0HWm9nWR6l6XgWRh1OMVSUEnmxH42B8-bwSjsF7&_nc_ohc=nP39B1WtFLMQ7kNvwEdoWmr&_nc_oc=AdolB4A-mBVQiF4OhZf1z7ERqkGnlj3IQ_UBW3y3urOkYEHNJkZDS_U0bgDSlOe6iCs&_nc_zt=23&_nc_ht=scontent.fdad1-1.fna&_nc_gid=v81Ku8hfdcKumpJEmU-2bg&_nc_ss=7a3a8&oh=00_Af0ansz2pZqj57O9MGDX19HUJqiNE_BjD-C8dtgo-UttZQ&oe=69DBC2FF'
    ]
  },
  'bao-beauty-family-x-be-thien-kim': {
    category: 'PRODUCTION STYLIST',
    title: 'BÁO BEAUTY FAMILY X \nBÉ THIÊN KIM',
    client: 'BÁO BEAUTY FAMILY',
    role: 'PRODUCTION STYLIST',
    year: '2024',
    starring: 'Bé Thiên Kim',
    styling: 'NI STUDIO',
    brand: 'Beauty Family',
    description: 'Dự án hình ảnh ngọt ngào và thời trang lấy cảm hứng từ nét thơ ngây nhưng không kém phần cuốn hút của bé Thiên Kim. Từng khung hình được chăm chút với các bộ trang phục lộng lẫy và phong cách tạo dáng tự nhiên, đem đến một làn gió tươi mới cho ấn phẩm của báo Beauty Family.',
    nextProjectTitle: 'TIGER X OTIS',
    nextProjectSlug: '/project/tiger-x-otis',
    images: [
      'https://scontent.fsgn2-10.fna.fbcdn.net/v/t39.30808-6/517597741_32464832029774307_4544123377155152770_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=dd6889&_nc_eui2=AeEu44xOUwlnUsEwSOzQepfDr4v0HSggelqvi_QdKCB6WloIX1Uoa_iB_BMI0SBA5oT4PLxyEEjCOOL5gPSCe7FS&_nc_ohc=oBJ6_cFZknwQ7kNvwF5l72B&_nc_oc=AdqmrEdDfPB8y4yAzDIDyhN2TuMwpZg-YbR5hzxFOBxwB_8hfp2KYrRJLAeU1OMQjJk&_nc_zt=23&_nc_ht=scontent.fsgn2-10.fna&_nc_gid=fiNsvyEnnOPPrS1O8qcY1w&_nc_ss=7a3a8&oh=00_Af2qDftv83JkVlLECjVgASuCIeK7bnZ1XQS5s5c5Y9iIYg&oe=69DBAB91',
      'https://scontent.fsgn2-10.fna.fbcdn.net/v/t39.30808-6/516747807_32464832283107615_2282855686984202047_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=dd6889&_nc_eui2=AeG_TQDKkBM0dk-SRsnDMKO2eV6VfIQIwLZ5XpV8hAjAtjCMdIdX-S_uCYp656FstpysYxyfBe8zrPXla_6sJasO&_nc_ohc=PfEEw34MIBwQ7kNvwFEeFn5&_nc_oc=Adrybc-0auAC5zJkDLj5NjRIp3RPJMT0x-OTM6_A-lFbZTE2k_pcoaPev4GzcPfsjrk&_nc_zt=23&_nc_ht=scontent.fsgn2-10.fna&_nc_gid=J1P-fcT3J9EkQNqv93pWMw&_nc_ss=7a3a8&oh=00_Af1f5tjRFA9dAgzltzM-CVU3WKbcMNi7BJgOlWGrermJpQ&oe=69DBAB7D',
      'https://scontent.fsgn2-3.fna.fbcdn.net/v/t39.30808-6/518343666_32464832279774282_3230413027211613386_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd6889&_nc_eui2=AeGRQ7MShc7NbvE5Jvb_5YT9-N10VeVjfNn43XRV5WN82fIcJHsNgEIJGcrfQc1Fr1shQjvf_GTfEop4jEKkGkxb&_nc_ohc=HU7JIw8RhwUQ7kNvwFh-pwk&_nc_oc=Adofk7rOUCHiAeNZQJN3VfA9h_e-o_VK8aC0KBE_VP5TQdAJ5zzzlxkTJyHaTpauyE4&_nc_zt=23&_nc_ht=scontent.fsgn2-3.fna&_nc_gid=zcXl5eFFwe0rBK8qqDL0Vg&_nc_ss=7a3a8&oh=00_Af3tu1yxtDHlfnSmne3S_ZZu9i_D8P77Ds6kIVY_O4CfEg&oe=69DBCC9F',
      'https://scontent.fsgn2-3.fna.fbcdn.net/v/t39.30808-6/517708331_32464832383107605_7117640739788641285_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd6889&_nc_eui2=AeHzawQrgeAKniB6dMdLoWjyaV8bh-LRou9pXxuH4tGi70lSVTyVAO-SEWD6NaJv6y2gZGfulNNuqiPIurRBpWJL&_nc_ohc=6YHVLsQyo_wQ7kNvwGq0_qj&_nc_oc=Adob7aP3yHeqHLZRS513IolQdeTzYONLaHwG_R1n78ETPMm-RJaJU9u9dBu1GrRWAF8&_nc_zt=23&_nc_ht=scontent.fsgn2-3.fna&_nc_gid=9pR-USrWBfWwSM0x169YcQ&_nc_ss=7a3a8&oh=00_Af0txrvgLRUx58iD1Y9CmkKHxzgCvRQND-gQFCquHOl6Aw&oe=69DBD069',
      'https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/516752021_32464832023107641_716527373178920404_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=dd6889&_nc_eui2=AeH8-WcLX6sWMm-sHqjLk_Mr9bDrWGNHfMf1sOtYY0d8x-PvABikPGYR5fOeaw_YRDKUdscZOmj9y77WpRjHwGTu&_nc_ohc=BUWBT2VsHG8Q7kNvwGy6cqA&_nc_oc=Adrz6p6Gwuz0yaxsC29npv9Q0-LZrFYqbKv6Fc-a-rEQq9DFdewJ2j648WeXTpFS-jQ&_nc_zt=23&_nc_ht=scontent.fsgn2-7.fna&_nc_gid=CBTm_quguUmh8wkOy6O9OQ&_nc_ss=7a3a8&oh=00_Af1YizrJvXq4K81qtDb5ZtsuOAcq802ECRLDz5tlnILwKQ&oe=69DBD083',
      'https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-6/518082133_32464832286440948_2026784196479626529_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=dd6889&_nc_eui2=AeHk1AdBJlx3Y9R_gdHER3NsWXm8ukp1MqNZeby6SnUyozCxtr6z5m3IPCde5Dl1BE94I_jUYJ_N5ioLn4JhMUdT&_nc_ohc=73qOCBf9TS0Q7kNvwHbcOcH&_nc_oc=Adp0vhM-vIrulmLKlGkOYz7s1L22JvDnRnTmzBm8Kn0ga9w0Ig8jtp8yy7RFyvvgx5o&_nc_zt=23&_nc_ht=scontent.fsgn2-9.fna&_nc_gid=hjK-3LAm0x79dQdZZbgjwQ&_nc_ss=7a3a8&oh=00_Af19EsVfG8EAo4lMXbuuSrWv66dhE1dhjV61DWwohub3wA&oe=69DBD4BC',
      'https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/516939300_32464832343107609_3746173665064764127_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=dd6889&_nc_eui2=AeEqjtqYlxK-BQjCWD8G6JDndguSFfshgEx2C5IV-yGATDhGMnMVCQMasopbm5F-Z96THgU4PcUey-VTO5whaY9b&_nc_ohc=20uY8PBVtDcQ7kNvwEWZ2fp&_nc_oc=AdqcrHwFA5u2K34K6VjvoYzk_ePVVvTE9ZzNMDBx2GZbQvKUUrSyFvakRdW-0WQf2L0&_nc_zt=23&_nc_ht=scontent.fsgn2-7.fna&_nc_gid=mO6QrWLJieRwy9ZR4PxfBQ&_nc_ss=7a3a8&oh=00_Af395QU4kvtW8ZQ65N_zYxLl_NhiUe5kBzf2adsAwageYQ&oe=69DBC73C',
      'https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/518107157_32464832026440974_7097267959584750732_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=dd6889&_nc_eui2=AeHdDQc4X4VwmApN5NvmnwKNIxFFDTmr_9UjEUUNOav_1XKcWanhkMaR_PTMyPRzSFxaPBerriaRFC81PqA3Ws49&_nc_ohc=Ep1LJ8uduQ4Q7kNvwFCLL9i&_nc_oc=Adq63ej_fI9C7FPYVd3vBkLKGDXO3CTOjEdzLuWDIXgWI4El2Oj7A_wZzlNjZRqg5g8&_nc_zt=23&_nc_ht=scontent.fsgn2-5.fna&_nc_gid=umrIKnpOrLJ9VHp6wccajw&_nc_ss=7a3a8&oh=00_Af3hDjL9V58lgXsAFZKgI4oWMB2cUAk4kaUt1R-p_3BdDg&oe=69DBA950',
      'https://scontent.fsgn2-10.fna.fbcdn.net/v/t39.30808-6/517582729_32464832299774280_3647500303318370887_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=dd6889&_nc_eui2=AeFhX_EE90brQHgKAQECldueGibtWHrpgpwaJu1YeumCnIM5t4YleCo5qVbjzG3tgv0XUxQ6EywICCJeVdsfm6Ou&_nc_ohc=0hmPv3x0iZwQ7kNvwG3R_Gh&_nc_oc=AdqNJB6hUebnVvv0ShW0gtfacis5nUuO-Pk1GHGTNlxyQDLK0ZKwnjd1xHeIgFHGIPE&_nc_zt=23&_nc_ht=scontent.fsgn2-10.fna&_nc_gid=P9Ofjat1odVVaj_JUugLFg&_nc_ss=7a3a8&oh=00_Af1jUZvZjLASqj3K_N1azl8zOAUrGsQLk1Vl3z0BmW2lwg&oe=69DBCEA6',
      'https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-6/518367143_32464832273107616_2703726118177510332_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=dd6889&_nc_eui2=AeFCQfWSUe0iP6ftmezUDOAzaePhC0SxDuJp4-ELRLEO4iqdD-Uo047ZR9pGIGOS79du8ERT_0qaXTvrD7ObRekb&_nc_ohc=XY9fu64Kl0kQ7kNvwF2XPtC&_nc_oc=AdoeaFNcY_drehPFsN78QCUBB9izxxh0Ot3hnUOZSzhHkUAxBbRhvpfkCAeGlQ9rnlk&_nc_zt=23&_nc_ht=scontent.fsgn2-9.fna&_nc_gid=tmHVUq212t2jSf-43tqOqQ&_nc_ss=7a3a8&oh=00_Af0cEEyqMt6Ww4YdJqTcw6QqTgKB-XO2StfebHNqGe3iZQ&oe=69DBC988',
      'https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-6/518332917_32464832379774272_7038822842179761353_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=dd6889&_nc_eui2=AeECWMfMs-17Qtz_8RkLXC9FD4XT0LP56wgPhdPQs_nrCN2HvV-4AOievIG_I9_OHy00HLEPSkXzk4SVQA0Oj33P&_nc_ohc=9D0Yj42x9e0Q7kNvwFOBXTp&_nc_oc=Ado4QriASo-DR0To1lWgZkdOft8YSKEdA7OocVcumdNg2KzR54dAVQmLSZd5lHLEc24&_nc_zt=23&_nc_ht=scontent.fsgn2-9.fna&_nc_gid=l5MIOnmIqN10Kf0Pr1j4Ww&_nc_ss=7a3a8&oh=00_Af1VC9Xn-gZthsWmy-98oN9PENi0s9J3IRJShqIwOAEwlQ&oe=69DBCE13',
      'https://scontent.fsgn2-3.fna.fbcdn.net/v/t39.30808-6/518354190_32464832359774274_2442017373691159599_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd6889&_nc_eui2=AeGibRn3SOYy6ifeqBKFFdXs9cTgwN1Qdpn1xODA3VB2mbOopDbbldsfAIEQumHo0jTxXturVUdSCoi3mAmbVfY2&_nc_ohc=g5vuSCaG7AYQ7kNvwGm7BUu&_nc_oc=AdqbPeyDgP0BtU5ahUFrULxKuUK2EHe5b2OHYEe5pA_3976FE2oVuy40SaU7XDMkguA&_nc_zt=23&_nc_ht=scontent.fsgn2-3.fna&_nc_gid=frYo98hoANZq2I2iM3xSMw&_nc_ss=7a3a8&oh=00_Af3aT_voqRpe-cEvr8LEUaso4KZvG9f-wU4JLUOGl2w6DQ&oe=69DBC3E0'
    ]
  },
  'tiger-x-otis': {
    category: 'PRODUCTION STYLIST',
    title: 'TIGER X OTIS',
    client: 'TIGER',
    role: 'PRODUCTION STYLIST',
    year: '2024',
    starring: 'Otis',
    styling: 'NI STUDIO',
    brand: 'Tiger Beer',
    description: 'Chiến dịch năng động và đậm chất đường phố thực hiện cùng thương hiệu Tiger Beer và ca sĩ/diễn viên Otis. Phong cách styling tập trung vào sự khỏe khoắn, hiện đại và trẻ trung, truyền tải tinh thần bứt phá và bản lĩnh của thế hệ mới.',
    nextProjectTitle: 'PEPSI X OTIS',
    nextProjectSlug: '/project/pepsi-x-otis',
    images: [
      'https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/614229865_4351823075106701_4853974182591297693_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeHX4mrMr8mYrBF_h6_6gIyenF3Ma7DRoDWcXcxrsNGgNWF5WauHxmLXBGtG5G_EszYTmtFheTS6qHAluxxR10Io&_nc_ohc=us1HhvmIKxgQ7kNvwEtjf0B&_nc_oc=AdpSvsYDZ9Qj_GNt5hH5HQSC9GjFHZNbOnvAaC6O7nxC0jG-irc0mRMaCi-tHrq6p4I&_nc_zt=23&_nc_ht=scontent.fsgn2-5.fna&_nc_gid=iXOtFzJqWEDZ-bDdazFvug&_nc_ss=7a3a8&oh=00_Af12QJ-oId-qGIX6Ubq96ki4mW95u2w7Iiavy3lg_MrpQg&oe=69DBAEE2',
      'https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/615436923_4351823188440023_3498636030926186137_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeFEOtU0EH-tGCuC2QRX8H8lz1gqaF65SxHPWCpoXrlLEa0Tlg17Bm8ZCDszQ08Q57bDZ8JkrXWR83oSJ4uCNAec&_nc_ohc=q8FUAG3FE9UQ7kNvwFGwesd&_nc_oc=Adp6f5k-ZtNOqirBPChkQWqwtPfuI3xpXa6jZdcrYR9CsnrutdW9TFQHtrs0qFPOGQk&_nc_zt=23&_nc_ht=scontent.fsgn2-7.fna&_nc_gid=v8kzE1gJ1dnf4AUq8JUv2g&_nc_ss=7a3a8&oh=00_Af3De34mflUPqFwl5Zqd0n6gZXdxVDXgz7zB8SmOZNCJzg&oe=69DBD89C',
      'https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/615433562_4351823261773349_3916980438731059374_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeHZ2hFRzKuT7VEe2BzoQeGy2FOlxXC7-SzYU6XFcLv5LFvM1vrtS4DXywNducpMkw93qOyPLXwwsxo0lNl_kWrF&_nc_ohc=8Jb3t0hOWEMQ7kNvwFL2k6Z&_nc_oc=Ado6Py1XY6pVjns3FGmrX9wp7HKclalBETcAlhIySx2Pt_fHEPOaZnooYgDnHSpRH4U&_nc_zt=23&_nc_ht=scontent.fsgn2-5.fna&_nc_gid=uO7CPOqXjR5VGF3fywj_kw&_nc_ss=7a3a8&oh=00_Af1whosPMNW0L4XWlCgdHEF8Q0gsgZjd8pIcZTdAn-Wn3Q&oe=69DBCD17',
      'https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-6/615209803_4351823155106693_5587392672069313922_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeEsUDmi1KkldiMvQfTgKTh6WXX4romT9T5ZdfiuiZP1PmwJvho7hyuh7lAQfQYI-YQAxsuFswDbzSmkUKU0FyZQ&_nc_ohc=8Oyk4wdvawYQ7kNvwEogmQi&_nc_oc=Adp8EQaHHjeossBpJN553NiYIpc5KWZ3isdUFKlbvvgiH47c8J1nxv8KBrHWoZvQhhE&_nc_zt=23&_nc_ht=scontent.fsgn2-9.fna&_nc_gid=q_TUcI1eg0npO2qxwNefIg&_nc_ss=7a3a8&oh=00_Af3en6lqrlTe1iEHU6YwCFmgnI3GdIxPLmvP_fYHhrGWzg&oe=69DBD6AE',
      'https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/615063602_4351823095106699_3952466710553794254_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeEchUxrUsBD5Iw294KGdTbmnHe2JQDz6GKcd7YlAPPoYiV4JqNfs3qz7o0vztsSt2E3WNLX16VPlmxJk38fs-j_&_nc_ohc=yjik3DJTPnYQ7kNvwF8cPEu&_nc_oc=Adp7txHtn6lsxqOpb6AoybLs8WK9SROhRgsczZ301dWntBSl8BeESbCW2qpVqQAtwbU&_nc_zt=23&_nc_ht=scontent.fsgn2-4.fna&_nc_gid=_VSHgAA0RabAvzVb0Tpplg&_nc_ss=7a3a8&oh=00_Af1B4Y-oNhsLazPn_TOXm-H4X7gF3M3wW6GiciI2qryPxA&oe=69DBAD65',
      'https://scontent.fsgn2-8.fna.fbcdn.net/v/t39.30808-6/615255067_4351823135106695_6625635574534314890_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeFM_AGdk_Dx4QnoaIwIqJ-YK5g0UN3AHa8rmDRQ3cAdrwD2JJv1dggr8KnkuiAemyE1GSTOI49_TlVKy2wOA02N&_nc_ohc=bh3h-P4jp6kQ7kNvwHbvuTs&_nc_oc=AdpOtK7LMIku9KTP14n9uyKLJLCXbpYcZpsBMBXGWew3w-tPweCEPYvFR5uG1H6Pl-A&_nc_zt=23&_nc_ht=scontent.fsgn2-8.fna&_nc_gid=4l2N73AN4a-7D-BNKPkVSg&_nc_ss=7a3a8&oh=00_Af2Q2gKGpBgdjwJ2AMPofbko-rJD3dkGoplAi0G658yW_w&oe=69DBC18B'
    ]
  },
  'pepsi-x-otis': {
    category: 'PRODUCTION STYLIST',
    title: 'PEPSI X OTIS',
    client: 'PEPSI',
    role: 'PRODUCTION STYLIST',
    year: '2024',
    starring: 'Otis',
    styling: 'NI STUDIO',
    brand: 'Pepsi',
    description: 'Một chiến dịch tươi trẻ mang tinh thần sảng khoái và tràn đầy năng lượng của Pepsi. Sự kết hợp cùng Otis tạo nên những khung hình màu sắc, nổi bật cá tính bùng nổ, phù hợp với định vị thương hiệu dành cho giới trẻ.',
    nextProjectTitle: 'PEACE AND LOVE',
    nextProjectSlug: '/project/peace-and-love',
    images: [
      'https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-6/612137922_4347104395578569_546602123754118448_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeFb_8j8OlyqTk8ltJc-9xpmYYzU90uf9cphjNT3S5_1yuCxXtZ1IETxDx6t_JpmexVC-E966FWw58DoMNofZrzT&_nc_ohc=i2ODbzdDwIkQ7kNvwGNRsFF&_nc_oc=Adqb7IWpVVQ3PzlOx1uHhzMJQcdc4vwU3V6rXNsLwH679OGuR61DAnizAsfjQGrvzt0&_nc_zt=23&_nc_ht=scontent.fsgn2-9.fna&_nc_gid=y1YpJVNVEVPsvW-xK_0vsw&_nc_ss=7a3a8&oh=00_Af15SWbaRDlzGnQEhOP44zwe3MR87ZxFkXhyV_Cie8uaPg&oe=69DBBB75'
    ]
  },
  'peace-and-love': {
    category: 'PRODUCTION STYLIST',
    title: 'PEACE AND LOVE',
    client: 'PEACE AND LOVE',
    role: 'PRODUCTION STYLIST',
    starring: 'Models',
    styling: 'NI STUDIO',
    brand: 'Peace and Love',
    description: 'Chiến dịch mang thông điệp tích cực "Peace and Love" kết hợp cùng ngôn ngữ thời trang đầy phóng khoáng. Các set đồ được chọn lọc tinh tế, pha trộn màu sắc tươi sáng cùng tinh thần tự do, thể hiện trọn vẹn thông điệp của bộ sưu tập.',
    nextProjectTitle: 'THE SOUL - DUY DƯƠNG',
    nextProjectSlug: '/project/the-soul-duy-duong',
    images: [
      'https://scontent.fdad1-3.fna.fbcdn.net/v/t39.30808-6/597927325_122116368621052203_7161261426709817296_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeHdvNRL-5HaU4pw2sYt8K3gquEelYgn0U6q4R6ViCfRTh1SoGZhzMSsO6m8QwhTQubcNNrIpgwAJ-wLPwtpFPXX&_nc_ohc=3E8RKh0cNsYQ7kNvwGziSZW&_nc_oc=AdqjartF8ghZD2qdSoYJkZgx0UlbUilaFalsETcFwS7bIqFL2F28D6Rw0hR3wAra3Ug&_nc_zt=23&_nc_ht=scontent.fdad1-3.fna&_nc_gid=sNj9DLcCQ8AbrVcHQkAA6A&_nc_ss=7a3a8&oh=00_Af0a1Y0igWmU5SZWKWKgGzP1rS_dsfSIC1b9np2lqL483w&oe=69DBB7C0',
      'https://scontent.fdad1-2.fna.fbcdn.net/v/t39.30808-6/599258168_122116368591052203_8552509857936635621_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeERLIEM2Cx45m1kCUKWmPjgvZ3DvVMKpc69ncO9Uwqlzt9raWKH54uVVWyyQEMS_zaWdV8Ti89fBWNi3M4ooTSK&_nc_ohc=HoOps45wbkEQ7kNvwG7141o&_nc_oc=AdrjX-eZRTKzzscTC8CCMllK6Xh61i0IhFfe6kE_HQMOgLsNzqG-L7d0PAKaVm00MNA&_nc_zt=23&_nc_ht=scontent.fdad1-2.fna&_nc_gid=QS4GYktAPtmgpZn_rm3Qgg&_nc_ss=7a3a8&oh=00_Af3m6C67dr2k1r6PvYB3BEsblpo4PIM0nyyFeBLt5-nWNw&oe=69DBAD31'
    ]
  },
  'the-soul-duy-duong': {
    category: 'FASHION STYLIST',
    title: 'THE SOUL',
    client: 'DUY DƯƠNG',
    role: 'FASHION STYLIST',
    starring: 'Duy Dương',
    styling: 'NI STUDIO',
    brand: 'The Soul',
    description: 'Bên trong mỗi con người đều tồn tại một ánh sáng hào quang riêng biệt – không ai giống ai. Bộ ảnh khai thác sự đối thoại giữa ánh sáng và bóng tối như một ẩn dụ cho hành trình khám phá bản thể. Ánh sáng là sự soi rọi bên ngoài tượng trưng thức tỉnh, bóng tối là uẩn ức nhưng đầy sức mạnh. Hãy tin vào chính mình, chấp nhận mọi phần trong bạn để thật sự tỏa sáng.',
    nextProjectTitle: 'RED FLAG - DUY DƯƠNG',
    nextProjectSlug: '/project/red-flag-duy-duong',
    images: [
      'https://scontent.fsgn2-8.fna.fbcdn.net/v/t39.30808-6/524683687_24377862585233635_3725344598948076531_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeF2ocfUdk1s6WqjfHXVRvn4kh302YsBXqySHfTZiwFerG8Hw5nLxAs9tZW6SjRR4UqhIvEK-RHUjEX0r2pRHMKf&_nc_ohc=mJiYTgXvLlkQ7kNvwEkgAhj&_nc_oc=Adr_VuZQUULP8iIjJmOS7ldPWIFVBQQW0f9wF5dRepVbzdenKWrjKRhbdzulU3NTsFc&_nc_zt=23&_nc_ht=scontent.fsgn2-8.fna&_nc_gid=D--fSp7GFDWFNekkL9Getg&_nc_ss=7a3a8&oh=00_Af0f2I9BfebBqxv05F786jHte7YdOBYny9Di8Z_Qzs1uvw&oe=69DBCAB6',
      'https://scontent.fsgn2-10.fna.fbcdn.net/v/t39.30808-6/524100738_24377861218567105_8928311758166622393_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeHYgbebx6nfsUEub_7piI5uo51XjXxHahGjnVeNfEdqEdKIsXupxMWj2YGb2wQ-R7wtBinHBb7PBBKNajTCSHGR&_nc_ohc=cySZheV9EKQQ7kNvwFEXqM2&_nc_oc=AdrP39tLMVlrortQpDW1Yl9ckGTRXFK5qiyCzl7G39h5n90dZ7AMf2U4Hw7yTek0gNk&_nc_zt=23&_nc_ht=scontent.fsgn2-10.fna&_nc_gid=aXetUcF89C3EsicXytD5zg&_nc_ss=7a3a8&oh=00_Af1Howw9W3nV9ZUptbi4Fv15d46FkckFtJI6n-5BMra6QQ&oe=69DBDCDC',
      'https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/524157224_24377868348566392_7762573019288259398_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeGYUZ3qCmFbNPC6AnuUayFGp-LjQBh5nVOn4uNAGHmdU2l6sM6drWMaS_l5byi9B9XevHRfhexzcciFVSY3hRUK&_nc_ohc=Ln3mZv4vwNYQ7kNvwFAXeA-&_nc_oc=AdpPMsivvxl2Daupsn2tTK5BIrqvQjtFNrxtWE2KV3BIyVdTMmmX1_fMFy_GZjlW29c&_nc_zt=23&_nc_ht=scontent.fsgn2-4.fna&_nc_gid=7FxdrWOO_SRf7jZVye6IFQ&_nc_ss=7a3a8&oh=00_Af0bGLMUwGLr__4oCENDGcYxzW0EyqqZXxcGCScvyeKfnQ&oe=69DBB309',
      'https://scontent.fsgn2-3.fna.fbcdn.net/v/t39.30808-6/524642198_24377837471902813_4632717119375759465_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeGKZ_UqHHMpTfbcta3fFrWncv7MVdVHG8xy_sxV1UcbzA7Ll13k-rWQBXsDQTgffMi3m00dwVHXJWV4uQd-RRPF&_nc_ohc=O7Flii8mSigQ7kNvwEQJVPU&_nc_oc=AdqE8eYCpj7uF-j7GCMq0C2t0H-7LqG2Iur6Uc41qgOEKcGx4dYCSD98nhAi4F0AFbg&_nc_zt=23&_nc_ht=scontent.fsgn2-3.fna&_nc_gid=DjxK7s0r03Bh6wVFmg3uLA&_nc_ss=7a3a8&oh=00_Af1DZmsn4sOJ4kBOnXZ6qpyAvNK8TnkfgFKVzNAK8IpKYQ&oe=69DBAF09',
      'https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/524606199_24377870941899466_8336700682413000303_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeE2aLXB7_AwR96bj65qGOeY7X2fwBkJztHtfZ_AGQnO0WxVS8ykTpMocqQ081fHpSvjVg9WB2AxD4P5WPNdUrQI&_nc_ohc=TP7zCofXhPUQ7kNvwGtUyiS&_nc_oc=AdoqXBpJ0BltqMbsXlA56Ddl2HIsxE4o5XTBtzOC8W088Ue5E52ZuoqvSJjiKgJLH5c&_nc_zt=23&_nc_ht=scontent.fsgn2-5.fna&_nc_gid=vip2-yx-WQdEVwvM5z6yRA&_nc_ss=7a3a8&oh=00_Af3CX256XboiSP0MhMWHVWbiDrZ9QtYKzj71mMWSk9JQJQ&oe=69DBB22A',
      'https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/524769156_24377837151902845_4829305879298458355_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeHMEdaUY3Xu6BBcyUGM7Lxmkv6FTu9jKO2S_oVO72Mo7UKAu8X7lpl7T4CZ364nAYS2iU0TRkkRGivv3UOOPDyE&_nc_ohc=glpwhwZLdrwQ7kNvwFmCYQ5&_nc_oc=AdqpAiWXFoKPAE8MDqt9mT3NLMI_C8ynXOC6a6FjkXaEXFLTPZKWkyA8vVr82Yeu2kw&_nc_zt=23&_nc_ht=scontent.fsgn2-5.fna&_nc_gid=FjRVl41OdKS-UBVd9ngROw&_nc_ss=7a3a8&oh=00_Af2bEFsUf4s1vhhOh5f9YD8PugVbQghLz9B_gz4YmTN_qQ&oe=69DBC009',
      'https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/524606199_24377885188564708_8897838870291066826_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeFoIE6rpma_da4XIoPOykhtFJW0o66ao2cUlbSjrpqjZw7LU-m9Ix3qFTn00hPUirmzjLATqw7RlohGV1xyWitu&_nc_ohc=dMLnPaxBDisQ7kNvwFEovlz&_nc_oc=Adr_KipOmGq2jsAAzwWbOWNeXdNrT1brtupILOhILAUkNsq14oeWXV7WWbgzbA1T8cU&_nc_zt=23&_nc_ht=scontent.fsgn2-5.fna&_nc_gid=u7WD8v46wFQv9tPXdiU_qw&_nc_ss=7a3a8&oh=00_Af1HuHAgWoYR5JWMEINO495W6QOHr2kEi2D2UE1EiNv-JA&oe=69DBD16B',
      'https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/524595091_24377895215230372_8524312299928808856_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeGlYbzXRS3SyzpTQwkIooz_zzedxUUfEzXPN53FRR8TNd0tzd-WMluyUKt6tur6tmnS2Nxbk3o74onY7XOBFAt6&_nc_ohc=afWP8I9u9mwQ7kNvwGbUp8O&_nc_oc=Adq_-Wp-I0ubrSbpQ6AHeKaHvO2gVXWuQHFb4g_Abt_C67N9MgMHL_6uXorZobyzxN8&_nc_zt=23&_nc_ht=scontent.fsgn2-7.fna&_nc_gid=NbkV-mrIBFZnw-NwMjmS4w&_nc_ss=7a3a8&oh=00_Af19l5Vw55DCfpvzFPhVbPuNFm0V8kBNpdiPVc0C6Vf3WQ&oe=69DBDD86',
      'https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/524654862_24377906355229258_8143705851463233651_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeEO_L0MInwWu_0bEdHoAPB-4cdwnwR0dr7hx3CfBHR2vpDRXyQVO2i7cLt8fa1gpATDKXdNQyIaILQosVBLb3GI&_nc_ohc=Y4zc3trTmyMQ7kNvwHKJyOG&_nc_oc=Adokn3JuG2_XmUlztRMdFj-rIT0KLC5x2kxw5PkQ_tfqvbhQFe3c-gLh5yIGFnbKf1U&_nc_zt=23&_nc_ht=scontent.fsgn2-7.fna&_nc_gid=R_7UG9J-TwMTvT48hSo1NQ&_nc_ss=7a3a8&oh=00_Af2X4yZte6DgP4IQezW04KlZP7Zs6798AN8U2oChse5_Tg&oe=69DBE3DA',
      'https://scontent.fsgn2-8.fna.fbcdn.net/v/t39.30808-6/524172529_24377877845232109_1398796218234417894_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeEq3X0vbOk1ZtLO8LXvAl4DaY8yAQivAX1pjzIBCK8BfQulSd7KXMnuN43OVtd9I_u6SzuN8a2xP2axLQBAxU3y&_nc_ohc=QzVUlT4kpogQ7kNvwEs3EI0&_nc_oc=Adr4lSiYckSg6O2UmwiPEQRMMT_fXdvtCmxlQheLdr8xbSwaQ6Bjt9t5WuLTpv2fwok&_nc_zt=23&_nc_ht=scontent.fsgn2-8.fna&_nc_gid=1kOxWYP0LLU6RhoE78LbBQ&_nc_ss=7a3a8&oh=00_Af0N6CJfy848MiYI429Rqadoh699uHUcODCWA6JP1gPLQg&oe=69DBB83B',
      'https://scontent.fsgn2-10.fna.fbcdn.net/v/t39.30808-6/524198019_24377885555231338_4552416956820618430_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeFTUC0lSWOc0KiJXyOsXJuG1bnURbEsiiHVudRFsSyKIZaZYYeEJnr1HDWa-CHDuodXpFzKMK-6HDDVjFP3PLb4&_nc_ohc=xlQVq_J6pGYQ7kNvwGdLqxJ&_nc_oc=Adqd6RI8DKlK2sjVqRw5qZLBO-RlOzOhNFNRVVSkrne1jHjfiAwC5XX0aNVRidKkISk&_nc_zt=23&_nc_ht=scontent.fsgn2-10.fna&_nc_gid=aKCuW0qeBpYwiQ-O89XaeQ&_nc_ss=7a3a8&oh=00_Af2b2E9iRM4WpBlDor5kM1BDjN-EGLCJdoqAlj1IyS9e1Q&oe=69DBB6D6'
    ]
  },
  'red-flag-duy-duong': {
    category: 'FASHION STYLIST',
    title: 'RED FLAG 🚩🚩',
    client: 'DUY DƯƠNG',
    role: 'FASHION STYLIST',
    starring: 'Duy Dương',
    styling: 'NI STUDIO',
    brand: 'Red Flag',
    description: 'Chiến dịch hình ảnh RED FLAG mang phong cách cá tính, hiện đại và bứt phá của nam người mẫu Duy Dương.',
    nextProjectTitle: 'KAT GREY',
    nextProjectSlug: '/project/kat-grey',
    images: [
      'https://scontent.fdad2-1.fna.fbcdn.net/v/t39.30808-6/518275320_24281077558245472_7895932398976482178_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeEeQuOUd7kjoB0hHyCebrFoutnzcZjqig662fNxmOqKDsjdnRFryDZ2VvFeFCOaYRGGLqxI2CG9JeCzf5XWV7da&_nc_ohc=dqn00b0HD_8Q7kNvwHM-YHy&_nc_oc=AdqPm15Ue9YequBlxGQ7RgagM_xAzrxHUuvm_i5w4lfsKWeBUn__roxJbmdxuy_KmeY&_nc_zt=23&_nc_ht=scontent.fdad2-1.fna&_nc_gid=NABgO3G9-q8EQFt3Vp2TDg&_nc_ss=7a3a8&oh=00_Af3_L2RxTnWqOxhMFMpO2arnbT-XEznQP_r21f8Qext-Bw&oe=69DBD12B',
      'https://scontent.fdad1-3.fna.fbcdn.net/v/t39.30808-6/518386930_24281086441577917_2429133058359837182_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeE1_HqkSLhELWbC4RfNv7R_bCoF9I6LprlsKgX0joumuZ7bwLs9_seIOo5gzs8_idMGRRaQYzfbbZzqH0GMFqfk&_nc_ohc=XZPeT5qPsGcQ7kNvwGDk3Zr&_nc_oc=AdrPNtzxPwvzQz3CObIatK4u52GZP7lAMZyT-WAFFpUTsI9hW3lCfSr9T9LFsU8EMEM&_nc_zt=23&_nc_ht=scontent.fdad1-3.fna&_nc_gid=aSnCShrw65RWcQKhEM5ghw&_nc_ss=7a3a8&oh=00_Af2pCpwfQvNrYSXfUxDkpgtQCMkof14so63p1wS9UsQSPA&oe=69DBE11E',
      'https://scontent.fdad1-3.fna.fbcdn.net/v/t39.30808-6/518357520_24281099901576571_999526438448670209_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeFip2lSratylzKXKO6e-z7tgMzffPJiN7yAzN988mI3vC1yzxXzFCUX87-mSUrOq-vlxnEqwCJsVGJSJoWLg4Up&_nc_ohc=cYE5eSiH44MQ7kNvwEEFqpG&_nc_oc=AdpJIEIvd3Xxy1yrMiOttzbDXeHqGfBrrSOu0nXqRKvuxNXzTFHigw5Oygv8Umojlu0&_nc_zt=23&_nc_ht=scontent.fdad1-3.fna&_nc_gid=1WSAsGbmmfGPCYqQPv2O_Q&_nc_ss=7a3a8&oh=00_Af15LFaUW8bZwou178fyl3wENG6JbkCCeLpHKgdDmLDBRA&oe=69DBB9C6',
      'https://scontent.fdad1-4.fna.fbcdn.net/v/t39.30808-6/520195988_24281104858242742_1714141193329329940_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeHnk7uI8ukfZpe2V4aF5OYfuTFOtLvDtE25MU60u8O0TetBef57BIFrmU4Zq1WN0g-UEmwClHmFzuqDpD5Ha0I_&_nc_ohc=Q-dF34ehLAAQ7kNvwHStA2n&_nc_oc=Adr3oRgMmnjgNX-hrPhDpj87RLALzGR0z0u-lf-hw_K3d7UGjmgQ7Sv3fja5JhBNYVU&_nc_zt=23&_nc_ht=scontent.fdad1-4.fna&_nc_gid=eeG2J-ZRzqByJ1K8ceN_xg&_nc_ss=7a3a8&oh=00_Af02uXFc2Qpi5mz6HQsSJ4s-fXyDPNFVfdul21M8N5Yp0w&oe=69DBD276',
      'https://scontent.fdad1-4.fna.fbcdn.net/v/t39.30808-6/518364705_24281145424905352_6682563288891887565_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeFMvoX7sq_j8ePOBVK6OmwD6njlyfu3K0nqeOXJ-7crScO98HL5XvoYnF_bgk23s7Mwj__rhr3pvxdYiLWxLe0h&_nc_ohc=QjujjAxpSE8Q7kNvwFKQh9F&_nc_oc=Adp6Arbv-u0FazKnE-vVOt-Ju31q5n93YYu1U6VlU5jxyMNvIqJFaztUsWxlEM5blqU&_nc_zt=23&_nc_ht=scontent.fdad1-4.fna&_nc_gid=HdVAow3BBefd8fQ3Wp3gaQ&_nc_ss=7a3a8&oh=00_Af35IELgyKeQRl_O7mGiLbOItBQX4oZgVG_eOjcBFff2ug&oe=69DBD0FE',
      'https://scontent.fdad1-4.fna.fbcdn.net/v/t39.30808-6/518256821_24281122054907689_7415138620549491946_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeFk4_vBNahIXgUUoN-WxVIX28QQhRKLJ0DbxBCFEosnQASlfs3gwKb_NSu4q4tLb8OdogHCbTuA0dpoRbCwW18d&_nc_ohc=r-i-sH3-cOEQ7kNvwGT7-y4&_nc_oc=AdpxJCc3WTp04uPMK4vnqEZkapJNTz8Ri0ZnR26sdPJxikYNYzz6ixCII1Yb5Sit-NQ&_nc_zt=23&_nc_ht=scontent.fdad1-4.fna&_nc_gid=_VXtkFndfFCPV1zkpKQXUQ&_nc_ss=7a3a8&oh=00_Af2ApZk9CL41Pj-tKSG2oBaLXUEJ5OtrTByhSqd2rr9K0w&oe=69DBDE03'
    ]
  },
  'kat-grey': {
    category: 'FASHION STYLIST',
    title: 'KAT GREY',
    client: 'KAT GREY',
    role: 'FASHION STYLIST',
    starring: 'Kat Grey',
    styling: 'NI STUDIO',
    brand: 'Kat Grey',
    description: 'Chiến dịch mang hơi thở nghệ thuật đương đại, tôn vinh hình thể và nét sắc sảo của Kat Grey thông qua góc máy đầy cuốn hút.',
    nextProjectTitle: 'KAT GRAY',
    nextProjectSlug: '/project/kat-gray',
    images: [
      'https://scontent.fdad2-1.fna.fbcdn.net/v/t39.30808-6/507136431_2136311913541027_176772694904646231_n.jpg?stp=dst-jpg_s590x590_tt6&_nc_cat=108&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeFrMPPt7BXiHIlsmXx4CbBAfIW4R6prY3J8hbhHqmtjcsONP-9HS5SZwIB2OZ_JQ1APPkfUTISuZL7VCqDUw_va&_nc_ohc=IZLGWgebmBwQ7kNvwHAbWni&_nc_oc=AdpkJDX3oMVm754YzeaK6ITWOPtb0JJXsoR1OLr6wSH4lkW4hMO2kOFmfO6G7sgyvfY&_nc_zt=23&_nc_ht=scontent.fdad2-1.fna&_nc_gid=fY6o4EZcL2gXWReJRt2ITQ&_nc_ss=7a3a8&oh=00_Af3lQlflkIiQdKNiELrkA3bZ50wjEj3SbstNmCg_hqBaFw&oe=69DBD8FA',
      'https://scontent.fdad1-1.fna.fbcdn.net/v/t39.30808-6/506055630_2136311940207691_7339534928272107401_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeH_v26WwAz5zOu588-iY5ucU0-IdR9fpTVTT4h1H1-lNVRbMj0KlV1tKUS8rC4nDHWVzrr9TkYvbIEDx9M8V_aw&_nc_ohc=KAKmZeMbdbMQ7kNvwGP9yWE&_nc_oc=AdqDJiiNI4-75QWnAy9du0u3JdoyjG6G5qE_nJyyIqNcl2E1iqd8vEtV2WMJ8XXY5R0&_nc_zt=23&_nc_ht=scontent.fdad1-1.fna&_nc_gid=IMehcUKpMs8TX3HlPkJmUQ&_nc_ss=7a3a8&oh=00_Af1xOAnd_VZBHIg9OmbCSegdQ_OO1lAkzgJEJWOZxGFc4g&oe=69DBCBC7',
      'https://scontent.fdad1-2.fna.fbcdn.net/v/t39.30808-6/507182202_2136311920207693_4121274597598268673_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeHPuCdeHu1tfIHvcldYkU1ngjhYYR7BI1aCOFhhHsEjVkC9KMqzQi7sS7hZTTrpmOLhWISrMVDwuT-aXwel5H0T&_nc_ohc=YPGFuFkDEiYQ7kNvwF7OQdp&_nc_oc=AdqTZAOeV5K2MehT_C1NitnxIXR0__39GD3bycKy6JyuLGBox_1XYJbAvT17CT45AGc&_nc_zt=23&_nc_ht=scontent.fdad1-2.fna&_nc_gid=PkEWEud1dD_dyZx1CzRmIg&_nc_ss=7a3a8&oh=00_Af3HEnm8nIi-ecV-I2hDoTs0wd9JaIO2Bypn0IRpQ854rQ&oe=69DBDBEF',
      'https://scontent.fdad1-4.fna.fbcdn.net/v/t39.30808-6/507357444_2136311946874357_2787863642557905933_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeG8DcC4EuPPTC6TQn7iAHsxa45CCV1n2L5rjkIJXWfYvsun9edos6SsddgLRpCtQDLBraogaF1l_BNEvY_ee-GT&_nc_ohc=PCRp49fR5-sQ7kNvwF3I4-V&_nc_oc=AdqqQFSVv7JccAYS5KvgX0pBUKm8E-9nm6EnP2iU02DjLG3PDQ5N1JvqSlpsV7B59Wg&_nc_zt=23&_nc_ht=scontent.fdad1-4.fna&_nc_gid=XDRv0KYUJ3TjM8HnKELNFw&_nc_ss=7a3a8&oh=00_Af0FJGsF2eDhqcCRok1WK-NEErXHa2rZYcLSeU_YcEPr9w&oe=69DBE06C'
    ]
  },
  'kat-gray': {
    category: 'FASHION STYLIST',
    title: 'KAT GRAY',
    client: 'KAT GRAY',
    role: 'FASHION STYLIST',
    starring: 'Kat Gray',
    styling: 'NI STUDIO',
    brand: 'Kat Gray',
    description: 'Bộ ảnh KAT GRAY là một thể nghiệm thời trang đầy cá tính, phá vỡ những giới hạn để mang lại một góc nhìn mới mẻ và nguyên bản.',
    nextProjectTitle: 'KNOCKOUT - DUY DƯƠNG',
    nextProjectSlug: '/project/knockout-duy-duong',
    images: [
      'https://scontent.fdad1-4.fna.fbcdn.net/v/t39.30808-6/506407104_2240610429710257_6206307859238705151_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=dd6889&_nc_eui2=AeE8lI6uGM3xW1yiFEXcku4eVduHFx4vDbBV24cXHi8NsJjjEWWmRMW8Jf6KuEMZEHke2uadDKUUDxSI8ltd65du&_nc_ohc=sCKuEHh3coAQ7kNvwFHxGus&_nc_oc=AdpdMqTz_WdBLhDSNcQqUXo_Io0VhgQZKVgp-MdrpDWynhpMEPD1_SnpXWr-KiROg6I&_nc_zt=23&_nc_ht=scontent.fdad1-4.fna&_nc_gid=wx-2W04duVMt7ZKCSSVpJA&_nc_ss=7a3a8&oh=00_Af0aEItzLLLP8dUSRbCBTCkK689PrGWWeUew_VRiok39HA&oe=69DBD7E8',
      'https://scontent.fdad1-4.fna.fbcdn.net/v/t39.30808-6/508224947_2241066896331277_6491471100331641311_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=dd6889&_nc_eui2=AeHXynQk9N7X9UVc6XrLpd5VUNa4PKCVZZhQ1rg8oJVlmKX9yImYRSGSWl5tOh-ZHJsQasFLd1F1Zyu-m54MrEpL&_nc_ohc=h4SJm_-scwIQ7kNvwEZiMnd&_nc_oc=AdrDKUT73wfSM9htuRo0AfF_5G_rIp_i80Wl05LFycfa3kqnlOTo7KXM_mNjErNExXs&_nc_zt=23&_nc_ht=scontent.fdad1-4.fna&_nc_gid=SPrMdH5R8LD74rIf-fLrMw&_nc_ss=7a3a8&oh=00_Af3m7s2VDbf1mvPh-C_T1g9w7NRLx0U6JPab9rURSrottw&oe=69DBE322'
    ]
  },
  'knockout-duy-duong': {
    category: 'FASHION STYLIST',
    title: 'KNOCKOUT',
    client: 'DUY DƯƠNG',
    role: 'FASHION STYLIST',
    starring: 'Duy Dương',
    styling: 'NI STUDIO',
    brand: 'Knockout',
    description: 'KNOCKOUT là một dự án thời trang với những cú twist ngoạn mục, thể hiện vẻ đẹp uy lực và mạnh mẽ như một võ sĩ trên sàn đấu của Duy Dương.',
    nextProjectTitle: '“SILBER” NGUYỄN NHƯ VÂN ANH',
    nextProjectSlug: '/project/silber-nguyen-nhu-van-anh',
    images: [
      'https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/519063758_24313488185004409_398642980213879668_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeG3WDqtf_WJ9KzlSgX_3tNKyfbpP2wsV0jJ9uk_bCxXSJhrfIUiU2fBnhF5EQsbSSgecgH4krR0BvrJwLFH4wHW&_nc_ohc=fq4GWF_nblUQ7kNvwHZasvB&_nc_oc=AdpwhT8oCF1DI70DeyGYGnEeodT_0aDnLsJTAl-g_nwmzsQGYpf-4cnwiXq4FrTcSNE&_nc_zt=23&_nc_ht=scontent.fsgn2-5.fna&_nc_gid=NSSaiOAfworQ4_t8hZ28OA&_nc_ss=7a3a8&oh=00_Af2nfF-VrwZjUZknMxrYD7z3nuKbplXjzkBYVdtBUtHrqw&oe=69DBC56F',
      'https://scontent.fsgn2-8.fna.fbcdn.net/v/t39.30808-6/521533289_24313482258338335_8904546724961124144_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeFp6ns042hhUISo54Ys-MvAMEZI1A8fVcgwRkjUDx9VyI1BIX948Nz-e04zYtcPAvxOPOaATcGIHJ9jlS0iFHeg&_nc_ohc=gCOyS7QQ6QsQ7kNvwGNhSew&_nc_oc=AdrlhkG0Pkyd5Hof_h4itSd38ActJ8C-vqrBWrGckKcO4SMlEiSfivvaBrqsaRoXH7M&_nc_zt=23&_nc_ht=scontent.fsgn2-8.fna&_nc_gid=x67jCG5-oxHwEZe-6BOZsg&_nc_ss=7a3a8&oh=00_Af2gBuMCAaJyPdtwSovPrxIuuJf2bn63jN5YOEGQxHDiNA&oe=69DBAEB9',
      'https://scontent.fsgn2-3.fna.fbcdn.net/v/t39.30808-6/518250779_24313486771671217_6419735254869154129_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeHM1oCpXJQORse8GACroAVg4T2RRoWGvhnhPZFGhYa-GXHv4vMJ_TBe5Y4LvvrVElG8DYb-kD-wNRWebuuh8dbe&_nc_ohc=fV8r8FnYc0UQ7kNvwGJuLys&_nc_oc=AdrqWhBj5Y_q3PeX9T-f3eFNZy5padMSbYHseil_kEHqvmKT26Bl2FlLxB1ecRu3jb4&_nc_zt=23&_nc_ht=scontent.fsgn2-3.fna&_nc_gid=GJRLYRyggpV3XLqeUdbN6g&_nc_ss=7a3a8&oh=00_Af1eEVyVZ0kPTedCSTDY_6uVH8NWaeufKV-J9uoObfo5yw&oe=69DBB62A',
      'https://scontent.fsgn2-11.fna.fbcdn.net/v/t39.30808-6/518404848_24313466221673272_6298095493533861246_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeGRf5-pNTz_TWRaBu0fDs07Xzpw0MWAfT5fOnDQxYB9PrpVUfbFFIxZanr5G5bhoPVCAt6oPHWwrTk7nxcw8VPB&_nc_ohc=_N7t31vBWKIQ7kNvwFRnZxH&_nc_oc=AdqbFq-IZ8J_9brVB-WDCbPH9Gf9Mym5Z9TzAX7lSVGG7_AfBQNAmL_2WE56yIgnuAQ&_nc_zt=23&_nc_ht=scontent.fsgn2-11.fna&_nc_gid=pcsypJ2XcGyutLdC6uEYXQ&_nc_ss=7a3a8&oh=00_Af2Kk6UBrKCfP8WkqzjeEh3EArYN3u2v4lt7k9ik-MGbXQ&oe=69DBDDE2',
      'https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/518404688_24313480115005216_6349770918123476925_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeHFGHUQ7dFAZHjY861G9JoUBmYatlJMVMIGZhq2UkxUwhruYqNNfxTQqmj9rc7ZCndTIVPhfFPQuByrwpaRn9JS&_nc_ohc=ACEReLcNploQ7kNvwHnoeRU&_nc_oc=AdqVUGEBw3dboOOspdZx5K7EY51hgix7d6Jh-G7G24TJLAYpFiA3MLzzaL3vdrRUswc&_nc_zt=23&_nc_ht=scontent.fsgn2-4.fna&_nc_gid=_TwzFB0roaIlJ87ySalnLw&_nc_ss=7a3a8&oh=00_Af0sfdmX5JAh69y1JTmZl3Es_yHaWU-t4t5EVqGoiUEfBg&oe=69DBBF1D',
      'https://scontent.fsgn2-8.fna.fbcdn.net/v/t39.30808-6/518103648_24313452975007930_878851770913797411_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeEHXdKg-O-nlmX-tZMy83eoF5Dh2fm4zT4XkOHZ-bjNPijSOAuizf5WjDjx_ua8v_u2ttozDxONQbJjnpG-AnBt&_nc_ohc=i-Ww7XJaZ64Q7kNvwFqIvvW&_nc_oc=AdokJRa2-KK_1DqAquYnD58gWSBqRvoYWd9OYfp6cjrkKZ5NQW7-o-99V1scQcUsQbQ&_nc_zt=23&_nc_ht=scontent.fsgn2-8.fna&_nc_gid=HT0TQgUH4wl2MyJQ8klANQ&_nc_ss=7a3a8&oh=00_Af1_BUtKKj1bkQMxpA_ntRLDqiydq9LPSoUcj058pa0JAA&oe=69DBB9E9',
      'https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/521708609_24313467641673130_4298585350546473132_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeHHlAaOXuBbC-Ii8mCXXvEMbMKDl3x3jrNswoOXfHeOs8Q4FqvoI9bR9iq6ImOq7BFbGZ5VXXQu7s_6fxHjCLq0&_nc_ohc=B_XOr56zDOwQ7kNvwG5J3vV&_nc_oc=AdpN3koVtT_jVNkyuKmwWtKDj0laK5hnTSiX9JJ16fvZJIH6c8jCFRPBmDqFyUKyTRA&_nc_zt=23&_nc_ht=scontent.fsgn2-7.fna&_nc_gid=Txgq98TzWfwZOvd2g0OgFA&_nc_ss=7a3a8&oh=00_Af2kZEC8aIM_lQUtukkNMxi8ZQTlpglFV2aGShStsVKZAQ&oe=69DBAED0',
      'https://scontent.fsgn2-8.fna.fbcdn.net/v/t39.30808-6/518670868_24313463198340241_4990741997679163902_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeGlKQPDUDaNsDv_V8dBuOL406h9LfW0_K3TqH0t9bT8rUmZ3qaplp3Hiswo3CbvSovPQZOF7e7Cwgk3Rp4-2UwS&_nc_ohc=v7Uo6L_UWEAQ7kNvwFdC37q&_nc_oc=Adq00fEFSKY7sJ7ly9d4hGTcQBPy3Dqzrfw5IsTA6WD5GsHCAyo7uJFnpfT9vzZ8EkU&_nc_zt=23&_nc_ht=scontent.fsgn2-8.fna&_nc_gid=KdEeg_3dMcd6TaM0orAaQw&_nc_ss=7a3a8&oh=00_Af1Nv81GbNBxu8FWSIRAPLq_MRuIG-qAzK3p_NXXiYChOg&oe=69DBCBD7'
    ]
  },
  'silber-nguyen-nhu-van-anh': {
    category: 'FASHION STYLIST',
    title: '“SILBER”',
    client: 'NGUYỄN NHƯ VÂN ANH',
    role: 'FASHION STYLIST',
    starring: 'Nguyễn Như Vân Anh',
    styling: 'NI STUDIO',
    brand: 'Silber',
    description: 'Bộ ảnh mang tinh thần thời trang cao cấp, thể hiện vẻ đẹp sắc sảo và cuốn hút đầy bí ẩn của Vân Anh.',
    nextProjectTitle: 'AQUAFINA FASHION WEEK - DUY DƯƠNG',
    nextProjectSlug: '/project/aquafina-fashion-week-duy-duong',
    images: [
      'https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-6/486486843_2159596027828897_6398116900259723608_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeGgucB9jW2wX6Xtut9qLDCaipRyJqJuaKOKlHImom5oo8nt9ipMaKA93n8YtuXNFPr4xzsSU1HXxde9WKZ57EZQ&_nc_ohc=HF2dRDCwPtMQ7kNvwF-gv8e&_nc_oc=Adr_ishnuS_3hghsxBowGyVFMyeqGI5cYSN9bUMYTT9CC60ZEBWNS_OT1GzUZrz2dfA&_nc_zt=23&_nc_ht=scontent.fsgn2-9.fna&_nc_gid=l2izMZBacZZ95UorVBj9hA&_nc_ss=7a3a8&oh=00_Af1aCOOltDl-79pto1J-zhD3q9fRsV5N3cwkHoiMzo_caw&oe=69DBE620',
      'https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-6/486247650_2159595971162236_2840233660709987272_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=103&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeGj2g3-Qi75pa3aYU1023vp5XS7itFSRirldLuK0VJGKkjFwIz4w8hzaVO_kXEQt7DG2QApj9ndPCkOGroccvP7&_nc_ohc=F6UjjJlZcY8Q7kNvwEBzFZW&_nc_oc=AdpBNoO7PA6JxG1iyInwJ4cajoiwO2IwWF_ga2oO9Rj-yrC1NDCPZX-yr_HWwk9sRUw&_nc_zt=23&_nc_ht=scontent.fsgn2-9.fna&_nc_gid=EB8t-XXZPxatVb9BfJCV7Q&_nc_ss=7a3a8&oh=00_Af1Id048-V3LFke20AluKpo6-mBlSDgPyHahnK6anvzOxA&oe=69DBBC1A',
      'https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/486154225_2159596034495563_1626310035773452389_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=101&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeGdOQkCG_UJcvT1LoolsSEJ0SdiYFNYqpTRJ2JgU1iqlPXOf1bb8hLpCS5_h-qksKyoMs2yKAqlm3iVSuMc-m-9&_nc_ohc=63GQNqjpX3MQ7kNvwHiP-Ls&_nc_oc=AdovPYnDWfVLrlwnkokMdx0C-ontGjyUIG-NQ4_de3VEWuwLUItg70rAdcEby8Z-V7o&_nc_zt=23&_nc_ht=scontent.fsgn2-4.fna&_nc_gid=Av2kmx-o3MEPL5RW7eASXA&_nc_ss=7a3a8&oh=00_Af2Bw6L7Owb_mZHuWtbi407CSXLOgERZR3ew97A3I1ibAA&oe=69DBD222',
      'https://scontent.fsgn2-3.fna.fbcdn.net/v/t39.30808-6/486387224_2159596024495564_4848510797503649410_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=107&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeHBHf86Qr5HTpw7j5K3Jx9c53iJJo6O_17neIkmjo7_XrzTZ7PsLhH8A-MowkCsavip0FkgeKVd-YFDbdKAE9V2&_nc_ohc=O9gjfZYDvWUQ7kNvwFJ9i56&_nc_oc=AdoyewTo9z9BrTUHlDkw9QYZiyhZOOE4J__NWLo_OfzgzpL7Vbpug8A7vMLfbJpC_0Q&_nc_zt=23&_nc_ht=scontent.fsgn2-3.fna&_nc_gid=2l5pK_SFMBhMVCCySoXKAA&_nc_ss=7a3a8&oh=00_Af3UfeGZ4XBqcdNshsnEVoB3aDoGVJOhM45NdaDqORgXKg&oe=69DBC588',
      'https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/486003867_2159596157828884_3108062805409018501_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeH4xLx5fENPNzKPKa1AmHSeTD4gN5mUy9lMPiA3mZTL2dX8Rfak3JhE9NHYPcsx6q1nPW69WELlh24TOu5jWF5P&_nc_ohc=7XVrvw9EIHgQ7kNvwFGV1s9&_nc_oc=AdogIoNifCnEgskSklbyofvTj7cWkDHRr4F8LJf6JY__EF7d9rmG61Qyu_FGXs_vpdE&_nc_zt=23&_nc_ht=scontent.fsgn2-4.fna&_nc_gid=F6NXeVNFbsR4hHMiRzrX2w&_nc_ss=7a3a8&oh=00_Af2Fq3eht8VsG-O8ZC3tEfhc-vVMabJjoGc_jF-zFx4WfA&oe=69DBCB65',
      'https://scontent.fsgn2-3.fna.fbcdn.net/v/t39.30808-6/486409633_2159596021162231_735968604427325629_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeG6Y6jdlm8MZPoovhSYIssUOXi4CwH_8Do5eLgLAf_wOmBtS3wGdSZlmfOoxjfUYrH8nRTPxUoLGHXEitY5qnEu&_nc_ohc=_MrPfJVsSywQ7kNvwHcgtww&_nc_oc=Adr4A7CWQ0qlmVi1JSjSuHdLIbvFuK-MUBUpmDnblrXWG8VaA4Cc5xGUKLoPL9u0st0&_nc_zt=23&_nc_ht=scontent.fsgn2-3.fna&_nc_gid=7rJTgwQA6L9_he3Hvkj_dg&_nc_ss=7a3a8&oh=00_Af2ne8GNeJtOTgWYC5HnbOn1d27dEhrfLk_iF4AslBZK2w&oe=69DBD8C3'
    ]
  },
  'aquafina-fashion-week-duy-duong': {
    category: 'PERSONAL STYLIST',
    title: 'AQUAFINA FASHION WEEK',
    client: 'DUY DƯƠNG',
    role: 'PERSONAL STYLIST',
    starring: 'Duy Dương',
    styling: 'NI STUDIO',
    brand: 'Aquafina VNIFW',
    description: 'Trang phục thảm đỏ nổi bật của Duy Dương tại Aquafina Vietnam International Fashion Week, kết hợp giữa phong cách streetwear năng động và yếu tố thời trang cao cấp.',
    nextProjectTitle: 'MY FIRST COMPCARD - DUY DƯƠNG',
    nextProjectSlug: '/project/my-first-compcard-duy-duong',
    images: [
      'https://scontent.fdad1-3.fna.fbcdn.net/v/t39.30808-6/516748448_24224936787192883_7498671120094180424_n.jpg?stp=cp6_dst-jpg_s590x590_tt6&_nc_cat=104&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeHg_f1j2Jb9zB0jP4A8i9aUH_LdWvY_0H8f8t1a9j_QfyGjhNuZgoSkCRxUM2bUgf4JyT0NQnsnlJUK5PbY1B12&_nc_ohc=mbS-CkUuGpMQ7kNvwF2tZNL&_nc_oc=Ado_DixmeXoG6qcyGbUrYJKCrPzRHXdaeY-115GMvnJ40cjiB774FkKxcQNh9OG-VO0&_nc_zt=23&_nc_ht=scontent.fdad1-3.fna&_nc_gid=6TOJE0x9iu4M72StK5vs9Q&_nc_ss=7a3a8&oh=00_Af2WjqX9TqP0EuRVzBdbqgtpgCQc2DWXp25lqOXprt1uEg&oe=69DBC9E8',
      'https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/516839560_24224956297190932_1119842848644819158_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeGdXOJ3_okrK5EUkz_K2vt0WBN5EaPP6ZhYE3kRo8_pmAKVxbYm7T1uTSzkzeM0ClvkljzlH6CtcKKTfVH6aica&_nc_ohc=i1GtpexRugEQ7kNvwHYNp0r&_nc_oc=AdqkgKxw5i3mXvIMIv2DVi-OFmXmP2FUO2PGtue-no6xARJqztDFidD5Omi7NEaLnDw&_nc_zt=23&_nc_ht=scontent.fsgn2-5.fna&_nc_gid=28JYAOqFrqDuvqxN8vnn3Q&_nc_ss=7a3a8&oh=00_Af3ds4YD6ijqATv4sTNQ_rlJRpFRHgdOuWVuLsSGyhvqqw&oe=69DBB60E'
    ]
  },
  'my-first-compcard-duy-duong': {
    category: 'PERSONAL STYLIST',
    title: 'MY FIRST COMPCARD',
    client: 'DUY DƯƠNG',
    role: 'PERSONAL STYLIST',
    starring: 'Duy Dương',
    styling: 'NI STUDIO',
    brand: 'Duy Dương',
    description: '"This is my very first comp card as I begin my journey in the modeling industry. I look forward to collaborating with designers and brands on exciting upcoming projects." - Duy Dương',
    nextProjectTitle: 'OTIS - ANH TRAI SAY HI 2025',
    nextProjectSlug: '/project/otis-anh-trai-say-hi-2025',
    images: [
      'https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/517396212_24255737600779468_5460626647271404931_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeF-D7jr7klA2-4Cjnsx6obPM1C8knzXTKIzULySfNdMomzydMt1Sk_jZNiBBZcgcomqGq8hQqJZGGD5omSCPIoe&_nc_ohc=-_H_HrDXSJ8Q7kNvwFv-NXD&_nc_oc=Ado6yVfztUmmWv1KkqL4-cut1nT0NnWcii6N-Gkb0I1urpVzv62NG0hPmqdTHO0tMDs&_nc_zt=23&_nc_ht=scontent.fsgn2-5.fna&_nc_gid=vkzAHxmJK8QwBbG6RNUL8A&_nc_ss=7a3a8&oh=00_Af0RPPKTbffCKL5EpClsXRtEb6FGP7hZbbctntpttj7ZFQ&oe=69DBB03C',
      'https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/518290483_24255712007448694_5929884415445859339_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeFLvE98obmGXyQ7fGm2UUF7GRpdB342YEkZGl0HfjZgSU5beGgl8hJvwEz67qkhkN7N4WIJEwuh9vFxfWJZNCal&_nc_ohc=reVOG2jPpQgQ7kNvwEIOU0w&_nc_oc=AdomYDva6aBanjkH0MKvl2h53ZB-2TEiYfh6L-YpU4azaASjrb9ULXenPc87nH691Lc&_nc_zt=23&_nc_ht=scontent.fsgn2-5.fna&_nc_gid=AFYDk-0xhql9LeRvhYnzoQ&_nc_ss=7a3a8&oh=00_Af1VO24P-MqdDvMLdm1p6ifYZFeI9KyB9fzDCfoILlNW9w&oe=69DBAFE4',
      'https://scontent.fsgn2-8.fna.fbcdn.net/v/t39.30808-6/518106464_24255694594117102_3474944609674825085_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeEYphKf_JFKJbbU0Fk3nDI4lH4SZOS9jXKUfhJk5L2NcoW-lnMwvRGYquPWrDhmQm9gZkskLJfL_CiDccpfPcM4&_nc_ohc=NJPwSf0ax1wQ7kNvwGocb5C&_nc_oc=AdovXSYeGbhmOn0LM6uSNj-WF-wHBHDZV4cM1pn9ts_sXP9NTpA13NACajCN9pgF0Ig&_nc_zt=23&_nc_ht=scontent.fsgn2-8.fna&_nc_gid=ZpQ5PuTFG35IvXkv9RkhAA&_nc_ss=7a3a8&oh=00_Af0Eucue-Y-aL0gpB4ruN3avaU70sIX5WUo4TMkbeogNOg&oe=69DBC1E8',
      'https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/517391641_24255693347450560_1358233406103707091_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=108&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeGwZiLf9aXnIQwTfFYrmvdMdIUKriRipId0hQquJGKkh1aLBvg3S7gI95XBocXq0F_rcAjo3yBvpraNm5f5qyG2&_nc_ohc=lxxapM3S9nUQ7kNvwHmfGN2&_nc_oc=AdrMxTzQ9_hjNKc4T9WHa7rNUwFnzCmrnHXeL3Oy92VwQUpamKo5qbm3vnEUgxyPi3U&_nc_zt=23&_nc_ht=scontent.fsgn2-7.fna&_nc_gid=b0dekjP_R4P7AfTi_TJocQ&_nc_ss=7a3a8&oh=00_Af1AxxgSkP8QTUkcNr0XLQVAkOfjxeWVGQ7k3nRLHTFdBg&oe=69DBB7AE',
      'https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/518339490_24255697494116812_3190208556554049176_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeEgiJGSUAQWoiZn_Ff2FpQZS3IMY-rHSWNLcgxj6sdJY4W56D36uas03K2CLk38JmouIZamgEWom_YB0uULNql4&_nc_ohc=VwI7cx6LSFcQ7kNvwGrx9lh&_nc_oc=Adpx5fg7J9JzeaV27CCwcQ0xk_rCsM2lPJ5MJRAhTzDCvQFdI6WgDMKYR3YrtqfMyQI&_nc_zt=23&_nc_ht=scontent.fsgn2-7.fna&_nc_gid=4P7dvYHf20skpYSXhbpXzA&_nc_ss=7a3a8&oh=00_Af1HR29B_q6qZ09sl6qfTE0KO8EAqCiGq1sVIZpDqmp1vw&oe=69DBDC00'
    ]
  },
  'otis-anh-trai-say-hi-2025': {
    category: 'PERSONAL STYLIST',
    title: 'OTIS - ANH TRAI SAY HI 2025',
    client: 'OTIS',
    role: 'PERSONAL STYLIST',
    starring: 'Otis',
    styling: 'NI STUDIO',
    brand: 'Khác',
    description: 'Dự án đồng hành cùng Otis với diện mạo đầy ấn tượng và cá tính, một lời cảm ơn trân trọng gửi đến hành trình Anh Trai Say Hi 2025.',
    nextProjectTitle: 'RETURN HOME',
    nextProjectSlug: '/',
    images: [
      'https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-6/607659697_4340435819578760_7839622247332569508_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeHMMPKEITMLgtcTUa4g6tu6VNqcYtjJ19VU2pxi2MnX1aBPBSfS_AMPGG4B9OsGHAmdpnP-JDuCmLMwyaEbxrdX&_nc_ohc=PdV0UqughgoQ7kNvwGDCh2h&_nc_oc=AdpHKJQjZu_5oBX8ELTxawHPNvjk8dzu6A-9CTVy9qX2JuJmLrdXLD8AJRzCACib43c&_nc_zt=23&_nc_ht=scontent.fsgn2-9.fna&_nc_gid=N2hVBDeC0wtL_GNu9RDgvA&_nc_ss=7a3a8&oh=00_Af0dsXSd4VQ6aQN3UOAGvVqBx86--oVZVtpVwbQHdoEZ9Q&oe=69DBB000',
      'https://scontent.fsgn2-8.fna.fbcdn.net/v/t39.30808-6/608129143_4340435832912092_6227758627485836911_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeE1kUG8FxmA4_vPOtmFt8f7PickTEvcU3c-JyRMS9xTd5IHSU94sslyfWDBzXlShu_a0pllp2FMw6iWl00eZda6&_nc_ohc=WyXp-XuHnnMQ7kNvwE0Y5J7&_nc_oc=Adr2vfJLDodItPGoVKzU9J7IUpAqHnE1qxImG6ZFFeOU1mjRNh3pNz4aR2G1-E9Kjo8&_nc_zt=23&_nc_ht=scontent.fsgn2-8.fna&_nc_gid=JPXUfZjVsG3vcGtK98fG4g&_nc_ss=7a3a8&oh=00_Af1bFbWmB7TcJikY3mHbXsXKU4JhRTK4Y2gGfuCa-iBfTg&oe=69DBB3C6',
      'https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/607995913_4340435982912077_2358305052322853838_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeEPsRayFeE0ZENTzlm6DO6oJ1FQtpZP_9MnUVC2lk__02dcIXvf5EDrtHJcAFkocRf1ObVJ76SON-oSurSYy9-T&_nc_ohc=0I4lFPWNOtUQ7kNvwH--A7I&_nc_oc=AdouMvlobQ-8sTbZswpkGvQ6_zgeht-Oi5g_PTyoHGgY1ovSwrHL2MqZnKUob_XRTic&_nc_zt=23&_nc_ht=scontent.fsgn2-5.fna&_nc_gid=kkqCbdPEuD02Y_rV75QDHw&_nc_ss=7a3a8&oh=00_Af0a1mDAaUa3zfucw9Gcm2PfZWFhONmE4yfr8ze4_WCjag&oe=69DBC5DD',
      'https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/608651609_4340436179578724_1947486340784760272_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeFI9LMvQMqn2HEViTdMWV02jYQofRRCwC-NhCh9FELAL3bExHBsUW6IH4ntK-L71XGJMuKE1mTU5fRdpdoAOC6A&_nc_ohc=JHGjB2KvCq8Q7kNvwG5fs9g&_nc_oc=AdqwSKu-_DJ2ZF4WbxQHkap0DztRdaQD-Jh_kG29jQaSEXryoZb7PsFoOjRuF2G-N-U&_nc_zt=23&_nc_ht=scontent.fsgn2-5.fna&_nc_gid=00Q6j1N42e_46-PWTmCHmA&_nc_ss=7a3a8&oh=00_Af2hXPLf4OhRzpAx9LUA9qdmimgQKITAD1wW2pEieWXhiA&oe=69DBBD0D',
      'https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/607204210_4340436006245408_674816643034953416_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeH4LomL4rRlGAf9eH-6MTfKxcb4L_eQYHPFxvgv95Bgc5wiqHNMMSGhNm-A-Gmah7g3MXMUwHuhLLDxALC_I-iQ&_nc_ohc=NxjfvrPYwGsQ7kNvwG88OQv&_nc_oc=Adqsui44ckoQI_xWATeeEVillhAjH8nSo4FkY4BmAbIAxUV92yBXVVodN1y18kX52L0&_nc_zt=23&_nc_ht=scontent.fsgn2-5.fna&_nc_gid=L7cB74LAur5XWBPGZ5xgNw&_nc_ss=7a3a8&oh=00_Af1giBgCBt016shx-NnQGwi94E7jhuRmkqDr8C9UJIc48Q&oe=69DBC330',
      'https://scontent.fsgn2-3.fna.fbcdn.net/v/t39.30808-6/608182671_4340435916245417_4243960735891846976_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeFPnKLh2IQz9RkbSZgbq_fpsEVoojq0H5iwRWiiOrQfmPSgI9Iy7mqc32eUXcLsut96RwCkMinsXwBGmjyNfgOX&_nc_ohc=ZigtPJHWAK0Q7kNvwHhh-bo&_nc_oc=AdpMSxVFs-C1uymfloB_u0RVy9N9NPDpCfjGbEGeiiHgpkKJJyavW7zGBXsgr0DAqjQ&_nc_zt=23&_nc_ht=scontent.fsgn2-3.fna&_nc_gid=XKPxxtEsMP6RUQokmRT9Jw&_nc_ss=7a3a8&oh=00_Af39Z1jbe5KQsDuhy-zD_UPQFXoOcbJXs12cpfIzyKb-8w&oe=69DBE6B5',
      'https://scontent.fsgn2-8.fna.fbcdn.net/v/t39.30808-6/606916572_4340436072912068_2916771733838217296_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeEkH0pNFuJ5132WUHPWx8Pa0nEyVSs34tHScTJVKzfi0d6mtFx2XChcOWPjZwgTiB_bh_QbbPq9qYwdG9rrjjLR&_nc_ohc=7Yf88wxHNRcQ7kNvwEgMosJ&_nc_oc=Adp22cQ4QOhAFiwyOarRtHbav7wAvCOOOI2Ll4s502tzgapaOhRBaUg-x_fTP38cK2Q&_nc_zt=23&_nc_ht=scontent.fsgn2-8.fna&_nc_gid=WRd1BfZCTc22FRT68lZxLw&_nc_ss=7a3a8&oh=00_Af2ceqWskl1ADgOmv6O60ga-FWBimmui20dHHNGDBWx9sg&oe=69DBC245',
      'https://scontent.fsgn2-3.fna.fbcdn.net/v/t39.30808-6/606895779_4340436056245403_9136917473914760295_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeGCk4Z_ei0Val6Vsn8qkvMr9m1tobEAvXf2bW2hsQC9d9iztEXUpMSyu-y92qcvoYcU3tDesGNkbTQA1z2S8e0X&_nc_ohc=SGbkkIFVZLoQ7kNvwE860xz&_nc_oc=AdqkiJ8rLkQGmnYiMWVDpu6q-ivm1WBi9BGIVsl4d3FQPS-NRs9t4nA1qLFXKzWwSzw&_nc_zt=23&_nc_ht=scontent.fsgn2-3.fna&_nc_gid=A_TwH5EQKyXpTOBf7pQsGw&_nc_ss=7a3a8&oh=00_Af0eNCUz_CJJTwA3MNanAZ1GqaygVuEQVBeeacjemjoL4w&oe=69DBDB5A',
      'https://scontent.fsgn2-3.fna.fbcdn.net/v/t39.30808-6/607138380_4340436102912065_3977423023690687059_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeGE0bgIt0XffBpj_t_9YQR3WslGIXiQ179ayUYheJDXvzkvBmxnc53xHP--qaZgR3fQePHRA0fP6g0dE-C6rvXz&_nc_ohc=D01IfY7qzskQ7kNvwEfkOV0&_nc_oc=Adp9DvUJz9IecPBW470aqQBGYS-1yolp1heo4ZwTMyzW6_aYgrWP7n0OxfZ8wsMm4hE&_nc_zt=23&_nc_ht=scontent.fsgn2-3.fna&_nc_gid=emso9c0Sexk0TfXik8jeOA&_nc_ss=7a3a8&oh=00_Af2Z8JptzUIX_bSlBk0RP2vkCTQyKCJCRnkjIIjHDXmOvA&oe=69DBD18C',
      'https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/608285688_4340435946245414_1629633161152208146_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeEFHtOPgTWcwDL5HNO3Z4mvKLe-aMlQRl4ot75oyVBGXjxFw1_mHheBCzN4fhhelLyL00lXFk23p6X-KrhaXnvr&_nc_ohc=PirSRxqJqjUQ7kNvwHbp2nQ&_nc_oc=AdpkTc0RFXksOx6kco4Qvg4sOG57h-BrQNjmS37N6f6gmgaj4LySYU3S9sFHvyidn-M&_nc_zt=23&_nc_ht=scontent.fsgn2-7.fna&_nc_gid=IxoSFLR1lNYGKZ2qIIMYcQ&_nc_ss=7a3a8&oh=00_Af2ZBnWIUrYBp7B1GscLD4J-O_-szDunHMpH7IgN_iVIDA&oe=69DBC045',
      'https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/608693177_4340436129578729_5053472031074525763_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeFuX168bCxlmSPKtBXrXuJ5PtrjVyaWXhI-2uNXJpZeEiAUEd6YnHqZBMwjOMo8iLS0RHbqPqUN2VR2Fp8OBX-H&_nc_ohc=fDAoO8sb0jMQ7kNvwF7dzYr&_nc_oc=AdoowT3SGNqB2UJTSonOLBWmPTUr9n1q57w_CqvDndjko4EC62_LJucEpId1gShWo04&_nc_zt=23&_nc_ht=scontent.fsgn2-5.fna&_nc_gid=_9JDyJSXllyNiQAB5nHhfA&_nc_ss=7a3a8&oh=00_Af2YynSvF5stm2HqtoR2I6C95o6GhSXtGVjPs8yz0WFQCw&oe=69DBBD6A',
      'https://scontent.fsgn2-3.fna.fbcdn.net/v/t39.30808-6/607798864_4340435859578756_3785279804534416328_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeEAU4F0jjeCKADwqcwADedbPvEp5pttJyM-8Snmm20nI0ZoQKUVxxHCUztXNNhiIIM_9N9ZRqh7vsw-45zH_1Rl&_nc_ohc=GWGeyx_o7MQQ7kNvwEoInDl&_nc_oc=Adrri54g5KGabURL8fe-auBIaGkcC5ZRDxSFset2d81R6zBxDK673tbNeHKDGxOoq2g&_nc_zt=23&_nc_ht=scontent.fsgn2-3.fna&_nc_gid=K0NTIky34r0f_cNviMrWcA&_nc_ss=7a3a8&oh=00_Af385rE4_qNR0o-yc7pz9pldzUWlu-QC9LwtVphHasCyXw&oe=69DBBCDD',
      'https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/606865096_4340435872912088_1557287527257014910_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeGJzstTs2SIVfR92sGOpBgvwPvWA6XkFOvA-9YDpeQU6088YjFpZBncLEJyPZv1HD08wXbQEOZQbw-orImqFAfH&_nc_ohc=MOch2C2v9_4Q7kNvwG687fV&_nc_oc=Adp4k6Ddbb2rqJCvSwMbJAZrB7gtLJohUCv0CZzY675gc6Qp2E4U-7F0h0nXKspk8aU&_nc_zt=23&_nc_ht=scontent.fsgn2-7.fna&_nc_gid=yLc8KWspVxjQSc_75FNYqg&_nc_ss=7a3a8&oh=00_Af1pxel_PQK02vSFHT3NvTd3EmqFlxFt-DjT8Wdv0Mwz3g&oe=69DBD501'
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
