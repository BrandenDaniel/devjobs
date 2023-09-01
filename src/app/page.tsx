"use client";

import "../sass/main.scss";
import JobCard from "@/components/JobCard";
import Navbar from "@/components/Navbar";
import SearchFilter from "@/components/SearchFilter";
import React, { useState } from "react";
import jobData from "../data/data.json";
import JobDetail from "@/components/JobDetail";

const Page = () => {
  const [theme, setTheme] = useState("dark");
  const [titleQuery, setTitleQuery] = useState("");
  const [locationQuery, setLocationQuery] = useState("");
  const [isFullTime, setIsFullTime] = useState(false);
  const [isModalActive, setIsModalActive] = useState(false);
  const [currentJobDetail, setCurrentJobDetail] = useState({
    id: 0,
    company: "",
    logo: "",
    logoBackground: "",
    position: "",
    postedAt: "",
    contract: "",
    location: "",
    website: "",
    apply: "",
    description: "",
    requirements: {
      content: "",
      items: [],
    },
    role: {
      content: "",
      items: [],
    },
  });

  return (
    <main>
      <Navbar theme={theme} setTheme={setTheme} />
      <SearchFilter
        titleQuery={titleQuery}
        setTitleQuery={setTitleQuery}
        locationQuery={locationQuery}
        setLocationQuery={setLocationQuery}
        isFullTime={isFullTime}
        setIsFullTime={setIsFullTime}
        isModalActive={isModalActive}
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
                  id={job.id}
                  postedAt={job.postedAt}
                  contract={job.contract}
                  position={job.position}
                  company={job.company}
                  location={job.location}
                  logoBg={job.logoBackground}
                  logo={job.logo}
                  website={job.website}
                  apply={job.apply}
                  description={job.description}
                  requirements={job.requirements}
                  role={job.role}
                  setIsModalActive={setIsModalActive}
                  currentJobDetail={currentJobDetail}
                  setCurrentJobDetail={setCurrentJobDetail}
                />
              );
            }
          }
        })}
        <p className="no-job">{`We can't find the job you're looking for.`}</p>

        {/* <div className="loadMore">
            <button>Load More</button>
          </div> */}

        <JobDetail
          isModalActive={isModalActive}
          setIsModalActive={setIsModalActive}
          currentJobDetail={currentJobDetail}
        />
      </div>
    </main>
  );
};

export default Page;
