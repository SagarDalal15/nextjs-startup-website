import Image from "next/image";

import classes from "./style.module.css";
import Title from "./title";

export default function HomeSection() {
  return (
    <div className={classes.home}>
      <div className={classes.title}>
        <Title />
      </div>
      <div className={classes.backgroundImgDiv}>
        <div style={{ position: "absolute" }}>
          <Image
            src="/res/home-background.svg"
            alt="background"
            width={1500}
            height={825}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Image
            src="/res/browser-mockup.svg"
            alt="browser-mockup.svg"
            width={1350}
            height={800}
          />
        </div>
      </div>
    </div>
  );
}
