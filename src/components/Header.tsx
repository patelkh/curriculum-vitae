import React from "react";

export default function Header() {
  const showImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const img = document.querySelector(".header-user-image");
    img?.setAttribute("src", e.target.value);
  };
  return (
    <div className="header-container">
      <form className="header-form">
        <div className="header-image">
          <label className="header-image-box">
            <img className="header-user-image" src="#" alt=""></img>
            <input onChange={showImage} hidden type="file" name="image"></input>
          </label>
        </div>
        <div className="header-info">
          <label>Name: </label>
          <input type="text" name="name" placeholder="John Doe"></input>
          <label>Title: </label>
          <input
            type="text"
            name="title"
            placeholder="Frontend Developer"
          ></input>
        </div>
        <div className="header-addl-info">
          <input type="text" name="location" placeholder="Torrance, CA"></input>
          <input type="text" name="phone" placeholder="(310)329-2826"></input>
          <input
            type="text"
            name="email"
            placeholder="johndoe@gmail.com"
          ></input>
          <input
            type="text"
            name="github"
            placeholder="https://github.com/jdoe"
          ></input>
        </div>
      </form>
    </div>
  );
}
