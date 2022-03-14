import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import HornedBeast from "./HornedBeast";

class Main extends React.Component {
  render() {
    return (
      <>
        <HornedBeast></HornedBeast>
        <HornedBeast></HornedBeast>
      </>
    );
  }
}

export default Main;