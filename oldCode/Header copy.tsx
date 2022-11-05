import React, { useState } from "react";
import { IUser } from "../models/IUser";
import "./componentStyle.css";

interface IProps {}
interface IState {
  user: IUser;
}

let Header: React.FC<IProps> = ({}) => {
  let [state, setState] = useState<IState>({
    user: {
      name: "",
      title: "",
      objective: "",
      location: "",
      phone: "",
      email: "",
      website: "",
    },
  });

  let updateInput = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setState({
      user: {
        ...state.user,
        [event.target.name]: event.target.value,
      },
    });
  };

  return (
    <div className="header-container">
      <div className="header-info-container">
        <input
          type="text"
          name="name"
          placeholder="Your name"
          value={state.user.name}
          onChange={updateInput}
        ></input>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={state.user.title}
          onChange={updateInput}
        ></input>
        <textarea
          name="objective"
          placeholder="Summary/Objective"
          value={state.user.objective}
          onChange={updateInput}
        ></textarea>
      </div>
      <div className="header-other-container">
        <div className="header-other">
          <i className="fa fa-location-dot"></i>
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={state.user.location}
            onChange={updateInput}
          ></input>
        </div>
        <div className="header-other">
        <i className="fa fa-phone"></i>
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={state.user.phone}
            onChange={updateInput}
          ></input>
        </div>
        <div className="header-other">
        <i className="fa fa-envelope"></i>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={state.user.email}
            onChange={updateInput}
          ></input>
        </div>
        <div className="header-other">
        <i className="fa fa-link"></i>
          <input
            type="url"
            name="website"
            placeholder="Professional Website"
            value={state.user.website}
            onChange={updateInput}
          ></input>
        </div>
      </div>
    </div>
  );
};

export default Header;
