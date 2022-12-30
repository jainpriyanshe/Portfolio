import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
export default function Footer() {
  const yearNow = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="is-flex is-flex-direction-column	">
        <div
          className="content has-text-centered is-flex is-justify-content-center "
          style={{gap:"3rem"}}
        >
          <a
            className=" is-8"
            href="https://www.linkedin.com/in/priyanshijain18/"
            style={{ fontSize: "30px", color: "#353536" }}
            target="_blank"
          >
            <BsLinkedin />
          </a>
          <a
            className="is-8"
            href="https://github.com/jainpriyanshe"
            style={{ fontSize: "30px", color: "#353536" }}
            target="_blank"
          >
            <BsGithub />
          </a>
          <a
            className="is-8"
            href="mailto:jainpriya9595@gmail.com"
            style={{ fontSize: "30px", color: "#353536" }}
            
          >
            <SiGmail />
          </a>
          <a
            className="is-8"
            href="https://www.instagram.com/jainpriya9595/"
            style={{ fontSize: "30px", color: "#353536" }}
            target="_blank"
          >
            <AiFillInstagram />
          </a>{" "}
        </div>
        <div className="copyright  is-flex is-justify-content-center">
          &copy;{yearNow} Priyanshi Jain
        </div>
      </div>
    </footer>
  );
}
