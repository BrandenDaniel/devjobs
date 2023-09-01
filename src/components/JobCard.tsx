import Image from "next/image";
import React, { MouseEvent } from "react";

type Props = {
  id: number;
  postedAt: string;
  contract: string;
  position: string;
  company: string;
  location: string;
  logoBg: string;
  logo: string;
  website: string;
  apply: string;
  description: string;
  requirements: {
    content: string;
    items: string[];
  };
  role: {
    content: string;
    items: string[];
  };
  setIsModalActive: (arg: boolean) => void;
  currentJobDetail: object;
  setCurrentJobDetail: any;
};

const JobCard = (props: Props) => {
  const handleJobCardClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    let jobDetails = {
      id: props?.id,
      company: props?.company,
      logo: props?.logo,
      logoBackground: props?.logoBg,
      position: props?.position,
      postedAt: props?.postedAt,
      contract: props?.contract,
      location: props?.location,
      website: props?.website,
      apply: props?.apply,
      description: props?.description,
      requirements: {
        content: props?.requirements.content,
        items: props?.requirements.items,
      },
      role: {
        content: props?.role.content,
        items: props?.role.items,
      },
    };

    props.setCurrentJobDetail(jobDetails);
    props.setIsModalActive(true);
  };

  return (
    <>
      <button className="jobCard" key={props.id} onClick={handleJobCardClick}>
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
