import React from "react";
import HornedBeast from "./HornedBeast";


class Main extends React.Component {
  render() {
    let beasts = [];
    this.props.data.forEach((critter, index) => {
      beasts.push(
        <HornedBeast
          title={critter.title}
          name={critter.name}
          image_url={critter.image_url}
          description={critter.description}
          key={index}
        />
      )
    })

    return (
      <main>
        {beasts}
      </main>
    );
  }
}

export default Main;