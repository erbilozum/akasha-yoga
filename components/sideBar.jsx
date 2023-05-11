import React from 'react';
import {FaInstagram, FaWhatsapp, FaYoutube} from 'react-icons/fa';

const SiderBar = () => {
    return (
        <div className={"fixed -left-24 top-48  z-50"}>
            <div
                className={"hover:translate-x-24 space-y-1 transition-all duration-400 ease-in-out w-32 h-10 flex flex-row justify-between bg-[#25D366] text-white  items-center"}>
                <div className={""}>
                    <a className={"no-underline text-white"} href={"https://wa.me/+905334193264"} target={"_blank"}>
                        <span>Whatsapp</span>
                    </a>
                </div>
                <div className={"m-2"}>
                    <span><FaWhatsapp/></span>
                </div>
            </div>
            <div
                className={"hover:translate-x-24 space-y-1 transition-all duration-400 ease-in-out w-32 h-10 flex flex-row justify-between bg-[#833AB4] text-white  items-center"}>
                <div className={""}>
                    <a className={"no-underline text-white"} href={"https://www.instagram.com/akashayoga.tr"}
                       target={"_blank"}>
                        <span>Instagram</span>
                    </a>
                </div>
                <div className={"m-2"}>
                    <span><FaInstagram/></span>
                </div>
            </div>
            <div
                className={"hover:translate-x-24 space-y-1 transition-all duration-400 ease-in-out w-32 h-10 flex flex-row justify-between bg-[#c4302b] text-white  items-center"}>
                <div className={""}>
                    <a className={"no-underline text-white"} href={"https://www.youtube.com/@OzgeKucukkaya"}
                       target={"_blank"}>
                        <span>Youtube</span>
                    </a>
                </div>
                <div className={"m-2"}>
                    <span><FaYoutube/></span>
                </div>
            </div>
        </div>
    );
};

export default SiderBar;
;
;