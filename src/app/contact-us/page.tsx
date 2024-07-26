"use client";

import Heading from "@/components/Heading/Heading";
import Image from "next/image";
import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function ContactUsPage() {
  return (
    <main>
      {/* banner  */}
      <div className="banner h-[40vh] bg-black text-white flex justify-center items-center text-5xl">
        CONTACT US
      </div>

      {/* contact form  */}
      <div className="contact-form px-16 py-8 flex flex-col gap-y-10">
        <Heading text1={"get in"} text2={"touch"} width={"w-[10%]"} />

        <div className="flex justify-around items-center">
          <div className="left w-[40%]">
            <Image
              src={
                "https://res.cloudinary.com/dhv2udxw2/image/upload/v1721929020/ambica-machine-tools/contact-us/chlritunl9pg14rymlaj.svg"
              }
              alt="contact-image"
              height={360}
              width={500}
            />
          </div>

          <div className="right w-[50%]">
            <form action="" method="post" className="flex flex-col gap-y-3">
              <div className="flex gap-x-10">
                <div className="flex flex-col w-1/2">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="your name"
                    className="border-b-2 capitalize px-2 py-2 focus:outline-none border-[#4a4b54] mt-2"
                  />
                </div>
                <div className="flex flex-col w-1/2">
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="your email"
                    className="border-b-2 capitalize px-2 py-2 focus:outline-none border-[#4a4b54] mt-2"
                  />
                </div>
              </div>

              <div className="flex gap-x-10">
                <div className="flex flex-col w-1/2">
                  <input
                    type="text"
                    name="address"
                    id="address"
                    placeholder="your address"
                    className="border-b-2 capitalize px-2 py-2 focus:outline-none border-[#4a4b54] mt-2"
                  />
                </div>
                <div className="flex flex-col w-1/2">
                  <input
                    type="text"
                    name="product"
                    id="product"
                    placeholder="product name"
                    className="border-b-2 capitalize px-2 py-2 focus:outline-none border-[#4a4b54] mt-2"
                  />
                </div>
              </div>

              <div className="flex gap-x-10">
                <div className="flex flex-col w-1/2">
                  <input
                    type="text"
                    name="phoneNum"
                    id="phoneNum"
                    placeholder="your phone Number"
                    className="border-b-2 capitalize px-2 py-2 focus:outline-none border-[#4a4b54] mt-2"
                  />
                </div>
                <div className="flex flex-col w-1/2">
                  <input
                    type="text"
                    name="company"
                    id="company"
                    placeholder="your company"
                    className="border-b-2 capitalize px-2 py-2 focus:outline-none border-[#4a4b54] mt-2"
                  />
                </div>
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

              <div className="mt-3">
                <button className="uppercase  text-white bg-themeCarrot px-6 font-semibold py-2">
                  submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* information  */}
      <div className="information px-16 py-8">
        <div className="box rounded-xl bg-[#f4f4f4] p-8 flex flex-col gap-y-10">
          <Heading
            text1={"head office"}
            text2={"- manufacturing"}
            width={"w-[14%]"}
          />

          <div className="flex flex-col gap-y-6">
            <div className="flex gap-x-3">
              <div className="text-3xl">
                <FaLocationDot />
              </div>
              <div className="">
                <h3 className="text-lg font-semibold">AMBICA MACHINE TOOLS</h3>
                <div className="">
                  Address : Plot No 24/25-1, Zaveri Ind. Estate, Kathawada
                  Shingarva Road, Kathwada, Ahmedabad - 382430 Gujarat , India.
                </div>
              </div>
            </div>

            <div className="flex gap-x-3">
              <div className="text-3xl">
                <MdEmail />
              </div>
              <div className="">
                <h3 className="text-lg font-semibold">PHONE NO.</h3>
                <div className="">
                  +91 9328289287 <br /> +91 9604253837
                </div>
              </div>
            </div>

            <div className="flex gap-x-3">
              <div className="text-3xl">
                <FaLocationDot />
              </div>
              <div className="">
                <h3 className="text-lg font-semibold">EMAIL ID.</h3>
                <div className="">
                  info@ambicamachinetools.com <br />{" "}
                  sales@ambicamachinetools.com
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* map  */}
      <div className="map max-w-screen overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14687.36520247025!2d72.68195682619918!3d23.029598485897733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e879de40a28a5%3A0xf66bcff14b047aa6!2sAmbica%20Machine%20Tools%20-%20Hydro%20Test%20Pump%20%26%20Hydraulic%20Pressure%20Test%20Pump%20Manufacturer!5e0!3m2!1sen!2sin!4v1720747084054!5m2!1sen!2sin"
          width="1600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </main>
  );
}

export default ContactUsPage;
