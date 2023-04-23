import React from 'react'
import AboutCard from './UI/aboutCard';
import { data } from "/components/Data/aboutData.js";
const About = () => {
    return (
        <div name={"about"} className={"bg-[#e7c100] container mx-auto px-4 select-none z-10"}>
            <div className={"tracking-widest uppercase text-center mt-10"}>
                <h2 className={"text-3xl font-Avanir"}>Hakkımızda</h2>
                <p className={"text-sm font-Poppins"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, enim?</p>
            </div >
            {data.map((item, index) => (
                <AboutCard key={index} data={item} />
            ))}
        </div >
    )
}

export default About