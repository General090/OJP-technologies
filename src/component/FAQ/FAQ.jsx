import { useState } from "react";
import Nav from "../layout/Nav";
import features from "./features";
import { IoCloseOutline } from "react-icons/io5";
import { HiOutlinePlus } from "react-icons/hi";

const FAQ = () => {
  const [openId, setOpenId] = useState(null);

  const handleClick = (id) => {
    setOpenId(prevId => (prevId === id ? null : id));
  };
  return (
    <Nav>
      <div className="bg-[#f5f5f5] text-[#133f51] pt-20">
        <h1 className="font-bold text-2xl px-5 md:px-0 md:text-4xl pb-5 text-center">
          Frequently Asked Questions (FAQs)
        </h1>

        <div>
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white rounded-xl mx-5 hover:bg-gray-300 md:mx-10 lg:mx-60 mb-5 py-6 px-5 cursor-pointer"
              onClick={() => handleClick(feature.id)}
            >
              <div className="flex items-center justify-between">
                <h2 className="font-bold">{feature.header}</h2>
                <button
                  className="bg-[#133f51] text-white p-2 rounded-md text-xl cursor-pointer"
                  onClick={() => handleClick(feature.id)}
                >
                  {openId === feature.id ? (
                    <IoCloseOutline />
                  ) : (
                    <HiOutlinePlus />
                  )}
                </button>
              </div>

              {openId === feature.id && <p className="pt-5">{feature.word}</p>}
            </div>
          ))}
        </div>
      </div>
    </Nav>
  );
};

export default FAQ;
