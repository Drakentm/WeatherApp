import React, { useState } from "react";
import "./weather.css";

import search from "./assets/icons/search.svg";
import { UseStateContext } from "./context";

export default function WeatherApp() {
  const [input, setInput] = useState("");

  const { weather } = UseStateContext();
  console.log("weather", weather);

  return (
    <div className="w-full h-screen px-8 text-white ">
      <nav className="flex items-center justify-between w-full p-3 ">
        <h1 className="text-3xl font-bold tracking-wide ">Weather App</h1>
        <div className=" bg-white w-[15rem] overflow-hidden shadow-2xl rounded flex items-center p-2 gap-2">
          <img src={search} alt="search" className="w-[1.5rem] h-[1.5rem]" />
          <input
            type="text"
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                //Submit the form
              }
            }}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="focus:outline-none w-full text-[#212121] text-lg"
          />
        </div>
      </nav>
    </div>
  );
}
