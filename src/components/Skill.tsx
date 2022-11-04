import React, { useState } from "react";
import "./componentStyle.css";
import { IUserSkill } from "../models/IUserSkill";

interface IProps {}
interface IState {
  skill: IUserSkill;
}

let Skill: React.FC<IProps> = ({}) => {
  let [state, setState] = useState<IState>({
    skill: {
      name: "",
    } as IUserSkill,
  });

  let updateInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      skill: {
        ...state.skill,
        [event.target.name]: [event.target.value],
      },
    });
  };

  return (
    <div className="skill-container">
      <div className="skill-section">
        <input 
        type="text" 
        name="skill"
        onChange={updateInput}
        ></input>
      </div>
    </div>
  );
};

export default Skill;
