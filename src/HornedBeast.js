import React from "react";
import './HornedBeast.css'

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: 0,
    }
  }
  myFav = () => {
    this.setState( {
    favorites: this.state.favorites + 1
  });
  }


  render() {
    return (
      <>
        <article>
          <h3>{this.props.title}</h3>
          <p>🤘 {this.state.favorites} 🤘</p>
          <img
            src={this.props.image_url}
            alt={this.props.title}
          />
          <p>{this.props.description}</p>
          <p>This Critter has {this.props.horns} horns.</p>
          <button onClick={this.myFav}>This Critter is my favorite</button>
        </article>
      </>
    );
  }
}

export default HornedBeast;