"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowCircleRight } from "react-icons/fa";
import Heading from "@/components/Heading/Heading";
import data from "@/data/home_data.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosCall } from "react-icons/io";
import { IoMail } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { montserrat } from "./fonts";

export default function Home() {
  const { products, productsRange, certificates } = data;

  const settings = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const settingsProducts = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <main className="">
      {/* banner  */}
      <div
        className={`product-three-banner flex pt-28 pl-[15rem] flex-col h-[480px] bg-black text-white ${montserrat.className}`}
      >
        <div className=" w-[37%] flex flex-col gap-y-4">
          <h1 className="text-4xl font-bold text-center inline-flex">
            Manufacturer of <br /> Hydro Jetting Machine{" "}
          </h1>
          <p className="inline-flex">
            Diesel Engine Drive & Electric Motor Driven Hydro Jetting Pump,
            AMBICA MACHINE TOOLS is one of the prominent leading Manufacturer
            and Supplier of Water Jet Cleaner Pump More…..
          </p>

          <Link href={"/about-us"}>
            <button className="inline-flex px-4 py-2 bg-white text-black font-semibold rounded-md">Read More</button>
          </Link>
        </div>
      </div>

      {/* welcome section  */}
      <div className="welcome-section px-5 lg:px-16 py-6 lg:py-8 flex flex-col gap-y-10">
        {/* heading --  */}
        <Heading
          text1={"welcome to"}
          text2={"ambica machine tools"}
          width={"w-[40%] lg:w-[14%]"}
        />

        {/* content -- */}
        <div className="content flex flex-col lg:flex-row gap-x-4 gap-y-8">
          <div className="left lg:w-[40%]">
            <Image
              src={
                "https://res.cloudinary.com/dhv2udxw2/image/upload/v1720585321/ambica-machine-tools/home/xbbkkb6xigpll6gb00sl.svg"
              }
              alt="company-image"
              height={399}
              width={500}
            />
          </div>

          <div className="right lg:w-[60%] lg:text-lg flex flex-col gap-y-4 lg:gap-y-6 justify-center">
            <p>
              Ambica Machine Tools was established in 2006 with an aim to
              provide impeccable engineering and pumping solutions.Mainly, the
              company deals in manufacturing Industrial Pumps, Valves and other
              Pumping Equipment that fitin your specific industrial
              requirements. With our exceptional range of industrial pumps, we
              have catered to the most complex and demanding industrial sectors.
              Our headquarters and the manufacturing unit are located in
              Ahmedabad, Gujarat, India.
            </p>

            <p>
              Our headquarters and the manufacturing unit are located in
              Ahmedabad, Gujarat, India.Since our establishment, we believed in
              challenging ourselves to extend our reach to the international
              market. We have always set higher goals for ourselves and made
              enduring efforts to deliver the best.
            </p>

            <p>
              Quality has always been a buzzword in our company premises.
              Keeping professionalism as our hallmark, we direct our efforts to
              keep &apos;quality&apos; as our mainstay in all our endeavors.
            </p>
          </div>
        </div>

        {/* buttons --  */}
        <div className="buttons w-[100%] mx-auto lg:mx-0 lg:w-[60%] lg:ml-auto flex flex-col lg:flex-row gap-y-3 gap-x-6">
          <button>
            <Link
              href={"/about-us"}
              className="flex items-center gap-x-4 text-lg capitalize border-[3px] rounded-md px-4 py-2 border-themeCarrot text-themeCarrot font-semibold"
            >
              <span>read more</span>
              <span>
                <FaArrowCircleRight />
              </span>
            </Link>
          </button>

          <button>
            <Link
              href={"/"}
              className="flex items-center gap-x-4 text-lg capitalize border-[3px] rounded-md px-4 py-2 border-themeCarrot bg-themeCarrot text-white font-semibold"
            >
              <span>download catalouge</span>
              <span>
                <FaArrowCircleRight />
              </span>
            </Link>
          </button>
        </div>
      </div>

      {/* vision and mission  */}
      <div className="vision-and-mission px-5 lg:px-16 py-6 lg:py-8">
        {/* heading --  */}
        <Heading
          text1={"our"}
          text2={"vision & mission"}
          width={"w-[15%] lg:w-[4.5%]"}
        />

        {/* content  */}
        <div className="content flex flex-col gap-y-14 lg:flex-row justify-evenly pt-20 lg:pt-24">
          <div className="left p-6 border-[3px] border-themeCarrot rounded-lg lg:w-[40%] flex flex-col gap-y-4 relative">
            <h2 className="text-2xl uppercase font-bold">
              <span>our</span>
              <span className="text-themeCarrot"> mission</span>
            </h2>

            <p className="">
              Our headquarters and the manufacturing unit are located in
              Ahmedabad, Gujarat, India.Since our establishment, we believed in
              challenging ourselves to extend our reach to the international
              market. We have always set higher goals for ourselves and made
              enduring efforts to deliver the best.
            </p>

            <Image
              src={
                "https://res.cloudinary.com/dhv2udxw2/image/upload/v1720590961/ambica-machine-tools/home/bkautdha0bpqiod6v4vy.svg"
              }
              alt={"icon"}
              height={150}
              width={150}
              className="absolute -top-24 right-14 hidden lg:block"
            />

            <Image
              src={
                "https://res.cloudinary.com/dhv2udxw2/image/upload/v1720590961/ambica-machine-tools/home/bkautdha0bpqiod6v4vy.svg"
              }
              alt={"icon"}
              height={100}
              width={100}
              className="absolute -top-[3rem] right-8 lg:hidden block"
            />
          </div>

          <div className="right p-6 border-[3px] border-themeCarrot rounded-lg lg:w-[40%] flex flex-col gap-y-4 relative">
            <h2 className="text-2xl uppercase font-bold">
              <span>our</span>
              <span className="text-themeCarrot"> vision</span>
            </h2>

            <p className="lg:pr-10 ">
              Quality has always been a buzzword in our company premises.
              Keeping professionalism as our hallmark, we direct our efforts to
              keep &apos;quality&apos; as our mainstay in all our endeavors.
            </p>

            <Image
              src={
                "https://res.cloudinary.com/dhv2udxw2/image/upload/v1720590959/ambica-machine-tools/home/crsvbkf5lhiwbxar1lcl.svg"
              }
              alt={"icon"}
              height={150}
              width={150}
              className="absolute -top-24 right-14 hidden lg:block"
            />

            <Image
              src={
                "https://res.cloudinary.com/dhv2udxw2/image/upload/v1720590959/ambica-machine-tools/home/crsvbkf5lhiwbxar1lcl.svg"
              }
              alt={"icon"}
              height={100}
              width={100}
              className="absolute -top-[3rem] right-8 lg:hidden block"
            />
          </div>
        </div>
      </div>

      {/* products section  */}
      <div className="product-section  py-6 lg:py-8 flex flex-col gap-y-10">
        {/* heading  */}
        <div className="px-5 lg:px-16">
          <Heading
            text1={"our"}
            text2={"products"}
            width={"w-[15%] lg:w-[4.5%]"}
          />
        </div>

        {/* content  */}
        <div className="content max-w-screen bg-[#d9d9d9] overflow-hidden">
          <Slider {...settingsProducts}>
            {products.map((item, index) => (
              <div
                className="product lg:w-[30%] min-h-[70vh] border-[10px] pretty-border transition-all border-white cursor-pointer"
                key={`product-no-${index + 1}`}
              >
                <Image
                  src={item.imgUrl}
                  alt="product-image"
                  height={206}
                  width={331}
                  className="mx-auto  py-6 px-2 transition-all lg:min-h-[40vh]"
                />

                <div className="flex flex-col py-3 w-[90%] mx-auto border-t-[3px] border-themeCarrot justify-center text-center items-center">
                  <div className="font-bold uppercase">{item.itemName}</div>
                  <div className="font-bold uppercase">{item.modelName}</div>
                  <div className="font-bold uppercase">{item.modelNameTwo}</div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* product's range section  */}
      <div className="products-range py-6 lg:py-8 flex flex-col gap-y-10 max-w-screen overflow-hidden">
        {/* heading  */}
        <div className="px-5 lg:px-16">
          <Heading
            text1={"our"}
            text2={"product's range"}
            width={"w-[15%] lg:w-[4.5%]"}
          />
        </div>

        {/* content  */}
        <div className="content">
          <Slider {...settings}>
            {productsRange.map((item, index) => (
              <div
                className="slider-product carousel-slide border-[10px] border-white lg:w-[19%] cursor-pointer rounded-b-lg hover:scale-[1.02] transition-all"
                key={`product-range-no-${index + 1}`}
              >
                <div className="border-[3px] relative rounded-lg border-themeCarrot">
                  <div className="p-4a absolute top-2 left-2 text-xl font-semibold">
                    {index <= 9 ? `0${index + 1}` : `${index}`}
                  </div>
                  <Image
                    src={item.imgUrl}
                    alt="prodict-img-slider"
                    height={230}
                    width={230}
                    className="mx-auto mt-8 lg:min-h-[35vh] rounded-lg"
                  />
                </div>

                <div className="">
                  <h3 className="uppercase px-4 min-h-[10vh] flex flex-col items-center justify-center font-bold text-center py-2 bg-[#f4f4f4] rounded-b-lg">
                    {item.title} <br />
                    {item.title2}
                  </h3>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* certificates section  */}
      <div className="certificates py-0 lg:py-8 px-5 lg:px-16 flex flex-col gap-y-10">
        <div>
          <Heading
            text1={"our"}
            text2={"certificates"}
            width={"w-[15%] lg:w-[4.5%]"}
          />
        </div>

        <div className="content flex flex-wrap flex-row gap-y-3 justify-between">
          {certificates.map((item, index) => (
            <Image
              src={item}
              alt={`certificate-no-${index + 1}`}
              height={334}
              width={239}
              key={`certificate-no-${index + 1}`}
              className="mx-auto cursor-pointer hover:scale-[1.05] w-[45%] lg:w-auto transition-all"
            />
          ))}
        </div>
      </div>

      {/* contact section  */}
      <div className="contact px-5 lg:px-16 py-6 lg:py-8">
        <Heading text1={"get in"} text2={"touch"} width={"w-[7%]"} />

        <div className="content">
          <div className="contact" id="contact">
            <div className="flex mt-12">
              <div className="left w-1/2 flex flex-col gap-y-6">
                <h2 className="uppercase font-bold text-xl text-themeCarrot">
                  ambica machine tools
                </h2>
                <div className="flex gap-x-4">
                  <div className="text-2xl">
                    <FaLocationDot />
                  </div>
                  <div className="mr-[220px] text-[#4a4b54]">
                    Plot No.24/25-1, Zaveri Ind. Estate, Opp. Shubh Estate Gate,
                    Kathwada - Singarva Road, Kathwada, Ahmedabad-382430.Gujarat
                    - INDIA.
                  </div>
                </div>

                <div className="flex gap-x-4">
                  <div className="text-2xl">
                    <IoIosCall />
                  </div>
                  <div className=" text-[#4a4b54]">
                    +91 9328289287 <br /> +91 9601253837
                  </div>
                </div>

                <div className="flex gap-x-4">
                  <div className="text-3xl">
                    <IoMail />
                  </div>
                  <div className=" text-[#4a4b54]">
                    info@ambicamachinetools.com <br />{" "}
                    sales@ambicamachinetools.com
                  </div>
                </div>
              </div>

              <div className="right w-1/2">
                <form
                  action="#"
                  method="post"
                  className="text-[#4a4b54] flex flex-col gap-y-4"
                >
                  <div className="flex flex-col">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="your name"
                      className="border-b-2 capitalize px-2 py-2 focus:outline-none border-[#4a4b54] mt-2"
                    />
                  </div>
                  <div className="flex flex-col">
                    <input
                      type="text"
                      name="email"
                      id="email"
                      placeholder="your email"
                      className="border-b-2 capitalize px-2 py-2 focus:outline-none border-[#4a4b54] mt-2"
                    />
                  </div>
                  <div className="flex flex-col">
                    <textarea
                      name="message"
                      id="message"
                      rows={5}
                      className="border-b-2 px-3 border-[#4a4b54] focus:outline-none mt-2"
                      cols={10}
                    >
                      Your Message
                    </textarea>
                  </div>
                  <Link href={"/about-us"} className="mt-3">
                    <button className="uppercase text-white bg-themeCarrot px-6 font-semibold py-2">
                      submit
                    </button>
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
