"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const FullWidthCTA: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
    receiveUpdates: false,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      receiveUpdates: e.target.checked,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the data to a server
  };

  return (
    <div className="bg-[#143A33] text-white p-8 md:p-20 rounded-lg shadow-lg">
      <div className="flex flex-col md:flex-row">
        <motion.div
          className="md:w-1/2 pr-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4">Full Width CTA</h2>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore.
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Lorem ipsum dolor sit amet, consetetur</li>
            <li>
              Sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
              et dolo aliquyam erat, sed diam voluptua duo.
            </li>
          </ul>
          <motion.button
            className="bg-orange-500 text-black px-8 font-semibold py-2 rounded-full hover:bg-orange-600 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Call to Action
          </motion.button>
        </motion.div>
        <motion.form
          className="md:w-1/2 mt-8 md:mt-0"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex gap-4 mb-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleInputChange}
              className="w-1/2 p-2 bg-transparent border-b border-green-500 focus:outline-none focus:border-green-300"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleInputChange}
              className="w-1/2 p-2 bg-transparent border-b border-green-500 focus:outline-none focus:border-green-300"
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full p-2 mb-4 bg-transparent border-b border-green-500 focus:outline-none focus:border-green-300"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleInputChange}
            className="w-full p-2 mb-4 bg-transparent border-b border-green-500 focus:outline-none focus:border-green-300"
          />
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleInputChange}
            className="w-full p-2 mb-4 bg-transparent border-b border-green-500 focus:outline-none focus:border-green-300"
            rows={3}
          />
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              id="receiveUpdates"
              name="receiveUpdates"
              checked={formData.receiveUpdates}
              onChange={handleCheckboxChange}
              className="mr-2"
            />
            <label htmlFor="receiveUpdates" className="text-sm">
              Yes, I&apos;d like to receive future Rimes news, trends, and
              updates. Rimes will never sell or distribute your email to any
              third parties.
            </label>
          </div>
          <div className="text-right">
            <motion.button
              type="submit"
              className="bg-orange-500 text-black px-8 font-semibold py-2 rounded-full hover:bg-orange-600 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Submit
            </motion.button>
          </div>
        </motion.form>
      </div>
    </div>
  );
};

export default FullWidthCTA;
