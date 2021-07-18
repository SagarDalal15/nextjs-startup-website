import { Button } from "react-bootstrap";
import classes from "./style.module.css";

export default function Title() {
  return (
    <div className={classes.title}>
      <h1>Top Quality Digital Products To Explore</h1>
      <div className={classes.titletext}>
        Get your blood tests delivered at let home collect sample from the
        victory of the managements that supplies best design system guidelines
        ever.
      </div>
      <div className={classes.buttondiv}>
        <Button variant="danger" className={classes.button}>
          Explore
        </Button>
      </div>
    </div>
  );
}
