import React, { useState } from "react";
import { makeStyles, Typography, CardMedia, Snackbar, Button, Card, CardActionArea, CardActions, CardContent } from "@material-ui/core";
import Alert from '@material-ui/lab/Alert';

export default function MoviesCards(props) {
  const classes = useStyles();
  const [displayDetails, setDisplayDetails] = useState("none");
  const [displayImg, setDisplayImg] = useState("block");
  const [DisplayPlot, setDisplayPlot] = useState("none");
  const [open, setOpen] = React.useState(false);

  const obj = {
    title: props.movie.title,
    releaseDate: props.movie.release_date,
    rating: props.movie.vote_average,
    poster: props.movie.poster_path,
    overview: props.movie.overview,
  };
  function Details() {
    setDisplayImg("none")
    setDisplayPlot("none")
    setDisplayDetails("block");
  }
  function returnPic() {
    setDisplayDetails("none");
    setDisplayPlot("none")
    setDisplayImg("block")
  }
  function LearnMore() {
    setDisplayDetails("none");
    setDisplayImg("none")
    setDisplayPlot("block")
  }
  function plotClick() {
    setDisplayPlot("none")
    setDisplayDetails("none");
    setDisplayImg("block")
  }
  function addMovie() {
    localStorage.setItem(obj.title, JSON.stringify(obj));
    setOpen(true);
    sendChildData();
  }
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <div  >
      <Snackbar className={classes.Snackbar} open={open} autoHideDuration={3000} onClose={handleClose} anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}>
        <Alert onClose={handleClose} severity="success">
          You added the movie!
        </Alert>
      </Snackbar>
      <Card id="cardDiv" className={classes.root}>
        <CardMedia
          onClick={Details}
          id="img"
          className={classes.img}
          component="img"
          alt="movie img"
          height="225"
          image={`https://image.tmdb.org/t/p/w185${props.movie.poster_path}`}
          title="movie img"
          style={{ display: displayImg }}
        />
        <CardActions style={{ justifyContent: "center" }}>
          <Button onClick={addMovie} style={{ display: displayImg }} size="small" color="primary">
            add movie
              </Button>
          <Button onClick={Details} style={{ display: displayImg }} size="small" color="primary">
            show details
              </Button>
        </CardActions>
        <CardActionArea style={{ display: displayDetails }} >
          <CardContent onClick={returnPic}>
            <Typography className={classes.text} gutterBottom variant="h6" style={{ fontWeight: "bold" }} component="h2">
              {props.movie.title}
            </Typography>
            <Typography className={classes.text} gutterBottom variant="h6" component="h2">
              {props.movie.release_date}
            </Typography>
            <Typography className={classes.text} gutterBottom variant="h6" component="h2">
              {props.movie.vote_average}
            </Typography>
            <Typography className={classes.text} gutterBottom variant="h6" component="h2">
              <a target="blank" href={`https://www.youtube.com/results?search_query=${props.movie.title}`}>trailer</a>
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions style={{ justifyContent: "center" }}>
          <Button onClick={addMovie} style={{ display: displayDetails }} size="small" color="primary">
            add movie
              </Button>
          <Button onClick={LearnMore} style={{ display: displayDetails }} size="small" color="primary">
            Learn More
              </Button>
        </CardActions>
        <CardContent onClick={plotClick} style={{ display: `${DisplayPlot}` }}>
          <Typography className={classes.text} variant="p" color="textSecondary" component="p">
            {props.movie.overview === "" ? <h3>no data</h3> : props.movie.overview}

          </Typography>
        </CardContent>
      </Card>

    </div>
  );
  function sendChildData() {
    props.childData(true);
  }
}

const useStyles = makeStyles({
  gridDiv: {},
  Snackbar: {
    bottom: "50px"
  },
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
    // height:"225px"
    // maxHeight: "200px",
  }
});