import React, { useState } from "react";
import "./componentStyle.css";
import { IUserEducation } from "../models/IUserEducation";

interface IProps {
  education: IUserEducation;
}

let EducationView: React.FC<IProps> = ({ education }) => {
  return (
    <div className="section-container">
      <div className="program-container">
        <div className="program-details">
          <label htmlFor="major">Major: </label>
          <input value={education.major} type="text" name="major"></input>
          <label htmlFor="institution">Institution: </label>
          <input
            type="text"
            name="institution"
            value={education.institution}
          ></input>
        </div>
        <div className="program-dates">
          <label htmlFor="date">
            End Date:
            <input
              type="text"
              name="date"
              value={education.date.toLocaleDateString("en-US", {
                timeZone: "UTC",
              })}
            ></input>
          </label>
        </div>
      </div>
    </div>
  );
};

export default EducationView;
