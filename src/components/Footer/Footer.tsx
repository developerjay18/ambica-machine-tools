"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import products from "@/data/footer_data.json";

function Footer() {
  return (
    <div className="bg-black text-white pt-16 px-24 flex flex-col gap-y-8">
      <div className="flex justify-between">
        <div className="flex flex-col gap-y-10 w-[25%]">
          <Link href={"/"}>
            <Image
              src={
                "https://res.cloudinary.com/dhv2udxw2/image/upload/v1718722442/ambica-machine-tools/r3dv2kl425ea0cr50dpc.svg"
              }
              alt="logo"
              height={77}
              width={236}
            />
          </Link>
          <Image
            src={
              "https://res.cloudinary.com/dhv2udxw2/image/upload/v1718964190/ambica-machine-tools/wkx0ofqx3cktyogrjvvr.jpg"
            }
            alt="scanner"
            height={246}
            width={267}
          />
        </div>

        <div className="w-[30%]">
          <div className="">
            <h1 className="uppercase text-3xl font-bold">
              our
              <span className="text-themeCarrot"> vision</span>
            </h1>
            <div className="h-1 w-[38%] bg-white mt-2"></div>
          </div>

          <div className=" w-[90%] mt-8">
            <ol className="flex flex-col gap-y-3">
              {products.products.map((item, index) => (
                <li key={index} className="capitalize text-lg">
                  <Link href={item.slug}>{item.name}</Link>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="w-[40%]">
          <Image
            src={
              "https://res.cloudinary.com/dhv2udxw2/image/upload/v1718964189/ambica-machine-tools/hamf11uz0nq3wdln4ry2.jpg"
            }
            alt="world-map"
            height={514}
            width={535}
          />
        </div>
      </div>

      <div className="flex justify-between pb-2">
        <div className="capitalize">
          copyright @ 2024 | AMBICA MACHINE TOOLS
        </div>
        <div className="capitalize">
          Developed by{" "}
          <span className="hover:text-themeCarrot">
            <Link href={"https://www.jayraiweb.com"}>Jay Rai Web</Link>
          </span>{" "}
        </div>
      </div>
    </div>
  );
}

export default Footer;
