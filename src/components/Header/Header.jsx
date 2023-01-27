import { useState } from "react";

import Menu from "../Menu/Menu";

import classes from "./Header.module.css";
import logoImage from "../../assets/shared/logo.svg";
import mobileMenu from "../../assets/shared/icon-hamburger.svg";

function Header() {
  const [isShow, setIsShow] = useState(false);

  function showMobileMenu() {
    setIsShow(true);
  }

  function hideMobileMenu() {
    setIsShow(false);
  }

  return (
    <header className={classes.header}>
      <div className={classes["header__logo"]}>
        <img src={logoImage} alt="star logo" />
      </div>
      <div className={classes["header__line"]}></div>
      <nav className={classes["header__nav"]}>
        <div className={classes.burger} onClick={showMobileMenu}>
          <img src={mobileMenu} alt="hamburger menu" />
        </div>
        <Menu isMenuShow={isShow} hideMobileMenu={hideMobileMenu} />
      </nav>
    </header>
  );
}
export default Header;
