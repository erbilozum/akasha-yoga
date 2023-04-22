import React from 'react'
import AboutCard from './UI/aboutCard';

const About = () => {
    const data = [
        {
            id: "1",
            header: "Akasha Yoga",
            description: "Yoga ve kişisel gelişim konularıyla ilgili blog yazılarımızı okuyabilir, yoga pozlarını öğrenmek için videolarımızı izleyebilirsiniz.Silivri& apos;deki stüdyomuzda, her seviyede yogiye uygun derslerimiz mevcuttur.Ayrıca, özel dersler de sunuyoruz ve bu dersler, özellikle bireysel ihtiyaçları olan kişiler için tasarlanmaktadır.Bizimle birlikte yoga yaparak, bedeninizi ve zihninizi güçlendirebilir, stresi azaltabilir, daha esnek ve zinde bir vücuda sahip olabilirsiniz.",
            imageURL: "/about/about_1.webp",
            image_alt: "about_1"
        },
        {
            id: "2",
            header: "Stüdyomuz Hakkında",
            description: "Salonlarımız düzenli olarak dezenfekte edilir ve hijyen kurallarına uyulur. Tüm ekipmanlarımız da düzenli olarak temizlenir ve dezenfekte edilir. Bu sayede, müşterilerimiz rahatlıkla yoga yapabilirler ve hijyenik bir ortamda egzersiz yapmanın keyfini çıkarabilirler. Ayrıca, işletmemizde sosyal mesafe kurallarına da uyulur ve müşterilerimizin güvenliği için gerekli önlemler alınır.",
            imageURL: "/about/about_2.webp",
            image_alt: "about_2"
        },
    ]

    return (
        <div name={"about"} className={"container mx-auto px-4 select-none z-10"}>
            <div className={"tracking-widest uppercase text-center mt-10"}>
                <h2 className={"text-3xl font-Avanir"}>Hakkımızda</h2>
                <p className={"text-sm font-Poppins"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, enim?</p>
            </div >
            {data.map((item, index) => (
                <AboutCard key={index} data={item} />
            ))}
        </div >
    )
}

export default About