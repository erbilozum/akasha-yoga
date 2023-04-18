import React from "react";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CommentCard from "./UI/commentCard";

const Comments = () => {
    const data = [{
        id: 1,
        imageUrl: '/customers/human1.jpg',
        fullName: 'Jamala',
        comment: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        colorCode: "#A95394",
    },
    {
        id: 2,
        imageUrl: '/customers/human2.jpg',
        fullName: 'Zeynep TOKUŞ',
        comment: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        colorCode: "#357A5B"
    },
    {
        id: 3,
        imageUrl: '/customers/human3.jpg',
        fullName: 'Teoman',
        comment: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        colorCode: "#F16325"
    },
    {
        id: 4,
        imageUrl: '/customers/human4.jpg',
        fullName: 'Mesut SURE',
        comment: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        colorCode: "#1FB6EB"
    }]
    return (
        <div name={"comments"} className={"container mx-auto px-4 select-none z-10"}>
            <div className={"tracking-widest uppercase text-center mt-10 mb-8"}>
                <h2 className={"text-3xl font-Avanir"}>Öğrencilerimizden</h2>
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
                    className={"mb-4"}>
                    {data.map((item, index) => (
                        <CommentCard key={index} data={item} />
                    ))}
                </Carousel >
            </div >
        </div >
    );
};

export default Comments;
