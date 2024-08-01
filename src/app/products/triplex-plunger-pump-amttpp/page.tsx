"use client";

import React from "react";
import { montserrat } from "@/app/fonts";
import Image from "next/image";
import Heading from "@/components/Heading/Heading";
import data from "@/data/triplex_plunger_pump_amttpp_data.json";
import TableHeading from "@/components/TableHeading/TableHeading";

function TriplexPlungerPumpAMTTPPPage() {
  const { moc, accessories, perfRange, application } = data;

  return (
    <main>
      {/* banner  */}
      <div
        className={`product-four-banner shadow-lg flex pt-28 pl-[15rem] flex-col h-[500px] bg-black text-white ${montserrat.className}`}
      >
        <div className=" w-[37%] flex flex-col gap-y-4">
          <h1 className="text-4xl font-bold text-center inline-flex capitalize">
            Manufacturer of <br /> triplex plunger pump <br /> (AMTTPP Series)
          </h1>
          <p className="inline-flex text-center">
            Triplex Plunger Pump - AMTTPP Series, AMBICA MACHINE TOOLS is one of
            the prominent leading Manufacturer and Supplier of Various kind of
            plunger pumps and more...
          </p>
        </div>
      </div>

      {/* product images  */}
      <div className="product-images px-16 py-8 flex flex-col gap-y-10">
        <Heading
          text1={"triplex plunger pump"}
          text2={"(series AMTTPP)"}
          width={"w-[25%]"}
        />

        <div className="flex justify-between">
          <div className="w-[20%]">
            <Image
              src={
                "https://res.cloudinary.com/dhv2udxw2/image/upload/v1721272931/ambica-machine-tools/triplex-plunger-pump-amttpp/xr3ycbz0ftso3oooibtm.png"
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
                "https://res.cloudinary.com/dhv2udxw2/image/upload/v1721272931/ambica-machine-tools/triplex-plunger-pump-amttpp/twap8vri4zmgdlfvu9xz.png"
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
                "https://res.cloudinary.com/dhv2udxw2/image/upload/v1721272931/ambica-machine-tools/triplex-plunger-pump-amttpp/admucqlctdd9hw5g5lqf.png"
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
                "https://res.cloudinary.com/dhv2udxw2/image/upload/v1721272931/ambica-machine-tools/triplex-plunger-pump-amttpp/vjimrdwciicooqyzqaqe.png"
              }
              alt="product-image"
              height={423}
              width={367}
              className="rounded-xl shadow-lg glow bg-[#f4f4f4]"
            />
          </div>
        </div>
      </div>

      {/* data section  */}
      <div className="data px-16 py-4">
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
      <div className="other-infos px-16 py-8 flex justify-between gap-x-20">
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
      <div className="other-infos px-16 py-0 flex justify-between gap-x-20">
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
        <TableHeading text1={"technical"} text2={"specifications"} />
        <div className="">
          <table>
            <tr>
              <th>Specifications</th>
              <th colSpan={5} className="text-center">
                Model
              </th>
            </tr>
            <tr>
              <th></th>
              <th>AMTTPP - 18/20</th>
              <th>AMTTPP-35/35</th>
              <th>AMTTPP - 50/50</th>
              <th>AMTTPP-100/20</th>
              <th>AMTTPP - 140/20</th>
            </tr>
            <tr>
              <td>No. of Piston</td>
              <td>2</td>
              <td>3</td>
              <td>3</td>
              <td>3</td>
              <td>3</td>
            </tr>
            <tr>
              <td>Max. Pressure</td>
              <td>256 PSI (18 KG.)</td>
              <td>500 PSI (35 KG.)</td>
              <td>700 PSI (50 KG.)</td>
              <td>1422 PSI (100 KG.)</td>
              <td>256 PSI (18 KG.)</td>
            </tr>
            <tr>
              <td>Pump RPM</td>
              <td>600</td>
              <td>540</td>
              <td>600</td>
              <td>600</td>
              <td>600</td>
            </tr>
            <tr>
              <td>Suction Capacity (LPM)</td>
              <td>15</td>
              <td>35</td>
              <td>50</td>
              <td>20</td>
              <td>20</td>
            </tr>
            <tr>
              <td>Electric motor</td>
              <td>2 H.P. (1440 RPM)</td>
              <td>3 H.P. (1440 RPM)</td>
              <td>5 H.P. (1440 RPM)</td>
              <td>7.5 H.P. (1440 RPM)</td>
              <td>10 H.P. (1440 RPM)</td>
            </tr>
            <tr>
              <td>V - Belt Size</td>
              <td>B-34</td>
              <td>A-40</td>
              <td>A-42</td>
              <td>B-20</td>
              <td>B-20</td>
            </tr>
            <tr>
              <td>Weight</td>
              <td>15 KG.</td>
              <td>20 KG.</td>
              <td>25 KG.</td>
              <td>60 KG.</td>
              <td>60 KG.</td>
            </tr>
            <tr>
              <td>Main Body</td>
              <td>C.I.</td>
              <td>ALUMINUM</td>
              <td>C.I.</td>
              <td>C.I.</td>
              <td>C.I.</td>
            </tr>
            <tr>
              <td>Head</td>
              <td>SS 304</td>
              <td>SS 304</td>
              <td>SS 304</td>
              <td>SS 304</td>
              <td>SS 304</td>
            </tr>
            <tr>
              <td>Piston</td>
              <td>SS 304</td>
              <td>SS 304</td>
              <td>SS 304</td>
              <td>SS 304</td>
              <td>SS 304</td>
            </tr>
            <tr>
              <td>Stroke Length</td>
              <td>20</td>
              <td>20</td>
              <td>30</td>
              <td>25</td>
              <td>25</td>
            </tr>
            <tr>
              <td>Piston Diameter</td>
              <td>30</td>
              <td>30</td>
              <td>30</td>
              <td>40</td>
              <td>40</td>
            </tr>
          </table>
        </div>
      </div>
    </main>
  );
}

export default TriplexPlungerPumpAMTTPPPage;
