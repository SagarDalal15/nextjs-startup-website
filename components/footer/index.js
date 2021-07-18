import Link from "next/link";

import classes from "./style.module.css";

export default function Footer() {
  return (
    <div className={classes.footer}>
      <div className={classes.content}>
        <div className={classes.divider}></div>
        <div className={classes.title}> Landing Page</div>
        <div className={classes.links}>
          <Link href="/">Home</Link>
          <Link href="/">Advertise</Link>
          <Link href="/">Supports</Link>
          <Link href="/">Marketing</Link>
          <Link href="/">Contact</Link>
        </div>
        <div className={classes.text}>Developed by Sagar Dalal (2021)</div>
      </div>
    </div>
  );
}
