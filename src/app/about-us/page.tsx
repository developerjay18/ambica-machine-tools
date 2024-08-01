"use client";

import Heading from "@/components/Heading/Heading";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import { ImQuotesRight } from "react-icons/im";
import data from "@/data/about_data.json";

function AboutUsPage() {
  const { stats } = data;

  return (
    <main>
      {/* banner  */}
      <div
        className={`about-banner flex pt-28 pl-[15rem] flex-col h-[480px] bg-black text-white`}
      ></div>

      {/* hero section  */}
      <div className="hero-section px-5 lg:px-16 py-6 lg:py-8 flex flex-col gap-y-4 lg:gap-y-6">
        <div className="flex flex-col lg:flex-row justify-center items-center">
          <div className="left flex flex-col gap-y-3 lg:gap-y-5 lg:w-[55%] text-lg">
            <div className="mb-3">
              <Heading text1={"who"} text2={"we are"} width={"w-[17%] lg:w-[5%]"} />
            </div>
            <p>
              Ambica Machine Tools was established in 2006 with an aim to
              provide impeccable engineering and pumping solutions.Mainly, the
              company deals in manufacturing Industrial Pumps, Valves and other
              Pumping Equipment that thin your specific industrial requirements.
              With our exceptional range of industrial pumps, we have catered to
              the most complex and demanding industrial sectors. Our
              headquarters and the manufacturing unit are located in Ahmedabad,
              Gujarat, India.
            </p>

            <p>
              Having served many big names in the industry, we have a reputation
              of having a fierce workforce who lends the highest level of
              integrity in their services. We ensure that this will always
              remain as the cornerstone of our company culture.Backed by the
              visionary leadership of our founder Mr. Avinash Patel and our
              talented team, we add a touch of values in all our relations and
              promise to give an edge over our competitors.
            </p>
          </div>

          <div className="right lg:w-[40%] py-6 lg:py-0 lg:ml-auto">
            <Image
              src={
                "https://res.cloudinary.com/dhv2udxw2/image/upload/v1720706496/ambica-machine-tools/about-us/vj1xlqivlmgeep4gspkn.svg"
              }
              alt="company-image"
              height={467}
              width={573}
            />
          </div>
        </div>
        <div className="">
          <button>
            <Link
              href={"/"}
              className="flex items-center gap-x-4 text-lg capitalize border-[3px] rounded-md px-4 py-2 border-themeCarrot bg-themeCarrot text-white font-semibold"
            >
              <span>connect with us</span>
              <span>
                <FaArrowCircleRight />
              </span>
            </Link>
          </button>
        </div>
      </div>

      {/* stats  */}
      <div className="stats bg-[#242323] flex flex-col gap-y-4 lg:gap-y-8 text-white py-8 px-5 lg:px-16">
        <div className="text-3xl lg:text-5xl text-[#e6e6e6]">
          <ImQuotesRight />
        </div>

        <h1 className="text-3xl lg:text-5xl w-[90%] lg:leading-[3.7rem]">
          Ambica Machine Tools India&apos;s Largest manufacturer of Industrial
          Pumps and Valves.
        </h1>

        <div className="flex flex-col mt-6 lg:mt-0 lg:flex-row gap-y-4 justify-between">
          {stats.map((item, index) => (
            <div
              className="border-l-[6px] lg:w-[25%] border-themeCarrot pl-3 flex flex-col gap-y-2"
              key={`stats-no-${index + 1}`}
            >
              <div className="capitalize font-semibold text-xl">
                {item.title}
              </div>
              <div className="text-3xl lg:text-5xl">{item.number}+</div>
            </div>
          ))}
        </div>
      </div>

      {/* why choose us  */}
      <div className="why-choose-us px-5 lg:px-16 py-6 lg:py-8 flex flex-col gap-y-6">
        <Heading text1={"why"} text2={"choose us?"} width={"w-[15%] lg:w-[5%]"} />

        <div className="flex flex-col gap-y-6 lg:flex-row">
          <div className="left lg:w-[55%] lg:border-r-[7px] lg:pr-10 border-themeCarrot lg:text-justify flex flex-col gap-y-4">
            <p>
              With extensive years of solid industry presence in India, our
              teams want to offer higher quality AODD Pumps and Barrel Pump with
              precision in India. Still, our commitment to our clients
              doesn&apos;t end there. Our employees and partners are on hand to
              provide backup and support services when you require them, even in
              India.
            </p>

            <p>
              We have an advanced state-of-the-art manufacturing infrastructure
              in India. A proficient service accompanies our AODD Pumps, Barrel
              Pump and we will ensure on-time delivery to our clientele across
              India.
            </p>
          </div>

          <div className="right lg:w-[40%] flex justify-center items-center">
            <Image
              src={
                "https://res.cloudinary.com/dhv2udxw2/image/upload/v1720710075/ambica-machine-tools/about-us/htmm40ljbyxfyqt03kps.svg"
              }
              alt="icons"
              height={112}
              width={412}
            />
          </div>
        </div>
      </div>

      {/* content  */}
      <div className="content px-5 lg:px-16 py-6 lg:py-8 flex flex-col gap-y-6 lg:flex-row gap-x-20">
        <div className="left lg:w-1/2 flex flex-col gap-y-4">
          <Heading text1={"breaking"} text2={"the bars"} width={"w-[10%]"} />

          <p className="lg:text-justify">
            A true leader comes from an improbable position. We have challenged
            the stereotypical predictions and have silenced the skeptics with
            awestruck growth in a short span of time. Having started as a small
            industrial unit in Gujarat, we have made it to global market with a
            robust clientele base present across the world in a span of just 14
            years. Our incessant urge for superior quality and pursuit for
            excellence has led this fledging company from Gujarat lead a change
            in the industry by setting a benchmark.
          </p>
        </div>

        <div className="right lg:w-1/2 flex flex-col gap-y-4">
          <Heading text1={"blazing"} text2={"growth"} width={"w-[20%]"} />

          <p className="lg:text-justify">
            Ambica Machine Tools has attained manifold growth within a short
            span of 14 years. With clients present in countries like the
            Philippines, Nigeria, Pakistan, Bangladesh, Saudi Arabia, Kuwait and
            many more, we have strong global footprints. Since its inception,
            the company has made a blazing growth marking a 50 fold increase in
            its revenue.
          </p>
        </div>
      </div>
    </main>
  );
}

export default AboutUsPage;
