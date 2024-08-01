"use client";

import React from "react";
import { montserrat } from "@/app/fonts";
import Image from "next/image";
import Heading from "@/components/Heading/Heading";
import data from "@/data/triplex_plunger_pump_amtlp_data.json";
import TableHeading from "@/components/TableHeading/TableHeading";

function TriplexPlungerPumpAMTLPPage() {
  const { moc, techDetails, notes } = data;

  return (
    <main>
      {/* banner  */}
      <div
        className={`product-five-banner shadow-lg flex pt-28 pl-[15rem] flex-col h-[480px] bg-black text-white ${montserrat.className}`}
      >
        <div className=" w-[34%] flex flex-col gap-y-4">
          <h1 className="text-4xl font-bold text-center inline-flex capitalize">
            Manufacturer of <br /> triplex plunger pump <br /> (AMTLP Series)
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
          text2={"(series AMTLP)"}
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
      <div className="material-of-const px-16 py-8 bg-[#f4f4f4] flex flex-col gap-y-10">
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
          text1={"AMTLP SERIES PRODUCT RANGE FOR"}
          text2={"HYDRO TEST APPLICATION"}
        />

        <div className="">
          <table>
            <tr>
              <td align="center" valign="middle">
                <b>Model No.</b>
              </td>
              <td align="center" valign="middle">
                <b>Plunger Diameter(MM)</b>
              </td>
              <td align="center" valign="middle">
                <b>Flow (LPM)</b>
              </td>
              <td align="center" valign="middle">
                <b>Max. Rated Pressure (KG/CM2)</b>
              </td>
              <td align="center" valign="middle">
                <b>Strokes Per Minute</b>
              </td>
              <td align="center" valign="middle">
                <b>Motor (HP)</b>
              </td>
              <td align="center" valign="middle">
                <b>Inlet</b>
              </td>
              <td align="center" valign="middle">
                <b>Outlet</b>
              </td>
            </tr>
            <tr>
              <td align="center" valign="middle">
                AMTLP-130/10
              </td>
              <td align="center" valign="middle">
                12
              </td>
              <td align="center" valign="middle">
                10
              </td>
              <td align="center" valign="middle">
                1300
              </td>
              <td align="center" valign="middle">
                750
              </td>
              <td align="center" valign="middle">
                40
              </td>
              <td align="center" valign="middle">
                3/4&quot;
              </td>
              <td align="center" valign="middle">
                1/2&quot;
              </td>
            </tr>
            <tr>
              <td align="center" valign="middle">
                AMTLP-130/08
              </td>
              <td align="center" valign="middle">
                12
              </td>
              <td align="center" valign="middle">
                8
              </td>
              <td align="center" valign="middle">
                1300
              </td>
              <td align="center" valign="middle">
                620
              </td>
              <td align="center" valign="middle">
                30
              </td>
              <td align="center" valign="middle">
                3/4&quot;
              </td>
              <td align="center" valign="middle">
                1/2&quot;
              </td>
            </tr>
            <tr>
              <td align="center" valign="middle">
                AMTLP - 130/07
              </td>
              <td align="center" valign="middle">
                12
              </td>
              <td align="center" valign="middle">
                7
              </td>
              <td align="center" valign="middle">
                1300
              </td>
              <td align="center" valign="middle">
                550
              </td>
              <td align="center" valign="middle">
                25
              </td>
              <td align="center" valign="middle">
                3/4&quot;
              </td>
              <td align="center" valign="middle">
                1/2&quot;
              </td>
            </tr>
            <tr>
              <td align="center" valign="middle">
                AMTLP-130/05
              </td>
              <td align="center" valign="middle">
                12
              </td>
              <td align="center" valign="middle">
                5
              </td>
              <td align="center" valign="middle">
                1300
              </td>
              <td align="center" valign="middle">
                415
              </td>
              <td align="center" valign="middle">
                20
              </td>
              <td align="center" valign="middle">
                3/4&quot;
              </td>
              <td align="center" valign="middle">
                1/2&quot;
              </td>
            </tr>
            <tr>
              <td align="center" valign="middle">
                AMTLP - 100/14
              </td>
              <td align="center" valign="middle">
                14
              </td>
              <td align="center" valign="middle">
                14
              </td>
              <td align="center" valign="middle">
                1000
              </td>
              <td align="center" valign="middle">
                750
              </td>
              <td align="center" valign="middle">
                40
              </td>
              <td align="center" valign="middle">
                3/4&quot;
              </td>
              <td align="center" valign="middle">
                1/2&quot;
              </td>
            </tr>
            <tr>
              <td align="center" valign="middle">
                AMTLP-100/10
              </td>
              <td align="center" valign="middle">
                14
              </td>
              <td align="center" valign="middle">
                10
              </td>
              <td align="center" valign="middle">
                1000
              </td>
              <td align="center" valign="middle">
                550
              </td>
              <td align="center" valign="middle">
                30
              </td>
              <td align="center" valign="middle">
                3/4&quot;
              </td>
              <td align="center" valign="middle">
                1/2&quot;
              </td>
            </tr>
            <tr>
              <td align="center" valign="middle">
                AMTLP - 100/08
              </td>
              <td align="center" valign="middle">
                14
              </td>
              <td align="center" valign="middle">
                8
              </td>
              <td align="center" valign="middle">
                1000
              </td>
              <td align="center" valign="middle">
                450
              </td>
              <td align="center" valign="middle">
                25
              </td>
              <td align="center" valign="middle">
                3/4&quot;
              </td>
              <td align="center" valign="middle">
                1/2&quot;
              </td>
            </tr>
            <tr>
              <td align="center" valign="middle">
                AMTLP - 100/07
              </td>
              <td align="center" valign="middle">
                14
              </td>
              <td align="center" valign="middle">
                7
              </td>
              <td align="center" valign="middle">
                1000
              </td>
              <td align="center" valign="middle">
                350
              </td>
              <td align="center" valign="middle">
                20
              </td>
              <td align="center" valign="middle">
                3/4&quot;
              </td>
              <td align="center" valign="middle">
                1/2&quot;
              </td>
            </tr>
            <tr>
              <td align="center" valign="middle">
                AMTLP-75/18
              </td>
              <td align="center" valign="middle">
                16
              </td>
              <td align="center" valign="middle">
                18
              </td>
              <td align="center" valign="middle">
                750
              </td>
              <td align="center" valign="middle">
                750
              </td>
              <td align="center" valign="middle">
                40
              </td>
              <td align="center" valign="middle">
                3/4&quot;
              </td>
              <td align="center" valign="middle">
                1/2&quot;
              </td>
            </tr>
            <tr>
              <td align="center" valign="middle">
                AMTLP - 75/13
              </td>
              <td align="center" valign="middle">
                16
              </td>
              <td align="center" valign="middle">
                13
              </td>
              <td align="center" valign="middle">
                750
              </td>
              <td align="center" valign="middle">
                550
              </td>
              <td align="center" valign="middle">
                30
              </td>
              <td align="center" valign="middle">
                3/4&quot;
              </td>
              <td align="center" valign="middle">
                1/2&quot;
              </td>
            </tr>
            <tr>
              <td align="center" valign="middle">
                AMTLP - 75/10
              </td>
              <td align="center" valign="middle">
                16
              </td>
              <td align="center" valign="middle">
                10
              </td>
              <td align="center" valign="middle">
                750
              </td>
              <td align="center" valign="middle">
                450
              </td>
              <td align="center" valign="middle">
                25
              </td>
              <td align="center" valign="middle">
                3/4&quot;
              </td>
              <td align="center" valign="middle">
                1/2&quot;
              </td>
            </tr>
            <tr>
              <td align="center" valign="middle">
                AMTLP-75/08
              </td>
              <td align="center" valign="middle">
                16
              </td>
              <td align="center" valign="middle">
                8
              </td>
              <td align="center" valign="middle">
                750
              </td>
              <td align="center" valign="middle">
                350
              </td>
              <td align="center" valign="middle">
                20
              </td>
              <td align="center" valign="middle">
                3/4&quot;
              </td>
              <td align="center" valign="middle">
                1/2&quot;
              </td>
            </tr>
          </table>
        </div>
      </div>

      {/* tables  */}
      <div className="table-one px-16 py-8 flex flex-col gap-y-10">
        <TableHeading
          text1={"AMTLP SERIES PRODUCT RANGE FOR"}
          text2={"HYDRO BLASTING AND HYDRO TEST"}
        />

        <div className="">
          <table>
            <tr>
              <th>Model No.</th>
              <th>Plunger Diameter(MM)</th>
              <th>Flow (LPM)</th>
              <th>Max. Rated Pressure(KG/CM2)</th>
              <th>Strokes Per Minute</th>
              <th>Motor (HP)</th>
              <th>Inlet</th>
              <th>Outlet</th>
            </tr>
            <tr>
              <td>AMTLP - 50/30</td>
              <td>18</td>
              <td>30</td>
              <td>500</td>
              <td>1000</td>
              <td>40</td>
              <td>1&quot;</td>
              <td>3/4&quot;</td>
            </tr>
            <tr>
              <td>AMTLP - 48/29</td>
              <td>18</td>
              <td>29</td>
              <td>480</td>
              <td>970</td>
              <td>40</td>
              <td>1&quot;</td>
              <td>3/4&quot;</td>
            </tr>
            <tr>
              <td>AMTLP - 48/21</td>
              <td>18</td>
              <td>21</td>
              <td>480</td>
              <td>710</td>
              <td>30</td>
              <td>1&quot;</td>
              <td>3/4&quot;</td>
            </tr>
            <tr>
              <td>AMTLP - 47/18</td>
              <td>18</td>
              <td>18</td>
              <td>470</td>
              <td>615</td>
              <td>25</td>
              <td>1&quot;</td>
              <td>3/4&quot;</td>
            </tr>
            <tr>
              <td>AMTLP - 47/15</td>
              <td>18</td>
              <td>15</td>
              <td>470</td>
              <td>500</td>
              <td>20</td>
              <td>1&quot;</td>
              <td>3/4&quot;</td>
            </tr>
            <tr>
              <td>AMTLP - 40/37</td>
              <td>20</td>
              <td>37</td>
              <td>400</td>
              <td>1000</td>
              <td>40</td>
              <td>1&quot;</td>
              <td>3/4&quot;</td>
            </tr>
            <tr>
              <td>AMTLP - 38/36</td>
              <td>20</td>
              <td>36</td>
              <td>380</td>
              <td>970</td>
              <td>40</td>
              <td>1&quot;</td>
              <td>3/4&quot;</td>
            </tr>
            <tr>
              <td>AMTLP - 39/26</td>
              <td>20</td>
              <td>26</td>
              <td>390</td>
              <td>710</td>
              <td>30</td>
              <td>1&quot;</td>
              <td>3/4&quot;</td>
            </tr>
            <tr>
              <td>AMTLP - 38/23</td>
              <td>20</td>
              <td>23</td>
              <td>380</td>
              <td>615</td>
              <td>25</td>
              <td>1&quot;</td>
              <td>3/4&quot;</td>
            </tr>
            <tr>
              <td>AMTLP - 38/19</td>
              <td>20</td>
              <td>19</td>
              <td>380</td>
              <td>500</td>
              <td>20</td>
              <td>1&quot;</td>
              <td>3/4&quot;</td>
            </tr>
            <tr>
              <td>AMTLP - 32/45</td>
              <td>22</td>
              <td>45</td>
              <td>320</td>
              <td>1000</td>
              <td>40</td>
              <td>1&quot;</td>
              <td>3/4&quot;</td>
            </tr>
            <tr>
              <td>AMTLP - 32/44</td>
              <td>22</td>
              <td>44</td>
              <td>320</td>
              <td>970</td>
              <td>40</td>
              <td>1&quot;</td>
              <td>3/4&quot;</td>
            </tr>
            <tr>
              <td>AMTLP - 32/32</td>
              <td>22</td>
              <td>32</td>
              <td>320</td>
              <td>710</td>
              <td>30</td>
              <td>1&quot;</td>
              <td>3/4&quot;</td>
            </tr>
            <tr>
              <td>AMTLP - 31/28</td>
              <td>22</td>
              <td>28</td>
              <td>310</td>
              <td>615</td>
              <td>25</td>
              <td>1&quot;</td>
              <td>3/4&quot;</td>
            </tr>
            <tr>
              <td>AMTLP - 31/23</td>
              <td>22</td>
              <td>23</td>
              <td>310</td>
              <td>500</td>
              <td>20</td>
              <td>1&quot;</td>
              <td>3/4&quot;</td>
            </tr>
            <tr>
              <td>AMTLP - 25/59</td>
              <td>25</td>
              <td>59</td>
              <td>250</td>
              <td>1000</td>
              <td>40</td>
              <td>1&quot;</td>
              <td>3/4&quot;</td>
            </tr>
            <tr>
              <td>AMTLP - 24/57</td>
              <td>25</td>
              <td>57</td>
              <td>240</td>
              <td>970</td>
              <td>40</td>
              <td>1&quot;</td>
              <td>3/4&quot;</td>
            </tr>
            <tr>
              <td>AMTLP - 25/42</td>
              <td>25</td>
              <td>42</td>
              <td>250</td>
              <td>710</td>
              <td>30</td>
              <td>1&quot;</td>
              <td>3/4&quot;</td>
            </tr>
            <tr>
              <td>AMTLP - 24/36</td>
              <td>25</td>
              <td>36</td>
              <td>240</td>
              <td>615</td>
              <td>25</td>
              <td>1&quot;</td>
              <td>3/4&quot;</td>
            </tr>
            <tr>
              <td>AMTLP - 24/30</td>
              <td>25</td>
              <td>30</td>
              <td>240</td>
              <td>500</td>
              <td>20</td>
              <td>1&quot;</td>
              <td>3/4&quot;</td>
            </tr>
          </table>
        </div>
      </div>
    </main>
  );
}

export default TriplexPlungerPumpAMTLPPage;
