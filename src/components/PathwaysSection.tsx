import React from "react";
import { motion } from "framer-motion";

const PathwaysSection = () => {
  // Generate multiple curved paths
  const paths = [
    "M0,100 C150,50 300,150 450,100",
    "M0,150 C200,200 300,50 450,150",
    "M0,200 C100,100 350,250 450,200",
    "M0,50 C250,150 350,0 450,50",
  ];

  const colors = [
    "#FF6B6B",
    "#4ECDC4",
    "#45B7D1",
    "#96CEB4",
    "#FFEEAD",
    "#FFD93D",
  ];

  return (
    <section className="relative w-full min-h-screen bg-white py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="relative z-10 space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-gray-600 uppercase tracking-wider font-medium"
            >
              LEARNING PATHWAYS
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight text-gray-800"
            >
              Personalized Learning Journeys
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-lg text-gray-600 leading-relaxed"
            >
              Every student's educational journey is unique. Our innovative
              curriculum adapts to individual learning styles and interests.
            </motion.p>
          </div>

          {/* Right Content - Animated Paths */}
          <div className="relative h-[600px]">
            <svg
              viewBox="0 0 450 300"
              className="w-full h-full"
              style={{ filter: "blur(0.5px)" }}
            >
              {paths.map((path, pathIndex) => (
                <g key={pathIndex}>
                  {/* Base path */}
                  <motion.path
                    d={path}
                    fill="none"
                    stroke={colors[pathIndex % colors.length]}
                    strokeWidth="2"
                    strokeOpacity="0.3"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{
                      duration: 1.5,
                      delay: pathIndex * 0.2,
                      ease: "easeInOut",
                    }}
                    viewport={{ once: true }}
                  />
                  {/* Animated dots */}
                  {[...Array(3)].map((_, i) => (
                    <motion.circle
                      key={i}
                      r="4"
                      fill={colors[pathIndex % colors.length]}
                      initial={{ opacity: 0.8 }}
                      animate={{
                        opacity: [0.8, 0.3, 0.8],
                        pathOffset: [0, 1],
                      }}
                      transition={{
                        duration: 4,
                        delay: 1.5 + i * 0.5 + pathIndex * 0.2,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      <animateMotion
                        dur="4s"
                        repeatCount="indefinite"
                        path={path}
                        begin={`${1.5 + i * 0.5 + pathIndex * 0.2}s`}
                      />
                    </motion.circle>
                  ))}
                </g>
              ))}
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PathwaysSection;
