import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

interface FooterProps {
  contactInfo?: {
    email: string;
    phone: string;
    address: string;
  };
  socialLinks?: {
    facebook: string;
    twitter: string;
    instagram: string;
  };
  quickLinks?: Array<{
    label: string;
    href: string;
  }>;
}

const Footer = ({
  contactInfo = {
    email: "info@schoolname.edu",
    phone: "(555) 123-4567",
    address: "123 Education Street, City, State 12345",
  },
  socialLinks = {
    facebook: "https://facebook.com",
    twitter: "https://twitter.com",
    instagram: "https://instagram.com",
  },
  quickLinks = [
    { label: "Academics", href: "/academics" },
    { label: "Admissions", href: "/admissions" },
    { label: "Calendar", href: "/calendar" },
    { label: "News", href: "/news" },
    { label: "Contact", href: "/contact" },
  ],
}: FooterProps) => {
  return (
    <footer className="w-full bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="flex items-center space-x-2">
              <Mail className="h-5 w-5" />
              <a
                href={`mailto:${contactInfo.email}`}
                className="hover:text-gray-300"
              >
                {contactInfo.email}
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="h-5 w-5" />
              <a
                href={`tel:${contactInfo.phone}`}
                className="hover:text-gray-300"
              >
                {contactInfo.phone}
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-5 w-5" />
              <span>{contactInfo.address}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <nav className="space-y-2">
              {quickLinks.map((link, index) => (
                <div key={index}>
                  <a
                    href={link.href}
                    className="block hover:text-gray-300 transition-colors"
                  >
                    {link.label}
                  </a>
                </div>
              ))}
            </nav>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="hover:text-gray-300"
              >
                <a
                  href={socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="hover:text-gray-300"
              >
                <a
                  href={socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="hover:text-gray-300"
              >
                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-gray-700" />

        <div className="text-center text-sm text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} St. Xavier's Global School. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
