import React from 'react';
import ProductCard from './UI/productCard';

const Store = () => {
    const data = [
        {
            id: 1,
            productCode: "AKASHA-212921",
            name: "Yoga Matı",
            brand: "Akasha Brand",
            size: "60 x 183cm",
            price: "250",
            imageUrl: "/store/yoga-mat-thumbnail.webp",
            imageAlt: "yoga_mat",
        }, {
            id: 1,
            productCode: "AKASHA-212922",
            name: "Yoga Havlusu",
            brand: "Akasha Brand",
            size: "185 x 63cm",
            price: "380",
            imageUrl: "/store/yoga-towel-thumbnail.webp",
            imageAlt: "yoga_towel"
        }, {
            id: 3,
            productCode: "AKASHA-212923",
            name: "Mat Çantası",
            brand: "Akasha Brand",
            size: "89 x 48cm",
            price: "450",
            imageUrl: "/store/yoga-bag-thumbnail.webp",
            imageAlt: "yoga_bag"
        }, {
            id: 4,
            productCode: "AKASHA-212924",
            name: "Swing Kemeri",
            brand: "Akasha Brand",
            size: "120cm",
            price: "600",
            imageUrl: "/store/yoga-swing-belt-thumbnail.webp",
            imageAlt: "yoga_swing_belt"
        }, {
            id: 5,
            productCode: "AKASHA-212925",
            name: "Yoga Kemeri",
            brand: "Akasha Brand",
            size: "180cm",
            price: "120",
            imageUrl: "/store/yoga-belt-thumbnail.webp",
            imageAlt: "yoga_belt"
        }, {
            id: 6,
            productCode: "AKASHA-212926",
            name: "Göz Bandı",
            brand: "Akasha Brand",
            size: "29",
            price: "95",
            imageUrl: "/store/yoga-eye-with-lavander-thumbnail.webp",
            imageAlt: "yoga_eye_lavander"
        }
    ];
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