import Image from "next/image";
import React from "react";
import logo from "../assets/job-logo/scoot.svg";
import { kumbh_sans } from "@/app/layout";

type Props = {
  key: number;
  postedAt: string;
  contract: string;
  position: string;
  company: string;
  location: string;
  logoBg: string;
  logo: string;
};

const JobCard = (props: Props) => {
  return (
    <>
      <button className="jobCard" key={props.key}>
        <div className="jobCard__inner">
          <Image
            src={props.logo}
            alt="company logo"
            width={50}
            height={50}
            style={{ backgroundColor: props.logoBg }}
          />
          <div className="jobCard__detail">
            <span>{props.postedAt} ago</span>
            <span>{props.contract}</span>
          </div>
          <p className="jobCard__title">{props.position}</p>
          <p className="jobCard__company">{props.company}</p>
          <p className="jobCard__location">{props.location}</p>
        </div>
      </button>
    </>
  );
};

export default JobCard;
