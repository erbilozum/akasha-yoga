import React from 'react';
import Image from 'next/image';

const AboutCard = ({data}) => {
    const style = {
        height: 300,
    };
    return (
        <div className={"flex flex-col w-full bg-[#e7c100]"}>
            <div className={"flex flex-col w-full"}>
                <div>
                    <h3 className={"uppercase text-gray-700 font-bold text-lg"}>{data.header}</h3>
                </div>
                <div className={data.id % 2 == 0 ? "flex flex-row" : "flex flex-row-reverse"}>
                    <div className={"bg-[#e7c100] w-2/6 sm:w-1/6 flex items-center justify-center"}>
                        <Image
                            className={"rounded-full bg-[#e7c100]"}
                            src={data.imageURL}
                            alt={data.image_alt}
                            width={200}
                            height={200}/>
                    </div>
                    <div className={"w-4/6 sm:w-5/6 px-1 "}>
                        <span className={"p-6 flex text-justify text-sm sm:text-md leading-1 sm:leading-8"}>
                            {data.description}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutCard;