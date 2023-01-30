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
                Software Specialist{" "}
              </h4>
              <h2 className="subtitle has-text-grey is-6 is-flex is-justify-content-center">
                eClinicalWorks{" "}
              </h2>

              <div className="content">
                <p className="content is-flex has-text-centered pb-4">
                  eClinicalWorks is a company that sells electronic medical
                  record (EMR), practice management and personal health record
                  software and services to healthcare providers.
                </p>
                <h6 className="subtitle is-6  has-text-grey is-flex is-justify-content-center ">
                  Skills
                </h6>
                <ul>
                  <li>MYSQL, MSSQL</li>
                  <li>Analytical and Problem Solving</li>
                  <li>Writing/documentation and communication skills.</li>
                  <li>Troubleshooting hardware and software.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="is-half is-flex is-justify-content-center ">
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
                Web Development
              </h4>
              <h2 className="subtitle has-text-grey is-6 is-flex is-justify-content-center">
                Necron Technologies
              </h2>

              <div className="content">
                <p className="content is-flex has-text-centered  pb-4">
                  The company specialized in providing professional website
                  design and development services. They also offer HR Services
                  which helps organization to hire temporary or full time IT
                  resources.
                </p>
                <h6 className="subtitle is-6  has-text-grey is-flex is-justify-content-center">
                  Skills
                </h6>
                <ul>
                  <li>HTML, CSS</li>
                  <li>JavaScript</li>
                  <li>React</li>
                  <li>Figma</li>
                </ul>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
