import React, {useState} from 'react';
import {FaCheck} from 'react-icons/fa';
import Image from 'next/image';

const PriceCardSmall = (props) => {
    const [isShowDetail, setShowDetail] = useState(false);
    const [visible, setVisible] = useState(false);
    const handleClickGetOffer = () => {
        setVisible(false);
    };
    return (
        <div
            className={"border h-full w-full mb-2 hover:bg-[gray-100] duration-500 ease-in-out transition-all bg-white border-gray-200 rounded-b-xl shadow-xl sm:mb-0"}>
            <div className={`h-2 w-full text-[${props.data.colorCode}] bg-[${props.data.colorCode}]`}>
            </div>
            <div className={"px-6"}>
                <div className={"flex flex-col items-center justify-center mt-4 font-Philosopher mb-2"}>
                    <Image src={props.data.imageURL} alt={"logo4"} width={60} height={60}/>
                    <h2 className={`text-xl text-[${props.data.colorCode}] font-bold mt-3 mb-2`}>{props.data.headerTop}</h2>
                    <h2 className={`text-xl text-[${props.data.colorCode}] font-bold`}>{props.data.headerSub} <span
                        className={"text-sm font-bold"}>/ ay</span></h2>
                    <button onClick={() => setVisible(!visible)}
                            className={`mb-1 bg-[${props.data.colorCode}] text-white opacity-40 rounded  hover:opacity-80 w-full mx-4 py-2 border hover:text-gray-100 font-bold duration-500 transition ease-in-out`}>Teklif
                        İste
                    </button>
                    <button
                        onClick={() => setShowDetail(!isShowDetail)}
                        className={`bg-[${props.data.colorCode}] text-white opacity-40 rounded hover:opacity-80 w-full mx-4 py-2 border hover:text-gray-100 font-bold duration-500 transition ease-in-out`}>
                        {isShowDetail ? "Gizle" : "Ders İçeriği"}
                    </button>
                    {!visible ? null :
                        <div className={"visible mt-1"}>
                            <form action="https://getform.io/f/9e91b82f-b465-4863-88c1-253fd4c6ad1f" method="POST">
                                <input name={"fullName"}
                                       className={`bg-white border-2 border-[${props.data.colorCode}] focus:outline-none focus:border-[${props.data.colorCode}] text-sm w-full text-gray-700 mt-2 px-2 py-2`}
                                       type={"text"} id={"txtFullName"} placeholder={"Ad Soyad"}/>
                                <input name={"phone"}
                                       className={`bg-white border-2 border-[${props.data.colorCode}]  focus:outline-none text-sm w-full text-gray-700 mt-2 px-2 py-2`}
                                       type={"tel"} id={"txtPhone"} placeholder={"Telefon"}/>
                                <input name={"category"} className={'hidden'} value={props.data.headerTop}/>
                                <div className={`flex justify-end mt-2`}>
                                    <button type={"submit"}
                                            className={`bg-[${props.data.colorCode}] text-white text-end hover:scale-110 hover:transition-all hover:ease-linear hover:duration-300 text-sm rounded px-4 py-2`}>
                                        Gönder
                                    </button>
                                </div>
                            </form>
                        </div>}
                </div>
                <div>
                    {
                        isShowDetail ? props.data.items.map((subItem, index) => (
                            <div key={index} className={"flex items-center my-2"}>
                                <FaCheck className={`text-[${props.data.colorCode}] text-sm`}/>
                                <span className={"px-2 text-gray-700 text-sm"}>{subItem}</span>
                            </div>)) : null
                    }
                </div>
            </div>
        </div>
    );
};

export default PriceCardSmall;