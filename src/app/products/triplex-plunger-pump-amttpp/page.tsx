"use client";

import React from "react";
import { FaCircle } from "react-icons/fa";
import Image from "next/image";
import Heading from "@/components/Heading/Heading";
import data from "@/data/triplex_plunger_pump_amttpp_data.json";
import TableHeading from "@/components/TableHeading/TableHeading";

function TriplexPlungerPumpAMTTPPPage() {
  const { moc, accessories, perfRange, application } = data;

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
          <h1>TRIPLEX PLUNGER PUMP (SERIES AMTTPP)</h1>
        </div>
        <div className="right w-[30%] mx-auto">
          <Image
            src={
              "https://res.cloudinary.com/dhv2udxw2/image/upload/v1720772445/ambica-machine-tools/hand-hydro-test-pump-amth/yd5vdoklx0evlsszhird.png"
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
                "https://res.cloudinary.com/dhv2udxw2/image/upload/v1720772444/ambica-machine-tools/hand-hydro-test-pump-amth/ihueuek0wbvfxknbswak.png"
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
                "https://res.cloudinary.com/dhv2udxw2/image/upload/v1720772444/ambica-machine-tools/hand-hydro-test-pump-amth/ihueuek0wbvfxknbswak.png"
              }
              alt="product-image"
              height={423}
              width={567}
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* data section  */}
      <div className="data px-16 py-10">
        <div className="box bg-[#ececec] flex flex-col gap-y-4 p-6 border-l-[6px] border-r-[6px] border-themeCarrot">
          <h2 className="text-3xl font-bold">
            Hydro Testing/Jetting Pump (Motor / Engine Operated)
          </h2>
          <p className="text-lg">
            Triplex plunger pumps are low maintenance solutions for high
            pressure application such as hydro testing, car washes and jetting
            application. This pump are excellent for testing leakage and
            integrity from Boiler, Pressure Vessels, Metal Casting, Gas
            Cylinder, Pipes & Tubes Part. Pump are supply with different metals
            like brass, forged stainless steel 304, stainless steel 316, duplex
            steel, nickel bronze aluminum bronze etc.
          </p>
        </div>
      </div>

      {/* other infos  */}
      <div className="other-infos px-16 py-10 flex justify-between gap-x-20">
        <div className="right w-1/2 bg-[#f4f4f4] rounded-lg p-6 flex flex-col gap-y-6">
          <Heading text1={"standard"} text2={"accessories"} width={"w-[27%]"} />

          <ul className="details text-lg ml-4 flex flex-col gap-y-2">
            {accessories.map((item, index) => (
              <li key={`tech-detail-${index + 1}`}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="left w-1/2 bg-[#f4f4f4] rounded-lg p-6 flex flex-col gap-y-6">
          <Heading text1={"special"} text2={"features"} width={"w-[20%]"} />

          <ul className="details text-lg ml-4">
            {moc.map((item, index) => (
              <li key={`tech-detail-${index + 1}`}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* other infos  */}
      <div className="other-infos px-16 py-10 flex justify-between gap-x-20">
        <div className="right w-1/2 bg-[#f4f4f4] rounded-lg p-6 flex flex-col gap-y-6">
          <Heading text1={"performance"} text2={"range"} width={"w-[37%]"} />

          <ul className="details text-lg ml-4 flex flex-col gap-y-2">
            {perfRange.map((item, index) => (
              <li key={`tech-detail-${index + 1}`}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="left w-1/2 bg-[#f4f4f4] rounded-lg p-6 flex flex-col gap-y-6">
          <Heading text1={"application"} text2={""} width={"w-[15%]"} />

          <ul className="details text-lg ml-4">
            {application.map((item, index) => (
              <li key={`tech-detail-${index + 1}`}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* tables  */}
      <div className="table-one px-16 py-10 flex flex-col gap-y-10">
        <TableHeading
          text1={"technical"}
          text2={"specifications"}
        />
        <div className="">
          <Image
            src={
              "https://res.cloudinary.com/dhv2udxw2/image/upload/v1720784027/ambica-machine-tools/triplex-plunger-pump-amttpp/lugjv9hehedmxd2tojta.png"
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

export default TriplexPlungerPumpAMTTPPPage;
