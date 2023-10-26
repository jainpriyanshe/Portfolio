import React from "react";
import { BsHeadphones } from "react-icons/bs";
import { BsCodeSlash } from "react-icons/bs";
export default function Experience() {
  return (
    <section id="experience_section" className="section mt-6">
      <div className="heading is-flex is-flex-direction-column is-align-items-center">
        <h1 className="title is-4 " style={{ marginTop: "30px" }}>
          Experience
        </h1>
        <h2 className="subtitle has-text-grey is-6 ">My journey</h2>
      </div>

      <div className="is-flex is-justify-content-space-evenly is-flex-wrap-wrap mt-6 ">
        <div className="is-half is-flex is-justify-content-center  ">
          {" "}
          <div
            className="card flex-row flex-wrap mt-4"
            style={{
              borderRadius: "20px",
              boxshadow: "0 2.4rem 4.8rem rgba(0, 0, 0, 0.507)",
              transition: "all 0.3s",

              background:
                "#f1dbf7",
              // boxShadow: "1px 1px 2px black",
              maxWidth: "400px",
              // height: "450px",
            }}
          >
            <div className="card-content border-0 ">
              <div
                className="is-flex is-justify-content-center"
                style={{ fontSize: "20px" }}
              >
                <BsHeadphones />
              </div>
              <h4 className="title is-5 is-flex is-justify-content-center ">
                Web Developer{" "}
              </h4>
              <h2 className="subtitle has-text-grey is-6 is-flex is-justify-content-center">
                Necron Technologies{" "}
              </h2>

              <div className="content">
                <p className="content is-flex has-text-centered pb-4">
                  Necron Technologies is a company that provides multiple services, they mainly focus on web development, mobile app development and recuirtment service for there client.
                  
          
                </p>
                <h6 className="subtitle is-6  has-text-grey is-flex is-justify-content-center ">
                  Skills
                </h6>
                <ul>
                  <li>React Js</li>
                  <li>HTML/CSS</li>
                  <li>JavaScript</li>
                  <li>Figma</li>
                <li>Git</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="is-half is-flex is-justify-content-center ">
          {" "}
          <div
            className="card flex-row flex-wrap mt-4"
            style={{
              borderRadius: "20px",
              // boxShadow: "1px 1px 2px black",
              maxWidth: "400px",
              boxshadow: "0 2.4rem 4.8rem rgba(0, 0, 0, 0.507)",
              background:
                "#f1dbf7",
              // height: "450px",
            }}
          >
            <div className="card-content border-0">
              <div
                className="is-flex is-justify-content-center"
                style={{ fontSize: "20px" }}
              >
                <BsCodeSlash />
              </div>
              <h4 className="title is-5 is-flex is-justify-content-center ">
              Associate Software Developer 
              </h4>
              <h2 className="subtitle has-text-grey is-6 is-flex is-justify-content-center">
                Cloudfumes Technology Software                                                                                                   
              </h2>

              <div className="content">
                <p className="content is-flex has-text-centered  pb-4">
               Cloudfumes Technology Software provides custom application development solutions for large established enterprise companies to a small startup organizations.
                </p>
                <h6 className="subtitle is-6  has-text-grey is-flex is-justify-content-center">
                  Skills
                </h6>
                <ul>
                  <li>HTML, CSS</li>
                  <li>JavaScript</li>
                  <li>Vue Js</li>
                  <li>Figma</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
