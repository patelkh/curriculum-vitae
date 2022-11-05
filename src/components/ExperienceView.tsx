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
            <label htmlFor="title">Title: </label>
            <input type="text" name="title" value={experience.title}></input>
          </div>
          <div className="company-detail">
            <label htmlFor="company">Company: </label>
            <input
              type="text"
              name="company"
              value={experience.company}
            ></input>
          </div>
        </div>
        <div className="date-details">
          <div className="start-date">
          <label htmlFor="start">
              Start Date:
              <input
                type="text"
                name="start"
                value={experience.start.toLocaleDateString("en-US", {
                  timeZone: "UTC",
                })}
              ></input>
            </label>
          </div>
          <div className="end-date">
            <label htmlFor="end">
              End Date:
              <input
                type="text"
                name="end"
                value={experience.end.toLocaleDateString("en-US", {
                  timeZone: "UTC",
                })}
              ></input>
            </label>
          </div>
        </div>
      </div>
      <div className="bottom-level-details">
        <textarea
          value={experience.description}
          name="description"
          className="experience-details"
        ></textarea>
      </div>
    </div>
  );
};

export default ExperienceView;
