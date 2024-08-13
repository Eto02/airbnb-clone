import React from "react";

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
}

interface TimelineProps {
  events: TimelineEvent[];
}

const Timeline: React.FC<TimelineProps> = ({ events }) => {
  return (
    <div className="relative flex flex-col items-center pt-16">
      {/* Central Vertical Line */}
      <div className="absolute w-1 bg-gray-300 h-full left-1/2 transform -translate-x-1/2"></div>

      {events.map((event, index) => (
        <div
          key={index}
          className={`flex w-full  pt-4 items-center  ${
            index % 2 === 0 ? "justify-start" : "justify-end"
          }`}
        >
          {/* Event Content */}
          <div
            className={`bg-white p-4 rounded-lg shadow-md px-20 w-1/2  ${
              index % 2 === 0
                ? "-ml-4 text-right  text-black"
                : "-mr-4 text-left bg-teal-500 text-white"
            }`}
          >
            <h3 className="text-lg font-semibold">{event.title}</h3>
            <p
              className={`text-sm${
                index % 2 === 0 ? " text-black" : " text-gray-100"
              }`}
            >
              {event.date}
            </p>
            <p
              className={`mt-2 ${
                index % 2 === 0 ? " text-black" : " text-gray-100"
              }`}
            >
              {event.description}
            </p>
          </div>
          {/* Dot with Checkmark */}
          <div className="absolute w-6 h-6 bg-teal-500 rounded-full left-1/2 transform -translate-x-1/2 flex items-center justify-center">
            <svg
              className="w-4 h-4 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
