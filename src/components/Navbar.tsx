"use client";

import Image from "next/image";
import React, { useEffect } from "react";

import Logo from "../assets/shared/logo.svg";
import Sun from "../assets/shared/icon-sun.svg";
import Moon from "../assets/shared/icon-moon.svg";

type Props = {
  theme: string;
  setTheme: (newTheme: string) => void;
};

const Navbar = (props: Props) => {
  useEffect(() => {
    let body = document.body;
    body.setAttribute("data-theme", props.theme);
  }, [props.theme]);

  const handleChange = () => {
    props.setTheme(props.theme === "light" ? "dark" : "light");
  };

  return (
    <nav className="nav">
      <div className="nav__inner">
        <a href="/" className="nav__logo">
          <Image src={Logo} alt="Logo" />
        </a>

        <div className="nav__theme-toggle">
          <Image src={Sun} alt="" />
          <input
            type="checkbox"
            onChange={handleChange}
            checked={props.theme === "dark" ? true : false}
          />
          <Image src={Moon} alt="" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
