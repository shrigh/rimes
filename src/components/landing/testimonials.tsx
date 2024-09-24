import React from "react";
import img1 from "@/assets/Images/05-01.jpg";
import img2 from "@/assets/Images/06-01.jpg";
import TestimonialCarousel from "@/components/ui/TestimonialCarosel";

interface Testimonial {
  content: string;
  author: string;
  position: string;
  company: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    content:
      "Implementing this solution has revolutionized our workflow. The intuitive interface and powerful features have significantly boosted our team's productivity. It's rare to find a tool that delivers on all its promises, but this one exceeds expectations.",
    author: "Sarah Johnson",
    position: "CTO",
    company: "TechInnovate",
    image: img1.src,
  },
  {
    content:
      "As a small business owner, I was skeptical about adopting new software. However, this platform has been a game-changer for us. It's user-friendly, cost-effective, and has streamlined our operations in ways I never thought possible. I highly recommend it to any growing business.",
    author: "Michael Chen",
    position: "Founder",
    company: "GreenStart Solutions",
    image: img2.src,
  },
  // Add more testimonials here
];

function Testimonials() {
  return <TestimonialCarousel testimonials={testimonials} />;
}

export default Testimonials;
