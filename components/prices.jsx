import React from 'react'
import { FaCheck } from 'react-icons/fa'
import Image from 'next/image';
const Prices = () => {
    const data = [
        {
            id: 1,
            colorCode: "#A95394",
            imageURL: '/prices/yoga_hub1.png',
            headerTop: 'Başlangıç Seviye',
            headerSub: "8 Saat",
            items: [
                "Yoga nedir?",
                "Nefes nedir?",
                "Meditasyon nedir?",
                "    Yoga kursu tadında pozlara doğru nasıl girilir?",
                "Aya Selam, Güneşe Selam A ve B",
                " Fasya, Bedenini farket ve daha teknik bilgiler."
            ]
        },
        {
            id: 2,
            colorCode: "#357A5B",
            imageURL: '/prices/yoga_hub2.png',
            headerTop: 'Orta Seviye',
            headerSub: "8 Saat",
            items: [
                "Surya Namaskartation",
                "Ustrasanae",
                "Navasana",
                "Dhanurasana",
                "Urdhva Dhanurasana",
                "Supta Vajrasana",
                "Baddha Padmasana",
                "Eka Pada Rajakapotasana",
                "Virabhadrasana 3"
            ]
        },
        {
            id: 3,
            colorCode: "#F16325",
            imageURL: '/prices/yoga_hub3.png',
            headerTop: 'İleri Seviye',
            headerSub: "8 Saat",
            items: [
                "Parivrtta Utkatasana",
                " ArdhaChandrasana",
                "Vasisthasana",
                "Marichyasana 1",
                "Marichyasana 2",
                "  Marichyasana 3",
                " Baddha Padmasana",
                "Eka Pada Rajakapotasana",
                " Virabhadrasana 3"
            ]
        },
        {
            id: 4,
            colorCode: "#1FB6EB",
            imageURL: '/prices/yoga_hub4.png',
            headerTop: 'Online Yoga Eğitimi',
            headerSub: "8 Saat",
            items: [
                "İndirilebilir içerik",
                " İstediğin zaman izle",
                "Tüm platformlarda izlenebilir",
                "Online ve yüzyüze destek",
                "Aya Selam, Güneşe Selam A ve B",
                "Ayda 2 saat fiziki derslere katılma olanağı"
            ]
        }
    ]
    return (
        <div name={"prices"} className={"container mx-auto px-4 mb-10"}>
            <div className={" tracking-widest uppercase text-center mt-10 mb-8"}>
                <h2 className={"text-4xl font-Avanir "}>Sınıflarımız</h2>
                    <p className={"text-sm font-Poppins"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, enim?</p>
            </div>
            <div className={"flex flex-row justify-center mb-10 space-x-6"}>
                {data.map((item, index) => (
                    <div key={index} className='border hover:bg-[gray-100] duration-500 ease-in-out transition-all bg-white border-gray-200 rounded-b-xl shadow-xl w-1/4 '>
                        <div className={`h-2 w-full text-[${item.colorCode}] bg-[${item.colorCode}]`}></div>
                        <div className='px-6'>
                            <div className={"flex flex-col items-center justify-center mt-4 font-Philosopher"}>
                                <Image src={item.imageURL} alt="logo4" width={60} height={60} />
                                <h2 className={`text-xl text-[${item.colorCode}] font-bold mt-4 mb-4`}>{item.headerTop}</h2>
                                <h2 className={`text-3xl  text-[${item.colorCode}] mb-2 font-bold`}>{item.headerSub} <span className='text-sm'>/ay</span></h2>
                                <button className={`bg-[${item.colorCode}] text-white opacity-40 hover:opacity-80 w-full mx-4 py-3 mb-10 mt-10 border  hover:text-gray-100 font-bold duration-500 transition ease-in-out`}>Teklif İste</button>
                            </div>

                            {
                                item.items.map((subItem, index) => (
                                    <div key={index} className={"flex flex-row justfiy-between items-center mb-2"}>
                                        <FaCheck className={`text-[${item.colorCode}] text-md`} />
                                        <p className={"px-2 text-gray-700 text-sm"}>
                                            {subItem}
                                        </p>
                                    </div>
                                ))
                            }
                        </div></div>


                ))}

            </div>
        </div >
    )
}

export default Prices