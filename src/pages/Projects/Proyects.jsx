import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import { Grid } from "@mui/material";
import logo from "../../assets/images/logo.jpg";
import Badge from "react-bootstrap/Badge";
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
import { MDBIcon } from "mdb-react-ui-kit";
import Aos from "aos";
import "aos/dist/aos.css";
const BASEURL = "https://62852cc03060bbd347460bff.mockapi.io/";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const [stack, setStack] = useState([]);
  const [expanded, setExpanded] = React.useState(false);

  useEffect(() => {
    const fetchProjects = async () => {
      const res = await axios.get(`${BASEURL}/oitStack`);
      setStack(res.data);
    };
    fetchProjects();
  }, []);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  return (
    <div data-aos="fade-up">
      <Grid container spacing={2}>
        {stack.map((item) => (
          <Grid item xs={12} md={6} lg={4}>
            <Card
              elevation={5}
              sx={{
                borderRadius: "4px",
                justifyContent: "flex-start",
                flex: "1 0 auto",
                // marginLeft: "5px",
                marginTop: "10px",
                flexDirection: "column",
                flexWrap: "wrap",
                ":hover": {
                  boxShadow: 40, // theme.shadows[20]
                },
              }}
            >
              <CardHeader
                avatar={
                  <Avatar
                    sx={{ bgcolor: red[500] }}
                    aria-label="recipe"
                    src={logo}
                  ></Avatar>
                }
                action={
                  <>
                    <div className="text-warning mb-1 me-2">
                      {/* <MDBIcon fas icon="star" />
                      <MDBIcon fas icon="star" />
                      <MDBIcon fas icon="star" />
                      <MDBIcon fas icon="star" />
                      <MDBIcon fas icon="star" /> */}
                    </div>
                    {/* <span>{getRandomInt(45)}</span> */}
                  </>
                }
                title={item.title}
                subheader={item.fecha}
              />
              <CardMedia
                component="img"
                height="194"
                image={item.image}
                alt={item.image}
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "space-evenly" }}>
                <Badge bg="success" text="bold">
                  Stack:
                </Badge>
                {item.stack.map((i) => (
                  <Avatar
                    sx={{
                      width: 24,
                      height: 24,
                      flexDirection: "row",
                      flexWrap: "wrap",
                    }}
                    aria-label="recipe"
                    src={i.image}
                  ></Avatar>
                ))}
                 <Badge bg="primary" text="bold">
                  Links:
                </Badge>
                {item.links.map((o) => (
                  <IconButton
                    aria-label="settings"
                    sx={{
                      //border: 1,
                      //borderColor:"red",
                      borderRadius: 50,
                      //backgroundColor: "#80deea",
                    }}
                  >
                    {o.name === "Git" && (
                      <a href={o.linkGit}>
                        <MDBIcon color="dark" fab icon="github" />
                      </a>
                    )}
                    {o.name === "Vercel" && (
                      <a href={o.linkVer}>
                        <MDBIcon color="primary" fab icon="internet-explorer" />
                      </a>
                    )}
                  </IconButton>
                ))}
                <ExpandMore
                  expand={expanded}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  {/* <ExpandMoreIcon /> */}
                </ExpandMore>
              </CardActions>
              {/* <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>Method:</Typography>
                  <Typography paragraph>
                    Heat 1/2 cup of the broth in a pot until simmering, add
                    saffron and set aside for 10 minutes.
                  </Typography>
                  <Typography paragraph>
                    Heat oil in a (14- to 16-inch) paella pan or a large, deep
                    skillet over medium-high heat. Add chicken, shrimp and
                    chorizo, and cook, stirring occasionally until lightly
                    browned, 6 to 8 minutes. Transfer shrimp to a large plate
                    and set aside, leaving chicken and chorizo in the pan. Add
                    pimentón, bay leaves, garlic, tomatoes, onion, salt and
                    pepper, and cook, stirring often until thickened and
                    fragrant, about 10 minutes. Add saffron broth and remaining
                    4 1/2 cups chicken broth; bring to a boil.
                  </Typography>
                  <Typography paragraph>
                    Add rice and stir very gently to distribute. Top with
                    artichokes and peppers, and cook without stirring, until
                    most of the liquid is absorbed, 15 to 18 minutes. Reduce
                    heat to medium-low, add reserved shrimp and mussels, tucking
                    them down into the rice, and cook again without stirring,
                    until mussels have opened and rice is just tender, 5 to 7
                    minutes more. (Discard any mussels that don&apos;t open.)
                  </Typography>
                  <Typography>
                    Set aside off of the heat to let rest for 10 minutes, and
                    then serve.
                  </Typography>
                </CardContent>
              </Collapse> */}
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
