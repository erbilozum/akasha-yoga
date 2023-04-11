import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Parallax } from 'react-parallax';

const Youtube = () => {

    const data = [
        {
            id: 1,
            link: "https://www.youtube.com/embed/4FJQzSXb4Bk",
            description: "Bacak Esnetme Hareketleri"
        },
        {
            id: 2,
            link: "https://www.youtube.com/embed/E4voW_6hEwE",
            description: "Stres İçin Yoga"
        },
        {
            id: 3,
            link: "https://www.youtube.com/embed/JgZpP11wrgE",
            description: "Sabah Yogası"
        },
        {
            id: 4,
            link: "https://www.youtube.com/embed/f787SPnfzo4",
            description: "Güne Dinç Başla"
        },
        {
            id: 5,
            link: "https://www.youtube.com/embed/Bd5W8mpv7_4",
            description: "Omuz Esnekliği İçin Yoga "
        },
        {
            id: 6,
            link: "https://www.youtube.com/embed/UgAZMTnODh4",
            description: "Yoga Baş Duruşu"
        },
        {
            id: 7,
            link: "https://www.youtube.com/embed/RotDu-zLKWk",
            description: "Urdhva Dhanurasana"
        },
        {
            id: 8,
            link: "https://www.youtube.com/embed/9d46458di-s",
            description: "İnce Bel ve Güçlü Karın"
        },
        {
            id: 9,
            link: "https://www.youtube.com/embed/B0k0135C-9g",
            description: "Surya Namaskar"
        },
        {
            id: 10,
            link: "https://www.youtube.com/embed/Pi0OTllazWc",
            description: "Stres, Kaygı ve Endişeyi Azalt!"
        },
    ]
    return (
        <div name={"youtube"} className={"container mx-auto px-4 mb-10"}>
            <div className={"tracking-widest uppercase text-center mt-10 mb-8 "}>
                <h2 className={"text-4xl font-Avanir "}>Youtube Çalışmalarımız</h2>
                <p className={"text-sm font-Poppins"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, enim?</p>
            </div >
            <Carousel
                showArrows={true}
                showStatus={false}
                showIndicators
                infiniteLoop={true}
                showThumbs={true}
                useKeyboardArrows={true}
                autoPlay={true}
                stopOnHover={true}
                className={"mb-4"}>
                {/*Cards*/}
                {data.map((item, index) => (
                    < div key={index} className='flex flex-row items-center justify-center'>
                        <div className={"flex flex-col w-full items-center justify-center font-NatoSans"}>
                            <div className={"flex w-1/2 items-center justify-center flex-col"}>
                                <iframe width="340" height="360" src={item.link} title="Ujjayi Pranayama | Stres, Kaygı ve Endişeyi Azalt!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                <span className='text-lg'>{item.description}</span>

                            </div>
                            <div className='flex justify-center text-center mt-2    font-bold text-gray-700'>
                            </div>
                        </div>
                    </div>
                ))}



            </Carousel >

        </div>
    )
}

export default Youtube