import React, { useState } from "react";
import "./componentStyle.css";
import { IUserExperience } from "../models/IUserExperience";

interface IProps {
  experience: IUserExperience;
}

let ExperienceView: React.FC<IProps> = ({ experience }) => {
  return (
    <div className="section-container">
      <div className="top-level-details">
        <div className="title-company">
          <div className="title-detail">
            <p>
              <b>{experience.title}</b>
              <br></br>
              {experience.company}
            </p>
          </div>
        </div>
        <div className="start-end-dates">
            <span>{experience.start.toLocaleDateString("en-US", {
              timeZone: "UTC",
            })} - 
            {experience.end.toLocaleDateString("en-US", {
              timeZone: "UTC",
            })}</span>
        </div>
      </div>
      <div className="bottom-level-details">
        {experience.description}
      </div>
    </div>
  );
};

export default ExperienceView;
