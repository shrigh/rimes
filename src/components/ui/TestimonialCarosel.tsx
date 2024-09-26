"use client";
import React, { useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence, useInView } from "framer-motion";

interface Testimonial {
  content: string;
  author: string;
  position: string;
  company: string;
  image: string;
}

// Add this slideVariants object before the Testimonials component
const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
};

const TestimonialCarousel: React.FC<{ testimonials: Testimonial[] }> = ({
  testimonials,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.4 });

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    setDirection(1);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
    setDirection(-1);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div ref={ref} className="w-full max-w-screen-lg mx-auto">
      <motion.h2
        className="text-3xl font-bold mb-6 text-center text-[#143A33]"
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        H2 Testimonial Carousel w/Image or Video
      </motion.h2>

      <Card className="p-6 md:p-10">
        <div className="h-[300px] md:h-[350px] overflow-hidden">
          {" "}
          {/* Adjusted height */}
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5 }}
              className="h-full"
            >
              <CardContent className="flex flex-col md:flex-row items-center gap-4 md:gap-6 h-full">
                <div className="flex-1 flex flex-col h-full max-w-[50%]">
                  {" "}
                  {/* Added max-width */}
                  <div className="overflow-y-auto flex-grow mb-4 pr-4">
                    {" "}
                    {/* Added padding-right */}
                    <p className="text-base md:text-lg">
                      {currentTestimonial.content}
                    </p>{" "}
                    {/* Adjusted font size */}
                  </div>
                  <div className="mt-auto pb-2 md:pb-4 border-t border-gray-300 pt-2 md:pt-4">
                    {" "}
                    {/* Adjusted padding */}
                    <p className="font-bold">{currentTestimonial.author}</p>
                    <p className="text-xs md:text-sm text-gray-600">
                      {currentTestimonial.position}
                    </p>
                    <p className="text-xs md:text-sm">
                      {currentTestimonial.company}
                    </p>
                  </div>
                </div>
                <div className="relative w-full md:w-1/2">
                  <motion.div
                    className="bg-white rounded-lg shadow-md overflow-hidden"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1 * 0.2 }}
                  >
                    <div className="relative h-64 w-full">
                      <Image
                        width={500}
                        height={500}
                        src={currentTestimonial.image}
                        alt={`Testimonial from ${currentTestimonial.author}`}
                        className="object-cover w-full h-full rounded-lg"
                      />
                      <Button
                        size="icon"
                        className="absolute inset-0 m-auto bg-white/80 hover:bg-white/90"
                      >
                        <Play className="h-6 w-6 text-primary" />
                      </Button>
                    </div>
                  </motion.div>
                </div>
              </CardContent>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="flex justify-between items-center mt-4 pl-4">
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              className="rounded-full border border-orange-500"
              size="icon"
              onClick={prevTestimonial}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <p className="text-sm text-[#277365] text-center w-8">
              {currentIndex + 1}/{testimonials.length}
            </p>
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full border border-orange-500"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default TestimonialCarousel;
