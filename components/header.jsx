import React from 'react'
import Image from 'next/image'
import { Link, animateScroll as scroll } from 'react-scroll'
import { FaWhatsapp } from 'react-icons/fa'

const Header = () => {
    return (
        <div className="container mx-auto select-none font-Montserrat  ">
            <div className='flex flex-row justify-between'>
                {/*Logo*/}
                <div className='flex items-center'>
                    <Image
                        src='/logos/logo-akasha.png'
                        alt="akasha_yoha"
                        width={150}
                        height={200} />
                </div>
                {/*Center*/}
                <div className='flex'>
                    <nav>
                        <ul className='flex flex-row justfiy-between items-center space-x-2 '>
                            <li className='bg-white px-2  pt-5 pb-2 hover:bg-[#e7c100] duration-500 ease-in-out transition-all'>
                                <Link activeClass="active" to="home" spy={true} smooth={true} offset={50} duration={500} >
                                    <span className='cursor-pointer text-lg  text-gray-700 hover:text-white'>Anasayfa</span>
                                </Link>
                            </li>
                            <li className='bg-white px-2  pt-5 pb-2 hover:bg-[#e7c100] duration-500 ease-in-out transition-all'>
                                <Link activeClass="active" to="about" spy={true} smooth={true} offset={50} duration={500} >
                                    <span className='cursor-pointer text-lg   text-gray-700 hover:text-white'>Hakkımızda</span>
                                </Link>
                            </li>
                            <li className='bg-white px-2  pt-5 pb-2 hover:bg-[#e7c100] duration-500 ease-in-out transition-all'>
                                <Link activeClass="active" to="prices" spy={true} smooth={true} offset={50} duration={500} >
                                    <span className='cursor-pointer text-lg text-gray-700 hover:text-white'>Sınıflar</span>
                                </Link>
                            </li>
                            <li className='bg-white px-2  pt-5 pb-2 hover:bg-[#e7c100] duration-500 ease-in-out transition-all'>
                                <Link activeClass="active" to="classroom" spy={true} smooth={true} offset={50} duration={500} >
                                    <span className='cursor-pointer text-lg text-gray-700 hover:text-white'>Eğitimler</span>
                                </Link>
                            </li>
                            <li className='bg-white px-2  pt-5 pb-2 hover:bg-[#e7c100] duration-500 ease-in-out transition-all'>
                                <Link activeClass="active" to="store" spy={true} smooth={true} offset={50} duration={500} >
                                    <span className='cursor-pointer text-lg text-gray-700 hover:text-white'>Ürünler</span>
                                </Link>
                            </li>
                            <li className='bg-white px-2  pt-5 pb-2 hover:bg-[#e7c100] duration-500 ease-in-out transition-all'>
                                <Link activeClass="active" to="youtube" spy={true} smooth={true} offset={50} duration={500} >
                                    <span className='cursor-pointer text-lg text-gray-700 hover:text-white'>Youtube</span>
                                </Link>
                            </li>
                            <li className='bg-white px-2  pt-5 pb-2 hover:bg-[#e7c100] duration-500 ease-in-out transition-all'>
                                <Link activeClass="active" to="contact" spy={true} smooth={true} offset={50} duration={500} >
                                    <span className='cursor-pointer text-lg  text-gray-700 hover:text-white'>İletişim</span>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                {/*Right*/}
                <div className='flex flex-row items-center justify-center'>
                    <FaWhatsapp className={"text-xl text-gray-700  duration-500 ease-in-out transition-all  hover:text-[#e7c100] "} />
                    <a className='flex  text-gray-700 duration-500 ease-in-out transition-all  hover:text-[#e7c100] ml-2 flex-nowrap cursor-pointer' href="https://wa.me/+905334193264" target='_blank'>0850 440 09 51</a>
                </div>
            </div>
        </div >
    )
}
export default Header