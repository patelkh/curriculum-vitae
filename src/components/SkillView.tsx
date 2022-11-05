import React, { useState } from "react";
import "./componentStyle.css";
import { IUserSkill } from "../models/IUserSkill";

interface IProps {
  skill: IUserSkill;
}

let SkillView: React.FC<IProps> = ({ skill }) => {
  return <div className="skill-section">{skill.skill}</div>;
};

export default SkillView;
