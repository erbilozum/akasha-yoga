import ScheduleCard from "@/components/UI/scheduleCard";
import React from "react";
import { data } from "/components/Data/scheduleData.js";
import { useEffect } from "react";

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
      <ScheduleCard data={data} />
    </div>
  );
};

export default Index;
