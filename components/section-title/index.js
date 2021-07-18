import { Fragment } from "react";
import classes from "./style.module.css";

export default function SectionTitle(props) {
  return (
    <Fragment>
      <div className={classes.title}>{props.title}</div>
      <div className={classes.text}>{props.text}</div>
    </Fragment>
  );
}
