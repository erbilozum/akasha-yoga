import React from 'react'
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {data} from "/components/Data/youtubeData.js";

const Youtube = () => {

    return (
        <div name={"youtube"} className={"container mx-auto px-4 select-none z-10"}>
            <div className={"tracking-widest uppercase text-center mt-10"}>
                <h2 className={"text-3xl font-Avanir"}>Youtube Çalışmalarımız</h2>
                <p className={"text-sm font-Poppins"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque,
                    enim?</p>
            </div>
            <Carousel
                showArrows={true}
                showStatus={false}
                showIndicators
                infiniteLoop={true}
                showThumbs={false}
                useKeyboardArrows={true}
                autoPlay={true}
                stopOnHover={true}
                className={"mb-4"}>
                {/*Cards*/}
                {data.map((item, index) => (
                    < div key={index} className="flex flex-row items-center justify-center">
                        <div className={"flex flex-col w-full items-center justify-center font-NatoSans"}>
                            <div className={"flex w-full sm:w-4/6 items-center justify-center flex-col"}>
                                <iframe className={"aspect-video"} src={item.link}
                                        title={"Ujjayi Pranayama | Stres, Kaygı ve Endişeyi Azalt!"} frameborder={"0"}
                                        allow={"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"}
                                        allowfullscreen></iframe>
                                <span
                                    className={"text-lg mb-4 font-bold uppercase text-gray-700"}>{item.description}</span>
                            </div>
                            <div className='flex justify-center text-center mt-2 '>
                            </div>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    )
}

export default Youtube