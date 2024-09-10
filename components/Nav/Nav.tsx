"use client";

import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import "./nav.css";
import { usePathname } from "next/navigation";
import { Divide as Hamburger } from "hamburger-react";
import Link from "next/link";
import Drawer from "@mui/joy/Drawer";
import { linksData } from "@/lib/Links";
import { FaArrowRight } from "react-icons/fa6";
// import ThemeSwitch from "./ThemeSwitch";

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [open, setOpen] = React.useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const [windowScrolled, setWindowScrolled] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrolledDown = currentScrollPos < prevScrollPos;
      setWindowScrolled(window.scrollY === 0);

      setVisible(isScrolledDown);
      setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  useEffect(() => {
    if (open) {
      console.log("open");
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [open]);

  const toggleDrawer =
    (inOpen: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setOpen(inOpen);
    };

  return (
    <section
      className={`w-full fixed z-50 ${windowScrolled ? "" : "bg-blue"}
        ${!windowScrolled || open ? "bg-blue" : ""} ${
          visible ? "transleteNavUp" : "transleteNav"
        }`}
    >
      <nav
        className={` px-6 py-6  max-w-[1536px] md:mx-auto w-full left-0
           `}
      >
        <div className="flex justify-between">
          <Link href="/" className="flex gap-2 items-center">
            <div className="w-full">
              <Image
                src="/assets/images/logo.png"
                alt="ZkSync.ai Logo"
                width={30}
                height={30}
              />
            </div>
            <p className="font-poppins text-2xl tracking-wide	 text-white">
              Boost<span className="text-gradient">Web</span>
            </p>
          </Link>

          {/* Desktop Navigation */}
          <div className="lg:flex hidden">
            <div className="flex gap-3 md:gap-5">
              <ul className="flex gap-4 items-center p-1.5 border-white_hover border-[1px] rounded-full">
                {linksData.data.map((item, index) => (
                  <li key={index} className={``}>
                    <a
                      href={item.path}
                      className={`text-gray-300 hover:bg-white_hover rounded-full hover:text-white text-base relative block leading-7 px-6 py-2 ${
                        pathname === item.path
                          ? "bg-white_hover text-white"
                          : ""
                      }`}
                    >
                      {item.titles}
                    </a>
                  </li>
                ))}
              </ul>
              {/* <ThemeSwitch /> */}
            </div>
          </div>
          <div className="hidden lg:flex">
            <Link href="/contact" className="btn ml-4 !py-2.5">
              Start Project
            </Link>
          </div>

          {/* Mobile Navigation */}
          <div className="lg:hidden flex relative" ref={navRef}>
            <button className=" z-50">
              <Hamburger
                toggled={open}
                toggle={setOpen}
                label="Show menu"
                size={24}
                color="#ffffff"
                rounded
              />
            </button>
          </div>
        </div>
      </nav>
      <Drawer
        anchor="top"
        open={open}
        onClose={toggleDrawer(false)}
        className=" drawer_custom translate-y-[96px] relative !z-10 overflow-hidden"
      >
        <div className="bg-primary w-[200px] absolute h-full  blur-[200px] opacity-50" />
        <div className={`bg-blue w-full px-3  py-3 pt-6 shadow-md relative`}>
          <ul className="flex flex-col gap-4">
            {linksData.data.map((item, index) => (
              <li key={index} className={`flex `}>
                <a
                  href={item.path}
                  className={`text-gray-400 w-full hover:text-white text-xl relative block leading-7 px-6 py-4`}
                  onClick={() => setOpen(false)}
                >
                  <div className={`flex justify-between items-center w-full `}>
                    {item.titles}
                    <FaArrowRight />
                  </div>
                </a>
              </li>
            ))}
            <li className="flex pl-3 pt-4" onClick={() => setOpen(false)}>
              <Link href="/contact" className="btn !text-xl !py-3 !px-6">
                Start Project
              </Link>
            </li>
          </ul>
          {/* <ThemeSwitch /> */}
        </div>
      </Drawer>
    </section>
  );
};

export default Navbar;
