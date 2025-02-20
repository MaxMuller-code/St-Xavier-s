import React from "react";
import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";

interface NavigationMenuProps {
  items: Array<{
    title: string;
    href: string;
    icon?: React.ElementType;
  }>;
  onNavigate?: (path: string) => void;
}

const NavigationMenu = ({
  items = [],
  onNavigate = (path: string) => console.log(`Navigating to ${path}`),
}: NavigationMenuProps) => {
  return (
    <nav className="flex items-center space-x-6">
      {items.map((item) => (
        <Button
          key={item.href}
          variant="ghost"
          className="flex items-center space-x-2 text-base font-medium text-gray-700 hover:text-primary hover:scale-105 transition-all"
          onClick={() => onNavigate(item.href)}
        >
          {item.icon &&
            React.createElement(item.icon, { className: "h-4 w-4" })}
          <span>{item.title}</span>
        </Button>
      ))}
    </nav>
  );
};

export default NavigationMenu;
