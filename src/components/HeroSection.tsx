import React from "react";
import { Button } from "./ui/button";

interface HeroSectionProps {
  logo?: string;
  missionStatement?: string;
  bannerImage?: string;
  onNavigate?: (path: string) => void;
}

const HeroSection = ({
  logo = "/pixelcut-export.png",
  missionStatement = "Empowering students to achieve excellence through innovative education and character development.",
  bannerImage = "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop",
  onNavigate = (path: string) => console.log(`Navigating to ${path}`),
}: HeroSectionProps) => {
  return (
    <div className="relative w-full h-[600px] bg-gray-100">
      {/* Banner Image */}
      <div className="absolute inset-0">
        <img
          src={bannerImage}
          alt="School Banner"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="mb-8">
          <img
            src={logo}
            alt="School Logo"
            className="w-32 h-32 md:w-40 md:h-40 bg-white p-4 rounded-lg shadow-xl"
          />
        </div>

        {/* Mission Statement */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Welcome to Our School
          </h1>
          <p className="text-lg md:text-xl text-white mb-8">
            {missionStatement}
          </p>
          <div className="flex gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-black hover:bg-gray-100"
              onClick={() => onNavigate("/about")}
            >
              Learn More
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white/20"
              onClick={() => onNavigate("/contact")}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
