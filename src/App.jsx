import React from "react";
import "./App.css";

export default function App() {
  return (
    <div className="wholebody">
      <div className="clock">
        <div style={{'--clr':'white'}} className="hand">
          <i></i>
        </div>
        <div style={{'--clr':'red'}} className="hand">
          <i></i>
        </div>
        <div style={{'--clr':'yellow'}} className="hand">
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
    </div>
  );
}
