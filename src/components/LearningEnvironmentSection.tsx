import React from "react";
import { motion } from "framer-motion";

const LearningEnvironmentSection = () => {
  return (
    <section className="relative w-full min-h-screen bg-black overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/playground.png"
          alt="School Playground"
          className="w-full h-full object-cover opacity-80"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-24 grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-2xl font-medium tracking-wider text-white/90 uppercase"
          >
            LEARNING ENVIRONMENT
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-serif text-white leading-tight"
          >
            St. Xavier's, endowed with state-of-the-art facilities, is situated
            in a serene environment deeply connected to both nature and modern
            educational excellence.
          </motion.p>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-lg text-white/80 leading-relaxed"
        >
          On our expansive campus, buildings and classrooms are intentionally
          and systematically designed based on research in how students learn
          and how our brains develop. The curriculum is woven into the design of
          spaces through the use of art and artifacts, which act as a visual and
          experiential text and are a core component of students' educational
          experiences at St. Xavier's.
        </motion.p>
      </div>
    </section>
  );
};

export default LearningEnvironmentSection;
