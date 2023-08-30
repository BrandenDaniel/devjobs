"use client";

import React, { useEffect, useState } from "react";
import FilterIcon from "../assets/shared/icon-filter.svg";
import SearchIcon from "../assets/shared/icon-search.svg";
import Image from "next/image";
import { kumbh_sans } from "@/app/layout";

let sizeOnLoad: number = window.innerWidth;

const SearchFilter = () => {
  const [windowSize, setWindowSize] = useState<number>(sizeOnLoad);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowSize(window.innerWidth);
    });
  }, [windowSize]);

  return (
    <form className="SearchFilter">
      <div className="SearchFilter__input-container">
        <div className="SearchFilter__title">
          <input
            type="text"
            className={kumbh_sans.className}
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
            className={kumbh_sans.className}
            placeholder="Filter by location…"
          />
        </div>
        <div className="SearchFilter__job-type">
          <input type="checkbox" id="jobType" />
          <label htmlFor="jobType">
            Full Time{windowSize > 1200 ? " Only" : null}
          </label>
        </div>
      </div>

      <button className="SearchFilter__filter">
        <Image src={FilterIcon} alt="Filter" />
      </button>
      <button className="SearchFilter__search">
        {windowSize < 768 ? <Image src={SearchIcon} alt="Search" /> : "Search"}
      </button>
    </form>
  );
};

export default SearchFilter;
