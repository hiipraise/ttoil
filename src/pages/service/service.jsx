import SectionInfo from "../../component/sectionInfo/sectionInfo";
import {
  MDBCarousel,
  MDBCarouselItem,
  MDBCarouselCaption,
} from "mdb-react-ui-kit";
import "./service.css";
import oilplant from "../../assets/img/oilplant.jpg";
import oilplant2 from "../../assets/img/oilplant2.jpg";
import oilplant3 from "../../assets/img/oilplant3.jpg";
import "./service.css";

const Service = () => {
  return (
    <div className="">
      <div>
        <MDBCarousel showControls showIndicators>
          <MDBCarouselItem itemId={1} className="carousel">
            <img
              src={oilplant}
              className="oilplantimg d-flex w-100 h-100"
              alt="..."
            />
            <MDBCarouselCaption>
              <a className="doings" href="#">
                WHAT CAN WE DO FOR YOU?
              </a>
              <h5>Logistics</h5>
              <p>
                managing pipelines, tankers, railways, and trucks to ensure safe
                and efficient delivery from extraction sites to refineries, and
                then to end-users or storage facilities. Key aspects include
                inventory management, regulatory compliance, risk mitigation,
                and cost optimization to meet market demands while minimizing
                environmental impact.
              </p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId={2} className="carousel">
            <img
              src={oilplant2}
              className="oilplantimg d-flex w-100 h-100"
              alt="..."
            />

            <MDBCarouselCaption>
              <a className="doings" href="#">
                WHAT CAN WE DO FOR YOU?
              </a>
              <h5>Crude Oil</h5>
              <p>
                Our Crude oil is a naturally occurring, unrefined petroleum
                composed of hydrocarbons and other organic materials. It is
                extracted from the earth and serves as a primary source for
                producing fuels, plastics, and various chemicals after refining.
              </p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId={3} className="carousel">
            <img
              src={oilplant3}
              className="oilplantimg d-flex w-100 h-100"
              alt="..."
            />
            <MDBCarouselCaption>
              <a className="doings" href="#">
                WHAT CAN WE DO FOR YOU?
              </a>
              <h5>Hedging</h5>
              <p>
                As a part of TTOIL’s commitment to our partners, the company
                offers a range of hedge services intended to mitigate the
                effects of the inherent commodity trading risks by maintaining a
                diversified portfolio of physical and paper instruments geared
                to protect the company’s and our client’s capital.
              </p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
        </MDBCarousel>
      </div>
      <SectionInfo
        section={"SERVICES"}
        info={"Our Services"}
        paragraph={
          "As a professional company, we are specialized to provide you the following services: Trading crude oil and refined petroleum products: Our team is ready support your company to realize your trading and commerce businesses in crude oil and refined petroleum products. Crude oil and refined petroleum products (such as gasoline, jet fuel and diesel) are some of the most widely used and traded commodities in the world. Thus, as TTOIL Trading and Commerce Agency we are involved in the exploration, extraction, refining and marketing and transporting of these commodities worldwide. As a professional company, we are specialized to support to realize your trading and commerce businesses in crude oil and refined petroleum products."
        }
      />
    </div>
  );
};

export default Service;
