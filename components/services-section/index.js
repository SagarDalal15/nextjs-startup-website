import Image from "next/image";
import { useState, useEffect, Fragment } from "react";

import classes from "./style.module.css";
import servicesJSON from "./services.json";
import Service from "./service";
import SectionTitle from "../section-title";

export default function ServicesSection() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    setServices(servicesJSON);
  }, []);

  return (
    <div className={classes.servicesSection}>
      <div className={classes.content}>
        <div className={classes.videoImageDiv}>
          <Image
            src="/res/video-image.svg"
            alt="video"
            width={1000}
            height={1000}
          />
        </div>

        <div className={classes.text}>
          <div className={classes.title}>
            <SectionTitle
              title="OUR SERVICES"
              text="Business Goals Achieved with Design"
            />
          </div>
          <div className={classes.services}>
            {services.map((service) => (
              <Fragment key={service.title}>
                <Service
                  title={service.title}
                  imageSrc={service.imageSrc}
                  content={service.content}
                />
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
