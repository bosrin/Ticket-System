import { FaFacebookF, FaTwitter, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="w-full bg-black text-gray-400">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Logo / About */}
          <div className="flex flex-col gap-4 max-w-sm">
            <h2 className="text-white text-2xl font-bold">
              CS — Ticket System
            </h2>
            <p className="text-sm leading-7">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has been the industry's standard dummy text since the 1500s.
            </p>
          </div>

          {/* Company */}
          <div className="flex flex-col gap-8">
            <h3 className="text-white font-semibold">Company</h3>
            <ul className="flex flex-col gap-3 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Our Mission</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Sales</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-3">
            <h3 className="text-white font-semibold">Services</h3>
            <ul className="flex flex-col gap-3 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Products & Services</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Customer Stories</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Download Apps</a></li>
            </ul>
          </div>

          {/* Information & Social */}
          <div className="flex flex-col sm:flex-row sm:justify-between gap-8">
            
            {/* Information */}
            <div className="flex flex-col gap-3">
              <h3 className="text-white font-semibold">Information</h3>
              <ul className="flex flex-col gap-3 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms & Conditions</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Join Us</a></li>
              </ul>
            </div>

            {/* Social */}
            <div className="flex flex-col gap-3">
              <h3 className="text-white font-semibold">Social</h3>
              <div className="flex flex-col gap-3 text-sm">
                <a href="#" className="flex items-center gap-3 hover:text-white transition-colors">
                  <FaTwitter size={16} /> @CS_Ticket
                </a>
                <a href="#" className="flex items-center gap-3 hover:text-white transition-colors">
                  <FaLinkedinIn size={16} /> @CS_Ticket
                </a>
                <a href="#" className="flex items-center gap-3 hover:text-white transition-colors">
                  <FaFacebookF size={16} /> @CS_Ticket
                </a>
                <a href="mailto:support@cst.com" className="flex items-center gap-3 hover:text-white transition-colors">
                  <FaEnvelope size={16} /> support@cst.com
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-sm text-gray-500">
          © 2025 CS — Ticket System. All rights reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;