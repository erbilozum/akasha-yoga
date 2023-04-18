import React from 'react'
import AboutCard from './UI/aboutCard';

const About = () => {
    const data = {
        logoURL: "/logos/logo-akasha-2.png",
        title: " Özge KÜÇÜKKAYA",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ex accusamus aspernatur doloribus corporis similique quibusdam nesciunt esse molestiae quidem?"
    }
    return (
        <div name={"about"} className={"container mx-auto px-4 select-none z-10"}>
            <div className={"tracking-widest uppercase text-center mt-10"}>
                <h2 className={"text-3xl font-Avanir"}>Hakkımızda</h2>
                <p className={"text-sm font-Poppins"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, enim?</p>
            </div >
            <AboutCard data={data} />
        </div >
    )
}

export default About