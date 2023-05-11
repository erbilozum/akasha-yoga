import ScheduleCard from "@/components/UI/scheduleCard";
import React, {useEffect} from "react";
import {data} from "/components/Data/scheduleData.js";

const Index = () => {
    useEffect(() => {
        const handleContextMenu = (e) => {
            e.preventDefault();
        };
        document.addEventListener("contextmenu", handleContextMenu);
        return () => {
            document.removeEventListener("contextmenu", handleContextMenu);
        };
    }, []);
    return (
        <div>
            <ScheduleCard data={data}/>
        </div>
    );
};

export default Index;
