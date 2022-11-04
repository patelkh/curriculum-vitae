import React, { useEffect, useState } from "react";
import Setting from "../components/Setting";
import "./pageStyle.css";
import Header from "../components/Header";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Skill from '../components/Skill';

interface IProps {}

let Layout: React.FC<IProps> = ({}) => {
  let [experiences, setExperience] = useState([] as React.ReactElement[]);
  let [education, setEducation] = useState([] as React.ReactElement[]);
  let [skills, setSkill] = useState([] as React.ReactElement[]);

  // const experiences: React.ReactElement[] = []
  // for(let i=0; i<1; i++) {
  //   experiences.push(<Experience/>)
  // }

  useEffect(() => {}, [experiences, education, skills]);

  let addExperience = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setExperience(experiences.concat(<Experience />));
  };

  let removeExperience = (
    event: React.MouseEvent<HTMLButtonElement>,
    key: number
  ) => {
    event.preventDefault();
    let item = experiences![key];
    let newArray = experiences!.filter((experience) => experience !== item);
    setExperience(newArray);
  };

  let addEducation = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setEducation(education.concat(<Education />));
  };

  let removeEducation = (
    event: React.MouseEvent<HTMLButtonElement>,
    key: number
  ) => {
    event.preventDefault();
    let item = education![key];
    let newArray = education!.filter((record) => record !== item);
    setEducation(newArray);
  };

  let addSkill = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setSkill(skills.concat(<Skill/>))
  }

  let removeSkill = (
    event: React.MouseEvent<HTMLButtonElement>,
    key: number
  ) => {
    event.preventDefault();
    let item = skills![key];
    let newArray = skills!.filter((skill) => skill !== item);
    setSkill(newArray);
  };



  return (
    <div className="layout-container">
      <div className="cv-form-container">
        <form className="cv-form">
          <div className="cv-form-header">
            <Header />
          </div>
          <div className="cv-form-experience">
            <div className="section-heading-container">
              <h4 className="section-heading">Experience</h4>
              <button onClick={addExperience} className="add-section-button">
                Add Experience
              </button>
            </div>
            <Experience />
            {experiences!.length > 0 &&
              experiences!.map((experience, i) => {
                return (
                  <div key={i}>
                    <hr></hr>
                    {experience}
                    <button
                      onClick={(event) => removeExperience(event, i)}
                      className="delete-experience"
                    >
                      Remove Experience
                    </button>
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
            <Education />
            {education!.length > 0 &&
              education!.map((item, i) => {
                return (
                  <div key={i}>
                    <hr></hr>
                    {item}
                    <button
                      onClick={(event) => removeEducation(event, i)}
                      className="delete-education"
                    >
                      Remove Education
                    </button>
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
            <Skill/>
            {skills!.length > 0 && skills.map((skill, index) => {
              return <div key={index} className="skill"> 
                {skill}
                <button className="delete-skill" onClick={(event) => removeSkill(event, index)}>Remove Skill</button>
              </div>
            })}
          </div>
        </form>
      </div>
      <div className="cv-setting-container">
        <Setting />
      </div>
    </div>
  );
};

export default Layout;
