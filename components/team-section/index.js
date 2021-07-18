import { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";

import classes from "./style.module.css";
import cardsJSON from "./cards.json";
import TeamCard from "./team-card";
import SectionTitle from "../section-title";

export default function TeamSection() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(cardsJSON);
  }, []);

  return (
    <div className={classes.teamSection}>
      <div className={classes.content}>
        <div className={classes.title}>
          <SectionTitle
            title="OUR TEAM"
            text="The most qualified and talented individuals"
          />
        </div>
        <div className={classes.cards}>
          <Container>
            <Row>
              {cards.map((card) => (
                <Col
                  style={{
                    marginBottom: "40px",
                    display: "flex",
                    justifyContent: "center",
                    paddingBottom: "10px",
                  }}
                  key={card.name}
                >
                  <TeamCard
                    imageSrc={card.imageSrc}
                    name={card.name}
                    post={card.post}
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
