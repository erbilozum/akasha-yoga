import React from 'react'
import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaCalculator, FaCalendar, FaCalendarAlt, FaCalendarDay, FaLocationArrow } from 'react-icons/fa';
import { BsPinMap, BsCalendarHeart } from 'react-icons/bs';


const Homepage = () => {
    const indicatorStyles = {
        background: '#fff',
        width: 8,
        height: 8,
        display: 'inline-block',
        margin: '0 8px',
    };

    const data = [
        {
            id: 1,
            imageURL: '/carousel/image2.png',
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
            headerTopText: '200 Saat Yoga',
            headerSubText: 'Eğitmenlik Eğitimi',
            eventDate: 'Ocak-Haziran 2023',
            eventLocation: 'Akasha Yoga / Silivri',
            rightSide:
                [
                    "6 Kişilik gruplar",
                    "Katılım Sertifikası",
                    "Başarı Sertifikası"
                ]
        },
        {
            id: 3,
            imageURL: '/carousel/image1.png',
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
            <div className=" ">
                <Carousel
                    showArrows={false}
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
                        < div key={index} className='flex flex-row justify-between w-full'>
                            {/*Left Side*/}
                            <div div className='w-3/12 flex flex-col items-start ml-32 mt-48 text-start' >
                                <span className=' flex text-3xl text-gray-700 font-bold  uppercase'>{item.headerTopText}</span>
                                <span className='flex text-3xl text-[#e7c100]'>{item.headerSubText}</span>
                                <div className='flex flex-row items-center justify-start mt-4'>
                                    <BsCalendarHeart className={""} />
                                    <span className={"font-bold text-md ml-2 text-gray-700 font-NotoSans"}>{item.eventDate}</span>
                                </div>
                                <div className='flex flex-row items-center justify-start mt-4'>
                                    <BsPinMap className={""} />
                                    <span className={"font-bold text-md ml-2 text-gray-700 font-NotoSans"}>{item.eventLocation}</span>
                                </div>
                                <button className='mt-24 px-5 py-2.5 font-bold rounded uppercase text-black bg-[#e7c100]  hover:text-gray-200  hover:bg-gray-700 duration-500 transition-all ease-in-out' title="Katılın">Katılın</button>
                            </div>
                            {/*Image Side*/}
                            <div className='w-6/12'>
                                <Image src={item.imageURL} alt="carouselImage" title={item.headerTopText} width={1200} height={1200} />
                            </div>
                            {/*Right Side*/}
                            <div className='w-3/12 flex  mt-48 justify-center font-NotoSans'>
                                <ul className="text-start">
                                    {item.rightSide.map((subItem, index) =>
                                        <div key={index} >
                                            <li className='hover:text-[#e7c100] duration-500 mb-2 ease-in-out transition-all cursor-pointer text-2xl pb-1'>{subItem}<span className='text-[#e7c100]'> /</span></li>
                                        </div>
                                    )}

                                </ul>
                            </div>
                        </div>
                    ))}

                    < div className='flex flex-row justify-between w-full'>
                        {/*Left Side*/}
                        <div div className='w-3/12 flex flex-col items-start ml-32 justify-center text-start' >
                            <span className=' flex text-3xl text-gray-700 font-bold  uppercase'>Bayramda</span>
                            <span className='flex text-3xl text-[#e7c100]'>Yoga Kampı</span>
                            <div className='flex mt-4 pl-2'>
                                <BsCalendarHeart className={"mr-2"} />
                                <span className={"font-bold text-md  text-gray-700"}>20-23 Nisan 2023</span>
                            </div>
                            <div className='flex text-md  text-gray-700 mt-4 pl-2'>
                                <BsPinMap className={"mr-2"} />
                                <span className={"font-bold text-md  text-gray-700"}>Lu Garden / İzmit</span>
                            </div>
                            <button className='mt-24 px-5 py-2.5  font-NatoSans rounded uppercase text-gray-700 bg-[#e7c100]  hover:text-gray-200  hover:bg-gray-700 duration-500 transition-all ease-in-out' title="Katılın">Katılın</button>
                        </div>
                        {/*Image Side*/}
                        <div className='w-6/12'>
                            <Image src={"/carousel/image2.png"} alt={"image2"} width="1200" height={1200} />
                        </div>
                        {/*Right Side*/}
                        <div className='w-3/12 flex items-center justify-center'>
                            <ul className="text-start">
                                <li className='hover:text-[#e7c100] duration-500 mb-2 ease-in-out transition-all cursor-pointer text-xl pb-1'>Ashtanga Yoga<span className='text-[#e7c100]'> /</span></li>
                                <li className='hover:text-[#e7c100] duration-500 mb-2 ease-in-out transition-all cursor-pointer text-xl pb-1'>Vinyasa Yoga<span className='text-[#e7c100]'> /</span></li>
                                <li className='hover:text-[#e7c100] duration-500 mb-2 ease-in-out transition-all cursor-pointer text-xl pb-1'>Kundalini Yoga<span className='text-[#e7c100]'> /</span></li>
                                <li className='hover:text-[#e7c100] duration-500 mb-2 ease-in-out transition-all cursor-pointer text-xl pb-1'>Bikram Yoga<span className='text-[#e7c100]'> /</span></li>
                            </ul>
                        </div>
                    </div>

                </Carousel >
            </div >
        </div >
    )
}

export default Homepage