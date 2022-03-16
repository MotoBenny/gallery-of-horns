import React from "react";
import './HornedBeast.css'
import 'bootstrap/dist/css/bootstrap.min.css';
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
          <Card.Img class="image" variant="top" alt={this.props.title} src={this.props.image_url} />
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


    // return (
    //   <>
    //     <article>
    //       <h3>{this.props.title}</h3>
    //       <p>🤘 {this.state.favorites} 🤘</p>
    //       <img
    //         src={this.props.image_url}
    //         alt={this.props.title}
    //       />
    //       <p>{this.props.description}</p>
    //       <p>This Critter has {this.props.horns} horns.</p>
    //       <Button
    //         variant="primary"
    //         className="glow-on-hover"
    //         onClick={this.myFav}>
    //         This Critter is my favorite
    //       </Button>
    //     </article>
    //   </>
    // );
