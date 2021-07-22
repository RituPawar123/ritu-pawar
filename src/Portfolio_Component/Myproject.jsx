import React from "react";
import Project from "./Project";
import projectImage from "./Project.PNG";
const Myproject = (props) => {
  const data = [
    {
      projectImage: projectImage,
      heading: "Online grocery shopping",
      text: "This is a web based responsive app, design in bootstrap and python Django. It's a E-commerce application you can buy grocery and other things on this web app.",
      url:"https://groceryshop.pythonanywhere.com/"
    },
  ];
  return (
    <div className="row" id="project">
      <div className="col-md-10 col-12 row mx-auto my-5">
      <div>
        <h1 className="text-green text-uppercase fw-bold"><span className="text-dark"> My </span>Projects</h1>
      </div>
      {data.map((value, index) => {
        return (
          <div>
            <Project
              projectImage={value.projectImage}
              heading={value.heading}
              text={value.text}
              url={value.url}
              />
          </div>
        );
      })}
      </div>
      </div>
  );
};
export default Myproject;
