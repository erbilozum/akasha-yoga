import React from 'react'
import Image from 'next/image';

const Classroom = () => {
    return (
        <div name={"classroom"} className={"container mx-auto px-4 select-none"}>
            <div className={"tracking-widest uppercase text-center mt-10 mb-8"}>
                <h2 className={"text-4xl font-Avanir"}>Eğitimlerimiz</h2>
                <p className={"text-sm font-Poppins"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, enim?</p>
            </div>
            <div className={"flex flex-row justify-between mb-10 space-x-6"}>
                <div className='border hover:bg-gray-100 hover:scale-105 duration-500 ease-in-out transition-all bg-white border-gray-200 rounded-xl shadow-xl w-1/4 px-6'>
                    <div className='flex items-center justify-center'>
                        <Image
                            src={"/classroom/poster-1.png"}
                            alt="poster1"
                            width={200}
                            height={200}
                        />
                    </div>
                    <h3 className="text-3xl font-bold uppercase mb-4 text-gray-700">astanga yoga</h3>
                    <p className="text-gray-700 tracking-widest justify-between inset-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quod dolorem nam beatae sit voluptatem sequi natus ea odit. Id nulla necessitatibus recusandae quos dolores deleniti error minima corrupti! Earum?
                    </p>
                </div>
                <div className='border hover:bg-gray-100 hover:scale-105 duration-500 ease-in-out transition-all bg-white border-gray-200 rounded-xl shadow-xl w-1/4 px-6'>
                    <div className='flex items-center justify-center'>
                        <Image
                            src={"/classroom/poster-2.png"}
                            alt="poster2"
                            width={200}
                            height={200}
                        />
                    </div>
                    <h3 className="text-3xl font-bold uppercase mb-4 text-gray-700">IYENGAR YOGA</h3>
                    <p className="text-gray-700 tracking-widest justify-between inset-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam accusantium ducimus voluptatibus quos! Beatae ut possimus, placeat dolorum ratione dolore fugiat quaerat eum sed sint tempore amet. Obcaecati quas corrupti voluptate libero recusandae omnis praesentium fuga facere vero, incidunt voluptates.                    </p>
                </div>
                <div className='border hover:bg-gray-100 hover:scale-105 duration-500 ease-in-out transition-all bg-white border-gray-200 rounded-xl shadow-xl w-1/4 px-6'>
                    <div className='flex items-center justify-center'>
                        <Image
                            src={"/classroom/poster-3.png"}
                            alt="poster3"
                            width={200}
                            height={200}
                        />
                    </div>
                    <h3 className="text-3xl font-bold uppercase mb-4 text-gray-700">KUNDALINI YOGA</h3>
                    <p className="text-gray-700 tracking-widest justify-between inset-4">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate corrupti qui assumenda. Similique, aut rem quibusdam hic natus earum. Cumque, eius obcaecati! Necessitatibus laborum voluptatem aliquid, quaerat reprehenderit eos beatae!
                    </p>
                </div>
                <div className='border hover:bg-gray-100 hover:scale-105 duration-500 ease-in-out transition-all bg-white border-gray-200 rounded-xl shadow-xl w-1/4 px-6'>
                    <div className='flex items-center justify-center'>
                        <Image
                            src={"/classroom/poster-3.png"}
                            alt="poster3"
                            width={200}
                            height={200}
                        />
                    </div>
                    <h3 className="text-3xl font-bold uppercase mb-4 text-gray-700">KUNDALINI YOGA</h3>
                    <p className="text-gray-700 tracking-widest justify-between inset-4">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate corrupti qui assumenda. Similique, aut rem quibusdam hic natus earum. Cumque, eius obcaecati! Necessitatibus laborum voluptatem aliquid, quaerat reprehenderit eos beatae!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Classroom