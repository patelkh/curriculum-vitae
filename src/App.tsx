import React, { useState} from "react";
import "./App.css";
import Banner from "./components/Banner";
import Edit from "./pages/Edit";
import View from "./pages/View";
import { IUser } from "./models/IUser";
import { IUserExperience } from "./models/IUserExperience";
import { IUserEducation } from "./models/IUserEducation";
import { IUserSkill } from "./models/IUserSkill";

function App() {
  let [isEditable, setIsEditable] = useState(true);
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


  let toggleView = (event: React.MouseEvent<HTMLButtonElement>) => {
    setIsEditable(!isEditable)
  }

  return (
    <div className="App">
      <Banner />
      {isEditable && (
        <div className="edit-view">
          <button className="preview-button" onClick={(event) => toggleView(event)}>Preview</button>
          <Edit 
          header={header}
          experiences={experiences}
          education={education}
          skills={skills}
          updateHeaderInput={updateHeaderInput}
          updateExperienceInput={updateExperienceInput}
          updateEducationInput={updateEducationInput}
          updateSkillInput={updateSkillInput}
          addExperience={addExperience}
          removeExperience={removeExperience}
          addEducation={addEducation}
          removeEducation={removeEducation}
          addSkill={addSkill}
          removeSkill={removeSkill}
          />
        </div>
      )}
      {!isEditable &&
      <div className="readonly-view">
        <button className="edit-button" onClick={toggleView}>Edit</button>
        <View 
        header={header}
        experiences={experiences}
        education={education}
        skills={skills}/>
      </div>
      }
    </div>
  );
}

export default App;
