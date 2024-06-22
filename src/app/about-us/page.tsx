"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

function AboutUsPage() {
  return (
    <div className="max-w-screen overflow-hidden">
      {/* hero section  */}
      <div className="hero-section min-h-[400px] home-hero-bg p-5 lg:p-24">
        <div className="flex text-white pt-8 justify-center h-[300px] items-center gap-y-8">
          <div className="left">
            {/* for larger screens  */}
            <h1 className="text-5xl text-center hidden uppercase font-bold w-full mx-auto lg:block leading-[4rem]">
              about us
            </h1>

            {/* for small screens 
              <h1 className="text-4xl mt-20 lg:hidden block text-center leading-[2.8rem] w-full text-white">
                Elevate your driving experience &nbsp;
                <b>with durable and high performance Elito Batteries</b>
              </h1> */}
          </div>
        </div>
      </div>

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
              requirements. With our exceptional range of industrial pumps, we
              have catered to the most complex and demanding industrial sectors.
            </p>

            <p>
              Our headquarters and the manufacturing unit are located in
              Ahmedabad, Gujarat, India.Since our establishment, we believed in
              challenging ourselves to extend our reach to the international
              market. We have always set higher goals for ourselves and made
              enduring efforts to deliver the best. Quality has always been a
              buzzword in our company premises. Keeping professionalism as our
              hallmark, we direct our efforts to keep &apos;quality&apos; as our
              mainstay in all our endeavors.
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

      {/* content section 1  */}
      <div className="content-1 flex flex-col gap-y-14 p-24 bg-[#f4f4f4]">
        <div className="flex">
          <div className="left w-1/2">
            <div className="">
              <h1 className="uppercase text-3xl font-bold">
                breaking <span className="text-themeCarrot">the bars</span>
              </h1>
              <div className="h-1 w-[23%] bg-black mt-4"></div>
            </div>

            <p className="pt-6 pr-10">
              A true leader comes from an improbable position. We have
              challenged the stereotypical predictions and have silenced the
              skeptics with awestruck growth in a short span of time. Having
              started as a small industrial unit in Gujarat, we have made it to
              global market with a robust clientele base present across the
              world in a span of just 14 years. Our incessant urge for superior
              quality and pursuit for excellence has led this fledging company
              from Gujarat lead a change in the industry by setting a benchmark.
            </p>
          </div>

          <div className="right w-1/2">
            <div className="">
              <h1 className="uppercase text-3xl font-bold">
                blazing <span className="text-themeCarrot">growth</span>
              </h1>
              <div className="h-1 w-[23%] bg-black mt-4"></div>
            </div>

            <p className="pt-6">
              Ambica Machine Tools has attained manifold growth within a short
              span of 14 years. With clients present in countries like the
              Philippines, Nigeria, Pakistan, Bangladesh, Saudi Arabia, Kuwait
              and many more, we have strong global footprints. Since its
              inception, the company has made a blazing growth marking a 50 fold
              increase in its revenue.
            </p>
          </div>
        </div>

        <div className="flex">
          <div className="left w-1/2">
            <div className="">
              <h1 className="uppercase text-3xl font-bold">
                our <span className="text-themeCarrot">vision</span>
              </h1>
              <div className="h-1 w-[10%] bg-black mt-4"></div>
            </div>

            <p className="pt-6 pr-10">
              Aspire to attain global leadership by anchoring our roots on the
              factors of quality, innovation, and customer delight.
            </p>
          </div>

          <div className="right w-1/2">
            <div className="">
              <h1 className="uppercase text-3xl font-bold">
                our <span className="text-themeCarrot">mission</span>
              </h1>
              <div className="h-1 w-[10%] bg-black mt-4"></div>
            </div>

            <ul className="pt-6">
              <li>
                Sustain as an undisputed leader in India in providing pumping
                solutions
              </li>
              <li>To create satisfying value for all our stakeholders</li>
              <li>Create a competitive advantage in the market</li>
            </ul>
          </div>
        </div>

        <div className="flex">
          <div className="left">
            <div className="">
              <h1 className="uppercase text-3xl font-bold">
                our <span className="text-themeCarrot">products</span>
              </h1>
              <div className="h-1 w-[5%] bg-black mt-4"></div>
            </div>

            <p className="pt-6">
              With our exclusive and versatile range of pumps and pumping
              equipment, we have served a myriad of highly reputed brands in the
              industry. Our products range from a basic level centrifugal pump
              to the latest and cutting-edge pumps. We manufacture a variety of
              Centrifugal Pumps, Polypropylene Pumps, Barrel Pumps, Hydro
              Testing Pump, Triplex Plunger Pump, Sewage Pump, Electric Motors,
              Vertical Polypropylene Pump, Magnetic Drive Pump, Rubber Lined
              Pump, High Pressure Industrial Valves, and Chlorine Gas Cylinder
              Accessories.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsPage;
