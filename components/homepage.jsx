import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import HomePageSmall from './UI/homePageSmall';
import HomePageBig from './UI/homePageBig';
const Homepage = () => {
    const data = [
        {
            id: 1,
            imageURL: '/carousel/image2.webp',
            imageAlt: "image2",
            headerTopText: 'Bayramda',
            headerSubText: 'Yoga Kampı',
            eventDate: '20-23 Nisan 2023',
            eventLocation: 'Lu Garden / İzmit',
            rightSide:[
                    "Ashtanga Yoga",
                    "Vinyasa Yoga",
                    "Kundalini Yoga",
                    "Bikram Yoga"
                ]
        }, {
            id: 2,
            imageURL: '/carousel/image3.webp',
            imageAlt: "image2",
            headerTopText: '200 Saat Yoga',
            headerSubText: 'Eğitmenlik Eğitimi',
            eventDate: 'Ocak-Haziran 2023',
            eventLocation: 'Akasha Yoga / Silivri',
            rightSide:
                [
                    "6 Kişilik Gruplar",
                    "Katılım Sertifikası",
                    "Başarı Sertifikası"
                ]
        }, {
            id: 3,
            imageURL: '/carousel/image1.webp',
            imageAlt: "image2",
            headerTopText: '4 Element',
            headerSubText: 'Yoga Kampı',
            eventDate: '16-19 Haziran 2023',
            eventLocation: 'Çeşmeköy / Kırklareli',
            rightSide: [
                "Yoga Asana Pratiği (Toprak)",
                "Yoga Asana Pratiği (Su)",
                "Yoga Asana Pratiği (Ateş)",
                "Enerji ve Ses Banyosu"
            ]
        },{
            id: 4,
            imageURL: '/carousel/image4.webp',
            imageAlt: "image2",
            headerTopText: 'Çakralar ve Arometerapi',
            headerSubText: 'Enerji Merkezlerini Dengele',
            eventDate: '14 Temmuz 2023',
            eventLocation: 'Mustang Range / Silivri',
            rightSide: [
                "Meditasyon",
                "Asana",
                "Aromaterapi ve Yağlar",
                "Nefes Yogası",
                "Yüz Yogası"
            ]
        }
    ]
    return (
        <div name={"home"} className={"container mx-auto select-none font-Philosopher"} >
            <div className={"visible sm:hidden"}>
                <HomePageSmall />
            </div>
            <div className={"hidden sm:visible sm:block"}>
                <HomePageBig />
            </div>
        </div >
    )
}
export default Homepage