import React from "react";

class HornedBeast extends React.Component{
  render() {
    return (
      <>
      <h2>Title: {this.props.title}</h2>
      <img src={this.props.imageUrl} alt='ImageURL Tag' title={this.props.title}></img>
      <p>Description: {this.props.description}</p>
      </>
    );
  }
}

export default HornedBeast;