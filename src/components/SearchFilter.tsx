"use client";

import React, { useEffect, useState, FormEvent } from "react";
import FilterIcon from "../assets/shared/icon-filter.svg";
import SearchIcon from "../assets/shared/icon-search.svg";
import Image from "next/image";

let sizeOnLoad: number = window.innerWidth;

type Props = {
  titleQuery: string;
  setTitleQuery: (query: string) => void;
  locationQuery: string;
  setLocationQuery: (query: string) => void;
  isFullTime: boolean;
  setIsFullTime: (arg: boolean) => void;
};

const SearchFilter = (props: Props) => {
  const [windowSize, setWindowSize] = useState<number>(sizeOnLoad);
  useEffect(() => {
    sizeOnLoad = window.innerWidth;
    window.addEventListener("resize", () => {
      setWindowSize(window.innerWidth);
    });
  }, [windowSize]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const titleInput = e.currentTarget.querySelector(
      'input[name="title"]'
    ) as HTMLInputElement | null;

    const locationInput = e.currentTarget.querySelector(
      'input[name="location"]'
    ) as HTMLInputElement | null;

    const jobTypeCheck = e.currentTarget.querySelector(
      'input[name="jobType"]'
    ) as HTMLInputElement | null;

    titleInput && props.setTitleQuery(titleInput.value);
    locationInput && props.setLocationQuery(locationInput.value);
    jobTypeCheck && props.setIsFullTime(jobTypeCheck.checked);
  };
  return (
    <form className="SearchFilter" onSubmit={handleSubmit}>
      <div className="SearchFilter__input-container">
        <div className="SearchFilter__title">
          <input
            type="text"
            name="title"
            placeholder={
              windowSize < 1200
                ? "Filter by title…"
                : "Filter by title, companies, expertise…"
            }
          />
        </div>
        <div className="SearchFilter__location">
          <input
            type="text"
            name="location"
            placeholder="Filter by location…"
          />
        </div>
        <div className="SearchFilter__job-type">
          <input
            type="checkbox"
            name="jobType"
            id="jobType"
            // checked={props.isFullTime ? true : false}
          />
          <label htmlFor="jobType">
            Full Time{windowSize > 1200 ? " Only" : null}
          </label>
        </div>
      </div>

      <button className="SearchFilter__filter">
        <Image src={FilterIcon} alt="Filter" />
      </button>
      <button className="SearchFilter__search" type="submit">
        {windowSize < 768 ? <Image src={SearchIcon} alt="Search" /> : "Search"}
      </button>
    </form>
  );
};

export default SearchFilter;
