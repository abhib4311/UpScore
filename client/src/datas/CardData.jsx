import {
  FaUserCheck,
  FaChartBar,
  FaLightbulb,
  FaClipboardList,
  FaMoneyBillWave,
  FaFileDownload,
  FaPhoneVolume,
  FaUserShield,
  FaGavel,
  FaBalanceScale,
  FaHandHoldingUsd,
  FaCalendarCheck,
  FaCheckDouble,
  FaHandshake,
  FaChartLine,
  FaUserTie,
  FaChartPie,
  FaCreditCard,
  FaBookOpen,
} from "react-icons/fa";

const cardData = [
  {
    icon: "/Icons/Section_Icons/DC01.png",
    heading: "Debt Counselling",
    para: "Help clients manage debt effectively through personalized financial advice.",
    link: "/login",
  },
  {
    icon: "/Icons/Section_Icons/LS.png",
    heading: "Legal Support",
    para: "Provide legal guidance to protect clients' financial interests.",
    link: "/invest",
  },
  {
    icon: "/Icons/Section_Icons/AE.png",
    heading: "Affordable EMI",
    para: "Assist clients in finding flexible and affordable EMI options.",
    link: "/loans",
  },
  {
    icon: "/Icons/Section_Icons/DC02.png", // ✅ Fixed path
    heading: "Debt Consolidation",
    para: "Help clients combine multiple debts into a single, manageable loan.",
    link: "/coaching",
  },
  {
    icon: "/Icons/Section_Icons/DS.png", // ✅ Fixed path
    heading: "Debt Settlement",
    para: "Negotiate with creditors to reduce overall debt and ease financial burden.",
    link: "/loans",
  },
  {
    icon: "/Icons/Section_Icons/FP.png", // ✅ Fixed path
    heading: "Financial Planning",
    para: "Guide clients in creating a stable and secure financial future.",
    link: "/coaching",
  },
];

export default cardData;

const creditScore = {
  title: "How It Works?",
  steps: [
    {
      icon: <FaUserCheck className="text-green-600 text-4xl mx-auto" />,
      title: "Enter Basic Details",
      description: "Just your name & PAN—no complex forms!",
    },
    {
      icon: <FaChartBar className="text-green-600 text-4xl mx-auto" />,
      title: "Instant Report",
      description: "See your credit score in seconds.",
    },
    {
      icon: <FaLightbulb className="text-green-600 text-4xl mx-auto" />,
      title: "Understand Your Score",
      description: "We’ll break it down & suggest improvements.",
    },
  ],
};

const debtConsultation = {
  title: "What You Get?",
  steps: [
    {
      icon: <FaClipboardList className="text-green-600 text-4xl" />,
      title: "Debt Analysis",
      description: "Understand where your money goes!",
    },
    {
      icon: <FaMoneyBillWave className="text-green-600 text-4xl" />,
      title: "Custom Debt Plan",
      description: "A roadmap to financial freedom!",
    },
    {
      icon: <FaFileDownload className="text-green-600 text-4xl" />,
      title: "Downloadable Report",
      description: "A clear summary, right in your inbox!",
    },
  ],
};

const debtSolution = {
  title: "What is a Debt Management Plan (DMP)?",
  steps: [
    {
      icon: <FaClipboardList className="text-green-600 text-4xl" />,
      title: "Consolidate Multiple Unsecured EMIs",
      description:
        "Merge personal loans, credit card debt, education loans, and overdrafts into one easy repayment plan.",
    },
    {
      icon: <FaPhoneVolume className="text-green-600 text-4xl" />,
      title: "Stop Creditor Harassment",
      description:
        "Our legal team handles recovery calls, ensuring your peace of mind and privacy.",
    },
    {
      icon: <FaUserShield className="text-green-600 text-4xl" />,
      title: "Seek Legal Support",
      description:
        "Get assistance with legal notices, bounced cheques, and court hearings for full protection.",
    },
  ],
};

const harassmentRelief = {
  title: "How We Stop Harassment?",
  steps: [
    {
      icon: <FaGavel className="text-green-600 text-4xl" />,
      title: "Cease & Desist Notices",
      description: "We send legal warnings to creditors.",
    },
    {
      icon: <FaBalanceScale className="text-green-600 text-4xl" />,
      title: "Legal Counseling",
      description: "Understand your rights & legal protections.",
    },
    {
      icon: <FaHandshake className="text-green-600 text-4xl" />,
      title: "Debt Negotiation",
      description: "We help lower your payments!",
    },
  ],
};

const securedLoan = {
  title: "Why Choose a Secured Loan?",
  steps: [
    {
      icon: <FaHandHoldingUsd className="text-green-600 text-4xl" />,
      title: "Lower Interest Rates",
      description: "Reduce the amount you pay and save more money.",
    },
    {
      icon: <FaCalendarCheck className="text-green-600 text-4xl" />,
      title: "One Monthly Payment",
      description: "No more juggling multiple deadlines—just one easy payment.",
    },
    {
      icon: <FaCheckDouble className="text-green-600 text-4xl" />,
      title: "Debt-Free Faster",
      description:
        "Clear your dues without stress and regain financial stability.",
    },
  ],
};

export const platinumPlan = [
  {
    icon: <FaHandshake className="text-green-600 text-5xl mx-auto" />,
    title: "Creditor Negotiation",
    desc: "We negotiate to lower your debt.",
  },
  {
    icon: <FaBalanceScale className="text-green-600 text-5xl mx-auto" />,
    title: "Debt Restructuring",
    desc: "A full strategy to reduce your payments.",
  },
  {
    icon: <FaChartLine className="text-green-600 text-5xl mx-auto" />,
    title: "Financial Freedom Planning",
    desc: "Long-term guidance to keep you debt-free.",
  },
];

export const goldPlan = [
  {
    icon: <FaUserTie className="text-green-600 text-5xl mx-auto" />,
    title: "1-on-1 Debt Consultation",
    desc: "Speak with an expert to discuss your situation.",
  },
  {
    icon: <FaChartPie className="text-green-600 text-5xl mx-auto" />,
    title: "Custom Debt Plan",
    desc: "Get a tailored strategy for debt reduction.",
  },
  {
    icon: <FaClipboardList className="text-green-600 text-5xl mx-auto" />,
    title: "Expense Analysis",
    desc: "Receive insights on where your money is going.",
  },
];

export const freePlan = [
  {
    icon: <FaCreditCard className="text-green-600 text-5xl mx-auto" />,
    title: "Credit Score Access",
    desc: "Get an updated credit score anytime.",
  },
  {
    icon: <FaChartLine className="text-green-600 text-5xl mx-auto" />,
    title: "Credit Report Breakdown",
    desc: "Understand what affects your credit.",
  },
  {
    icon: <FaBookOpen className="text-green-600 text-5xl mx-auto" />,
    title: "Self-Help Debt Education",
    desc: "Learn to improve your financial health.",
  },
];
export {
  creditScore,
  debtConsultation,
  debtSolution,
  harassmentRelief,
  securedLoan,
};
