import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import { Link, Typography } from "@mui/material";
import { IntlProvider, FormattedMessage } from "react-intl";

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
            <MDBIcon color="danger" fab icon="chrome" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon color="primary" fab icon="linkedin" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon color="light" fab icon="github" />
          </a>
          <a href="https://wa.me/+34608722702" class="whatsapp_float" target="_blank" rel="noopener noreferrer" className="me-4 text-reset">
            <MDBIcon color="success" fab icon="whatsapp" />
          </a>
        </div>
      </section>
      {/* <div className="me-5 text-center p-4 text-white" bgColor="light">
        <Copyright />
      </div> */}
    </MDBFooter>
  );
}
