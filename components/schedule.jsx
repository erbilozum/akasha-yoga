import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import ScheduleCard from './UI/scheduleCard';
import { data } from "./Data/scheduleData.js";
const schedule = () => {

    return (
        <div name={"schedule"} className={"container mx-auto  px-4 select-none z-10 mt:96 sm:mt-0"}>
            <div className={"flex flex-col"}>
                <div className={"tracking-widest uppercase text-center mt-10 mb-8"}>
                    <h2 className={"text-3xl font-Avanir"}>Çalışma Takvimi</h2>
                    <p className={"text-sm font-Poppins"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, enim?</p>
                </div>
                <div className={"flex shadow-xl flex-col justify-center mb-10"}>

                    <div className={"hover:border-indigo-500  flex items-center justify-center visible sm:hidden text-cender border border-gray-700 rounded p-6"}>
                        <a
                            className={"text-gray-700  hover:text-indigo-500 duration-400 ease-in-out transition-all uppercase font-bold no-underline"}
                            href={"/schedule"}
                            target={"_blank"}>Çalışma Takvimimiz İçin Tıklayınız...</a>
                    </div>
                    <div className={"hidden sm:visible sm:block w-full"}>
                        <ScheduleCard data={data} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default schedule