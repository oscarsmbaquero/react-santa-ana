import React, { useEffect, useState } from "react";
import "./App.scss";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import { SWContextProvider } from "./context/context";
import { IntlProvider, FormattedMessage } from "react-intl";
import SplashScreen from "./core/SplashScreen/SplashScreen";
import Navbar from "./core/Components/Navbar/Navbar";
import Navbar3 from "./core/Components/Navbar/Navbar3";
import Header from "./core/Components/Header/Header";
import Footer from "./core/Components/Footer/Footer";
import routes from "./Config/routes";

import Spanish from "../src/lang/es.json";
import English from "../src/lang/en.json";
import Portuguese from "../src/lang/pt.json";
import EusKara from "../src/lang/eu.json";
import French from "../src/lang/fr.json";
import I18n from "./context/i18n/I18n";
import { Spa } from "@mui/icons-material";
import IconoGit from "../src/assets/images/git.png";

export const ContextI18n = React.createContext();

function App() {
  const [locale, setLocale] = useState(navigator.language);
  const [messages, setMessages] = useState(Spanish);
  const [splashScreen, setSplashScreen] = useState(true);

  useEffect(() => {
    setTimeout(() => setSplashScreen(false), 2000);
  });
  useEffect(() => {
    if (locale === "pt") {
      setMessages(Portuguese);
    } else if (locale === "en") {
      setMessages(English);
    } else if (locale === "eu") {
      setMessages(EusKara);
    } else if (locale === "fr") {
      setMessages(French);
    } else {
      setMessages(Spanish);
    }
  }, [locale]);

  function selectLanguage(newLocale) {
    setLocale(newLocale);
    if (newLocale === "pt") {
      setMessages(Portuguese);
    } else if (newLocale === "en") {
      setMessages(English);
    } else if (newLocale === "eu") {
      setMessages(EusKara);
    } else if (newLocale === "fr") {
      setMessages(French);
    } else {
      setMessages(Spanish);
    }
  }

  return (
    <>
      {splashScreen ? (
        <SplashScreen />
      ) : (
        <div className="App">
          <ContextI18n.Provider value={{ locale, selectLanguage }}>
            <IntlProvider locale={locale} messages={messages}>
              <Router>
                {/* <Header /> */}
                <Navbar3 />
                <div className="main">
                  <Routes>
                    {routes.map((route) => (
                      <Route
                        key={route.path}
                        path={route.path}
                        element={route.element}
                      />
                    ))}
                  </Routes>
                  
                </div>
                <div className="i18n">
                    <figure>
                      <I18n></I18n>
                    </figure>
                  </div>
                <Footer />
              </Router>
            </IntlProvider>
          </ContextI18n.Provider>
        </div>
      )}
    </>
  );
}

export default App;
