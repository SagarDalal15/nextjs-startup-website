import Image from "next/image";

import NavigationLink from "../../lib/navigation-link";
import classes from "./style.module.css";

export default function Sidebar(props) {
  let sidebarCSS = classes.sidebar;

  if (props.visible) {
    sidebarCSS = classes.sidebarOpened;
  }

  return (
    <div className={sidebarCSS}>
      <div className={classes.closeBtn} onClick={props.closeSidebar}>
        <Image src="/res/close.png" alt="close button" width={80} height={80} />
      </div>

      <div className={classes.content}>
        <NavigationLink path="home" text="Home" />
        <div className={classes.divider} />

        <NavigationLink path="features" text="Features" />
        <div className={classes.divider} />

        <NavigationLink path="services" text="Services" />
        <div className={classes.divider} />

        <NavigationLink path="team" text="Team" />
      </div>
    </div>
  );
}
