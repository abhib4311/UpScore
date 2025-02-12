import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Login from "./pages/Login";
import Home from "./pages/Home";
import OtpVerification from "./pages/OtpVerification";
import Dashboard from "./pages/Dashboard";
import FAQs from "./pages/FAQs";
import Support from "./pages/Support";
import Profile from "./pages/Profile";
import CreditReport from "./pages/CreditReport";
import OurMission from "./pages/OurMission";
import "./index.css";

// ✅ Import Services Pages from `pages/services/`
import DebtSolution from "./pages/services/DebtSolution";
import CreditScore from "./pages/services/CreditScore";
import DebtConsultation from "./pages/services/DebtConsultation";
import HarassmentRelief from "./pages/services/HarassmentRelief";
import SecuredLoan from "./pages/services/SecuredLoan";

// ✅ Import Plans Pages from `pages/plans/`
import FreePlan from "./pages/plans/FreePlan";
import GoldPlan from "./pages/plans/GoldPlan";
import PlatinumPlan from "./pages/plans/PlatinumPlan";
import ContactPage from "./pages/Contact";

// ✅ Public Layout (Navbar + Footer)
const PublicLayout = () => (
  <>
    <Navbar />
    <Outlet />
    <Footer />
  </>
);

// ✅ Dashboard Layout (Sidebar)
const DashboardLayout = () => (
  <div className="flex bg-gray-100 min-h-screen">
    <div className="w-64 h-full bg-white shadow-md">
      <Sidebar />
    </div>
    <div className="flex-1 flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-5xl bg-white shadow-lg rounded-lg p-6">
        <Outlet />
      </div>
    </div>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ✅ Public Pages (Navbar + Footer) */}
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<Home />} />
          <Route path="our-mission" element={<OurMission />} />
          <Route path="contact" element={<ContactPage />} />

          {/* ✅ Services Dropdown Routes (pages/services/) */}
          <Route path="services/credit-score" element={<CreditScore />} />
          <Route path="services/debt-consultation" element={<DebtConsultation />} />
          <Route path="services/harassment-relief" element={<HarassmentRelief />} />
          <Route path="services/debt-solution" element={<DebtSolution />} />
          <Route path="services/secured-loan" element={<SecuredLoan />} />

          {/* ✅ Plans Dropdown Routes (pages/plans/) */}
          <Route path="plans/free" element={<FreePlan />} />
          <Route path="plans/gold" element={<GoldPlan />} />
          <Route path="plans/platinum" element={<PlatinumPlan />} />
        </Route>

        {/* ✅ Dashboard Pages (Sidebar Layout) */}
        <Route path="/" element={<DashboardLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="faqs" element={<FAQs />} />
          <Route path="support" element={<Support />} />
          <Route path="profile" element={<Profile />} />
          <Route path="credit-report" element={<CreditReport />} />
        </Route>

        {/* ✅ Auth Pages (No Navbar, No Sidebar) */}
        <Route path="/login" element={<Login />} />
        <Route path="/otp-verification" element={<OtpVerification />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
