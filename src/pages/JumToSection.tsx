import React, { useRef } from "react";
import HomeComponent from "./sections/HomeComponent";
import AboutComponent from "./sections/AboutComponent";
import ServicesComponent from "./sections/ServicesComponent";
import ContactComponent from "./sections/ContactComponent";
import DynamicNavbar from "@/components/DynamicNavbar";
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
    component: HomeComponent,
    bgColor: "bg-blue-200",
    isExternal: false,
  },
  {
    id: "about",
    title: "About",
    component: AboutComponent,
    bgColor: "bg-green-200",
    isExternal: false,
  },
  {
    id: "services",
    title: "Services",
    component: ServicesComponent,
    bgColor: "bg-yellow-200",
    isExternal: false,
  },
  {
    id: "contact",
    title: "Contact",
    component: ContactComponent,
    bgColor: "bg-red-200",
    isExternal: false,
  },
  {
    id: "external",
    title: "External Link",
    component: () => null,
    bgColor: "",
    isExternal: true,
    url: "https://example.com",
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
    <div>
      <DynamicNavbar sections={sections} handleScroll={handleScroll} />

      {sections.map((section) => {
        if (section.isExternal) return null;
        const SectionComponent = section.component;
        return (
          <section
            key={section.id}
            ref={sectionRefs.current[section.id]}
            className={`h-screen ${section.bgColor} flex items-center justify-center`}
          >
            <SectionComponent />
          </section>
        );
      })}
    </div>
  );
};

export default JumpToSection;
