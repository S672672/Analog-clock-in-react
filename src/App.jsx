import React from "react";
import "./App.css";
import { useEffect, useState } from "react";
import Index from ".";
import Digital from "./digital";

export default function App() {
  useEffect(() => {
    const displayTime = () => {
      let date = new Date();
      let hh = date.getHours();
      let mm = date.getMinutes();
      let ss = date.getSeconds();

      let hRotation = 30 * hh + mm / 2;
      let mRotation = 6 * mm;
      let sRotation = 6 * ss;

      document.getElementById(
        "hour"
      ).style.transform = `rotate(${hRotation}deg)`;
      document.getElementById(
        "min"
      ).style.transform = `rotate(${mRotation}deg)`;
      document.getElementById(
        "sec"
      ).style.transform = `rotate(${sRotation}deg)`;
    };

    // Call displayTime initially to set the initial rotation
    displayTime();

    // Set up the interval to update the clock hands every second
    const intervalId = setInterval(displayTime, 1000);

    // Clean up the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures the effect runs only once on mount
  return (
    <div className="wholebody">
      <div className="clock">
        <div
          style={{
            "--clr": "yellow",
            "--heightValue": "60px",
            "--widthValue": "10px",
          }}
          className="hand"
          id="hour"
        >
          <i></i>
        </div>
        <div
          style={{
            "--clr": "red",
            "--heightValue": "80px",
            "--widthValue": "8px",
          }}
          className="hand"
          id="min"
        >
          <i></i>
        </div>
        <div
          style={{
            "--clr": "blue",
            "--heightValue": "90px",
            "--widthValue": "4px",
          }}
          className="hand"
          id="sec"
        >
          <i></i>
        </div>
        <span style={{ "--i": 1 }}>
          <b>1</b>
        </span>
        <span style={{ "--i": 2 }}>
          <b>2</b>
        </span>
        <span style={{ "--i": 3 }}>
          <b>3</b>
        </span>
        <span style={{ "--i": 4 }}>
          <b>4</b>
        </span>
        <span style={{ "--i": 5 }}>
          <b>5</b>
        </span>
        <span style={{ "--i": 6 }}>
          <b>6</b>
        </span>
        <span style={{ "--i": 7 }}>
          <b>7</b>
        </span>
        <span style={{ "--i": 8 }}>
          <b>8</b>
        </span>
        <span style={{ "--i": 9 }}>
          <b>9</b>
        </span>
        <span style={{ "--i": 10 }}>
          <b>10</b>
        </span>
        <span style={{ "--i": 11 }}>
          <b>11</b>
        </span>
        <span style={{ "--i": 12 }}>
          <b>12</b>
        </span>
      </div>
      <div>
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
