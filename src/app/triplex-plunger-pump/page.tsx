"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

function TriplexPlungerPumpPage() {
  return (
    <div className="">
      {/* hero section  */}
      <div className="hero-section home-hero-bg p-5 lg:p-24">
        <div className="flex flex-row text-white justify-center items-center gap-y-8 pt-8">
          <div className="left">
            {/* for larger screens  */}
            <h1 className="text-5xl text-center hidden uppercase font-bold w-[80%] mx-auto lg:block leading-[4rem]">
              triplex plunger pump
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
            "https://res.cloudinary.com/dhv2udxw2/image/upload/v1718778181/ambica-machine-tools/h5qzezuxdafuvegzc7sh.svg"
          }
          alt="product-image"
          height={300}
          width={300}
          className="bg-themeCarrot"
        />
        <Image
          src={
            "https://res.cloudinary.com/dhv2udxw2/image/upload/v1718778181/ambica-machine-tools/h5qzezuxdafuvegzc7sh.svg"
          }
          alt="product-image"
          height={300}
          width={300}
          className="bg-themeCarrot"
        />
        <Image
          src={
            "https://res.cloudinary.com/dhv2udxw2/image/upload/v1718778181/ambica-machine-tools/h5qzezuxdafuvegzc7sh.svg"
          }
          alt="product-image"
          height={300}
          width={300}
          className="bg-themeCarrot"
        />
        <Image
          src={
            "https://res.cloudinary.com/dhv2udxw2/image/upload/v1718778181/ambica-machine-tools/h5qzezuxdafuvegzc7sh.svg"
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
            <tr className="text-center">
              <th className="border-r border-gray-500 text-xl">
                specifiaction
              </th>
              <th className="border-r border-gray-500">AMTTPP - 18/20</th>
              <th className="border-r border-gray-500">AMTTPP - 33/35</th>
              <th className="border-r border-gray-500">AMTTPP - 50/50</th>
              <th className="border-r border-gray-500">AMTTPP - 100/20</th>
              <th className="border-r border-gray-500">AMTTPP - 140/20</th>
            </tr>
          </thead>

          <tbody>
            <tr className="text-center pt-1 border-t border-gray-500">
              <th className="border-r border-gray-500">No. of Piston</th>
              <td className="border-r border-gray-500">2</td>
              <td className="border-r border-gray-500">3</td>
              <td className="border-r border-gray-500">3</td>
              <td className="border-r border-gray-500">3</td>
              <td className="border-r border-gray-500">3</td>
            </tr>

            <tr className="text-center pt-2 border-t border-gray-500">
              <th className="border-r border-gray-500">Max. Pressure</th>
              <td className="border-r border-gray-500">
                256 PSI <br /> (18 KG.)
              </td>
              <td className="border-r border-gray-500">
                500 PSI <br /> (35 KG.)
              </td>
              <td className="border-r border-gray-500">
                700 PSI <br /> (50 KG.)
              </td>
              <td className="border-r border-gray-500">
                1422 PSI <br /> (100 KG.)
              </td>
              <td className="border-r border-gray-500">
                256 PSI <br /> (18 KG.)
              </td>
            </tr>

            <tr className="text-center pt-1 border-t border-gray-500">
              <th className="border-r border-gray-500">Pump RPM</th>
              <td className="border-r border-gray-500">600</td>
              <td className="border-r border-gray-500">540</td>
              <td className="border-r border-gray-500">600</td>
              <td className="border-r border-gray-500">600</td>
              <td className="border-r border-gray-500">600</td>
            </tr>

            <tr className="text-center pt-1 border-t border-gray-500">
              <th className="border-r border-gray-500">
                Suction Capacity ( LPM ){" "}
              </th>
              <td className="border-r border-gray-500">15</td>
              <td className="border-r border-gray-500">35</td>
              <td className="border-r border-gray-500">50</td>
              <td className="border-r border-gray-500">20</td>
              <td className="border-r border-gray-500">20</td>
            </tr>

            <tr className="text-center pt-2 border-t border-gray-500">
              <th className="border-r border-gray-500">Electric motor</th>
              <td className="border-r border-gray-500">
                2 H.P <br /> (1440 RPM.)
              </td>
              <td className="border-r border-gray-500">
                3 H.P <br /> (1440 RPM.)
              </td>
              <td className="border-r border-gray-500">
                5 H.P <br /> (1440 RPM.)
              </td>
              <td className="border-r border-gray-500">
                7.5 H.P <br /> (1440 RPM.)
              </td>
              <td className="border-r border-gray-500">
                10 H.P <br /> (1440 RPM.)
              </td>
            </tr>

            <tr className="text-center pt-1 border-t border-gray-500">
              <th className="border-r border-gray-500">V - Belt Size</th>
              <td className="border-r border-gray-500">B-34</td>
              <td className="border-r border-gray-500">A-40</td>
              <td className="border-r border-gray-500">A-42</td>
              <td className="border-r border-gray-500">B-20</td>
              <td className="border-r border-gray-500">B-20</td>
            </tr>

            <tr className="text-center pt-1 border-t border-gray-500">
              <th className="border-r border-gray-500">Weight</th>
              <td className="border-r border-gray-500">15 KG.</td>
              <td className="border-r border-gray-500">20 KG.</td>
              <td className="border-r border-gray-500">25 KG.</td>
              <td className="border-r border-gray-500">60 KG.</td>
              <td className="border-r border-gray-500">60 KG.</td>
            </tr>

            <tr className="text-center pt-1 border-t border-gray-500">
              <th className="border-r border-gray-500">Main Body </th>
              <td className="border-r border-gray-500"> C.I. </td>
              <td className="border-r border-gray-500">ALUMINUM</td>
              <td className="border-r border-gray-500"> C.I.</td>
              <td className="border-r border-gray-500"> C.I.</td>
              <td className="border-r border-gray-500"> C.I.</td>
            </tr>

            <tr className="text-center pt-1 border-t border-gray-500">
              <th className="border-r border-gray-500">Head</th>
              <td className="border-r border-gray-500"> SS 304</td>
              <td className="border-r border-gray-500"> SS 304</td>
              <td className="border-r border-gray-500"> SS 304</td>
              <td className="border-r border-gray-500"> SS 304</td>
              <td className="border-r border-gray-500"> SS 304</td>
            </tr>

            <tr className="text-center pt-1 border-t border-gray-500">
              <th className="border-r border-gray-500">Piston</th>
              <td className="border-r border-gray-500"> SS 304</td>
              <td className="border-r border-gray-500"> SS 304</td>
              <td className="border-r border-gray-500"> SS 304</td>
              <td className="border-r border-gray-500"> SS 304</td>
              <td className="border-r border-gray-500"> SS 304</td>
            </tr>

            <tr className="text-center pt-1 border-t border-gray-500">
              <th className="border-r border-gray-500">Stroke Length</th>
              <td className="border-r border-gray-500">20</td>
              <td className="border-r border-gray-500">20</td>
              <td className="border-r border-gray-500">30</td>
              <td className="border-r border-gray-500">25</td>
              <td className="border-r border-gray-500">25</td>
            </tr>

            <tr className="text-center pt-1 border-t border-gray-500">
              <th className="border-r border-gray-500">Piston Diameter </th>
              <td className="border-r border-gray-500">30</td>
              <td className="border-r border-gray-500">30</td>
              <td className="border-r border-gray-500">30</td>
              <td className="border-r border-gray-500">40</td>
              <td className="border-r border-gray-500">40</td>
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
                <li>subject to hydro testing / jetting.</li>
                <li>railway workshops and cleaning yards.</li>
                <li>airports & shipyards.</li>
              </ul>
            </div>
          </div>

          <div className="left w-1/2 pr-10">
            <div className="">
              <h1 className="uppercase text-4xl font-bold">
                performance
                <span className="text-themeCarrot"> range</span>
              </h1>
              <div className="h-1 w-[44%] bg-black mt-4"></div>
            </div>
            <div className=" mt-8">
              <ul className="text-lg capitalize">
                <li>
                  Max Pressure:- up to 140 kg/cm <sup>2</sup>
                </li>
                <li>Max Flow:- up to 50 LPM</li>
                <li>Max Motor / Engine HP:- up to 10</li>
                <li>Max Pump RPM - up to 750 </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex">
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
                <li>Electric Motor or Engine Driven System</li>
                <li>Heavy duty construction, light in weight.</li>
                <li>Stainless steel fluid end construction CF8 (SS 304) F</li>
                <li>wSubjected to full load testing.</li>
                <li>Totally Dependable, Reliable And Efficient Performance</li>
                <li>Self Oiling System Quick Acting Relief Valve</li>
                <li>Manufactured on state of the art machinery</li>
                <li>Pulley & Belts drive System</li>
                <li>Brass Unloaded Valve with inlet bypass</li>
                <li>Adjustable Pressure Regulator</li>
                <li>Trolley Mounted Pump Unit</li>
                <li>Pistons Are Ceramic Coated</li>
              </ul>
            </div>
          </div>

          <div className="right w-1/2">
            <div className="">
              <h1 className="uppercase text-4xl font-bold">
                standard
                <span className="text-themeCarrot"> accessories</span>
              </h1>
              <div className="h-1 w-[30%] bg-black mt-4"></div>
            </div>
            <div className=" mt-8">
              <ul className="text-lg capitalize">
                <li>Pressure Release Cock Made From Brass Metal</li>
                <li>Pump Head Made From Brass Material. </li>
                <li>Crank Case Made From Aluminum Material.</li>
                <li>Pump Unloaded Valve Made From Brass Material </li>
                <li>
                  Discharge High Pressure Hose with Attachment Length 3 Mtrs.
                </li>
                <li>
                  Stainless Steel Glycerin Filled Pressure Gauge With 4’&quot;
                  Inch Dial With Calibration Certificate
                </li>
                <li>
                  Discharge Valve(NRV) Made From Stainless Steel Material.{" "}
                </li>
                <li>Pump Pulley made from C.I. / Aluminum Material </li>
                <li>Pressure set valve Made From Stainless Steel Material </li>
                <li>Pump Plunger Made From Ceramic Material </li>
                <li>
                  Pump Stand Made From Mild Steel 3&quot; x 1 1/2 &quot; C
                  Channel{" "}
                </li>
                <li>3 Mtrs inlet hose with Stainless Steel Strainer </li>
                <li>Pump Trolley With Four Wheels</li>
                <li>
                  Suitable Electric Motor Starter Supple With Pump ( C & S
                  Control Penal / DOL Starter
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TriplexPlungerPumpPage;
