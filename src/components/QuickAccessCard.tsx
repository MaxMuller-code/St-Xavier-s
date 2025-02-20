import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { CalendarDays, Bell, Clock } from "lucide-react";

interface QuickAccessCardProps {
  title?: string;
  description?: string;
  type?: "event" | "announcement" | "deadline";
  date?: string;
  actionLabel?: string;
  onAction?: () => void;
}

const QuickAccessCard = ({
  title = "Sample Title",
  description = "This is a sample description for the quick access card.",
  type = "event",
  date = "Upcoming",
  actionLabel = "Learn More",
  onAction = () => console.log("Card action clicked"),
}: QuickAccessCardProps) => {
  const getIcon = () => {
    switch (type) {
      case "event":
        return <CalendarDays className="h-5 w-5" />;
      case "announcement":
        return <Bell className="h-5 w-5" />;
      case "deadline":
        return <Clock className="h-5 w-5" />;
      default:
        return <CalendarDays className="h-5 w-5" />;
    }
  };

  return (
    <Card className="w-[380px] h-[300px] bg-white flex flex-col justify-between hover:shadow-lg transition-shadow duration-200">
      <CardHeader>
        <div className="flex items-center gap-2">
          {getIcon()}
          <CardTitle className="text-lg font-semibold">{title}</CardTitle>
        </div>
        <CardDescription className="text-sm text-gray-500">
          {date}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700">{description}</p>
      </CardContent>
      <CardFooter>
        <Button onClick={onAction} className="w-full" variant="outline">
          {actionLabel}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default QuickAccessCard;
