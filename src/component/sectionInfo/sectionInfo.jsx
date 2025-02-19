import "./sectionInfo.css";

const SectionInfo = ({ section, info, paragraph }) => {
  return (
    <div className="section-component">
      <h4>{section}</h4>
      <div className="info-para">
        <p>{info}</p>
        <small>{paragraph}</small>
      </div>
    </div>
  );
};

export default SectionInfo;
