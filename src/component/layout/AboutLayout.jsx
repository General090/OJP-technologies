import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/OJPLogo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

const AboutLayout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/about", label: "Home" },
    { href: "/contact", label: "Contact" },
    { href: "/about-mission", label: "Our Mission" },
  ];

  const location = useLocation();

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="flex items-center justify-between px-4 lg:px-10 bg-white py-5 sticky top-0 z-50">
        <Link to="/about" className="flex items-center">
          <img src={logo} className="w-42 lg:w-52" />
        </Link>

        <div className="hidden lg:flex items-center space-x-8">
          <ul className="flex space-x-6 ">
            {navLinks.map(({ href, label }) => {
              const isActive = location.pathname === href;
              return (
                <li key={href} className="relative group list-none">
                  <Link to={href} className="relative">
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <Link
            to="/about-register"
            className="bg-[#133f51] text-white px-5 py-3 rounded"
          >
            REGISTER NOW
          </Link>
        </div>

        <div className="lg:hidden block">
          <button onClick={handleClick}>
            {isOpen ? (
              <IoMdClose className="text-3xl text-[#133f51]" />
            ) : (
              <RxHamburgerMenu className="text-3xl text-[#133f51]" />
            )}
          </button>
        </div>
      </nav>

      <div className="lg:hidden bg-white w-full p-5">
        {isOpen && (
          <div>
            <ul className="flex flex-col space-y-5 text-[#133f51] mb-5 font-semibold">
              {navLinks.map(({ href, label }) => {
                const isActive = location.pathname === href;
                return (
                  <li key={href} className="relative group list-none">
                    <Link to={href} className="font-medium relative">
                      {label}
                      <span
                        className={`absolute left-0 -bottom-1 h-[3px] transition-all duration-300 ${
                          isActive
                            ? "w-full bg-[#97b088]"
                            : "w-0 bg-[#97b088] group-hover:w-full"
                        }`}
                      ></span>
                    </Link>
                  </li>
                );
              })}
            </ul>
            <Link to="/about-register" className="bg-[#133f51] w-full text-white text-center p-3 rounded">
              REGISTER NOW
            </Link>
          </div>
        )}
      </div>

      <main>{children}</main>

      <footer className="bg-[#97b088] text-white p-5 md:p-10">
        <div className="md:flex mb-10 gap-10">
          <div>
            <h1 className="mb-5 font-bold">Contact Us</h1>
            <p>Email: support@ojptechnologiesltd.com</p>
            <p>Phone: +234 906 495 5374</p>
            <p>Address: Umudim, Nnewi, Anambra State, Nigeria</p>
          </div>

          <div>
            <h1 className="mb-5 font-bold mt-5 md:mt-0">Quick Links</h1>
            <ul className="flex flex-col space-y-5">
              <Link to="/about" className="hover:underline">Home</Link>
              <Link to="/about-mission" className="hover:underline">Our Mission</Link>
              <Link to="/courses" className="hover:underline">Courses</Link>
              <Link to="/contact" className="hover:underline">Contact Us</Link>
            </ul>
          </div>
        </div>

        <p className="text-center">© 2025 OJP Technologies Ltd. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AboutLayout;
