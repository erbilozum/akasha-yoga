import React, { useEffect, useState } from 'react'
import ProductCard from './productCard';

const Store = () => {
    const data = [
        {
            id: 1,
            name: "Yoga Matı",
            brand: "Akasha Brand",
            size: "60 x 183 cm",
            price: "250₺",
            imageUrl: "/store/yoga-mat-thumbnail.png"
        },
        {
            id: 1,
            name: "Yoga Havlusu",
            brand: "Akasha Brand",
            size: "185 x 63 cm",
            price: "380₺",
            imageUrl: "/store/yoga-towel-thumbnail.png"
        }
        ,
        {
            id: 3,
            name: "Mat Çantası",
            brand: "Akasha Brand",
            size: "89 x 48 cm",
            price: "450₺",
            imageUrl: "/store/yoga-bag-thumbnail.png"
        },
        {
            id: 4,
            name: "Swing Kemeri",
            brand: "Akasha Brand",
            size: "120cm",
            price: "600₺",
            imageUrl: "/store/yoga-swing-belt-thumbnail.png"
        }

    ];

    return (
        <div name={"store"} className={"container mx-auto px-4 mb-10 bg-white"}>
            <div className={"tracking-widest uppercase text-center mt-10 mb-8 "}>
                <h2 className={"text-4xl font-Avanir "}>Ürünlerimiz</h2>
                <p className={"text-sm font-Poppins"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, enim?</p>
            </div >
            <div className='flex flex-row space-x-4 items-center justify-center font-NotoSans'>
                {data.map((item, index) => (
                    <ProductCard key={index} data={item} />
                ))}
            </div>

        </div>
    )
}
export default Store