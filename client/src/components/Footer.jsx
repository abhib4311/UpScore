import Logo from "./CommonCom/Logo";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-5 md:px-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        <div>
          <Logo />
          <h2 className="text-xl font-bold">
            UP<span className="text-gray-400">Score</span>
          </h2>
          <p className="mt-4 text-gray-300">
            SingleDebt specializes in effective debt management solutions,
            helping individuals and businesses reduce their debt and regain
            financial stability.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-x-twitter"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-pinterest"></i>
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="mt-3 space-y-2 text-gray-400">
            <li>
              <a href="#" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                #DebtFreeIndia
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="mt-3 space-y-2 text-gray-400">
            <li>
              <a href="/plans/free" className="hover:text-white">
                Free Plan
              </a>
            </li>
            <li>
              <a href="/plans/gold" className="hover:text-white">
                Gold Plan
              </a>
            </li>
            <li>
              <a href="/plans/platinum" className="hover:text-white">
                Platinum Plan
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Services</h3>
          <ul className="mt-3 space-y-2 text-gray-400">
            <li>
              <a href="/services/credit-score" className="hover:text-white">
                Credit Score & Report
              </a>
            </li>
            <li>
              <a
                href="/services/debt-consultation"
                className="hover:text-white"
              >
                Debt Consultation & Management
              </a>
            </li>
            <li>
              <a
                href="/services/harassment-relief"
                className="hover:text-white"
              >
                Harassment Relief
              </a>
            </li>
            <li>
              <a href="/services/debt-solution" className="hover:text-white">
                Debt Management & Solution
              </a>
            </li>
            <li>
              <a href="/services/secured-loan" className="hover:text-white">
                Secured Loan for Single Debt
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Contact</h3>
          <ul className="mt-3 space-y-2 text-gray-400">
            <li>📞 +91 (961) 910-3594</li>
            <li>☎ 022 6876 2652</li>
            <li>✉ info@singledebt.in</li>
            <li>
              📍 Plot No.1, Shah Industrial Estate, Veera Desai Rd, Andheri
              West, Mumbai-53
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
