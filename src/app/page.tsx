"use client";

import JobCard from "@/components/JobCard";
import Navbar from "@/components/Navbar";
import SearchFilter from "@/components/SearchFilter";
import React, { useState } from "react";

const page = () => {
  const [theme, setTheme] = useState<string>("light");

  return (
    <main>
      <Navbar theme={theme} setTheme={setTheme} />
      <SearchFilter />
      <JobCard />
    </main>
  );
};

export default page;
