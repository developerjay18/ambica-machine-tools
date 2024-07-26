"use client";

import React from "react";
import { FaCircle } from "react-icons/fa";
import Image from "next/image";
import Heading from "@/components/Heading/Heading";
import data from "@/data/triplex_plunger_pump_amthp_data.json";
import TableHeading from "@/components/TableHeading/TableHeading";

function TriplexPlungerPumpAMTHPPage() {
  const { moc, techDetails, notes } = data;

  return (
    <main>
      {/* banner  */}
      <div className="banner h-[40vh] bg-[#2e2e2e] text-white flex text-5xl px-16 items-center">
        <div className="left w-[50%] uppercase font-semibold flex flex-col gap-y-3">
          <h1>product</h1>
          <div className="flex items-center gap-x-2">
            <div className="w-20 h-1 bg-white"></div>
            <div className="text-sm flex gap-x-1">
              <FaCircle />
              <FaCircle />
            </div>
            <div className="w-20 h-1 bg-white"></div>
          </div>
          <h1 className="leading-[3.5rem]">
            TRIPLEX PLUNGER PUMP <br /> (SERIES AMTHP)
          </h1>
        </div>
        <div className="right flex items-center w-[50%] mx-auto">
          <Image
            src={
              "https://res.cloudinary.com/dhv2udxw2/image/upload/v1721270823/ambica-machine-tools/triplex-plunger-pump-amthp/bfwz2u4nytz9g3l9qcnb.png"
            }
            alt="product-banner-image"
            height={200}
            width={300}
            className="mx-auto max-h-[280px]"
          />
          <Image
            src={
              "https://res.cloudinary.com/dhv2udxw2/image/upload/v1721270823/ambica-machine-tools/triplex-plunger-pump-amthp/bupsg48zjgtkl2g5kzq6.png"
            }
            alt="product-banner-image"
            height={231}
            width={326}
            className="mx-auto"
          />
        </div>
      </div>

      {/* material of construction  */}
      <div className="material-of-const px-16 bg-[#f4f4f4] py-8 flex flex-col gap-y-10">
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
      <div className="other-infos px-16 py-8 flex justify-around">
        <div className="left w-[75%] bg-[#f4f4f4] rounded-lg p-6 flex flex-col gap-y-6">
          <Heading text1={"technical"} text2={"details"} width={"w-[28%]"} />

          <ul className="details text-lg ml-4">
            {techDetails.map((item, index) => (
              <li key={`tech-detail-${index + 1}`}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="right w-[20%] flex flex-col gap-y-8 justify-between">
          <div className="w-[100%]">
            <Image
              src={
                "https://res.cloudinary.com/dhv2udxw2/image/upload/v1721270823/ambica-machine-tools/triplex-plunger-pump-amthp/bfwz2u4nytz9g3l9qcnb.png"
              }
              alt="product-image"
              height={423}
              width={367}
              className="rounded-xl shadow-lg glow bg-[#f4f4f4]"
            />
          </div>

          <div className="w-[100%]">
            <Image
              src={
                "https://res.cloudinary.com/dhv2udxw2/image/upload/v1721270823/ambica-machine-tools/triplex-plunger-pump-amthp/bupsg48zjgtkl2g5kzq6.png"
              }
              alt="product-image"
              height={423}
              width={367}
              className="rounded-xl shadow-lg glow bg-[#f4f4f4]"
            />
          </div>
        </div>
      </div>

      {/* other small infos  */}
      <div className="right mx-16 bg-[#f4f4f4] rounded-lg p-6 flex flex-col gap-y-6">
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

      {/* tables  */}
      <div className="table-one px-16 py-8 flex flex-col gap-y-10">
        <TableHeading
          text1={"AMTHP SERIES 15000"}
          text2={"PSI (1000 BAR PUMP)"}
        />

        <div className="">
          <table>
            <tr>
              <th rowSpan={2}>Model No.</th>
              <th rowSpan={2}>Plunger Dia. (mm)</th>
              <th rowSpan={2}>Flow Rate (LPM)</th>
              <th colSpan={3}>Crank Shaft speeds 435 Min. with 1450 RPM</th>
            </tr>
            <tr>
              <th>100 HP / 75 KW</th>
              <th>125 HP / 90 KW</th>
              <th>150 HP / 110 KW</th>
            </tr>
            <tr>
              <td>AMTHP-13/38</td>
              <td>20</td>
              <td>38</td>
              <td>950</td>
              <td>1200</td>
              <td>1300</td>
            </tr>
            <tr>
              <td>AMTHP - 10/47</td>
              <td>22</td>
              <td>47</td>
              <td>800</td>
              <td>950</td>
              <td>1000</td>
            </tr>
            <tr>
              <td>AMTHP - 95/56</td>
              <td>24</td>
              <td>56</td>
              <td>650</td>
              <td>800</td>
              <td>950</td>
            </tr>
            <tr>
              <td>AMTHP-80/65</td>
              <td>26</td>
              <td>65</td>
              <td>550</td>
              <td>700</td>
              <td>800</td>
            </tr>
            <tr>
              <td>AMTHP - 70/76</td>
              <td>28</td>
              <td>76</td>
              <td>480</td>
              <td>600</td>
              <td>700</td>
            </tr>
            <tr>
              <td>AMTHP-60/87</td>
              <td>30</td>
              <td>87</td>
              <td>410</td>
              <td>500</td>
              <td>600</td>
            </tr>
            <tr>
              <td>AMTHP - 52/99</td>
              <td>32</td>
              <td>99</td>
              <td>375</td>
              <td>450</td>
              <td>525</td>
            </tr>
            <tr>
              <td>AMTHP - 40/126</td>
              <td>36</td>
              <td>126</td>
              <td>280</td>
              <td>350</td>
              <td>400</td>
            </tr>
          </table>
        </div>
      </div>
    </main>
  );
}

export default TriplexPlungerPumpAMTHPPage;
