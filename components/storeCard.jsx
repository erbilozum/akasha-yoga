import React, { useState } from 'react'
import Image from 'next/image';

const StoreCard = () => {
    const [isHover, setIsHover] = useState(false);
    const handleHover = () => {
        setIsHover(!isHover);
    }
    return (
        <div className="w-1/2 h-32">
            <div className="w-1/2">
                <div className='relative bg-green-500' onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
                    <Image src={"/store/yoga-mat-thumbnail.png"} alt={"item.name"} title={"item.name"} width={"241"} height={"241"} />
                </div>
                {
                    isHover ? <div className="bg-red-700 h-10 w-full">xxx</div > : <div className="bg-blue-700 h-10 w-full">xxx</div >


                }

            </div>


        </div>
    )
}

export default StoreCard