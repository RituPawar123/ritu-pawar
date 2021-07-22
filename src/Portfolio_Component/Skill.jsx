import React from "react";
import LinearProgress from "@material-ui/core/LinearProgress";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  circularProgressBar: {
    borderRadius: "5px !important",
    height: "10px",
    // backgroundColor:"#3cb371",
  },
}));

const Skill = (props) => {
  const classes = useStyles();
  return (
    <div className="my-2 ">
      <div>
        <div className=" d-flex justify-content-between bd-highlight">
          <div className="p-2 bd-highlight  " style={{ color: "white" }}>
            {props.skillName}
          </div>
          <div className="p-2 bd-highlight" style={{ color: "white" }}>
            {props.skillAmount}%
          </div>
        </div>
        <LinearProgress
          variant="determinate"
          className={`${classes.circularProgressBar}`}
          value={parseInt(props.skillAmount)}
        />
      </div>
    </div>
  );
};
export default Skill;
