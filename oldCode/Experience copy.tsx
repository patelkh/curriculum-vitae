import React, { useState } from "react";
import './componentStyle.css'
import { IUserExperience } from "../models/IUserExperience";

interface IProps{}
interface IState{
    experience: IUserExperience
}

let Experience:React.FC<IProps> = ({}) => {
    let [state, setState] = useState<IState>({
        experience: {
            title: '',
            company: '',
            start: new Date(),
            end: new Date(),
            description: ''
        } as IUserExperience
    })

    let updateInput = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        setState({
            experience: {
            ...state.experience, [event.target.name]: [event.target.value]}})
        // console.log(JSON.stringify(state.experience))
          
    }

    return(
        <div className="experience-container">
            <div className="section-container">
              <div className="top-level-details">
                <div className="title-company">
                <div className="title-detail">
                  <label htmlFor="title">Title: </label>
                  <input 
                  type="text" 
                  name="title"
                  onChange={updateInput}
                  ></input>
                </div>
                <div className="company-detail">
                  <label htmlFor="company">Company: </label>
                  <input 
                  type="text" 
                  name="company"
                  onChange={updateInput}
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
                        onChange={updateInput}
                      ></input>
                    </label>
                  </div>
                  <div className="end-date">
                    <label htmlFor="end">
                      End Date:
                      <input
                        type="date"
                        name="end-date"
                        onChange={updateInput}
                      ></input>
                    </label>
                  </div>
                </div>
              </div>
              <div className="bottom-level-details">
                <textarea className="experience-details" onChange={updateInput}></textarea>
              </div>
            </div>
            
        </div>
    )
}

export default Experience 