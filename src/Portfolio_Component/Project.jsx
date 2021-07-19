import React from "react";
import image from "./Project.PNG";
const Project = (props) => {
  return (
    <>
      <div className="container p-5" id="project">
        <div className="row">
          <h3 className="mb-3">My Project</h3>
          <div className="col-12 col-md-3  ">
            <img src={image} className="img-fluid project " />
          </div>
          <div className=" col-12 col-md-7  ">
            <h1>{props.heading}</h1>
            <p>{props.text}</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Project;
