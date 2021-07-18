import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import classes from "./style.module.css";
import Feature from "./feature";
import featuresJSON from "./features.json";
import SectionTitle from "../section-title";

export default function FeaturesSection() {
  const [features, setfeatures] = useState([]);

  useEffect(() => {
    setfeatures(featuresJSON);
  }, []);

  return (
    <div className={classes.featuresSection}>
      <div className={classes.content}>
        <div className={classes.title}>
          <SectionTitle
            title="WHATS THE FUNCTION"
            text="Meet the feature of product"
          />
        </div>

        <div className={classes.features}>
          <Container>
            <Row>
              {features.map((feature) => (
                <Col
                  key={feature.title}
                  className={classes.col}
                  style={{
                    padding: "0px ",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Feature
                    imageSrc={feature.imageSrc}
                    title={feature.title}
                    text={feature.text}
                  />
                </Col>
              ))}
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
}
