import React from "react";

function Heading({ text1, text2, width }: any) {
  return (
    <div className="heading uppercase font-bold">
      <h1 className="text-3xl">
        <span>{text1}</span>
        <span className="text-themeCarrot"> {text2}</span>
      </h1>
      <div className={`h-1 bg-black ${width} mt-1`}></div>
    </div>
  );
}

export default Heading;
