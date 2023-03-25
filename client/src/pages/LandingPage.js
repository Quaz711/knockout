import React from "react";
import LoginButton from "../components/Nav/LoginButton";
const myStyle = {
  color: "#ffffff",
  backgroundColor: "#000000",
  padding: "20px",
  fontSize: "20px",
  fontFamily: "Lucida Console, Monaco, monospace",
  height: "100vh"

}

const Feed = () => {
  return (
    <div className="container" style={myStyle}>
      <h1>Welcome to Knockout! Please Login</h1>
      <LoginButton />
    </div>
  );
};

export default Feed;