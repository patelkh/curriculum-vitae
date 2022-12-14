import React from "react";
import "./componentStyle.css";
import { IUserEducation } from "../models/IUserEducation";

interface IProps {
  education: IUserEducation
  updateEducationInput: any 
}


let Education: React.FC<IProps> = ({education, updateEducationInput}) => {
  
  let endDate = education.date.toISOString().substring(0,10)
  return (

      <div className="section-container">
        <div className="program-container">
          <div className="program-details">
            <label htmlFor="major">Major: </label>
            <input value={education.major} type="text" name="major" onChange={(event) => updateEducationInput(event, education.id)}></input>
            <label htmlFor="institution">Institution: </label>
            <input
              type="text"
              name="institution"
              value={education.institution}
              onChange={(event) => updateEducationInput(event, education.id)}
            ></input>
          </div>
          <div className="program-dates">
            <label htmlFor="date">
              End Date:
              <input value={endDate} type="date" name="date" onChange={(event) => updateEducationInput(event, education.id)}></input>
            </label>
          </div>
        </div>
      </div>

  );
};

export default Education;
