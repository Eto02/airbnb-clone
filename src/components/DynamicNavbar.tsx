import React from "react";

interface NavbarProps {
  sections: { id: string; title: string; isExternal: boolean; url?: string }[];
  handleScroll: (id: string) => void;
}

const DynamicNavbar: React.FC<NavbarProps> = ({ sections, handleScroll }) => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow">
      <ul className="flex justify-around p-4">
        {sections.map((section) => (
          <li key={section.id}>
            {section.isExternal ? (
              <a href={section.url} rel="noopener noreferrer">
                {section.title}
              </a>
            ) : (
              <button onClick={() => handleScroll(section.id)}>
                {section.title}
              </button>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default DynamicNavbar;
