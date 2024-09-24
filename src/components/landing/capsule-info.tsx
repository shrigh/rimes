"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

interface InfoBoxProps {
  title: string;
  content: string;
}

const InfoBox: React.FC<InfoBoxProps & { index: number }> = ({
  title,
  content,
  index,
}) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: [0.48, 0.15, 0.25, 0.96],
      },
    }),
  };

  const contentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.3,
        duration: 0.4,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      custom={index}
      initial="hidden"
      animate="visible"
      className="bg-[#143A33] rounded-full p-8 text-center border-2 border-[#85C7AD]"
    >
      <motion.div variants={contentVariants}>
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <p className="mb-4 text-sm text-slate-300">{content}</p>
        <div className="flex justify-center gap-2">
          <div className="font-semibold text-sm">Learn More</div>
          <Link
            href="#"
            className="flex justify-center items-center rounded-full"
          >
            <ArrowRight
              color="black"
              size={22}
              className="bg-orange-400 p-1 rounded-full"
            />
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
};

function CapsuleInfo() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="absolute flex justify-center items-center w-screen mt-[-100px]">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-screen-lg grid grid-cols-1 md:grid-cols-3 gap-8 place-items-center"
      >
        {[
          {
            title: "Lorem Ipsum",
            content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
          },
          {
            title: "Lorem Ipsum",
            content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
          },
          {
            title: "Lorem Ipsum",
            content: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
          },
        ].map((item, index) => (
          <InfoBox
            key={index}
            index={index}
            title={item.title}
            content={item.content}
          />
        ))}
      </motion.div>
    </div>
  );
}

export default CapsuleInfo;
