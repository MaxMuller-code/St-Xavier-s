import React from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import MissionSection from "./MissionSection";
import TakeActionSection from "./TakeActionSection";
import StatisticsSection from "./StatisticsSection";
import LearningEnvironmentSection from "./LearningEnvironmentSection";
import IntegrationSection from "./IntegrationSection";
import PathwaysSection from "./PathwaysSection";
import SocialSection from "./SocialSection";
import Footer from "./Footer";

interface HomePageProps {
  onNavigate?: (path: string) => void;
  heroContent?: {
    logo?: string;
    missionStatement?: string;
    bannerImage?: string;
  };
  quickAccessCards?: Array<{
    title: string;
    description: string;
    type: "event" | "announcement" | "deadline";
    date?: string;
    actionLabel?: string;
    onAction?: () => void;
  }>;
  footerContent?: {
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
  };
}

const HomePage = ({
  onNavigate = (path: string) => console.log(`Navigating to ${path}`),
  heroContent,
  quickAccessCards,
  footerContent,
}: HomePageProps) => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header onNavigate={onNavigate} />

      {/* Add margin-top to account for fixed header */}
      <main className="flex-grow mt-20">
        <HeroSection
          logo={heroContent?.logo}
          missionStatement={heroContent?.missionStatement}
          bannerImage={heroContent?.bannerImage}
        />

        <StatisticsSection />

        <LearningEnvironmentSection />

        <IntegrationSection />

        <PathwaysSection />

        <SocialSection />

        <MissionSection />
        <TakeActionSection />
      </main>

      <Footer
        contactInfo={footerContent?.contactInfo}
        socialLinks={footerContent?.socialLinks}
        quickLinks={footerContent?.quickLinks}
      />
    </div>
  );
};

export default HomePage;
