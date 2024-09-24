"use client";
import React, { useRef, useMemo, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import People from "@/assets/Images/grid/people.png";
import ball_track from "@/assets/svgs/stats/ball_track.svg";
import { useAnimation } from "framer-motion";

import big_half_circle from "@/assets/svgs/left_capsule/big_half_capsule.png";
import small_half_circle from "@/assets/svgs/left_capsule/small_half_capsule.png";

import large_ball_track from "@/assets/svgs/stats/large_ball_track.svg";
import orange_ring from "@/assets/svgs/stats/orange_ring.svg";
import trailing_ball from "@/assets/svgs/stats/trailing_balls.svg";
import left_face_half_horizontal_chip from "@/assets/svgs/stats/left_face_half_horizontal_chip.svg";

import small_half_chip from "@/assets/svgs/stats/small_half_chip.svg";
import mid_half_chip from "@/assets/svgs/stats/mid_half_chip.svg";
import large_half_chip from "@/assets/svgs/stats/large_half_chip.svg";

const animationVariants = [
  {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  },
  {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  },
  {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  },
  {
    hidden: { opacity: 0, rotate: -10 },
    visible: { opacity: 1, rotate: 0 },
  },
];

interface StatCardProps {
  value: string;
  description: string;
  className?: string;
  background?: string | React.ComponentType<React.SVGProps<SVGSVGElement>>;
  valueColor?: string;
  descriptionColor?: string;
}

const StatCard: React.FC<StatCardProps> = ({
  value,
  description,
  className,
  background,
  valueColor = "text-white",
  descriptionColor = "text-white",
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.7 }); // Changed to 0.7 for 70% visibility
  const variant = useMemo(
    () =>
      animationVariants[Math.floor(Math.random() * animationVariants.length)],
    []
  );

  return (
    <motion.div
      ref={ref}
      className={`p-4 h-full flex flex-col-reverse bg-cover bg-center relative ${className}`}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 1, delay: 0.5 }} // Added delay here
    >
      {typeof background === "string" && (
        <Image
          src={background}
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={75}
          priority={false}
          loading="lazy"
        />
      )}
      {background &&
        typeof background !== "string" &&
        React.createElement(background, { className: "absolute inset-0" })}
      <div className={`relative z-10`}>
        <motion.h3
          className={`text-4xl font-bold ${valueColor}`}
          variants={variant}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.5, delay: 0.8 }} // Increased delay
        >
          {value}
        </motion.h3>
        <motion.p
          className={`text-sm mt-2 ${descriptionColor}`}
          variants={variant}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.5, delay: 0.9 }} // Increased delay
        >
          {description}
        </motion.p>
      </div>
    </motion.div>
  );
};

const SmoothFadingCircle: React.FC = () => {
  const circleCount = 5;

  const containerVariants = {
    start: { x: "0%" },
    end: { x: "100%", transition: { duration: 1.5, ease: "easeOut" } },
  };

  const circleVariants = {
    start: (i: number) => ({
      opacity: i === circleCount - 1 ? 1 : 0.2 + i * 0.2,
      x: "0%",
    }),
    end: (i: number) => ({
      opacity: i === circleCount - 1 ? 1 : 0.2 + i * 0.2,
      x: `${(circleCount - 1 - i) * 30}%`,
      transition: {
        duration: 1.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="flex p-2 pl-4 pt-3 justify-start h-24 overflow-hidden ">
      <motion.div
        className=""
        variants={containerVariants}
        initial="start"
        animate="end"
      >
        {[...Array(circleCount)].map((_, index) => (
          <motion.div
            key={index}
            className="absolute w-20 h-20 rounded-full bg-[#85C7AD]"
            variants={circleVariants}
            custom={index}
            initial="start"
            animate="end"
            style={{ left: `${index * 30}%` }}
          />
        ))}
      </motion.div>
    </div>
  );
};

const StatsDashboard: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.4 });
  const controls = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation(); // New control for large_ball_track
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      controls.start({ x: 0 });
      controls2.start({ x: 0 });
      controls3.start({ x: 0 }); // Start animation for large_ball_track
      setHasAnimated(true);
    } else if (!isInView) {
      controls.set({ x: "100%" });
      controls2.set({ x: "-100%" });
      controls3.set({ x: "100%" }); // Reset position for large_ball_track
      setHasAnimated(false);
    }
  }, [isInView, controls, controls2, controls3, hasAnimated]);

  // const bigHalfCircleRef = useRef<HTMLDivElement>(null);
  // const isBigHalfCircleInView = useInView(bigHalfCircleRef, {
  //   once: true,
  //   amount: 0.1,
  // });
  // const [showBigHalfCircle, setShowBigHalfCircle] = useState(false);

  // useEffect(() => {
  //   if (isBigHalfCircleInView) {
  //     setTimeout(() => setShowBigHalfCircle(true), 100);
  //   }
  // }, [isBigHalfCircleInView]);

  return (
    <div
      ref={ref}
      className="bg-white p-8 rounded-xl max-w-screen-lg justify-center"
    >
      <motion.h2
        className="text-3xl font-bold text-emerald-900 mb-4 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        H2 Stats
      </motion.h2>
      <motion.p
        className="text-emerald-700 mb-6 text-center max-w-2xl mx-auto"
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolo aliquyam erat, sed diam
        voluptua.
      </motion.p>

      <div className="grid grid-cols-12 grid-rows-12 h-56">
        <StatCard
          value="100M+"
          description="Lorem ipsum dolor sit amet."
          className="col-span-4 row-span-12 bg-[#143A33] rounded-l"
        />
        <motion.div
          className="col-span-3 row-span-12 bg-emerald-200 overflow-hidden relative"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.div
            initial={{ x: "100%" }}
            animate={controls}
            transition={{ duration: 1, ease: "easeOut", delay: 1 }}
          >
            <Image
              className="absolute top-0 right-0"
              src={ball_track.src}
              alt="Ball Track"
              height={100}
              width={200}
            />
          </motion.div>
          <motion.div
            className=" absolute top-0 right-0 w-5/6"
            initial={{ x: "100%" }}
            animate={controls}
            transition={{ duration: 1, ease: "easeOut", delay: 1.5 }}
          >
            <SmoothFadingCircle />
          </motion.div>

          <motion.div
            className="absolute bottom-0 left-0"
            initial={{ x: "-50%" }}
            animate={controls2}
            transition={{ duration: 1, ease: "easeOut", delay: 1 }}
          >
            <Image
              src={big_half_circle.src}
              alt="Big Half Circle"
              height={50}
              width={200}
            />
          </motion.div>

          <motion.div
            className="absolute bottom-[1px] left-0"
            initial={{ x: "-100%" }}
            animate={controls2}
            transition={{ duration: 1, ease: "easeIn", delay: 1.1 }}
          >
            <Image
              src={small_half_circle.src}
              alt="Ball Track"
              height={50}
              width={100}
            />
          </motion.div>
        </motion.div>
        <StatCard
          value="700K+"
          description="Lorem ipsum dolor sit amet."
          className="col-span-3   row-span-12 bg-[#85C7AD] rounded-r"
          valueColor="text-emerald-900"
          descriptionColor="text-emerald-900"
          background={() => (
            <div className="absolute top-0 left-0 w-full h-full flex overflow-hidden justify-end gap-3">
              <motion.div
                initial={{ y: "-100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              >
                <Image
                  src={small_half_chip.src}
                  alt="Small Half Chip"
                  height={50}
                  width={60}
                />
              </motion.div>
              <motion.div
                initial={{ y: "-100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
              >
                <Image
                  src={large_half_chip.src}
                  alt="Orange Ring"
                  height={50}
                  width={60}
                />
              </motion.div>
              <motion.div
                className="rounded-r"
                initial={{ y: "-100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
              >
                <Image
                  className="-mt-[60%] rounded-r"
                  src={mid_half_chip.src}
                  alt="Orange Ring"
                  height={50}
                  width={60}
                />
              </motion.div>
            </div>
          )}
        />
      </div>

      <div className="grid grid-cols-12 grid-rows-2 h-56">
        <div className="col-span-1 row-span-2"></div>
        <StatCard
          value="1,200+"
          description="Lorem ipsum dolor sit amet, consetetur sadipscing."
          className="col-span-3 row-span-2 rounded-l"
          background={People.src}
          valueColor="text-emerald-900"
          descriptionColor="text-emerald-900"
        />
        <StatCard
          value="#1"
          description="Lorem ipsum dolor sit amet consetetur."
          className="col-span-3 row-span-2 bg-[#77BE7F]"
          valueColor="text-emerald-900"
          descriptionColor="text-emerald-900"
        />
        <StatCard
          value="98%"
          description="Lorem ipsum dolor sit amet."
          className="col-span-5 row-span-2 bg-[#143A33] rounded-r relative overflow-hidden" // Added overflow-hidden
          background={() => (
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-0 left-0">
                <Image
                  src={orange_ring.src}
                  alt="Orange Ring"
                  height={50}
                  width={50}
                />
              </div>
              <motion.div
                className="absolute bottom-[35%] right-[-200px]"
                initial={{ x: 0 }}
                animate={{ x: -200 }}
                transition={{ duration: 1, ease: "easeOut", delay: 1.2 }}
              >
                <Image
                  src={large_ball_track.src}
                  alt="Large Ball Track"
                  height={50}
                  width={200}
                />
                <motion.div
                  className="absolute top-0 left-0"
                  initial={{ x: 100 }}
                  animate={{ x: 0 }}
                  transition={{ duration: 1, delay: 1.7, ease: "easeInOut" }} // Delayed appearance
                >
                  <Image
                    src={trailing_ball.src}
                    alt="Trailing Ball"
                    height={50}
                    width={130}
                  />
                </motion.div>
              </motion.div>

              <motion.div
                className="absolute  right-[-200px] "
                initial={{ x: 0 }}
                animate={{ x: -200 }}
                transition={{ duration: 1, ease: "easeOut", delay: 1.2 }}
              >
                <Image
                  src={left_face_half_horizontal_chip.src}
                  alt="Large Ball Track"
                  height={50}
                  width={150}
                />
                <motion.div
                  className="absolute top-0 left-0"
                  initial={{ x: 100 }}
                  animate={{ x: 50 }}
                  transition={{ duration: 1, delay: 1.7, ease: "easeInOut" }} // Delayed appearance
                >
                  <Image
                    src={orange_ring.src}
                    alt="Trailing Ball"
                    height={50}
                    width={55}
                  />
                </motion.div>
              </motion.div>
            </div>
          )}
        />
      </div>
    </div>
  );
};

export default StatsDashboard;
