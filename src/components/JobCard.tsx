import Image from "next/image";
import React from "react";
import logo from "../assets/job-logo/scoot.svg";

const JobCard = () => {
  return (
    <div className="container">
      <div className="jobCard">
        <div className="jobCard__inner">
          <Image src={logo} alt="" />
          <div className="jobCard__detail">
            <span>5h ago</span>
            <span>Full Time</span>
          </div>
          <p className="jobCard__title">Senior Software Engineer</p>
          <span className="jobCard__name">Scoot</span>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
