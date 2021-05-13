import React, { useState } from "react";
import { makeStyles, Grid, Typography, CardMedia, Button, Card, CardActionArea, CardActions, CardContent } from "@material-ui/core";


export default function CardsFromLS(props) {
  const classes = useStyles();
  const [displayDetails, setDisplayDetails] = useState("none");
  const [displayImg, setDisplayImg] = useState("block");
  const [displayPlot, setDisplayPlot] = useState("none");

  function Details() {
    setDisplayImg("none")
    setDisplayDetails("block");
  }
  function LearnMore() {
    setDisplayDetails("none");
    setDisplayPlot("block")
  }
  function plotClick() {
    setDisplayPlot("none")
    setDisplayImg("block")
  }
  function returnPic() {
    setDisplayDetails("none");
    setDisplayImg("block")
  }
  function delet() {
    localStorage.removeItem(props.title)
    setDisplayDetails("none");
    setDisplayImg("block")
    sendChildData();
  }

  return (
    <Grid className={classes.gridDiv} item>
      <Card className={classes.root}>
        <CardMedia
          onClick={Details}
          className={classes.img}
          component="img"
          alt="Contemplative Reptile"
          // height="140"
          image={`https://image.tmdb.org/t/p/w185${props.poster}`}
          title="Contemplative Reptile"
          style={{ display: displayImg }}
        />
        <CardActions className={classes.link}>
          <Button onClick={delet} style={{ display: displayImg }} size="small" color="primary">
            Delete
              </Button>
          <Button onClick={Details} style={{ display: displayImg }} size="small" color="primary">
            show details
              </Button>
        </CardActions>
        <CardActionArea style={{ display: displayDetails }} >
          <CardContent onClick={returnPic}>
            <Typography className={classes.text} gutterBottom variant="h6" style={{ fontWeight: "bold" }} component="h2">
              {props.title}
            </Typography>
            <Typography className={classes.text} gutterBottom variant="h6" component="h2">
              {props.releaseDate}
            </Typography>
            <Typography className={classes.text} gutterBottom variant="h6" component="h2">
            </Typography>
            <Typography className={classes.text} gutterBottom variant="h6" component="h2">
              {props.rating}
            </Typography>
            <Typography className={classes.text} gutterBottom variant="h6" component="h2">
              <a target="blank" href={`https://www.youtube.com/results?search_query=${props.title}`}>trailer</a>
            </Typography>
          </CardContent>
          <CardActions>
            <Button onClick={delet} size="small" color="primary">
              Delete
              </Button>
            <Button onClick={LearnMore} size="small" color="primary">
              Learn More
              </Button>
          </CardActions>
        </CardActionArea>
        <CardContent onClick={plotClick} style={{ display: `${displayPlot}` }}>
          <Typography className={classes.text} variant="p" color="textSecondary" component="p">
            {props.overview === "" ? <h3>no data</h3> : props.overview}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
  function sendChildData() {
    props.childData(true);
  }
}
const useStyles = makeStyles({
  root: {
    width: 150,
    cursor: "pointer",
    background: "none",
  },
  link: {
    justifyContent: "center"
  },
  text: {
    color: "white"
  },
  img: {
    // maxHeight: "200px",
  },

});
