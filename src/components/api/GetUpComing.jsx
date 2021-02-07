// api key= ca667ae90b3870477fdbe2ad99ca2fdd
import React, { useState, useEffect } from "react";
import MoviesCards from "../cards/MoviesCards";
import "bootstrap/dist/css/bootstrap.min.css";
import { CircularProgress } from "@material-ui/core";

export default function GetUpComing(props) {
    const axios = require('axios');
    const [movies, setMovies] = useState(null);
    const [label, setLabel] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=ca667ae90b3870477fdbe2ad99ca2fdd&language=en-US&page=1')
            .then(function (response) {
                console.log(response.data);
                setMovies(response.data.results)
                setLabel("Upcoming: ")
                setLoading(false);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])
    return (
        <div>
        <h3 className="label">{label}</h3>
        {loading && <CircularProgress />}
        <div className="container-fluid movie-app" style={{ marginTop: "20px",marginLeft:"10px" }}>
            <div className="row">
                {movies !== null ? movies.map((movie, index) => {
                    return (
                        <MoviesCards type="upcoming" key={index} movie={movie} childData={sendChildData} />
                    )
                }) : ""}
            </div>
        </div>
        </div>
    );
    function sendChildData() {
        props.childData(true);
      }
}
