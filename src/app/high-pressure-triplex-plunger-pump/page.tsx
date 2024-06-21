"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

function HighTriplexPlungerPumpPage() {
  return (
    <div className="max-w-screen overflow-hidden">
      {/* hero section  */}
      <div className="hero-section home-hero-bg p-5 lg:p-24">
        <div className="flex flex-row text-white justify-center items-center gap-y-8 pt-8">
          <div className="left">
            {/* for larger screens  */}
            <h1 className="text-5xl text-center hidden uppercase font-bold w-[80%] mx-auto lg:block leading-[4rem]">
              series amtlp - HIGH PRESSURE TRIPLEX PLUNGER PUMP
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
            AMTLP SERIES PRODUCT RANGE FOR
            <span className="text-themeCarrot ">
              &nbsp; HYDRO TEST APPLICATION
            </span>
          </h2>
          <table className="border border-gray-500 w-full mt-8">
            <thead>
              <tr className="capitalize">
                <th className="border-r border-gray-500">model no.</th>
                <th className="border-r border-gray-500">
                  plunger <br /> diameter(MM)
                </th>
                <th className="border-r border-gray-500">
                  flow <br /> (LPM)
                </th>
                <th className="border-r border-gray-500">
                  Max. related <br /> pressure (KG/CM<sup>2</sup>)
                </th>
                <th className="border-r border-gray-500">
                  strokes oer <br /> minute
                </th>
                <th className="border-r border-gray-500">
                  motor <br /> (HP)
                </th>
                <th className="border-r border-gray-500">inlet</th>
                <th className="border-r border-gray-500">outlet</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-gray-500 text-center py-1">
                <td className="border-r border-gray-500">AMTLP - 130/10</td>
                <td className="border-r border-gray-500">12</td>
                <td className="border-r border-gray-500">10</td>
                <td className="border-r border-gray-500">1300</td>
                <td className="border-r border-gray-500">750</td>
                <td className="border-r border-gray-500">40</td>
                <td className="border-r border-gray-500">3/4&quot;</td>
                <td className="border-r border-gray-500">1/2&quot;</td>
              </tr>

              <tr className="border-t border-gray-500 text-center py-1">
                <td className="border-r border-gray-500">AMTLP - 130/08</td>
                <td className="border-r border-gray-500">12</td>
                <td className="border-r border-gray-500">8</td>
                <td className="border-r border-gray-500">1300</td>
                <td className="border-r border-gray-500">620</td>
                <td className="border-r border-gray-500">30</td>
                <td className="border-r border-gray-500">3/4&quot;</td>
                <td className="border-r border-gray-500">1/2&quot;</td>
              </tr>

              <tr className="border-t border-gray-500 text-center py-1">
                <td className="border-r border-gray-500">AMTLP - 130/07</td>
                <td className="border-r border-gray-500">12</td>
                <td className="border-r border-gray-500">7</td>
                <td className="border-r border-gray-500">1300</td>
                <td className="border-r border-gray-500">550</td>
                <td className="border-r border-gray-500">25</td>
                <td className="border-r border-gray-500">3/4&quot;</td>
                <td className="border-r border-gray-500">1/2&quot;</td>
              </tr>

              <tr className="border-t border-gray-500 text-center py-1">
                <td className="border-r border-gray-500">AMTLP - 130/05</td>
                <td className="border-r border-gray-500">12</td>
                <td className="border-r border-gray-500">5</td>
                <td className="border-r border-gray-500">1300</td>
                <td className="border-r border-gray-500">415</td>
                <td className="border-r border-gray-500">20</td>
                <td className="border-r border-gray-500">3/4&quot;</td>
                <td className="border-r border-gray-500">1/2&quot;</td>
              </tr>

              <tr className="border-t border-gray-500 text-center py-1">
                <td className="border-r border-gray-500">AMTLP - 100/14</td>
                <td className="border-r border-gray-500">14</td>
                <td className="border-r border-gray-500">14</td>
                <td className="border-r border-gray-500">1000</td>
                <td className="border-r border-gray-500">750</td>
                <td className="border-r border-gray-500">40</td>
                <td className="border-r border-gray-500">3/4&quot;</td>
                <td className="border-r border-gray-500">1/2&quot;</td>
              </tr>

              <tr className="border-t border-gray-500 text-center py-1">
                <td className="border-r border-gray-500">AMTLP - 100/10</td>
                <td className="border-r border-gray-500">14</td>
                <td className="border-r border-gray-500">10</td>
                <td className="border-r border-gray-500">1000</td>
                <td className="border-r border-gray-500">550</td>
                <td className="border-r border-gray-500">30</td>
                <td className="border-r border-gray-500">3/4&quot;</td>
                <td className="border-r border-gray-500">1/2&quot;</td>
              </tr>

              <tr className="border-t border-gray-500 text-center py-1">
                <td className="border-r border-gray-500">AMTLP - 100/08</td>
                <td className="border-r border-gray-500">14</td>
                <td className="border-r border-gray-500">8</td>
                <td className="border-r border-gray-500">1000</td>
                <td className="border-r border-gray-500">450</td>
                <td className="border-r border-gray-500">25</td>
                <td className="border-r border-gray-500">3/4&quot;</td>
                <td className="border-r border-gray-500">1/2&quot;</td>
              </tr>

              <tr className="border-t border-gray-500 text-center py-1">
                <td className="border-r border-gray-500">AMTLP - 100/07</td>
                <td className="border-r border-gray-500">14</td>
                <td className="border-r border-gray-500">7</td>
                <td className="border-r border-gray-500">1000</td>
                <td className="border-r border-gray-500">350</td>
                <td className="border-r border-gray-500">20</td>
                <td className="border-r border-gray-500">3/4&quot;</td>
                <td className="border-r border-gray-500">1/2&quot;</td>
              </tr>

              <tr className="border-t border-gray-500 text-center py-1">
                <td className="border-r border-gray-500">AMTLP - 75/18</td>
                <td className="border-r border-gray-500">16</td>
                <td className="border-r border-gray-500">18</td>
                <td className="border-r border-gray-500">750</td>
                <td className="border-r border-gray-500">750</td>
                <td className="border-r border-gray-500">40</td>
                <td className="border-r border-gray-500">3/4&quot;</td>
                <td className="border-r border-gray-500">1/2&quot;</td>
              </tr>

              <tr className="border-t border-gray-500 text-center py-1">
                <td className="border-r border-gray-500">AMTLP - 75/13</td>
                <td className="border-r border-gray-500">16</td>
                <td className="border-r border-gray-500">13</td>
                <td className="border-r border-gray-500">750</td>
                <td className="border-r border-gray-500">550</td>
                <td className="border-r border-gray-500">30</td>
                <td className="border-r border-gray-500">3/4&quot;</td>
                <td className="border-r border-gray-500">1/2&quot;</td>
              </tr>

              <tr className="border-t border-gray-500 text-center py-1">
                <td className="border-r border-gray-500">AMTLP - 75/10</td>
                <td className="border-r border-gray-500">16</td>
                <td className="border-r border-gray-500">10</td>
                <td className="border-r border-gray-500">750</td>
                <td className="border-r border-gray-500">450</td>
                <td className="border-r border-gray-500">25</td>
                <td className="border-r border-gray-500">3/4&quot;</td>
                <td className="border-r border-gray-500">1/2&quot;</td>
              </tr>

              <tr className="border-t border-gray-500 text-center py-1">
                <td className="border-r border-gray-500">AMTLP - 75/08</td>
                <td className="border-r border-gray-500">16</td>
                <td className="border-r border-gray-500">8</td>
                <td className="border-r border-gray-500">750</td>
                <td className="border-r border-gray-500">350</td>
                <td className="border-r border-gray-500">20</td>
                <td className="border-r border-gray-500">3/4&quot;</td>
                <td className="border-r border-gray-500">1/2&quot;</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="table-2 pt-10">
          <h2 className="mt-10 text-3xl font-bold text-center">
            AMTLP SERIES PRODUCT RANGE FOR
            <span className="text-themeCarrot ">
              &nbsp; HYDROBLASTING & HYDROTEST
            </span>
          </h2>
          <table className="border border-gray-500 w-full mt-8">
            <thead>
              <tr className="capitalize">
                <th className="border-r border-gray-500">model no.</th>
                <th className="border-r border-gray-500">
                  plunger <br /> diameter(MM)
                </th>
                <th className="border-r border-gray-500">
                  flow <br /> (LPM)
                </th>
                <th className="border-r border-gray-500">
                  Max. related <br /> pressure (KG/CM<sup>2</sup>)
                </th>
                <th className="border-r border-gray-500">
                  strokes oer <br /> minute
                </th>
                <th className="border-r border-gray-500">
                  motor <br /> (HP)
                </th>
                <th className="border-r border-gray-500">inlet</th>
                <th className="border-r border-gray-500">outlet</th>
              </tr>
            </thead>

            <tbody>
              <tr className="text-center border-t border-gray-500">
                <td className="border-r border-gray-500">AMTLP - 50/30</td>
                <td className="border-r border-gray-500">18</td>
                <td className="border-r border-gray-500">30</td>
                <td className="border-r border-gray-500">500</td>
                <td className="border-r border-gray-500">1000</td>
                <td className="border-r border-gray-500">40</td>
                <td className="border-r border-gray-500">1&quot;</td>
                <td className="border-r border-gray-500">3/4&quot;</td>
              </tr>

              <tr className="text-center border-t border-gray-500">
                <td className="border-r border-gray-500">AMTLP - 48/29</td>
                <td className="border-r border-gray-500">18</td>
                <td className="border-r border-gray-500">29</td>
                <td className="border-r border-gray-500">480</td>
                <td className="border-r border-gray-500">970</td>
                <td className="border-r border-gray-500">40</td>
                <td className="border-r border-gray-500">1&quot;</td>
                <td className="border-r border-gray-500">3/4&quot;</td>
              </tr>

              <tr className="text-center border-t border-gray-500">
                <td className="border-r border-gray-500">AMTLP - 48/21</td>
                <td className="border-r border-gray-500">18</td>
                <td className="border-r border-gray-500">21</td>
                <td className="border-r border-gray-500">480</td>
                <td className="border-r border-gray-500">710</td>
                <td className="border-r border-gray-500">30</td>
                <td className="border-r border-gray-500">1&quot;</td>
                <td className="border-r border-gray-500">3/4&quot;</td>
              </tr>

              <tr className="text-center border-t border-gray-500">
                <td className="border-r border-gray-500">AMTLP - 47/18</td>
                <td className="border-r border-gray-500">18</td>
                <td className="border-r border-gray-500">18</td>
                <td className="border-r border-gray-500">470</td>
                <td className="border-r border-gray-500">615</td>
                <td className="border-r border-gray-500">25</td>
                <td className="border-r border-gray-500">1&quot;</td>
                <td className="border-r border-gray-500">3/4&quot;</td>
              </tr>

              <tr className="text-center border-t border-gray-500">
                <td className="border-r border-gray-500">AMTLP - 47/15</td>
                <td className="border-r border-gray-500">18</td>
                <td className="border-r border-gray-500">15</td>
                <td className="border-r border-gray-500">470</td>
                <td className="border-r border-gray-500">500</td>
                <td className="border-r border-gray-500">20</td>
                <td className="border-r border-gray-500">1&quot;</td>
                <td className="border-r border-gray-500">3/4&quot;</td>
              </tr>

              <tr className="text-center border-t border-gray-500">
                <td className="border-r border-gray-500">AMTLP - 40/37</td>
                <td className="border-r border-gray-500">20</td>
                <td className="border-r border-gray-500">37</td>
                <td className="border-r border-gray-500">400</td>
                <td className="border-r border-gray-500">1000</td>
                <td className="border-r border-gray-500">40</td>
                <td className="border-r border-gray-500">1&quot;</td>
                <td className="border-r border-gray-500">3/4&quot;</td>
              </tr>

              <tr className="text-center border-t border-gray-500">
                <td className="border-r border-gray-500">AMTLP - 38/36</td>
                <td className="border-r border-gray-500">20</td>
                <td className="border-r border-gray-500">36</td>
                <td className="border-r border-gray-500">380</td>
                <td className="border-r border-gray-500">970</td>
                <td className="border-r border-gray-500">40</td>
                <td className="border-r border-gray-500">1&quot;</td>
                <td className="border-r border-gray-500">3/4&quot;</td>
              </tr>

              <tr className="text-center border-t border-gray-500">
                <td className="border-r border-gray-500">AMTLP - 39/26</td>
                <td className="border-r border-gray-500">20</td>
                <td className="border-r border-gray-500">26</td>
                <td className="border-r border-gray-500">390</td>
                <td className="border-r border-gray-500">710</td>
                <td className="border-r border-gray-500">30</td>
                <td className="border-r border-gray-500">1&quot;</td>
                <td className="border-r border-gray-500">3/4&quot;</td>
              </tr>

              <tr className="text-center border-t border-gray-500">
                <td className="border-r border-gray-500">AMTLP - 38/23</td>
                <td className="border-r border-gray-500">20</td>
                <td className="border-r border-gray-500">23</td>
                <td className="border-r border-gray-500">380</td>
                <td className="border-r border-gray-500">615</td>
                <td className="border-r border-gray-500">20</td>
                <td className="border-r border-gray-500">1&quot;</td>
                <td className="border-r border-gray-500">3/4&quot;</td>
              </tr>

              <tr className="text-center border-t border-gray-500">
                <td className="border-r border-gray-500">AMTLP - 38/19</td>
                <td className="border-r border-gray-500">20</td>
                <td className="border-r border-gray-500">19</td>
                <td className="border-r border-gray-500">380</td>
                <td className="border-r border-gray-500">500</td>
                <td className="border-r border-gray-500">20</td>
                <td className="border-r border-gray-500">1&quot;</td>
                <td className="border-r border-gray-500">3/4&quot;</td>
              </tr>

              <tr className="text-center border-t border-gray-500">
                <td className="border-r border-gray-500">AMTLP - 32/45</td>
                <td className="border-r border-gray-500">22</td>
                <td className="border-r border-gray-500">45</td>
                <td className="border-r border-gray-500">320</td>
                <td className="border-r border-gray-500">1000</td>
                <td className="border-r border-gray-500">40</td>
                <td className="border-r border-gray-500">1&quot;</td>
                <td className="border-r border-gray-500">3/4&quot;</td>
              </tr>

              <tr className="text-center border-t border-gray-500">
                <td className="border-r border-gray-500">AMTLP - 32/44</td>
                <td className="border-r border-gray-500">22</td>
                <td className="border-r border-gray-500">44</td>
                <td className="border-r border-gray-500">320</td>
                <td className="border-r border-gray-500">970</td>
                <td className="border-r border-gray-500">40</td>
                <td className="border-r border-gray-500">1&quot;</td>
                <td className="border-r border-gray-500">3/4&quot;</td>
              </tr>

              <tr className="text-center border-t border-gray-500">
                <td className="border-r border-gray-500">AMTLP - 32/32</td>
                <td className="border-r border-gray-500">22</td>
                <td className="border-r border-gray-500">44</td>
                <td className="border-r border-gray-500">320</td>
                <td className="border-r border-gray-500">710</td>
                <td className="border-r border-gray-500">30</td>
                <td className="border-r border-gray-500">1&quot;</td>
                <td className="border-r border-gray-500">3/4&quot;</td>
              </tr>

              <tr className="text-center border-t border-gray-500">
                <td className="border-r border-gray-500">AMTLP - 31/28</td>
                <td className="border-r border-gray-500">22</td>
                <td className="border-r border-gray-500">28</td>
                <td className="border-r border-gray-500">310</td>
                <td className="border-r border-gray-500">615</td>
                <td className="border-r border-gray-500">25</td>
                <td className="border-r border-gray-500">1&quot;</td>
                <td className="border-r border-gray-500">3/4&quot;</td>
              </tr>

              <tr className="text-center border-t border-gray-500">
                <td className="border-r border-gray-500">AMTLP - 31/23</td>
                <td className="border-r border-gray-500">22</td>
                <td className="border-r border-gray-500">23</td>
                <td className="border-r border-gray-500">310</td>
                <td className="border-r border-gray-500">500</td>
                <td className="border-r border-gray-500">20</td>
                <td className="border-r border-gray-500">1&quot;</td>
                <td className="border-r border-gray-500">3/4&quot;</td>
              </tr>

              <tr className="text-center border-t border-gray-500">
                <td className="border-r border-gray-500">AMTLP - 25/59</td>
                <td className="border-r border-gray-500">25</td>
                <td className="border-r border-gray-500">59</td>
                <td className="border-r border-gray-500">250</td>
                <td className="border-r border-gray-500">1000</td>
                <td className="border-r border-gray-500">40</td>
                <td className="border-r border-gray-500">1&quot;</td>
                <td className="border-r border-gray-500">3/4&quot;</td>
              </tr>

              <tr className="text-center border-t border-gray-500">
                <td className="border-r border-gray-500">AMTLP - 24/57</td>
                <td className="border-r border-gray-500">25</td>
                <td className="border-r border-gray-500">57</td>
                <td className="border-r border-gray-500">240</td>
                <td className="border-r border-gray-500">970</td>
                <td className="border-r border-gray-500">40</td>
                <td className="border-r border-gray-500">1&quot;</td>
                <td className="border-r border-gray-500">3/4&quot;</td>
              </tr>

              <tr className="text-center border-t border-gray-500">
                <td className="border-r border-gray-500">AMTLP - 25/42</td>
                <td className="border-r border-gray-500">25</td>
                <td className="border-r border-gray-500">42</td>
                <td className="border-r border-gray-500">250</td>
                <td className="border-r border-gray-500">710</td>
                <td className="border-r border-gray-500">30</td>
                <td className="border-r border-gray-500">1&quot;</td>
                <td className="border-r border-gray-500">3/4&quot;</td>
              </tr>

              <tr className="text-center border-t border-gray-500">
                <td className="border-r border-gray-500">AMTLP - 24/36</td>
                <td className="border-r border-gray-500">25</td>
                <td className="border-r border-gray-500">36</td>
                <td className="border-r border-gray-500">240</td>
                <td className="border-r border-gray-500">615</td>
                <td className="border-r border-gray-500">25</td>
                <td className="border-r border-gray-500">1&quot;</td>
                <td className="border-r border-gray-500">3/4&quot;</td>
              </tr>

              <tr className="text-center border-t border-gray-500">
                <td className="border-r border-gray-500">AMTLP - 24/30</td>
                <td className="border-r border-gray-500">25</td>
                <td className="border-r border-gray-500">30</td>
                <td className="border-r border-gray-500">240</td>
                <td className="border-r border-gray-500">500</td>
                <td className="border-r border-gray-500">20</td>
                <td className="border-r border-gray-500">1&quot;</td>
                <td className="border-r border-gray-500">3/4&quot;</td>
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
                    <span>SPHEROIDAL GRAPHITE IRON</span>
                  </div>
                  <div className="">
                    Spheroidal Graphite Iron: Cranksha is made of nitrated,
                    hardened and tempered Spheroidal Graphite Iron casng
                  </div>
                </li>

                <li>
                  <div className="">
                    <span className="font-bold">MAIN BODY (CRANK CASE) :</span>
                    <span>GREY CAST IRON</span>
                  </div>
                  <div className="">
                    Main body in grey iron casng FG-260. With Honned surface
                    finish bore.
                  </div>
                </li>

                <li>
                  <div className="">
                    <span className="font-bold"> PISTON (CROSS HEAD) :</span>
                    <span> ALLOY STEEL</span>
                  </div>
                  <div className="">
                    Alloy steel construcon for hard surface coang and super
                    finish.
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
                    &quot;V&quot; Style strong and ghtens under load or aramide
                    fiber yarn packing for high compressive & tensile strength
                    ensure effecve sealing.
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
                  <li>Plunger Stroke : 40 mm</li>
                  <li>Plunger Force : 12.5 KN</li>
                  <li>Max. Plunger Speed : 1.26 m/sec @ 950 spm</li>
                  <li>Inlet Pressure Min. / max : 2 to 3 bar</li>
                  <li>Oil Type : 15 W 40</li>
                  <li>Oil Capacity : 4.5 Ltr</li>
                  <li>Max. Liquid Temp. : 70 DEG. C ( 160 DEG. F)</li>
                  <li>Suction Connection : 3/4&quot; BSPF</li>
                  <li>Discharge Connection : 1/2&quot; BSPF</li>
                  <li>Medium : Clean Water</li>
                  <li>
                    Available Direct Couple 1000 RPM for 50 Hz (Not 60 Hz) or
                    1450 RPM For Pulley - belts drives or Gear Box
                  </li>
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

export default HighTriplexPlungerPumpPage;
