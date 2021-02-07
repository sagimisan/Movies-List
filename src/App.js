import React from "react";
import "./styles.css";
import GetMovieName from "./components/api/GetMovieName";

export default function App() {

  return (
    <div className="App">      
      {/* <button onClick={()=>localStorage.clear()}>נקה LS</button> */}
      <GetMovieName />

    </div>
  );
}
