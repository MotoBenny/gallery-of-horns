import React from "react";
import HornedBeast from "./HornedBeast";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import SelectedBeast from './SelectedBeasts';
import './Main.css'

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
      showModal: false,
      beast: {}
    }
  }
  hideModal = () => {
    this.setState({
      showModal: false,
    });
  };
  openModal = (beast) => {
    this.setState({
      showModal: true,
      beast,
    });
  };

  render() {
    return (
      <main>
        <SelectedBeast
          showModal={this.state.showModal}
          beast={this.state.beast}
          hideModal={this.hideModal}
        />

        <Container>
          <Row xs={1} sm={2} md={3} lg={4}>
            {this.state.data.map((beast, index) => (
              <Col key={index}>
                <HornedBeast
                  beast={beast}
                  title={beast.title}
                  name={beast.name}
                  image_url={beast.image_url}
                  description={beast.description}
                  horns={beast.horns}
                  key={index}
                  openModal={this.openModal} 
                  />
              </Col>
            ))}
          </Row>
        </Container>
      </main>
    );
  }
}

export default Main;

/* 
Lecture notes

class Main extends React.Component {

  render() {
    let beasts = [];
    this.props.data.forEach((critter, index) => { // will need to change this to .map for todays lab
      beasts.push(
        <HornedBeast
          title={critter.title}
          name={critter.name}
          image_url={critter.image_url}
          description={critter.description}
          horns={critter.horns}
          key={index}
          addHearts={this.props.addHearts}
          openModal={this.props.openModal}
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

*/