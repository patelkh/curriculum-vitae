import React from "react";
import "./pageStyle.css";
import Header from "../components/Header";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Skill from "../components/Skill";
import { IUser } from "../models/IUser";
import { IUserExperience } from "../models/IUserExperience";
import { IUserEducation } from "../models/IUserEducation";
import { IUserSkill } from "../models/IUserSkill";

interface IProps {
  header: IUser
  experiences: IUserExperience[]
  education: IUserEducation[]
  skills: IUserSkill[]
  updateHeaderInput: any
  updateExperienceInput: any
  updateEducationInput: any
  updateSkillInput: any
  addExperience: any
  removeExperience: any
  addEducation: any
  removeEducation: any
  addSkill: any
  removeSkill: any
}

let Edit: React.FC<IProps> = ({
    header, experiences, education, skills,  updateHeaderInput, updateExperienceInput, updateEducationInput, updateSkillInput, addExperience, removeExperience, addEducation, removeEducation, addSkill, removeSkill
}) => {
  return (
    <div className="layout-container">
      <div className="form-container">
        <Header header={header!} updateHeaderInput={updateHeaderInput} />

        <div className="cv-form-experience">
          <div className="section-heading-container">
            <h4 className="section-heading">Experience</h4>
            <button onClick={addExperience} className="add-section-button">
              Add Experience
            </button>
          </div>
          {experiences!.length > 0 &&
            experiences!.map((experience, index) => {
              return (
                <div className="experience-container">
                  <div className="experience-grid">
                    <Experience
                      key={experience.id}
                      experience={experiences[index]}
                      updateExperienceInput={updateExperienceInput}
                    />
                    <div className="delete-container">
                      <button
                        className="delete-experience"
                        onClick={(event) => removeExperience(event, index)}
                      >
                        <i className="fa fa-trash"></i>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
        <div className="cv-form-education">
          <div className="section-heading-container">
            <h4 className="section-heading">Education</h4>
            <button onClick={addEducation} className="add-section-button">
              Add Education
            </button>
          </div>
          {education.length > 0 &&
            education.map((item, index) => {
              return (
                <div className="education-container">
                  <div className="education-grid">
                    <Education
                      key={item.id}
                      education={education[index]}
                      updateEducationInput={updateEducationInput}
                    />
                    <div className="delete-container">
                      <button
                        className="delete-education"
                        onClick={(event) => removeEducation(event, index)}
                      >
                        <i className="fa fa-trash"></i>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
        <div className="cv-form-skill">
          <div className="section-heading-container">
            <h4 className="section-heading">Skills</h4>
            <button className="add-section-button" onClick={addSkill}>
              Add Skills
            </button>
          </div>
          {skills.length > 0 &&
            skills.map((skill, index) => {
              return (
                <div className="skill-container">
                  <div className="skill-grid">
                    <Skill
                      key={skill.id}
                      skill={skills[index]}
                      updateSkillUpdate={updateSkillInput}
                    />
                    <div className="delete-container">
                      <button
                        className="delete-skill"
                        onClick={(event) => removeSkill(event, index)}
                      >
                        <i className="fa fa-trash"></i>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Edit;
