import React from 'react'
import { FaCheck } from 'react-icons/fa'
import Image from 'next/image';
import { useState } from 'react';
const PriceCardBig = (props) => {
    return (

        <div className={"border h-full w-full mb-2  hover:bg-[gray-100] duration-500 ease-in-out transition-all bg-white border-gray-200 rounded-b-xl shadow-xl sm:mb-0"}>
            <div className={`h-2 w-full text-[${props.data.colorCode}] bg-[${props.data.colorCode}]`}>
            </div>
            <div className='px-6'>
                <div className={"flex flex-col items-center justify-center mt-4 font-Philosopher"}>
                    <Image src={props.data.imageURL} alt="logo4" width={60} height={60} />
                    <h2 className={`text-xl text-[${props.data.colorCode}] font-bold mt-3 mb-2`}>{props.data.headerTop}</h2>
                    <h2 className={`text-xl text-[${props.data.colorCode}] font-bold`}>{props.data.headerSub} <span className='text-sm font-bold'>/ ay</span></h2>
                    <button className={`rounded bg-[${props.data.colorCode}] text-white opacity-40 hover:opacity-80 w-full mx-4 py-2 border hover:text-gray-100 font-bold duration-500 transition ease-in-out`}>Teklif İste</button>
                </div>
                <div>
                    {
                        props.data.items.map((subItem, index) => (
                            <div key={index} className={"flex items-center my-2"}>
                                <FaCheck className={`text-[${props.data.colorCode}] text-sm`} />
                                <span className={"px-2 text-gray-700 text-sm"}>{subItem}</span>
                            </div>))
                    }
                </div>
            </div>
        </div>
    )
}

export default PriceCardBig