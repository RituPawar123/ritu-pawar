import React from "react";
const Service = (props) => {
  return (
    <div className="col-12 row align-items-center align-items-md-start px-0">
      <div className="col-4 text-end ">
        <i className={`${props.icon} p-3 service-icon`} style={{ fontSize: "36px " }}></i>
      </div>
      <div className=" col-8  ">
        <h2>{props.heading}</h2>
        <p>{props.description}</p>
      </div>
    </div>
  );
};
export default Service;
