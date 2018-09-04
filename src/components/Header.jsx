import React from "react";

function Header(props){
  var style = {
    backgroundColor: "red",
    fontFamily: "monospace"
  }
  return (
    <h1 style={style}>Help Queue</h1>
  );
}

export default Header;