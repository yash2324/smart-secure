// AboutUs.js

import React from "react";

const AboutUs = () => {
  const teamMembers = [
    {
      name: "Yash Gupta",
      role: "CSE Sophmore @ MAIT",
      bio: "Yash is an aspiring entrepreneur currently in his second year pursuing engineering. He has a passion for innovation and business management, driving our team towards achieving our mission and vision.",
    },
    {
      name: "Deven Puri",
      role: "CSE Sophmore @ MAIT",
      bio: "Deven is a tech enthusiast and a second-year engineering student. With a focus on software development, she plays a key role in overseeing the technical aspects of our projects and ensuring they meet high standards.",
    },
    {
      name: "Nimisha Bhateja",
      role: "CSE Sophmore @ MAIT",
      bio: "Nimisha is a talented designer with an eye for aesthetics. She leads our design team in creating visually stunning and user-friendly interfaces for our projects.",
    },
    {
      name: "Anurag Chaudhary",
      role: "AI&DS Sophmore @MAIT",
      bio: "Anurag ,a second-year engineering student, is passionate about artificial intelligence. As an AI Developer, she contributes to the implementation of cutting-edge AI solutions in our projects..",
    },
  ];

  return (
    <div className="bg-gray-100 h-full w-full py-16">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Meet Our Team</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              <h2 className="text-xl font-bold mb-2">{member.name}</h2>
              <p className="text-gray-600 mb-2">{member.role}</p>
              <p className="text-gray-700">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
