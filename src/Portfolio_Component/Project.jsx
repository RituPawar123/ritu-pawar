import React from "react";

const Project = (props) => {
  return (
    <>
      <div className="row  project-item col-12 mx-auto rounded p-md-5  p-3">
        <div className="col-12 col-md-3  my-md-0">
          {console.log(props.projectImage)}
          <img src={props.projectImage} className="img-fluid project " />
        </div>
        <div className=" col-12 col-md-7 ">
          <h1>{props.heading}</h1>
          <p className="my-4">{props.text}</p>
          <a
            href={props.url}
            className="text-decoration-none project-url text-truncate d-inline-block d-md-block"
          >
            {props.url}
          </a>
        </div>
      </div>
    </>
  );
};
export default Project;
