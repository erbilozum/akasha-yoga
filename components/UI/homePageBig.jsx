import React from 'react'
import Image from 'next/image';
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {BsCalendar2, BsPinMap} from 'react-icons/bs';

const HomePageBig = ({data}) => {

    return (
        <div name={"home"} className={"container mx-auto select-none font-Philosopher"}>
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
                        < div key={index} className={"flex flex-row justify-center h-full w-full items-strech"}>
                            {/*Left Side*/}
                            <div className={"flex flex-col w-1/5 mt-32 mb-32"}>
                                <span
                                    className={"flex text-sm sm:text-3xl text-gray-700 font-bold uppercase"}>{item.headerTopText}</span>
                                <span className='flex text-sm sm:text-3xl text-[#e7c100]'>{item.headerSubText}</span>
                                <div className={"flex flex-row items-center justify-start mt-4"}>
                                    <BsCalendar2 className={"font-bold"}/>
                                    <span
                                        className={"font-bold text-sm sm:text-md ml-2 text-gray-700 font-NotoSans"}>{item.eventDate}</span>
                                </div>
                                <div className={"flex flex-row items-center justify-start mt-4"}>
                                    <BsPinMap className={"font-bold"}/>
                                    <span
                                        className={"font-bold text-sm sm:text-md ml-2 text-gray-700 font-NotoSans"}>{item.eventLocation}</span>
                                </div>
                                <button
                                    className={'mt-6 sm:mt-24 px-2 py-1 sm:px-10 sm:py-2.5 text-sm sm:tefont-bold rounded uppercase text-gray-700 border-[#e7c100] border-2 hover:text-gray-200  hover:bg-[#e7c100] duration-500 transition-all ease-in-out'}
                                    title={"Katıl"}>Katıl
                                </button>
                            </div>
                            {/*Image Side*/}
                            <div className={"flex flex-col w-2/5 relative"}>
                                <Image src={item.imageURL} alt={item.imageAlt} title={item.headerTopText} fill/>
                            </div>
                            {/*Right Side*/}
                            <div className={"flex w-1/5 mt-32 mb-32"}>
                                <ul className={"text-start"}>
                                    {item.rightSide.map((subItem, index) =>
                                        <div key={index}>
                                            <li className={'hover:text-[#e7c100] duration-500 mb-2 ease-in-out transition-all cursor-pointer text-sm sm:text-xl pb-1 font-NotoSans'}>{subItem}<span
                                                className={'text-[#e7c100] text-sm sm:text-lg'}> /</span></li>
                                        </div>
                                    )}
                                </ul>
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    )
}

export default HomePageBig