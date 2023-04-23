import ScheduleCard from "@/components/UI/scheduleCard";
import React from "react";
import { data } from "/components/Data/scheduleData.js";
const Index = () => {
  return (
    <div>
      <ScheduleCard data={data} />
    </div>
  );
};

export default Index;
