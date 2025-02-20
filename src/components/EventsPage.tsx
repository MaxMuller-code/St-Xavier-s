import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Button } from "./ui/button";
import { Calendar, Clock, MapPin } from "lucide-react";

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  imageUrl: string;
}

interface EventsPageProps {
  events?: Event[];
  onNavigate?: (path: string) => void;
}

const EventsPage = ({
  events = [
    {
      id: "1",
      title: "Annual Sports Day",
      date: "June 15, 2024",
      time: "9:00 AM - 4:00 PM",
      location: "School Sports Complex",
      description:
        "Join us for a day of athletic competitions and team sports.",
      imageUrl: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211",
    },
    {
      id: "2",
      title: "Science Fair",
      date: "July 10, 2024",
      time: "10:00 AM - 2:00 PM",
      location: "School Auditorium",
      description: "Students showcase their innovative science projects.",
      imageUrl: "https://images.unsplash.com/photo-1564982648875-5379c4c3e904",
    },
    {
      id: "3",
      title: "Cultural Festival",
      date: "August 5, 2024",
      time: "5:00 PM - 9:00 PM",
      location: "School Amphitheater",
      description: "A celebration of diversity through music, dance, and art.",
      imageUrl: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819",
    },
  ],
  onNavigate = (path: string) => console.log(`Navigating to ${path}`),
}: EventsPageProps) => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header onNavigate={onNavigate} />

      <main className="flex-grow mt-20 container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Upcoming Events</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={event.imageUrl}
                alt={event.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{event.location}</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <Button className="w-full">Register Now</Button>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default EventsPage;
