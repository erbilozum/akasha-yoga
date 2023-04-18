import React from 'react'
import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { BsPinMap, BsCalendar2 } from 'react-icons/bs';
const HomePageSmall = () => {
    const data = [
        {
            id: 1,
            imageURL: '/carousel/image2.png',
            imageAlt: "image2",
            headerTopText: 'Bayramda',
            headerSubText: 'Yoga Kampı',
            eventDate: '20-23 Nisan 2023',
            eventLocation: 'Lu Garden / İzmit',
            rightSide:
                [
                    "Ashtanga Yoga",
                    "Vinyasa Yoga",
                    "Kundalini Yoga",
                    "Bikram Yoga"
                ]
        },
        {
            id: 2,
            imageURL: '/carousel/image3.png',
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
        },
        {
            id: 3,
            imageURL: '/carousel/image1.png',
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
        },
        {
            id: 4,
            imageURL: '/carousel/image4.png',
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
        <div name={"home"} className="container mx-auto select-none font-Philosopher" >
            <div className="">
                <Carousel
                    showArrows={true}
                    showStatus={false}
                    showIndicators
                    infiniteLoop={true}
                    showThumbs={false}
                    useKeyboardArrows={false}
                    autoPlay={true}
                    stopOnHover={false}>
                    {data.map((item, index) => (
                        < div key={index} className='flex flex-col mt-36'>
                            <div className={"flex h-24 items-center justify-center mb-6"}>
                                <Image src={item.imageURL} alt={item.imageAlt} title={item.headerTopText} width={200} height={200} />
                            </div>
                            <div className='flex flex-col mt-36'>
                                <div className={"flex flex-row justify-center"}>
                                    <span className=' flex text-sm sm:text-3xl text-gray-700 font-bold  uppercase'>{item.headerTopText}</span>
                                    <span className='flex text-sm sm:text-3xl text-[#e7c100] pl-2'>{item.headerSubText}</span>
                                </div>
                                <div className={"flex flex-row justify-center mt-2"}>
                                    <div className='flex flex-row justify-start'>
                                        <BsCalendar2 className={"font-bold"} />
                                        <span className={"font-bold text-sm sm:text-md ml-2 text-gray-700 font-NotoSans"}>{item.eventDate}</span>
                                    </div>
                                    <div className='flex flex-row justify-start pl-2'>
                                        <BsPinMap className={"font-bold"} />
                                        <span className={"font-bold text-sm sm:text-md ml-2 text-gray-700 font-NotoSans"}>{item.eventLocation}</span>
                                    </div>
                                </div>
                                <div>
                                    <ul className="flex flex-row text-start mt-2">
                                        {item.rightSide.map((subItem, index) =>
                                            <div key={index} >
                                                <li className='hover:text-[#e7c100] duration-500 mb-2 ease-in-out transition-all cursor-pointer text-xs pb-1 font-NotoSans'>{subItem}<span className='text-[#e7c100] text-sm sm:text-lg'> /</span></li>
                                            </div>
                                        )}
                                    </ul>
                                </div>
                                <button className='mb-6 px-2 py-1 sm:px-10 sm:py-2.5 text-sm sm:tefont-bold rounded uppercase text-gray-700 border-[#e7c100] border-2 hover:text-gray-200  hover:bg-[#e7c100] duration-500 transition-all ease-in-out' title="Katıl">Katıl</button>
                            </div>

                        </div>
                    ))}
                </Carousel >


            </div >
        </div >
    )
}

export default HomePageSmall