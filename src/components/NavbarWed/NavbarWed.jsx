import React, { useState } from "react";

import "./NavbarWed.css";

const NavbarWed = () => {
  const [menu, setMenu] = useState("");

  return (
    <div className="">
      <nav className="navbar navbar-expand mx-auto fixed-bottom mb-5 pb-5">
        <div className="container my-navbar ">
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end w-75"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              {/* <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                Wedding
              </h5> */}
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>

            <div className=" my-nav offcanvas-body mx-auto  ">
              <div class=" my-navbar-nav navbar-nav bg-light rounded-2 ">
                <a
                  onClick={() => setMenu("home")}
                  className={`nav-link d-flex flex-column align-item-center  fs-6 ${
                    menu === "home" ? "active" : ""
                  }`}
                  aria-current="page"
                  href="#home"
                >
                  <span className="text-center fs-5">
                    <i class="bi bi-house-heart-fill"></i>
                  </span>

                  <p>Home</p>
                </a>
                <a
                  onClick={() => setMenu("info")}
                  className={`nav-link d-flex flex-column align-item-center fs-6 ${
                    menu === "info" ? "active" : ""
                  }`}
                  // class="nav-link d-flex flex-column align-item-center fs-6 "
                  href="#info"
                >
                  <span className="text-center fs-5">
                    <i class="bi bi-info-circle"></i>
                  </span>

                  <p>Info</p>
                </a>
                <a
                  onClick={() => setMenu("history")}
                  className={`nav-link d-flex flex-column align-item-center fs-6 ${
                    menu === "history" ? "active" : ""
                  }`}
                  // class="nav-link d-flex flex-column align-item-center fs-6 "
                  href="#history"
                >
                  <span className="text-center fs-5">
                    <i class="bi bi-hourglass"></i>
                  </span>

                  <p>Story</p>
                </a>
                <a
                  onClick={() => setMenu("gallery")}
                  className={`nav-link d-flex flex-column align-item-center fs-6 ${
                    menu === "gallery" ? "active" : ""
                  }`}
                  // class="nav-link d-flex flex-column align-item-center fs-6 "
                  href="#gallery"
                >
                  <span className="text-center fs-5">
                    <i class="bi bi-images"></i>
                  </span>

                  <p>Gallery</p>
                </a>
                <a
                  onClick={() => setMenu("RSVP")}
                  className={`nav-link d-flex flex-column align-item-center fs-6 ${
                    menu === "RSVP" ? "active" : ""
                  }`}
                  // class="nav-link d-flex flex-column align-item-center fs-6 "
                  href="#rsvp"
                >
                  <span className="text-center fs-5">
                    <i class="bi bi-card-checklist"></i>
                  </span>

                  <p>RSVP</p>
                </a>
                <a
                  onClick={() => setMenu("Gifts")}
                  className={`nav-link d-flex flex-column align-item-center fs-6 ${
                    menu === "Gifts" ? "active" : ""
                  }`}
                  class="nav-link d-flex flex-column align-item-center fs-6 "
                  href="#gifts"
                >
                  <span className="text-center fs-5">
                    <i class="bi bi-gift-fill"></i>
                  </span>

                  <p>Gifts</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavbarWed;
