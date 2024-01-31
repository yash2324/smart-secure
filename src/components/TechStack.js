// TechStack.js

import React from "react";

const TechStack = () => {
  const techStackItems = [
    { name: "Redux", logo: "https://redux.js.org/img/redux.svg" },
    {
      name: "React",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    },
    {
      name: "JavaScript",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg",
    },
    {
      name: "Tailwind CSS",
      logo: "https://miro.medium.com/v2/resize:fit:512/1*JEHLmWo6_SrpHPiP4AimIw.png",
    },
    {
      name: "HTML",
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
    },
    {
      name: "Flask",
      logo: "https://flask.palletsprojects.com/en/3.0.x/_images/flask-horizontal.png",
    },
    {
      name: "Python",
      logo: "https://www.python.org/static/community_logos/python-logo-master-v3-TM.png",
    },
  ];

  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Tech Stack</h1>
        <div className="flex flex-wrap justify-center m-4 gap-8">
          {techStackItems.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 w-40 m-2 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              <img
                src={item.logo}
                alt={item.name}
                className="mx-auto mb-4"
                style={{ maxHeight: "50px" }}
              />
              <h2 className="text-xl text-center font-bold mb-2">
                {item.name}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
