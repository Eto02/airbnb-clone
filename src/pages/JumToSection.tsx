import React, { useRef, useState, useEffect } from "react";
import DynamicNavbar from "@/components/DynamicNavbar";
import HomePage from "./HomePage";
import AboutComponent from "./sections/AboutComponent";
import ContactComponent from "./sections/ContactComponent";
import ServicesComponent from "./sections/ServicesComponent";
import Footer from "@/components/Footer";

interface Section {
  id: string;
  title: string;
  component: React.FC;
  bgColor: string;
  isExternal: boolean;
  url?: string;
}

const sections: Section[] = [
  {
    id: "home",
    title: "Home",
    component: HomePage,
    bgColor: "bg-slate-",
    isExternal: false,
  },
  {
    id: "about",
    title: "About",
    component: AboutComponent,
    bgColor: "bg-gray-50",
    isExternal: false,
  },
  {
    id: "services",
    title: "Services",
    component: ServicesComponent,
    bgColor: "bg-gray-50",
    isExternal: false,
  },
  {
    id: "contact",
    title: "Contact",
    component: ContactComponent,
    bgColor: "bg-gray-50",
    isExternal: false,
  },
  {
    id: "external",
    title: "External Link",
    component: () => null,
    bgColor: "",
    isExternal: true,
    url: "/list",
  },
];

const JumpToSection: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<Record<string, React.RefObject<HTMLElement>>>(
    sections.reduce((acc, section) => {
      acc[section.id] = React.createRef<HTMLElement>();
      return acc;
    }, {} as Record<string, React.RefObject<HTMLElement>>)
  );

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    const handleScroll = () => {
      console.log("Scroll Y:", container.scrollTop);
      setShowBackToTop(container.scrollTop > 200);
    };

    container.addEventListener("scroll", handleScroll);

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToSection = (id: string) => {
    sectionRefs.current[id]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    containerRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div ref={containerRef} className="h-screen overflow-y-scroll relative">
      <DynamicNavbar sections={sections} handleScroll={handleScrollToSection} />

      {sections.map((section) => {
        if (section.isExternal) return null;
        const SectionComponent = section.component;
        return (
          <section
            key={section.id}
            ref={sectionRefs.current[section.id]}
            className={`min-h-screen ${section.bgColor} flex items-center justify-center px-20`}
          >
            <SectionComponent />
          </section>
        );
      })}

      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 p-3 bg-teal-600 text-white rounded-full shadow-lg"
          style={{ zIndex: 1000 }}
        >
          Back to Top
        </button>
      )}

      <Footer />
    </div>
  );
};

export default JumpToSection;
