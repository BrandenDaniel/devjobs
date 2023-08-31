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
    </div>
  );
};

export default JobDetail;
