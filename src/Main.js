import React from "react";
import HornedBeast from "./HornedBeast";

class Main extends React.Component {
  render() {
    return (
      <>
        <HornedBeast title="TEST TITLE" imageUrl="TEST URL" description="TEST DESCRIPTION"></HornedBeast>
        <HornedBeast title="TEST TITLE 2" imageUrl="TEST URL 2" description="TEST DESCRIPTION 2"></HornedBeast>
      </>
    );
  }
}

export default Main;