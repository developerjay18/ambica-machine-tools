"use client";

import React, { useState } from "react";
import Image from "next/image";
import { IoIosCall } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import Link from "next/link";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      {/* for larger screens  */}
      <div className="large-nav">
        <div className="up px-16 py-1 flex items-center justify-between">
          <div className="left flex gap-x-6">
            <div className="">
              <Link
                href={"tel:+919328289287"}
                className="flex items-center gap-x-2"
              >
                <span className="text-xl">
                  <IoIosCall />
                </span>
                <span>+91 9328289287</span>
              </Link>
            </div>

            <div className="">
              <Link
                href={"mailto:info@ambicamachinetools.com"}
                className="flex items-center gap-x-2"
              >
                <span className="text-xl">
                  <IoMdMail />
                </span>
                <span>info@ambicamachinetools.com</span>
              </Link>
            </div>
          </div>

          <div className="right">
            <Image
              src={
                "https://res.cloudinary.com/dhv2udxw2/image/upload/v1720511821/ambica-machine-tools/wqa2vbein6niilld46uu.png"
              }
              alt="certification-logo"
              height={100}
              width={200}
            />
          </div>
        </div>

        <div className="down flex items-center justify-between px-16 py-2 bg-themeCarrot">
          <div className="left">
            <Link href={"/"}>
              <Image
                src={
                  "https://res.cloudinary.com/dhv2udxw2/image/upload/v1718722442/ambica-machine-tools/r3dv2kl425ea0cr50dpc.svg"
                }
                alt="logo"
                height={150}
                width={150}
              />
            </Link>
          </div>
          <nav className="right flex items-center text-white">
            <div className="nav-links flex items-center gap-x-20">
              <ul className="flex gap-x-10 items-center text-lg">
                <Link href={"/"} className="capitalize font-medium">
                  <li>Home</li>
                </Link>

                <Link href={"/about-us"} className="capitalize font-medium">
                  <li>about us</li>
                </Link>

                <li className="">
                  <div className="flex w-full border-3 border-white items-center justify-center">
                    <div className="group relative cursor-pointer">
                      <div className="flex items-center justify-between">
                        <div className="menu-hover my-2 capitalize mx-2 font-medium text-lg">
                          our products
                        </div>
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="h-6 w-6"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                            />
                          </svg>
                        </span>
                      </div>

                      <div className="invisible absolute z-50 flex w-full flex-col bg-white py-1 px-4 text-gray-800 min-w-[300px] shadow-xl group-hover:visible">
                        <Link
                          className="my-2 block border-b border-gray-100 py-1 font-medium text-gray-500 hover:text-themeCarrot md:mx-2 capitalize"
                          href={"/products/triplex-plunger-pump"}
                        >
                          triplex plunger pump
                        </Link>
                        <Link
                          className="my-2 block border-b border-gray-100 py-1 font-medium text-gray-500 hover:text-themeCarrot md:mx-2 capitalize"
                          href={"/products/instagram-ads"}
                        >
                          Instagram Ads
                        </Link>
                        <Link
                          className="my-2 block border-b border-gray-100 py-1 font-medium text-gray-500 hover:text-themeCarrot md:mx-2 capitalize"
                          href={"/products/google-ads"}
                        >
                          PPC (google ads)
                        </Link>
                        <Link
                          className="my-2 block border-b border-gray-100 py-1 font-medium text-gray-500 hover:text-themeCarrot md:mx-2 capitalize"
                          href={"/products/social-media-marketing"}
                        >
                          social media marketing
                        </Link>
                        <Link
                          className="my-2 block border-b border-gray-100 py-1 font-medium text-gray-500 hover:text-themeCarrot md:mx-2 capitalize"
                          href={"/products/seo"}
                        >
                          search engine optimization (SEO)
                        </Link>
                        <Link
                          className="my-2 block border-b border-gray-100 py-1 font-medium text-gray-500 hover:text-themeCarrot md:mx-2 capitalize"
                          href={"/products/ui-ux-designing"}
                        >
                          UI &amp; UX designing
                        </Link>
                        <Link
                          className="my-2 block border-b border-gray-100 py-1 font-medium text-gray-500 hover:text-themeCarrot md:mx-2 capitalize"
                          href={"/products/website-development"}
                        >
                          website development
                        </Link>
                      </div>
                    </div>
                  </div>
                </li>

                <Link href={"/contact-us"} className="capitalize font-medium">
                  <li>contact us</li>
                </Link>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
