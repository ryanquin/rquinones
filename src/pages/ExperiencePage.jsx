import React, { useState } from "react";

function ExperiencePage() {
  const [activeTab, setActiveTab] = useState(0);
  const workExperiences = [
    {
      company: "Vértere Global Solutions, Inc",
      role: "Full Stack Developer",
      duration: "December 2021 - Present",
      description: [
        "Currently deployed to Metropolitan Bank and Trust Company (Metrobank).",
        "Collaborated on building reusable micro-components for a Micro-Frontend (MFE) Architecture. Integrated Material UI for a more consistent and user-friendly design.",
        "Frontend: focused development using React and Redux-Saga for state management and side effects handling. Focusing on alignment with the customer journey document to improve user experience.",
        "Backend: Node JS, Loopback 4 and 3. Development of secure APIs for bank security.",
        "Database: Oracle and Mongo DB",
        "Server: Managing Linux Dev Environment",
        "*Team Management if team leads are not available.",
        "Regularly used Gitlab for version control.",
        "Utilized Jira to track and manage tasks, user stories, and bugs.",
      ],
    },
    {
      company: "Akatek Solutions Inc.",
      role: "Full Stack Developer",
      duration: "February 2020 - December 2021",
      description: [
        "Discussed website and system requirements with the BA's to produce actionable development plans.",
        "Discussed project progress with the users, collected feedback on different stages, and directly addressed concerns.",
        "Developed an efficient and maintainable System using PostgreSQL/Sequelize, Angular 12 and Node.js/Express",
        "Written System documentation and user guide for the systems.",
        "Developed applications using PostgreSQL/Sequelize, Angular 12 and Node.js/Express.",
        "Implemented TypeScript for scalable and maintainable codebases.",
      ],
    },
    {
      company: "AXA Philippines",
      role: "Middleware Node.js Developer",
      duration: "July 2019 - January 2020",
      description: [
        "Developed middleware solutions to facilitate backend-to-frontend communication.",
        "Responsible for frontend development as well.",
        "Discussed website and system requirements with the BA's to produce actionable development plans.",
        "Discussed project progress with the users, collected feedback on different stages, and directly addressed concerns.",
        "Written System documentation and user guide for the systems.",
      ],
    },
    {
      company: "SKYLUSTER Technology, Inc.",
      role: "Full Stack Developer",
      duration: "October 2018 - June 2019",
      description: [
        "Handles the server, front-end, and back-end development of trading, media, gaming, and cryptocurrency-related websites.",
        "Develops API using Laravel, Node.js, mySql , MSSql, MongoDB.",
        "Setup Unix Cloud Server for APIs, websites, admin panel using LAMP stack, LEMP stack, Docker.",
        "Develops websites using React.js, Vue.js as reusable front-end components.",
        "Works with the designer and back end developers to ensure quality during development.",
        "Develops and optimizes the Admin panel across all projects.",
        "Responsible for web automation through API.",
        "Supports and communicates with international clients.",
      ],
    },
    {
      company: "Integramme Co. Ltd",
      role: "Junior Programmer",
      duration: "July 2017 - September 2018",
      description: [
        "Web-Based Systems Development.",
        "Back-End Developer.",
        "Client Company Websites with CMS(Content Management System).",
        "Renovation of existing Web-Based Systems (Landbank Procurement System).",
        "System Testing, Search systems internal findings/errors, Hunt and fix bugs.",
        "Presenting systems for the clients.",
        "Making of User Manual for every account after the system is tailor fitted.",
      ],
    },
  ];
  return (
    <div className="content-box">
      <div className="text-5xl text-left">Experience</div>
      <div className="block py-5">
        <div className="w-100">
          <div className="flex flex-wrap space-x-8">
            <div className="flex flex-col mobile-lg:![w-100%] space-y-4">
              {workExperiences.map((experience, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`py-2 px-4 text-lg text-left font-semibold ${
                    activeTab === index
                      ? "border-l-4 border-blue-500 text-blue-500"
                      : "text-gray-500 hover:text-blue-500"
                  }`}
                >
                  {experience.company}
                </button>
              ))}
            </div>
            <div className="flex-1">
              <div className="p-6 border-l-2">
                <p className="text-xl font-semibold">
                  {workExperiences[activeTab].role}
                </p>
                <p className="text-sm text-gray-500">
                  {workExperiences[activeTab].duration}
                </p>
                <ul className="mt-4 list-disc pl-5">
                  {workExperiences[activeTab].description.map((item, index) => (
                    <li key={index} className="p-1">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExperiencePage;
