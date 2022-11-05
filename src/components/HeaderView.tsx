import React, { useState } from "react";
import { IUser } from "../models/IUser";
import "./componentStyle.css";

interface IProps {
  header: IUser
}

let HeaderView: React.FC<IProps> = ({header}) => {
  return (
    <div className="header-viewcontainer">
      <div className="header-info-viewcontainer">
        <h1>{header.name}</h1>
        <h3>{header.title}</h3>
        <p>{header.objective}</p>
      </div>
      <div className="header-other-viewcontainer">
        <div className="header-other">
          <i className="fa fa-location-dot"></i>
          {header.location}
        </div>
        <div className="header-other">
        <i className="fa fa-phone"></i>
          {header.phone}
        </div>
        <div className="header-other">
        <i className="fa fa-envelope"></i>
          {header.email}
        </div>
        <div className="header-other">
        <i className="fa fa-link"></i>
         {header.website}
        </div>
      </div>
    </div>
  );
};

export default HeaderView;
