import React from "react";
import Service from "./Service";

const MyService = (props) => {
  const data = [
    {
      heading: "Web Development",
      description:
        "I have knowledge about frontend html,css,javascript,bootstrap",
      icon: "fas fa-desktop",
    },
    {
      heading: "UI-UX",
      description: "hello this is ritu",
      icon: "	fas fa-pencil-alt",
    },
    {
      heading: "Python-Django Develpoment",
      description: "hello this is ritu",
      icon: "	fas fa-laptop-code",
    },
    {
      heading: "E-Commerce",
      description: "hello this is ritu",
      icon: "	fas fa-cart-plus",
    },
  ];
  const { heading, description } = data;
  return (
    <div
      className="row text-light py-5 bg-darkgreen"
    >
      <div className="col-md-10 col-12 mx-auto row" id="service">
        <div className="text-center col-12 mb-5 ">
          <h1>
            <span className="fw-bold text-dark "> MY</span> SERVICE
          </h1>
        </div>
        <div className="col-12 row mx-auto px-0">
          {data.map((value, index) => {
            return (
              <div className="col-12 col-md-6 p-3  row  mx-auto" key={index}>
                <Service
                  heading={value.heading}
                  description={value.description}
                  icon={value.icon}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default MyService;
