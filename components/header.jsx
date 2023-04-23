import React from 'react'
import HeaderBig from './UI/headerBig'
import HeaderSmall from './UI/headerSmall'
import { data } from "/components/Data/headerData.js"

const Header = () => {
    return (
        <div classname={"container mx-auto"}>
            <div className={"flex items-center justify-center mx-auto"}>
                <div className={"hidden sm:visible sm:block select-none font-Philosopher"}>
                    <HeaderBig data={data} />
                </div >
                <div className={"visible sm:hidden flex w-full select-none font-Philosopher fixed z-40"}>
                    <HeaderSmall data={data} />
                </div>
            </div>
        </div>
    )
}
export default Header