import { useTranslation } from 'react-i18next';
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

const Service = () => {
  const { t } = useTranslation();

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
                {t('WHAT_CAN_WE_DO_FOR_YOU')}
              </a>
              <h5>{t('LOGISTICS')}</h5>
              <p>
                {t('LOGISTICS_DESCRIPTION')}
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
                {t('WHAT_CAN_WE_DO_FOR_YOU')}
              </a>
              <h5>{t('CRUDE_OIL')}</h5>
              <p>
                {t('CRUDE_OIL_DESCRIPTION')}
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
                {t('WHAT_CAN_WE_DO_FOR_YOU')}
              </a>
              <h5>{t('HEDGING')}</h5>
              <p>
                {t('HEDGING_DESCRIPTION')}
              </p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
        </MDBCarousel>
      </div>
      <SectionInfo
        section={t('SERVICES')}
        info={t('OUR_SERVICES')}
        paragraph={t('SERVICES_DESCRIPTION')}
      />
    </div>
  );
};

export default Service;