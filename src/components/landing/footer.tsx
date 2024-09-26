"use client";
import React from "react";
import { Linkedin, Youtube } from "lucide-react";
import Image from "next/image";
import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import logo from "@/assets/Images/dot-less-logo.svg";

interface FooterColumn {
  title: string;
  items: string[];
}

const footerColumns: FooterColumn[] = [
  {
    title: "Who We Serve",
    items: ["Asset Managers", "Institutional Investors", "Asset Services"],
  },
  {
    title: "Solutions",
    items: [
      "Data Partners",
      "Benchmark and Index Solutions",
      "Enterprise Data Management Solutions",
      "Data Distribution and Warehousing Solutions",
      "Investment Management Solutions",
      "Asset Servicing Solutions",
    ],
  },
  {
    title: "Partners",
    items: ["Data Partners", "Industry Partners", "Technology Partners"],
  },
  {
    title: "Insights",
    items: ["Blog", "Research", "Resource Center"],
  },
  {
    title: "Why Rimes",
    items: ["Expertise", "Partners", "Newsroom"],
  },
  {
    title: "Careers",
    items: ["Opportunities", "Life at Rimes", "New Grads", "Developers"],
  },
];

const RimesFooter: React.FC = () => {
  const footerRef = useRef<HTMLDivElement>(null);
  const [footerDimensions, setFooterDimensions] = useState({
    width: 0,
    height: 0,
  });
  const isInView = useInView(footerRef, { once: true, amount: 0.2 });
  const ballControls = useAnimation();
  const [isAnimating, setIsAnimating] = useState(false);

  // Define these constants at the component level
  // Define these constants at the component level
  // const ballRadius = 2; // Half of the ball's height (4px)
  const bounceTop = 0; // Top of the logo
  const bounceBottom = -30; // Bounce height
  const xOffset = -40; // Leftward shift
  const wordPositions = [210, 150, 100].map((x) => x + xOffset); // Adjust these x-positions for each word, from right to left

  useEffect(() => {
    if (footerRef.current) {
      const { width, height } = footerRef.current.getBoundingClientRect();
      setFooterDimensions({ width, height });
    }
  }, []);

  useEffect(() => {
    if (isInView && footerDimensions.width > 0) {
      ballControls
        .start({
          x: [
            // footerDimensions.width, // Start from the right side
            // footerDimensions.width * 0.5, // Small bounce, move slightly left
            ...wordPositions.flatMap((x) => [x + 20, x]), // Slight left movement when bouncing on words
            wordPositions[wordPositions.length - 1], // Final word position
          ],
          y: [
            // bounceTop, // Start from the top
            // footerDimensions.height * 0.8, // Small bounce downward
            ...wordPositions.flatMap((i) => [
              bounceBottom + i * 0.1, // Smoother bounce on the words
              bounceTop + i * 0.05, // Gradual upward after bounce
            ]),
            0, // Final resting position
          ],
          transition: {
            duration: 2, // Same duration to maintain the animation timing
            times: [
              0, // Starting point
              0.4, // Second small bounce
              0.8, // Large drop to bottom
              ...wordPositions.flatMap((_, i) => [
                (i + 0) / wordPositions.length,
                (i + 0.5) / wordPositions.length,
              ]),
              1, // Final resting point
            ],
            ease: "easeInOut", // Smooth easing for natural motion
          },
        })
        .then(() => {
          setIsAnimating(true);
        });
    }
  }, [isInView, ballControls, footerDimensions]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.footer
      ref={footerRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="bg-white text-green-900 pt-8 relative overflow-hidden"
    >
      {/* motion for ball */}
      <motion.div
        className="absolute w-4 h-4 bg-[#F7942B] rounded-full z-10"
        initial={{ x: footerDimensions.width, y: bounceTop, opacity: 1 }}
        animate={ballControls}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-8 gap-5 justify-between">
          <motion.div
            variants={itemVariants}
            className="w-full md:w-auto mb-8 md:mb-0 col-span-2 flex flex-col gap-4"
          >
            <div className="h-32 ">
              <Image
                src={logo}
                width={200}
                height={80}
                alt="Rimes"
                className="pt-3 -ml-[0.65rem]"
              />
            </div>
            <div className="text-sm text-slate-600">
              ©2024 Rimes Technology Corporation. All Rights Reserved.
            </div>
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="#"
                className="text-green-900 hover:text-orange-500"
              >
                <Linkedin size={24} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="#"
                className="text-green-900 hover:text-orange-500"
              >
                <Youtube size={24} />
              </motion.a>
            </div>
          </motion.div>
          {footerColumns.map((column, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="w-1/2 md:w-auto mb-6"
            >
              <h3 className="font-semibold mb-2">{column.title}</h3>
              <ul className="space-y-2">
                {column.items.map((item, itemIndex) => (
                  <motion.li
                    key={itemIndex}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <a href="#" className="text-sm hover:text-orange-500">
                      {item}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        <motion.div
          variants={itemVariants}
          className="mt-8 pt-8 border-t border-gray-200 text-sm"
        >
          <div className="flex flex-wrap justify-between">
            <div></div>
            <div className="flex flex-wrap justify-between items-center">
              <motion.a
                whileHover={{ color: "#ff6b00" }}
                href="#"
                className="text-[#143A33] border-r border-[#143A33] px-2"
              >
                Cookies Policy
              </motion.a>
              <motion.a
                whileHover={{ color: "#ff6b00" }}
                href="#"
                className="text-[#143A33] border-r border-[#143A33] px-2"
              >
                Slavery and Human Trafficking Statement
              </motion.a>
              <motion.a
                whileHover={{ color: "#ff6b00" }}
                href="#"
                className="text-[#143A33] border-r border-[#143A33] px-2"
              >
                Terms of Use
              </motion.a>
            </div>
            <div className="mt-4 md:mt-0">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`button-animie ${
                  isAnimating
                    ? "fill-start px-4 py-2 font-medium rounded-full"
                    : ""
                }`}
              >
                Contact Us
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default RimesFooter;
