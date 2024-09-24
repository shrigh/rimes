"use client";
import React from "react";
import { motion } from "framer-motion";
import Header from "@/components/header";
import MainContent from "@/components/landing/main-content";
import AssetServicersComponent from "@/components/landing/sliding";
import TabbedSolutions from "@/components/landing/solutions-tabs";
// import { AppleCardsCarouselDemo } from "@/components/landing/carousel";
import AwardCarousel from "@/components/landing/award-carousel";
import StatsDashboard from "@/components/landing/stat-grid";
import PartnerGrid from "@/components/landing/partner-grid";
import Blogs from "@/components/landing/blog";
import FullWidthCTA from "@/components/landing/full-width-cta";
import RimesFooter from "@/components/landing/footer";
import Testimonials from "@/components/landing/testimonials";

const RimesLandingPage: React.FC = () => {
  return (
    <motion.div
      className="snap-y snap-mandatory overflow-y-scroll"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-white min-h-screen text-white pb-20">
        <motion.div className="snap-start">
          <Header />
          <MainContent />
        </motion.div>

        <motion.div className="snap-start mt-32 p-10">
          <AssetServicersComponent />
        </motion.div>

        <motion.div className="snap-start mt-6 p-24 pb-10">
          <TabbedSolutions />
        </motion.div>

        <motion.div className="snap-start p-20 py-10 pb-20">
          <Testimonials />
        </motion.div>

        <motion.div className="snap-start p-20 py-0 flex justify-center">
          <AwardCarousel />
        </motion.div>

        <motion.div className="snap-start p-20 py-10 flex justify-center">
          <StatsDashboard />
        </motion.div>

        <motion.div className="snap-start p-20 py-10 flex justify-center">
          <PartnerGrid />
        </motion.div>

        <motion.div className="snap-start p-20 py-10 flex justify-center">
          <Blogs />
        </motion.div>

        <motion.div className="snap-start p-20 py-10 flex justify-center">
          <FullWidthCTA />
        </motion.div>
      </div>

      <motion.div className="snap-start p-20 py-10 flex justify-center border-t-2 border-black bg-white">
        <RimesFooter />
      </motion.div>
    </motion.div>
  );
};

export default RimesLandingPage;
