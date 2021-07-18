import { Link } from "react-scroll";

import classes from "./navigation-link.module.css";

export default function NavigationLinks(props) {
  return (
    <Link
      className={classes.item}
      activeClass={classes.itemActive}
      to={props.path}
      spy={true}
      smooth={true}
      offset={-60}
      duration={10}
    >
      {props.text}
    </Link>
  );
}
