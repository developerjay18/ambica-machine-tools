"use client";

import React from "react";
import { montserrat } from "@/app/fonts";
import Image from "next/image";
import Heading from "@/components/Heading/Heading";
import data from "@/data/triplex_plunger_pump_amtmp_data.json";
import TableHeading from "@/components/TableHeading/TableHeading";

function TriplexPlungerPumpAMTMPPage() {
  const { moc, techDetails, notes } = data;

  return (
    <main>
      {/* banner  */}
      <div
        className={`product-five-banner shadow-lg flex pt-28 pl-[15rem] flex-col h-[480px] bg-black text-white ${montserrat.className}`}
      >
        <div className=" w-[34%] flex flex-col gap-y-4">
          <h1 className="text-4xl font-bold text-center inline-flex capitalize">
            Manufacturer of <br /> triplex plunger pump <br /> (AMTMP Series)
          </h1>
          <p className="inline-flex text-center">
            Triplex Plunger Pump - AMTLP Series, AMBICA MACHINE TOOLS is one of
            the prominent leading Manufacturer and Supplier of Various kind of
            plunger pumps and more...
          </p>
        </div>
      </div>

      {/* product images  */}
      <div className="product-images px-16 py-8 flex flex-col gap-y-10">
        <Heading
          text1={"triplex plunger pump"}
          text2={"(series AMTMP)"}
          width={"w-[25%]"}
        />

        <div className="flex justify-between">
          <div className="w-[20%]">
            <Image
              src={
                "https://res.cloudinary.com/dhv2udxw2/image/upload/v1721224943/ambica-machine-tools/triplex-plunger-pump/kgb4qbkatc5coq6jkxic.png"
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
                "https://res.cloudinary.com/dhv2udxw2/image/upload/v1721224796/ambica-machine-tools/triplex-plunger-pump/e5hodjxfzlhswos8kco1.png"
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
                "https://res.cloudinary.com/dhv2udxw2/image/upload/v1721224781/ambica-machine-tools/triplex-plunger-pump/ld1bqq4dotzazep7yfbp.png"
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
                "https://res.cloudinary.com/dhv2udxw2/image/upload/v1721224765/ambica-machine-tools/triplex-plunger-pump/da2m7gvred4dl6ahtb6s.png"
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
      <div className="material-of-const bg-[#f4f4f4] px-16 py-8 flex flex-col gap-y-10">
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
      <div className="other-infos px-16 py-8 flex justify-between gap-x-20">
        <div className="left w-1/2 bg-[#f4f4f4] rounded-lg p-6 flex flex-col gap-y-6">
          <Heading text1={"technical"} text2={"details"} width={"w-[28%]"} />

          <ul className="details text-lg ml-4">
            {techDetails.map((item, index) => (
              <li key={`tech-detail-${index + 1}`}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="right w-1/2 bg-[#f4f4f4] rounded-lg p-6 flex flex-col gap-y-6">
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
      </div>

      {/* tables  */}
      <div className="table-one px-16 py-8 flex flex-col gap-y-10">
        <TableHeading
          text1={"AMTMP SERIES 10000"}
          text2={"PSI (750 BAR PUMP)"}
        />

        <div className="">
          <table>
            <tr>
              <th>MODEL NO:</th>
              <th>PLUNG DIA</th>
              <th>FLOW RATE</th>
              <th>60HP</th>
              <th>75HP</th>
              <th>100HP</th>
              <th>120HP</th>
            </tr>
            <tr>
              <td>AMTMP - 62/35</td>
              <td>20</td>
              <td>35</td>
              <td>620</td>
              <td>750</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>AMTMP - 52/42</td>
              <td>22</td>
              <td>42</td>
              <td>520</td>
              <td>680</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>AMTMP - 43/52</td>
              <td>24</td>
              <td>52</td>
              <td>430</td>
              <td>530</td>
              <td>720</td>
              <td></td>
            </tr>
            <tr>
              <td>AMTMP - 36/62</td>
              <td>26</td>
              <td>62</td>
              <td>360</td>
              <td>450</td>
              <td>600</td>
              <td>745</td>
            </tr>
            <tr>
              <td>AMTMP - 31/70</td>
              <td>28</td>
              <td>70</td>
              <td>310</td>
              <td>375</td>
              <td>510</td>
              <td>660</td>
            </tr>
            <tr>
              <td>AMTMP - 27/80</td>
              <td>30</td>
              <td>80</td>
              <td>270</td>
              <td>330</td>
              <td>450</td>
              <td>580</td>
            </tr>
            <tr>
              <td>AMTMP - 24/90</td>
              <td>32</td>
              <td>90</td>
              <td>240</td>
              <td>330</td>
              <td>400</td>
              <td>515</td>
            </tr>
            <tr>
              <td>AMTMP - 19/115</td>
              <td>36</td>
              <td>115</td>
              <td>190</td>
              <td>230</td>
              <td>315</td>
              <td>400</td>
            </tr>
            <tr>
              <td>AMTMP - 15/145</td>
              <td>40</td>
              <td>145</td>
              <td>150</td>
              <td>185</td>
              <td>250</td>
              <td>320</td>
            </tr>
          </table>
        </div>
      </div>
    </main>
  );
}

export default TriplexPlungerPumpAMTMPPage;
