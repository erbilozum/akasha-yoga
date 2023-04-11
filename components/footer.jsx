import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaYoutubeSquare } from 'react-icons/fa'


const Footer = () => {
    return (
        <div name={"footer"} className={"container mx-auto p-0 text-gray-400 "}>
            <div className={'flex flex-row justify-between bg-gray-800 h-24 font-Montserrat p-2 text-sm'}>
                <div className="mt-4">
                    <p>© 2023 designed by Erbil ÖZÜM</p>
                </div>
                <div className="flex flex-row mt-4 space-x-2">
                    <a className="hover:text-[#e7c100] duration-500 ease-in-out transition-all" href="http://">Etkinlikler</a>
                    <a className="hover:text-[#e7c100] duration-500 ease-in-out transition-all" href="http://">Dersler</a>
                    <a className="hover:text-[#e7c100] duration-500 ease-in-out transition-all" href="http://">Sınıflar</a>
                </div>
                <div className="flex flex-row space-x-2 mt-4 justify-between">
                    <a className='hover:text-[#e7c100] duration-500 ease-in-out transition-all' href="http://" target="_blank" rel="noopener noreferrer">   <FaFacebook className='text-xl' /></a>
                    <a className='hover:text-[#e7c100] duration-500 ease-in-out transition-all' href="http://" target="_blank" rel="noopener noreferrer">   <FaInstagram className='text-xl' /></a>
                    <a className='hover:text-[#e7c100] duration-500 ease-in-out transition-all' href="http://" target="_blank" rel="noopener noreferrer"><FaYoutube className='text-xl' /></a>
                </div>
            </div>


        </div >
    )
}

export default Footer
