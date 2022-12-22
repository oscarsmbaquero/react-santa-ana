import  React,{useEffect} from "react";
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
import emailjs from '@emailjs/browser';
import { IntlProvider, FormattedMessage } from "react-intl";
import "./Contact.scss";
import Aos from "aos";
import "aos/dist/aos.css";




function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.primary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://github.com/oscarsmbaquero">
       OIT -Soluciones y Servicios Tecnológicos.
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
const theme = createTheme();

export default function SignUp() {
  let navigate = useNavigate();

  const sendMail = (e) => {
    e.preventDefault();
    try {
      emailjs
        .sendForm(
          "service_kqpmbaa",
          "template_2c1n23x",
          e.target,
          "dso8n6rVU1ADlfbV4"
        )
        .then((response) => console.log(response));
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
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            //marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            component="form"
            onSubmit={sendMail}
            noValidate
            sx={{ mt: 5 }}
          >
         <Typography>
          <p><FormattedMessage id="app.form"/></p>
         </Typography> 
            <TextField 
              margin="normal"
              required
              fullWidth
              name="mail"
              label=<FormattedMessage id="app.mail"/>
              type="mail"
              id="mail"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="name"
              label=<FormattedMessage id="app.name"/>
              type="text"
              id="name"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="question"
              label=<FormattedMessage id="app.comments"/>
              type="text"
              id="password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              
              sx={{
                 mt: 2,
                 mb: 0,
                 borderRadius:8,
                 color:'black' }}
            >
              <FormattedMessage id="app.send"/>
            </Button>
            {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
    </div>
  );
}
