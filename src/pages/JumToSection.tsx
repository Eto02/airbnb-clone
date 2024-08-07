import DynamicNavbar from "@/components/DynamicNavbar";
import React, { useRef } from "react";
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
  const sectionRefs = useRef<Record<string, React.RefObject<HTMLElement>>>(
    sections.reduce((acc, section) => {
      acc[section.id] = React.createRef<HTMLElement>();
      return acc;
    }, {} as Record<string, React.RefObject<HTMLElement>>)
  );

  const handleScroll = (id: string) => {
    sectionRefs.current[id]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="h-screen overflow-y-scroll">
      <DynamicNavbar sections={sections} handleScroll={handleScroll} />

      {sections.map((section) => {
        if (section.isExternal) return null;
        const SectionComponent = section.component;
        return (
          <section
            key={section.id}
            ref={sectionRefs.current[section.id]}
            className={`min-h-screen ${section.bgColor} bg- flex items-center justify-center px-20`}
          >
            <SectionComponent />
          </section>
        );
      })}
      <Footer />
    </div>
  );
};

export default JumpToSection;
