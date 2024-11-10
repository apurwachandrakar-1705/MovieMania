import React from "react";
import "./DarkMode.css";

const DarkMode = () => {
  const setDarkTheme = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
  localStorage.setItem("selectedTheme","dark");
  };
  const setLightTheme = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
  localStorage.setItem("selectedTheme","light");
  };
  const selectedTheme = localStorage.getItem("selectedTheme")
  if(selectedTheme ==="light"){
    setLightTheme()
  }
  else{
   setDarkTheme(); 
  }
  const toggleTheme = (e) => {
    if (e.target.checked) {
      setDarkTheme();
    } else {
      setLightTheme();
    }
  };
  return (
    <div className="dark_mode">
      <input defaultChecked={selectedTheme!=="light"} onChange={toggleTheme} className="dark_mode_input" type="checkbox" id="darkmode-toggle" />
      <label className="dark_mode_label" htmlFor="darkmode-toggle">
        {/* Inline SVG for Sun */}
        <svg
          version="1.1"
          className="sun"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 496 496"
          style={{ enableBackground: "new 0 0 496 496" }}
          xmlSpace="preserve"
        >
          <rect
            x="152.994"
            y="58.921"
            transform="matrix(0.3827 0.9239 -0.9239 0.3827 168.6176 -118.5145)"
            width="40.001"
            height="16"
          />
          <rect
            x="46.9"
            y="164.979"
            transform="matrix(0.9239 0.3827 -0.3827 0.9239 71.29 -12.4346)"
            width="40.001"
            height="16"
          />
          {/* (Include the rest of the Sun SVG paths here) */}
        </svg>

        {/* Inline SVG for Moon */}
        <svg
          version="1.1"
          className="moon"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 49.739 49.739"
          style={{ enableBackground: "new 0 0 49.739 49.739" }}
          xmlSpace="preserve"
        >
          <path
            d="M25.068,48.889c-9.173,0-18.017-5.06-22.396-13.804C-3.373,23.008,1.164,8.467,13.003,1.979l2.061-1.129l-0.615,2.268
                            c-1.479,5.459-0.899,11.25,1.633,16.306c2.75,5.493,7.476,9.587,13.305,11.526c5.831,1.939,12.065,1.492,17.559-1.258v0
                            c0.25-0.125,0.492-0.258,0.734-0.391l2.061-1.13l-0.585,2.252c-1.863,6.873-6.577,12.639-12.933,15.822
                            C32.639,48.039,28.825,48.888,25.068,48.889z"
          />
          {/* (Include the rest of the Moon SVG paths here) */}
        </svg>
      </label>
    </div>
  );
};

export default DarkMode;
