import { FaFacebookF, FaTwitter, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="w-full bg-black text-gray-400">
      <div className="max-w-360 mx-auto px-8 lg:px-20 py-14">

        {/* 5 Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12">

          {/* Logo / About */}
          <div className="max-w-xs flex flex-col gap-5">
           <h2 className="text-white text-2xl font-bold whitespace-nowrap">
            CS — Ticket System </h2>
            <p className="text-sm leading-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </div>

          {/* Company */}
          <div className="ml-16 flex flex-col gap-5">
            <h3 className="text-white font-semibold">Company</h3>
            <ul className="flex flex-col gap-3 text-sm">
              <li><a href="#" className="hover:text-white transition">About Us</a></li>
              <li><a href="#" className="hover:text-white transition">Our Mission</a></li>
              <li><a href="#" className="hover:text-white transition">Contact Sales</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-5">
            <h3 className="text-white font-semibold">Services</h3>
            <ul className="flex flex-col gap-3 text-sm">
              <li><a href="#" className="hover:text-white transition">Products & Services</a></li>
              <li><a href="#" className="hover:text-white transition">Customer Stories</a></li>
              <li><a href="#" className="hover:text-white transition">Download Apps</a></li>
            </ul>
          </div>

          {/* Information */}
          <div className="flex flex-col gap-5">
            <h3 className="text-white font-semibold">Information</h3>
            <ul className="flex flex-col gap-3 text-sm">
              <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-white transition">Join Us</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="flex flex-col gap-5">
            <h3 className="text-white font-semibold">Social Links</h3>
            <div className="flex flex-col gap-3 text-sm">
              <a href="#" className="flex items-center gap-3 hover:text-white transition">
                <FaTwitter size={16} /> @CS — Ticket System
              </a>
              <a href="#" className="flex items-center gap-3 hover:text-white transition">
                <FaLinkedinIn size={16} /> @CS — Ticket System
              </a>
              <a href="#" className="flex items-center gap-3 hover:text-white transition">
                <FaFacebookF size={16} /> @CS — Ticket System
              </a>
              <a href="mailto:support@cst.com" className="flex items-center gap-3 hover:text-white transition">
                <FaEnvelope size={16} /> support@cst.com
              </a>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-14 pt-6 text-center text-sm text-gray-500">
          © 2025 CS — Ticket System. All rights reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;
