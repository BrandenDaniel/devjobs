import Image from "next/image";
import React from "react";
import logo from "../assets/job-logo/scoot.svg";
import { kumbh_sans } from "@/app/layout";

type Props = {
  id: number;
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
      <div className="jobCard" key={props.id}>
        <div className="jobCard__inner">
          <Image src={logo} alt="" style={{ backgroundColor: props.logoBg }} />
          <div className="jobCard__detail">
            <span>{props.postedAt} ago</span>
            <span>{props.contract}</span>
          </div>
          <p className="jobCard__title">{props.position}</p>
          <p className="jobCard__company">{props.company}</p>
          <p className="jobCard__location">{props.location}</p>
        </div>
      </div>
    </>
  );
};

export default JobCard;
