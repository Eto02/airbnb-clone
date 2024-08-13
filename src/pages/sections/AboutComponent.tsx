import Timeline from "@/components/Timeline";
import React from "react";
const events = [
  {
    date: "2024-08-01",
    title: "Event 1",
    description: "Description for the first event.",
  },
  {
    date: "2024-08-02",
    title: "Event 2",
    description: "Description for the second event.",
  },
  {
    date: "2024-08-03",
    title: "Event 3",
    description: "Description for the third event.",
  },
  {
    date: "2024-08-03",
    title: "Event 3",
    description: "Description for the third event.",
  },
  {
    date: "2024-08-03",
    title: "Event 3",
    description: "Description for the third event.",
  },
  {
    date: "2024-08-03",
    title: "Event 3",
    description: "Description for the third event.",
  },
  {
    date: "2024-08-03",
    title: "Event 3",
    description: "Description for the third event.",
  },
];
const AboutComponent: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <Timeline events={events} />
    </div>
  );
};

export default AboutComponent;
