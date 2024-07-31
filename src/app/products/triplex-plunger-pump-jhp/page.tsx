"use client";

import React from "react";
import { montserrat } from "@/app/fonts";
import Image from "next/image";
import Heading from "@/components/Heading/Heading";
import data from "@/data/triplex_plunger_pump_jhp_data.json";
import TableHeading from "@/components/TableHeading/TableHeading";

function TriplexPlungerPumpJHPPage() {
  const { moc, accessories, perfRange, application } = data;

  return (
    <main>
      {/* banner  */}
      <div
        className={`product-three-banner flex pt-28 pl-[15rem] flex-col h-[500px] bg-black text-white ${montserrat.className}`}
      >
        <div className=" w-[37%] flex flex-col gap-y-4">
          <h1 className="text-4xl font-bold text-center inline-flex capitalize">
            Manufacturer of <br /> triplex plunger pump <br /> (JHP Series)
          </h1>
          <p className="inline-flex text-center">
            Triplex Plunger Pump - JHP Series, AMBICA MACHINE TOOLS is one of
            the prominent leading Manufacturer and Supplier of Various kind of
            plunger pumps and more...
          </p>
        </div>
      </div>

      {/* product images  */}
      <div className="product-images px-16 py-8 flex flex-col gap-y-10">
        <Heading
          text1={"triplex plunger pump"}
          text2={"(series JHP)"}
          width={"w-[25%]"}
        />

        <div className="flex justify-between">
          <div className="w-[20%]">
            <Image
              src={
                "https://res.cloudinary.com/dhv2udxw2/image/upload/v1721276967/ambica-machine-tools/triplex-plunger-pump-jhp/o3fpkbvloyk5uhvla6dp.png"
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
                "https://res.cloudinary.com/dhv2udxw2/image/upload/v1721276967/ambica-machine-tools/triplex-plunger-pump-jhp/xhqudtrv2buxsrzyftgy.png"
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
                "https://res.cloudinary.com/dhv2udxw2/image/upload/v1721276967/ambica-machine-tools/triplex-plunger-pump-jhp/pxcc9ahpzm1naqwlsjwj.png"
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
                "https://res.cloudinary.com/dhv2udxw2/image/upload/v1721276967/ambica-machine-tools/triplex-plunger-pump-jhp/lxlgtbxeoiyhyaah8p1s.png"
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
      <div className="other-infos px-16 pt-8 pb-5 flex justify-between gap-x-10">
        <div className="right w-1/2 bg-[#f4f4f4] rounded-lg p-6 flex flex-col gap-y-6">
          <Heading text1={"standard"} text2={"accessories"} width={"w-[25%]"} />

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
          <table>
            <tr>
              <th className="">Model No.</th>
              <th colSpan={4} className="text-center">
                Flow Rate
              </th>
              <th colSpan={2} className="text-center">
                Max. Pressure
              </th>
              <th colSpan={2} className="text-center">
                RPM
              </th>
              <th colSpan={4} className="text-center">
                Max Power
              </th>
            </tr>
            <tr>
              <th></th>
              <th colSpan={2} className="text-center">
                1/min
              </th>
              <th colSpan={2} className="text-center">
                US GPM
              </th>
              <th colSpan={2} className="text-center"></th>
              <th colSpan={2} className="text-center"></th>
              <th colSpan={2} className="text-center">
                HP
              </th>
              <th colSpan={2} className="text-center">
                KW
              </th>
            </tr>
            <tr>
              <th></th>
              <th>50Hz</th>
              <th>60Hz</th>
              <th>50Hz</th>
              <th>60Hz</th>
              <th>Bar</th>
              <th>PSI</th>
              <th>50Hz</th>
              <th>60Hz</th>
              <th>50Hz</th>
              <th>60Hz</th>
              <th>50Hz</th>
              <th>60Hz</th>
            </tr>
            <tr>
              <td>JHP8515A</td>
              <td>8.5</td>
              <td>10</td>
              <td>2.2</td>
              <td>2.7</td>
              <td>150</td>
              <td>2200</td>
              <td></td>
              <td></td>
              <td>3.2</td>
              <td>3.8</td>
              <td>2.4</td>
              <td>2.9</td>
            </tr>
            <tr>
              <td>JHP1015A</td>
              <td>10</td>
              <td>12</td>
              <td>2.6</td>
              <td>3.2</td>
              <td>150</td>
              <td>2200</td>
              <td></td>
              <td></td>
              <td>3.7</td>
              <td>4.7</td>
              <td>2.8</td>
              <td>3.5</td>
            </tr>
            <tr>
              <td>JHP1215A</td>
              <td>12</td>
              <td>14</td>
              <td>3.1</td>
              <td>3.7</td>
              <td>150</td>
              <td>2200</td>
              <td></td>
              <td></td>
              <td>4.6</td>
              <td>5.4</td>
              <td>3.4</td>
              <td>4.0</td>
            </tr>
            <tr>
              <td>JHP1315A</td>
              <td>13</td>
              <td>15</td>
              <td>3.4</td>
              <td>4.0</td>
              <td>150</td>
              <td>2200</td>
              <td></td>
              <td></td>
              <td>5.0</td>
              <td>5.8</td>
              <td>3.7</td>
              <td>4.3</td>
            </tr>
            <tr>
              <td>JHP1515A</td>
              <td>15</td>
              <td>18</td>
              <td>4</td>
              <td>4.7</td>
              <td>150</td>
              <td>2200</td>
              <td></td>
              <td></td>
              <td>5.8</td>
              <td>7.0</td>
              <td>4.3</td>
              <td>5.2</td>
            </tr>
            <tr>
              <td>JHP2115A</td>
              <td>21</td>
              <td>25</td>
              <td>5.6</td>
              <td>6.6</td>
              <td>150</td>
              <td>2200</td>
              <td></td>
              <td></td>
              <td>7.7</td>
              <td>9.2</td>
              <td>5.7</td>
              <td>6.8</td>
            </tr>
            <tr>
              <td>JHP4215A</td>
              <td>42</td>
              <td>48</td>
              <td>11.1</td>
              <td>12.7</td>
              <td>150</td>
              <td>2200</td>
              <td></td>
              <td></td>
              <td>15.2</td>
              <td>18.2</td>
              <td>11.2</td>
              <td>13.4</td>
            </tr>
            <tr>
              <td>JHP5415A</td>
              <td>54</td>
              <td>65</td>
              <td>14.3</td>
              <td>17.2</td>
              <td>150</td>
              <td>2200</td>
              <td></td>
              <td></td>
              <td>21.2</td>
              <td>25.4</td>
              <td>15.6</td>
              <td>18.7</td>
            </tr>
            <tr>
              <td>JHP1120A</td>
              <td>11</td>
              <td>13</td>
              <td>2.9</td>
              <td>3.5</td>
              <td>200</td>
              <td>3000</td>
              <td></td>
              <td></td>
              <td>5.0</td>
              <td>5.8</td>
              <td>3.7</td>
              <td>4.3</td>
            </tr>
            <tr>
              <td>JHP1520A</td>
              <td>15</td>
              <td>18</td>
              <td>4</td>
              <td>4.7</td>
              <td>200</td>
              <td>3000</td>
              <td></td>
              <td></td>
              <td>7.7</td>
              <td>9.2</td>
              <td>5.7</td>
              <td>6.8</td>
            </tr>
            <tr>
              <td>JHP2120A</td>
              <td>21</td>
              <td>25</td>
              <td>5.5</td>
              <td>6.6</td>
              <td>200</td>
              <td>3000</td>
              <td>1450</td>
              <td>1750</td>
              <td>10.7</td>
              <td>12.8</td>
              <td>7.9</td>
              <td>9.4</td>
            </tr>
            <tr>
              <td>JHP4220A</td>
              <td>42</td>
              <td>48</td>
              <td>11.1</td>
              <td>12.7</td>
              <td>200</td>
              <td>3000</td>
              <td></td>
              <td></td>
              <td>20.5</td>
              <td>24.6</td>
              <td>15.1</td>
              <td>18.1</td>
            </tr>
            <tr>
              <td>JHP1525A</td>
              <td>15</td>
              <td>18</td>
              <td>4</td>
              <td>4.7</td>
              <td>250</td>
              <td>3650</td>
              <td></td>
              <td></td>
              <td>10.7</td>
              <td>12.8</td>
              <td>7.9</td>
              <td>9.4</td>
            </tr>
            <tr>
              <td>JHP1825A</td>
              <td>18</td>
              <td>21.5</td>
              <td>4.7</td>
              <td>5.6</td>
              <td>250</td>
              <td>3650</td>
              <td></td>
              <td></td>
              <td>10.7</td>
              <td>12.8</td>
              <td>7.9</td>
              <td>9.4</td>
            </tr>
            <tr>
              <td>JHP2125A</td>
              <td>21</td>
              <td>25</td>
              <td>5.5</td>
              <td>6.6</td>
              <td>250</td>
              <td>3650</td>
              <td></td>
              <td></td>
              <td>12.5</td>
              <td>14.4</td>
              <td>9.3</td>
              <td>10.5</td>
            </tr>
            <tr>
              <td>JHP1530A</td>
              <td>15</td>
              <td>18</td>
              <td>4</td>
              <td>4.7</td>
              <td>300</td>
              <td>4350</td>
              <td></td>
              <td></td>
              <td>12.5</td>
              <td>14.4</td>
              <td>9.3</td>
              <td>10.5</td>
            </tr>
            <tr>
              <td>JHP1830A</td>
              <td>18</td>
              <td>21.5</td>
              <td>4.7</td>
              <td>5.6</td>
              <td>300</td>
              <td>4350</td>
              <td></td>
              <td></td>
              <td>12.5</td>
              <td>14.4</td>
              <td>9.3</td>
              <td>10.5</td>
            </tr>
            <tr>
              <td>JHP2130A</td>
              <td>21</td>
              <td>25</td>
              <td>5.5</td>
              <td>6.6</td>
              <td>300</td>
              <td>4350</td>
              <td></td>
              <td></td>
              <td>15.2</td>
              <td>18.2</td>
              <td>11.2</td>
              <td>13.4</td>
            </tr>
            <tr>
              <td>JHP1135A</td>
              <td>11</td>
              <td>13</td>
              <td>3</td>
              <td>3.6</td>
              <td>350</td>
              <td>5000</td>
              <td></td>
              <td></td>
              <td>10.1</td>
              <td>12.1</td>
              <td>7.4</td>
              <td>8.9</td>
            </tr>
            <tr>
              <td>JHP1735A</td>
              <td>17</td>
              <td>20</td>
              <td>4.5</td>
              <td>5.4</td>
              <td>350</td>
              <td>5000</td>
              <td></td>
              <td></td>
              <td>15.2</td>
              <td>18.2</td>
              <td>11.2</td>
              <td>13.4</td>
            </tr>
            <tr>
              <td>JHP2135A</td>
              <td>21</td>
              <td>26</td>
              <td>5.7</td>
              <td>6.8</td>
              <td>350</td>
              <td>5000</td>
              <td></td>
              <td></td>
              <td>19.5</td>
              <td>23.4</td>
              <td>14.4</td>
              <td>17.3</td>
            </tr>
            <tr>
              <td>JHP1150A</td>
              <td>11</td>
              <td>13</td>
              <td>2.9</td>
              <td>3.5</td>
              <td>500</td>
              <td>7250</td>
              <td></td>
              <td></td>
              <td>14.3</td>
              <td>17.2</td>
              <td>10.5</td>
              <td>12.6</td>
            </tr>
            <tr>
              <td>JHP1750A</td>
              <td>17</td>
              <td>20</td>
              <td>4.4</td>
              <td>5.3</td>
              <td>500</td>
              <td>7250</td>
              <td></td>
              <td></td>
              <td>21.4</td>
              <td>25.7</td>
              <td>15.8</td>
              <td>19.0</td>
            </tr>
            <tr>
              <td>JHP2150A</td>
              <td>21</td>
              <td>26</td>
              <td>5.7</td>
              <td>6.8</td>
              <td>500</td>
              <td>7250</td>
              <td></td>
              <td></td>
              <td>27.6</td>
              <td>33.1</td>
              <td>20.3</td>
              <td>24.4</td>
            </tr>
          </table>
        </div>
      </div>
    </main>
  );
}

export default TriplexPlungerPumpJHPPage;
