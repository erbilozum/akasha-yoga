import React from 'react'
import HeaderBig from './UI/headerBig'
import HeaderSmall from './UI/headerSmall'

const data = [
    {
        id: 1,
        descripton: "Anasayfa",
        linkUrl: "homepage"
    }, {
        id: 2,
        descripton: "Hakkımızda",
        linkUrl: "about"
    }, {
        id: 3,
        descripton: "Sınıflar",
        linkUrl: "classroom"
    }, {
        id: 4,
        descripton: "Eğitimler",
        linkUrl: "prices"
    },
    {
        id: 5,
        descripton: "Ürünler",
        linkUrl: "store"
    },
    {
        id: 6,
        descripton: "Takvim",
        linkUrl: "schedule"
    }, {
        id: 7,
        descripton: "Youtube",
        linkUrl: "youtube"
    },
    {
        id: 8,
        descripton: "İletişim",
        linkUrl: "contact"
    }
]
const Header = () => {

    return (
        <div classname={"container mx-auto"}>
            <div className={"flex items-center justify-center mx-auto"}>
                <div className="hidden sm:visible sm:block select-none font-Philosopher">
                    <HeaderBig data={data} />
                </div >
                <div className='visible sm:hidden flex w-full select-none font-Philosopher fixed z-40'>
                    <HeaderSmall data={data} />
                </div>
            </div>

        </div>
    )
}
export default Header