import React from "react";
import { motion } from "framer-motion";

const MissionSection = () => {
  return (
    <section className="w-full py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Mission Content */}
          <div className="space-y-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-gray-900 uppercase tracking-wider"
            >
              MISSION
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-serif leading-relaxed text-gray-800"
            >
              Our mission is to change the way education meets the future; to
              foster interdisciplinary, integrated thinking and innovative
              leadership; to engage fully in the global community; and to
              facilitate lifelong learning.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
