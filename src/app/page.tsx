"use client";

import "../sass/main.scss";
import JobCard from "@/components/JobCard";
import Navbar from "@/components/Navbar";
import SearchFilter from "@/components/SearchFilter";
import React, { useState } from "react";
import { kumbh_sans } from "@/app/layout";
import jobData from "../data/data.json";
import JobDetail from "@/components/JobDetail";

const Page = () => {
  const [theme, setTheme] = useState("light");
  const [titleQuery, setTitleQuery] = useState("");
  const [locationQuery, setLocationQuery] = useState("");
  const [isFullTime, setIsFullTime] = useState(false);

  return (
    <main className={kumbh_sans.className}>
      <Navbar theme={theme} setTheme={setTheme} />
      <SearchFilter
        titleQuery={titleQuery}
        setTitleQuery={setTitleQuery}
        locationQuery={locationQuery}
        setLocationQuery={setLocationQuery}
        isFullTime={isFullTime}
        setIsFullTime={setIsFullTime}
      />

      <div className="container">
        {jobData.map((job) => {
          if (
            job.position.toLowerCase().includes(titleQuery.toLowerCase()) &&
            job.location.toLowerCase().includes(locationQuery.toLowerCase())
          ) {
            if (isFullTime ? job.contract === "Full Time" : job.contract) {
              return (
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
              );
            }
          }
        })}
        <p className="no-job">{`Can't find the job you're looking for.`}</p>
        <div className="loadMore">
          <button className={kumbh_sans.className}>Load More</button>
        </div>

        <JobDetail />
      </div>
    </main>
  );
};

export default Page;
