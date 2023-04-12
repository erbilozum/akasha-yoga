import React from 'react'
import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { BsPinMap, BsCalendar2 } from 'react-icons/bs';


const Homepage = () => {
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
                    stopOnHover={false}
                    className={"mb-4"}>
                    {/*Cards*/}
                    {data.map((item, index) => (
                        < div key={index} className='flex flex-row justify-between'>
                            {/*Left Side*/}
                            <div div className='w-3/12 flex flex-col items-start ml-32 mt-36 text-start' >
                                <span className=' flex text-3xl text-gray-700 font-bold  uppercase'>{item.headerTopText}</span>
                                <span className='flex text-3xl text-[#e7c100]'>{item.headerSubText}</span>
                                <div className='flex flex-row items-center justify-start mt-4'>
                                    <BsCalendar2 className={"font-bold"} />
                                    <span className={"font-bold text-md ml-2 text-gray-700 font-NotoSans"}>{item.eventDate}</span>
                                </div>
                                <div className='flex flex-row items-center justify-start mt-4'>
                                    <BsPinMap className={"font-bold"} />
                                    <span className={"font-bold text-md ml-2 text-gray-700 font-NotoSans"}>{item.eventLocation}</span>
                                </div>
                                <button className='mt-24 px-10 py-2.5 font-bold rounded uppercase text-gray-700 border-[#e7c100] border-2 hover:text-gray-200  hover:bg-[#e7c100] duration-500 transition-all ease-in-out' title="Katıl">Katıl</button>
                            </div>
                            {/*Image Side*/}
                            <div className='w-5/12 flex'>
                                <Image src={item.imageURL} alt={item.imageAlt} title={item.headerTopText} width={800} height={800} />
                            </div>
                            {/*Right Side*/}
                            <div className='w-3/12 flex mt-36 justify-center font-NotoSans'>
                                <ul className="text-start">
                                    {item.rightSide.map((subItem, index) =>
                                        <div key={index} >
                                            <li className='hover:text-[#e7c100] duration-500 mb-2 ease-in-out transition-all cursor-pointer text-xl pb-1 font-NotoSans'>{subItem}<span className='text-[#e7c100]'> /</span></li>
                                        </div>
                                    )}
                                </ul>
                            </div>
                        </div>
                    ))}
                </Carousel >
            </div >
        </div >
    )
}

export default Homepage