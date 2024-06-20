"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

function MotorHydroTestPumpPage() {
  return (
    <div className="">
      {/* hero section  */}
      <div className="hero-section home-hero-bg p-5 lg:p-24">
        <div className="flex flex-row text-white justify-center items-center gap-y-8 pt-8">
          <div className="left">
            {/* for larger screens  */}
            <h1 className="text-5xl text-center hidden uppercase font-bold w-[80%] mx-auto lg:block leading-[4rem]">
              HYDRO TEST PUMP - SINGLE PLUNGER TYPE
            </h1>

            {/* for small screens 
              <h1 className="text-4xl mt-20 lg:hidden block text-center leading-[2.8rem] w-full text-white">
                Elevate your driving experience &nbsp;
                <b>with durable and high performance Elito Batteries</b>
              </h1> */}

            <div className="w-full flex justify-center lg:justify-center mt-8">
              <Link href={"/about-us"} className="">
                <button className="uppercase bg-themeCarrot p-4 font-semibold">
                  Read More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* images section  */}
      <div className="images p-24 flex justify-between">
        <Image
          src={
            "https://res.cloudinary.com/dhv2udxw2/image/upload/v1718778184/ambica-machine-tools/ruow4mz11hf0uhzsogmn.svg"
          }
          alt="product-image"
          height={300}
          width={300}
          className="bg-themeCarrot"
        />
        <Image
          src={
            "https://res.cloudinary.com/dhv2udxw2/image/upload/v1718778184/ambica-machine-tools/ruow4mz11hf0uhzsogmn.svg"
          }
          alt="product-image"
          height={300}
          width={300}
          className="bg-themeCarrot"
        />
        <Image
          src={
            "https://res.cloudinary.com/dhv2udxw2/image/upload/v1718778184/ambica-machine-tools/ruow4mz11hf0uhzsogmn.svg"
          }
          alt="product-image"
          height={300}
          width={300}
          className="bg-themeCarrot"
        />
        <Image
          src={
            "https://res.cloudinary.com/dhv2udxw2/image/upload/v1718778184/ambica-machine-tools/ruow4mz11hf0uhzsogmn.svg"
          }
          alt="product-image"
          height={300}
          width={300}
          className="bg-themeCarrot"
        />
      </div>

      {/* table  */}
      <div className="table p-24 bg-[#f4f4f4] w-full">
        <div className="">
          <h1 className="uppercase text-4xl font-bold">
            Content <span className="text-themeCarrot">table</span>
          </h1>
          <div className="h-1 w-[13%] bg-black mt-4"></div>
        </div>

        <table className="border border-gray-500 w-full mt-10">
          <thead className="capitalize">
            <tr>
              <th className="border-r border-gray-500">model no</th>

              <th className="border-r border-gray-500">
                pressure up to <br /> kg/ cm <sup>2</sup>
              </th>
              <th className="border-r border-gray-500">capacity in LPH</th>
              <th className="border-r border-gray-500">Motor HP/RPM/KW</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-gray-500 text-center">
              <td className="border-r border-gray-500 py-1">AMTHMH - 70</td>

              <td className="border-r border-gray-500">70</td>
              <td className="border-r border-gray-500">120</td>
              <td className="border-r border-gray-500">1/1440/0.75</td>
            </tr>

            <tr className="border-t border-gray-500 text-center">
              <td className="border-r border-gray-500 py-1">AMTHMH - 140</td>

              <td className="border-r border-gray-500">140</td>
              <td className="border-r border-gray-500">120</td>
              <td className="border-r border-gray-500">2/1440/1.5</td>
            </tr>

            <tr className="border-t border-gray-500 text-center">
              <td className="border-r border-gray-500 py-1">AMTHMH - 211</td>

              <td className="border-r border-gray-500">211</td>
              <td className="border-r border-gray-500">120</td>
              <td className="border-r border-gray-500">3/1440/2.2</td>
            </tr>

            <tr className="border-t border-gray-500 text-center">
              <td className="border-r border-gray-500 py-1">AMTHMH - 350</td>

              <td className="border-r border-gray-500">350</td>
              <td className="border-r border-gray-500">120</td>
              <td className="border-r border-gray-500">5/1440/3.5</td>
            </tr>

            <tr className="border-t border-gray-500 text-center">
              <td className="border-r border-gray-500 py-1">AMTHMH - 500</td>

              <td className="border-r border-gray-500">500</td>
              <td className="border-r border-gray-500">120</td>
              <td className="border-r border-gray-500">5/1440/3.5</td>
            </tr>

            <tr className="border-t border-gray-500 text-center">
              <td className="border-r border-gray-500 py-1">AMTHMH - 700</td>

              <td className="border-r border-gray-500">705</td>
              <td className="border-r border-gray-500">120</td>
              <td className="border-r border-gray-500">5/1440/3.5</td>
            </tr>

            <tr className="border-t border-gray-500 text-center">
              <td className="border-r border-gray-500 py-1">AMTHMH - 1000</td>
              <td className="border-r border-gray-500">1000</td>
              <td className="border-r border-gray-500">90</td>
              <td className="border-r border-gray-500">5/1440/5.5</td>
            </tr>

            <tr className="border-t border-gray-500 text-center">
              <td className="border-r border-gray-500 py-1">AMTHMH - 1200</td>
              <td className="border-r border-gray-500">1250</td>
              <td className="border-r border-gray-500">90</td>
              <td className="border-r border-gray-500">5/1440/5.5</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* content section  */}
      <div className="content p-24 flex flex-col gap-y-20">
        <div className="flex">
          <div className="left w-1/2">
            <div className="">
              <h1 className="uppercase text-4xl font-bold">
                machine
                <span className="text-themeCarrot"> application</span>
              </h1>
              <div className="h-1 w-[25%] bg-black mt-4"></div>
            </div>
            <div className=" mt-8">
              <ul className="text-lg capitalize">
                <li>boilers, pressure vessels, c.I main casting parts.</li>
                <li>gas cylinder, pipes & tubes parts pumps.</li>
                <li>subject to hydro testing.</li>
              </ul>
            </div>
          </div>
          <div className="right w-1/2">
            <div className="">
              <h1 className="uppercase text-4xl font-bold">
                special
                <span className="text-themeCarrot"> features</span>
              </h1>
              <div className="h-1 w-[22%] bg-black mt-4"></div>
            </div>
            <div className=" mt-8">
              <ul className="text-lg capitalize">
                <li>electric motorized / engine driven system.</li>
                <li>totally enclosed driven mechanism.</li>
                <li>heavy duty precision gear box.</li>
                <li>large air chamber.</li>
                <li>self oiling system quick acting relief.</li>
                <li>totally dependable, reliable and efficient performance.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex">
          <div className="left w-1/2 pr-10">
            <div className="">
              <h1 className="uppercase text-4xl font-bold">
                optional
                <span className="text-themeCarrot"> accessories</span>
              </h1>
              <div className="h-1 w-[27%] bg-black mt-4"></div>
            </div>
            <div className=" mt-8">
              <ul className="text-lg capitalize">
                <li>
                  water tank capacity of 50 litres & made from stainless steel
                  304 material with level indicator & suction steiner - SS 304
                </li>
                <li>O.O.L push button pump starter make L&T or C&S</li>
              </ul>
            </div>
          </div>
          <div className="right w-1/2">
            <div className="">
              <h1 className="uppercase text-4xl font-bold">
                performance
                <span className="text-themeCarrot"> range</span>
              </h1>
              <div className="h-1 w-[41%] bg-black mt-4"></div>
            </div>
            <div className=" mt-8">
              <ul className="text-lg capitalize">
                <li>
                  test pressure up to 1200 kg/cm <sup>2</sup>
                </li>
                <li>water flow capacity up to 120 LPH</li>
                <li>motor up to 10 HP</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex">
          <div className="left">
            <div className="">
              <h1 className="uppercase text-4xl font-bold">
                standard accessories
                <span className="text-themeCarrot"> with M.O.C</span>
              </h1>
              <div className="h-1 w-[68%] bg-black mt-4"></div>
            </div>
            <div className=" mt-8">
              <ul className="text-lg capitalize">
                <li>
                  pressure release valve made from stainless steel 304 material
                  (needle type valve).
                </li>
                <li>
                  discharge high pressure hose with attachment of 1/2&quot; inch
                  BSP connection length 2 mtrs.
                </li>
                <li>
                  stainless steel 304 glycerin filled pressure gauge with
                  4&quot; inch dial (NABL calibrated).
                </li>
                <li>
                  discharge valve (NRV) made from stainless steel 304 material
                </li>
                <li>
                  suction and overflow nylon braided hose pipe supple attchment
                  of 1/2&quot; BSP length 2 mtrs.
                </li>
                <li>
                  suction and discharge valve made from stainless steel 304
                  material.
                </li>
                <li>air chamber made from stainless steel 304 material.</li>
                <li>
                  discharge valve (NRV) made from stainless steel 304 material
                </li>
                <li>
                  pressure set value made from stainless steel 304 material.
                </li>
                <li>
                  distributor body made from stainless steel 304 material.
                </li>
                <li>
                  pump stand made from mild steel 3&quot; x 1{" "}
                  <sup>1/2&quot;</sup>c channel.
                </li>
                <li>
                  pump mounted on suitable trolley with rubber brake caster
                  wheel.
                </li>
                <li>pulley guard made from mild steel material.</li>
                <li>pump and motor pulley made from mild steel material.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MotorHydroTestPumpPage;
