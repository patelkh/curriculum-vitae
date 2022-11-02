import React from "react";
import Setting from "../components/Setting";
import "./pageStyle.css";

export default function Layout() {
  const addExperience = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    const div = document.querySelector(".cv-form-experience");
    const section_container = document.createElement("div");
    section_container.className = "section-container";

    const top_level_details = document.createElement("div");
    top_level_details.className = "top-level-details";

    const title_details = document.createElement("div");
    title_details.className = "title-details";
    const label = document.createElement("label");
    label.textContent = "Title: ";
    const input = document.createElement("input");
    input.type = "text";
    input.name = "title";
    title_details.appendChild(label);
    title_details.appendChild(input);

    const date_details = document.createElement("div");
    date_details.className = "date-details";
    const start_date = document.createElement("div");
    start_date.className = "start-date";
    const label2 = document.createElement("label");
    label2.htmlFor = "start-date";
    label2.textContent = "Start Date: ";
    const input2 = document.createElement("input");
    input2.type = "date";
    input2.name = "start-date";
    start_date.appendChild(label2);
    start_date.appendChild(input2);

    const end_date = document.createElement("div");
    end_date.className = "end-date";
    const label3 = document.createElement("label");
    label3.htmlFor = "end-date";
    label3.textContent = "End Date: ";
    const input3 = document.createElement("input");
    input3.type = "date";
    input3.name = "end-date";
    end_date.appendChild(label3);
    end_date.appendChild(input3);

    date_details.appendChild(start_date);
    date_details.appendChild(end_date);

    top_level_details.appendChild(title_details);
    top_level_details.appendChild(date_details);

    // const delete_container = document.createElement('div')
    // delete_container.className = "delete-container"
    // const delete_button = document.createElement('button')
    // delete_button.className = `delete-section-button${count}`
    // delete_button.type = "button"
    // delete_button.textContent = "Delete"
    // delete_container.appendChild(delete_button)

    const bottom_level_details = document.createElement("div");
    bottom_level_details.className = "bottom-level-details";
    const experience_details = document.createElement("textarea");
    experience_details.className = "experience-details";
    bottom_level_details.appendChild(experience_details);

    section_container.appendChild(top_level_details);
    section_container.appendChild(bottom_level_details);
    // section_container.appendChild(delete_container)

    div?.appendChild(section_container);
  };

  const addEducation = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    const program_container = document.querySelector(".program-container");
    const program_details = document.createElement("div");
    program_details.className = "program-details";

    const program_label = document.createElement("label");
    program_label.className = "program-label";
    program_label.textContent = "Major";
    const program_input = document.createElement("input");
    program_input.className = "program-input";

    const institution_label = document.createElement("label");
    institution_label.className = "institution-label";
    institution_label.textContent = "Institution";
    const institution_input = document.createElement("input");
    institution_input.className = "institution-input";

    program_details.appendChild(program_label);
    program_details.appendChild(program_input);
    program_details.appendChild(institution_label);
    program_details.appendChild(institution_input);

    const program_dates = document.createElement("div");
    program_dates.className = "program-dates";
    const start_date = document.createElement("div");
    start_date.className = "start-date";
    const start_label = document.createElement("label");
    start_label.textContent = "Start Date: ";
    const start_input = document.createElement("input");
    start_input.type = "date";
    start_input.name = "start-date";
    start_date.appendChild(start_label);
    start_date.appendChild(start_input);

    const end_date = document.createElement("div");
    end_date.className = "end-date";
    const end_label = document.createElement("label");
    end_label.textContent = "End Date: ";
    const end_input = document.createElement("input");
    end_input.type = "date";
    end_input.name = "end-date";
    end_date.appendChild(end_label);
    end_date.appendChild(end_input);
    program_dates.appendChild(start_date);
    program_dates.appendChild(end_date);
    program_container?.appendChild(program_details);
    program_container?.appendChild(program_dates);
  };

  const addSkill = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const skill_section = document.querySelector(".skill-section");
    const skill_input = document.createElement("input");
    skill_input.type = "text";
    skill_input.name = "skill";
    skill_section?.appendChild(skill_input);
  };

  return (
    <div className="layout-container">
      <div className="cv-form-container">
        <form className="cv-form">
          <div className="cv-form-header">
            <div className="header-image">
              <label className="header-image-box">
                <img className="header-user-image" src="#" alt=""></img>
                <input hidden type="file" name="image"></input>
              </label>
            </div>
            <div className="header-info">
              <label>Name: </label>
              <input type="text" name="name" placeholder="Enter name"></input>
              <label>Title: </label>
              <input type="text" name="title" placeholder="Enter Title"></input>
            </div>
            <div className="header-addl-info">
              <input
                type="text"
                name="location"
                placeholder="Enter Location"
              ></input>
              <input
                type="text"
                name="phone"
                placeholder="Enter Phone Number"
              ></input>
              <input type="text" name="email" placeholder="Enter Email"></input>
              <input
                type="text"
                name="github"
                placeholder="Enter Github Link"
              ></input>
            </div>
          </div>
          <div className="cv-form-experience">
            <div className="section-heading-container">
              <h4 className="section-heading">Experience</h4>
              <button onClick={addExperience} className="add-section-button">
                Add Experience
              </button>
            </div>
            <div className="section-container">
              <div className="top-level-details">
                <div className="title-detail">
                  <label htmlFor="title">Title: </label>
                  <input type="text" name="title"></input>
                </div>
                <div className="date-details">
                  <div className="start-date">
                    <label htmlFor="start-date">
                      Start Date:
                      <input
                        placeholder="01/01/2022"
                        type="date"
                        name="start-date"
                      ></input>
                    </label>
                  </div>
                  <div className="end-date">
                    <label htmlFor="end-date">
                      End Date:
                      <input
                        placeholder="11/01/2023"
                        type="date"
                        name="end-date"
                      ></input>
                    </label>
                  </div>
                </div>
              </div>
              <div className="bottom-level-details">
                <textarea className="experience-details"></textarea>
              </div>
            </div>
          </div>
          <div className="cv-form-education">
            <div className="section-heading-container">
              <h4 className="section-heading">Education</h4>
              <button onClick={addEducation} className="add-section-button">
                Add Education
              </button>
            </div>
            <div className="section-container">
              <div className="program-container">
                <div className="program-details">
                  <label htmlFor="program">Major: </label>
                  <input type="text" name="program"></input>
                  <label htmlFor="institution">Institution: </label>
                  <input type="text" name="institution"></input>
                </div>
                <div className="program-dates">
                  <div className="start-date">
                    <label htmlFor="start-date">
                      Start Date:
                      <input type="date" name="start-date"></input>
                    </label>
                  </div>
                  <div className="end-date">
                    <label htmlFor="end-date">
                      End Date:
                      <input type="date" name="end-date"></input>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="cv-form-skill">
            <div className="section-heading-container">
              <h4 className="section-heading">Skills</h4>
              <button onClick={addSkill} className="add-section-button">
                Add Skills
              </button>
            </div>
            <div className="skill-section">
              <input type="text" name="skill"></input>
            </div>
          </div>
        </form>
      </div>
      <div className="cv-setting-container">
        <Setting />
      </div>
    </div>
  );
}
