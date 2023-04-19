import React, { useState } from 'react';
import Image from 'next/image';

const Classroom = () => {

    const data = [
        {
            id: 1,
            name: "Astanga Yoga",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quod dolorem nam beatae sit voluptatem sequi natus ea odit. Id nulla necessitatibus recusandae quos dolores deleniti error minima corrupti! Earum?",
            imageUrl: "/classroom/poster-1.png",
            imageAlt: "image-1"
        },
        {
            id: 2,
            name: "Iyengar Yoga",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique deleniti molestias aspernatur ea pariatur doloribus, minus officia, earum, ipsa perferendis explicabo ducimus neque labore. Exercitationem perspiciatis commodi tempore atque maxime! Obcaecati quod dolorem nam beatae sit voluptatem sequi natus ea odit. Id nulla necessitatibus recusandae quos dolores deleniti error minima corrupti! Earum?",
            imageUrl: "/classroom/poster-2.png",
            imageAlt: "image-2"
        },
        {
            id: 3,
            name: "Lorem Yoga",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repellat eaque placeat ipsa pariatur, hic vitae ullam veritatis tempore delectus, velit rerum harum dolor reiciendis, eius nemo non debitis voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quod dolorem nam beatae sit voluptatem sequi natus ea odit. Id nulla necessitatibus recusandae quos dolores deleniti error minima corrupti! Earum?",
            imageUrl: "/classroom/poster-3.png",
            imageAlt: "image-3"
        }
    ];
    return (
        <div name={"classroom"} className={"container mx-auto text-gray-400 select-none items-center"} >
            <div className={"tracking-widest uppercase text-center mt-10 "}>
                <h2 className={"text-3xl font-Avanir "}>Çalışma Gruplarımız</h2>
                <p className={"text-sm font-Poppins"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, enim?</p>
            </div >
            <div className={"flex flex-col items-center sm:flex-row sm:items-stretch justify-between mb-10  sm:space-x-6"}>
                {data.map((item, index) => (
                    <div key={index}
                        className='border hover:bg-gray-100 mt-6 sm:mt-0 bg-white border-gray-200 rounded-xl shadow-xl w-full sm:w-1/3 px-6'>
                        <div className='flex items-center justify-center'>
                            <Image
                                className={"w-1/3"}
                                src={item.imageUrl}
                                alt={item.imageAlt}
                                width={400}
                                height={400}
                            />
                        </div>
                        <h3 className="text-xl font-bold uppercase mb-2 text-gray-700 text-center">{item.name}</h3>
                        <p className="text-gray-700 text-sx sm:text-md tracking-normal sm:tracking-wider justify-between text-justify">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Classroom;