import React from "react";
import HornedBeast from "./HornedBeast";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import SelectedBeast from './SelectedBeasts';
import { Form } from "react-bootstrap";
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
        <Form>
          <Form.Label>Show beasts with this many horns.
          </Form.Label>
          <Form.Group>
            <Form.Select onChange={this.props.handleSubmit}>
              <option value='0'>All</option>
              <option value='1'>One Horn</option>
              <option value='2'>Two Horns</option>
              <option value='3'>Three or More</option>
            </Form.Select>
          </Form.Group>
        </Form>
        <Container>
          <Row xs={1} sm={2} md={3} lg={4}>
            {this.props.numberOfHorns.map((beast, index) => (
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