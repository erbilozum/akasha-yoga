import React from 'react'
import { FaDoorClosed } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { AiOutlineClose } from "react-icons/ai"
const ModalHeader = ({ visible, close, data }) => {
    if (!visible) return (null)
    return (
        <div onClick={() => close()} className='fixed  flex-col bg-black inset-0 opacity-80 backdrop-blur-xl flex raundex-xl items-center justify-center'>
            <div className={"flex flex-col bg-white rounded-xl w-4/6 items-center justify-center opacity-100 relative"}>
                <div className={"rounded-full flex text-black bg-gray-200 h-6 w-6 font-bold items-center justify-center -top-3 -right-3 absolute text-end"}>
                    <AiOutlineClose className={"hover:scale-125 duration-400 transition-all ease-in-out"} />
                </div>
                {
                    data.map((item, index) => (
                        <Link className="text-decoration-none m-2" onClick={() => close()} key={index} activeClass="active" to={item.linkUrl} spy={true} smooth={true} offset={50} duration={400} >
                            <span className='cursor-pointer  text-lg  text-black text-center transition-all duration-100 ease-in-out hover:font-bold'>{item.descripton}</span>
                        </Link>

                    ))
                }
            </div>


        </div>
    )
}

export default ModalHeader