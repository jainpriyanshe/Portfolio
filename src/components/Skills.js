import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiOutlineHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { FaReact } from "react-icons/fa";
import { SiBulma } from "react-icons/si";
import { FaFigma } from "react-icons/fa";

export default function Skills() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section id="skills_section" className="section mt-6">
      <div className="heading is-flex is-flex-direction-column is-align-items-center mb-6">
        <h1 className="title is-4 " style={{ marginTop: "30px" }}>
          Skills
        </h1>
        <h2 className="subtitle has-text-grey is-6 ">My Technical Skills</h2>
      </div>
      {/* Carousel */}
      <Slider {...settings}>
        <div className="is-flex is-justify-content-center">
          <AiOutlineHtml5
            style={{
              fontSize: "100px",
              color: "#e34c26",
              background: "#dbf7f1",
            }}
          />
        </div>
        <div className=" is-flex is-justify-content-center">
          <DiCss3
            style={{
              fontSize: "100px",
              color: "#1976d2",
              background: "#dbf7f1",
            }}
          />
        </div>
        <div className="is-flex is-justify-content-center">
          <SiJavascript
            style={{
              fontSize: "100px",
              color: "#f0db4f",
              background: "#dbf7f1",
            }}
          />
        </div>
        <div className=" is-flex is-justify-content-center">
          <FaReact
            style={{
              fontSize: "100px",
              color: "#78cff5",
              background: "#dbf7f1",
            }}
          />
        </div>

        <div className="is-flex is-justify-content-center">
          <SiBulma
            style={{
              fontSize: "100px",
              color: "#3dc5ac",
              background: "#dbf7f1",
            }}
          />
        </div>
        <div className=" is-flex is-justify-content-center">
          <FaFigma
            style={{
              fontSize: "100px",
              color: "#f95c1c",
              background: "#dbf7f1",
            }}
          />
        </div>
        <div className=" is-flex is-justify-content-center">
          <GrMysql
            style={{
              fontSize: "100px",
              color: "#00758F",
              background: "#dbf7f1",
            }}
          />
        </div>
      </Slider>
    </section>
  );
}
