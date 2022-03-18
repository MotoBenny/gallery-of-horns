import React from "react";
import { Modal } from 'react-bootstrap';

class SelectedBeast extends React.Component {
  render() {
    return (
      <Modal
        show={this.props.showModal}
        onHide={this.props.hideModal}
        >
        <Modal.Header closeButton>
          <Modal.Title>{this.props.beast.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img 
          style={{width: '100%'}}
          src={this.props.beast.image_url}
          alt={this.props.beast.title}>
          </img>
          {this.props.beast.description}</Modal.Body>
      </Modal>
    );
  }
}

export default SelectedBeast;

/* 
Lecture notes

*/