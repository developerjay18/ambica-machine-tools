"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="bg-[#242323] px-16 text-[#bdbec1] py-10 flex justify-between">
      {/* .left  */}
      <div className="left w-[20%] flex flex-col gap-y-6">
        <div className="">
          <Link href={"/"}>
            <Image
              src={
                "https://res.cloudinary.com/dhv2udxw2/image/upload/v1718722442/ambica-machine-tools/r3dv2kl425ea0cr50dpc.svg"
              }
              alt="logo"
              height={77}
              width={200}
            />
          </Link>
        </div>

        <p>
          Ambica Machine Tools India&apos;s Largest manufacturer of Industrial
          Pumps and Valves.
        </p>

        <div className="text-white text-4xl flex gap-x-3">
          <Link href={"/"}>
            <FaFacebook />
          </Link>

          <Link href={"/"}>
            <IoLogoWhatsapp />
          </Link>

          <Link href={"/"}>
            <FaInstagram />
          </Link>
        </div>
      </div>

      <div className="left-one w-[15%] flex flex-col gap-y-6">
        <div className="heading">
          <h1 className="text-3xl uppercase font-bold flex gap-x-2">
            <span className="text-white">our</span>
            <span className="text-themeCarrot">QR code</span>
          </h1>
          <div className="w-[18%] mt-1 h-1 bg-white"></div>
        </div>

        <div className="">
          <Image
            src={
              "https://res.cloudinary.com/dhv2udxw2/image/upload/v1720704675/ambica-machine-tools/home/urryiuawcbo77aedtwgz.svg"
            }
            alt="QR code"
            width={200}
            height={200}
          />
        </div>
      </div>

      <div className="right w-[30%] flex flex-col gap-y-6">
        <div className="heading">
          <h1 className="text-3xl uppercase font-bold flex gap-x-2">
            <span className="text-white">our</span>
            <span className="text-themeCarrot">details</span>
          </h1>
          <div className="w-[18%] mt-1 h-1 bg-white"></div>
        </div>

        <div className="flex flex-col gap-y-3">
          <div className="flex gap-x-2">
            <div className="capitalize text-white min-w-[23%]">address:</div>
            <p>
              Plot No.24/25-1, Zaveri Ind. Estate, Opp. Shubh Estate Gate,
              Kathwada - Singarva Road, Kathwada, Ahmedabad-382430.Gujarat -
              INDIA.
            </p>
          </div>

          <div className="flex gap-x-2">
            <div className="capitalize text-white min-w-[23%]">phone no:</div>
            <div className="">
              <div className="">+91 80000 789789 </div>
              <div className="">+91 89980 790096 </div>
            </div>
          </div>

          <div className="flex gap-x-2">
            <div className="capitalize text-white min-w-[23%]">email id:</div>
            <div className="">
              <div className="">info@ambicamachinetools.com</div>
              <div className="">sales@ambicamachinetools.com</div>
            </div>
          </div>
        </div>
      </div>

      <div className="left-one w-[23%] flex flex-col gap-y-6">
        <div className="heading">
          <h1 className="text-3xl uppercase font-bold flex gap-x-2">
            <span className="text-white">global</span>
            <span className="text-themeCarrot">network</span>
          </h1>
          <div className="w-[20%] mt-1 h-1 bg-white"></div>
        </div>

        <div className="">
          <Image
            src={
              "https://res.cloudinary.com/dhv2udxw2/image/upload/v1720706138/ambica-machine-tools/home/d9efxx6zrupzgjpgcsoq.svg"
            }
            alt="QR code"
            width={350}
            height={200}
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
