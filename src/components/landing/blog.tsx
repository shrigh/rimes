"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import people from "@/assets/svgs/blogs/people.png";
import man_with_tab from "@/assets/svgs/blogs/man_with_tab.png";
import solar from "@/assets/svgs/blogs/solar.png";

interface Resource {
  type: "press" | "blog";
  title: string;
  description: string;
  imageUrl: string;
}

const resources: Resource[] = [
  {
    type: "press",
    title: "Lorem ipsum dolor sit amet, on diam etur sadipscing elitr",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod",
    imageUrl: man_with_tab.src,
  },
  {
    type: "blog",
    title: "Lorem ipsum dolor sit amet",
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr",
    imageUrl: solar.src,
  },
  {
    type: "press",
    title: "Lorem ipsum dolor sit amet, on diam etur sadipscing elitr",
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr",
    imageUrl: solar.src,
  },
];

const Blogs = () => {
  return (
    <div className="p-8 bg-white">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">
        H2 Featured Resources
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <motion.div
          className="col-span-1 lg:col-span-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image src={people} height={300} alt="people" />
          <div className="mt-4">
            <span className="text-sm text-green-600 font-semibold">
              Category
            </span>
            <h3 className="text-lg font-bold text-gray-800 mt-2">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod.
            </h3>
            <p className="text-gray-600 mt-2 text-sm">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam.
            </p>
          </div>
        </motion.div>
        <div className="flex flex-col col-span-1 md:col-span-2 gap-4">
          {resources.map((resource, index) => (
            <motion.div
              key={index}
              className="grid items-start space-x-4 grid-cols-2 gap-2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Image
                src={resource.imageUrl}
                alt={resource.title}
                height={100}
                width={230}
              />

              <div>
                <span className="text-xs text-green-600 font-semibold">
                  {resource.type === "press" ? "Press Release" : "Blog"}
                </span>
                <h4 className="text-sm font-bold text-gray-800 mt-1">
                  {resource.title}
                </h4>
                <p className="text-xs text-gray-600 mt-1">
                  {resource.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
