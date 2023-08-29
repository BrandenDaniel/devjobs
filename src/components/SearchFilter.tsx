import React from "react";
import FilterIcon from "../images/shared/icon-filter.svg";
import SearchIcon from "../images/shared/icon-search.svg";
import Image from "next/image";
import { kumbh_sans } from "@/app/layout";

const SearchFilter = () => {
  return (
    <form className="SearchFilter">
      <input
        type="text"
        className={kumbh_sans.className}
        placeholder="Filter by title…"
      />
      <button className="SearchFilter__filter">
        <Image src={FilterIcon} alt="Filter" />
      </button>
      <button className="SearchFilter__search">
        <Image src={SearchIcon} alt="Search" />
      </button>
    </form>
  );
};

export default SearchFilter;
