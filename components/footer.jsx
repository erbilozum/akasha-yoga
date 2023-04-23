import React from 'react'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Footer = () => {
    return (
        <div name={"footer"} className={"container mx-auto text-gray-400 select-none  items-center"}>
            <div className={"flex flex-row justify-between bg-gray-800 h-16 sm:h-24 font-Montserrat p-2 text-xs sm:text-sm"}>
                <div className={"mt-4"}>
                    <p>© 2023 designed by Erbil ÖZÜM</p>
                </div>
                <div className={"flex flex-row mt-4 space-x-2"}>
                    <Link activeClass={"active"} to={"homepage"} spy={true} smooth={true} offset={50} duration={800} >
                        <span className={"decoration-0 text-gray-400 no-underline hover:text-[#e7c100] duration-500 ease-in-out transition-all"}>Etkinlikler</span>
                    </Link>
                    <Link activeClass={"active"} to={"classroom"} spy={true} smooth={true} offset={50} duration={800} >
                        <span className={"decoration-0  text-gray-400 no-underline hover:text-[#e7c100] duration-500 ease-in-out transition-all"} >Dersler</span>
                    </Link>
                    <Link activeClass={"active"} to={"prices"} spy={true} smooth={true} offset={50} duration={800} >
                        <span className={"decoration-0 text-gray-400 no-underline hover:text-[#e7c100] duration-500 ease-in-out transition-all"}>Sınıflar</span>
                    </Link>
                </div>
                <div className={"flex flex-row space-x-2 mt-4 justify-between"}>
                    <a className="decoration-0  text-gray-400 no-underline hover:text-[#e7c100] duration-500 ease-in-out transition-all" href="https://www.facebook.com/ozgekucukkayayoga" target="_blank" rel="noopener noreferrer">   <FaFacebook className='text-sm sm:text-xl' /></a>
                    <a className="decoration-0  text-gray-400 no-underline hover:text-[#e7c100] duration-500 ease-in-out transition-all" href="https://www.instagram.com/akashayoga.tr" target="_blank" rel="noopener noreferrer">   <FaInstagram className='text-sm sm:text-xl' /></a>
                    <a className="decoration-0  text-gray-400  no-underline hover:text-[#e7c100] duration-500 ease-in-out transition-all" href="https://www.youtube.com/@OzgeKucukkaya" target="_blank" rel="noopener noreferrer"><FaYoutube className='text-sm sm:text-xl' /></a>
                </div>
            </div>
        </div >
    )
}
export default Footer
