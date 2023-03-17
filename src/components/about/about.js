import React from "react";
import kt from "../../assets/kt.jpeg";
import "./about.css";

const About = () => {
  return (
    <div>
      <h1 className="about-title"> About </h1>
      <img className="pic-resize" src={kt} />
      <div className="about-text">
        <p>
          Daniel Gyaakye Amoateng is a current sophomore at Dartmouth College.
          He is majoring in Computer Engineering, an interdisciplinary dual
          B.A./B.E. Masters program that explores the intersectionality of
          Computer Science and the hardware machinery aspect of engineering. He
          is currently a SDE intern at Amazon. In addition to academia, Daniel
          explores the musical mechanisms of jazz on campus where he in
          Dartmouth COAST, he is a lead electric bass guitarist as well as a
          piano substitute.
        </p>
      </div>
    </div>
  );
};

export default About;
