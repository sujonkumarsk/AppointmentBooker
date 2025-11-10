import React from "react";
import image from "../images/aboutimg.jpg";

const AboutUs = () => {
  return (
    <>
      <section className="container">
        <h2 className="page-heading about-heading">About Us</h2>
        <div className="about">
          <div className="hero-img">
            <img
              src={image}
              alt="hero"
            />
          </div>
          <div className="hero-content">
            <p>
              Some people endure pain and difficulties,
               facing challenges and obstacles, yet they seek solutions and relief.
                Others experience hardships, but remain determined. At times,
                 people must deal with responsibilities and challenges,
                  yet they continue forward with patience and care.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
