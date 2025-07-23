import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/OJPLogo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

const Nav = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/mission", label: "Our Mission" },
    { href: "/about", label: "About Us" },
    { href: "/faq", label: "FAQ" },
  ];

  const location = useLocation();

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="flex items-center justify-between px-4 lg:px-10 bg-white py-5 sticky top-0 z-50">
        <div className="flex items-center">
          <img src={logo} className="w-42 lg:w-52" />
        </div>

        {/* Desktop view */}
        <div className="hidden lg:flex items-center space-x-8">
          <ul className="flex space-x-6 text-[#133f51] font-semibold">
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

          <button className="bg-[#133f51] text-white px-5 py-3 rounded">
            REGISTER NOW
          </button>
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

      <div className="lg:hidden bg-[#133f51] w-full p-5">
        {isOpen && (
          <div>
            <ul className="flex flex-col space-y-5 text-white font-semibold">
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
            <button className="bg-[#97b088] w-full text-white mt-5 text-center py-3 rounded">
              REGISTER NOW
            </button>
          </div>
        )}
      </div>

      <main>{children}</main>

      <div className="md:flex gap-0 md:gap-5 lg:gap-0 items-center md:justify-between pt-5 md:pt-0 px-5 bg-[#133f51]  text-white">
        <div>
          <p>
            © OJP Technologies Ltd 2025, All rights reserved. Privacy Policy |
            Terms of Use
          </p>
        </div>

        <div>
          <ul className="flex items-center gap-5 py-6 text-[#97b088]">
            <li>About Us</li>
            <li>FAQ</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
