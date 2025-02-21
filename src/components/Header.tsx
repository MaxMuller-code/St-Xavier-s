import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import {
  School,
  Mail,
  Home,
  Building2,
  Info,
  BookOpen,
  Activity,
  GraduationCap,
  Users,
  Calendar,
  Newspaper,
  ChevronDown,
} from "lucide-react";

interface HeaderProps {
  onNavigate?: (path: string) => void;
}

const navVariants = {
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: -20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
};

const Header = ({
  onNavigate = () => console.log("Navigation clicked"),
}: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navigationItems = [
    { title: "Home", href: "/", icon: Home },
    { title: "Campus", href: "/campus", icon: Building2 },
    { title: "About", href: "/about", icon: Info },
    { title: "Streams", href: "/streams", icon: BookOpen },
    { title: "Activities", href: "/activities", icon: Activity },
  ];

  const academicsDropdown = [
    { title: "Programs", href: "/programs", icon: GraduationCap },
    { title: "Faculty", href: "/faculty", icon: Users },
    { title: "Events", href: "/events", icon: Calendar },
    { title: "News", href: "/news", icon: Newspaper },
  ];

  return (
    <motion.header
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className="w-full h-20 bg-white/95 backdrop-blur-md border-b border-gray-200 fixed top-0 left-0 z-50 shadow-sm"
    >
      <div className="container mx-auto h-full px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img
            src="/pixelcut-export.png"
            alt="St. Xavier's Global School Logo"
            className="h-16 w-16 object-contain"
          />
          <div className="flex flex-col">
            <span className="text-xl font-bold text-primary">ST. XAVIER'S</span>
            <span className="text-sm font-medium text-gray-600">
              GLOBAL SCHOOL
            </span>
          </div>
        </div>

        <nav className="flex items-center space-x-6">
          {navigationItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                onNavigate(item.href);
              }}
              className="flex items-center space-x-2 text-base font-medium text-gray-700 hover:text-primary hover:scale-105 transition-all"
            >
              {React.createElement(item.icon, { className: "h-4 w-4" })}
              <span>{item.title}</span>
            </a>
          ))}

          <div className="relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center space-x-2 text-base font-medium text-gray-700 hover:text-primary hover:scale-105 transition-all"
            >
              <GraduationCap className="h-4 w-4" />
              <span>Academics</span>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown className="h-4 w-4" />
              </motion.div>
            </button>
            {isOpen && (
              <div
                ref={dropdownRef}
                className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 transition-all"
              >
                {academicsDropdown.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(item.href);
                    }}
                    className="flex items-center space-x-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                  >
                    {React.createElement(item.icon, { className: "h-4 w-4" })}
                    <span>{item.title}</span>
                  </a>
                ))}
              </div>
            )}
          </div>
        </nav>

        <Button
          onClick={() => onNavigate("/contact")}
          className="ml-4 bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
        >
          <Mail className="h-4 w-4" />
          Contact Us
        </Button>
      </div>
    </motion.header>
  );
};

export default Header;
