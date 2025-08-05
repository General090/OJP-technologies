import AboutLayout from "../layout/AboutLayout";
import Learn from "../../assets/learn.png";
import Vid from "../../assets/vid.mp4";
import { Link } from "react-router-dom"
import Service from "./service"
import Course from "./course";

const About = () => {
  return (
    <AboutLayout>
      <div className="bg-[#133f51] lg:p-10 px-5 md:px-0">
        <div className="flex items-center justify-between">
          <div className="text-white md:pl-5 pl-0">
            <h1 className="text-3xl lg:text-4xl font-bold">
              Welcome to <br />{" "}
              <span className="text-[#97b088]">OJP Technologies Ltd</span>
            </h1>
            <h1 className="text-3xl lg:text-4xl font-bold pb-4">
              Where Innovation Meets Excellence!
            </h1>
            <p className="text-xl pb-5 md:w-100">
              We are committed to delivering high-quality services and courses
              that meet the evolving needs of our clients.
            </p>
            <div className="flex items-center gap-5 text-lg">
              <button className="bg-[#97b088] text-[#1f324b] hover:bg-[#96c27d] px-7 py-3 rounded-lg">
                Get Started
              </button>
              <button className="bg-white text-[#1f324b] px-7 py-3 rounded-lg">
                Our Mission
              </button>
            </div>
          </div>

          <div className="w-100 h-100 hidden lg:block rounded-full overflow-hidden border-8 border-white">
            <img src={Learn} className="ww-full h-full object-cover" />
          </div>
        </div>

        <div className="md:flex items-center gap-10 mt-20 md:pl-5 lg:pl-0 pb-10">
          <video autoplay muted loop controls className="md:w-[50%] h-[40%] mb-14 md:mb-0">
            <source src={Vid} type="video/mp4"></source>
          </video>

          <div className="md:w-[50%] text-white text-lg space-y-5">
            <h1 className="text-3xl md:text-4xl font-bold">Our Introduction Video</h1>
            <p>Watch our introduction video to learn more about OJP Technologies Ltd. and how we are driving innovation and excellence in the tech industry.</p>
            <p>Our team of experts is committed to delivering high-quality services and courses that meet the evolving needs of our clients. Join us on our journey to bridge the gap between technological innovation and practical business applications.</p>
          </div>
        </div>
      </div>

      <div className="bg-[#133f51] my-20 md:my-60 text-lg px-5 py-10 lg:px-10 space-y-5 text-white">
        <h1 className="text-2xl md:text-4xl text-[#97b088]">OJP TECHNOLOGIES LTD</h1>
        <p>OJP TECHNLOGIES Welcome to OJP Technologies Ltd., a leading provider of innovative tech solutions and education. OJP stands for Objectively Judged Potential—a principle that defines our journey and purpose. Founded with a vision to bridge the gap between technological innovation and practical business applications, we objectively assess and unlock the potential in every project, partnership, and individual we engage with. We have grown into a trusted partner for businesses and individuals seeking excellence in the digital realm. We are passionate about equipping businesses and individuals with the skills and knowledge to thrive in an ever-evolving, tech-driven world  <Link to="/about-mission" className="text-[#97b088]">Read More...</Link></p>
      </div>

      <Service />
      <Course />
    </AboutLayout>
  );
};

export default About;
