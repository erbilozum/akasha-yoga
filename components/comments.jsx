import React from "react";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Comments = () => {
    const getConfigurableProps = () => ({
        showArrows: false,
        showStatus: false,
        showIndicators: false,
        infiniteLoop: true,
        showThumbs: false,
        useKeyboardArrows: false,
        autoPlay: true,
        stopOnHover: true,
    });
    const data = [{
        id: 1,
        imageUrl: '/customers/human1.jpg',
        fullName: 'Jamala',
        comment: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit laborum dolores asperiores id dolorem odio eaque explicabo impedit similique ducimus ad quae magnam eos magni possimus blanditiis, et ullam qui!   '
    },
    {
        id: 2,
        imageUrl: '/customers/human2.jpg',
        fullName: 'Asuman KRAUSE',
        comment: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit laborum dolores asperiores id dolorem odio eaque explicabo impedit similique ducimus ad quae magnam eos magni possimus blanditiis, et ullam qui!   '
    },
    {
        id: 3,
        imageUrl: '/customers/human3.jpg',
        fullName: 'Teoman',
        comment: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit laborum dolores asperiores id dolorem odio eaque explicabo impedit similique ducimus ad quae magnam eos magni possimus blanditiis, et ullam qui!   '
    },
    {
        id: 4,
        imageUrl: '/customers/human4.jpg',
        fullName: 'Mesut SURE',
        comment: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit laborum dolores asperiores id dolorem odio eaque explicabo impedit similique ducimus ad quae magnam eos magni possimus blanditiis, et ullam qui!   '
    }]
    return (
        <div name={"comments"} className={"container mx-auto px-4 mb-10"}>
            <div className={"tracking-widest uppercase text-center mt-10 mb-8"}>
                <h2 className={"text-4xl font-Avanir "}>Öğrencilerimizden</h2>
                <p className={"text-sm font-Poppins"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, enim?</p>
            </div>
            <div className={"flex flex-col"}>
                <Carousel
                    showArrows={false}
                    showStatus={false}
                    showIndicators={false}
                    infiniteLoop={true}
                    showThumbs={false}
                    useKeyboardArrows={false}
                    autoPlay={true}
                    stopOnHover={true}
                    className={"mb-4"}
                >
                    {data.map((item, index) =>
                    (
                        <div key={index} className="flex flex-row justfiy-center" >
                            {/*Image*/}
                            <div className="flex items-center justify-center w-2/12">
                                <Image
                                    style={{ width: 150, height: 150 }}
                                    className="rounded-full"
                                    src={item.imageUrl}
                                    alt={item.fullName}

                                    width={800}
                                    height={800}
                                />
                            </div>
                            {/*Comment*/}
                            <div className="flex flex-col justify-center w-10/12">
                                <span className="font-NotoSans tracking-wider font-bold text-2xl text-gray-700  uppercase text-start">
                                    {item.fullName}
                                </span>
                                <span className="  text-lg italic text-gray-700 text-start">
                                    {item.comment}
                                </span>
                            </div>

                        </div>
                    ))
                    }

                </Carousel >
            </div >
        </div >
    );
};

export default Comments;
