import { useState, useRef } from "react";
import Cyber from "../../../assets/cyber.png";
import Robot from "../../../assets/robotics.png";
import Roofing from "../../../assets/roofing.png";
import Web from "../../../assets/web.png";
import Data from "../../../assets/data.png"
import Analysis from "../../../assets/analysis.png"
import Apple from "../../../assets/apple.png"
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import AboutLayout from "../../layout/AboutLayout";
import Android from "../../../assets/andriod.png"
import Product from "../../../assets/product.png"
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import emailjs from "@emailjs/browser";
import Location from "../contact/location"

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
      image: Data,
      title: "Data Science",
      description:
        "Master data analysis, machine learning and AI with tools like: Python, R and SQL to drive business intelligence and innovation",
      button: "Apply Now",
    },
    {
        id: 3,
        image: Analysis,
        title: "Data Analysis",
        description:
            "Learn to interpret and visualize data using tools like Tableau, Power BI, and Excel to make imformed business decisions",
        button: "Apply Now",
    },
    {
        id: 4,
        image: Apple,
        title: "Apple App Development",
        description:
          "Develop innovative IOS app using Swift and Xcode, ensuring seamless User Expericence",
        button: "Apply Now",
      },
    {
      id: 5,
      image: Android,
      title: "Android App Development",
      description:
        "Gain proficiency in building scalable Android apps using JAVA and Kotlin",
      button: "Apply Now",
    },
    {
        id: 6,
        image: Robot,
        title: "Robotics and AI",
        description:
          "Explore the cutting edge of robotics and Ai building intelligent systems for various application",
        button: "Apply Now",
      },
    {
      id: 7,
      image: Roofing,
      title: "Roofing Technology",
      description:
        "Develop innovative IOS apps using Swift and Xcode, ensuring seamless User Experience",
      button: "Apply Now",
    },
    {
      id: 8,
      image: Web,
      title: "Website Development",
      description:
        "Master Frontend and Backend technologies to develop dynamic and responsive website",
      button: "Apply Now",
    },
    {
      id: 9,
      image: Product,
      title: "Product Design (UI/UX)",
      description:
        "Learn the principles of user centered design to create intutive and engaing products",
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



  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const firstName = form.current["first_name"].value.trim();
    const lastName = form.current["last_name"].value.trim();
    const email = form.current["user_email"].value.trim();
    const message = form.current["message"].value.trim();

    if (!firstName || !lastName || !email || !message) {
      alert("Please fill in all fields before submitting.");
      return;
    }

    emailjs
      .sendForm(
        "service_rg81b9h",
        "template_wy16j4h",
        form.current,
        "pE93eMc2po1q3QLJl"
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          alert("Failed to send message.");
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <AboutLayout>
      <div className="lg:px-10 mb-32">
        <div className="pt-20">
          <h1 className="text-[#97b088] text-center text-4xl font-bold pb-5">
            Our Courses
          </h1>
          <p className="text-[#133f51] text-xl text-center md:text-left px-5 lg:px-0">
            Ready to transform your future? Join us today and discover a world
            of possibilities in tech. Apply now for our cutting-edge courses and
            take your career to the next level
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
              <h2 className="text-green-400 font-bold text-2xl mb-4">
                {title}
              </h2>
              <p className="mb-6">{description}</p>
              <Link
                to="/about-register"
                className="bg-[#97b088] hover:bg-[#133f51] text-white px-5 py-2 rounded-lg mb-4"
              >
                {button}
              </Link>

              {/* Navigation Buttons */}
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                <button
                  onClick={prevSlide}
                  disabled={current === 0}
                  className={`bg-gray-200 text-black rounded-full p-2 shadow ${
                    current === 0
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:bg-gray-300"
                  }`}
                >
                  <IoIosArrowBack />
                </button>
              </div>
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                <button
                  onClick={nextSlide}
                  disabled={current === slides.length - 1}
                  className={`bg-green-400 text-white rounded-full p-2 shadow ${
                    current === slides.length - 1
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:bg-green-500"
                  }`}
                >
                  <IoIosArrowForward />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="md:flex items-center gap-5 px-5 lg:px-16 pt-5 pb-20 bg-[#f5f5f5]">
        <div className="md:w-[40%]">
          <h1 className="font-bold text-xl pb-2 text-center">Contact Us</h1>
          <p className="mb-10">
            Email, call, or complete the form to get in touch with us.
          </p>

          <div>
            <div className="flex gap-3 items-center pb-4">
              <IoMdMail className="text-3xl text-[#97b088]" />
              <p>support@ojptechnologiesltd.com</p>
            </div>

            <div className="flex gap-3 items-center pb-4">
              <FaPhoneAlt className="text-3xl text-[#97b088]" />
              <p>+234 9064955374</p>
            </div>

            <div className="flex gap-3 items-center pb-4">
              <IoLocation className="text-3xl text-[#97b088]" />
              <p>Umudim, Nnewi, Along Traffic Light, Anambra State</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-5 md:p-10 md:w-[60%] shadow-xl rounded-lg">
          <h1 className="font-bold text-xl pb-2">Get in Touch</h1>
          <p className="mb-10">
            We want to hear from you! You can reach us anytime.
          </p>

          <form ref={form} onSubmit={sendEmail}>
            <div className="lg:flex items-center gap-5 mb-5">
              <div className="flex flex-col w-full">
                <label className="pb-2">First Name</label>
                <input
                  type="text"
                  name="first_name"
                  className="border border-[#d1d5db] outline-none rounded-sm mb-5 lg:mb-0 px-2 py-2"
                  placeholder="Enter your first name"
                />
              </div>

              <div className="flex flex-col w-full">
                <label className="pb-2">Last Name</label>
                <input
                  type="text"
                  name="last_name"
                  className="border border-[#d1d5db] outline-none rounded-sm px-2 py-2"
                  placeholder="Enter your last name"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label className="pb-2">Email Address</label>
              <input
                type="email"
                name="user_email"
                className="border border-[#d1d5db] outline-none rounded-sm px-2 py-2 mb-5"
                placeholder="Enter your email address"
              />

              <label className="pb-2">Your Message Here</label>
              <textarea
                name="message"
                className="border border-[#d1d5db] outline-none rounded-sm pt-2 px-2 h-[20vh] mb-5"
                placeholder="Write your message"
              />
            </div>

            <button
              type="submit"
              className="bg-[#97b088] text-white w-full py-2 rounded-sm"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      <Location />
    </AboutLayout>
  );
};

export default course;
