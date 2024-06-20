"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

function SingleHydroTestPumpPage() {
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
    </div>
  );
}

export default SingleHydroTestPumpPage;
