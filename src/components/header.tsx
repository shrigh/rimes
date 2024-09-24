import React from "react";
import Link from "next/link";
import { Search, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import rimes from "@/assets/Images/logo.png";

const Header: React.FC = () => {
  return (
    <header className="bg-white text-gray-900">
      <div className="bg-[rgb(21,51,44)] ">
        <div className="py-2 flex flex-row-reverse container mx-auto max-w-screen-lg ">
          <div className="flex items-center space-x-4">
            <Search className="text-orange-400 w-5 h-5 mr-8" />
            <Linkedin className="text-black p-1 rounded w-5 h-5 bg-white" />
            <Twitter className="text-black p-1 rounded w-5 h-5 bg-white" />
            <button className="text-xs bg-orange-400 text-black px-4 py-2 rounded-full">
              Login
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-screen-lg">
        <div className="flex justify-between items-center py-3">
          <div className="  ">
            <Image
              className=" aspect-[16/4] object-contain"
              src={rimes}
              alt="Rimes"
              width={120}
              height={10}
            />
          </div>

          <nav className="hidden md:flex space-x-6 items-center">
            {[
              "Who We Serve",
              "Solutions",
              "Partners",
              "Insights",
              "Why Rimes",
            ].map((item) => (
              <Link
                key={item}
                href="#"
                className="hover:text-orange-400 text-sm"
              >
                {item}
              </Link>
            ))}
            <Link
              href="#"
              className=" text-sm text-black border border-orange-400 rounded-full px-4 py-1"
            >
              Careers
            </Link>
            <button className="text-sm bg-orange-400 text-black px-4 py-2 rounded-full hidden md:block">
              Contact
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
