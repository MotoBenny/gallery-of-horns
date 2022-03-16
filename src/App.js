
import './App.css';
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import Data from './data.json'


class App extends React.Component {

  render() {
    return (
      <>
        <Header />
        <Main data={Data}
          openModal={this.openModal}
        />
        <Footer />
      </>
    )
  };
};

export default App;

/* 
Lecture notes

1) add constructor with state
2) pass that to header within the header tag

before CSS imports

import Modal from 'react-bootstrap/modal' // import modal component
import './App.css';
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import Data from './data.json'

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      image: 
      showModal: false
    };
  }
// event handler

// modal handler
  hideModal = () => {
    this.setState({
      showModal: false
    })
  }
  openModal = (name) => {
    this.setState({
      showModal: true,
      title: name
      image: image_url
    })
  }
  render() {
    return (
      <>
        <Header
          hearts={this.state.hearts} // passes this to header.js where it is then a prop
        />
          <Main data={Data}/>
  
          openModal={this.openModal}
        <Footer/>
        // modal example code below
        <Modal
          show={this.state.showModal} // gets the state, if this state is true, it will display modal.
          onHide={this.hideModal}
        >
        <Modal.Header closeButton>
        Modal.Title>{this.state.TITLE}</Modal.Title>
        </Modal.Header>
        </Modal>
      </>
    )
  }
}
*/