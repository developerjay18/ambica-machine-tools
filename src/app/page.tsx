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
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <main className="">
      {/* banner  */}
      <div className="banner h-[40vh] bg-black text-white flex justify-center items-center text-5xl">
        BANNER PENDING...
      </div>

      {/* welcome section  */}
      <div className="welcome-section px-16 py-8 flex flex-col gap-y-10">
        {/* heading --  */}
        <Heading
          text1={"welcome to"}
          text2={"ambica machine tools"}
          width={"w-[14%]"}
        />

        {/* content -- */}
        <div className="content flex">
          <div className="left w-[40%]">
            <Image
              src={
                "https://res.cloudinary.com/dhv2udxw2/image/upload/v1720585321/ambica-machine-tools/home/xbbkkb6xigpll6gb00sl.svg"
              }
              alt="company-image"
              height={399}
              width={500}
            />
          </div>

          <div className="right w-[60%] text-lg flex flex-col gap-y-6 justify-center">
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
        <div className="buttons w-[60%] ml-auto flex gap-x-6">
          <button>
            <Link
              href={"/"}
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
      <div className="vision-and-mission px-16 py-8">
        {/* heading --  */}
        <Heading text1={"our"} text2={"vision & mission"} width={"w-[4.5%]"} />

        {/* content  */}
        <div className="content flex justify-evenly pt-24">
          <div className="left p-6 border-[3px] border-themeCarrot rounded-lg w-[40%] flex flex-col gap-y-4 relative">
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
              className="absolute -top-24 right-14"
            />
          </div>

          <div className="right p-6 border-[3px] border-themeCarrot rounded-lg w-[40%] flex flex-col gap-y-4 relative">
            <h2 className="text-2xl uppercase font-bold">
              <span>our</span>
              <span className="text-themeCarrot"> vision</span>
            </h2>

            <p className="pr-10 ">
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
              className="absolute -top-24 right-14"
            />
          </div>
        </div>
      </div>

      {/* products section  */}
      <div className="product-section px-16 py-8 flex flex-col gap-y-10">
        {/* heading  */}
        <Heading text1={"our"} text2={"products"} width={"w-[4.5%]"} />

        {/* content  */}
        <div className="content flex justify-between">
          {products.map((item, index) => (
            <div
              className="product bg-[#d9d9d9] w-[30%] cursor-pointer"
              key={`product-no-${index + 1}`}
            >
              <Image
                src={item.imgUrl}
                alt="product-image"
                height={206}
                width={331}
                className="mx-auto py-6 px-2 hover:scale-[1.01] transition-all min-h-[50vh]"
              />

              <div className="flex flex-col py-3 w-[90%] mx-auto border-t-[3px] border-themeCarrot justify-center items-center">
                <div className="font-bold uppercase">{item.itemName}</div>
                <div className="font-bold uppercase">{item.modelName}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* product's range section  */}
      <div className="products-range py-8 flex flex-col gap-y-10 max-w-screen overflow-hidden">
        {/* heading  */}
        <div className="px-16">
          <Heading text1={"our"} text2={"product's range"} width={"w-[4.5%]"} />
        </div>

        {/* content  */}
        <div className="content">
          <Slider {...settings}>
            {productsRange.map((item, index) => (
              <div
                className="slider-product carousel-slide border-[10px] border-white w-[19%] cursor-pointer"
                key={`product-range-no-${index + 1}`}
              >
                <div className="border-[3px] border-themeCarrot">
                  <Image
                    src={item.imgUrl}
                    alt="prodict-img-slider"
                    height={230}
                    width={230}
                    className="mx-auto min-h-[35vh]"
                  />
                </div>

                <div className="">
                  <h3 className="uppercase px-4 min-h-[10vh] flex items-center justify-center font-bold text-center py-2 bg-[#f4f4f4]">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* certificates section  */}
      <div className="certificates py-8 px-16 flex flex-col gap-y-10">
        <div>
          <Heading text1={"our"} text2={"certificates"} width={"w-[4.5%]"} />
        </div>

        <div className="content flex justify-between">
          {certificates.map((item, index) => (
            <Image
              src={item}
              alt={`certificate-no-${index + 1}`}
              height={334}
              width={239}
              key={`certificate-no-${index + 1}`}
              className="mx-auto cursor-pointer hover:scale-[1.05] transition-all"
            />
          ))}
        </div>
      </div>

      {/* contact section  */}
      <div className="contact px-16 py-8">
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
                    sales@ambicamachinetools.com <br />
                    ambicamachinetools@yahoo.com
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
