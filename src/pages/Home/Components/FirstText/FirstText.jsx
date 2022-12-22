import React from "react";
import "./FirstText.scss";
import { IntlProvider, FormattedMessage } from "react-intl";
// import logo from "../../../../assets/images/logo.jpg";
// import Avatar from "@mui/material/Avatar";

const FirstText = () => {
  return (
    <div>
      <div class="star-wars-intro">
        <h2 class="main-logo"></h2>
        {/* <p class="intro-text"></p> */}
        <div class="main-content">
          <div class="title-content">
            {/* <h1 class="content-body"> */}
            <FormattedMessage id="app.text"/>
            {/* </h1> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstText;
