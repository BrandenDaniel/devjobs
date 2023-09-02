import React from "react";
import exampleLogo from "../../public/job-logo/blogr.svg";
import Image from "next/image";
import Link from "next/link";
import "material-icons/iconfont/material-icons.css";

type Props = {
  isModalActive: boolean;
  setIsModalActive: (args: boolean) => void;
  currentJobDetail: any;
};

const JobDetail = (props: Props) => {
  return (
    <div
      className={`jobDetail ${props.isModalActive && "jobDetail--opened"}`}
      id="modal"
    >
      <header className="jobDetail__header">
        <Image
          className="jobDetail__header-logo"
          src={props.currentJobDetail.logo}
          width={50}
          height={50}
          alt="job company logo"
          style={{ background: props.currentJobDetail.logoBackground }}
        />
        <div>
          <h1>{props.currentJobDetail.company}</h1>
          <p>{props.currentJobDetail.website}</p>
        </div>
        <Link href={props.currentJobDetail.website}>Company Site</Link>
      </header>

      <div className="jobDetail__body">
        <button
          className="jobDetail__body-close"
          onClick={(e) => {
            props.setIsModalActive(false);
          }}
        >
          <span className="material-icons">arrow_back</span>
          Back
        </button>
        <div className="jobDetail__body-detail">
          <div>
            <div>
              <span>{props.currentJobDetail.postedAt} ago</span>
              <span>{props.currentJobDetail.contract}</span>
            </div>
            <h2>{props.currentJobDetail.position}</h2>
            <p>{props.currentJobDetail.location}</p>
          </div>
          <Link
            href={props.currentJobDetail.apply}
            className="jobDetail__apply"
          >
            Apply Now
          </Link>
        </div>
        <div className="jobDetail__body-main">
          <Link
            href={props.currentJobDetail.apply}
            className="jobDetail__apply"
          >
            Apply Now
          </Link>

          <p className="jobDetail__body-main-desc">
            {props.currentJobDetail.description}
          </p>

          <div className="jobDetail__body-main-requirements">
            <h3>Requirements</h3>
            <p>{props.currentJobDetail.requirements.content}</p>

            <ul>
              {props.currentJobDetail.requirements.items.map((item: string) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="jobDetail__body-main-role">
            <h3>What You Will Do</h3>
            <p>{props.currentJobDetail.role.content}</p>

            <ul>
              {props.currentJobDetail.role.items.map((item: string) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="jobDetail__body-footer">
          <div className="jobDetail__body-footer-detail">
            <h2>Senior Software Engineer</h2>
            <p>United Kingdrom</p>
          </div>
          <Link href="/" className="jobDetail__apply">
            Apply Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
