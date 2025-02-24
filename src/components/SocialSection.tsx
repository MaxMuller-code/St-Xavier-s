import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Facebook,
  Instagram,
  Youtube,
  ChevronLeft,
  ChevronRight,
  Play,
} from "lucide-react";

const SocialSection = () => {
  const [currentSection, setCurrentSection] = useState<"instagram" | "youtube">(
    "instagram",
  );
  const [currentPage, setCurrentPage] = useState(0);

  const socialLinks = [
    {
      icon: Instagram,
      href: "https://instagram.com",
      color: "bg-gradient-to-tr from-yellow-500 via-pink-600 to-purple-700",
      delay: 0.2,
    },
    {
      icon: Facebook,
      href: "https://facebook.com",
      color: "bg-[#1877F2]",
      delay: 0.4,
    },
    {
      icon: Youtube,
      href: "https://youtube.com",
      color: "bg-[#FF0000]",
      delay: 0.6,
    },
  ];

  const instagramPosts = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&auto=format&fit=crop&q=60",
      caption: "✨🎋 Annual Sports Day at St. Xavier's! 🎊",
      username: "stxaviersschool",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1528697203043-733dafdaa316?w=800&auto=format&fit=crop&q=60",
      caption:
        "✨What a night!✨ Our Cultural Festival was an incredible success...",
      username: "stxaviersschool",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&auto=format&fit=crop&q=60",
      caption: "🎨🎭 St. Xavier's Art Exhibition Opens This Weekend!",
      username: "stxaviersschool",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&auto=format&fit=crop&q=60",
      caption: "🎓 Congratulations to our Class of 2024! Proud moments...",
      username: "stxaviersschool",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&auto=format&fit=crop&q=60",
      caption: "🏆 Our debate team wins the national championship!",
      username: "stxaviersschool",
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&auto=format&fit=crop&q=60",
      caption: "🔬 Science Fair 2024: Innovation at its best!",
      username: "stxaviersschool",
    },
  ];

  const youtubePosts = [
    {
      id: 1,
      thumbnail:
        "https://images.unsplash.com/photo-1588072432836-e10032774350?w=800&auto=format&fit=crop&q=60",
      title: "St. Xavier's Annual Day Celebrations 2024",
      views: "1.2K views",
      date: "2 days ago",
    },
    {
      id: 2,
      thumbnail:
        "https://images.unsplash.com/photo-1511732831640-a201294ac90e?w=800&auto=format&fit=crop&q=60",
      title: "Student Cultural Performance Highlights",
      views: "856 views",
      date: "1 week ago",
    },
    {
      id: 3,
      thumbnail:
        "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&auto=format&fit=crop&q=60",
      title: "Science Exhibition 2024 - Innovation Showcase",
      views: "2.1K views",
      date: "2 weeks ago",
    },
    {
      id: 4,
      thumbnail:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&auto=format&fit=crop&q=60",
      title: "Sports Meet 2024 - Championship Games",
      views: "1.5K views",
      date: "3 weeks ago",
    },
    {
      id: 5,
      thumbnail:
        "https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?w=800&auto=format&fit=crop&q=60",
      title: "A Day in the Life at St. Xavier's",
      views: "3.2K views",
      date: "1 month ago",
    },
    {
      id: 6,
      thumbnail:
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&auto=format&fit=crop&q=60",
      title: "Art & Music Festival Behind the Scenes",
      views: "2.8K views",
      date: "1 month ago",
    },
  ];

  const postsPerPage = 3;
  const currentPosts =
    currentSection === "instagram"
      ? instagramPosts.slice(
          currentPage * postsPerPage,
          (currentPage + 1) * postsPerPage,
        )
      : youtubePosts.slice(
          currentPage * postsPerPage,
          (currentPage + 1) * postsPerPage,
        );

  const totalPages = Math.ceil(
    (currentSection === "instagram"
      ? instagramPosts.length
      : youtubePosts.length) / postsPerPage,
  );

  const nextPage = () => setCurrentPage((prev) => (prev + 1) % totalPages);
  const prevPage = () =>
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);

  return (
    <section className="w-full py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto space-y-16">
          {/* Social Icons */}
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-2xl font-bold text-gray-900 uppercase tracking-wider"
              >
                SOCIAL
              </motion.h3>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-serif text-gray-800"
              >
                Join us on social media
              </motion.h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex justify-center items-center gap-8"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-16 h-16 rounded-full ${social.color} flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200`}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: social.delay,
                    type: "spring",
                    stiffness: 200,
                  }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  {React.createElement(social.icon, {
                    size: 28,
                    className: "text-white",
                  })}
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Feed Toggle */}
          <div className="flex justify-center gap-4">
            <button
              onClick={() => {
                setCurrentSection("instagram");
                setCurrentPage(0);
              }}
              className={`px-6 py-2 rounded-full transition-all ${
                currentSection === "instagram"
                  ? "bg-gradient-to-tr from-yellow-500 via-pink-600 to-purple-700 text-white"
                  : "bg-gray-100 text-gray-600"
              }`}
            >
              <div className="flex items-center gap-2">
                <Instagram className="w-5 h-5" />
                <span>Instagram</span>
              </div>
            </button>
            <button
              onClick={() => {
                setCurrentSection("youtube");
                setCurrentPage(0);
              }}
              className={`px-6 py-2 rounded-full transition-all ${
                currentSection === "youtube"
                  ? "bg-[#FF0000] text-white"
                  : "bg-gray-100 text-gray-600"
              }`}
            >
              <div className="flex items-center gap-2">
                <Youtube className="w-5 h-5" />
                <span>YouTube</span>
              </div>
            </button>
          </div>

          {/* Feed Content */}
          <div className="space-y-8">
            <div className="relative">
              {/* Navigation Arrows */}
              <button
                onClick={prevPage}
                className="absolute -left-12 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors z-10"
                aria-label="Previous page"
              >
                <ChevronLeft className="w-6 h-6 text-gray-600" />
              </button>

              <div className="overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${currentSection}-${currentPage}`}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.3 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6"
                  >
                    {currentSection === "instagram"
                      ? // Instagram Posts
                        currentPosts.map((post: any, index) => (
                          <motion.div
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="bg-white border border-gray-200 rounded-lg overflow-hidden"
                          >
                            <div className="aspect-square relative overflow-hidden">
                              <img
                                src={post.image}
                                alt={post.caption}
                                className="w-full h-full object-cover"
                              />
                              <button className="absolute top-3 right-3 text-gray-500 hover:text-gray-700">
                                <svg
                                  className="w-6 h-6"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                  />
                                </svg>
                              </button>
                            </div>
                            <div className="p-4 space-y-2">
                              <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full overflow-hidden bg-white">
                                  <img
                                    src="/pixelcut-export.png"
                                    alt="School logo"
                                    className="w-full h-full object-contain"
                                  />
                                </div>
                                <span className="font-medium text-sm">
                                  {post.username}
                                </span>
                              </div>
                              <p className="text-sm text-gray-600">
                                {post.caption}
                              </p>
                              <button className="text-gray-400 text-sm hover:text-gray-600">
                                Read more
                              </button>
                            </div>
                          </motion.div>
                        ))
                      : // YouTube Posts
                        currentPosts.map((post: any, index) => (
                          <motion.div
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="bg-white border border-gray-200 rounded-lg overflow-hidden"
                          >
                            <div className="aspect-video relative overflow-hidden group cursor-pointer">
                              <img
                                src={post.thumbnail}
                                alt={post.title}
                                className="w-full h-full object-cover"
                              />
                              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <Play
                                  className="w-12 h-12 text-white"
                                  fill="white"
                                />
                              </div>
                            </div>
                            <div className="p-4 space-y-2">
                              <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full overflow-hidden bg-white">
                                  <img
                                    src="/pixelcut-export.png"
                                    alt="School logo"
                                    className="w-full h-full object-contain"
                                  />
                                </div>
                                <div className="flex-1">
                                  <h3 className="font-medium text-sm line-clamp-2">
                                    {post.title}
                                  </h3>
                                  <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                                    <span>{post.views}</span>
                                    <span>•</span>
                                    <span>{post.date}</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                  </motion.div>
                </AnimatePresence>
              </div>

              <button
                onClick={nextPage}
                className="absolute -right-12 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors z-10"
                aria-label="Next page"
              >
                <ChevronRight className="w-6 h-6 text-gray-600" />
              </button>

              {/* Page Indicators */}
              <div className="flex justify-center gap-2 mt-8">
                {Array.from({ length: totalPages }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPage(index)}
                    className={`w-2 h-2 rounded-full transition-all ${currentPage === index ? "bg-gray-800 w-4" : "bg-gray-300"}`}
                    aria-label={`Go to page ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Follow Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <a
                href={
                  currentSection === "instagram"
                    ? "https://instagram.com"
                    : "https://youtube.com"
                }
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900"
              >
                {currentSection === "instagram" ? (
                  <>
                    <Instagram className="w-5 h-5" />
                    <span className="font-medium">
                      Follow us @stxaviersschool
                    </span>
                  </>
                ) : (
                  <>
                    <Youtube className="w-5 h-5" />
                    <span className="font-medium">
                      Subscribe to our channel
                    </span>
                  </>
                )}
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialSection;
