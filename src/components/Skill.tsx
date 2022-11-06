import React from "react";
import "./componentStyle.css";
import { IUserSkill } from "../models/IUserSkill";

interface IProps {
  skill: IUserSkill;
  updateSkillUpdate: any;
}

let Skill: React.FC<IProps> = ({ skill, updateSkillUpdate }) => {
  return (
    <div className="skill-section">
      <input
        type="text"
        name="skill"
        value={skill.skill}
        onChange={(event) => updateSkillUpdate(event, skill.id)}
      ></input>
    </div>
  );
};

export default Skill;
