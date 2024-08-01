"use client";

import React from "react";
import Image from "next/image";
import Heading from "@/components/Heading/Heading";
import data from "@/data/hand_hydro_test_pump_data.json";
import { montserrat } from "@/app/fonts";

function HandHydroTestPumpAMTHPage() {
  const { moc, application, specialFects } = data;

  return (
    <main>
      {/* banner  */}
      <div
        className={`product-two-banner shadow-lg flex pt-28 pl-[15rem] flex-col h-[480px] bg-black text-white ${montserrat.className}`}
      >
        <div className=" w-[37%] flex flex-col gap-y-4">
          <h1 className="text-4xl font-bold text-center inline-flex capitalize">
            Manufacturer of <br /> hand hydro test pump <br /> (AMTH Series)
          </h1>
          <p className="inline-flex text-center">
            Hand Hydro Test Pump - AMTH Series AMBICA MACHINE TOOLS is one of
            the prominent leading Manufacturer and Supplier of Various kind of
            test pumps and more...
          </p>
        </div>
      </div>

      {/* product images  */}
      <div className="product-images px-16 py-8 flex flex-col gap-y-10">
        <Heading
          text1={"hand hydro test pump"}
          text2={"(AMTH)"}
          width={"w-[25%]"}
        />

        <div className="flex justify-between">
          <div className="w-[20%]">
            <Image
              src={
                "https://res.cloudinary.com/dhv2udxw2/image/upload/v1721271649/ambica-machine-tools/hand-hydro-test-pump-amth/g08ls9mhpxsa1lyjdsgm.png"
              }
              alt="product-image"
              height={423}
              width={367}
              className="rounded-xl shadow-lg glow bg-[#f4f4f4]"
            />
          </div>

          <div className="w-[20%]">
            <Image
              src={
                "https://res.cloudinary.com/dhv2udxw2/image/upload/v1721271649/ambica-machine-tools/hand-hydro-test-pump-amth/cuvsqiozj1wkgajdg8wv.png"
              }
              alt="product-image"
              height={423}
              width={367}
              className="rounded-xl shadow-lg glow bg-[#f4f4f4]"
            />
          </div>

          <div className="w-[20%]">
            <Image
              src={
                "https://res.cloudinary.com/dhv2udxw2/image/upload/v1721271728/ambica-machine-tools/hand-hydro-test-pump-amth/bh4y1sx9xd0xy3rvidmx.png"
              }
              alt="product-image"
              height={423}
              width={367}
              className="rounded-xl shadow-lg glow bg-[#f4f4f4]"
            />
          </div>

          <div className="w-[20%]">
            <Image
              src={
                "https://res.cloudinary.com/dhv2udxw2/image/upload/v1721271649/ambica-machine-tools/hand-hydro-test-pump-amth/zupgcyr4ju4t14svnbmt.png"
              }
              alt="product-image"
              height={423}
              width={367}
              className="rounded-xl shadow-lg glow bg-[#f4f4f4]"
            />
          </div>
        </div>
      </div>

      {/* material of construction  */}
      <div className="material-of-const px-16 py-8 bg-[#f4f4f4] flex flex-col gap-y-10">
        <Heading
          text1={"standard accessories"}
          text2={"with M.O.C"}
          width={"w-[27%]"}
        />

        <div className="flex flex-col gap-y-4">
          {moc.map((item, index) => (
            <div
              key={`moc-no-${index + 1}`}
              className="data-box border-l-[5px] border-themeCarrot pl-4 py-1"
            >
              <p className="text-lg">{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* other infos  */}
      <div className="other-infos px-16 py-8 flex justify-between gap-x-20">
        <div className="left w-1/2 bg-[#f4f4f4] rounded-lg p-6 flex flex-col gap-y-6">
          <Heading text1={"special"} text2={"features"} width={"w-[20%]"} />

          <ul className="details text-lg ml-4">
            {specialFects.map((item, index) => (
              <li key={`tech-detail-${index + 1}`}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="right w-1/2 bg-[#f4f4f4] rounded-lg p-6 flex flex-col gap-y-6">
          <Heading text1={"application"} text2={""} width={"w-[15%]"} />

          <ul className="details text-lg ml-4 flex flex-col gap-y-2">
            {application.map((item, index) => (
              <li key={`tech-detail-${index + 1}`}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* tables  */}
      <div className="table-one px-16 py-8 flex flex-col gap-y-10">
        <div className="">
          <table>
            <tr className="">
              <th colSpan={2} rowSpan={2}>
                Pump Model No
              </th>
              <th colSpan={2}>Discharge Size</th>
              <th colSpan={2}>Max. Pressure</th>
              <th>Out Put</th>
              <th>Plunger</th>
              <th>Water Tank</th>
            </tr>
            <tr>
              <th>BSP</th>
              <th>MM</th>
              <th>Kg/Cm²</th>
              <th>P.S.I</th>
              <th>CC / Stroke</th>
              <th>Size in mm</th>
              <th>Size in Ltrs.</th>
            </tr>
            <tr>
              <td colSpan={2}>AMTH - 35</td>
              <td>1/2</td>
              <td>12.5</td>
              <td>35</td>
              <td>500</td>
              <td>15.70</td>
              <td>22</td>
              <td>12</td>
            </tr>
            <tr>
              <td colSpan={2}>AMTH - 70</td>
              <td>1/2</td>
              <td>12.5</td>
              <td>70</td>
              <td>1000</td>
              <td>15.70</td>
              <td>22</td>
              <td>22</td>
            </tr>
            <tr>
              <td colSpan={2}>AMTH - 105</td>
              <td>1/2</td>
              <td>12.5</td>
              <td>105</td>
              <td>1500</td>
              <td>14.17</td>
              <td>19</td>
              <td>22</td>
            </tr>
            <tr>
              <td colSpan={2}>AMTH - 140</td>
              <td>1/2</td>
              <td>12.5</td>
              <td>140</td>
              <td>2000</td>
              <td>14.17</td>
              <td>19</td>
              <td>22</td>
            </tr>
            <tr>
              <td colSpan={2}>AMTH - 211</td>
              <td>1/2</td>
              <td>12.5</td>
              <td>211</td>
              <td>3000</td>
              <td>8.83</td>
              <td>15</td>
              <td>22</td>
            </tr>
            <tr>
              <td colSpan={2}>AMTH - 352</td>
              <td>1/2</td>
              <td>12.5</td>
              <td>352</td>
              <td>5000</td>
              <td>8.83</td>
              <td>15</td>
              <td>22</td>
            </tr>
            <tr>
              <td colSpan={2}>AMTH - 500</td>
              <td>1/2</td>
              <td>12.5</td>
              <td>500</td>
              <td>7000</td>
              <td>5.65</td>
              <td>12</td>
              <td>22</td>
            </tr>
            <tr>
              <td colSpan={2}>AMTH - 705</td>
              <td>1/2</td>
              <td>12.5</td>
              <td>705</td>
              <td>10000</td>
              <td>5.65</td>
              <td>12</td>
              <td>22</td>
            </tr>
          </table>
        </div>
      </div>
    </main>
  );
}

export default HandHydroTestPumpAMTHPage;
