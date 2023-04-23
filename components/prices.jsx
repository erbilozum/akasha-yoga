import React from 'react';
import PriceCardBig from './UI/priceCardBig';
import PriceCardSmall from './UI/priceCardSmall';
import { data } from "/components/Data/pricesData.js";
const Prices = () => {

    return (
        <div name={"prices"} className={"container mx-auto px-4 select-none"}>
            <div className={"hidden sm:block sm:visible"}>
                {/*Header*/}
                <div className={"tracking-widest uppercase text-center mt-10"}>
                    <h2 className={"text-3xl font-Avanir"}>Sınıflarımız</h2>
                    <p className={"text-sm font-Poppins"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, enim?</p>
                </div>
                {/*Content*/}
                <div className={"flex flex-col sm:flex-row justify-center items-stretch mb-10 sm:space-x-6"}>
                    {data.map((item, index) => (
                        <div key={index} className={"w-full  sm:w-1/4 flex items-stretch mb-2"}>
                            <PriceCardBig data={item} />
                        </div>
                    ))
                    }
                </div>
            </div>
            <div className={"visible sm:hidden"}>
                {/*Header*/}
                <div className={"tracking-widest uppercase text-center mt-10"}>
                    <h2 className={"text-3xl font-Avanir"}>Sınıflarımız</h2>
                    <p className={"text-sm font-Poppins"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, enim?</p>
                </div>
                {/*Content*/}
                <div className={"flex flex-col sm:flex-row justify-center items-stretch mb-10 sm:space-x-6"}>
                    {data.map((item, index) => (
                        <div key={index} className={"w-full sm:w-1/4 flex items-stretch mb-2"}>
                            <PriceCardSmall data={item} />
                        </div>
                    ))}
                </div>
            </div>
        </div >
    )
}

export default Prices