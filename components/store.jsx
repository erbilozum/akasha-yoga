import React from 'react';
import ProductCard from './UI/productCard';
import { data } from "/components/Data/storeData.js";
const Store = () => {

    return (
        <div name={"store"} className={"container mx-auto text-gray-400 select-none items-center"} >
            <div className={"tracking-widest uppercase text-center mt-10 mb-8"}>
                <h2 className={"text-3xl font-Avanir"}>Ürünlerimiz</h2>
                <p className={"text-sm font-Poppins"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, enim?</p>
            </div>
            <div className={"flex flex-wrap sm:flex-nowrapflex-row space-x-4 items-center justify-center font-NotoSans"}>
                {data.map((item, index) => (
                    <ProductCard key={index} data={item} />
                ))}
            </div>
        </div>
    );
};
export default Store;