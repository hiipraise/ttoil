import React from "react";
import SectionInfo from "../../component/sectionInfo/sectionInfo";
import "./about.css";

const About = () => {
  return (
    <div>
      <SectionInfo
        section={"ABOUT OUR COMPANY"}
        info={
          "With access to major suppliers and manufacturers around the globe."
        }
        paragraph={
          "TTOIL Trading and Commerce Agency trades several of crude oil and refined petroleum products in global energy market."
        }
      />
    </div>
  );
};

export default About;
