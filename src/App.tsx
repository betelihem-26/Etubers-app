import React, { useState } from "react";
import { Zap, Send, Star, Layers, Clock } from "lucide-react";
// --- TYPE DEFINITIONS & LIVE DATA ---

interface Course {
  id: number;
  title: string;
  category:
    | "Freelancing"
    | "Trading"
    | "Skills"
    | "Marketing"
    | "E-commerce"
    | "Design"
    | "Business"
    | "Data Science";
  link: string; // The specific YouTube/resource link
  duration: string;
  instructor: string;
  students: string;
}

interface Partner {
  name: string;
  logo: string; // Placeholder initial
  color: string; // Tailwind color class suffix
}

const LIVE_COURSES: Course[] = [
  {
    id: 1,
    title: "Complete Upwork Mastery 2025",
    category: "Freelancing",
    link: "https://forms.gle/xFQtUXY6ek9QLRiS7",
    duration: "12 Hours",
    instructor: "Mike",
    students: "35K+",
  },
  {
    id: 2,
    title: "ICT Forex Trading Full Course",
    category: "Trading",
    link: "https://www.youtube.com/watch?v=pM3zcoF1HbQ",
    duration: "18 Hours",
    instructor: "Mike",
    students: "28K+",
  },
  {
    id: 3,
    title: "Video Editing Full Course (CapCut/Premiere)",
    category: "Skills",
    link: "https://www.youtube.com/watch?v=NgrXxAPxmEY",
    duration: "15 Hours",
    instructor: "Mike",
    students: "42K+",
  },
  {
    id: 4,
    title: "Facebook Ads Full Course (Meta Ads)",
    category: "Marketing",
    link: "https://www.youtube.com/watch?v=PDHTln7QTxU",
    duration: "10 Hours",
    instructor: "Mike",
    students: "30K+",
  },
  {
    id: 5,
    title: "Dropshipping Zero to Hero",
    category: "E-commerce",
    link: "https://bit.ly/GETPRINTIFY",
    duration: "8 Hours",
    instructor: "Mike",
    students: "20K+",
  },
  {
    id: 6,
    title: "Python for Financial Analysis",
    category: "Data Science",
    link: "#",
    duration: "20 Hours",
    instructor: "Mike",
    students: "15K+",
  },
  {
    id: 7,
    title: "The Modern Business Blueprint",
    category: "Business",
    link: "#",
    duration: "25 Hours",
    instructor: "Mike",
    students: "18K+",
  },
];

const CATEGORY_TABS = [
  "All",
  "Freelancing",
  "Trading",
  "Skills",
  "Marketing",
  "E-commerce",
  "Business",
  "Data Science",
];

const PARTNERS: Partner[] = [
  { name: "HubSpot", logo: "H", color: "orange" },
  { name: "loom", logo: "L", color: "purple" },
  { name: "GitLab", logo: "G", color: "red" },
  { name: "LiveChat", logo: "C", color: "green" },
  { name: "monday.com", logo: "M", color: "blue" },
  { name: "Fiverr", logo: "F", color: "cyan" },
  { name: "Printify", logo: "P", color: "yellow" },
];

// --- REUSABLE COMPONENTS ---

// Primary Call-to-Action Button (Gold/Yellow)
const CTAButton: React.FC<{
  children: React.ReactNode;
  link: string;
  className?: string;
}> = ({ children, link, className = "" }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className={`px-8 py-3 font-extrabold text-[#1A1A2E] bg-accent-gold rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-[1.03] hover:bg-yellow-400 focus:outline-none focus:ring-4 focus:ring-accent-gold focus:ring-opacity-50 active:bg-yellow-600 ${className}`}
  >
    {children}
  </a>
);

// Course Card Component (Visual Replication of Edujar Card)
const CourseCard: React.FC<{ course: Course }> = ({ course }) => {
  // Determine the color for the category tag and placeholder
  const getAccentColor = (category: string) => {
    switch (category) {
      case "Freelancing":
        return "green";
      case "Trading":
        return "red";
      case "Skills":
        return "blue";
      case "Marketing":
        return "pink";
      case "E-commerce":
        return "yellow";
      case "Data Science":
        return "cyan";
      case "Business":
        return "indigo";
      default:
        return "gray";
    }
  };

  const accent = getAccentColor(course.category);

  return (
    <a
      href={course.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block p-4 bg-[#282855] rounded-3xl shadow-xl border border-[#3A3A60] transition duration-500 hover:shadow-2xl hover:shadow-primary-purple/50"
    >
      {/* Thumbnail Placeholder (Mimics 3D graphic) */}
      <div className="relative h-40 mb-4 rounded-xl overflow-hidden flex items-center justify-center bg-gradient-to-br from-indigo-900 to-indigo-700">
        <Layers className="w-16 h-16 text-white/10 absolute" />

        {/* Mock Graphic Element - Change based on category */}
        <div
          className={`w-32 h-32 bg-${accent}-500/20 rounded-full blur-xl absolute -bottom-10 -right-10`}
        ></div>
        <div
          className={`w-20 h-20 bg-${accent}-500/40 rounded-lg absolute top-4 left-4 transform rotate-6`}
        ></div>

        {/* Duration Badge - positioned correctly */}
        <span className="absolute top-3 left-3 text-xs font-semibold px-3 py-1 bg-black/40 text-white rounded-full flex items-center backdrop-blur-sm">
          <Clock className="w-3 h-3 mr-1" /> {course.duration}
        </span>

        {/* Design/Category Tag */}
        <span className="absolute top-3 right-3 text-xs font-semibold px-3 py-1 rounded-full text-white bg-primary-purple">
          {course.category}
        </span>
      </div>

      {/* Course Details */}
      <div className="p-2">
        <h3 className="text-xl font-bold text-text-light leading-snug group-hover:text-primary-purple transition-colors">
          {course.title}
        </h3>

        {/* Instructor Row */}
        <div className="flex items-center justify-between text-sm text-gray-400 mt-3 border-t border-[#3A3A60] pt-3">
          <div className="flex items-center space-x-2">
            <img
              src="https://placehold.co/30x30/6C5CE7/FFFFFF?text=M"
              alt="Instructor Avatar"
              className="rounded-full w-6 h-6 object-cover border border-primary-purple"
            />
            <span>{course.instructor}</span>
          </div>
          <div className="flex items-center">
            <Star className="w-4 h-4 text-accent-gold fill-accent-gold mr-1" />
            <span>{course.students} Students</span>
          </div>
        </div>
      </div>

      {/* Enroll Now Button (The dynamic two-color effect) */}
      <button className="flex items-center justify-center w-full mt-4 py-3 font-bold text-white bg-transparent border-2 border-primary-purple rounded-xl transition duration-300 relative overflow-hidden group-hover:bg-primary-purple/20">
        <span className="absolute inset-0 bg-primary-purple transition-all duration-500 ease-out transform scale-x-0 group-hover:scale-x-100 origin-left"></span>
        <span className="relative z-10">Enroll Now</span>
      </button>
    </a>
  );
};

// --- DYNAMIC FEATURE COMPONENTS ---

// 1. Partner Logos Section (Simulated Horizontal Scroller)
const PartnerSection: React.FC = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 md:mt-16">
    <h3 className="text-lg font-semibold text-gray-400 mb-6 text-center">
      Our Course Partners
    </h3>
    <div className="relative flex items-center justify-center">
      <div className="flex overflow-x-auto justify-start md:justify-center space-x-10 py-4 custom-scrollbar-partners">
        {PARTNERS.map((p, index) => (
          <a
            key={index}
            href="#"
            className="flex-shrink-0 flex items-center space-x-3 text-lg font-bold text-gray-400 hover:text-white transition duration-200 p-2 rounded-lg hover:bg-[#282855]"
          >
            <div
              className={`w-10 h-10 flex items-center justify-center rounded-full bg-${p.color}-500/20 text-${p.color}-300 border border-${p.color}-500/50`}
            >
              {p.logo}
            </div>
            <span className="hidden sm:inline">{p.name}</span>
          </a>
        ))}
      </div>

      {/* Scroll indicators for responsive feel */}
      <div className="absolute left-0 w-1/4 h-full bg-gradient-to-r from-background-dark to-transparent hidden sm:block"></div>
      <div className="absolute right-0 w-1/4 h-full bg-gradient-to-l from-background-dark to-transparent hidden sm:block"></div>
    </div>
    <style>{`.custom-scrollbar-partners::-webkit-scrollbar { height: 4px; } .custom-scrollbar-partners::-webkit-scrollbar-thumb { background-color: #6C5CE7; border-radius: 2px; }`}</style>
  </div>
);

// 2. Category Tabs Filter Component
const CategoryTabs: React.FC<{
  selected: string;
  onSelect: (cat: Course["category"] | "All") => void;
}> = ({ selected, onSelect }) => (
  <div className="flex justify-center flex-wrap gap-3 mb-12">
    {CATEGORY_TABS.map((category) => (
      <button
        key={category}
        onClick={() => onSelect(category as Course["category"] | "All")}
        className={`px-5 py-2 text-sm font-semibold rounded-full transition duration-300 
                    ${
                      selected === category
                        ? "bg-primary-purple text-white shadow-lg shadow-primary-purple/50"
                        : "bg-[#282855] text-gray-400 hover:bg-[#3A3A60] hover:text-white"
                    }`}
      >
        {category === "All" ? "Popular Courses" : category}
      </button>
    ))}
  </div>
);

// --- PAGE STRUCTURE COMPONENTS ---

// Navigation Bar (Header) - Keep structure clean
const Header: React.FC = () => (
  <header className="sticky top-0 z-50 bg-[#1A1A2E]/95 backdrop-blur-sm border-b border-[#3A3A60]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
      <a
        href="#home"
        className="text-2xl font-black text-white flex items-center"
      >
        <Zap className="w-6 h-6 text-accent-gold mr-2" />
        <span className="tracking-tighter">Etubers</span>
      </a>
      <nav className="hidden md:flex space-x-8 text-text-light font-medium">
        {["Home", "Courses", "Mentorship", "Success Stories", "Contact"].map(
          (item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="hover:text-primary-purple transition duration-150"
            >
              {item}
            </a>
          )
        )}
      </nav>
      <CTAButton
        link="https://t.me/etubersmoney"
        className="hidden md:block py-2 px-6 text-sm"
      >
        <span className="flex items-center">
          <Send className="w-4 h-4 mr-2" /> Join Telegram
        </span>
      </CTAButton>
      <button className="md:hidden text-white p-2 border border-[#3A3A60] rounded-md hover:bg-primary-purple/20">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>
    </div>
  </header>
);

// Hero Section (Gradient Background, Image Placeholder, Search)
const HeroSection: React.FC = () => (
  <section
    id="home"
    className="relative pt-20 pb-24 md:pt-32 text-center overflow-hidden bg-gradient-to-br from-[#1A1A2E] to-[#1A1A4E]"
  >
    {/* Decorative Gradient/Glow */}
    <div className="absolute w-80 h-80 bg-primary-purple/10 rounded-full -top-16 -left-16 blur-[100px]"></div>
    <div className="absolute w-60 h-60 bg-accent-gold/10 rounded-full bottom-0 right-10 blur-[100px] hidden md:block"></div>

    <div className="relative max-w-7xl mx-auto px-4 z-10 flex flex-col md:flex-row items-center justify-between text-left">
      {/* Text & Search Area (Left) */}
      <div className="w-full md:w-1/2 lg:w-3/5 text-center md:text-left mb-10 md:mb-0">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tighter">
          Best courses are waiting to{" "}
          <span className="text-primary-purple">enrich your skill</span>.
        </h1>
        <p className="text-lg md:text-xl text-text-light mb-10 font-light max-w-xl">
          Provides you with the latest online learning system and material that
          help your knowledge grow.
        </p>

        {/* Search Bar (Pill-shaped, responsive) */}
        <div className="w-full max-w-lg mx-auto md:mx-0">
          <div className="flex rounded-full bg-[#282855] border border-primary-purple shadow-xl overflow-hidden p-1">
            <input
              type="search"
              placeholder="What skill do you want to learn today? (e.g. Upwork)"
              className="w-full px-5 py-3 bg-transparent text-text-light placeholder-gray-500 focus:outline-none text-base"
              aria-label="Search courses"
            />
            <button className="flex items-center justify-center px-6 py-3 bg-primary-purple text-white rounded-full transition duration-200 hover:bg-primary-purple/80">
              Explore
            </button>
          </div>
        </div>
      </div>

      {/* Illustration Placeholder (Right) - Mimics image UI */}
      <div className="w-full md:w-1/2 lg:w-2/5 flex justify-center items-center relative h-64 md:h-96">
        <img
          src="https://placehold.co/300x350/6C5CE7/FFFFFF/svg?text=STUDENT+ILLUSTRATION"
          alt="Etubers Student Illustration"
          className="w-full max-w-xs md:max-w-none h-auto object-contain transform hover:scale-[1.05] transition-transform duration-500"
        />
      </div>
    </div>

    <PartnerSection />
  </section>
);

// Course Catalog Section (The Core - Now with Dynamic Filtering)
const CourseCatalogSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<
    Course["category"] | "All"
  >("All");

  const filteredCourses = LIVE_COURSES.filter(
    (course) =>
      selectedCategory === "All" || course.category === selectedCategory
  );

  return (
    <section
      id="courses"
      className="py-20 md:py-28 bg-[#1A1A3E] border-t border-[#3A3A60]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-center text-white mb-4">
          Popular Courses
        </h2>
        <p className="text-xl text-center text-text-light mb-12">
          Enroll today and start building your financial future.
        </p>

        <CategoryTabs
          selected={selectedCategory}
          onSelect={setSelectedCategory}
        />

        {/* Course Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))
          ) : (
            <div className="col-span-full text-center text-gray-400 py-10">
              No courses found in the {selectedCategory} category.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

// Testimonials / Social Proof Section
const TestimonialsSection: React.FC = () => (
  <section
    id="success-stories"
    className="py-16 md:py-24 bg-background-dark border-t border-[#3A3A60]"
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
        Success Stories: Talk Less, Earn More
      </h2>
      <p className="text-xl text-center text-gray-400 mb-12">
        See how our students are changing their lives.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {/* Testimonial Card 1 */}
        <div className="p-6 bg-[#232345] rounded-xl border-l-4 border-accent-gold shadow-md">
          <Star className="w-5 h-5 text-accent-gold mb-3" />
          <p className="text-gray-300 italic mb-4">
            "Landed my first big Upwork gig thanks to Mike's mentorship. This
            isn't just theory, it's a blueprint for making money."
          </p>
          <p className="text-sm font-semibold text-white">
            — Samuel K. (Ethiopian Freelancer)
          </p>
        </div>
        {/* Testimonial Card 2 */}
        <div className="p-6 bg-[#232345] rounded-xl border-l-4 border-accent-gold shadow-md">
          <Star className="w-5 h-5 text-accent-gold mb-3" />
          <p className="text-gray-300 italic mb-4">
            "The Forex course structure is incredibly clear. I moved from demo
            to live trading with confidence. Practical advice is spot on!"
          </p>
          <p className="text-sm font-semibold text-white">
            — Almaz T. (ICT Trader)
          </p>
        </div>
        {/* Testimonial Card 3 */}
        <div className="p-6 bg-[#232345] rounded-xl border-l-4 border-accent-gold shadow-md">
          <Star className="w-5 h-5 text-accent-gold mb-3" />
          <p className="text-gray-300 italic mb-4">
            "The video editing course opened up a new income stream for me. The
            'Zero to Hero' title is accurate. Great job, Etubers team!"
          </p>
          <p className="text-sm font-semibold text-white">
            — Elias A. (Digital Creator)
          </p>
        </div>
      </div>
    </div>
  </section>
);

// Footer Component
const Footer: React.FC = () => (
  <footer id="contact" className="bg-[#1A1A2E] border-t border-[#3A3A60] py-10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-12 mb-6">
        <p className="text-lg font-bold text-white">
          Connect with the Etubers Community:
        </p>

        {/* Social Media Links */}
        <div className="flex space-x-6">
          {/* YouTube */}
          <a
            href="https://www.youtube.com/@etubersmoney"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-red-600 transition duration-300"
            aria-label="YouTube Channel"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-youtube"
            >
              <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 2-2h15a2 2 0 0 1 2 2 24.12 24.12 0 0 1 0 10 2 2 0 0 1-2 2h-15a2 2 0 0 1-2-2Z" />
              <path d="m10 15 5-3-5-3v6Z" />
            </svg>
          </a>
          {/* Telegram */}
          <a
            href="https://t.me/etubersmoney"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500 transition duration-300"
            aria-label="Telegram Group"
          >
            <Send className="w-7 h-7" />
          </a>
          {/* TikTok (Placeholder for generic social icon) */}
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition duration-300"
            aria-label="TikTok"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-tiktok"
            >
              <path d="M21 21h-2a2 2 0 0 1-2-2V9a2 2 0 0 1-2-2h-3v8h3a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-3v-6h-2v6a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h3v-8H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v12h4a2 2 0 0 1 2 2Z" />
            </svg>
          </a>
        </div>
      </div>
      <p className="text-gray-500 text-sm mt-8">
        © 2025 Etubers. Powered by the Talk Less, Do More philosophy. | Never
        Settle.
      </p>
    </div>
  </footer>
);

// --- MAIN APP COMPONENT (Combines Layout and Page logic) ---

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-background-dark text-white font-sans">
      {/* Global CSS for Custom Colors, Font, and Scrollbar */}
      <style>{`
        :root {
            --bg-dark: #1A1A2E;
            --primary-purple: #6C5CE7;
            --accent-gold: #FFD700;
            --text-light: #E0E0E0;
        }

        .bg-background-dark { background-color: var(--bg-dark); }
        .text-text-light { color: var(--text-light); }
        .bg-primary-purple { background-color: var(--primary-purple); }
        .text-primary-purple { color: var(--primary-purple); }
        .bg-accent-gold { background-color: var(--accent-gold); }
        .text-accent-gold { color: var(--accent-gold); }
        
        /* Custom Scrollbar */
        body::-webkit-scrollbar { width: 8px; }
        body::-webkit-scrollbar-track { background: var(--bg-dark); }
        body::-webkit-scrollbar-thumb { background-color: var(--primary-purple); border-radius: 20px; border: 2px solid var(--bg-dark); }
        html { scroll-behavior: smooth; }
      `}</style>

      <Header />

      <main className="flex flex-col">
        <HeroSection />
        <CourseCatalogSection />
        <TestimonialsSection />
      </main>

      <Footer />
    </div>
  );
};

export default App;
