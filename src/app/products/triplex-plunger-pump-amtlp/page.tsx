"use client";

import React from "react";
import { FaCircle } from "react-icons/fa";
import Image from "next/image";
import Heading from "@/components/Heading/Heading";
import data from "@/data/triplex_plunger_pump_amtlp_data.json";
import TableHeading from "@/components/TableHeading/TableHeading";

function TriplexPlungerPumpAMTLPPage() {
  const { moc, techDetails, notes } = data;

  return (
    <main>
      {/* banner  */}
      <div className="banner h-[40vh] bg-[#2e2e2e] text-white flex text-5xl px-16 items-center">
        <div className="left w-[70%] uppercase font-semibold flex flex-col gap-y-3">
          <h1>product</h1>
          <div className="flex items-center gap-x-2">
            <div className="w-20 h-1 bg-white"></div>
            <div className="text-sm flex gap-x-1">
              <FaCircle />
              <FaCircle />
            </div>
            <div className="w-20 h-1 bg-white"></div>
          </div>
          <h1>TRIPLEX PLUNGER PUMP (SERIES AMTLP)</h1>
        </div>
        <div className="right w-[30%] mx-auto">
          <Image
            src={
              "https://res.cloudinary.com/dhv2udxw2/image/upload/v1720748015/ambica-machine-tools/triplex-plunger-pump/eur7wibamqv5mavlmd9j.svg"
            }
            alt="product-banner-image"
            height={231}
            width={326}
            className="mx-auto"
          />
        </div>
      </div>

      {/* product images  */}
      <div className="product-images px-16 py-10 flex flex-col gap-y-10">
        <Heading text1={"triplex"} text2={"plunger pump"} width={"w-[8%]"} />

        <div className="flex justify-around">
          <div className="w-[40%]">
            <Image
              src={
                "https://res.cloudinary.com/dhv2udxw2/image/upload/v1720748484/ambica-machine-tools/triplex-plunger-pump/ynrbzugrqllki9xwfrme.png"
              }
              alt="product-image"
              height={423}
              width={567}
              className="rounded-xl shadow-lg"
            />
          </div>

          <div className="w-[40%]">
            <Image
              src={
                "https://res.cloudinary.com/dhv2udxw2/image/upload/v1720748484/ambica-machine-tools/triplex-plunger-pump/ynrbzugrqllki9xwfrme.png"
              }
              alt="product-image"
              height={423}
              width={567}
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* material of construction  */}
      <div className="material-of-const px-16 py-10 flex flex-col gap-y-10">
        <Heading
          text1={"material"}
          text2={"of construction"}
          width={"w-[12%]"}
        />

        <div className="flex flex-col gap-y-4">
          {moc.map((item, index) => (
            <div
              key={`moc-no-${index + 1}`}
              className="data-box border-l-[5px] border-themeCarrot pl-4 py-1"
            >
              <h3 className="font-bold text-xl">{item.title}</h3>
              <p className="text-lg">{item.data}</p>
            </div>
          ))}
        </div>
      </div>

      {/* other infos  */}
      <div className="other-infos px-16 py-10 flex justify-between gap-x-20">
        <div className="left w-1/2 bg-[#f4f4f4] rounded-lg p-6 flex flex-col gap-y-6">
          <Heading text1={"technical"} text2={"details"} width={"w-[28%]"} />

          <ul className="details text-lg ml-4">
            {techDetails.map((item, index) => (
              <li key={`tech-detail-${index + 1}`}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="right w-1/2 bg-[#f4f4f4] rounded-lg p-6 flex flex-col gap-y-6">
          <Heading
            text1={"special notes"}
            text2={"& application"}
            width={"w-[37%]"}
          />

          <ul className="details text-lg ml-4 flex flex-col gap-y-2">
            {notes.map((item, index) => (
              <li key={`tech-detail-${index + 1}`}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* tables  */}
      <div className="table-one px-16 py-10 flex flex-col gap-y-10">
        <TableHeading
          text1={"AMTLP SERIES PRODUCT RANGE FOR"}
          text2={"HYDRO TEST APPLICATION"}
        />

        <div className="">
          <Image
            src={
              "https://res.cloudinary.com/dhv2udxw2/image/upload/v1720751510/ambica-machine-tools/triplex-plunger-pump/hcnurx9ihx1g9mgn0xx2.png"
            }
            alt="table-image"
            height={537}
            width={1411}
            className="border-[5px] border-themeCarrot"
          />
        </div>
      </div>

      {/* tables  */}
      <div className="table-one px-16 py-10 flex flex-col gap-y-10">
        <TableHeading
          text1={"AMTLP SERIES PRODUCT RANGE FOR"}
          text2={"HYDRO BLASTING AND HYDRO TEST"}
        />

        <div className="">
          <Image
            src={
              "https://res.cloudinary.com/dhv2udxw2/image/upload/v1720751510/ambica-machine-tools/triplex-plunger-pump/yjbty7yvvkvelwrwgxmt.png"
            }
            alt="table-image"
            height={537}
            width={1411}
            className="border-[5px] border-themeCarrot"
          />
        </div>
      </div>
    </main>
  );
}

export default TriplexPlungerPumpAMTLPPage;
