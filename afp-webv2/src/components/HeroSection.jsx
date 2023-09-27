"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl lg:text-5xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 to-emerald-700">
              Welcome to {""}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "AFP",
                1000,
                "Cat Lover",
                1000,
                "Pet Shop",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "2em", display: "inline-block" }}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            We specialize in importing premium cat facilities, from cozy beds to
            stimulating toys. Discover excellence in cat care with us.
          </p>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/aut.jpg"
              alt="aut image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={400}
              height={400}
              style={{ borderRadius: "200px" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
