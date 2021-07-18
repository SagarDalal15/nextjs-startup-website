import classes from "./style.module.css";
export default function SectionDivider() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className={classes.sectionDivider} />
    </div>
  );
}
