import React from "react";
import "./pageStyle.css";
import { IUser } from "../models/IUser";
import { IUserExperience } from "../models/IUserExperience";
import { IUserEducation } from "../models/IUserEducation";
import { IUserSkill } from "../models/IUserSkill";
import HeaderView from "../components/HeaderView";
import ExperienceView from "../components/ExperienceView";
import EducationView from "../components/EducationView";
import SkillView from "../components/SkillView";

interface IProps {
  header: IUser
  experiences: IUserExperience[]
  education: IUserEducation[]
  skills: IUserSkill[]
}

let View: React.FC<IProps> = ({header, experiences, education, skills}) => {
  return (
    <div className="layout-container">
      <div className="view-container">
        <div className="view-header-container">
          <HeaderView header={header} />
        </div>

        <div className="view-experience-container">
          <div className="section-heading-container">
            <h4 className="section-heading">Experience</h4>
          </div>
          {experiences!.length > 0 &&
            experiences!.map((experience, index) => {
              return (
                <div className="experience-container">
                  <ExperienceView
                    key={experience.id}
                    experience={experiences[index]}
                  />
                </div>
              );
            })}
        </div>

        <div className="view-education-container">
          <div className="section-heading-container">
            <h4 className="section-heading">Education</h4>
          </div>
          {education!.length > 0 &&
            education!.map((item, index) => {
              return (
                <div className="education-container">
                  <EducationView key={item.id} education={education[index]} />
                </div>
              );
            })}
        </div>
        <div className="view-skill-container">
          <div className="section-heading-container">
            <h4 className="section-heading">Skill</h4>
          </div>
          {skills!.length > 0 &&
            skills!.map((skill, index) => {
              return (
                <div className="skill-container">
                  <SkillView key={skill.id} skill={skills[index]} />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default View;
