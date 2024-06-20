"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

function HandHydroTestPumpPage() {
  return (
    <div className="">
      {/* hero section  */}
      <div className="hero-section home-hero-bg p-5 lg:p-24">
        <div className="flex flex-row text-white justify-center items-center gap-y-8 pt-8">
          <div className="left">
            {/* for larger screens  */}
            <h1 className="text-5xl text-center hidden uppercase font-bold w-[80%] mx-auto lg:block leading-[4rem]">
              HYDRO TEST PUMP - HAND DRIVEN UNIT
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
            "https://res.cloudinary.com/dhv2udxw2/image/upload/v1718778189/ambica-machine-tools/kfegsblecfvkmnpuu9z4.svg"
          }
          alt="product-image"
          height={300}
          width={300}
          className="bg-themeCarrot"
        />
        <Image
          src={
            "https://res.cloudinary.com/dhv2udxw2/image/upload/v1718778189/ambica-machine-tools/kfegsblecfvkmnpuu9z4.svg"
          }
          alt="product-image"
          height={300}
          width={300}
          className="bg-themeCarrot"
        />
        <Image
          src={
            "https://res.cloudinary.com/dhv2udxw2/image/upload/v1718778189/ambica-machine-tools/kfegsblecfvkmnpuu9z4.svg"
          }
          alt="product-image"
          height={300}
          width={300}
          className="bg-themeCarrot"
        />
        <Image
          src={
            "https://res.cloudinary.com/dhv2udxw2/image/upload/v1718778189/ambica-machine-tools/kfegsblecfvkmnpuu9z4.svg"
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
              <th className="border-r border-gray-500">pump model no</th>
              <th className="border-r border-gray-500 flex flex-col justify-center items-center">
                <tr>
                  <th className="pb-1">discharge size</th>
                </tr>
                <tr className="w-full flex border-t border-gray-500">
                  <th className="w-1/2 border-r border-gray-500">BSP</th>
                  <th className="w-1/2">MM</th>
                </tr>
              </th>
              <th className="border-r border-gray-500">
                max. pressure <br /> kg/ cm <sup>2</sup> P.S.I{" "}
              </th>
              <th className="border-r border-gray-500">
                out put <br /> CC/stroke
              </th>
              <th className="border-r border-gray-500">
                plunger <br />
                size in mm
              </th>
              <th className="border-r border-gray-500">
                water tank <br /> size in Ltrs.
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-gray-500 text-center">
              <td className="border-r border-gray-500 py-1">AMTH - 35</td>
              <td className="border-r border-gray-500 h-full">
                <tr className="flex">
                  <td className="w-1/2 border-r border-gray-500">1/2</td>
                  <td className="w-1/2">12.5</td>
                </tr>
              </td>
              <td className="border-r border-gray-500 h-full">
                <tr className="flex">
                  <td className="w-1/2 border-r border-gray-500">35</td>
                  <td className="w-1/2">500</td>
                </tr>
              </td>
              <td className="border-r border-gray-500">15.70</td>
              <td className="border-r border-gray-500">22</td>
              <td className="border-r border-gray-500">12</td>
            </tr>

            <tr className="border-t border-gray-500 text-center">
              <td className="border-r border-gray-500 py-1">AMTH - 70</td>
              <td className="border-r border-gray-500 h-full">
                <tr className="flex">
                  <td className="w-1/2 border-r border-gray-500">1/2</td>
                  <td className="w-1/2">12.5</td>
                </tr>
              </td>
              <td className="border-r border-gray-500 h-full">
                <tr className="flex">
                  <td className="w-1/2 border-r border-gray-500">70</td>
                  <td className="w-1/2">1000</td>
                </tr>
              </td>
              <td className="border-r border-gray-500">15.70</td>
              <td className="border-r border-gray-500">22</td>
              <td className="border-r border-gray-500">22</td>
            </tr>

            <tr className="border-t border-gray-500 text-center">
              <td className="border-r border-gray-500 py-1">AMTH - 105</td>
              <td className="border-r border-gray-500 h-full">
                <tr className="flex">
                  <td className="w-1/2 border-r border-gray-500">1/2</td>
                  <td className="w-1/2">12.5</td>
                </tr>
              </td>
              <td className="border-r border-gray-500 h-full">
                <tr className="flex">
                  <td className="w-1/2 border-r border-gray-500">105</td>
                  <td className="w-1/2">1500</td>
                </tr>
              </td>
              <td className="border-r border-gray-500">14.17</td>
              <td className="border-r border-gray-500">19</td>
              <td className="border-r border-gray-500">22</td>
            </tr>

            <tr className="border-t border-gray-500 text-center">
              <td className="border-r border-gray-500 py-1">AMTH - 140</td>
              <td className="border-r border-gray-500 h-full">
                <tr className="flex">
                  <td className="w-1/2 border-r border-gray-500">1/2</td>
                  <td className="w-1/2">12.5</td>
                </tr>
              </td>
              <td className="border-r border-gray-500 h-full">
                <tr className="flex">
                  <td className="w-1/2 border-r border-gray-500">140</td>
                  <td className="w-1/2">2000</td>
                </tr>
              </td>
              <td className="border-r border-gray-500">14.17</td>
              <td className="border-r border-gray-500">19</td>
              <td className="border-r border-gray-500">22</td>
            </tr>

            <tr className="border-t border-gray-500 text-center">
              <td className="border-r border-gray-500 py-1">AMTH - 211</td>
              <td className="border-r border-gray-500 h-full">
                <tr className="flex">
                  <td className="w-1/2 border-r border-gray-500">1/2</td>
                  <td className="w-1/2">12.5</td>
                </tr>
              </td>
              <td className="border-r border-gray-500 h-full">
                <tr className="flex">
                  <td className="w-1/2 border-r border-gray-500">211</td>
                  <td className="w-1/2">3000</td>
                </tr>
              </td>
              <td className="border-r border-gray-500">8.83</td>
              <td className="border-r border-gray-500">15</td>
              <td className="border-r border-gray-500">22</td>
            </tr>

            <tr className="border-t border-gray-500 text-center">
              <td className="border-r border-gray-500 py-1">AMTH - 352</td>
              <td className="border-r border-gray-500 h-full">
                <tr className="flex">
                  <td className="w-1/2 border-r border-gray-500">1/2</td>
                  <td className="w-1/2">12.5</td>
                </tr>
              </td>
              <td className="border-r border-gray-500 h-full">
                <tr className="flex">
                  <td className="w-1/2 border-r border-gray-500">352</td>
                  <td className="w-1/2">5000</td>
                </tr>
              </td>
              <td className="border-r border-gray-500">8.83</td>
              <td className="border-r border-gray-500">15</td>
              <td className="border-r border-gray-500">22</td>
            </tr>

            <tr className="border-t border-gray-500 text-center">
              <td className="border-r border-gray-500 py-1">AMTH - 500</td>
              <td className="border-r border-gray-500 h-full">
                <tr className="flex">
                  <td className="w-1/2 border-r border-gray-500">1/2</td>
                  <td className="w-1/2">12.5</td>
                </tr>
              </td>
              <td className="border-r border-gray-500 h-full">
                <tr className="flex">
                  <td className="w-1/2 border-r border-gray-500">500</td>
                  <td className="w-1/2">7000</td>
                </tr>
              </td>
              <td className="border-r border-gray-500">5.65</td>
              <td className="border-r border-gray-500">12</td>
              <td className="border-r border-gray-500">22</td>
            </tr>

            <tr className="border-t border-gray-500 text-center">
              <td className="border-r border-gray-500 py-1">AMTH - 705</td>
              <td className="border-r border-gray-500 h-full">
                <tr className="flex">
                  <td className="w-1/2 border-r border-gray-500">1/2</td>
                  <td className="w-1/2">12.5</td>
                </tr>
              </td>
              <td className="border-r border-gray-500 h-full">
                <tr className="flex">
                  <td className="w-1/2 border-r border-gray-500">705</td>
                  <td className="w-1/2">7000</td>
                </tr>
              </td>
              <td className="border-r border-gray-500">5.65</td>
              <td className="border-r border-gray-500">12</td>
              <td className="border-r border-gray-500">22</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default HandHydroTestPumpPage;
