"use client";

import Link from "next/link";
import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

function ContactUsPage() {
  return (
    <div>
      {/* hero section  */}
      <div className="hero-section min-h-[400px] home-hero-bg p-5 lg:p-24">
        <div className="flex text-white pt-8 justify-center h-[300px] items-center gap-y-8">
          <div className="left">
            {/* for larger screens  */}
            <h1 className="text-5xl text-center hidden uppercase font-bold w-full mx-auto lg:block leading-[4rem]">
              Contact us
            </h1>

            {/* for small screens 
              <h1 className="text-4xl mt-20 lg:hidden block text-center leading-[2.8rem] w-full text-white">
                Elevate your driving experience &nbsp;
                <b>with durable and high performance Elito Batteries</b>
              </h1> */}
          </div>
        </div>
      </div>

      {/* contact section   */}
      <div className="contact bg-white p-24" id="contact">
        <div className="">
          <div className="font-semibold text-[#4a4b54] uppercase tracking-wide mb-3">
            contact us
          </div>
          <h1 className="uppercase text-5xl font-bold">
            get in <span className="text-themeCarrot">touch</span>
          </h1>
          <div className="h-1 w-[12%] bg-black mt-4"></div>
        </div>

        <div className="flex mt-12">
          <div className="left w-1/2 flex flex-col gap-y-8">
            <div className="flex gap-x-4">
              <div className="text-2xl">
                <IoMdMail />
              </div>
              <div className=" text-[#4a4b54]">
                info@ambicamachinetools.com <br /> sales@ambicamachinetools.com{" "}
                <br />
                ambicamachinetools@yahoo.com
              </div>
            </div>

            <div className="flex gap-x-4">
              <div className="text-2xl">
                <IoCall />
              </div>
              <div className=" text-[#4a4b54]">
                +91 9328289287 <br /> +91 9601253837
              </div>
            </div>

            <div className="flex gap-x-4">
              <div className="text-2xl">
                <FaLocationDot />
              </div>
              <div className="mr-[220px] text-[#4a4b54]">
                Plot No.24/25-1, Zaveri Ind. Estate, Opp. Shubh Estate Gate,
                Kathwada - Singarva Road, Kathwada, Ahmedabad-382430.Gujarat -
                INDIA.
              </div>
            </div>

            <div className="flex gap-x-4 flex-col gap-y-4">
              <div className="text-2xl font-semibold capitalize">
                customer <span className="text-themeCarrot">Care</span>
                <div className="h-[2px] w-[17%] mt-1 bg-black"></div>
              </div>
              <div className="mr-[220px] text-[#4a4b54]">+91 8155089287</div>
            </div>

            <div className="flex gap-x-4 flex-col gap-y-4">
              <div className="text-2xl font-semibold capitalize">
                customer Care <span className="text-themeCarrot">Timing</span>
                <div className="h-[2px] w-[26%] mt-1 bg-black"></div>
              </div>
              <div className="mr-[220px] text-[#4a4b54]">
                <div className="">
                  <span className="capitalize font-bold">Monday &nbsp;</span>
                  <span>10:00 A.M - 06:00 P.M</span>
                </div>
                <div className="">
                  <span className="capitalize font-bold">tuesday &nbsp;</span>
                  <span className="capitalize">holiday</span>
                </div>
                <div className="">
                  <span className="capitalize font-bold">wednesday &nbsp;</span>
                  <span>10:00 A.M - 06:00 P.M</span>
                </div>
                <div className="">
                  <span className="capitalize font-bold">thursday &nbsp;</span>
                  <span>10:00 A.M - 06:00 P.M</span>
                </div>
                <div className="">
                  <span className="capitalize font-bold">friday &nbsp;</span>
                  <span>10:00 A.M - 06:00 P.M</span>
                </div>
                <div className="">
                  <span className="capitalize font-bold">saturday &nbsp;</span>
                  <span>10:00 A.M - 06:00 P.M</span>
                </div>
                <div className="">
                  <span className="capitalize font-bold">sunday &nbsp;</span>
                  <span>10:00 A.M - 06:00 P.M</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right w-1/2">
            <form
              action="#"
              method="post"
              className="text-[#4a4b54] flex flex-col gap-y-6"
            >
              <div className="flex flex-col">
                <label htmlFor="name" className="capitalize text-lg">
                  your name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="border-b-2 border-[#4a4b54] w-[80%] mt-2"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="capitalize text-lg">
                  your email
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  className="border-b-2 border-[#4a4b54] w-[80%] mt-2"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="message" className="capitalize text-lg">
                  message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={5}
                  className="border-b-2 border-[#4a4b54] w-[80%] mt-2"
                  cols={10}
                />
              </div>
              <Link href={"/about-us"} className="mt-0">
                <button className="uppercase text-white bg-themeCarrot px-6 font-semibold py-2">
                  submit
                </button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUsPage;
