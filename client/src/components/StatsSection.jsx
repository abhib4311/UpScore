import React, { useState, useEffect } from "react";
import { FaPiggyBank, FaCity, FaUsers, FaStar } from "react-icons/fa";

const stats = [
  {
    icon: <FaPiggyBank className="text-white text-5xl" />,
    label: "YEARS HELPING PEOPLE GET DEBT-FREE",
    unit: "+",
    value: 8,
  },
  {
    icon: <FaCity className="text-white text-5xl" />,
    label: "CITIES WE SERVE",
    unit: "+",
    value: 50,
  },
  {
    icon: <FaUsers className="text-white text-5xl" />,
    label: "SUCCESSFUL DEBT CONSOLIDATIONS",
    unit: "M+",
    value: 5,
  },
  {
    icon: <FaStar className="text-white text-5xl" />,
    label: "CUSTOMER SATISFACTION RATING",
    unit: "",
    value: "4.9/5",
  },
];

const StatsSection = () => {
  const [animatedValues, setAnimatedValues] = useState(
    stats.map((stat) => (typeof stat.value === "number" ? 0 : stat.value))
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedValues((prevValues) =>
        prevValues.map((val, index) => {
          const target = stats[index].value;
          if (typeof target === "number") {
            return val < target ? val + Math.ceil(target / 50) : target;
          }
          return target; // For non-numeric values, keep them static
        })
      );
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-green-600 text-white py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center space-y-2 p-6">
            {/* Icon and Number grouped together */}
            <div className="flex items-center space-x-3">
              <div className="text-5xl">{stat.icon}</div>
              <p className="text-4xl font-bold">
                {typeof stat.value === "number"
                  ? animatedValues[index]
                  : stat.value}
                {stat.unit}
              </p>
            </div>

            {/* Label below */}
            <p className="text-lg font-medium text-gray-200 text-center">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsSection;
