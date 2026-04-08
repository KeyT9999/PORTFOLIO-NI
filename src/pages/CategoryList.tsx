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
      },
      {
        id: 4,
        title: 'VIETCOMBANK X CON CÒ ĐÂY',
        category: 'Production Stylist',
        image: 'https://scontent.fdad1-2.fna.fbcdn.net/v/t39.30808-6/603894841_1297030942464003_3292556104082335180_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeHPulppIxtYDhKiMXX3-yZexr60C3xAA6nGvrQLfEADqQhh6UHznyqMvzlzEdd0koWoKV3NRCt6hFZSZAhXZlCq&_nc_ohc=Vp_9xXPZM9oQ7kNvwFo__Vm&_nc_oc=Adr8aYlh9Hf3A7lc2FUaYA1hSCDLEmAXLueGmYMSTMY-W9iEHn2SP3HVthCqWLI5-fc&_nc_zt=23&_nc_ht=scontent.fdad1-2.fna&_nc_gid=EdlYGi0VzQfFGeSGp8lSlw&_nc_ss=7a3a8&oh=00_Af3a4TRfWR_p3bcKN9sF58S76aYj2SBPk2UodBfasipKeA&oe=69DBD7CB',
        slug: '/project/vietcombank-x-con-co-day'
      },
      {
        id: 5,
        title: 'VICENZO',
        category: 'Production Stylist',
        image: 'https://scontent.fdad1-4.fna.fbcdn.net/v/t39.30808-6/508999165_1228267432015307_5385936854439932724_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeHJ2HpuBYN6pCHSWAQP0Gw7rn9dTC7fc3Suf11MLt9zdFdEi-fMdeEngcz0U0R2q7e6fmXCFTuTC53ck6xHMeb0&_nc_ohc=iJLsowcbCR4Q7kNvwFLjDqC&_nc_oc=AdqOoMJnPUXsNcGsVWPb9UMJXit7BGHujrtE9QGadyNrXUAFeIOg8_iQJJtqziLr42U&_nc_zt=23&_nc_ht=scontent.fdad1-4.fna&_nc_gid=pbpmJ5tP3YPnv3lVCioGiA&_nc_ss=7a3a8&oh=00_Af05PHBajqNlvwcogh56h-JsQ-C4QeBXDQkmPsg8wdobdA&oe=69DBBF68',
        slug: '/project/vicenzo'
      },
      {
        id: 6,
        title: 'BÁO BEAUTY FAMILY X BÉ THIÊN KIM',
        category: 'Production Stylist',
        image: 'https://scontent.fsgn2-10.fna.fbcdn.net/v/t39.30808-6/517597741_32464832029774307_4544123377155152770_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=dd6889&_nc_eui2=AeEu44xOUwlnUsEwSOzQepfDr4v0HSggelqvi_QdKCB6WloIX1Uoa_iB_BMI0SBA5oT4PLxyEEjCOOL5gPSCe7FS&_nc_ohc=oBJ6_cFZknwQ7kNvwF5l72B&_nc_oc=AdqmrEdDfPB8y4yAzDIDyhN2TuMwpZg-YbR5hzxFOBxwB_8hfp2KYrRJLAeU1OMQjJk&_nc_zt=23&_nc_ht=scontent.fsgn2-10.fna&_nc_gid=fiNsvyEnnOPPrS1O8qcY1w&_nc_ss=7a3a8&oh=00_Af2qDftv83JkVlLECjVgASuCIeK7bnZ1XQS5s5c5Y9iIYg&oe=69DBAB91',
        slug: '/project/bao-beauty-family-x-be-thien-kim'
      },
      {
        id: 7,
        title: 'TIGER X OTIS',
        category: 'Production Stylist',
        image: 'https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/614229865_4351823075106701_4853974182591297693_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeHX4mrMr8mYrBF_h6_6gIyenF3Ma7DRoDWcXcxrsNGgNWF5WauHxmLXBGtG5G_EszYTmtFheTS6qHAluxxR10Io&_nc_ohc=us1HhvmIKxgQ7kNvwEtjf0B&_nc_oc=AdpSvsYDZ9Qj_GNt5hH5HQSC9GjFHZNbOnvAaC6O7nxC0jG-irc0mRMaCi-tHrq6p4I&_nc_zt=23&_nc_ht=scontent.fsgn2-5.fna&_nc_gid=iXOtFzJqWEDZ-bDdazFvug&_nc_ss=7a3a8&oh=00_Af12QJ-oId-qGIX6Ubq96ki4mW95u2w7Iiavy3lg_MrpQg&oe=69DBAEE2',
        slug: '/project/tiger-x-otis'
      },
      {
        id: 8,
        title: 'PEPSI X OTIS',
        category: 'Production Stylist',
        image: 'https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-6/612137922_4347104395578569_546602123754118448_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeFb_8j8OlyqTk8ltJc-9xpmYYzU90uf9cphjNT3S5_1yuCxXtZ1IETxDx6t_JpmexVC-E966FWw58DoMNofZrzT&_nc_ohc=i2ODbzdDwIkQ7kNvwGNRsFF&_nc_oc=Adqb7IWpVVQ3PzlOx1uHhzMJQcdc4vwU3V6rXNsLwH679OGuR61DAnizAsfjQGrvzt0&_nc_zt=23&_nc_ht=scontent.fsgn2-9.fna&_nc_gid=y1YpJVNVEVPsvW-xK_0vsw&_nc_ss=7a3a8&oh=00_Af15SWbaRDlzGnQEhOP44zwe3MR87ZxFkXhyV_Cie8uaPg&oe=69DBBB75',
        slug: '/project/pepsi-x-otis'
      },
      {
        id: 9,
        title: 'PEACE AND LOVE',
        category: 'Production Stylist',
        image: 'https://scontent.fdad1-3.fna.fbcdn.net/v/t39.30808-6/597927325_122116368621052203_7161261426709817296_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeHdvNRL-5HaU4pw2sYt8K3gquEelYgn0U6q4R6ViCfRTh1SoGZhzMSsO6m8QwhTQubcNNrIpgwAJ-wLPwtpFPXX&_nc_ohc=3E8RKh0cNsYQ7kNvwGziSZW&_nc_oc=AdqjartF8ghZD2qdSoYJkZgx0UlbUilaFalsETcFwS7bIqFL2F28D6Rw0hR3wAra3Ug&_nc_zt=23&_nc_ht=scontent.fdad1-3.fna&_nc_gid=sNj9DLcCQ8AbrVcHQkAA6A&_nc_ss=7a3a8&oh=00_Af0a1Y0igWmU5SZWKWKgGzP1rS_dsfSIC1b9np2lqL483w&oe=69DBB7C0',
        slug: '/project/peace-and-love'
      }
    ]
  },
  'fashion-stylist': {
    title: 'Fashion Stylist',
    description: 'High-end wardrobe curations mapping narratives to apparel.',
    projects: [
      {
        id: 1,
        title: 'THE SOUL - DUY DƯƠNG',
        category: 'Fashion Stylist',
        image: 'https://scontent.fsgn2-8.fna.fbcdn.net/v/t39.30808-6/524683687_24377862585233635_3725344598948076531_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeF2ocfUdk1s6WqjfHXVRvn4kh302YsBXqySHfTZiwFerG8Hw5nLxAs9tZW6SjRR4UqhIvEK-RHUjEX0r2pRHMKf&_nc_ohc=mJiYTgXvLlkQ7kNvwEkgAhj&_nc_oc=Adr_VuZQUULP8iIjJmOS7ldPWIFVBQQW0f9wF5dRepVbzdenKWrjKRhbdzulU3NTsFc&_nc_zt=23&_nc_ht=scontent.fsgn2-8.fna&_nc_gid=D--fSp7GFDWFNekkL9Getg&_nc_ss=7a3a8&oh=00_Af0f2I9BfebBqxv05F786jHte7YdOBYny9Di8Z_Qzs1uvw&oe=69DBCAB6',
        slug: '/project/the-soul-duy-duong'
      },
      {
        id: 2,
        title: 'RED FLAG - DUY DƯƠNG',
        category: 'Fashion Stylist',
        image: 'https://scontent.fdad2-1.fna.fbcdn.net/v/t39.30808-6/518275320_24281077558245472_7895932398976482178_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeEeQuOUd7kjoB0hHyCebrFoutnzcZjqig662fNxmOqKDsjdnRFryDZ2VvFeFCOaYRGGLqxI2CG9JeCzf5XWV7da&_nc_ohc=dqn00b0HD_8Q7kNvwHM-YHy&_nc_oc=AdqPm15Ue9YequBlxGQ7RgagM_xAzrxHUuvm_i5w4lfsKWeBUn__roxJbmdxuy_KmeY&_nc_zt=23&_nc_ht=scontent.fdad2-1.fna&_nc_gid=NABgO3G9-q8EQFt3Vp2TDg&_nc_ss=7a3a8&oh=00_Af3_L2RxTnWqOxhMFMpO2arnbT-XEznQP_r21f8Qext-Bw&oe=69DBD12B',
        slug: '/project/red-flag-duy-duong'
      },
      {
        id: 3,
        title: 'KAT GREY',
        category: 'Fashion Stylist',
        image: 'https://scontent.fdad2-1.fna.fbcdn.net/v/t39.30808-6/507136431_2136311913541027_176772694904646231_n.jpg?stp=dst-jpg_s590x590_tt6&_nc_cat=108&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeFrMPPt7BXiHIlsmXx4CbBAfIW4R6prY3J8hbhHqmtjcsONP-9HS5SZwIB2OZ_JQ1APPkfUTISuZL7VCqDUw_va&_nc_ohc=IZLGWgebmBwQ7kNvwHAbWni&_nc_oc=AdpkJDX3oMVm754YzeaK6ITWOPtb0JJXsoR1OLr6wSH4lkW4hMO2kOFmfO6G7sgyvfY&_nc_zt=23&_nc_ht=scontent.fdad2-1.fna&_nc_gid=fY6o4EZcL2gXWReJRt2ITQ&_nc_ss=7a3a8&oh=00_Af3lQlflkIiQdKNiELrkA3bZ50wjEj3SbstNmCg_hqBaFw&oe=69DBD8FA',
        slug: '/project/kat-grey'
      },
      {
        id: 4,
        title: 'KAT GRAY',
        category: 'Fashion Stylist',
        image: 'https://scontent.fdad1-4.fna.fbcdn.net/v/t39.30808-6/506407104_2240610429710257_6206307859238705151_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=dd6889&_nc_eui2=AeE8lI6uGM3xW1yiFEXcku4eVduHFx4vDbBV24cXHi8NsJjjEWWmRMW8Jf6KuEMZEHke2uadDKUUDxSI8ltd65du&_nc_ohc=sCKuEHh3coAQ7kNvwFHxGus&_nc_oc=AdpdMqTz_WdBLhDSNcQqUXo_Io0VhgQZKVgp-MdrpDWynhpMEPD1_SnpXWr-KiROg6I&_nc_zt=23&_nc_ht=scontent.fdad1-4.fna&_nc_gid=wx-2W04duVMt7ZKCSSVpJA&_nc_ss=7a3a8&oh=00_Af0aEItzLLLP8dUSRbCBTCkK689PrGWWeUew_VRiok39HA&oe=69DBD7E8',
        slug: '/project/kat-gray'
      },
      {
        id: 5,
        title: 'KNOCKOUT - DUY DƯƠNG',
        category: 'Fashion Stylist',
        image: 'https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/519063758_24313488185004409_398642980213879668_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeG3WDqtf_WJ9KzlSgX_3tNKyfbpP2wsV0jJ9uk_bCxXSJhrfIUiU2fBnhF5EQsbSSgecgH4krR0BvrJwLFH4wHW&_nc_ohc=fq4GWF_nblUQ7kNvwHZasvB&_nc_oc=AdpwhT8oCF1DI70DeyGYGnEeodT_0aDnLsJTAl-g_nwmzsQGYpf-4cnwiXq4FrTcSNE&_nc_zt=23&_nc_ht=scontent.fsgn2-5.fna&_nc_gid=NSSaiOAfworQ4_t8hZ28OA&_nc_ss=7a3a8&oh=00_Af2nfF-VrwZjUZknMxrYD7z3nuKbplXjzkBYVdtBUtHrqw&oe=69DBC56F',
        slug: '/project/knockout-duy-duong'
      },
      {
        id: 6,
        title: '“SILBER” NGUYỄN NHƯ VÂN ANH',
        category: 'Fashion Stylist',
        image: 'https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-6/486486843_2159596027828897_6398116900259723608_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeGgucB9jW2wX6Xtut9qLDCaipRyJqJuaKOKlHImom5oo8nt9ipMaKA93n8YtuXNFPr4xzsSU1HXxde9WKZ57EZQ&_nc_ohc=HF2dRDCwPtMQ7kNvwF-gv8e&_nc_oc=Adr_ishnuS_3hghsxBowGyVFMyeqGI5cYSN9bUMYTT9CC60ZEBWNS_OT1GzUZrz2dfA&_nc_zt=23&_nc_ht=scontent.fsgn2-9.fna&_nc_gid=l2izMZBacZZ95UorVBj9hA&_nc_ss=7a3a8&oh=00_Af1aCOOltDl-79pto1J-zhD3q9fRsV5N3cwkHoiMzo_caw&oe=69DBE620',
        slug: '/project/silber-nguyen-nhu-van-anh'
      }
    ]
  },
  'personal-stylist': {
    title: 'Personal Stylist',
    description: 'Bespoke image consulting and personal branding transformations.',
    projects: [
      {
        id: 1,
        title: 'AQUAFINA FASHION WEEK - DUY DƯƠNG',
        category: 'Personal Stylist',
        image: 'https://scontent.fdad1-3.fna.fbcdn.net/v/t39.30808-6/516748448_24224936787192883_7498671120094180424_n.jpg?stp=cp6_dst-jpg_s590x590_tt6&_nc_cat=104&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeHg_f1j2Jb9zB0jP4A8i9aUH_LdWvY_0H8f8t1a9j_QfyGjhNuZgoSkCRxUM2bUgf4JyT0NQnsnlJUK5PbY1B12&_nc_ohc=mbS-CkUuGpMQ7kNvwF2tZNL&_nc_oc=Ado_DixmeXoG6qcyGbUrYJKCrPzRHXdaeY-115GMvnJ40cjiB774FkKxcQNh9OG-VO0&_nc_zt=23&_nc_ht=scontent.fdad1-3.fna&_nc_gid=6TOJE0x9iu4M72StK5vs9Q&_nc_ss=7a3a8&oh=00_Af2WjqX9TqP0EuRVzBdbqgtpgCQc2DWXp25lqOXprt1uEg&oe=69DBC9E8',
        slug: '/project/aquafina-fashion-week-duy-duong'
      },
      {
        id: 2,
        title: 'MY FIRST COMPCARD - DUY DƯƠNG',
        category: 'Personal Stylist',
        image: 'https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/517396212_24255737600779468_5460626647271404931_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeF-D7jr7klA2-4Cjnsx6obPM1C8knzXTKIzULySfNdMomzydMt1Sk_jZNiBBZcgcomqGq8hQqJZGGD5omSCPIoe&_nc_ohc=-_H_HrDXSJ8Q7kNvwFv-NXD&_nc_oc=Ado6yVfztUmmWv1KkqL4-cut1nT0NnWcii6N-Gkb0I1urpVzv62NG0hPmqdTHO0tMDs&_nc_zt=23&_nc_ht=scontent.fsgn2-5.fna&_nc_gid=vkzAHxmJK8QwBbG6RNUL8A&_nc_ss=7a3a8&oh=00_Af0RPPKTbffCKL5EpClsXRtEb6FGP7hZbbctntpttj7ZFQ&oe=69DBB03C',
        slug: '/project/my-first-compcard-duy-duong'
      },
      {
        id: 3,
        title: 'OTIS - ANH TRAI SAY HI 2025',
        category: 'Personal Stylist',
        image: 'https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-6/607659697_4340435819578760_7839622247332569508_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeHMMPKEITMLgtcTUa4g6tu6VNqcYtjJ19VU2pxi2MnX1aBPBSfS_AMPGG4B9OsGHAmdpnP-JDuCmLMwyaEbxrdX&_nc_ohc=PdV0UqughgoQ7kNvwGDCh2h&_nc_oc=AdpHKJQjZu_5oBX8ELTxawHPNvjk8dzu6A-9CTVy9qX2JuJmLrdXLD8AJRzCACib43c&_nc_zt=23&_nc_ht=scontent.fsgn2-9.fna&_nc_gid=N2hVBDeC0wtL_GNu9RDgvA&_nc_ss=7a3a8&oh=00_Af0dsXSd4VQ6aQN3UOAGvVqBx86--oVZVtpVwbQHdoEZ9Q&oe=69DBB000',
        slug: '/project/otis-anh-trai-say-hi-2025'
      }
    ]
  },
  'stylist-assistant': {
    title: 'Stylist Assistant',
    description: 'Behind the scenes magic in major film and fashion productions.',
    projects: [
      {
        id: 1,
        title: 'LEMINO',
        category: 'Stylist Assistant',
        image: 'https://scontent.fdad1-1.fna.fbcdn.net/v/t39.30808-6/650149656_10225486757514138_8387490141278315413_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=dd6889&_nc_eui2=AeELA5C4TCzr06JU35aprn39wMwYGTXZYtTAzBgZNdli1EEVhLQnD_gJtTRgN1L_l7YK146fhVtmJy8dWt080DMl&_nc_ohc=QJX0LHo-zF8Q7kNvwELhvJj&_nc_oc=AdrPvgJ192bkYxP7kRPlapKGW12gKrk76fAv6SpaZitBrirX3go0_zWxwIzRz0hb3M4&_nc_zt=23&_nc_ht=scontent.fdad1-1.fna&_nc_gid=EuS3QdJSP3R1wZQOtsX27g&_nc_ss=7a3a8&oh=00_Af0ew77DMtUC0de2tRy3aUR0xnRbmLumVKhytI6bZCsgSQ&oe=69DBCC5A',
        slug: '/project/lemino'
      }
    ]
  },
  'fashion-design': {
    title: 'Fashion Design',
    description: 'Original garments crafted with a unique perspective on form and function.',
    projects: [
      {
        id: 1,
        title: 'CERAMIC-GỐM',
        category: 'Fashion Design',
        image: 'https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/489306355_1862375191227696_2512012036460917066_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeGBdflhhcvwikaEo-of834nwRe6G2V1P17BF7obZXU_Xs7UXB_MX9-ZtLx1oBeQ0NTVn3GbqCCPc4JFG4HT3RGD&_nc_ohc=DIb8bP_wIDEQ7kNvwGkoJmK&_nc_oc=AdqGtsVYSa3_7K_1Y2EreUhpP9fEpnvcvu5zNtpqGba90zfSI-az6Ut_EvzAp8QlDiI&_nc_zt=23&_nc_ht=scontent.fsgn2-7.fna&_nc_gid=t50qX67OTLtyDU8Uw3kAbA&_nc_ss=7a3a8&oh=00_Af1LR7aR4A87dawJ_atZ65io8BCMuOfoNJdTIZmao_v7jA&oe=69DBD6DB',
        slug: '/project/ceramic-gom'
      },
      {
        id: 2,
        title: 'NON NƯỚC',
        category: 'Fashion Design',
        image: 'https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/487171359_1854760115322537_2422896182927516071_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeFr_AjhbiAZWF7-tufdx2Uo9NoD7q0Qmiv02gPurRCaKw55sMVld9hDlNM0qtSbmRy7OdweDra9MmHSGf_o0tke&_nc_ohc=bcI7d4tQ3fwQ7kNvwGijdVI&_nc_oc=AdoB2MDqTqxILUm3CvpeVUMSYeEl9TRe41_cE0O2O6Pr2wb92nr_j089esHzhw7CjkI&_nc_zt=23&_nc_ht=scontent.fsgn2-7.fna&_nc_gid=VoGg7ENx87PzV3sPc_4QHA&_nc_ss=7a3a8&oh=00_Af1oEOTc74VFK6dPhEkUNE8bUdiPZMowvmA81NQuVvpwfA&oe=69DBE72A',
        slug: '/project/non-nuoc'
      },
      {
        id: 3,
        title: 'UNIFORM PROJECT X VIETGANGZ GLAMPING CLUB',
        category: 'Fashion Design',
        image: 'https://scontent.fsgn2-3.fna.fbcdn.net/v/t39.30808-6/495239564_1885182018947013_9183256286610691495_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeGcFZ2FpkhDta0d0z16Scdzw4LQZ1YihCDDgtBnViKEIL8RYoN3AC1vqewTA_lV-9G2Ns0zyB7HryJYE9Bf498f&_nc_ohc=1QHq_wrSqWwQ7kNvwHDmGTf&_nc_oc=Adr43tGCkL-DBN8lLa7Q7xmHWi_Nb8TEYhdX5gz50JoDWgHYklj2czlj0n6Ra9iCPEY&_nc_zt=23&_nc_ht=scontent.fsgn2-3.fna&_nc_gid=YBcCYPEoW2N7rcDZri9f5Q&_nc_ss=7a3a8&oh=00_Af3MlVn2dxRf8Sb_3J8yNvEoKCylLRwDiM-qwxRrKzvufg&oe=69DBD726',
        slug: '/project/uniform-vietgangz'
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
