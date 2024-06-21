"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

function HPAmthpTriplexPlungerPumpPage() {
  return (
    <div className="max-w-screen overflow-hidden">
      {/* hero section  */}
      <div className="hero-section home-hero-bg p-5 lg:p-24">
        <div className="flex flex-row text-white justify-center items-center gap-y-8 pt-8">
          <div className="left">
            {/* for larger screens  */}
            <h1 className="text-5xl text-center hidden uppercase font-bold w-[80%] mx-auto lg:block leading-[4rem]">
              series amthp - HIGH PRESSURE TRIPLEX PLUNGER PUMP (HP Series)
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

        <div className="table-1">
          <h2 className="mt-16 text-3xl font-bold text-center">
            AMTHP SERIES PRODUCT RANGE FOR
            <span className="text-themeCarrot ">
              &nbsp; HYDRO TEST APPLICATION
            </span>
          </h2>
          <table className="border border-gray-500 w-full mt-8">
            <thead>
              <tr className="uppercase text-2xl text-center">
                <th colSpan={7}>AMTHP - series - 15000 PSI (1000 BAR) pump</th>
              </tr>
              <tr className="border-t border-gray-500 capitalize">
                <th className="border-r border-gray-500">model no</th>
                <th className="border-r border-gray-500">
                  plungdia <br /> Dia (mm)
                </th>
                <th className="border-r border-gray-500">
                  flow rate <br /> (LPM)
                </th>

                <th className="border-r border-gray-500">100 HP / 75 KW</th>
                <th className="border-r border-gray-500">125 HP / 90 KW</th>
                <th className="border-r border-gray-500">150 HP / 110 KW</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-t border-gray-500 text-center">
                <td className="border-r border-gray-500">AMTHP - 13/38</td>
                <td className="border-r border-gray-500">20</td>
                <td className="border-r border-gray-500">38</td>
                <td className="border-r border-gray-500">950</td>
                <td className="border-r border-gray-500">1200</td>
                <td className="border-r border-gray-500">1300</td>
              </tr>

              <tr className="border-t border-gray-500 text-center">
                <td className="border-r border-gray-500">AMTHP - 10/47</td>
                <td className="border-r border-gray-500">22</td>
                <td className="border-r border-gray-500">47</td>
                <td className="border-r border-gray-500">800</td>
                <td className="border-r border-gray-500">950</td>
                <td className="border-r border-gray-500">1000</td>
              </tr>

              <tr className="border-t border-gray-500 text-center">
                <td className="border-r border-gray-500">AMTHP - 95/56</td>
                <td className="border-r border-gray-500">24</td>
                <td className="border-r border-gray-500">56</td>
                <td className="border-r border-gray-500">650</td>
                <td className="border-r border-gray-500">800</td>
                <td className="border-r border-gray-500">950</td>
              </tr>

              <tr className="border-t border-gray-500 text-center">
                <td className="border-r border-gray-500">AMTHP - 80/65</td>
                <td className="border-r border-gray-500">26</td>
                <td className="border-r border-gray-500">65</td>
                <td className="border-r border-gray-500">550</td>
                <td className="border-r border-gray-500">700</td>
                <td className="border-r border-gray-500">800</td>
              </tr>

              <tr className="border-t border-gray-500 text-center">
                <td className="border-r border-gray-500">AMTHP - 70/76</td>
                <td className="border-r border-gray-500">28</td>
                <td className="border-r border-gray-500">76</td>
                <td className="border-r border-gray-500">480</td>
                <td className="border-r border-gray-500">600</td>
                <td className="border-r border-gray-500">700</td>
              </tr>

              <tr className="border-t border-gray-500 text-center">
                <td className="border-r border-gray-500">AMTHP - 60/87</td>
                <td className="border-r border-gray-500">30</td>
                <td className="border-r border-gray-500">87</td>
                <td className="border-r border-gray-500">410</td>
                <td className="border-r border-gray-500">500</td>
                <td className="border-r border-gray-500">600</td>
              </tr>

              <tr className="border-t border-gray-500 text-center">
                <td className="border-r border-gray-500">AMTHP - 52/99</td>
                <td className="border-r border-gray-500">32</td>
                <td className="border-r border-gray-500">99</td>
                <td className="border-r border-gray-500">375</td>
                <td className="border-r border-gray-500">450</td>
                <td className="border-r border-gray-500">525</td>
              </tr>

              <tr className="border-t border-gray-500 text-center">
                <td className="border-r border-gray-500">AMTHP - 40/126</td>
                <td className="border-r border-gray-500">36</td>
                <td className="border-r border-gray-500">126</td>
                <td className="border-r border-gray-500">280</td>
                <td className="border-r border-gray-500">350</td>
                <td className="border-r border-gray-500">400</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* content section  */}
      <div className="content p-24 flex flex-col gap-y-20">
        <div className="flex gap-x-8">
          <div className="left w-1/2">
            <div className="">
              <h1 className="uppercase text-4xl font-bold">
                material of
                <span className="text-themeCarrot"> construction</span>
              </h1>
              <div className="h-1 w-[35%] bg-black mt-4"></div>
            </div>
            <div className=" mt-8 pr-12">
              <ul className="text-lg capitalize flex flex-col gap-y-2">
                <li>
                  <div className="">
                    <span className="font-bold">CRANKSHAFT : </span>
                    <span>ALLOY STEEL</span>
                  </div>
                  <div className="">
                    crankshaft is made of nitrated, hardened and precision
                    ground for extremely long life and durability.
                  </div>
                </li>

                <li>
                  <div className="">
                    <span className="font-bold">MAIN BODY (CRANK CASE) : </span>
                    <span>SPHEROIDAL GRAPHITE IRON</span>
                  </div>
                  <div className="">
                    main body in spheroidal graphite iron casting with honned
                    surface finish bore.
                  </div>
                </li>

                <li>
                  <div className="">
                    <span className="font-bold"> PISTON (CROSS HEAD) :</span>
                    <span> GREY IRON & STAINLESS STEEL</span>
                  </div>
                  <div className="">
                    alloy steel casting piston & stainless steel piston rod are
                    hardened & super finish surface.
                  </div>
                </li>

                <li>
                  <div className="">
                    <span className="font-bold"> CONNECTING ROD :</span>
                    <span> ALLOY STEEL</span>
                  </div>
                  <div className="">
                    Forged steel connecng rods with anfricon bearings. Heavy pin
                    area construcon, for added load strength.
                  </div>
                </li>

                <li>
                  <div className="">
                    <span className="font-bold"> BEARING : </span>
                    <span></span>
                  </div>
                  <div className="">
                    Oversized for maximum life and load distribuon.Self
                    alignment roller bearing enables it to handle 26% more load
                    than other pumps.
                  </div>
                </li>

                <li>
                  <div className="">
                    <span className="font-bold">PUMP HEAD : </span>
                    <span>STAINLESS STEEL</span>
                  </div>
                  <div className="">
                    Liquid end is made of high corrosion resistant forged SS
                    304.
                  </div>
                </li>

                <li>
                  <div className="">
                    <span className="font-bold">COMPLETE VALVE : </span>
                    <span>STAINLESS STEEL</span>
                  </div>
                  <div className="">
                    Valves made stainless steel for hardened & an corrosion hard
                    surface coated for long life. High volumetric efficiency
                    valves operate at 96% efficiency plus.
                  </div>
                </li>

                <li>
                  <div className="">
                    <span className="font-bold">PLUNGER : </span>
                    <span>CERAMIC / TUNGSTEN COATED</span>
                  </div>
                  <div className="">
                    Primarily composed of ceramic coated or Tungsten coated.
                    Surface roughness is extremely good i.e. &lt;0.2 Ra.
                  </div>
                </li>

                <li>
                  <div className="">
                    <span className="font-bold">PLUNGER SEAL :</span>
                    <span> PTFE ARAMIDE</span>
                  </div>
                  <div className="">
                    aramide fibre yarn packing with PTFE fibre face or
                    carbonaceous aramide yarn packing with GFO fibre face or
                    high compressive & tensile strength ensure effective
                    sealing.
                  </div>
                </li>

                <li>
                  <div className="">
                    <span className="font-bold">WHITE METAL BEARING :</span>
                    <span></span>
                  </div>
                  <div className="">
                    antifriction bearings for long life of crankshaft.
                  </div>
                </li>

                <li>
                  <div className="">
                    <span className="font-bold">HELICAL GEAR :</span>
                    <span>ALLOY STEEL</span>
                  </div>
                  <div className="">
                    helical gear is nitride hardened and precision ground for
                    extremely long life and durability.
                  </div>
                </li>

                <li>
                  <div className="">
                    <span className="font-bold">PINION SHAFT :</span>
                    <span>ALLOY STEEL</span>
                  </div>
                  <div className="">
                    pinion shaft is nitride hardened and precision ground for
                    extremely long life and durability.
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="right w-1/2 flex flex-col gap-y-20">
            <div className="">
              <div className="">
                <h1 className="uppercase text-4xl font-bold">
                  technical
                  <span className="text-themeCarrot"> details</span>
                </h1>
                <div className="h-1 w-[22%] bg-black mt-4"></div>
              </div>
              <div className=" mt-8">
                <ul className="text-lg capitalize">
                  <li>Plunger Stroke : 105 mm</li>
                  <li>Plunger Force : 40 KN (4080 Kgf)</li>
                  <li>Max. Plunger Speed : 1.52 m/sec @ 500 spm</li>
                  <li>
                    Inlet Pressure Min. / max : 2 to 3 bar <br /> (Booster pump
                    flow require min 1.5 times of rating flow){" "}
                  </li>
                  <li>Oil Type : 80 W 90</li>
                  <li>Oil Capacity : 5 Ltr</li>
                  <li>Max. Liquid Temp. : 70 DEG. C ( 160 DEG. F)</li>
                  <li>Suction Connection : 2&quot; BSPF</li>
                  <li>Discharge Connection : 1/2&quot; BSPF</li>
                  <li>Medium : Clean Water</li>
                  <li>AMTTPP series : Designed in built gear.</li>
                  <li>splash lubrication / forced feed lubrication.</li>
                </ul>
              </div>
            </div>

            <div className="">
              <div className="">
                <h1 className="uppercase text-4xl font-bold">
                  special notes &
                  <span className="text-themeCarrot"> application</span>
                </h1>
                <div className="h-1 w-[49%] bg-black mt-4"></div>
              </div>
              <div className=" mt-8">
                <ul className="text-lg capitalize">
                  <li>Maximum Permissible fluid temperature is 70 Deg. C.</li>
                  <li>
                    Power calculations shown in the table is based on maximum
                    rated pressure; however, for low pressure requirement, power
                    will also be proportionally reduced. Pump speed lower than
                    specified in the above chart is also available for special
                    applications.
                  </li>
                  <li>
                    Volumetric efficiency is considered @ 100% where not
                    specified.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HPAmthpTriplexPlungerPumpPage;
