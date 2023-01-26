import { NavLink } from "react-router-dom";

import classes from "./Menu.module.css";
import closeMobileMenu from "../../assets/shared/icon-close.svg";

function Menu({ isMenuShow, hideMobileMenu }) {
  const links = [
    {
      name: "home",
      path: "/",
    },
    {
      name: "destination",
      path: "/destination",
    },
    {
      name: "crew",
      path: "/crew",
    },
    {
      name: "technology",
      path: "/technology",
    },
  ];
  return (
    <ul className={`${classes.menu} ${isMenuShow ? classes.show : ""}`}>
      <div className={classes["burger-close"]} onClick={hideMobileMenu}>
        <img src={closeMobileMenu} alt="close mobile menu icon" />
      </div>
      {links.map((link, index) => {
        <li className={classes["menu_link"]} key={index}>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? `${classes["menu__item"]} ${classes["menu__item--active"]}`
                : classes["menu__item"]
            }
            to={`${link.path}`}
          >
            <span>0{index}</span>
            {link.name}
          </NavLink>
        </li>;
      })}
    </ul>
  );
}
export default Menu;
