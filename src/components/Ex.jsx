const axios = require('axios');

// Make a request for a user with a given ID

  // api key= ca667ae90b3870477fdbe2ad99ca2fdd
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Ex(props) {


    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/find/{external_id}?api_key=ca667ae90b3870477fdbe2ad99ca2fdd&language=en-US&external_source=imdb_id')
  .then(function (response) {
    // handle success
    console.log("abs "+(response.data.movie_results));
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
    }, [])
    return (
        <div>
       
        </div>
    );

}
