import React from "react";
import PropTypes from "prop-types";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";
import LinearProgress from "@material-ui/core/LinearProgress";
import Skill from "./Skill";

const MySkills = (Props) => {
  const data = [
    { skillName: "HTML&css", skillAmount: 80 },
    { skillName: "Javascript", skillAmount: 60 },
    { skillName: "Bootstrap", skillAmount: 75 },
    { skillName: "Python", skillAmount: 60 },
    { skillName: "Django", skillAmount: 40 },
    { skillName: "React", skillAmount: 50 },
    { skillName: "MySql", skillAmount: 75 },
  ];
  const { skillName, skillAmount } = data;

  return (
    <>
      <div className="row py-5  " style={{ backgroundColor: "black" }}>
        <div className="col-12 col-md-10 mx-auto m-5 row">
          <div className="col-12 col-md-6 row   ">
            <div className="row col-12 align-items-center text-light  mx-auto">
              <h1 className="col-12 col-md-4 text-center">
                MY <span style={{ color: "mediumseagreen" }}>SKILL</span>{" "}
              </h1>
              <div className="col-12 col-md-8 text-left">
                <h3> WHAT YOU NEED TO KNOW</h3>
                <p>
                  I Ritu Pawar I am a junior frontend developer and also I have
                  knowledge about Backend I am passionate to work golbally and
                  also good listener, fast learner and hard working.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6  row ">
            {data.map((value, index) => {
              return (
                <div className="col-6">
                  <Skill
                    key={index}
                    skillName={value.skillName}
                    skillAmount={value.skillAmount}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default MySkills;
