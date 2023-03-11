import React, { useRef } from "react";

export default function Navbar() {
  const hamburgerIcon = useRef("");
  const navbarMenu = useRef("");

  const toggleNavbar = () => {
    hamburgerIcon.current.classList.toggle("is-active");
    navbarMenu.current.classList.toggle("is-active");
  };

  return (
    <nav
      className="navbar box p-3 is-transparent has-centered-menu is-fixed-top"
      style={{ background: "#f1dbf7" }}
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a className="pl-6" href="/">
          <img
            className="is-rounded"
            style={{ width: "60px", height: "60px", borderRadius: "50%" }}
            src="/portfolioLogo.png"
            alt="Gfg logo"
          />
        </a>
        <a
          role="button"
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          ref={hamburgerIcon}
          onClick={toggleNavbar}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div className="navbar-menu" ref={navbarMenu}>
        <div className="navbar-start is-justify-content-space-evenly is-flex-grow-1 has-text-centered">
          <a
            selected
            href="#"
            className="navbar-item nav-link"
            style={{ fontSize: "20px" }}
          >
            {" "}
            Home{" "}
          </a>
          <a
            href="#experience_section"
            className="navbar-item nav-link"
            style={{ fontSize: "20px" }}
          >
            {" "}
            Experience{" "}
          </a>
          <a
            href="#skills_section"
            className="navbar-item nav-link"
            style={{ fontSize: "20px" }}
          >
            {" "}
            Skills{" "}
          </a>
          <a
            href="#contact_section"
            className="navbar-item nav-link"
            style={{ fontSize: "20px" }}
          >
            {" "}
            Contact
          </a>
        </div>
        <div className="navbar-end is-align-items-center has-text-centered">
          <a href="/Priyanshi_Jain_Resume.pdf" download>
            <button className=" button is-light  "> Resume</button>
          </a>
        </div>

      </div>
    </nav>
  );
}
