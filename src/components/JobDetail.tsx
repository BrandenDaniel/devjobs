import React from "react";
import exampleLogo from "../../public/job-logo/blogr.svg";
import Image from "next/image";
import Link from "next/link";

const JobDetail = () => {
  return (
    <div className="jobDetail">
      <header className="jobDetail__header">
        <Image src={exampleLogo} width={50} height={50} alt="" />
        <div>
          <h1>Scoot</h1>
          <p>scoot.com</p>
        </div>
        <Link href="/">Company Site</Link>
      </header>

      <div className="jobDetail__body">
        <div className="jobDetail__body-detail">
          <div>
            <span>1w ago</span>
            <span>Part Time</span>
          </div>
          <h2>Senior Software Engineer</h2>
          <p>United Kingdrom</p>
        </div>

        <div className="jobDetail__body-main">
          <button>Apply Now</button>

          <p className="jobDetail__body-main-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            illo possimus beatae, voluptatum magni iste. Deserunt nobis numquam
            cupiditate harum.
          </p>

          <div className="jobDetail__body-main-requirements">
            <h3>Requirements</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Veritatis tenetur illo nostrum nulla! Alias praesentium distinctio
              tempora, atque possimus ducimus.
            </p>
          </div>

          <div className="jobDetail__body-main-role">
            <h3>What You Will Do</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Cupiditate maxime eveniet accusantium odio fugit itaque! Incidunt,
              quia? Eos, expedita veritatis!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
