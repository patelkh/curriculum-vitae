import React, { useState } from "react";
import "./componentStyle.css";
import { IUserEducation } from "../models/IUserEducation";

interface IProps {}
interface IState {
  education: IUserEducation;
}

let Education: React.FC<IProps> = ({}) => {
  let [state, setState] = useState<IState>({
    education: {
      major: "",
      institution: "",
      date: new Date(),
    } as IUserEducation,
  });

  let updateInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      education: {
        ...state.education,
        [event.target.name]: [event.target.value],
      },
    });
  };

  return (
    <div className="education-container">
      <div className="section-container">
        <div className="program-container">
          <div className="program-details">
            <label htmlFor="program">Major: </label>
            <input type="text" name="program" onChange={updateInput}></input>
            <label htmlFor="institution">Institution: </label>
            <input
              type="text"
              name="institution"
              onChange={updateInput}
            ></input>
          </div>
          <div className="program-dates">
            <label htmlFor="date">
              End Date:
              <input type="date" name="date" onChange={updateInput}></input>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
