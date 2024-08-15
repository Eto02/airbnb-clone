import React, { useState } from "react";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    id: "answer-1",
    question: "How do I search for properties on this website?",
    answer:
      "You can search for properties by entering your preferred location, property type, and price range in the search bar on the homepage. Use filters to narrow down your search based on your specific needs.",
  },
  {
    id: "answer-2",
    question: "What should I consider when buying a property?",
    answer:
      "When buying a property, consider factors such as location, budget, property size, neighborhood amenities, and future resale value. It’s also important to get a home inspection and review the property’s legal documents.",
  },
  {
    id: "answer-3",
    question: "How can I schedule a property viewing?",
    answer:
      'To schedule a property viewing, simply click on the "Schedule a Visit" button on the property’s detail page. You can choose a convenient date and time, and our agent will contact you to confirm the appointment.',
  },
  {
    id: "answer-4",
    question: "What are the steps involved in selling a property?",
    answer:
      "Selling a property involves determining the right price, listing the property, marketing it to potential buyers, negotiating offers, and finalizing the sale through legal procedures. Our agents can assist you throughout the process.",
  },
  {
    id: "answer-5",
    question: "Can I get assistance with financing my property purchase?",
    answer:
      "Yes, we provide assistance with property financing through our partner banks. You can apply for a mortgage directly through our website or get in touch with our financial advisors for personalized support.",
  },
];

const FaqComponent: React.FC = () => {
  const [openItemId, setOpenItemId] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setOpenItemId(openItemId === id ? null : id);
  };

  return (
    <div className="min-h-screen w-full">
      <section className="w-full py-10 sm:py-20">
        <div className="flex items-center justify-center flex-col gap-y-2 py-5">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            Frequently Asked Questions
          </h2>
          <p className="text-lg font-medium text-slate-700/70">
            Questions related to real estate
          </p>
        </div>
        <div className="w-full px-7 md:px-10 xl:px-32 py-4">
          <div className="w-full border border-slate-400/20 rounded-lg bg-white">
            {faqItems.map((item) => (
              <div
                key={item.id}
                className={`border-b border-[#0A071B]/10 ${
                  openItemId === item.id ? "bg-gray-50" : ""
                }`}
              >
                <button
                  className="question-btn flex w-full items-start gap-x-5 justify-between rounded-lg text-left text-lg font-bold text-slate-800 focus:outline-none p-5"
                  onClick={() => toggleItem(item.id)}
                >
                  <span>{item.question}</span>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    className={`mt-1.5 md:mt-0 flex-shrink-0 h-5 w-5 text-[#5B5675] transition-transform duration-200 ${
                      openItemId === item.id ? "rotate-180" : ""
                    }`}
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16.293 9.293L12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
                  </svg>
                </button>
                <div
                  className={`answer pt-2 pb-5 px-5 text-sm lg:text-base text-[#343E3A] font-medium transition-all duration-200 ${
                    openItemId === item.id ? "block" : "hidden"
                  }`}
                  id={item.id}
                >
                  {item.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FaqComponent;
