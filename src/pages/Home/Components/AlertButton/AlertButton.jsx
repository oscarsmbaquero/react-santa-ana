import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { IntlProvider, FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import "./AlertButton.scss";

export default function Alert() {
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      setIsShown(true);
    }, 2000);

    return () => {
      // 👇️ clear timeout when component unmounts
      clearTimeout(timeoutID);
    };
  }, []);

  return (
    <div>
      {isShown ? (
        <div className="message">
          <Link as={Link} to={"/projects"}>
            <Button
              variant="outlined"
              color="primary"
              type="submit"
              style={{
                width:100,
                height:40,
                // padding:10,
                borderRadius: 50,
                //borderColor:'rgba(38, 192, 189, 0.97)',
                backgroundColor: "white",
                color: "black",
                marginRight: "5px",
                text: "bold",
                fontFamily: "Caveat",
               
              }}
            >
              <p>
                <FormattedMessage id="app.projects" />
              </p>
            </Button>
          </Link>
          <Link as={Link} to={"/cv"}>
          <Button
              variant="outlined"
              color="primary"
              type="submit"
              style={{
                width:100,
                height:40,
                borderRadius: 50,
                backgroundColor: "white",
                color: "black",
                marginRight: "5px",
                text: "bold",
                fontFamily: "Caveat",
               
              }}
            >
              <p>
                CV
              </p>
            </Button>
          </Link>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
