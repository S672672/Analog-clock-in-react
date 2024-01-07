import React, { useState, useEffect } from "react";
import "./App.css";

export default function Digital() {
  const [currentTime, setCurrentTime] = useState({
    hour: new Date().getHours(),
    min: new Date().getMinutes(),
    sec: new Date().getSeconds(),
    day: new Date().toLocaleDateString('en-US', { weekday: 'long' }),
    month: new Date().toLocaleDateString('en-US', { month: 'long' }),
    date:new Date().getDate(),
    year: new Date().getFullYear(),
    ampm: new Date() < 12 ? "AM" : "PM",
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newTime = new Date();
      setCurrentTime({
        hour: newTime.getHours(),
        min: newTime.getMinutes(),
        sec: newTime.getSeconds(),
        day: newTime.toLocaleDateString('en-US', { weekday: 'long' }),
        month: newTime.toLocaleDateString('en-US', { month: 'long' }),
        date:newTime.getDate(),
        year: newTime.getFullYear(),
        ampm: newTime < 12 ? "AM" : "PM",
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="wholedate">
    <div className="digital">
      <div className="text-yellow-400">{currentTime.hour}</div>
      <div className="text-white">:</div>
      <div className="text-red-500 ">{currentTime.min}</div>
      <div className="text-white ">:</div>
      <div className="text-blue-500 ">{currentTime.sec}</div>
      <div className="text-white">{currentTime.ampm}</div>
    </div>
    <div className="dateonly">
    <div>{currentTime.day}, </div>
    <div>{currentTime.date}</div>
    <div>{currentTime.month},</div>
    <div>{currentTime.year}</div>
    </div>
    </div>
  );
}
