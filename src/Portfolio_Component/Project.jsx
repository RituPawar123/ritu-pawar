import React from "react";
import image from "./Project.PNG";
const Project = () => {
  return (
    <>
      <div className="container p-5" id="project">
        <div className="row">
          <h3 className="mb-3">My Project</h3>
          <div className="col-12 col-md-3  ">
            <img src={image} className="img-fluid project " />
          </div>
          <div className=" col-12 col-md-7  ">
            <h5 className="mb-3">ONLINE GROCERY SHOPPING</h5>
            <p>
              This is responsive web based website for Online Grocery Ordering
              using html, css, javascript And Python Django.
            </p>
            <a
              className="d-inline-block text-truncate"
              style={{ maxWidth: "200px" }}
              href="https://groceryshop.pythonanywhere.com/groceryUser/"
              target="_blank"
            >
              https://groceryshop.pythonanywhere.com/groceryUser/
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default Project;
