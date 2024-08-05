import React from "react";
import classes from "./section1.module.css";

const options = [
  "About",
  "Profile Image",
  "Education",
  "Video",
  "Availability",
  "Subject & Pricing",
];
const Section1 = () => {
  return (
    <section className={classes.container}>
      <div className={classes.header}>
        <img src="circle1.png" className={classes.circle1} />
        <img src="circle2.png" className={classes.circle2} />
        <div className={classes.logoBox}>
          <img src="logo.png" alt="logo" className={classes.logo} />
        </div>
      </div>
      <div className={classes.optionsBox}>
        <ul>
          {options.map((items, indx) => (
            <>
              <li key={indx}>
                <span>{`0${indx + 1}`}</span>
                <span>{items}</span>
              </li>
            </>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Section1;
