"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import one_one from "@/assets/Images/01-01.jpg";
import one_two from "@/assets/Images/02-01.jpg";
import one_three from "@/assets/Images/03-01.jpg";
import { cn } from "@/lib/utils";
import awards from "@/assets/svgs/slider/awards.svg";
import profile from "@/assets/svgs/slider/profile.svg";
import graph from "@/assets/svgs/slider/graph.svg";

const carouselData = [
  {
    title: "Asset Owners",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum",
    icon: profile, // Replace with actual icon component or image
    image: one_one,
  },
  {
    title: "Asset Managers",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum",
    icon: awards, // Replace with actual icon component or image
    image: one_two,
  },
  {
    title: "Asset Servicers",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum",
    icon: graph, // Replace with actual icon component or image
    image: one_three,
  },
];

const AssetServicersComponent: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slideVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <div className="flex h-[80vh] text-white relative p-4">
      {carouselData.map((item, index) => (
        <motion.div
          key={index}
          className={cn(
            "relative cursor-pointer overflow-hidden rounded-xl", // Changed from rounded-3xl to rounded-xl
            index === activeIndex ? "shadow-[4px_0_20px_rgba(0,0,0,0.3)]" : ""
          )}
          style={{
            flex: index === activeIndex ? 2 : 1,
            marginLeft: index === 0 ? "0" : "-3rem",
            zIndex: index === activeIndex ? 40 : 30 - index * 10,
          }}
          animate={{
            flex: index === activeIndex ? 2 : 1,
            marginLeft: index === 0 ? "0" : "-3rem",
            zIndex: index === activeIndex ? 40 : 30 - index * 10,
          }}
          transition={{
            duration: 0.8,
            ease: [0.43, 0.13, 0.23, 0.96],
          }}
          onClick={() => setActiveIndex(index)}
        >
          {/* Image and gradient overlay */}
          <div className="absolute inset-0 rounded-lg overflow-hidden">
            {" "}
            <Image
              src={item.image}
              alt={item.title}
              layout="fill"
              objectFit="cover"
              className="object-center transition-all duration-800 ease-in-out"
              priority={index === activeIndex}
            />
            <div
              className={cn(
                "absolute inset-0 bg-gradient-to-t",
                index % 2 === 0
                  ? "from-emerald-950 via-emerald-950/95 to-transparent"
                  : "from-emerald-900 via-emerald-900/95  to-transparent "
              )}
            />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={`content-${index}-${activeIndex}`}
              className="absolute inset-0 flex flex-col justify-end p-8 md:p-10 lg:p-12"
              variants={slideVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className={cn(
                  "font-bold text-left transition-all duration-800 ease-in-out",
                  index === activeIndex ? "text-3xl" : "text-xl pl-2"
                )}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={item.icon}
                  alt={`${item.title} icon`}
                  width={index === activeIndex ? 70 : 30}
                />
              </motion.div>

              <h2
                className={cn(
                  "font-bold text-left transition-all duration-800 ease-in-out",
                  index === activeIndex ? "text-3xl" : "text-xl pl-2"
                )}
              >
                {item.title}
              </h2>

              {index === activeIndex && (
                <>
                  <motion.p
                    className="mb-6 text-xs"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    {item.description}
                  </motion.p>
                  <div className="flex gap-4">
                    <motion.button
                      className={cn(
                        "bg-orange-600 text-black font-semibold text-sm px-6 py-2 rounded-full flex items-center",
                        "hover:bg-teal-50 transition-colors duration-200"
                      )}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Call to Action
                    </motion.button>
                    <motion.button
                      className={cn(
                        " text-white px-3 py-2 rounded-full flex items-center",
                        " transition-colors duration-200"
                      )}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Learn More <ChevronRight className="ml-2" />
                    </motion.button>
                  </div>
                </>
              )}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
};

export default AssetServicersComponent;
