import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowRight,
  FaTwitter,
} from "react-icons/fa";

const footerLinks = [
  { name: "Home", href: "#" },
  { name: "Products", href: "#Product" },
  { name: "Office", href: "#office" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer id="footer" className="bg-gray-950 text-gray-300">

      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-4 md:grid-cols-2 gap-12">

        {/* Company */}
        <div>
          <h2 className="text-2xl font-bold text-white">
            ENAGIC BHARAT
          </h2>

          <p className="mt-6 leading-8 text-gray-400">
            Enagic is a world leader in water ionizer technology,
            delivering innovative health solutions that improve the
            quality of everyday life through clean and alkaline water.
          </p>

          {/* Social */}
          <div className="flex gap-4 mt-8">

            <a
              href="https://www.facebook.com/pintuattends" target="_blank"
              className="w-11 h-11 rounded-full bg-gray-800 flex items-center justify-center hover:bg-red-600 duration-300"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.instagram.com/pintuattends/" target="_blank"
              className="w-11 h-11 rounded-full bg-gray-800 flex items-center justify-center hover:bg-pink-600 duration-300"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.youtube.com/@pintuattends" target="_blank"
              className="w-11 h-11 rounded-full bg-gray-800 flex items-center justify-center hover:bg-red-700 duration-300"
            >
              <FaYoutube />
            </a>

            <a
              href="https://x.com/pintuattends" target="_blank"
              className="w-11 h-11 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 duration-300"
            >
              <FaTwitter />
            </a>

          </div>
        </div>

        {/* Quick Links */}
        <div>

          <h3 className="text-2xl text-white font-semibold mb-6">
            Quick Links
          </h3>

          <ul className="space-y-4">
            {footerLinks.map((item) => (
              <li
                key={item.name}
                className="flex items-center gap-3 hover:text-red-500 cursor-pointer duration-300"
              >
                <FaArrowRight className="text-sm" />
                <a href={item.href}>{item.name}</a>
              </li>
            ))}

          </ul>

        </div>

        {/* Products */}
        <div>

          <h3 className="text-2xl text-white font-semibold mb-6">
            Our Products
          </h3>

          <ul className="space-y-4">

            {[
              "Leveluk K8",
              "SD501",
              "JRIV",
              "Anespa",
              "Ukon",
              "Super 501",
              
            ].map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 hover:text-red-500 cursor-pointer duration-300"
              >
                <FaArrowRight className="text-sm" />
                {item}
              </li>
            ))}

          </ul>

        </div>

        {/* Contact */}
        <div>

          <h3 className="text-2xl text-white font-semibold mb-6">
            Contact Us
          </h3>

          <div className="space-y-6">

            <div className="flex gap-4">
              <FaMapMarkerAlt className="text-red-500 text-xl mt-1" />
              <p>
              1st Floor 11-12, Coral Tower, Narendra Nagar, Sodala, Jaipur, Rajasthan, 302019

              </p>
            </div>

            <div className="flex gap-4">
              <FaPhoneAlt className="text-red-500" />
              {/* <p>+91 7023320977</p> */}
              <a href="tel:+917023320977">Call us at +91 7023320977</a>
            </div>

            <div className="flex gap-4">
              <FaEnvelope className="text-red-500" />
             <a href="mailto:info@localpintu.com">Email us at info@localpintu.com</a>
            </div>

          </div>

        </div>

      </div>

      {/* Divider */}

      <div className="border-t border-gray-800"></div>

      {/* Bottom */}

      <div className="max-w-7xl mx-auto px-6 py-6 text-center ">

        <p className="text-mx text-gray-400">
          © 2026 ENAGIC BHARAT. All Rights Reserved.
        </p>



      </div>

    </footer>
  );
}
