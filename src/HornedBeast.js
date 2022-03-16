import React from "react";
import './HornedBeast.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
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

//  style={{ width: '18rem' }}
  render() {
    return (
      <>
        <Card>
          <Card.Img class="image"  className="h-100" variant="top" alt={this.props.title} src={this.props.image_url} />
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

send person favorite value from here, CHILD to Parent APP.js which will then send it to Header.js
we need to set state here in HornedBeast to swap a state to true,
App.js with then need to dial into hornedbeast to check this state, If true, send > this to Header.js

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

  // helper funciton to pass props like title and desc and img
  handleShowModal = () => {
    this.props.openModal(this.props.name);
    this.props.openModal(this.props.imageUrl);
    this.props.openModal(this.props.desc);

  }


//  style={{ width: '18rem' }}
  render() {
    return (
      <>
        <Card>
          <Card.Img
            class="image"
            className="h-100"
            variant="top"
            alt={this.props.title}
            src={this.props.image_url}
            onClick{this.props.addHearts}
            onClick{this.props.handleShowModal} // calls the open Modal function from App.js handed to beasts by app.js.
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

steps to hand state from a child to a parent to a different child


1) add state  on child.

2) event listener on child

3) event handler parent 

4) SEE lecture at 10:50 for breakdown of these steps

5)


*/