import React, { useState } from "react";
import { LinearProgress } from "@material-ui/core";
import MoviesCards from "../cards/MoviesCards"

export default function GetMovieData(props) {
  const axios = require("axios").default;
  const [movies, setMovies] = useState(null);
  const [lastSearch, setLastSearch] = useState("");
  const [loading, setLoading] = useState(false);

  if (props.movieName !== "" && lastSearch !== props.movieName) {
    document.getElementById("filled-basic").value = "";
    setLastSearch(props.movieName)
    setLoading(true);
    setLastSearch(props.movieName)
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=ca667ae90b3870477fdbe2ad99ca2fdd&language=en-US&query=${props.movieName}&page=1&include_adult=false`)
      .then(function (response) {
        console.log(response.data.results);
        setMovies(response.data.results)
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  return (
    <div className="cards">
      <h3 className="label">Results for: {props.movieName}</h3>
      <div className="movie-app" style={{ marginTop: "20px"}}>
        <div className="row "  style={{marginLeft:"10px"}}>
          {movies !== null ? movies.map((movie) => {
            return (movie.poster_path!==null?
              <MoviesCards movie={movie} childData={sendChildData} />
            :"")
          }) : ""}
        </div>
      </div>
      {loading && <LinearProgress />}
    </div>
  );
  function sendChildData() {
    props.childData(true);
  }
}