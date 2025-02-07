import React from "react";
import "./sectionInfo.css";

const SectionInfo = ({ section, info, paragraph }) => {
  return (
    <div className="section-component">
      <h4>{section}</h4>
      <div>
        <p>{info}</p>
        <small>{paragraph}</small>
      </div>
    </div>
  );
};

export default SectionInfo;
