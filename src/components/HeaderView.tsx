import React, { useState } from "react";
import { IUser } from "../models/IUser";
import "./componentStyle.css";

interface IProps {
  header: IUser
}

let HeaderView: React.FC<IProps> = ({header}) => {
  return (
    <div className="header-container">
      <div className="header-info-container">
        <input
          type="text"
          name="name"
          placeholder="Your name"
          value={header.name}
        ></input>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={header.title}
        ></input>
        <textarea
          name="objective"
          placeholder="Summary/Objective"
          value={header.objective}
        ></textarea>
      </div>
      <div className="header-other-container">
        <div className="header-other">
          <i className="fa fa-location-dot"></i>
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={header.location}
          ></input>
        </div>
        <div className="header-other">
        <i className="fa fa-phone"></i>
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={header.phone}
          ></input>
        </div>
        <div className="header-other">
        <i className="fa fa-envelope"></i>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={header.email}
          ></input>
        </div>
        <div className="header-other">
        <i className="fa fa-link"></i>
          <input
            type="url"
            name="website"
            placeholder="Professional Website"
            value={header.website}
          ></input>
        </div>
      </div>
    </div>
  );
};

export default HeaderView;
