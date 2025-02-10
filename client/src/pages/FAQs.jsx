import { useState } from "react";

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    {
      title: "What is UpScore?",
      content:
        "UpScore is a financial strategy or state where an individual, business, or entity has no outstanding debts, meaning they have fully repaid all loans, credit balances, or financial obligations.",
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
    {
      title: "How can I improve my Credit Score?",
      content:
        "To improve your credit score, pay your bills on time, reduce credit card balances, avoid new credit inquiries, and maintain a good credit mix.",
    },
    {
      title: "What happens if I miss a debt payment?",
      content:
        "Missing a debt payment can lower your credit score and may result in penalties or additional interest charges. It's best to contact your lender and discuss payment options.",
    },
    {
      title: "Is Debt Settlement a good option?",
      content:
        "Debt settlement can help reduce your overall debt but may impact your credit score. It’s best suited for those facing severe financial hardship.",
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
          <div key={index} className=" rounded-lg p-4">
            <button
              onClick={() => toggleAccordion(index)}
              className="flex items-center justify-between w-full text-lg font-medium text-gray-700 bg-gray-100 hover:bg-green-500 hover:text-white rounded-lg transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-400 py-3 px-4"
            >
              <span>{item.title}</span>
              <svg
                className={`w-5 h-5 transform transition-transform duration-300 ${
                  openIndex === index ? "rotate-0" : "rotate-180"
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

            {/* Adjusted Content Container */}
            <div
              className={`grid transition-all duration-300 ease-in-out ${
                openIndex === index ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="text-gray-600 mt-3">{item.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
