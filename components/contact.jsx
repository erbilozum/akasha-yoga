import React from 'react'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import Image from "next/image";

const Contact = () => {
    return (
        <div name={"contact"} className={"container mx-auto px-4  bg-white"}>
            {/*Header*/}
            <div className={" tracking-widest uppercase text-center mt-10 mb-8"}>
                <h2 className={"text-4xl font-Avanir "}>İletişimde Kalın</h2>
                <p className={"text-sm font-Poppins"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, enim?</p>
            </div>
            {/*Content*/}
            <div className='font-NatoSans'>
                {/*Sub Header*/}
                <div className='flex flex-row w-full items-center justify-center mb-10 font-NotoSans'>
                    <p className='text-lg uppercase'>Bizi Takip Edin</p>
                    <div className='flex flex-row space-x-4 ml-4 text-2xl items-center justify-center'>
                        <div className='flex items-center '>
                            <a href="http://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                                <Image src={"/logos/logo-facebook.png"} alt={"facebook"} title={"facebook"} width={35} height={35} />
                            </a>
                        </div>
                        <div>
                            <a href="http://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                                <Image src={"/logos/logo-instagram.png"} alt={"instagram"} title={"instagram"} width={35} height={35} />
                            </a>
                        </div>
                    </div>
                </div>
                {/*Form*/}
                <form className="w-full flex flex-col items-center justify-center space-y-2">
                    <input className='w-2/6 p-1 bg-white border-fuchsia-800 border-2' placeholder="Ad Soyad" />
                    <input className=' w-2/6 p-1 bg-white border-fuchsia-800 border-2' placeholder="E-Posta" />
                    <input className='w-2/6 p-1 bg-white  border-fuchsia-800 border-2' placeholder="Telefon" />
                    <div className='flex justify-end w-1/3'>
                        <button className='bg-fuchsia-800 hover:bg-fuchsia-700 duration-500 transition-all ease-in-out text-white tracking-wider px-2 py-1'>Kayıt Ol</button>

                    </div>
                </form>

            </div>

            {/*Working Days */}
            <div className='flex flex-col font-NotoSans '>
                <p className='text-lg text-center mt-10 font-bold'>Çalışma Saatleri: Pazartesi-Cuma 10:00-19:00</p>
                <p className='text-sm text-center'>Eğer telefon ile ulaşamazsanız lütfen sms, WhatsApp veya e-posta ile iletişime geçiniz.   </p>
                <div className="flex flex-row mt-10 mb-10 justify-center ">
                    <div className="flex text-xs font-bold w-1/6">
                        <span>Akasha Yoga Merkez </span>
                    </div>
                    <div className="flex flex-col text-xs w-1/6">
                        <span>Özge KÜÇÜKKAYA, +90 5334193264 </span>
                        <span className={"mt-2  "}>info@akashayoga.com.tr </span>
                    </div>
                    <div className="flex text-xs w-1/6">
                        <span>Bayburtlu İnsaat Satıs ofisi karsısı, Dream of, 34582 Silivri/İstanbul </span>
                    </div>
                </div>
            </div>

            {/*Google Maps*/}
            <div className={"mt-10"}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1503.6274674320698!2d28.246744492121582!3d41.08527619933161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b53b5945f85b85%3A0x40d61b65c30a5d6a!2sAkasha%20Yoga%20Studio!5e0!3m2!1str!2str!4v1681165562498!5m2!1str!2str" style={{ border: 0, width: "100%", height: "40vh" }} allowfullscreen="true" loading="lazy" referrerpolicy="no - referrer - when - downgrade"></iframe>
            </div>
        </div >
    )
}

export default Contact