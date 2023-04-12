import React from 'react'
import { Parallax } from 'react-parallax';

const About = () => {
    return (
        <div name={"about"} className={"container mx-auto p-0 mb-10 select-none"}>
            <Parallax
                blur={[40, 0]}
                bgImage='/1191543.jpg'
                bgImageAlt="the dog"
                strength={-200}
            >
                <div className='flex flex-col items-center justify-center mt-20 text-white opacity-40 bg-gray-800 w-1/4 mx-6 px-4 rounded'>
                    <span className={"text-2xl text-white"}>
                        Özge KÜÇÜKKAYA
                    </span>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ex accusamus aspernatur doloribus corporis similique quibusdam nesciunt esse molestiae quidem?
                    </p>
                </div>
                <div style={{ height: '300px' }} />
            </Parallax>
        </div >
    )
}

export default About