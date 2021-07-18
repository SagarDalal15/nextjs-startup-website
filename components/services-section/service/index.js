import Image from "next/image";

import classes from "./style.module.css";

export default function Service(props) {
  return (
    <div className={classes.service}>
      <div className={classes.imageDiv}>
        <Image src={props.imageSrc} alt={props.alt} width={200} height={200} />
      </div>
      <div className={classes.text}>
        <div className={classes.title}>{props.title}</div>
        <div className={classes.content}>{props.content}</div>
      </div>
    </div>
  );
}
