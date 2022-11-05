import React, { useState } from "react";
import './componentStyle.css'
import { IUserExperience } from "../models/IUserExperience";

interface IProps{
  experience: IUserExperience
  updateExperienceInput: any 
}

let Experience:React.FC<IProps> = ({experience, updateExperienceInput}) => {

    return(

            <div className="section-container">
              <div className="top-level-details">
                <div className="title-company">
                <div className="title-detail">
                  <label htmlFor="title">Title: </label>
                  <input 
                  type="text" 
                  name="title"
                  onChange={(event) =>  updateExperienceInput(event, experience.id)}
                  ></input>
                </div>
                <div className="company-detail">
                  <label htmlFor="company">Company: </label>
                  <input 
                  type="text" 
                  name="company"
                  onChange={(event) =>  updateExperienceInput(event, experience.id)}
                  ></input>
                </div>
                </div>
                <div className="date-details">
                  <div className="start-date">
                    <label htmlFor="start-date">
                      Start Date:
                      <input
                        type="date"
                        name="start"
                        onChange={(event) =>  updateExperienceInput(event, experience.id)}
                      ></input>
                    </label>
                  </div>
                  <div className="end-date">
                    <label htmlFor="end">
                      End Date:
                      <input
                        type="date"
                        name="end"
                        onChange={(event) =>  updateExperienceInput(event, experience.id)}
                      ></input>
                    </label>
                  </div>
                </div>
              </div>
              <div className="bottom-level-details">
                <textarea name="description" className="experience-details" onChange={(event) =>  updateExperienceInput(event, experience.id)}></textarea>
              </div>
            </div>
            

    )
}

export default Experience 