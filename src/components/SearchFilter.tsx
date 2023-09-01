"use client";

import React, { useEffect, useState, FormEvent } from "react";
import FilterIcon from "../assets/shared/icon-filter.svg";
import SearchIcon from "../assets/shared/icon-search.svg";
import Image from "next/image";

type Props = {
  titleQuery: string;
  setTitleQuery: (query: string) => void;
  locationQuery: string;
  setLocationQuery: (query: string) => void;
  isFullTime: boolean;
  setIsFullTime: (arg: boolean) => void;
  isModalActive: boolean;
};

const SearchFilter = (props: Props) => {
  const [windowSize, setWindowSize] = useState<number>(0);

  useEffect(() => {
    // Check if window is available (client-side) before accessing window.innerWidth
    if (typeof window !== "undefined") {
      setWindowSize(window.innerWidth);

      const handleResize = () => {
        setWindowSize(window.innerWidth);
      };

      window.addEventListener("resize", handleResize);

      // Cleanup the event listener on unmount
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

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

    const locationInputMobile = e.currentTarget.querySelector(
      'input[name="locationMobile"]'
    ) as HTMLInputElement | null;

    const jobTypeCheckMobile = e.currentTarget.querySelector(
      'input[name="jobTypeMobile"]'
    ) as HTMLInputElement | null;

    titleInput && props.setTitleQuery(titleInput.value);
    locationInput && props.setLocationQuery(locationInput.value);
    jobTypeCheck && props.setIsFullTime(jobTypeCheck.checked);
    locationInputMobile && props.setLocationQuery(locationInputMobile.value);
    jobTypeCheckMobile && props.setIsFullTime(jobTypeCheckMobile.checked);
  };

  const handleMobileFilter = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    document
      .querySelector(".SearchFilter__filter-modal")
      ?.classList.add("SearchFilter__filter-modal--open");
  };

  const closeFilterModal = () => {
    document
      .querySelector(".SearchFilter__filter-modal")
      ?.classList.remove("SearchFilter__filter-modal--open");
  };

  return (
    <form
      className={`SearchFilter ${props.isModalActive && "SearchFilter--hide"}`}
      onSubmit={handleSubmit}
    >
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
          <input type="checkbox" name="jobType" id="jobType" />
          <label htmlFor="jobType">
            Full Time{windowSize > 1200 ? " Only" : null}
          </label>
        </div>
      </div>

      {windowSize < 768 && (
        <>
          <button
            className="SearchFilter__filter"
            onClick={handleMobileFilter}
            tabIndex={-1}
            type="button"
          >
            <Image src={FilterIcon} alt="Filter" />
          </button>

          <div
            className="SearchFilter__filter-modal"
            onClick={closeFilterModal}
          >
            <div
              className="SearchFilter__filter-modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="SearchFilter__filter-modal-input">
                <input
                  type="text"
                  name="locationMobile"
                  placeholder="Filter by location…"
                />
              </div>
              <div className="SearchFilter__filter-modal-search">
                <div>
                  <input
                    type="checkbox"
                    name="jobTypeMobile"
                    id="jobTypeMobile"
                  />
                  <label htmlFor="jobTypeMobile">Full Time Only</label>
                </div>
                <button type="submit" onClick={closeFilterModal}>
                  Search
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      <button className="SearchFilter__search" type="submit">
        {windowSize < 768 ? <Image src={SearchIcon} alt="Search" /> : "Search"}
      </button>
    </form>
  );
};

export default SearchFilter;
