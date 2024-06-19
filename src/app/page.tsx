"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import products from "@/data/products_data.json";
import { FaLongArrowAltRight } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const settingProducts = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <main className="">
      {/* hero section  */}
      <Slider {...settings} className="max-w-screen overflow-hidden">
        {/* slide-1  */}
        <div className="hero-section min-h-screen home-hero-bg p-5 lg:p-24">
          <div className="flex flex-row text-white justify-center items-center gap-y-8 pt-8">
            <div className="left w-1/2">
              {/* for larger screens  */}
              <h1 className="text-5xl hidden uppercase font-bold w-[70%] lg:block leading-[4rem]">
                triplex plunger for high flow
              </h1>

              {/* for small screens 
              <h1 className="text-4xl mt-20 lg:hidden block text-center leading-[2.8rem] w-full text-white">
                Elevate your driving experience &nbsp;
                <b>with durable and high performance Elito Batteries</b>
              </h1> */}

              <div className="w-full flex justify-center lg:justify-start mt-8">
                <Link href={"/about-us"} className="">
                  <button className="uppercase bg-themeCarrot p-4 font-semibold">
                    Read More
                  </button>
                </Link>
              </div>
            </div>

            <div className="right min-h-full w-1/2">
              <Image
                src={
                  "https://res.cloudinary.com/dhv2udxw2/image/upload/v1718769447/ambica-machine-tools/o08rks4cjdur7dsv6x41.png"
                }
                alt="tester"
                height={550}
                width={550}
                className="mx-auto"
              />
            </div>
          </div>
        </div>

        {/* slide-2  */}
        <div className="hero-section min-h-screen home-hero-bg p-5 lg:p-24">
          <div className="flex flex-row text-white justify-center items-center gap-y-8 pt-8">
            <div className="left w-1/2">
              {/* for larger screens  */}
              <h1 className="text-5xl hidden uppercase font-bold w-[70%] lg:block leading-[4rem]">
                hydro test - jet pump engine driven unit
              </h1>

              {/* for small screens 
              <h1 className="text-4xl mt-20 lg:hidden block text-center leading-[2.8rem] w-full text-white">
                Elevate your driving experience &nbsp;
                <b>with durable and high performance Elito Batteries</b>
              </h1> */}

              <div className="w-full flex justify-center lg:justify-start mt-8">
                <Link href={"/about-us"} className="">
                  <button className="uppercase bg-themeCarrot p-4 font-semibold">
                    Read More
                  </button>
                </Link>
              </div>
            </div>

            <div className="right min-h-full w-1/2">
              <Image
                src={
                  "https://res.cloudinary.com/dhv2udxw2/image/upload/v1718769388/ambica-machine-tools/g0mlvdqvkeoxdezjuvql.svg"
                }
                alt="tester"
                height={550}
                width={550}
                className="mx-auto"
              />
            </div>
          </div>
        </div>

        {/* slide-3  */}
        <div className="hero-section min-h-screen home-hero-bg p-5 lg:p-24">
          <div className="flex flex-row text-white justify-center items-center gap-y-8 pt-8">
            <div className="left w-1/2">
              {/* for larger screens  */}
              <h1 className="text-5xl hidden uppercase font-bold w-[70%] lg:block leading-[4rem]">
                TRIPLEX PLUNGER PUMP WITH FLP - MOTOR & STARTER
              </h1>

              {/* for small screens 
              <h1 className="text-4xl mt-20 lg:hidden block text-center leading-[2.8rem] w-full text-white">
                Elevate your driving experience &nbsp;
                <b>with durable and high performance Elito Batteries</b>
              </h1> */}

              <div className="w-full flex justify-center lg:justify-start mt-8">
                <Link href={"/about-us"} className="">
                  <button className="uppercase bg-themeCarrot p-4 font-semibold">
                    Read More
                  </button>
                </Link>
              </div>
            </div>

            <div className="right min-h-full w-1/2">
              <Image
                src={
                  "https://res.cloudinary.com/dhv2udxw2/image/upload/v1718769388/ambica-machine-tools/frkonycjuq1wz1r6ljzc.svg"
                }
                alt="tester"
                height={550}
                width={550}
                className="mx-auto"
              />
            </div>
          </div>
        </div>
      </Slider>

      {/* welcome section  */}
      <div className="welcome min-h-screen p-24" id="welcome">
        <div className="">
          <h1 className="uppercase text-5xl font-bold">
            welcome to <span className="text-themeCarrot">ambica machines</span>
          </h1>
          <div className="h-1 w-[24%] bg-black mt-4"></div>
        </div>

        <div className="flex mt-14">
          <div className="left w-1/2 flex flex-col justify-between gap-y-6">
            <p>
              Ambica Machine Tools was established in 2006 with an aim to
              provide impeccable engineering and pumping solutions.Mainly, the
              company deals in manufacturing Industrial Pumps, Valves and other
              Pumping Equipment that fitin your specific industrial
              requirements.
            </p>
            <p>
              With our exceptional range of industrial pumps, we have catered to
              the most complex and demanding industrial sectors. Our
              headquarters and the manufacturing unit are located in Ahmedabad,
              Gujarat, India.
            </p>
            <p>
              Ambica Machine Tools was established in 2006 with an aim to
              provide impeccable engineering and pumping solutions.Mainly, the
              company deals in manufacturing Industrial Pumps, Valves and other
              Pumping Equipment that fitin your specific industrial
              requirements.
            </p>

            <div className="">
              <Link href={"/about-us"} className="mt-0">
                <button className="uppercase text-white bg-themeCarrot p-4 font-semibold">
                  CONTACT NOW
                </button>
              </Link>
            </div>
          </div>
          <div className="right w-1/2">
            <Image
              src={
                "https://res.cloudinary.com/dhv2udxw2/image/upload/v1718771357/ambica-machine-tools/wfka5xuvcug7vudddoyp.png"
              }
              alt="welcome-image"
              height={400}
              width={600}
              className="ml-auto"
            />
          </div>
        </div>
      </div>

      {/* vision mission section  */}
      <div className="vis-miss bg-[#f4f4f4] p-24" id="vis-miss">
        <div className="top">
          <div className="flex mt-10">
            <div className="left w-1/2 pl-20 justify-center flex flex-col gap-y-6">
              <div className="">
                <h1 className="uppercase text-5xl font-bold">
                  our
                  <span className="text-themeCarrot"> vision</span>
                </h1>
                <div className="h-1 w-[16%] bg-black mt-4"></div>
              </div>
              <p>
                Our headquarters and the manufacturing unit are located in
                Ahmedabad, Gujarat, India.Since our establishment, we believed
                in challenging ourselves to extend our reach to the
                international market. We have always set higher goals for
                ourselves and made enduring efforts to deliver the best.
              </p>
            </div>
            <div className="right pr-20 w-1/2">
              <Image
                src={
                  "https://res.cloudinary.com/dhv2udxw2/image/upload/v1718771357/ambica-machine-tools/wfka5xuvcug7vudddoyp.png"
                }
                alt="welcome-image"
                height={400}
                width={400}
                className="ml-auto"
              />
            </div>
          </div>
        </div>

        <div className="bottom mt-4">
          <div className="flex flex-row-reverse mt-10">
            <div className="left justify-center w-1/2 pr-20 flex flex-col gap-y-6">
              <div className="">
                <h1 className="uppercase text-5xl font-bold">
                  our
                  <span className="text-themeCarrot"> mission</span>
                </h1>
                <div className="h-1 w-[16%] bg-black mt-4"></div>
              </div>
              <p className="">
                Our headquarters and the manufacturing unit are located in
                Ahmedabad, Gujarat, India.Since our establishment, we believed
                in challenging ourselves to extend our reach to the
                international market. We have always set higher goals for
                ourselves and made enduring efforts to deliver the best.
              </p>
            </div>
            <div className="right pr-20 w-1/2">
              <Image
                src={
                  "https://res.cloudinary.com/dhv2udxw2/image/upload/v1718771357/ambica-machine-tools/wfka5xuvcug7vudddoyp.png"
                }
                alt="welcome-image"
                height={400}
                width={400}
                className="ml-20"
              />
            </div>
          </div>
        </div>
      </div>

      {/* offer section  */}
      <div className="welcome min-h-screen p-24" id="welcome">
        <div className="">
          <h1 className="uppercase text-5xl font-bold">
            what we <span className="text-themeCarrot">offer</span>
          </h1>
          <div className="h-1 w-[18%] bg-black mt-4"></div>
        </div>

        <div className="flex mt-14">
          <div className="left w-1/2 flex flex-col justify-between gap-y-6">
            <p>
              Ambica Machine Tools was established in 2006 with an aim to
              provide impeccable engineering and pumping solutions.Mainly, the
              company deals in manufacturing Industrial Pumps, Valves and other
              Pumping Equipment that fitin your specific industrial
              requirements.
            </p>
            <p>
              With our exceptional range of industrial pumps, we have catered to
              the most complex and demanding industrial sectors. Our
              headquarters and the manufacturing unit are located in Ahmedabad,
              Gujarat, India.
            </p>
            <p>
              Our partners & suppliers provide us with best pumps and engine’s
              spare parts & materials. Own engineering staff to quickly and
              accurately design the solutions
            </p>
            <p>
              Our partners & suppliers provide us with best pumps and engine’s
              spare parts & materials. Own engineering staff to quickly and
              accurately design the solutions
            </p>

            <div className="">
              <Link href={"/about-us"} className="mt-0">
                <button className="uppercase text-white bg-themeCarrot p-4 font-semibold">
                  CONTACT NOW
                </button>
              </Link>
            </div>
          </div>
          <div className="right w-1/2">
            <Image
              src={
                "https://res.cloudinary.com/dhv2udxw2/image/upload/v1718771357/ambica-machine-tools/wfka5xuvcug7vudddoyp.png"
              }
              alt="welcome-image"
              height={400}
              width={600}
              className="ml-auto"
            />
          </div>
        </div>
      </div>

      {/* products section  */}
      <div className="products bg-[#f4f4f4] p-24" id="products">
        <div className="">
          <div className="font-semibold text-[#4a4b54] uppercase tracking-wide mb-3">
            display showcase
          </div>
          <h1 className="uppercase text-5xl font-bold">
            our <span className="text-themeCarrot">products</span>
          </h1>
          <div className="h-1 w-[8%] bg-black mt-4"></div>
        </div>

        <div className="mt-16">
          <Slider {...settingProducts}>
            {products.products.map((item, index) => (
              <div className="border-8 border-[#f4f4f4]">
                <div
                  className="card w-full shadow-md bg-themeCarrot"
                  key={index}
                >
                  <Image
                    src={item.imgUrl}
                    alt="machine-image"
                    height={350}
                    width={350}
                    className="mx-auto"
                  />
                  <div className="bg-white capitalize font-semibold">
                    <Link
                      href={item.slug}
                      className="flex items-center gap-x-4 px-4 py-4"
                    >
                      {item.name} <FaLongArrowAltRight />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
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
              <div className=" text-[#4a4b54]">raijay2003@gmail.com</div>
            </div>

            <div className="flex gap-x-4">
              <div className="text-2xl">
                <IoCall />
              </div>
              <div className=" text-[#4a4b54]">+91 6351468706</div>
            </div>

            <div className="flex gap-x-4">
              <div className="text-2xl">
                <FaLocationDot />
              </div>
              <div className="mr-[220px] text-[#4a4b54]">
                Plot No.24/25-1, Zaveri Ind. Estate, Opp. Shubh Estate Gate,
                Kathwada – Singarva Road, Kathwada, Ahmedabad-382430. Gujarat -
                INDIA.
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
    </main>
  );
}
