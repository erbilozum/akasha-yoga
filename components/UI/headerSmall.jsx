import React, { useState } from 'react'
import 'reactjs-popup/dist/index.css';
import ModalHeader from './modelHeader';

import Test from '@/components/test';

const HeaderSmall = (props) => {
    const [isShowModal, setIsShowModal] = useState(false);
    const handleModalClose = () => {
        setIsShowModal(false)
    }
    return (
        <div className=' inset-0 flex top-10 z-40' >
            <div className=' top-10 absolute right-4 ' >
                <button title={"Menü"} onClick={() => setIsShowModal(true)} className={"bg-slate-100 hover:font-bold rounded-full h-16 w-16 flex items-center justify-center hover:scale-110 duration-500 transition-all ease-in-out"}>
                    <Test />
                </button>
                <ModalHeader visible={isShowModal} close={handleModalClose} data={props.data} />
            </div >
        </div>

    )
}

export default HeaderSmall