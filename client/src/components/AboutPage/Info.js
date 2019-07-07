import React from "react";
import "./info.css";
import Title from "../Title";
import aboutBcg from "../../images/aboutBcg.jpeg";
export default function Info() {
  return (
    <section className="info">
      <div className="container py-5">
        <div className="row">
          <div className="col-10 mx-auto col-md-6 my-3">
            <img
              src={aboutBcg}
              className="img-fluid img-thumbnail"
              alt="about company"
              style={{ background: "var(--darkGrey)" }}
            />
          </div>
          <div className="col-10 mx-auto col-md-6 my-3">
            <Title title="about us" />
            <p className="text-lead my-3">
              Enactus is a global community of young academic, students and business leaders 
              that use entrepreneurshipto solve real world problems.
            </p>
            <p className="text-lead my-3">
              Our Mission is to Engage this generation of entrepreneurial leaders to innovate, create and impact.
            </p>
            <p className="text-lead my-3">
              Project Kitabat by Enactus NSUT is an initiative to bring us closer to the beautiful world of Old Delhi’s 
              Urdu and Arabic Calligraphy. It is an effort in not just reviving Calligraphy as an artform, 
              but also making it relevant for today.
            </p>
            <button
              className="main-link"
              type="button"
              style={{ marginTop: "2rem" }}
            >
            <a href="http://enactusnsut.org/projects/kitabat/index.html" target="_blank" className="link">
              more info
            </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
