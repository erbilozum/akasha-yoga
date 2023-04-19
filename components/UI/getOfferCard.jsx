import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import OutsideClickHandler from 'react-outside-click-handler';

const GetOfferCard = ({ visible, close }) => {
    if (!visible) return null;;
    return (
        <div className={"inset-0 fixed  flex flex-col items-center justify-center z-40 backdrop-blur-sm"}>

            {/*Form Data*/}
            <OutsideClickHandler
                onOutsideClick={() => {
                    close();
                }}>
                <div className={"flex flex-col  tems-center  bg-white rounded-xl shadow-xl justify-center w-96 p-12 relative"}>
                    <div
                        onClick={() => close()}
                        className={
                            "absolute h-6 w-6 rounded-full bg-gray-300 hover:animate-pulse text-gray-700 text-xl -top-2 -right-2 items-center justify-center flex"
                        }
                    >
                        <AiOutlineClose className={"font-bold"} />
                    </div>
                    <form onSubmit={""} className={"flex flex-col"} >
                        <input placeholder='Ad Soyad' type="text" required className="px-1 py-2 text-sm bg-gray-100 border border-gray-100 hover:bg-gray-200 text-gray-700 rounded mt-2" id="txtFullName" />
                        <input placeholder="0(123)456 78 90" type="tel" required className={"px-1 py-2 text-sm bg-gray-100 border border-gray-100 hover:bg-gray-200 text-gray-700 rounded mt-2"} id="txtF1ullName" />
                        <textarea rows={"4"} placeholder="Talebiniz..." type="tel" required className={"px-1 py-2 text-sm bg-gray-100 border border-gray-100 hover:bg-gray-200 text-gray-700 rounded mt-2"} id="txtF1ullName" />

                        <button type='submit' title={"Teklif İste"} className={"bg-indigo-500 text-white px-5 py-2.5 mt-4 "}>Gönder</button>
                    </form>
                </div>

            </OutsideClickHandler>

        </div >
    );
};

export default GetOfferCard;