import React, { useState } from "react";
import "./componentStyle.css";
import { IUserSkill } from "../models/IUserSkill";

interface IProps {
  skill: IUserSkill;
}

let SkillView: React.FC<IProps> = ({ skill }) => {
  return (
    <div className="skill-section">
      <input
        type="text"
        name="skill"
        value={skill.skill}
      ></input>
    </div>
  );
};

export default SkillView;
