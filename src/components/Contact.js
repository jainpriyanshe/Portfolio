import React from "react";

export default function Contact() {
  return (
    <section id="contact_section" className="section mt-6">
      <div className="heading is-flex is-flex-direction-column is-align-items-center pb-6">
        <h1 className="title is-4" style={{ marginTop: "30px" }}>
          Contact
        </h1>
        <h2 className="subtitle has-text-grey is-6 ">Get in touch</h2>
      </div>
      <div className="is-flex is-justify-content-center">
        <div
          className="box p-5"
          style={{
            width: "600px",
            background: "#f1dbf7",
            border: "1px solid #a09a9f",
            borderRadius: "20px",
          }}
        >
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                style={{
                  background: "#f1dbf7",
                  borderRadius: "20px",
                  border: "1px solid #a09a9f",
                }}
                className="input"
                type="text"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Email</label>
            <div className="control  has-icons-right">
              <input
                style={{
                  background: "#f1dbf7",
                  borderRadius: "20px",
                  border: "1px solid #a09a9f",
                }}
                className="input"
                type="email"
              />
              <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
              </span>
              <span className="icon is-small is-right">
                <i className="fas fa-exclamation-triangle"></i>
              </span>
            </div>
          </div>

          <div className="field">
            <label className="label">Message</label>
            <div className="control">
              <textarea
                style={{
                  background: "#f1dbf7",
                  borderRadius: "20px",
                  border: "1px solid #a09a9f",
                }}
                className="textarea"
              ></textarea>
            </div>
          </div>

          <div className="field is-grouped ">
            <div className="control">
              <button
                className="button"
                style={{ borderRadius: "10px", background: "#dbf7f1" }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
