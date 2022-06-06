import { useState, useEffect } from "react";
import React from "react";
import { checkBoxItem } from "./checkBoxItem";
import classes from "./checkBoxList.module.css";

function CheckBoxList() {
  // array filled with false inside useState return value
  const [checkState, SetCheckState] = useState(
    new Array(checkBoxItem.length).fill(false)
  );

  //If the checkbox is checked the value should be false
  const handleChange = (position) => {
    const updateCheckState = checkState.map((item, index) =>
      index === position ? !item : item
    );

    SetCheckState(updateCheckState);
  };

  return (
    <div>
      <form>
        <h3 className={classes.title}>Amenities</h3>
        <ul className={classes.icon}>
          {checkBoxItem.map(({ icon, name }, index) => {
            if (index % 2 === 0) {
              return (
                <li key={index} className={classes.litem}>
                  <div>
                    <input
                      type="checkbox"
                      id={`custom-checkbox-${index}`}
                      name={name}
                      value={name}
                      checked={checkState[index]}
                      onChange={() => handleChange(index)}
                    />
                    {icon} {name}
                  </div>
                </li>
              );
            } else {
              return (
                <li key={index} className={classes.ritem}>
                  <div>
                    <input
                      type="checkbox"
                      id={`custom-checkbox-${index}`}
                      name={name}
                      value={name}
                      checked={checkState[index]}
                      onChange={() => handleChange(index)}
                    />
                    {icon} {name}
                  </div>
                </li>
              );
            }
          })}
        </ul>
      </form>
    </div>
  );
}



export default CheckBoxList;
