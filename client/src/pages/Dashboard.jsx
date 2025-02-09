import { FaExclamationTriangle } from "react-icons/fa";
import { AiOutlineDownload } from "react-icons/ai";
import { IoDocumentTextOutline } from "react-icons/io5";
import { BsGraphUp } from "react-icons/bs";
import CTAButton from "../components/CommonCom/Button"; // Importing CTAButton

const user = {
  name: "John Doe",
  creditScore: 580,
};

const getCreditColor = (score) => {
  if (score >= 700) return "bg-green-500";
  if (score >= 600) return "bg-yellow-500";
  return "bg-red-500";
};

const Dashboard = () => {
  return (
    <div className="flex flex-col items-center min-h-screen m-10">
      <div className="w-full max-w-3xl flex flex-col gap-8 ">
        {/* Credit Score Overview */}
        <div className="bg-gray-100 shadow-md rounded-2xl px-6 py-4">
          <div className="flex justify-between mb-5 text-gray-700">
            <p className="text-lg font-semibold">Hi, {user.name}</p>
            <p className="text-sm">Generated on: {new Date().toLocaleDateString()}</p>
          </div>
          <div className="flex items-center justify-between mb-6">
            <div className="flex flex-col items-center w-1/3">
              <div className={`w-16 h-16 ${getCreditColor(user.creditScore)} text-white flex items-center justify-center rounded-full text-xl font-bold`}>
                {user.creditScore}
              </div>
              <p className="mt-2 font-medium">Credit Score: {user.creditScore}</p>
            </div>
            <div className="flex items-center gap-2 flex-1 text-gray-700">
              <FaExclamationTriangle className="text-yellow-500 text-2xl" />
              <p className="text-lg font-medium">
                {user.creditScore < 600 ? "Your Credit Score needs improvement!" : "Your Credit Score is good!"}
              </p>
            </div>
          </div>
          <div className="flex justify-between">
            <CTAButton active={true} onClick={() => alert("Downloading Report")}>
              Download Report <AiOutlineDownload className="inline ml-1 text-lg" />
            </CTAButton>
            <CTAButton active={true} onClick={() => alert("Viewing Credit Report")}>
              View Credit Report
            </CTAButton>
          </div>
        </div>

        {/* Additional Info Cards */}
        <InfoCard
          icon={<BsGraphUp className="text-4xl text-green-600" />}
          title={user.creditScore < 600 ? "You have a Low Credit Score" : "Your Score is Stable"}
          buttonText="Improve Your Score"
        />

        <InfoCard
          icon={<IoDocumentTextOutline className="text-4xl text-blue-500" />}
          title="Your Credit Report: More Than Just a Score"
          description="Access your Credit Health Report for a comprehensive overview."
          buttonText="Know More"
        />
      </div>
    </div>
  );
};

// Reusable Info Card Component
const InfoCard = ({ icon, title, description, buttonText }) => {
  return (
    <div className="bg-gray-100 shadow-md rounded-2xl px-6 py-4 flex items-center justify-between">
      <div>{icon}</div>
      <div className="flex flex-col gap-4 items-end">
        <p className="text-xl font-semibold text-gray-800">{title}</p>
        {description && <p className="text-gray-600 text-sm text-right">{description}</p>}
        <CTAButton active={true} onClick={() => alert(buttonText)}>{buttonText}</CTAButton>
      </div>
    </div>
  );
};

export default Dashboard;
