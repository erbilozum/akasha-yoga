import React, { useState } from 'react';
import Image from 'next/image';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import BasketCard from './basketCard';

const ProductCard = (props) => {
    const [isLoading, setIsLoading] = useState(true);
    const MySwal = withReactContent(Swal);
    const [count, setCount] = useState(1);
    const [showBasket, setShowBasket] = useState(false);
    const handleChangeVisible = () => {
        setShowBasket(false);
    };
    return (
        <div className='mb-4'>
            <div className='group relative overflow-hidden'>
                <div className='h-48 w-48 z-90'>
                    <Image
                        src={props.data.imageUrl}
                        alt={props.data.imageAlt}
                        title={props.data.name}
                        placeholder={"blur"}
                        onClick={() => setShowBasket(!showBasket)}
                        blurDataURL={'/common/placeholder.webp'}
                        className={isLoading ? "invisible sm:block " : "text-2xl visible"}
                        height={200} width={200}
                        onLoadingComplete={() => setIsLoading(false)}
                    />
                </div>
                <div className="group-hover:h-12 h-0 w-full duration-400 ease-in-out transition-all absolute bottom-0">
                    <div className='bg-black text-white h-full opacity-60 flex items-center justify-center'>
                        <span className={"text-center"}>{props.data.name}</span>
                    </div>
                </div>
            </div>
            <div className={"flex flex-col justify-center items-center text-center mt-2"}>
                <span className={"text-sm"}>Ebatlar:{props.data.size}</span>
                <div className={"flex w-1/6 border-b mt-2 border-gray-700"}></div>
                <span className={"text-sm"}>{props.data.price}₺</span>
                <BasketCard data={props.data} isVisible={showBasket} close={handleChangeVisible} />
            </div>
        </div>
    );
};

export default ProductCard;