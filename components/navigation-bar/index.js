import { Fragment, useState } from "react";
import Image from "next/image";
import { Button } from "react-bootstrap";

import classes from "./style.module.css";
import NavigationLink from "../../lib/navigation-link";
import Sidebar from "../sidebar";
import Backdrop from "../backdrop";

export default function NavigationBar(props) {
  const [sidebarStatus, setSidebarStatus] = useState(false);

  const sidebarHandler = () => {
    setSidebarStatus(!sidebarStatus);
  };

  const backdropHandler = () => {
    setSidebarStatus(false);
  };

  return (
    <Fragment>
      <div className={classes.navigationbar}>
        <div className={classes.content}>
          <div className={classes.sidebar}>
            <Sidebar
              visible={sidebarStatus}
              closeSidebar={() => {
                setSidebarStatus(false);
              }}
            />
          </div>

          <div className={classes.logo}>
            <div className={classes.imageDiv}>
              <Image src="/res/logo/logo.svg" width={100} height={100} />
            </div>
            Startup
          </div>

          <div className={classes.items}>
            <NavigationLink path="home" text="Home" />
            <NavigationLink path="features" text="Features" />
            <NavigationLink path="services" text="Services" />
            <NavigationLink path="team" text="Team" />
          </div>

          <Button variant="outline-danger" className={classes.button}>
            Get Started
          </Button>

          <div className={classes.sidebarButton} onClick={sidebarHandler}>
            <div
              style={{ width: "100%", height: "1px", backgroundColor: "black" }}
            />
            <div
              style={{ width: "100%", height: "1px", backgroundColor: "black" }}
            />
            <div
              style={{ width: "100%", height: "1px", backgroundColor: "black" }}
            />
          </div>
        </div>
        {sidebarStatus && (
          <div onClick={backdropHandler}>
            <Backdrop />
          </div>
        )}
      </div>
      <div>{props.children}</div>
    </Fragment>
  );
}
