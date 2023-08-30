"use client";

import "../sass/main.scss";
import JobCard from "@/components/JobCard";
import Navbar from "@/components/Navbar";
import SearchFilter from "@/components/SearchFilter";
import React, { useState } from "react";
import { kumbh_sans } from "@/app/layout";
import jobData from "../data/data.json";

const page = () => {
  const [theme, setTheme] = useState<string>("light");

  return (
    <main className={kumbh_sans.className}>
      <Navbar theme={theme} setTheme={setTheme} />
      <SearchFilter />

      <div className="container">
        {jobData.map((job) => (
          <JobCard
            key={job.id}
            postedAt={job.postedAt}
            contract={job.contract}
            position={job.position}
            company={job.company}
            location={job.location}
            logoBg={job.logoBackground}
            logo={job.logo}
          />
        ))}
        <div className="loadMore">
          <button className={kumbh_sans.className}>Load More</button>
        </div>
      </div>
    </main>
  );
};

export default page;
