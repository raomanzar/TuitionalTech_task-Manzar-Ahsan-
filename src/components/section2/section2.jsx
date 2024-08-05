import { useState } from "react";
import classes from "./Section2.module.css";
import { dayTimeArr } from "../../constants/demmyData.js";

const Section2 = () => {
  const [data, setData] = useState(dayTimeArr);

  const handleChange = (toggle) => {
    const newArr = data.map((item) => {
      if (Object.keys(item)[0] === Object.keys(toggle)[0]) {
        item.toggle = !item.toggle;
      }
      return item;
    });
    setData(newArr);
  };

  const handleOption = (selectedOption, id) => {
    const newArr = data.map((item) => {
      if (Object.keys(item)[0] === Object.keys(selectedOption)[0]) {
        item[Object.keys(item)[0]].toggle = !item[Object.keys(item)[0]].toggle;
        item[Object.keys(item)[0]].indx = id;
      }
      return item;
    });
    setData(newArr);
    setOption(id);
  };

  return (
    <section className={classes.container}>
      <aside>
        <img src="Group 310.png" />
        <img src="calendar.png" />
        <img src="teacher.png" />
        <div>
          <img src="message.png" />
        </div>
      </aside>
      <div className={classes.daysMenuBox}>
        <h2>Availability</h2>
        <p>Control your availability by selecting these slots.</p>
        <div className={classes.daysMenu}>
          {data.map((items, indx) => {
            const dayKey = Object.keys(items)[0];
            const slots = items[dayKey].timing;
            return (
              <div key={indx} className={classes.menuLine}>
                <button
                  onClick={() => handleChange(items)}
                  className={`${classes.toggleButton} ${
                    items.toggle ? classes.on : classes.off
                  }`}
                >
                  <span
                    className={` ${items.toggle ? classes.ON : classes.OFF}`}
                  ></span>
                </button>
                <p>{Object.keys(items)[0]}</p>
                <div className={classes.optionBox}>
                  {items.toggle ? (
                    slots.map((item, indx) => (
                      <span
                        key={indx}
                        className={`${classes.option} ${
                          items.toggle &&
                          items[dayKey].toggle &&
                          items[dayKey].indx === indx + 1
                            ? classes.on
                            : classes.off
                        }`}
                        onClick={() => handleOption(items, indx + 1)}
                      >
                        {item}
                      </span>
                    ))
                  ) : (
                    <span className={classes.noOption}>
                      <img src="Vector.png" /> Not Available
                    </span>
                  )}
                </div>
              </div>
            );
          })}
          <div className={classes.navigation}>
            <div className={classes.subNavigation}>
              <span>
                <img src="ArrowB.png" />
              </span>
              Back
            </div>
            <div className={classes.subNavigation}>
              Next
              <span>
                <img src="ArrowF.png" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
