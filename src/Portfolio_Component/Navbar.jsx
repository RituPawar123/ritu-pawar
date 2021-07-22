import React from "react";
import { NavHashLink } from "react-router-hash-link";
const Navbar = () => {
  return (
    <>
      <div
        className="row sticky-top nav-shadow bg-darkgreen"
      >
        <nav className="navbar navbar-expand-lg navbar-dark ">
          <div className="container-fluid row ">
            <div className="col-12 col-md-12 col-xl-11 row mx-auto">
            <h1 className="navbar-brand col-2 me-auto">PORTFOLIO</h1>
            <button
              className="navbar-toggler col-2 ms-auto"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse col-4 ms-auto text-end"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto fw-bold mb-2 mb-lg-0 text-center text-md--end">
                <li className="px-4 my-2 nave-item ">
                  <NavHashLink
                    className="text-white "
                    to="#welcome"
                    activeClassName=""
                    style={{ textDecoration: "none" }}
                  >
                    WELCOME
                  </NavHashLink>
                </li>
                <li className="px-4 my-2 ">
                  <NavHashLink
                    className="text-white"
                    to="#about"
                    activeClassName="selected"
                    style={{ textDecoration: "none" }}
                  >
                    ABOUT
                  </NavHashLink>
                </li>
                <li className="px-4 my-2 ">
                  <NavHashLink
                    className="text-white"
                    to="#service"
                    activeClassName="selected"
                    style={{ textDecoration: "none" }}
                  >
                    MY SERVICE
                  </NavHashLink>
                </li>
                <li className="px-4 my-2 ">
                  <NavHashLink
                    className="text-white"
                    to="#project"
                    activeClassName="selected"
                    style={{ textDecoration: "none" }}
                  >
                    PROJECT
                  </NavHashLink>
                </li>
                <li className="px-4 my-2 ">
                  <NavHashLink
                    className="text-white"
                    to="#myskill"
                    activeClassName="selected"
                    style={{ textDecoration: "none" }}
                  >
                    MY SKILL
                  </NavHashLink>
                </li>
                <li className="px-4 my-2 ">
                  <NavHashLink
                    className="text-white"
                    to="#contact"
                    activeClassName="selected"
                    style={{ textDecoration: "none" }}
                  >
                    CONTACT
                  </NavHashLink>
                </li>
              </ul>
            </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};
export default Navbar;
