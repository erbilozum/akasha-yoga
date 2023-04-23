import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import HomePageSmall from './UI/homePageSmall';
import HomePageBig from './UI/homePageBig';
import { data } from "/components/Data/homepageData.js";
const Homepage = () => {

    return (
        <div name={"home"} className={"container mx-auto select-none font-Philosopher"} >
            <div className={"visible sm:hidden"}>
                <HomePageSmall data={data} />
            </div>
            <div className={"hidden sm:visible sm:block"}>
                <HomePageBig data={data} />
            </div>
        </div >
    )
}
export default Homepage