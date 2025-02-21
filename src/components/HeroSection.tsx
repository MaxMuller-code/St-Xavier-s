import React from "react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

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
    <div className="relative w-full h-[700px] bg-gray-100 overflow-hidden">
      {/* Banner Image with Parallax Effect */}
      <motion.div
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0"
      >
        <img
          src={bannerImage}
          alt="School Banner"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <img
            src={logo}
            alt="School Logo"
            className="w-48 h-32 md:w-64 md:h-40 bg-white/90 p-4 rounded-lg shadow-xl backdrop-blur-sm object-contain mx-auto flex items-center justify-center"
          />
        </motion.div>

        {/* Text Content */}
        <div className="text-center max-w-4xl mx-auto">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight"
          >
            Welcome to St. Xavier's Global School
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed"
          >
            {missionStatement}
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Button
              size="lg"
              className="bg-white hover:bg-gray-50 text-primary font-semibold text-lg px-10 py-7 rounded-lg transition-colors"
              onClick={() => onNavigate("/about")}
            >
              Discover Our Programs
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="bg-transparent hover:bg-white/10 text-white border-2 border-white text-lg px-10 py-7 rounded-lg transition-colors"
              onClick={() => onNavigate("/contact")}
            >
              Start Your Journey
            </Button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-2"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="w-1 h-1 bg-white/50 rounded-full"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
