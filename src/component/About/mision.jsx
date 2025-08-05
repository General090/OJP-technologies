import React from "react";
import AboutLayout from "../layout/AboutLayout";
import Learn from "../../assets/learn.png"

const mision = () => {
  return (
    <AboutLayout>
      <div className="bg-[#133f51] text-white">
        <div className="md:flex items-center gap-20 px-5 lg:px-16 pt-10 pb-16">
            <img src={Learn} className="w-full md:w-[40%] mb-5 md:mb-0 rounded-lg border-2 border-white" />

            <div className="w-full md:w-[60%] text-lg">
                <h1 className="text-xl font-bold">Our Mission</h1>
                <p>To empower businesses and individuals through innovative technology solutions and education, driving sustainable growth and excellence in an ever-evolving digital landscape.</p>

                <h1 className="text-xl font-bold mt-5">Our Vision</h1>
                <p>To become a leading provider and premier partner of transformative tech solutions and education in Nigeria and beyond, driving innovation and excellence in the industry and delivering lasting value for our clients and students.</p>
            </div>
        </div>

        <div className="mb-20 mx-5 lg:mx-16 text-xl pb-10">
            <h1 className="text-4xl text-[#97b088] pb-3">Our Story</h1>
            <p><span className="font-bold">OJP TECHNOLOGIES</span> Welcome to OJP Technologies Ltd., a leading provider of innovative tech solutions and education. OJP stands for Objectively Judged Potential—a principle that defines our journey and purpose. Founded with a vision to bridge the gap between technological innovation and practical business applications, we objectively assess and unlock the potential in every project, partnership, and individual we engage with. We have grown into a trusted partner for businesses and individuals seeking excellence in the digital realm. We are passionate about equipping businesses and individuals with the skills and knowledge to thrive in an ever-evolving, tech-driven world. OJP Technologies Ltd is dedicated to developing and maintaining a culture that drives values to improve businesses. We understand that successful digital transformation goes beyond simply adopting and implementing new technologies—it requires a strategic approach that aligns with business goals, enhances core capabilities, and ensures long-term success. Our team of experts is committed to delivering innovative solutions that drive growth, improve efficiency, and create value for our clients. We leverage cutting-edge technologies, industry best practices, and proven methodologies to help businesses achieve their goals and stay ahead of the competition.</p>

            <h1 className="text-4xl text-[#97b088] pb-3 pt-10">Our Approach</h1>
            <p>We partner with startups, existing businesses, and educational institutions to enhance the success rate of software projects through a thorough discovery phase. We objectively assess the potential of every project to ensure the best possible outcome. This process translates business requirements into concrete techno-functional details. By carefully analyzing needs and aligning them with practical solutions, we ensure that no critical step is overlooked, setting the foundation for seamless execution and long-term success.</p>
        </div>
      </div>
    </AboutLayout>
  );
};

export default mision;
