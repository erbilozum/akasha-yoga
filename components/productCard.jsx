import React from 'react'
import Image from 'next/image'
const ProductCard = (props) => {
    return (
        <div>
            <div className=''>
                <div className='group relative overflow-hidden'>
                    <div className='h-48 w-48 z-90'>
                        <Image src={props.data.imageUrl} height={200} width={200} />
                    </div>
                    <div className=" group-hover:h-12 h-0  w-full duration-4    00 ease-in-out transition-all bg-transparent opactiy-10 absolute bottom-0">
                        <div className='bg-white h-full opacity-70 flex items-center justify-center'>
                            <span className={"invisible group-hover:visible text-center"}>{props.data.name}</span>
                        </div>
                    </div>
                </div>
                <div className={"flex flex-col justify-center items-center text-center mt-10"}>
                    <span className={"text-sm"}>{props.data.name}</span>
                    <div className={"flex w-1/6 border-b mt-2 border-black"}></div>
                    <span className={"text-sm"}>{props.data.price}</span>
                </div>
            </div>

        </div>
    )
}

export default ProductCard