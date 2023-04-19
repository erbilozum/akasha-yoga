import React from 'react';
import { FaCheck } from 'react-icons/fa';
import Image from 'next/image';
import { useState } from 'react';
import GetOfferCard from '@/components/UI/getOfferCard';

const PriceCardBig = (props) => {
    const [visible, setVisible] = useState(false);
    const handleClickGetOffer = () => {
        setVisible(false);
    };
    return (

        <div className={"border h-full w-full mb-2  hover:bg-[gray-100] duration-500 ease-in-out transition-all bg-white border-gray-200 rounded-b-xl shadow-xl sm:mb-0"}>
            <div className={`h-2 w-full text-[${props.data.colorCode}] bg-[${props.data.colorCode}]`}>
            </div>
            <div className='px-6'>
                <div className={"flex flex-col items-center justify-center mt-4 font-Philosopher"}>
                    <Image src={props.data.imageURL} alt="logo4" width={60} height={60} />
                    <h2 className={`text-xl text-[${props.data.colorCode}] font-bold mt-3 mb-2`}>{props.data.headerTop}</h2>
                    <h2 className={`text-xl text-[${props.data.colorCode}] font-bold`}>{props.data.headerSub} <span className='text-sm font-bold'>/ ay</span></h2>
                    <button onClick={() => setVisible(!visible)} className={`rounded bg-[${props.data.colorCode}] text-white opacity-40 hover:opacity-80 w-full mx-4 py-2 border hover:text-gray-100 font-bold duration-500 transition ease-in-out`}>Teklif İste</button>
                    {!visible ? null :
                        <div className='visible mt-1'>
                            <input className={`bg-white border-2 border-[${props.data.colorCode}] focus:outline-none focus:border-[${props.data.colorCode}] w-full text-gray-700 mt-2 px-2 py-2`} type="text" name="" id="" placeholder='Ad Soyad' />
                            <input className={`bg-white border-2 border-[${props.data.colorCode}] focus:outline-none focus:border-[${props.data.colorCode}] w-full text-gray-700 mt-2 px-2 py-2`} type="tel" name="" id="" placeholder='Telefon' />
                            <div className={`flex justify-end mt-2 hover:text-`}>
                                <button className={`bg-[${props.data.colorCode}] text-white text-end hover:scale-110 hover:transition-all hover:ease-linear hover:duration-300 text-sm rounded px-4 py-2`}>
                                    Gönder
                                </button>
                            </div>
                        </div>}
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
        </div >
    );
};

export default PriceCardBig;