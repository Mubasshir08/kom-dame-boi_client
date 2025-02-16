import React, { useState } from "react";
import "./ThemeToggle.css";

const ThemeToggle = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    console.log(isChecked)
    setIsChecked(!isChecked);
  };

  return (
    <label id="theme-toggle-button">
      <input 
        type="checkbox" 
        id="toggle" 
        checked={isChecked} 
        onChange={handleToggle}
        value={isChecked ? "black" : ""} 
        className="theme-controller"
      />
      <svg viewBox="0 0 69.667 44" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(3.5 3.5)" data-name="Component 15 – 1" id="Component_15_1">
          <rect 
            fill="#83cbd8" 
            transform="translate(3.5 3.5)" 
            rx="17.5" 
            height="35" 
            width="60.667" 
            data-name="container" 
            id="container"
          />
          <g transform="translate(2.333 2.333)" id="button">
            <g data-name="sun" id="sun">
              <circle 
                fill="#f8e664" 
                transform="translate(5.83 4)" 
                r="15.167" 
                cy="15.167" 
                cx="15.167" 
                data-name="sun-outer" 
                id="sun-outer-2"
              />
              <circle 
                fill="#fcf4b9" 
                transform="translate(8.167 8.167)" 
                r="7" 
                cy="7" 
                cx="7" 
                id="sun-inner"
              />
            </g>
            <g data-name="moon" id="moon">
              <circle 
                fill="#cce6ee" 
                transform="translate(7 5.83)" 
                r="15.167" 
                cy="15.167" 
                cx="15.167" 
                data-name="moon" 
                id="moon-3"
              />
              <g fill="#a6cad0" transform="translate(-24.415 -1.009)" id="patches">
                <circle transform="translate(43.009 4.496)" r="2" cy="2" cx="2" />
                <circle transform="translate(39.366 17.952)" r="2" cy="2" cx="2" />
                <circle transform="translate(33.016 8.044)" r="1" cy="1" cx="1" />
                <circle transform="translate(51.081 18.888)" r="1" cy="1" cx="1" />
                <circle transform="translate(33.016 22.503)" r="1" cy="1" cx="1" />
                <circle transform="translate(50.081 10.53)" r="1.5" cy="1.5" cx="1.5" />
              </g>
            </g>
          </g>
          <path 
            fill="#fff" 
            transform="translate(-3466.47 -160.94)" 
            d="M3512.81,173.815a4.463,4.463,0,0,1,2.243.62.95.95,0,0,1,.72-1.281,4.852,4.852,0,0,1,2.623.519c.034.02-.5-1.968.281-2.716a2.117,2.117,0,0,1,2.829-.274,1.821,1.821,0,0,1,.854,1.858c.063.037,2.594-.049,3.285,1.273s-.865,2.544-.807,2.626a12.192,12.192,0,0,1,2.278.892c.553.448,1.106,1.992-1.62,2.927a7.742,7.742,0,0,1-3.762-.3c-1.28-.49-1.181-2.65-1.137-2.624s-1.417,2.2-2.623,2.2a4.172,4.172,0,0,1-2.394-1.206,3.825,3.825,0,0,1-2.771.774c-3.429-.46-2.333-3.267-2.2-3.55A3.721,3.721,0,0,1,3512.81,173.815Z" 
            data-name="cloud" 
            id="cloud"
          />
          <g fill="#def8ff" transform="translate(3.585 1.325)" id="stars">
            <path transform="matrix(-1, 0.017, -0.017, -1, 24.231, 3.055)" d="M.774,0,.566.559,0,.539.458.933.25,1.492l.485-.361.458.394L1.024.953,1.509.592.943.572Z" />
          </g>
        </g>
      </svg>
    </label>
  );
};

export default ThemeToggle;
