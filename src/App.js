
import './App.css';
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import Data from './data.json'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      beast: {}
    }
  }

  hideModal = () => {
    this.setState({
      showModal: false,
    });
  }

  openModal = (beast) => {
    this.setState({
      showModal: true,
      beast,
    });
  }

  render() {
    return (
      <>
        <Header />
        <Main
          data={Data}
          openModal={this.openModal}
          hideModal={this.hideModal}
          beast={this.state.beast}
          showModal={this.state.showModal}
        />
        <Footer />
      </>
    )
  };
};

export default App;

/* 
Lecture notes

*/