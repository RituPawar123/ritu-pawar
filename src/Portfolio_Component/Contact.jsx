import React from "react";
import CallIcon from "@material-ui/icons/Call";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const Contact = () => {
  return (
    <>
      <div className="row pt-5 " id="contact">
        <div className="col-12 col-md-10 mx-auto  row ">
          <div className="row col-12 col-md-6">
            <p>
              <h3
                className=" text-left mb-3 fw-bold "
                style={{ color: " mediumseagreen" }}
              >
                Contact Me
              </h3>
              <div> You can contact me or text me for any help and query.</div>

              {/* <div style={{ fontSize: "15px" }}> */}
              <p />
              <div>
                <a
                  href="tel:9340658641"
                  className="text-decoration-none cursor-pointer"
                >
                  <CallIcon className="m-2" />
                  <span>9340658641</span>
                </a>
              </div>

              <div>
                <MailOutlineIcon className="m-2" />
                <span>pawarritu1998@gmail.com</span>
              </div>
              <div>
                <LocationOnIcon className="m-2" />
                <span> 25, ram apartment khatiwala tank Indore</span>
              </div>
              {/* </div> */}
            </p>
          </div>
          <form className="col-12 col-md-6  border bg-white py-4 shadow ">
            {/* <div className=" row mx-auto col-12  "> */}
            <div className=" row mx-auto ">
              <div className="text-white mx-auto  ">
                <div className=" mx-auto py-5 ">
                  <div className="mb-3  ">
                    <input
                      type="email"
                      placeholder="Enter Name"
                      className="form-control "
                      id="Email"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="email"
                      placeholder="Enter Email"
                      className="form-control "
                      id="Password"
                    />
                  </div>
                  <div>
                    <textarea
                      rows={5}
                      style={{ width: "100%" }}
                      type="text"
                      name="description"
                      placeholder="write text here..."
                    ></textarea>
                  </div>
                  <div className="text-center my-2">
                    <button type="submit" className="btn btn-success px-4 ">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* </div> */}
          </form>
        </div>
        <div className="col-12 footer-link mt-5 py-3 text-center">
          <a href="https://www.instagram.com/ritu_021/">
            <InstagramIcon
              className="mx-2"
              style={{ fontSize: "30px", color: "white" }}
            />
          </a>
          <a href="https://www.facebook.com/ritu.pawar.58323">
            <FacebookIcon
              className="mx-2"
              style={{ fontSize: "30px", color: "white" }}
            />
          </a>
          <a href="https://www.linkedin.com/in/ritu-pawar-4286161a0/">
            <LinkedInIcon
              className="mx-2"
              style={{ fontSize: "30px", color: "white" }}
            />
          </a>
          <MailOutlineIcon
            className="mx-2"
            style={{ fontSize: "30px", color: "white" }}
          />
        </div>
      </div>
    </>
  );
};
export default Contact;
