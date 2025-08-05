import React, { useRef } from "react";
import AboutLayout from "../../layout/AboutLayout";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import emailjs from "@emailjs/browser";
import Location from "./location"

const Contact = () => {
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

export default Contact;
