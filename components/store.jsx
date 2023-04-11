import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import StoreCard from './storeCard';

const Store = () => {
    const data = [
        {
            id: 1,
            name: "Yoga Mat",
            brand: "Ako Yoga",
            size: "60 x 183 cm",
            price: "250₺",
            imageUrl: "/store/yoga-mat-thumbnail.png"
        },
        {
            id: 1,
            name: "Yoga Towel",
            brand: "Ako Yoga",
            size: "185 x 63 cm",
            price: "380₺",
            imageUrl: "/store/yoga-towel-thumbnail.png"
        }

    ];

    return (
        <div name={"comments"} className={"container mx-auto px-4 mb-10 bg-white"}>
            <div className={"tracking-widest uppercase text-center mt-10 mb-8 "}>
                <h2 className={"text-4xl font-Avanir "}>Ürünlerimiz</h2>
                <p className={"text-sm font-Poppins"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, enim?</p>
            </div >






            <StoreCard />








            <div className='flex flex-row space-x-4 items-center justify-center font-NotoSans'>
                {data.map((item, index) => (
                    <div key={index} >
                        <div className='flex flex-col'>,
                            <div>
                                <Image src={item.imageUrl} alt={item.name} title={item.name} width={"241"} height={"241"} />
                                <div className={"w-full h-4 bg-red-500"}></div>
                            </div>


                            <div className='text-center'>
                                <span>{item.name}</span>
                                <div className={" border-b h-1 w-full"}></div>
                                <span className=''>{item.price}</span>
                            </div>
                        </div>

                    </div>
                ))}
            </div>

        </div>
    )
}
export default Store