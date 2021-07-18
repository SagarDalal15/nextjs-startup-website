import Image from "next/image";

import classes from "./style.module.css";

export default function TeamCard(props) {
  return (
    <div className={classes.teamCard}>
      <div className={classes.imageDiv}>
        <Image src={props.imageSrc} alt="" width={400} height={400} />
      </div>
      <div className={classes.text}>
        <div style={{ fontWeight: "600", fontSize: "20px", padding: "4px" }}>
          {props.name}
        </div>
        {props.post}
      </div>
    </div>
  );
}
