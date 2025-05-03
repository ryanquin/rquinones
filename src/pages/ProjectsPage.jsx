import React from "react";

import axaImg from "../assets/axa.png";
import pfImg from "../assets/pf.png";
import wmImg from "../assets/wm.png";

function ProjectsPage() {
  return (
    <div className="content-box">
      <div className="text-5xl text-left">Projects</div>
      <div className="flex flex-wrap py-5">
        <div className="w-[100%] flex flex-wrap">
          <div className="w-[50%] mobile-lg:!w-[100%] p-3 my-auto">
            <img className="w-auto h-auto" src={wmImg} alt="RQ" />
            <div className="text-xl text-justify">
              {" "}
              Metrobank - Wealth Manager{" "}
            </div>
          </div>
          <div className="w-[50%] mobile-lg:!w-[100%] p-3">
            <p>
              This is an investment facility available on Metrobank Online. You
              can view your outstanding treasury portfolio, explore additional
              options for investing, and raise call requests for a more in-depth
              discussion with an Investment Specialist. Know more about the
              features of our online investment management facility below.
            </p>
            <p>
              Metrobank - Wealth Manager is developed using "Backend: Node JS,
              Loopback 4 and 3", "Frontend: React" and "Database: Oracle and
              Mongo DB".
            </p>
            <p>
              Project Website: <span></span>
              <a
                target="blank"
                href="https://www.metrobank.com.ph/services/wealth-manager"
              >
                <u>https://www.metrobank.com.ph/services/wealth-manager</u>
              </a>
            </p>
          </div>
        </div>
        <hr className="my-4 w-[100%]" />
        <div className="w-[100%] flex flex-wrap">
          <div className="w-[50%] mobile-lg:!w-[100%] p-3 my-auto">
            <img className="w-auto h-auto" src={pfImg} alt="RQ" />
            <div className="text-xl text-justify"> Pass It Forward </div>
          </div>
          <div className="w-[50%] mobile-lg:!w-[100%] p-3">
            <p>
              Pass It Forward empowers everyone to support causes together and
              change the world for the better. We aim to transform the
              traditional giving process by introducing an all-in-one platform
              while maintaining low costs. We enable users to manage their
              giving cycles seamlessly with powerful technology and competitive
              pricing. We also help small and medium companies take part in the
              cycle of giving by engaging their employees, changing the
              corporate culture, and creating real impact using SaaS technology.
            </p>
            <p>
              The website is developed using PostgreSQL/Sequelize, Angular 12
              and Node.js/Express.
            </p>
            <p>
              Project Website: <span></span>
              <a target="blank" href="https://www.passitforward.com/">
                <u>https://www.passitforward.com/</u>
              </a>
            </p>
          </div>
        </div>
        <hr className="my-4 w-[100%]" />
        <div className="w-[100%] flex flex-wrap">
          <div className="w-[50%] mobile-lg:!w-[100%] p-3 my-auto">
            <img className="w-auto h-auto" src={axaImg} alt="RQ" />
            <div className="text-xl text-justify"> AXA Philippines Emma </div>
          </div>
          <div className="w-[50%] mobile-lg:!w-[100%] p-3">
            <p>
              Powered by AXA Philippines, Emma by AXA is your dedicated partner
              in your journey towards financial wellness. Access new features,
              including AXA Rescue Line, your access to 24/7 emergency
              assistance, and buy insurance online.
            </p>
            <p>
              The system is developed using Node, Angular, Sail.j, Loopback.js,
              .NET framework, and Microsoft SQL Server
            </p>
            <p>
              Project Website: <span></span>
              <a target="blank" href="https://www.axa.com.ph/emma">
                <u>https://www.axa.com.ph/emma</u>
              </a>
            </p>
          </div>
        </div>
      </div>
      {/* <div className="text-end w-[100%] hover:cursor-default py-5">
        <a
          className="hover:text-lightblue"
          href="https://github.com/ryanquin"
          target="_blank"
        >
          GitHub<i className="fab fa-github fa-lg"></i>
        </a>
      </div> */}
    </div>
  );
}

export default ProjectsPage;
