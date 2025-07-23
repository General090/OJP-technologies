import { useState } from "react";
import Nav from "../layout/Nav";
import features from "./features";

const FAQ = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    }
  return (
    <Nav>
      <div className="bg-[#f5f5f5] text-[#133f51] pt-20">
        <h1>Frequently Asked Questions (FAQs)</h1>

        <div>
          {features.map((feature) => (
            <div key={feature.id} className="" onClick={handleClick}>
              <div>
                <h2>{feature.header}</h2>
                {/* { !isOpen ? (

                )} */}
              </div>


            </div>
          ))}
        </div>
      </div>
    </Nav>
  );
};

export default FAQ;
