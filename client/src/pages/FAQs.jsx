import { useState } from "react";

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    {
      title: "What is DebtFree?",
      content:
        "DebtFree is a financial strategy or state where an individual, business, or entity has no outstanding debts, meaning they have fully repaid all loans, credit balances, or financial obligations.",
    },
    {
      title: "What is a Credit Score?",
      content:
        "A credit score is a numerical rating that represents a person's creditworthiness, based on their credit history, repayment behavior, and financial activities. It typically ranges from 300 to 850, with higher scores indicating better creditworthiness.",
    },
    {
      title: "What is Debt Consolidation?",
      content:
        "We help you combine multiple debts into a single loan with a lower interest rate, making repayment easier and more manageable.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
        Frequently Asked Questions
      </h1>
      <p className="text-center text-gray-600 mb-8">
        Find answers to the most common questions about our services.
      </p>

      <div className="space-y-4">
        {faqItems.map((item, index) => (
          <div key={index} className="border border-gray-200 rounded-lg">
            <button
              onClick={() => toggleAccordion(index)}
              className="flex items-center justify-between w-full p-4 text-lg font-medium text-gray-700 bg-gray-100 hover:bg-green-500 hover:text-white rounded-lg transition"
            >
              <span>{item.title}</span>
              <svg
                className={`w-5 h-5 transition-transform ${
                  openIndex === index ? "rotate-180" : "rotate-0"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>

            {openIndex === index && (
              <div className="p-4 border-t border-gray-200 bg-white">
                <p className="text-gray-600">{item.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
