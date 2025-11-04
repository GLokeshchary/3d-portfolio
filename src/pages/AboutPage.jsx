import React from "react";
import "./AboutPage.css";
import Coin from "../components/Coin/Coin";
import { TechStack } from "../constants/skills";
import { VerticalTimeline } from "react-vertical-timeline-component";
import { experiences } from "../constants/experiences";
import WorkExpCard from "../components/WorkExperience/WorkExpCard";
import Footer from "../components/Footer/Footer";
import SocialiconsComp from "../components/SocialIcons/SocialiconsComp";
const AboutPage = () => {
  const getExperienceDuration = (startDate) => {
    const start = new Date(startDate);
    const now = new Date();

    let years = now.getFullYear() - start.getFullYear();
    let months = now.getMonth() - start.getMonth();

    if (months < 0) {
      years--;
      months += 12;
    }

    return `${years} year${years !== 1 ? "s" : ""} ${months} month${
      months !== 1 ? "s" : ""
    }`;
  };

  const duration = getExperienceDuration("2022-06-01");
  return (
    <section className="about-container">
      <div className="name-display">
        <h1>Hello, </h1>
        <h1 className="name">I'm Lokesh Chary</h1>
      </div>
      <div className="description">
        Hi! I’m Lokesh Chary Gattoji, a full-stack web developer and software
        engineer with {duration} of experience in the software industry, based
        in Hyderabad, India. My journey in software engineering has been both
        exciting and transformative, and I've had the privilege of working with
        a variety of technologies. I specialize in building robust applications
        using Spring Boot, Java, and Microservices on the backend, while
        leveraging React for dynamic and responsive front-end development. I am
        also skilled in functional programming principles, which I apply to
        write clean, efficient, and maintainable code. My passion for technology
        and continuous learning drives me to explore new tools and methodologies
        to create innovative solutions. I am always eager to tackle new
        challenges and contribute to projects that make a difference.
      </div>
      <div className="my-skills">
        <h2>My Arsenals</h2>
        <div className="skills-display">
          {TechStack.map((skill, index) => (
            <Coin key={index} data={skill.name} imgUrl={skill.imagelink} />
          ))}
        </div>
      </div>
      <div className="work-exp">
        <div>
          <h2>My Adventures</h2>
        </div>
        <div className="work-exp-section">
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <WorkExpCard key={index} experience={experience} />
            ))}
          </VerticalTimeline>
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
      <div>
        <SocialiconsComp />
      </div>
    </section>
  );
};

export default AboutPage;
