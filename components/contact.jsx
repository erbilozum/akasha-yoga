import React from 'react';
import Image from "next/image";
import { data } from "/components/Data/contactData";
const Contact = () => {
    return (
        <div name={"contact"} className={"container mx-auto text-gray-400 select-none items-center"} >
            {/*Header*/}
            < div className={"tracking-widest uppercase text-center mt-10 mb-8"} >
                <h2 className={"text-3xl font-Avanir"}>İletişimde Kalın</h2>
                <p className={"text-sm font-Poppins"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, enim?</p>
            </div >
            {/*Content*/}
            < div className={"font-NatoSans"} >
                {/*Sub Header*/}
                < div className={"flex flex-row w-full items-center justify-center mb-10 font-NotoSans"}>
                    <div className={"flex items-center"}>
                        <p className={"text-lg uppercase h-full my-auto"}>Bizi Takip Edin</p>
                    </div>
                    <div className={"flex flex-row space-x-2 ml-4 text-2xl items-center justify-center"}>
                        <div className={"hover:scale-110 duration-500 transition-all ease-in-out"}>
                            <a href={data.facebookURL} target={"_blank"} rel={"noopener noreferrer"}>
                                <Image src={"/logos/logo-facebook.png"} alt={"facebook"} title={"facebook"} width={30} height={30} />
                            </a>
                        </div>
                        <div className={"hover:scale-110 duration-500 transition-all ease-in-out"}>
                            <a href={data.instagramURL} target={"_blank"} rel={"noopener noreferrer"}>
                                <Image src={"/logos/logo-instagram.png"} alt={"instagram"} title={"instagram"} width={30} height={30} />
                            </a>
                        </div>
                        <div className={"hover:scale-110 duration-500 transition-all ease-in-out"}>
                            <a href={data.youtubeURL} target={"_blank"} rel={"noopener noreferrer"}>
                                <Image src={"/logos/logo-youtube.png"} alt={"youtube"} title={"youtube"} width={30} height={30} />
                            </a>
                        </div>
                    </div>
                </div >
                {/*Form*/}
                <form className={"w-full flex flex-col items-center justify-center space-y-2"} >
                    <input type={"text"} className={"w-full sm:w-2/6 p-1 bg-white border-fuchsia-800 border-2 select-text"} placeholder={"Full Name"} required />
                    <input type={"email"} className={"w-full sm:w-2/6 p-1 bg-white border-fuchsia-800 border-2 select-text"} placeholder={"info@somebody.com"} required />
                    <input type={"tel"} className={"w-full sm:w-2/6 p-1 bg-white  border-fuchsia-800 border-2 select-text"} placeholder={"0 (123) 456 78 90"} required />
                    <div className={"flex justify-end w-full sm:w-1/3"}>
                        <button className={"bg-fuchsia-800 hover:bg-fuchsia-700 duration-500 transition-all ease-in-out text-white tracking-wider px-2 py-1"}>Kayıt Ol</button>
                    </div>
                </form >
            </div >
            {/*Working Days */}
            < div className={"flex flex-col font-NotoSans"}>
                <div>
                    <p className={"text-lg text-center mt-10 font-bold"}>Çalışma Saatleri: {data.workingHours}</p>
                    <p className={"text-sm text-center"}>Eğer telefon ile ulaşamazsanız lütfen sms, WhatsApp veya e-posta ile iletişime geçiniz.</p>
                </div>
                <div className={"flex flex-col sm:flex-row mt-10 mb-10 text-center justify-center"}>
                    <div className={"flex flex-col font-bold text-xs w-full text-center sm:text-start sm:w-1/6 uppercase"}>
                        <span>{data.company}</span>
                    </div>
                    <div className={"flex flex-col text-xs w-full text-center sm:text-start sm:w-1/6"}>
                        <span>{data.owner}, {data.phone} </span>
                        <span className={"mt-2"}>{data.mail}</span>
                    </div>
                    <div className={"flex text-xs w-full text-center sm:text-start sm:w-1/6"}>
                        <span>{data.address}</span>
                    </div>
                </div>
            </div >
            {/*Google Maps*/}
            < div className={"mt-10"} >
                <iframe src={data.googleMapsURL} style={{ border: 0, width: "100%", height: "40vh" }} allowfullscreen={"true"} loading={"lazy"} referrerpolicy={"no - referrer - when - downgrade"}></iframe>
            </div >
        </div >
    )
}

export default Contact