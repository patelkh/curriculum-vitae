import React from "react";
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
          <p><i>{education.major}</i><br></br>
          <b>{education.institution}</b></p>
        </div>
        <div className="program-dates">
          <p>{education.date.toLocaleDateString("en-US", {
                timeZone: "UTC",
              })}</p>
          
        </div>
      </div>
    </div>
  );
};

export default EducationView;
