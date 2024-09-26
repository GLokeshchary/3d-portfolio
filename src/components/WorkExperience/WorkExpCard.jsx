import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./WorkExpCard.css";
const WorkExpCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="icon-display">
          <img src={experience.icon} alt={experience.company_name} />
        </div>
      }
    >
      <div className="workexp-content">
        <h3 className="job-title">{experience.title}</h3>
        <p className="company-name" style={{ margin: 0, color: "#17Abda" }}>
          {experience.company_name}
        </p>
      </div>

      <ul className="list-style space-y">
        {experience.points.map((point, index) => (
          <li key={`experience-point-${index}`} className="">
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

export default WorkExpCard;
