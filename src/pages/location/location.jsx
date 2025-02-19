import SectionInfo from "../../component/sectionInfo/sectionInfo";
import "./location.css";
import globeimg from "../../assets/img/globe.png"

const Location = () => {
  return (
    <div>
      <SectionInfo
        section={"Location"}
        info={"Countries in which we operate"}
        paragraph={
          "We operate on almost all continents. We have offices in Azerbaijan, Turkey, Georgia, Ukraine, Russia, UAE, Kazakhstan, Turkmenistan and other countries."
        }
      />
      <div >
        <img className="globeimg" src={globeimg} alt="" />
      </div>
    </div>
  );
};

export default Location;
