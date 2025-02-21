import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { Users, GraduationCap, School, UserPlus } from "lucide-react";

interface StatItem {
  icon: React.ElementType;
  value: number;
  label: string;
  suffix?: string;
  side: "left" | "right";
}

interface StatisticsSectionProps {
  stats?: StatItem[];
}

const StatisticsSection = ({
  stats = [
    { icon: Users, value: 2500, label: "Students", suffix: "+", side: "left" },
    { icon: School, value: 15, label: "Students per Class", side: "right" },
    {
      icon: UserPlus,
      value: 12,
      label: "Student to Teacher Ratio",
      suffix: ":1",
      side: "left",
    },
    { icon: GraduationCap, value: 45, label: "Classes", side: "right" },
  ],
}: StatisticsSectionProps) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 flex justify-center">
        <div className="relative w-full max-w-6xl">
          {/* Vertical Progress Bar */}
          <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-1">
            <motion.div
              initial={{ height: 0 }}
              animate={isInView ? { height: "100%" } : { height: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="w-full bg-primary/20 rounded-full"
            >
              <motion.div
                initial={{ height: 0 }}
                animate={isInView ? { height: "100%" } : { height: 0 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="w-full bg-primary rounded-full"
              />
            </motion.div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-y-16 gap-x-24">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{
                  x: stat.side === "left" ? -100 : 100,
                  opacity: 0,
                }}
                animate={
                  isInView
                    ? {
                        x: 0,
                        opacity: 1,
                      }
                    : {
                        x: stat.side === "left" ? -100 : 100,
                        opacity: 0,
                      }
                }
                transition={{
                  duration: 0.8,
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                }}
                className={`flex ${stat.side === "left" ? "justify-end" : "justify-start"} items-center gap-6`}
              >
                <div
                  className={`flex items-center gap-4 ${stat.side === "right" && "flex-row-reverse"}`}
                >
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={
                      isInView
                        ? { scale: 1, opacity: 1 }
                        : { scale: 0, opacity: 0 }
                    }
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.2 }}
                    className="p-4 rounded-full bg-primary/10"
                  >
                    {React.createElement(stat.icon, {
                      className: "w-8 h-8 text-primary",
                    })}
                  </motion.div>
                  <div
                    className={`text-center ${stat.side === "right" ? "text-left" : "text-right"}`}
                  >
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ duration: 0.5, delay: 1 + index * 0.2 }}
                      className="text-3xl font-bold text-gray-900"
                    >
                      {stat.value}
                      {stat.suffix}
                    </motion.div>
                    <p className="text-gray-600 font-medium mt-1">
                      {stat.label}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
