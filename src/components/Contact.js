import React, { useState } from "react";

export default function Contact() {
  const [formDetails, setFormDetails] = useState({
    Name: null,
    Email: null,
    Message: null,
  });
  const sendForm = (e) => {
    e.preventDefault();

    var xhr = new XMLHttpRequest();
    //Url of google sheets script.
    xhr.open(
      "POST",
      "https://script.google.com/macros/s/AKfycbwZ5G7ohDSfwRrBamSTL98zQM0rZbktrk6mtxYI1bDAsP7ym7YX8Xve88prdLAV352w-w/exec"
    );
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        alert("Your message has been submitted successfully.");
        e.target.reset();
        setFormDetails({ Name: null, Email: null, Message: null });
      }
    };
    xhr.onerror = (err) => {
      console.log("err", err);
    };
    var encoded = Object.keys(formDetails)
      .map(function (k) {
        return encodeURIComponent(k) + "=" + encodeURIComponent(formDetails[k]);
      })
      .join("&");
    xhr.send(encoded);
  };
  return (
    <section id="contact_section" className="section mt-6">
      <div className="heading is-flex is-flex-direction-column is-align-items-center pb-6">
        <h1 className="title is-4" style={{ marginTop: "30px" }}>
          Contact
        </h1>
        <h2 className="subtitle has-text-grey is-6 ">Get in touch</h2>
      </div>
      <div className="is-flex is-justify-content-center">
        <form
          onSubmit={sendForm}
          className="box p-5"
          style={{
            width: "600px",
            background: "#f1dbf7",
            border: "1px solid #a09a9f",
            borderRadius: "20px",
          }}
        >
          <div className="field">
            <label className="label" htmlFor="Name">
              Name
            </label>
            <div className="control">
              <input
                id="Name"
                style={{
                  background: "#f1dbf7",
                  borderRadius: "20px",
                  border: "1px solid #a09a9f",
                }}
                onChange={(event) =>
                  setFormDetails({
                    ...formDetails,
                    Name: event.target.value,
                  })
                }
                className="input"
                type="text"
              />
            </div>
          </div>

          <div className="field">
            <label className="label" htmlFor="Email">Email</label>
            <div className="control  has-icons-right">
              <input
              id="Email"
                style={{
                  background: "#f1dbf7",
                  borderRadius: "20px",
                  border: "1px solid #a09a9f",
                }}  onChange={(event) =>
                  setFormDetails({
                    ...formDetails,
                    Email: event.target.value,
                  })
                }
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
            <label className="label" htmlFor="Message">Message</label>
            <div className="control">
              <textarea id="Message"
                style={{
                  background: "#f1dbf7",
                  borderRadius: "20px",
                  border: "1px solid #a09a9f",
                }}  onChange={(event) =>
                  setFormDetails({
                    ...formDetails,
                    Message: event.target.value,
                  })
                }
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
        </form>
      </div>
    </section>
  );
}
