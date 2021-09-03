import React from "react";
import image from "./RituImage.jpg";
// import Skeleton from "@material-ui/lab/Skeleton"
import "../App.css";

const Welcome = () => {
  return (
    <>
      <div className="row align-items-center text-light" id="welcome">
        <div className="col-12 col-md-11 row mx-auto">
          <div className="col-10 mx-auto d-md-none text-center">
            <img src={image} className="img-fluid mypic" />
          </div>
          <div className="col-11 col-md-7 mx-auto p-md-5 p-3">
            <div className="display-4 fw-bold my-3 mb-md-5 pl-5">
              {/* <Skeleton variant="circle" width={100} height={100} /> */}
              Hello, I am Ritu Pawar
            </div>
            {/* <div className="background-image: url('image.jpg');"></div> */}
            <p className="h6 ml-5  ">
              I am a Junior web developer and I have knowledge about UI-UX also
              able to build testable and efficient code currently working on
              ReactJs and nodeJs. I am a good listener quick learner and
              hardworking
            </p>
          </div>
          <div className="col-5 d-none d-md-block">
            <img src={image} className="img-fluid mypic rounded shadow" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Welcome;
