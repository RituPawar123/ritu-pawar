import React from "react";
const Service = (props) => {
  return (
    <div className="col-12 row align-items-start">
      <div className="col-4 text-end ">
        <i className={props.icon} style={{ fontSize: "36px " }}></i>
      </div>
      {/* <div className="p-2 ">{props.heading}</div>
      <div className="p-2 ">{props.description}</div> */}

      {/* <h1>MY SERVICE</h1> */}
      <div className=" col-8  ">
        <h2>{props.heading}</h2>
        <p>{props.description}</p>
      </div>
    </div>
  );
};
export default Service;
