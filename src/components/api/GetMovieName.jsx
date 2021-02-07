import React, {  useState } from "react";
import { TextField, Button } from "@material-ui/core";
import LoadLs from "../Storage/LoadLS";
import LoadLS from "../Storage/LoadLS";
import GetUpComing from "./GetUpComing";
import GetMovieData from "./GetMovieData";

export default function GetMovieName() {
  const [name, setName] = useState("");
  const [getMovieData, setGetMovieData] = useState(null);
  const [loadSavedMovies, setLoadSavedMovies] = useState(<LoadLS childData={getChildData} />);
  function userText(event) {
    setName(event.target.value);
  }
  function getChildData(data) {
    setLoadSavedMovies(<LoadLs childData={getChildData} />);
  }
  function sendMovieName() {
    if (name !== "") {
        setGetMovieData(<GetMovieData childData={getChildData} movieName={name}/>);
      console.log(name);
      }
}
  return (
    <div style={{ marginTop: "20px" }}>
      <TextField
        style={{ marginBottom: "30px" }}
        className="TextField"
        id="filled-basic"
        label="movie name"
        variant="filled"
        onChange={userText}
        color="white"
        
      />
      <Button style={{ height: "56px" }} onClick={sendMovieName} variant="contained" color="primary">
        search
      </Button>
      {getMovieData}
      <GetUpComing childData={getChildData}/>
      {loadSavedMovies}
      </div>
  );
}
