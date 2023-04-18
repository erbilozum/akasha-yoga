import React, { useState } from 'react'
import Image from 'next/image'
const ProductCard = (props) => {
    const [isLoading, setIsLoading] = useState(true)
    return (
        <div className='mb-4 '>
            <div className='group relative overflow-hidden '>
                <div className='h-48 w-48 z-90 '>
                    <Image
                        src={props.data.imageUrl}
                        alt={props.imageAlt}
                        title={props.name}
                        placeholder={"blur"}
                        blurDataURL='/store/placeholder.png'
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
                <span className={"text-sm"}>{props.data.price}</span>
            </div>
        </div>
    )
}

export default ProductCard