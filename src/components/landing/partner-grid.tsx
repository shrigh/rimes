"use client";
import React from "react";
import Image from "next/image";

import { motion } from "framer-motion";
import img1 from "@/assets/Images/05-01.jpg";
import img2 from "@/assets/Images/06-01.jpg";
import img3 from "@/assets/Images/07-01.jpg";
import { ArrowRightIcon } from "lucide-react";

interface PartnerCard {
  title: string;
  description: string;
  imageUrl: string;
}

const partnerCards: PartnerCard[] = [
  {
    title: "Data Partners",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.",
    imageUrl: img1.src,
  },
  {
    title: "Industry Partners",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.",
    imageUrl: img2.src,
  },
  {
    title: "Technology Partners",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.",
    imageUrl: img3.src,
  },
];

const H2ExplorePartners: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-2 text-[#143A33]">
        H2 Explore Partners
      </h1>
      <p className="text-center mb-8 text-[#143A33]">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut lare et dolore
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {partnerCards.map((card, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <Image
              src={card.imageUrl}
              alt={card.title}
              width={400}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2 text-emerald-950">
                {card.title}
              </h2>
              <p className="text-gray-600 mb-4">{card.description}</p>
              <motion.button
                className=" text-emerald-800 py-2 rounded flex gap-2 items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="font-bold text-[#143A33]"> Learn More</div>
                <ArrowRightIcon className="w-6 h-6 p-1 bg-orange-500 text-black font-bold ml-2 rounded-full" />
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default H2ExplorePartners;
