import React from "react";
import './HornedBeast.css'
import { Card } from 'react-bootstrap'
import { Button } from 'react-bootstrap'


class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: 0,
    }
  }

  myFav = () => {
    this.setState({
      favorites: this.state.favorites + 1
    });
  }

  handleClick = () => {
    this.myFav();
    this.props.openModal(this.props.beast);
  }

  render() {
    return (
      <>
        <Card >
          <Card.Img
          className="image"
          variant="top"
          alt={this.props.title}
          src={this.props.image_url}
          onClick={this.handleClick}

          />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>🤘 {this.state.favorites} 🤘</Card.Text>
            <Card.Text>
              {this.props.description}
            </Card.Text>
            <Button
              variant="primary"
              className="glow-on-hover"
              onClick={this.myFav}>
              This Critter is my favorite
            </Button>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default HornedBeast;


/* 
Lecture notes

*/