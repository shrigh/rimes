"use client";
import React, { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import one_one from "@/assets/Images/01-01.jpg";
import one_two from "@/assets/Images/02-01.jpg";
import one_three from "@/assets/Images/03-01.jpg";
import Image from "next/image";

const SolutionCard = ({ image, text }: { image: string; text: string }) => (
  <Card className="flex overflow-hidden h-44 rounded-lg shadow-md">
    <Image
      src={image}
      alt="Solution"
      height={50}
      width={50}
      className="w-1/3 object-cover"
    />
    <div className="w-2/3 flex flex-col p-4">
      <CardContent className="flex-grow">
        <p className="text-sm text-gray-600">{text}</p>
      </CardContent>
      <CardFooter className="p-0 mt-2">
        <Button variant="link" className="p-0 text-teal-600 font-semibold">
          Learn More <span className="ml-1">→</span>
        </Button>
      </CardFooter>
    </div>
  </Card>
);

const TabbedSolutions = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    "Data Partners",
    "Benchmarks  & Index Solutions",
    "Enterprise Data Management",
    "Data Distribution and Warehousing Solutions",
    "Investment Management Solutions",
    "Asset Servicing Solutions",
  ];
  const solutions = [
    {
      image: one_one,
      text: "Lorem ipsum dolor sit amet, consetetur lorem ips sadipscing elitr, sed diam dolor nonumy eirmod. Lorem ipsum dolor.",
    },
    {
      image: one_two,
      text: "Lorem ipsum dolor sit amet, consetetur lorem ips sadipscing elitr, sed diam dolor nonumy eirmod. Lorem ipsum dolor.",
    },
    {
      image: one_three,
      text: "Lorem ipsum dolor sit amet, consetetur lorem ips sadipscing elitr, sed diam dolor nonumy eirmod. Lorem ipsum dolor.",
    },
    {
      image: one_one,
      text: "Lorem ipsum dolor sit amet, consetetur lorem ips sadipscing elitr, sed diam dolor nonumy eirmod. Lorem ipsum dolor.",
    },
  ];

  return (
    <div className="p-6 bg-white">
      <h2 className="text-3xl font-bold mb-6 text-center text-teal-800">
        H2 Tabbed Solutions
      </h2>
      <div className="flex mb-6 border-b">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`px-4 py-2 ${
              index === activeTab
                ? "text-orange-400 border-b-2 border-orange-400 font-semibold"
                : "text-gray-600"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {solutions.map((solution, index) => (
          <SolutionCard
            key={index}
            image={solution.image.src}
            text={solution.text}
          />
        ))}
      </div>
    </div>
  );
};

export default TabbedSolutions;
