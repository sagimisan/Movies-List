import React, { useState } from "react";
import CardsFromLS from "../cards/CardsFromLS";
import Grid from '@material-ui/core/Grid';

export default function LoadLS(props) {
    // localStorage.clear();
  const titles = Object.keys(localStorage);
  return (
    <div>
      {console.log("DFSD"+titles)}
      <h3 style={{marginBottom:"20px"}} className="label">My list:  {titles==""?"You need to add some movies":""}</h3>
     
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={2}>
          {titles.map((title, index) => {
            let movieData = JSON.parse(localStorage.getItem(title));
            return (
              <Grid key={index} item>
                <CardsFromLS childData={sendChildData}
                 title={movieData.title}
                  poster={movieData.poster}
                  releaseDate={movieData.releaseDate}
                  // length={movieData.length}
                  rating={movieData.rating}
                  overview={movieData.overview}
                  // trailer={movieData.trailer}
                   />
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
    </div>
  );
  function sendChildData(data) {
    props.childData(data);
  }
}
