import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Button } from "./ui/button";
import { BookOpen, Users, Clock, Trophy } from "lucide-react";

interface Stream {
  id: string;
  title: string;
  description: string;
  subjects: string[];
  features: string[];
  imageUrl: string;
}

interface StreamsPageProps {
  streams?: Stream[];
  onNavigate?: (path: string) => void;
}

const StreamsPage = ({
  streams = [
    {
      id: "science",
      title: "Science Stream",
      description: "Explore the world of scientific discovery and innovation.",
      subjects: [
        "Physics",
        "Chemistry",
        "Biology",
        "Mathematics",
        "Computer Science",
      ],
      features: [
        "Well-equipped laboratories",
        "Experienced faculty",
        "Research opportunities",
        "Science exhibitions",
      ],
      imageUrl: "https://images.unsplash.com/photo-1532094349884-543bc11b234d",
    },
    {
      id: "commerce",
      title: "Commerce Stream",
      description: "Develop business acumen and financial expertise.",
      subjects: [
        "Accountancy",
        "Business Studies",
        "Economics",
        "Mathematics",
        "Marketing",
      ],
      features: [
        "Business case studies",
        "Financial literacy programs",
        "Entrepreneurship workshops",
        "Industry visits",
      ],
      imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
    },
    {
      id: "humanities",
      title: "Humanities Stream",
      description: "Understand society, culture, and human behavior.",
      subjects: [
        "History",
        "Political Science",
        "Psychology",
        "Sociology",
        "Literature",
      ],
      features: [
        "Cultural programs",
        "Social research projects",
        "Language labs",
        "Creative workshops",
      ],
      imageUrl: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0",
    },
  ],
  onNavigate = (path: string) => console.log(`Navigating to ${path}`),
}: StreamsPageProps) => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header onNavigate={onNavigate} />

      <main className="flex-grow mt-20 container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Academic Streams</h1>

        <div className="space-y-12">
          {streams.map((stream) => (
            <div
              key={stream.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <img
                  src={stream.imageUrl}
                  alt={stream.title}
                  className="w-full h-[400px] object-cover"
                />
                <div className="p-6 flex flex-col justify-between">
                  <div>
                    <h2 className="text-2xl font-bold mb-4">{stream.title}</h2>
                    <p className="text-gray-600 mb-6">{stream.description}</p>

                    <div className="space-y-4">
                      <div>
                        <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                          <BookOpen className="h-5 w-5" />
                          Core Subjects
                        </h3>
                        <ul className="list-disc list-inside text-gray-600">
                          {stream.subjects.map((subject) => (
                            <li key={subject}>{subject}</li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                          <Trophy className="h-5 w-5" />
                          Key Features
                        </h3>
                        <ul className="list-disc list-inside text-gray-600">
                          {stream.features.map((feature) => (
                            <li key={feature}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <Button
                    className="mt-6"
                    onClick={() => onNavigate(`/streams/${stream.id}`)}
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default StreamsPage;
