import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { MapPin, UserPlus, Gift } from "lucide-react";

const TakeActionSection = () => {
  const actions = [
    {
      title: "Visit",
      description:
        "Schedule a campus tour and experience our vibrant community firsthand.",
      icon: MapPin,
      href: "/visit",
      delay: 0.2,
    },
    {
      title: "Apply",
      description:
        "Begin your journey at St. Xavier's. Apply for admission today.",
      icon: UserPlus,
      href: "/apply",
      delay: 0.3,
    },
    {
      title: "Give",
      description:
        "Support our mission and help shape the future of education.",
      icon: Gift,
      href: "/give",
      delay: 0.4,
    },
  ];

  return (
    <section className="w-full py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl font-serif text-gray-800"
            >
              Take Action
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {actions.map((action, index) => (
              <motion.div
                key={action.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: action.delay }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="bg-white rounded-lg shadow-lg p-8 space-y-4 transition-transform duration-300 group-hover:-translate-y-2">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    {React.createElement(action.icon, {
                      className: "w-6 h-6 text-primary",
                    })}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {action.title}
                  </h3>
                  <p className="text-gray-600">{action.description}</p>
                  <Button
                    className="w-full mt-4 bg-[#C17F1E] hover:bg-[#A66D19]"
                    onClick={() => (window.location.href = action.href)}
                  >
                    {action.title} Now
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TakeActionSection;
