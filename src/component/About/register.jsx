import { useState, useRef } from "react";
import AboutLayout from "../layout/AboutLayout";

const Register = () => {
  const [error, setError] = useState("");
  const [skills, setSkills] = useState("");
  const form = useRef();

  const handleChange = (e) => {
    setSkills(e.target.value);
  };

  const SubmitForm = (e) => {
    e.preventDefault();

    const fullName = form.current["fullname"].value.trim();
    const email = form.current["email"].value.trim();
    const number = form.current["number"].value.trim();
    const course = form.current["course"].value.trim();
    const experience = form.current["experience"].value.trim();
    const education = form.current["education"].value.trim();

    if (!fullName || !email || !number || !course || !experience || !education) {
      setError("Please fill in all fields before submitting.");
      return;
    }

    // Submit logic here
    setError("");
    alert("Form submitted successfully!");


    form.current.reset();  // Clears inputs and textareas
    setSkills(""); 
  };

  return (
    <AboutLayout>
      <div className="bg-[#f3f4f6] pt-10 pb-20">
        <form ref={form} onSubmit={SubmitForm} className="bg-white mx-5 lg:mx-40 px-5 lg:px-10 rounded-md pb-10">
          <h1 className="text-center py-10">Course Application Form</h1>

          {/* Error message */}
          {error && <p className="text-red-600 font-medium text-center mb-4">{error}</p>}

          <div className="flex flex-col mb-3">
            <label className="mb-2">Full Name:</label>
            <input
              name="fullname"
              type="text"
              className="shadow-sm border-2 p-2 border-[#e5e7eb] rounded-lg outline-none"
              placeholder="Enter your full name"
            />
          </div>

          <div className="flex flex-col mb-3">
            <label className="mb-2">Email:</label>
            <input
              name="email"
              type="text"
              className="shadow-sm border-2 p-2 border-[#e5e7eb] rounded-lg outline-none"
              placeholder="Enter your email address"
            />
          </div>

          <div className="flex flex-col mb-3">
            <label className="mb-2">Phone Number:</label>
            <input
              name="number"
              type="text"
              className="shadow-sm border-2 p-2 border-[#e5e7eb] rounded-lg outline-none"
              placeholder="Enter your phone number"
            />
          </div>

          <div className="flex flex-col mb-3">
            <label className="mb-2">Select Course:</label>
            <select
              name="course"
              value={skills}
              onChange={handleChange}
              className="shadow-sm border-2 p-2 border-[#e5e7eb] rounded-lg outline-none"
            >
              <option value="">Select course you are applying for</option>
              <option value="cyber">Cybersecurity</option>
              <option value="data">Data Science</option>
              <option value="analytics">Data Analytics</option>
              <option value="apple">Apple App Development</option>
              <option value="android">Android App Development</option>
              <option value="game">Game App Development</option>
              <option value="roofing">Roofing Technology</option>
              <option value="robot">Robotics and AI</option>
              <option value="web">Web Development</option>
              <option value="program">Programming</option>
              <option value="product">Product Design</option>
            </select>
          </div>

          <div className="flex flex-col mb-3">
            <label className="mb-2">Experience:</label>
            <textarea
              name="experience"
              className="shadow-sm border-2 p-2 h-[20vh] border-[#e5e7eb] rounded-lg outline-none"
              placeholder="Describe any relevant experience"
            />
          </div>

          <div className="flex flex-col mb-3">
            <label className="mb-2">Education:</label>
            <textarea
              name="education"
              className="shadow-sm border-2 p-2 h-[20vh] border-[#e5e7eb] rounded-lg outline-none"
              placeholder="Your education background"
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-[#97b088] hover:bg-[#133f51] font-bold text-white p-3 rounded-sm cursor-pointer"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </AboutLayout>
  );
};

export default Register;
