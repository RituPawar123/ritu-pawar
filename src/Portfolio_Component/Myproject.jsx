import React from "react";
import Project from "./Project";
const Myproject = (props) => {
  const data = [
    {
      image: "ProjectImg",
      heading: "Online grocery shopping",
      text: "this is",
    },
    {
      image: "ProjectImg",
      heading: "Online grocery shopping",
      text: "this is",
    },
  ];
  const { image, heading, text } = data;
  return (
    <>
      <div>
        <h1></h1>
      </div>
      {data.map((value, index) => {
        return (
          <div>
            <Project
              image={value.image}
              heading={value.heading}
              text={value.text}
            />
          </div>
        );
      })}
    </>
  );
};
export default Myproject;
