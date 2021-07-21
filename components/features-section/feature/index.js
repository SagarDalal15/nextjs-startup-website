import Image from "next/image";

import classes from "./style.module.css";

export default function Feature(props) {
  return (
    <div className={classes.feature}>
      <div className={classes.imageDivWrapper}>
        <div className={classes.imageDiv}>
          <Image src={props.imageSrc} width={100} height={100} />
        </div>
      </div>
      <div className={classes.title}>{props.title}</div>
      <div className={classes.text}>{props.text}</div>
    </div>
  );
}
