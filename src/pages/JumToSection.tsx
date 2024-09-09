import DynamicNavbar from "@/components/DynamicNavbar";
import Footer from "@/components/Footer";
import React, { useEffect, useRef, useState } from "react";
import HomePage from "./HomePage";
import ServicesComponent from "./sections/ServicesComponent";
import Testimonial from "./sections/TestimoniesSection";
import FaqComponent from "./sections/FaqComponent";
import LogoClouds from "@/components/LogoClouds";

interface Section {
  id?: string;
  title?: string;
  component: React.FC;
  bgColor: string;
  isExternal: boolean;
  url?: string;
  padding?: string;
}

const sections: Section[] = [
  {
    id: "home",
    title: "Home",
    component: HomePage,
    bgColor: "bg-slate",
    isExternal: false,
    padding: "px-10",
  },
  {
    id: "list",
    title: "List",
    component: () => null,
    bgColor: "",
    isExternal: true,
    url: "/list",
  },
  {
    component: LogoClouds,
    bgColor: "bg-gray-50",
    isExternal: false,
  },
  {
    component: ServicesComponent,
    bgColor: "bg-teal-600",
    isExternal: false,
  },
  {
    id: "faq",
    title: "Faq",
    component: FaqComponent,
    bgColor: "bg-gray-50",
    isExternal: false,
    padding: "pb-0",
  },
  {
    component: Testimonial,
    bgColor: "bg-gray-50",
    isExternal: false,
    padding: " pb-12",
  },
];

const JumpToSection: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<Record<string, React.RefObject<HTMLElement>>>(
    sections.reduce((acc, section) => {
      if (section.id) {
        acc[section.id] = React.createRef<HTMLElement>();
      }
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

  const handleScrollToSection = (id: string | undefined) => {
    if (id)
      sectionRefs.current[id]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    containerRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div ref={containerRef} className="h-screen overflow-y-scroll relative">
      <DynamicNavbar
        sections={sections.filter((section) => section.id && section.title)}
        handleScroll={handleScrollToSection}
      />

      {sections
        .filter((section) => section.isExternal == false)
        .map((section) => {
          const SectionComponent = section.component;
          return (
            <section
              key={section.id || section.title}
              ref={section.id ? sectionRefs.current[section.id] : undefined}
              className={`${section.id ? "min-h-screen" : ""} ${
                section.bgColor
              } ${section.padding || ""} flex items-center justify-center`}
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
