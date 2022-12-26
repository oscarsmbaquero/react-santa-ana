import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";
import { IntlProvider, FormattedMessage } from "react-intl";
import "./Contact.scss";
import Aos from "aos";
import "aos/dist/aos.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Alert from "../../core/Alert/MuiAlert";
//import { Alert } from '@material-ui/lab';

// function Copyright(props) {
//   return (
//     <Typography
//       variant="body2"
//       color="text.primary"
//       align="center"
//       {...props}
//     >
//       {"Copyright © "}
//       <Link color="inherit" href="https://github.com/oscarsmbaquero">
//        OIT -Soluciones y Servicios Tecnológicos.
//       </Link>{" "}
//       {new Date().getFullYear()}
//       {"."}
//     </Typography>
//   );
// }
const theme = createTheme();

export default function SignUp() {
  let navigate = useNavigate();
  const [comensales, setComensales] = React.useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("");

  const handleChange = (event) => {
    if (event.target.value === 10) {
      setMessage(
        "Para reservas de mas de 10 comensales, consulte disponibilidad por teléfono. Gracias"
      );
      setSeverity('error');
      setShowAlert(true);
      navigate("/contact");
    } else {
      setComensales(event.target.value);
    }
  };
  console.log(message, "comensales");

  const sendMail = (e) => {
    e.preventDefault();
    try {
      // emailjs
      //   .sendForm(
      //     "service_kqpmbaa",
      //     "template_2c1n23x",
      //     e.target,
      //     "dso8n6rVU1ADlfbV4"
      //   )
      //   .then((response) => console.log(response));
      Swal.fire({
        title: "Success!",
        text: " Mensaje enviado. Gracias!!!!!",
        icon: "success",
        confirmButtonText: "Ok",
      });
      navigate("/");
    } catch (error) {
      navigate("/");
    }
  };

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="form" data-aos="fade-left">
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="md">
          <CssBaseline />
          <Box
            sx={{
              //marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box component="form" onSubmit={sendMail} noValidate sx={{ mt: 5 }}>
              <Typography>
                <p>
                  <FormattedMessage id="app.form" />
                </p>
              </Typography>
              <TextField
                margin="normal"
                required
                fullWidth
                name="mail"
                label=<FormattedMessage id="app.mail" />
                type="mail"
                id="mail"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="name"
                label=<FormattedMessage id="app.name" />
                type="text"
                id="name"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="question"
                label=<FormattedMessage id="app.tlf" />
                type="text"
                id="password"
              />
              <TextField
                id="outlined-multiline-flexible"
                margin="normal"
                label=<FormattedMessage id="app.comments" />
                type="text"
                rowsMax="4"
                multiline
                fullWidth
                required
                variant="outlined"
              />
              <TextField
                id="datetime-local"
                required
                label=<FormattedMessage id="app.fecha" />
                type="datetime-local"
                margin="normal"
                defaultValue="2022-05-24T10:30"
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <InputLabel id="demo-simple-select-label">
                <FormattedMessage id="app.comensales" />
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={comensales}
                required
                margin="normal"
                fullWidth
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={6}>6</MenuItem>
                <MenuItem value={7}>7</MenuItem>
                <MenuItem value={8}>8</MenuItem>
                <MenuItem value={9}>9</MenuItem>
                <MenuItem value={10}>+ 10</MenuItem>
              </Select>
              {showAlert && <Alert message={message} severity={severity}></Alert>}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 2,
                  mb: 0,
                  borderRadius: 8,
                  color: "white",
                }}
              >
                <FormattedMessage id="app.send" />
              </Button>
              {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
}
