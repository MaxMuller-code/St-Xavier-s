import React from "react";
import QuickAccessCard from "./QuickAccessCard";

interface QuickAccessSectionProps {
  cards?: Array<{
    title: string;
    description: string;
    type: "event" | "announcement" | "deadline";
    date?: string;
    actionLabel?: string;
    onAction?: () => void;
  }>;
}

const QuickAccessSection = ({ cards }: QuickAccessSectionProps) => {
  const defaultCards = [
    {
      title: "Spring Concert",
      description:
        "Join us for an evening of musical performances by our talented students.",
      type: "event",
      date: "May 15, 2024",
      actionLabel: "Get Tickets",
    },
    {
      title: "Important Announcement",
      description:
        "School will be implementing new safety protocols starting next week.",
      type: "announcement",
      date: "Effective Immediately",
      actionLabel: "Read More",
    },
    {
      title: "Course Registration",
      description:
        "Deadline for fall semester course registration is approaching.",
      type: "deadline",
      date: "Due April 30, 2024",
      actionLabel: "Register Now",
    },
  ];

  const displayCards = cards || defaultCards;

  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Quick Access</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {displayCards.map((card, index) => (
            <QuickAccessCard
              key={index}
              title={card.title}
              description={card.description}
              type={card.type}
              date={card.date}
              actionLabel={card.actionLabel}
              onAction={card.onAction}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickAccessSection;
