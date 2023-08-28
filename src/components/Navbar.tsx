import Image from "next/image";
import React from "react";

import Logo from "../images/shared/logo.svg";
import Sun from "../images/shared/icon-sun.svg";
import Moon from "../images/shared/icon-moon.svg";

const Navbar = () => {
  return (
    <nav className="nav">
      <a href="/" className="nav__logo">
        <Image src={Logo} alt="Logo" />
      </a>

      <div className="nav__theme-toggle">
        <Image src={Sun} alt="" />
        <input type="checkbox" />
        <Image src={Moon} alt="" />
      </div>
    </nav>
  );
};

export default Navbar;
