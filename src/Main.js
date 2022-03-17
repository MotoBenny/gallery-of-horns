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
    }
  }

  render() {
    return (
      <main>
        <SelectedBeast
          showModal={this.props.showModal}
          beast={this.props.beast}
          hideModal={this.props.hideModal}
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
                  openModal={this.props.openModal} 
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

*/