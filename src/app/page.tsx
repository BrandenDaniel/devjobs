"use client";

import Navbar from "@/components/Navbar";
import SearchFilter from "@/components/SearchFilter";
import React, { useState } from "react";

const page = () => {
  const [theme, setTheme] = useState<string>("light");

  return (
    <main>
      <Navbar theme={theme} setTheme={setTheme} />
      <SearchFilter />
    </main>
  );
};

export default page;
