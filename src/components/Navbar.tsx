import Image from "next/image";
import React, { FC } from "react";

import Logo from "../images/shared/logo.svg";
import Sun from "../images/shared/icon-sun.svg";
import Moon from "../images/shared/icon-moon.svg";

type Props = {
  theme: string;
  setTheme: (newTheme: string) => void;
};

const Navbar = (props: Props) => {
  const handleChange = () => {
    props.setTheme(props.theme === "light" ? "dark" : "light");
  };

  let body = document.body;
  body.setAttribute("data-theme", props.theme);

  return (
    <nav className="nav">
      <a href="/" className="nav__logo">
        <Image src={Logo} alt="Logo" />
      </a>

      <div className="nav__theme-toggle">
        <Image src={Sun} alt="" />
        <input type="checkbox" onChange={handleChange} />
        <Image src={Moon} alt="" />
      </div>
    </nav>
  );
};

export default Navbar;
