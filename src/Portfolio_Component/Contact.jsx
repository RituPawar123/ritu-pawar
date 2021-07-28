import React, { useState } from "react";
import CallIcon from "@material-ui/icons/Call";
import MailIcon from "@material-ui/icons/Mail";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import axios from "axios";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const Contact = () => {
  const [open, setOpen] = React.useState(false);
  const [severity, setSeverity] = React.useState("success");
  const [message, setMessage] = React.useState("success");
  // const emailUrl = "https://ritu-portfolio.herokuapp.com/api/sendMail/";
  const emailUrl = "http://localhost:5000/api/sendMail/";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    setOpen(false);
  };
  const handelSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = await axios.post(emailUrl, { name, email, description });
      setSeverity("success");
      setMessage("Thanks for connecting 🙂 !");
      handleClick();
    } catch (err) {
      setSeverity("error");
      setMessage("Oops somthing is wrong ☹️ !");
      handleClick();
      console.log(err);
    }
  };

  return (
    <>
      <div className="row pt-5 " id="contact">
        <div className="col-12 col-md-10 mx-auto  row ">
          <div className="row col-12 col-md-6">
            <p>
              <h3 className=" text-left mb-3 fw-bold text-green text-uppercase">
                <span className="text-dark">Contact </span>Me
              </h3>
              <div> You can contact me or text me for any help and query.</div>

              {/* <div style={{ fontSize: "15px" }}> */}
              <p />
              <div>
                <a
                  href="tel:9340658641"
                  className="text-decoration-none cursor-pointer"
                >
                  <CallIcon className="m-2 text-green" />
                  <span className="text-dark">9340658641</span>
                </a>
              </div>

              <div>
                <a
                  href="mailto:ritupawar896495@gmail.com.com"
                  className="text-decoration-none cursor-pointer"
                >
                  <MailIcon className="m-2 text-green" />
                  <span className="text-dark">pawarritu1998@gmail.com</span>
                </a>
              </div>
              <div>
                <LocationOnIcon className="m-2 text-green" />
                <span className="text-dark">
                  {" "}
                  25, ram apartment khatiwala tank Indore
                </span>
              </div>
              {/* </div> */}
            </p>
          </div>
          <form
            className="col-12 col-md-6  border bg-white py-4 shadow "
            onSubmit={handelSubmit}
          >
            {/* <div className=" row mx-auto col-12  "> */}
            <div className=" row mx-auto ">
              <div className="text-white mx-auto  ">
                <div className=" mx-auto py-5 ">
                  <div className="mb-3  ">
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                      placeholder="Enter Name"
                      className="form-control "
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
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
                      value={description}
                      onChange={(e) => {
                        setDescription(e.target.value);
                      }}
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
              className="mx-2 text-green"
              style={{ fontSize: "30px", color: "white" }}
            />
          </a>
          <a href="https://www.facebook.com/ritu.pawar.58323">
            <FacebookIcon
              className="mx-2 text-green"
              style={{ fontSize: "30px", color: "white" }}
            />
          </a>
          <a href="https://www.linkedin.com/in/ritu-pawar-4286161a0/">
            <LinkedInIcon
              className="mx-2
               text-green"
              style={{ fontSize: "30px", color: "white" }}
            />
          </a>
          <a href="mailto:pawarritu1998@gmail.com">
            <MailIcon
              className="mx-2 text-green"
              style={{ fontSize: "30px", color: "white" }}
            />
          </a>
        </div>
      </div>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={open}
        onClose={handleClose}
        key={"bottomcenter"}
        autoHideDuration={1500}
      >
        <Alert onClose={handleClose} severity={severity}>
          {message}
        </Alert>
      </Snackbar>
    </>
  );
};
export default Contact;
