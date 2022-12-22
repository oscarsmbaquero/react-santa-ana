import { Avatar, IconButton } from "@mui/material";
import React, { useContext } from "react";
import { ContextI18n } from "../../App";
import "./I18n.scss";
import spain from "../../assets/banderas/spain.png";
import english from "../../assets/banderas/english.jpg";
import portuguese from "../../assets/banderas/portugal.jpg";
import ikurriña from "../../assets/banderas/ikurriña.jpg";
import french from "../../assets/banderas/french.png";
//import { makeStyles } from "@material-ui/core/styles";



const I18n = () => {
  const { locale, selectLanguage } = useContext(ContextI18n);

  return (
    <div class="i18n">
      {locale === "es-ES" ? (
        ""
      ) : (
        <IconButton onClick={() => selectLanguage("es-ES")}>
          <Avatar
            sx={{ width: 24, height: 24 }}
            src={spain}
            //  sx={{ bgcolor: red[500] }}
            aria-label="recipe"
          ></Avatar>
        </IconButton>
      )}
      {locale === "en" ? (
        ""
      ) : (
        <IconButton onClick={() => selectLanguage("en")}>
          <Avatar
            sx={{ width: 24, height: 24 }}
            src={english}
            //  sx={{ bgcolor: red[500] }}
            aria-label="recipe"
          ></Avatar>
        </IconButton>
      )}
      {/* {locale === "pt" ? (
        ""
      ) : (
        <IconButton onClick={() => selectLanguage("pt")}>
          <Avatar
            sx={{ width: 24, height: 24 }}
            src={portuguese}
            //  sx={{ bgcolor: red[500] }}
            aria-label="recipe"
          ></Avatar>
        </IconButton>
      )}
      {locale === "eu" ? (
        ""
      ) : (
        <IconButton onClick={() => selectLanguage("eu")}>
          <Avatar
            sx={{ width: 24, height: 24 }}
            src={ikurriña}
            //  sx={{ bgcolor: red[500] }}
            aria-label="recipe"
          ></Avatar>
        </IconButton>
      )} */}
      {locale === "fr" ? (
        ""
      ) : (
        <IconButton onClick={() => selectLanguage("fr")}>
          <Avatar
            sx={{ width: 24, height: 24, border: '0.2px solid lightgray'}}
            src={french}
            //  sx={{ bgcolor: red[500] }}
            aria-label="recipe"
          ></Avatar>
        </IconButton>
      )}
    </div>
  );
};

export default I18n;
