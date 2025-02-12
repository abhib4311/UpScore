import React from "react";

const ServiceCardSection = ({ data }) => {
  return (
    <section className="max-w-6xl mx-auto py-12  ">
      <h2 className="text-3xl font-bold text-center text-black mb-8 leading-tight">
        {data.title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {data.steps.map((item, index) => (
          <div
            key={index}
            className="bg-gray-50 p-6 rounded-lg shadow-md text-center hover:bg-green-100"
          >
            <div className="flex justify-center items-center text-4xl text-green-600 mb-3">
              {item.icon}
            </div>
            <h3 className="text-black text-xl font-bold mt-3 leading-tight">
              {item.title}
            </h3>
            <p className="text-lg text-gray-700 mt-2 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

const PlansCardSection = ({ items }) => {
  return (
    <section className="max-w-6xl mx-auto py-12 text-center">
      <h2 className="text-3xl font-bold text-black mb-8 leading-tight">
        What’s Included?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-gray-50 p-6 rounded-lg shadow-md text-center transform transition-all duration-300 hover:scale-105 hover:bg-green-100 hover:shadow-xl"
          >
            {item.icon}
            <h3 className="text-black text-xl font-bold mt-3">{item.title}</h3>
            <p className="text-lg text-gray-700 mt-2">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export { ServiceCardSection, PlansCardSection };
