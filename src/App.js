import React from "react";
import Navbar from "./Portfolio_Component/Navbar";
import Welcome from "./Portfolio_Component/Welcome";
import MySkills from "./Portfolio_Component/MySkills";
import Contact from "./Portfolio_Component/Contact";
import About from "./Portfolio_Component/About";
import MyService from "./Portfolio_Component/MyService";
import { BrowserRouter } from "react-router-dom";
import { Fab } from "@material-ui/core";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import { NavHashLink } from "react-router-hash-link";
import Myproject from "./Portfolio_Component/Myproject";

export default () => {
  return (
    <BrowserRouter>
      <div className="position-relative">
        <div className="container-fluid ">
          <Navbar />
          <Welcome />
          <About />
          <MyService />
          <Myproject />
          <MySkills />
          <Contact />
        </div>
        <div
          className="position-fixed"
          style={{ bottom: "20px", right: "50px" }}
        >
          <Fab
            variant="extended"
            size="medium"
            aria-label="add"
            className="rounded-circle bg-green"
             style={{height:"50px",width:"50px"}}
          >
            <NavHashLink
              className="text-white my-3"
              to="#welcome"
              activeClassName=""
              style={{ textDecoration: "none",}}
            >
              <ExpandLessIcon
              style={{fontSize:"40px" }}
              
              />
            </NavHashLink>
          </Fab>
        </div>
      </div>
    </BrowserRouter>
  );
};
