import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import { Button, Link, Typography } from "@mui/material";
import { FormattedMessage } from "react-intl";
import { NavLink } from "react-router-dom";

export default function App() {
  function Copyright(props) {
    return (
      <Typography variant="body2" align="center" {...props}>
        {"Copyright © "}
        <Link href="https://github.com/oscarsmbaquero">
          &nbsp;OIT&nbsp;
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  }

  return (
    <MDBFooter bgColor="dark" className="text-center text-lg-start">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span className="text-white">
            <FormattedMessage id="app.footer" />
          </span>
        </div>
        <div>
          <a href="" className="me-4 text-reset">
            <MDBIcon color="danger" fab icon="chrome"  size='2x'/>
          </a>
          <a href="" className="me-4 text-reset" >
            <MDBIcon color="primary" fab icon="facebook" size='2x' />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon color="danger" fab icon="instagram" size='2x'/>
          </a>
          <a
            href="https://wa.me/+34608722702"
            class="whatsapp_float"
            target="_blank"
            rel="noopener noreferrer"
            className="me-4 text-reset"
          >
            <MDBIcon color="success" fab icon="whatsapp" size='2x'/>
          </a>
        </div>
      </section>
      {/* <div className="me-5 text-center p-4 text-white" bgColor="light">
        <Copyright />
      </div> */}
      <MDBContainer className="text-center text-md-start mt-5">
        <MDBRow className="mt-3">
          <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
            <h3 className="fw-bold mb-4">
              <FormattedMessage id="app.reservas" />
            </h3>
            <NavLink as={Link} to={"/contact"}>
            <Button
              variant="contained"
              sx={{
                mt: 2,
                mb: 0,
                borderRadius: 8,
                color: "black",
              }}
            >
              <FormattedMessage id="app.reservar" />
            </Button>
            </NavLink>
          </MDBCol>
          <MDBCol md="4" lg="4" xl="2" className="mx-auto mb-4">
            <h3 className="fw-bold mb-4">
              <FormattedMessage id="app.horario" />
            </h3>
            <p>
              <FormattedMessage id="app.martes" />&nbsp;
              <FormattedMessage id="app.a" />&nbsp;
              <FormattedMessage id="app.sabado" />
            </p>
            <p>09:00-16:00 20:00-00:00</p>
            <p>
              <FormattedMessage id="app.domingo" />
            </p>
            <p>09:00-22:00</p>
          </MDBCol>

          <MDBCol md="4" lg="4" xl="2" className="mx-auto mb-md-0 mb-4">
            <h3 className="fw-bold mb-4">
              <FormattedMessage id="app.contact" />
            </h3>
            <p>
              {/* <MDBIcon icon="home" className="me-2" /> */}
              <i class="fa-sharp fa-solid fa-location-dot"></i>
              <a href="https://www.google.com/search?q=cafe%20bar%20santa%20ana&rlz=1C1VDKB_esES994ES994&oq=cafe+bar+santa+ana&aqs=chrome..69i57j0i22i30l5.8625j0j4&sourceid=chrome&ie=UTF-8&tbs=lf:1,lf_ui:9&tbm=lcl&sxsrf=ALiCzsZOr2yR6pCktag1QrQK0rZ5w2ZAdg:1671745891562&rflfq=1&num=10&rldimm=5796121961842873923&lqi=ChJjYWZlIGJhciBzYW50YSBhbmFI9deW68urgIAIWiIQABABEAIQAxgAGAIYAyISY2FmZSBiYXIgc2FudGEgYW5hkgEEY2FmZZoBJENoZERTVWhOTUc5blMwVkpRMEZuU1VRdGVtSkhPWHBSUlJBQqoBGhABKhYiEmNhZmUgYmFyIHNhbnRhIGFuYSgO&phdesc=WxjpiVTFgYU&ved=2ahUKEwiasJXgmo78AhUNgf0HHXmCDJIQvS56BAgKEAE&sa=X&rlst=f#rlfi=hd:;si:5796121961842873923,l,ChJjYWZlIGJhciBzYW50YSBhbmFI9deW68urgIAIWiIQABABEAIQAxgAGAIYAyISY2FmZSBiYXIgc2FudGEgYW5hkgEEY2FmZZoBJENoZERTVWhOTUc5blMwVkpRMEZuU1VRdGVtSkhPWHBSUlJBQqoBGhABKhYiEmNhZmUgYmFyIHNhbnRhIGFuYSgO,y,WxjpiVTFgYU;mv:[[41.9228537,-3.1675983],[36.2092155,-6.9923391]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!1m4!1u1!2m2!1m1!1e1!1m4!1u1!2m2!1m1!1e2!2m1!1e2!2m1!1e1!2m1!1e3!3sIAE,lf:1,lf_ui:9">
                &nbsp; Pl. Sta. Ana, 4
              </a>
            </p>
            <p>
              <MDBIcon icon="envelope" className="me-3" />
              <a href="mailto:favoritgastrobar@gmail.com">
                &nbsp;cafesantaana@gmail.com
              </a>
            </p>
            <p>
              <MDBIcon icon="phone" />&nbsp;
              <a href="tel:+34629990451">+34 629 990 451</a>
              {/* <br /> */}
              {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a href="tel:+34691487362">+ 34 618 932 661</a> */}
            </p>
            <p>
              <MDBIcon color="success" fab icon="whatsapp" />
              <a
                href="https://wa.me/+34629990451"
                class="whatsapp_float"
                target="_blank"
                rel="noopener noreferrer"
              >
                &nbsp;+34 629 990 451
              </a>
              {/* <a href="https://wa.me/+34618932661" class="whatsapp_float" target="_blank" rel="noopener noreferrer">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+ 34 618 932 661
              </a> */}
            </p>

            {/* <p>
             <i class="fa-brands fa-whatsapp"></i>
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             <a href="tel:+34618932661">+ 34 618 932 661</a>
                 <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a href="tel:+34691487362">+ 34 691 487 362</a>
             </p>  */}
            {/* <p>
                <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
              </p> */}
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(241, 241, 241, 241)" }}
      >
        © 2022 Copyright:
        <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
          &nbsp;App Developed by OSMB
        </a>
      </div>
    </MDBFooter>
  );
}
