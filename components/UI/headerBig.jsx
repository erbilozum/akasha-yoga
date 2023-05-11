import React from 'react'
import {Link} from 'react-scroll';
import Image from 'next/image';

const HeaderBig = ({data}) => {
    return (
        <div className={"z-30"}>
            <div className={"flex flex-row justify-between"}>
                {/*Logo*/}
                <div className={"flex items-center"}>
                    <Image
                        src='/logos/logo-akasha.png'
                        alt="akasha_yoha"
                        width={150}
                        height={200}/>
                </div>
                {/*Center*/}
                <div className={"flex"}>
                    <nav>
                        <ul className={"flex flex-row justfiy-between items-center space-x-2"}>
                            <li className={"space-x-4 flex flex-row"}>{
                                data.map((item, index) => (
                                    <div key={index}
                                         className={"px-2 pt-5 pb-2 hover:bg-[#e7c100] duration-500 ease-in-out transition-all"}>
                                        <Link activeClass={"active"} to={item.linkUrl} spy={true} smooth={true}
                                              offset={50} duration={800}>
                                            <span
                                                className={"cursor-pointer text-lg  text-gray-700 hover:text-white"}>{item.descripton}</span>
                                        </Link>
                                    </div>))}
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default HeaderBig