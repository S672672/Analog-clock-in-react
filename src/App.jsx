import React from "react";
import "./App.css";
import { useEffect, useState } from "react";
import Index from "./index";
import Clock from "./clock";
import Digital from "./digital";

export default function App() {
  return (
    <div className="fullScreen">
    <div className="clocknindex">
    <Clock />
        <div className="index">
          <Index backgroundColor="yellow" name="hour" />
          <Index backgroundColor="red" name="minute" />
          <Index backgroundColor="blue" name="second" />
      </div>
      </div>
      <Digital />
      </div>
  );
}
