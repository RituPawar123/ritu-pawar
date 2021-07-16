import React from "react";
import image from "./Image.jpg";
import resume from "./RituPawar.pdf";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Navbar from "./Navbar";
const About = () => {
  return (
    <div className="row ">
      <div className="row py-5" id="about">
        <div className="col-10 row mx-auto my-5 ">
          <div className="row col-12 col-md-6 align-items-center  mx-auto">
            <h1 className="col-12 col-md-6 fw-bold">
              ABOUT<span style={{ color: "mediumseagreen" }}> ME</span>
            </h1>
            <div className=" text-left">
              <div>
                <p>
                  Hello, This is Ritu Pawar I am Web Devloper and ui-ux designer
                  .
                </p>
                <p>
                  I am Junior software engineer I have knowledge about frontend
                  (html, css, javascript) and backend(python, django) and Mysql
                  also in this site you can see all about my technical knowledge
                  or you can download my CV for further information from bellow
                  button.
                </p>
              </div>
              <button
                className="contact-form "
                // type="button"
                // className=" text-center"
                // style={{ backgroundColor: "#3cb371" }}
              >
                <a
                  href={resume}
                  download
                  className="text-white"
                  style={{
                    textDecoration: "none",
                    backgroundColor: "mediumseagreen",
                  }}
                >
                  DOWNLOAD CV
                </a>
              </button>
              <br />
              <div>
                <a href="https://www.facebook.com/ritu.pawar.58323">
                  <FacebookIcon
                    style={{ fontSize: "45px", color: "mediumseagreen" }}
                  />
                </a>
                <a href="https://www.instagram.com/ritu_021/">
                  <InstagramIcon
                    style={{ fontSize: "45px", color: "mediumseagreen" }}
                  />
                </a>
                <a href="https://www.linkedin.com/in/ritu-pawar-4286161a0/">
                  <LinkedInIcon
                    style={{ fontSize: "45px", color: "mediumseagreen" }}
                  />
                </a>
              </div>
            </div>
          </div>
          {/* <div className="col-12 col-md-6"> */}

          <div
            style={{ textAlign: "right" }}
            className="col-12 col-md-6 text-right"
          >
            <img src={image} className="img-fluid about-me " />
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
