import { useState } from "react";
import Cyber from "../../../assets/cyber.png";
import Robot from "../../../assets/robotics.png";
import Roofing from "../../../assets/roofing.png";
import Web from "../../../assets/web.png";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom"

const course = () => {
  const slides = [
    {
      id: 1,
      image: Cyber,
      title: "CYBERSECURITY",
      description:
        "Become a cybersecurity expert. Dive into cybersecurity fundamentals and advance security measures.",
      button: "Apply Now",
    },
    {
      id: 2,
      image: Robot,
      title: "Robotics and AI",
      description:
        "Explore the cutting edge of robotics and Ai building intelligent systems for various application",
      button: "Apply Now",
    },
    {
      id: 3,
      image: Roofing,
      title: "Roofing Technology",
      description:
        "Develop innovative IOS apps using Swift and Xcode, ensuring seamless User Experience",
      button: "Apply Now",
    },
    {
      id: 4,
      image: Web,
      title: "Website Development",
      description:
        "Master Frontend and Backend technologies to develop dynamic and responsive website",
      button: "Apply Now",
    },
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    if (current < slides.length - 1) {
        setCurrent(current + 1);
      }
  };

  const prevSlide = () => {
    if (current > 0) {
        setCurrent(current - 1);
      }
  };

  const { image, title, description, button } = slides[current];

  return (
    <div className="lg:px-10 mb-32">
      <div className="pt-20">
        <h1 className="text-[#97b088] text-center text-4xl font-bold pb-5">Our Courses</h1>
        <p className="text-[#133f51] text-xl text-center md:text-left px-5 lg:px-0">
          Ready to transform your future? Join us today and discover a world of
          possibilities in tech. Apply now for our cutting-edge courses and take
          your career to the next level
        </p>
      </div>

      <div className="flex items-center justify-center bg-white py-10">
        <div className="flex flex-col md:flex-row rounded-lg relative overflow-hidden shadow-lg">
          {/* Image */}
          <div className="md:w-1/2 md:min-h-[500px] max-h-[350px] overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Content */}
          <div className="md:w-1/2 bg-black text-white p-10 flex flex-col justify-center items-center text-center">
            <h2 className="text-green-400 font-bold text-2xl mb-4">{title}</h2>
            <p className="mb-6">{description}</p>
            <Link to="/about-register" className="bg-[#97b088] hover:bg-[#133f51] text-white px-5 py-2 rounded-lg mb-4">
              {button}
            </Link>

            {/* Navigation Buttons */}
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
              <button
                 onClick={prevSlide}
                 disabled={current === 0}
                 className={`bg-gray-200 text-black rounded-full p-2 shadow ${current === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-300"
                 }`}
              >
                <IoIosArrowBack />
              </button>
            </div>
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
              <button
                onClick={nextSlide}
                disabled={current === slides.length - 1}
                className={`bg-green-400 text-white rounded-full p-2 shadow ${current === slides.length - 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-green-500"
                }`}
              >
                <IoIosArrowForward />
              </button>
            </div>

            <Link to="/courses" className="absolute bottom-6 right-6 bg-[#97b088] hover:bg-[#133f51] text-white px-5 py-2 rounded-xl">
              See More...
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default course;
