"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
                <h1 className="uppercase text-5xl text-right font-bold">
                  our
                  <span className="text-themeCarrot"> mission</span>
                </h1>
                <div className="h-1 w-[16%] bg-black mt-4 ml-auto"></div>
              </div>
              <p className="text-right">
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

        <div className="">
          <Slider {...settingProducts}>
            <div>
              <div>Box 1</div>
            </div>
            <div>
              <div>Box 2</div>
            </div>
            <div>
              <div>Box 3</div>
            </div>
            <div>
              <div>Box 4</div>
            </div>
            <div>
              <div>Box 5</div>
            </div>
            <div>
              <div>Box 6</div>
            </div>
          </Slider>
        </div>
      </div>
    </main>
  );
}
