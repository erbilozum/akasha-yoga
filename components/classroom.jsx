import React from 'react';
import Image from 'next/image';
import {data} from "/components/Data/classroomData.js";

const Classroom = () => {


    return (
        <div name={"classroom"} className={"container mx-auto text-gray-400 select-none items-center"}>
            <div className={"tracking-widest uppercase text-center mt-10 "}>
                <h2 className={"text-3xl font-Avanir "}>Çalışma Gruplarımız</h2>
                <p className={"text-sm font-Poppins"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque,
                    enim?</p>
            </div>
            <div
                className={"flex flex-col items-center sm:flex-row sm:items-stretch justify-between mb-10 sm:space-x-6"}>
                {data.map((item, index) => (
                    <div key={index}
                         className={"border hover:bg-gray-100 mt-6 sm:mt-0 bg-white border-gray-200 rounded-xl shadow-xl w-full sm:w-1/3 px-6"}>
                        <div className='flex items-center justify-center'>
                            <Image
                                className={"w-1/3"}
                                src={item.imageUrl}
                                alt={item.imageAlt}
                                width={400}
                                height={400}
                            />
                        </div>
                        <h3 className={"text-xl font-bold uppercase mb-2 text-gray-700 text-center"}>{item.name}</h3>
                        <p className={"text-gray-700 text-sx sm:text-md tracking-normal sm:tracking-wider justify-between text-justify"}>{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Classroom;