import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import Image from "next/image";
import { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";

const BasketCard = ({ isVisible, close, data }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [count, setCount] = useState(1);
    const handleIncrease = () => { setCount(count + 1); };
    const handleDecrease = () => { setCount(count - 1); };
    if (!isVisible) return null;
    return (
        <div className={"fixed flex-col w-full z-40 inset-0 opacity-100 backdrop-blur-sm flex raundex-xl items-center justify-center"}>
            <OutsideClickHandler onOutsideClick={() => { close(); }}>
                <div className={"bg-white flex flex-row border-2 items-center opacity-100 w-full justify-center rounded-xl select-none relative"}>
                    {/*Modal Close Button */}
                    <div onClick={() => close()} className={"absolute h-6 w-6 rounded-full bg-gray-200 hover:animate-pulse text-gray-700 text-xl -top-6 -right-6 items-center justify-center flex"}>
                        <AiOutlineClose className={"font-bold"} />
                    </div>
                    {/*Modal Content */}
                    <div className={"flex flex-col w-full"}>
                        {/*Header Text */}
                        <div className={"text-md font-gray-700 text-start p-2 font-bold"}>
                            <span>Sepete Ekle</span>
                        </div>
                        {/*Content*/}
                        <div className="flex flex-row px-12 py-8">
                            <div className={"w-2/6"}>
                                <Image
                                    src={data.imageUrl}
                                    alt={data.imageAlt}
                                    title={data.name}
                                    placeholder={"blur"}
                                    blurDataURL="/store/placeholder.png"
                                    width={150}
                                    height={150}
                                    onLoadingComplete={() => setIsLoading(false)}
                                />
                            </div>
                            <div className={"w-4/6 px-4"}>
                                {/*Product Detail*/}
                                <div className={"flex flex-col text-start text-sm space-y-1"}>
                                    <div className={"flex flex-row"}>
                                        <div className={"w-5/12 font-bold"}>
                                            <span>Kod</span>
                                        </div>
                                        <div className={"w-7/12"}>{data.productCode}</div>
                                    </div>
                                    <div className={"flex flex-row"}>
                                        <div className={"w-5/12 font-bold"}>
                                            <span>Marka</span>
                                        </div>
                                        <div className={"w-7/12"}>{data.brand}</div>
                                    </div>
                                    <div className={"flex flex-row"}>
                                        <div className={"w-5/12 font-bold"}>
                                            <span>Ürün Adı</span>
                                        </div>
                                        <div className={"w-7/12"}>{data.name}</div>
                                    </div>
                                    <div className={"flex flex-row"}>
                                        <div className={"w-5/12 font-bold"}>
                                            <span>Ebatlar</span>
                                        </div>
                                        <div className={"w-7/12"}>{data.size}</div>
                                    </div>
                                    <div className={"flex flex-row"}>
                                        <div className={"w-5/12 font-bold"}>
                                            <span>Ebatlar</span>
                                        </div>
                                        <div className={"w-7/12"}>{data.price}</div>
                                    </div>
                                    {/*Colors*/}
                                    <div className={"flex flex-row items-center"}>
                                        <div className={"font-bold w-5/12"}>
                                            <span>Renk:</span>
                                        </div>
                                        <div className={"flex flex-row w-7/12 space-x-2 p-2"}>
                                            <div className={"w-4 h-4 shadow-xl drop-shadow hover:scale-110 duration-300 transition-all ease-in-out rounded-full bg-indigo-500"}></div>
                                            <div className={"w-4 h-4 shadow-xl drop-shadow hover:scale-110 duration-300 transition-all ease-in-out rounded-full bg-black"}></div>
                                            <div className={"w-4 h-4 shadow-xl drop-shadow hover:scale-110 duration-300 transition-all ease-in-out rounded-full bg-fuchsia-500"}></div>
                                            <div className={"w-4 h-4 shadow-xl drop-shadow hover:scale-110 duration-300 transition-all ease-in-out rounded-full bg-green-500"} ></div>
                                        </div>
                                    </div>
                                </div>
                                {/*Count*/}
                                <div className="flex flex-row ">
                                    <div className={"flex flex-col mt-2 w-1/2"}>
                                        <div className={"text-sm font-bold text-start mb-2"}>
                                            <span>Sipariş Adedi</span>
                                        </div>
                                        <div className={"flex flex-row"}>
                                            <div className={"bg-gray-200 rounded-full h-6 w-6 text-center duration-300 ease-in-out transition-all hover:scale-110 flex items-center justify-center"} >
                                                <button onClick={() => { handleIncrease(); }}  >
                                                    <FaPlus className={"text-sm font-normal"} />
                                                </button>
                                            </div>
                                            <div>
                                                <span className={"px-2 font-bold"}>{count}</span>
                                            </div>
                                            <div className={"bg-gray-200 rounded-full h-6 w-6 text-center duration-300 ease-in-out transition-all hover:scale-110 flex items-center justify-center"}>
                                                <button onClick={() => handleDecrease()}>
                                                    <FaMinus className={"text-sm"} />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={"text-xl w-24 p-2  flex items-center justify-center"}>
                                        <div className={"border-2 p-2 rounded-xl border-dashed"}>
                                            <span>{Number(data.price) * Number(count)}₺</span>
                                        </div>
                                    </div>
                                </div>
                                <div className={"flex items-center justify-end mt-2"}>
                                    <button title={"Sepete Ekle"} className={"rounded flex px-4 py-2.5 duration-400 ease-in-out transition-all border border-indigo-400 hover:bg-white hover:text-indigo-400  bg-indigo-400 text-gray-200  justify-center items-center"}>
                                        <FiShoppingCart className={"text-sm font-bold"} />
                                        <span className={"px-1 text-sm"}>Sepete Ekle</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </OutsideClickHandler>
        </div>
    );
};
export default BasketCard;
