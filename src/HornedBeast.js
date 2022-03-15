import React from "react";

class HornedBeast extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
      <article>
        <h3>{this.props.title}</h3>
        <img
          src={this.props.image_url}
          alt={this.props.title}
        />
        <p>{this.props.description}</p>
      </article>
      </>
    );
  }
}

export default HornedBeast;