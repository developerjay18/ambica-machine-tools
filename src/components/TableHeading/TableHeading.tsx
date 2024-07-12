"use client";

import React from "react";

function TableHeading({ text1, text2 }: any) {
  return (
    <div className="table-heading">
      <h1 className="uppercase text-3xl font-bold text-center">
        <span className="text-black">{text1}</span>
        <span className="text-themeCarrot">&nbsp; {text2}</span>
      </h1>
      <div className={`h-1 bg-black w-[10%] mt-1 mx-auto`}></div>
    </div>
  );
}

export default TableHeading;
