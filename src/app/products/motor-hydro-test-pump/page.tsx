"use client";

import React from "react";
import { FaCircle } from "react-icons/fa";
import Image from "next/image";
import Heading from "@/components/Heading/Heading";
import data from "@/data/motor_hydro_test_pump_data.json";
import TableHeading from "@/components/TableHeading/TableHeading";

function MotorHydroTestPumpPage() {
  const { moc, accessories, perfRange, application, anotherMOC } = data;

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
          <h1>MOTOR HYDRO TEST PUMP</h1>
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
      <div className="product-images px-16 py-8 flex flex-col gap-y-10">
        <Heading text1={"motor hydro"} text2={"test pump"} width={"w-[16%]"} />

        <div className="flex justify-between">
          <div className="w-[20%]">
            <Image
              src={
                "https://res.cloudinary.com/dhv2udxw2/image/upload/v1720772444/ambica-machine-tools/hand-hydro-test-pump-amth/ihueuek0wbvfxknbswak.png"
              }
              alt="product-image"
              height={423}
              width={367}
              className="rounded-xl shadow-lg"
            />
          </div>

          <div className="w-[20%]">
            <Image
              src={
                "https://res.cloudinary.com/dhv2udxw2/image/upload/v1720772444/ambica-machine-tools/hand-hydro-test-pump-amth/ihueuek0wbvfxknbswak.png"
              }
              alt="product-image"
              height={423}
              width={367}
              className="rounded-xl shadow-lg"
            />
          </div>

          <div className="w-[20%]">
            <Image
              src={
                "https://res.cloudinary.com/dhv2udxw2/image/upload/v1720772444/ambica-machine-tools/hand-hydro-test-pump-amth/ihueuek0wbvfxknbswak.png"
              }
              alt="product-image"
              height={423}
              width={367}
              className="rounded-xl shadow-lg"
            />
          </div>

          <div className="w-[20%]">
            <Image
              src={
                "https://res.cloudinary.com/dhv2udxw2/image/upload/v1720772444/ambica-machine-tools/hand-hydro-test-pump-amth/ihueuek0wbvfxknbswak.png"
              }
              alt="product-image"
              height={423}
              width={367}
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* material of construction  */}
      <div className="material-of-const px-16 py-10 flex flex-col gap-y-10 bg-[#f4f4f4]">
        <Heading
          text1={"standard accessories"}
          text2={"with M.O.C"}
          width={"w-[27%]"}
        />

        <div className="flex flex-col gap-y-4">
          {anotherMOC.map((item, index) => (
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
      <div className="other-infos px-16 pt-10 pb-5 flex justify-between gap-x-10">
        <div className="right w-1/2 bg-[#f4f4f4] rounded-lg p-6 flex flex-col gap-y-6">
          <Heading text1={"optical"} text2={"accessories"} width={"w-[20%]"} />

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
      <div className="other-infos px-16 pb-5 flex justify-between gap-x-10">
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
        <TableHeading text1={"performance"} text2={"table"} />

        <div className="">
          <div className="relative overflow-x-auto">
            <table className="w-full another text-left font-normal rtl:text-center">
              <thead className="text-lg uppercase border-l bg-[#242323] text-white rounded-lg">
                <tr>
                  <th scope="col" className="text-center px-6 py-3 border">
                    model no.
                  </th>
                  <th scope="col" className="px-6 py-3 border text-center">
                    pressure upto kg/cm <sup>2</sup>
                  </th>
                  <th scope="col" className="px-6 py-3 border text-center">
                    capacity in lph
                  </th>
                  <th scope="col" className="px-6 py-3 border text-center">
                    mototr hp/ rpm/ kw
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-l border-r border-b dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-2 text-center font-medium uppercase whitespace-nowrap"
                  >
                    amtmh - 70
                  </th>
                  <td className="px-6 py-2 text-center">
                    70
                  </td>
                  <td className="px-6 py-2 text-center">
                    120
                  </td>
                  <td className="px-6 py-2 text-center">1/1440/0.75</td>
                </tr>

                <tr className="bg-white border-l border-r border-b dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-2 text-center font-medium uppercase whitespace-nowrap"
                  >
                    amtmh - 211
                  </th>
                  <td className="px-6 py-2 text-center">
                    140
                  </td>
                  <td className="px-6 py-2 text-center">
                    120
                  </td>
                  <td className="px-6 py-2 text-center">2/1440/1.5</td>
                </tr>

                <tr className="bg-white border-l border-r border-b dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-2 text-center font-medium uppercase whitespace-nowrap"
                  >
                    amtmh - 140
                  </th>
                  <td className="px-6 py-2 text-center">
                    211
                  </td>
                  <td className="px-6 py-2 text-center">
                    120
                  </td>
                  <td className="px-6 py-2 text-center">3/1440/2.2</td>
                </tr>

                <tr className="bg-white border-l border-r border-b dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-2 text-center font-medium uppercase whitespace-nowrap"
                  >
                    amtmh - 350
                  </th>
                  <td className="px-6 py-2 text-center">
                    350
                  </td>
                  <td className="px-6 py-2 text-center">
                    120
                  </td>
                  <td className="px-6 py-2 text-center">5/1440/3.5</td>
                </tr>

                <tr className="bg-white border-l border-r border-b dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-2 text-center font-medium uppercase whitespace-nowrap"
                  >
                    amtmh - 500
                  </th>
                  <td className="px-6 py-2 text-center">
                    500
                  </td>
                  <td className="px-6 py-2 text-center">
                    120
                  </td>
                  <td className="px-6 py-2 text-center">5/1440/3.5</td>
                </tr>

                <tr className="bg-white border-l border-r border-b dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-2 text-center font-medium uppercase whitespace-nowrap"
                  >
                    amtmh - 700
                  </th>
                  <td className="px-6 py-2 text-center">
                    705
                  </td>
                  <td className="px-6 py-2 text-center">
                    120
                  </td>
                  <td className="px-6 py-2 text-center">5/1440/3.5</td>
                </tr>

                <tr className="bg-white border-l border-r border-b dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-2 text-center font-medium uppercase whitespace-nowrap"
                  >
                    amtmh - 1000
                  </th>
                  <td className="px-6 py-2 text-center">
                    1000
                  </td>
                  <td className="px-6 py-2 text-center">
                    90
                  </td>
                  <td className="px-6 py-2 text-center">7.5/1440/5.5</td>
                </tr>

                <tr className="bg-white border-l border-r border-b dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-2 text-center font-medium uppercase whitespace-nowrap"
                  >
                    amtmh - 1200
                  </th>
                  <td className="px-6 py-2 text-center">
                    1250
                  </td>
                  <td className="px-6 py-2 text-center">
                    90
                  </td>
                  <td className="px-6 py-2 text-center">7.5/1440/5.5</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}

export default MotorHydroTestPumpPage;
