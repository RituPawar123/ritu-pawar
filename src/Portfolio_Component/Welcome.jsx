import React from "react";
import image from "./RituImage.jpg";
import "../App.css";

const Welcome = () => {
  return (
    <>
      <div className="row align-items-center text-light" id="welcome">
        <div className="col-10 mx-auto d-md-none text-center">
          <img src={image} className="img-fluid mypic" />
        </div>
        <div className="col-11 col-md-7 mx-auto p-5">
          <div className="display-4 fw-bold my-3 mb-5 pl-5">
            Hello, I am Ritu Pawar
          </div>

          {/* <div className="background-image: url('image.jpg');"></div> */}
          <p className="h6 ml-5  ">
            I am a web developer and ui-ux designer I create a portfolio using
            html, javascript, bootstrap and React js and in this portfolio you
            can see all about me.
          </p>
        </div>
        <div className="col-5 d-none d-md-block">
          <img src={image} className="img-fluid mypic" />
        </div>
      </div>
    </>
  );
};
export default Welcome;
