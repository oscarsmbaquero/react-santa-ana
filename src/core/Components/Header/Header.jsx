import React, { useContext } from "react";
import logo from "../../../assets/images/logo.jpg";
import text from "../../../assets/images/logoText.png";
import "./Header.scss";
import { IntlProvider, FormattedMessage } from "react-intl";
import I18n from "../../../context/i18n/I18n";
import { Avatar } from "@mui/material";

const Header = () => {
  return (
    <div className="header">
      <div>
        {/* <img src={logo} className="header__logo" alt={logo} /> */}
        <Avatar className="header__logo"
            sx={{ width: 68, height: 68 }}
            src={logo}
            aria-label="recipe"
          ></Avatar>
      </div>
      <div className="header__name">
        <h1>Santa Ana Bar</h1>
        {/* <img src={text} className="header__text" alt={text} /> */}
        <p>
          c/Santa Ana&nbsp;-Plasencia
        </p>
      </div>
      <div className="header__i18n">
        <I18n />
      </div>
    </div>
  );
};

export default Header;
