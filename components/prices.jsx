import React from 'react';
import PriceCardBig from './UI/priceCardBig';
import PriceCardSmall from './UI/priceCardSmall';

const Prices = () => {
    const data = [
        {
            id: 1,
            colorCode: "#A95394",
            imageURL: '/prices/yoga_hub1.webp',
            headerTop: 'Başlangıç Seviye',
            headerSub: "8 Saat",
            items: [
                "Yoga nedir?",
                "Nefes nedir?",
                "Meditasyon nedir?",
                "Yoga kursu tadında pozlara doğru nasıl girilir?",
                "Aya Selam, Güneşe Selam A ve B",
                " Fasya, Bedenini farket ve daha teknik bilgiler."
            ]
        }, {
            id: 2,
            colorCode: "#357A5B",
            imageURL: '/prices/yoga_hub2.webp',
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
        }, {
            id: 3,
            colorCode: "#F16325",
            imageURL: '/prices/yoga_hub3.webp',
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
        }, {
            id: 4,
            colorCode: "#1FB6EB",
            imageURL: '/prices/yoga_hub4.webp',
            headerTop: 'Online',
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
        <div name={"prices"} className={"container mx-auto px-4 select-none"}>
            <div className={"hidden sm:block sm:visible"}>
                {/*Header*/}
                <div className={"tracking-widest uppercase text-center mt-10"}>
                    <h2 className={"text-3xl font-Avanir"}>Sınıflarımız</h2>
                    <p className={"text-sm font-Poppins"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, enim?</p>
                </div>
                {/*Content*/}
                <div className={"flex flex-col sm:flex-row justify-center items-stretch mb-10 sm:space-x-6"}>
                    {data.map((item, index) => (
                        <div key={index} className={"w-full  sm:w-1/4 flex items-stretch mb-2"}>
                            <PriceCardBig data={item} />
                        </div>
                    ))
                    }
                </div>
            </div>
            <div className={"visible sm:hidden"}>
                {/*Header*/}
                <div className={"tracking-widest uppercase text-center mt-10"}>
                    <h2 className={"text-3xl font-Avanir"}>Sınıflarımız</h2>
                    <p className={"text-sm font-Poppins"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, enim?</p>
                </div>
                {/*Content*/}
                <div className={"flex flex-col sm:flex-row justify-center items-stretch mb-10 sm:space-x-6"}>
                    {data.map((item, index) => (
                        <div key={index} className={"w-full sm:w-1/4 flex items-stretch mb-2"}>
                            <PriceCardSmall data={item} />
                        </div>
                    ))}
                </div>
            </div>
        </div >
    )
}

export default Prices