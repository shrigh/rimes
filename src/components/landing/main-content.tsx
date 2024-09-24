"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion"; // Add this import
import lady from "@/assets/Images/lady_hero.jpg";
import CapsuleInfo from "./capsule-info";
import pop from "@/assets/svgs/left_bottom_hero/pop.png";
import bottom_4th_circle from "@/assets/svgs/left_bottom_hero/bottom_quarter_circle.png";
import top_4th_circle from "@/assets/svgs/left_bottom_hero/top_quarter_circle.png";
import small_capsule from "@/assets/svgs/left_capsule/small_half_capsule.png";
import big_capsule from "@/assets/svgs/left_capsule/big_half_capsule.png";
import right_half_capsule from "@/assets/svgs/image_back_svg/right_half_capsule.png";
import ring from "@/assets/svgs/image_back_svg/ring.png";
import SmoothFadingCircle from "./moving-ball";

const MainContent: React.FC = () => {
  return (
    <main className="relative">
      <div className="flex flex-col relative bg-gradient-to-b from-black to-[#143a33] text-white py-12 px-4  overflow-hidden items-center justify-center">
        <div className=" max-w-screen-lg relative">
          <div className="flex flex-col lg:flex-row items-center justify-between mb-20">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <motion.h1
                className="text-4xl font-bold mb-4"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                H1 Lorem Ipsum Dolor <br /> Sit Amet Diam
              </motion.h1>
              <motion.p
                className="mb-6 text-sm font-extralight"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              >
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua.
              </motion.p>
              <motion.button
                className="bg-orange-400 text-black px-5 py-2 rounded-full text-sm font-bold"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              >
                Call to Action
              </motion.button>
            </div>
            <div className="lg:w-1/2 relative flex justify-end pr-20">
              <div className="w-[300px] h-[300px] rounded-full overflow-hidden relative z-20 ">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0 }}
                  className="w-full h-full z-20"
                  style={{
                    zIndex: 20,
                  }}
                >
                  <Image
                    src={lady}
                    alt="Woman using tablet"
                    width={300}
                    height={300}
                    className="w-full h-full rounded-full object-cover"
                  />
                </motion.div>
              </div>
            </div>
          </div>

          {/* svg */}
          <div className="absolute -top-10 right-[200px] flex justify-end z-10">
            <motion.div
              // className=" z-0"
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
            >
              <Image
                className=""
                src={ring}
                alt="Pop"
                width={100}
                // height={300}
              />
            </motion.div>
            <motion.div
              className=""
              // initial={{ x: 100, opacity: 0 }}
              // animate={{ x: 0, opacity: 1 }}
              // transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
            >
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
              >
                <Image
                  // className="absolute top-0 z-10"
                  src={right_half_capsule}
                  alt="Bottom Quarter Circle"
                  width={200}
                />
              </motion.div>
              <motion.div
                className="absolute top-0 z-10"
                style={{
                  height: 200,
                }}
                initial={{ width: 0, x: 200, opacity: 0 }}
                animate={{ width: 200, x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 1.5 }}
              >
                {/* <Image src={balls} alt="Top Quarter Circle" width={200} /> */}
                <SmoothFadingCircle />
              </motion.div>
            </motion.div>
          </div>

          {/* svg */}
        </div>
      </div>

      <div className="absolute bottom-10 right-0 w-[500px] flex justify-end">
        <motion.div
          className="absolute z-0"
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 1.4 }}
        >
          <Image
            className=""
            src={pop}
            alt="Pop"
            width={240}
            // height={300}
          />
        </motion.div>
        <motion.div
          className="right-0 z-10"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
        >
          <Image
            src={top_4th_circle}
            alt="Top Quarter Circle"
            width={120}
            height={120}
          />
          <Image
            src={bottom_4th_circle}
            alt="Bottom Quarter Circle"
            width={120}
            height={120}
          />
        </motion.div>
      </div>
      <div
        style={{
          zIndex: 0,
        }}
        className="absolute bottom-10  left-0 w-[500px] flex justify-start"
      >
        <motion.div
          initial={{ x: -200 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
        >
          <Image
            src={big_capsule}
            alt="Bottom Quarter Circle"
            width={200}
            height={100}
          />
        </motion.div>
        <motion.div
          className="absolute top-[2px] "
          initial={{ x: -200 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
        >
          <Image
            src={small_capsule}
            alt="Top Quarter Circle"
            width={100}
            height={100}
          />
        </motion.div>
      </div>
      <div className="z-100">
        <CapsuleInfo />
      </div>
    </main>
  );
};

export default MainContent;
