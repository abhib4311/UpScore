import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar"; // Import Sidebar

import Login from "./pages/Login";
import Home from "./pages/Home";
import OtpVerification from "./pages/OtpVerification";
import Dashboard from "./pages/Dashboard";
import FAQs from "./pages/FAQs"; // Create these pages
import Support from "./pages/Support";
import Plans from "./pages/Plans";
import Profile from "./pages/Profile";
import CreditReport from "./pages/CreditReport";

// Layout for Public Pages (Shows Navbar & Footer)
const PublicLayout = () => (
  <>
    <Navbar />
    <Outlet />
    <Footer />
  </>
);

// Layout for Dashboard-Related Pages (Shows Sidebar)
const DashboardLayout = () => (
  <div className="flex h-screen">
    {/* Sidebar - Full Height */}
    <div className="w-64 h-full">
      <Sidebar />
    </div>

    {/* Main Content - Outlet */}
    <div className="flex-1 flex flex-col overflow-auto">
      <Outlet />
    </div>
  </div>
);


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes (Navbar & Footer) */}
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<Home />} />
        </Route>

        {/* Dashboard-Related Pages (Sidebar Layout) */}
        <Route path="/" element={<DashboardLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="faqs" element={<FAQs />} />
          <Route path="support" element={<Support />} />
          <Route path="golden" element={<Plans />} />
          <Route path="profile" element={<Profile />} />
          <Route path="credit-report" element={<CreditReport />} />
        </Route>

        {/* Login & OTP Verification (No Navbar/Footer/Sidebar) */}
        <Route path="/login" element={<Login />} />
        <Route path="/otp-verification" element={<OtpVerification />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
