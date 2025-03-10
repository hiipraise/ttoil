import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import { useTranslation } from 'react-i18next';
import "./footer.css";
import TtoilLogo from "../../assets/icon/ttoilLogo";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <MDBFooter bgColor="light" className="text-center text-lg-start text-muted">
      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <TtoilLogo />
              </h6>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">{t('SERVICES')}</h6>
              <p>
                <a href="#!" className="text-reset">
                  {t('CRUDE_OIL')}
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  {t('REFINED_PRODUCTS')}
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  {t('LOGISTICS')}
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  {t('HEDGING')}
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">{t('LOCATION')}</h6>
              <p>
                <MDBIcon color="secondary" icon="envelope" className="me-2" />
                {t('PO_BOX')}
              </p>
              <p>
                <MDBIcon color="secondary" icon="globe" className="me-3" />
                {t('ADDRESS')}
              </p>
              <p>
                <MDBIcon
                  color="secondary"
                  icon="map-marker-alt"
                  className="me-3"
                />
                {t('MEDIA_CITY')}
              </p>
              <p>
                <MDBIcon color="secondary" icon="globe-asia" className="me-3" />
                {t('UAE')}
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">{t('CONTACT')}</h6>
              <p>
                <MDBIcon color="secondary" icon="phone" className="me-3" /> +971 50 470 96 70
              </p>
              <p>
                <MDBIcon
                  color="secondary"
                  icon="comment-alt"
                  className="me-3"
                />{" "}
                +971 426 02 108
              </p>
              <p>
                <MDBIcon color="secondary" icon="headset" className="me-3" /> +971 426 02 109
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
      <hr />
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>&copy; TToil 2025 {t('ALL_RIGHTS_RESERVED')}</span>
        </div>

        <div>
          <a href="" className="me-4 text-reset">
            <MDBIcon color="secondary" fab icon="facebook-f" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon color="secondary" fab icon="twitter" />
          </a>

          <a href="" className="me-4 text-reset">
            <MDBIcon color="secondary" fab icon="instagram" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon color="secondary" fab icon="linkedin" />
          </a>

          <a href="" className="me-4 text-reset">
            <MDBIcon color="secondary" fab icon="youtube" />
          </a>
        </div>
      </section>
    </MDBFooter>
  );
};

export default Footer;