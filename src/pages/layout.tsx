import React, { useEffect, useState } from "react";
import "./pageStyle.css";
import Header from "../components/Header";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Skill from "../components/Skill";
import { IUser } from "../models/IUser";
import { IUserExperience } from "../models/IUserExperience";
import { IUserEducation } from "../models/IUserEducation";
import { IUserSkill } from "../models/IUserSkill";
import HeaderView from "../components/HeaderView";
import ExperienceView from "../components/ExperienceView";
import EducationView from "../components/EducationView";
import SkillView from "../components/SkillView";

interface IProps {}

let Layout: React.FC<IProps> = ({}) => {
  let [render, setRender] = useState(false);
  let [header, setHeader] = useState({
    name: "",
    title: "",
    objective: "",
    location: "",
    phone: "",
    email: "",
    website: "",
  } as IUser);
  let [experiences, setExperiences] = useState<IUserExperience[]>([
    {
      id: 0,
      title: "",
      company: "",
      start: new Date(),
      end: new Date(),
      description: "",
    },
  ]);
  let [education, setEducation] = useState<IUserEducation[]>([
    {
      id: 0,
      major: "",
      institution: "",
      date: new Date(),
    },
  ]);
  let [skills, setSkills] = useState<IUserSkill[]>([
    {
      id: 0,
      skill: "",
    },
  ]);

  let [experienceCount, setExpCount] = useState(0);
  let [educationCount, setEduCount] = useState(0);
  let [skillCount, setSkillCount] = useState(0);

  useEffect(() => {}, [render]);

  let updateHeaderInput = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    let label: string = event.target.name;
    function isField(field: string) {
      if (field === label) {
        return true;
      } else {
        return false;
      }
    }
    let { name, title, objective, location, phone, email, website } = header!;

    setHeader({
      name: isField("name") ? event.target.value : name,
      title: isField("title") ? event.target.value : title,
      objective: isField("objective") ? event.target.value : objective,
      location: isField("location") ? event.target.value : location,
      phone: isField("phone") ? event.target.value : phone,
      email: isField("email") ? event.target.value : email,
      website: isField("website") ? event.target.value : website,
    });
  };

  let updateExperienceInput = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
    key: number
  ) => {
    let label: string = event.target.name;
    function isField(field: string) {
      if (field === label) {
        return true;
      } else {
        return false;
      }
    }
    let items = [...experiences];
    let item = { ...items[key] };

    item.id = isField("id") ? parseInt(event.target.name) : item.id;
    item.title = isField("title") ? event.target.value : item.title;
    item.company = isField("company") ? event.target.value : item.company;
    item.start = isField("start") ? new Date(event.target.value) : item.start;
    item.end = isField("end") ? new Date(event.target.value) : item.end;
    item.description = isField("description")
      ? event.target.value
      : item.description;

    items[key] = item;
    setExperiences(items);
    // console.log(JSON.stringify(experiences))
  };

  let updateEducationInput = (
    event: React.ChangeEvent<HTMLInputElement>,
    key: number
  ) => {
    let label: string = event.target.name;
    function isField(field: string) {
      if (field === label) {
        return true;
      } else {
        return false;
      }
    }
    let items = [...education];
    let item = { ...items[key] };

    item.id = isField("id") ? parseInt(event.target.name) : item.id;
    item.major = isField("major") ? event.target.value : item.major;
    item.institution = isField("institution")
      ? event.target.value
      : item.institution;
    item.date = isField("date") ? new Date(event.target.value) : item.date;

    items[key] = item;
    setEducation(items);
    // console.log(JSON.stringify(experiences))
  };

  let updateSkillInput = (
    event: React.ChangeEvent<HTMLInputElement>,
    key: number
  ) => {
    let label: string = event.target.name;
    function isField(field: string) {
      if (field === label) {
        return true;
      } else {
        return false;
      }
    }
    let items = [...skills];
    let item = { ...items[key] };

    item.id = isField("id") ? parseInt(event.target.value) : item.id;
    item.skill = isField("skill") ? event.target.value : item.skill;

    items[key] = item;
    setSkills(items);
    // console.log(JSON.stringify(experiences))
  };

  let addExperience = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setExpCount((experienceCount += 1));
    // console.log(`exp count: ${experienceCount}`);
    setExperiences(
      experiences.concat({
        id: experienceCount,
        title: "",
        company: "",
        start: new Date(),
        end: new Date(),
        description: "",
      })
    );
    // console.log(JSON.stringify(experiences));
    setRender(true);
  };

  let removeExperience = (
    event: React.MouseEvent<HTMLButtonElement>,
    key: number
  ) => {
    event.preventDefault();
    let itemToRemove = experiences[key];
    let newArray = experiences.filter(
      (experience) => experience !== itemToRemove
    );
    setExperiences(newArray);
    setExpCount((experienceCount -= 1));
  };

  let addEducation = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setEduCount((educationCount += 1));
    // console.log(`exp count: ${experienceCount}`);
    setEducation(
      education.concat({
        id: educationCount,
        major: "",
        institution: "",
        date: new Date(),
      })
    );
    setRender(true);
  };

  let removeEducation = (
    event: React.MouseEvent<HTMLButtonElement>,
    key: number
  ) => {
    event.preventDefault();
    let itemToRemove = education[key];
    let newArray = education.filter((item) => item !== itemToRemove);
    setEducation(newArray);
    setEduCount((educationCount -= 1));
  };

  let addSkill = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setSkillCount((skillCount += 1));
    // console.log(`exp count: ${experienceCount}`);
    setSkills(
      skills.concat({
        id: skillCount,
        skill: "",
      })
    );
    setRender(true);
  };

  let removeSkill = (
    event: React.MouseEvent<HTMLButtonElement>,
    key: number
  ) => {
    event.preventDefault();
    let itemToRemove = skills[key];
    let newArray = skills.filter((skill) => skill !== itemToRemove);
    setSkills(newArray);
    setSkillCount((skillCount -= 1));
  };

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

export default Layout;
