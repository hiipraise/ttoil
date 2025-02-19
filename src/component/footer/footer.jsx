import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import "./footer.css";
import TtoilLogo from "../../assets/icon/ttoilLogo";

const Footer = () => {
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-start text-muted">
      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                {/* <MDBIcon color="secondary" icon="gem" className="me-3" /> */}
                <TtoilLogo />
              </h6>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">SERVICES</h6>
              <p>
                <a href="#!" className="text-reset">
                  Crude Oil
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Refined Products
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Logistics
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Hedging
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">LOCATION</h6>
              <p>
                <MDBIcon color="secondary" icon="envelope" className="me-2" />
                P.O.Box:
              </p>
              <p>
                <MDBIcon color="secondary" icon="globe" className="me-3" />
                27430, Sharjah
              </p>
              <p>
                <MDBIcon
                  color="secondary"
                  icon="map-marker-alt"
                  className="me-3"
                />
                Media City, Sharjah
              </p>
              <p>
                <MDBIcon color="secondary" icon="globe-asia" className="me-3" />
                UAE
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">CONTACT</h6>
              <p>
                <MDBIcon color="secondary" icon="phone" className="me-3" /> + 01
                +971 50 470 96 70
              </p>
              <p>
                <MDBIcon
                  color="secondary"
                  icon="comment-alt"
                  className="me-3"
                />{" "}
                + 01 +971 426 02 108
              </p>
              <p>
                <MDBIcon color="secondary" icon="headset" className="me-3" /> +
                01 +971 426 02 109
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
      <hr />
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>&copy; TToil 2025 All right reserved ~ 30 </span>
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
