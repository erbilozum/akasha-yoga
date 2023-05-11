import React from 'react';
import {Link} from 'react-scroll';
import {AiOutlineClose} from "react-icons/ai"

const ModalHeader = ({visible, close, data}) => {
    if (!visible) return (null)
    return (
        <div onClick={() => close()}
             className='fixed  flex-col  inset-0  backdrop-blur-sm flex raunded-xl items-center justify-center'>
            <div className={"flex flex-col bg-white rounded-xl w-4/6 items-center justify-center opacity-100 relative"}>
                <div
                    className={"rounded-full flex text-black bg-gray-200 h-6 w-6 font-bold items-center justify-center -top-3 -right-3 absolute text-end"}>
                    <AiOutlineClose title={"Kapat"}
                                    className={"cursor-pointer  hover:text-red-700 hover:scale-125 duration-400 transition-all ease-in-out"}/>
                </div>
                {data.map((item, index) => (
                    <div className={"w-full flex flex-col items-center justify-center px-6 py-1 rounded-xl"}
                         key={index}>
                        <Link
                            className="text-decoration-none m-2 w-full mx-6 hover:bg-gray-700 duration-500 transition-all ease-in-out text-center "
                            onClick={() => close()} activeClass="active" to={item.linkUrl} spy={true} smooth={true}
                            offset={50} duration={400}>
                            <span className=' text-lg  text-black text-center '>{item.descripton}</span>
                        </Link>
                    </div>))}
            </div>
        </div>
    )
}

export default ModalHeader