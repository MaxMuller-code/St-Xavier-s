import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

const IntegrationSection = () => {
  return (
    <section className="relative w-full min-h-screen bg-white py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center relative">
          {/* Left Content */}
          <div className="space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-gray-600 uppercase tracking-wider font-medium"
            >
              INTEGRATION
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight text-gray-800"
            >
              Interdisciplinarity and Integration Are Central to the St.
              Xavier's Model
            </motion.h2>
          </div>

          {/* Right Content with Circles */}
          <div className="relative h-[500px]">
            {/* Animated Circles */}
            <div className="absolute inset-0 flex items-center justify-center">
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{
                    opacity: 0,
                    scale: 0.5,
                    x: Math.cos((i * Math.PI) / 4) * 100,
                    y: Math.sin((i * Math.PI) / 4) * 100,
                  }}
                  animate={{
                    opacity: [0, 0.7, 0.7],
                    scale: [0.5, 1, 1],
                    x: [
                      Math.cos((i * Math.PI) / 4) * 100,
                      Math.cos((i * Math.PI) / 4) * 200,
                      Math.cos((i * Math.PI) / 4) * 200,
                    ],
                    y: [
                      Math.sin((i * Math.PI) / 4) * 100,
                      Math.sin((i * Math.PI) / 4) * 200,
                      Math.sin((i * Math.PI) / 4) * 200,
                    ],
                  }}
                  transition={{
                    duration: 1,
                    delay: i * 0.1,
                    times: [0, 0.3, 1],
                  }}
                  whileInView={{
                    rotate: 360,
                  }}
                  viewport={{ once: false }}
                  transition={{
                    rotate: {
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                      delay: 1,
                    },
                  }}
                  viewport={{ once: true }}
                  className={`absolute w-48 h-48 rounded-full mix-blend-multiply`}
                  style={{
                    backgroundColor: [
                      "#E6F3F7",
                      "#BEE1EA",
                      "#97CFDD",
                      "#D4E7C5",
                      "#E1EFD8",
                      "#F7E6E6",
                      "#F4D1D1",
                      "#F2BCBC",
                    ][i],
                  }}
                />
              ))}
            </div>

            {/* Text Overlay */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="absolute inset-0 flex items-center justify-center px-8 text-center"
            >
              <p className="text-lg text-gray-700 max-w-md">
                Students integrate concepts, theories, and methods from multiple
                disciplines, deepening their understanding of a topic. Students
                acquire discipline-specific understandings and produce a
                synthesis across disciplines that allows them to explain
                concepts and solve problems of greater complexity.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          viewport={{ once: true }}
          className="mt-12 flex justify-end"
        >
          <Button
            className="bg-[#C17F1E] hover:bg-[#A66D19] text-white px-8 py-6 text-lg"
            onClick={() => console.log("Explore clicked")}
          >
            Explore the St. Xavier's Spiral Curriculum
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default IntegrationSection;
