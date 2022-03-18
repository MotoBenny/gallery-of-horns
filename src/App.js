
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
      beast: {},
      numberOfHorns: Data
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

  handleSubmit = (e) => {
    e.preventDefault();

    const targetVal = parseInt(e.target.value)

    let filteredCritters = Data.filter((critter) => {
      switch (targetVal) { // this is cool 
        case 1:
        case 2:
          return critter.horns === targetVal;
        case 3: return critter.horns >= targetVal;
        default: return true;
      }
    });

    this.setState({numberOfHorns: filteredCritters});
    // console.log(this.state.numberOfHorns);
    // console.log('test');
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
          handleSubmit={this.handleSubmit}
          numberOfHorns={this.state.numberOfHorns}
        />
        <Footer />
      </>
    );
  }
}


export default App;

/* 
Lecture notes


  // findNumHorns = (e) => {
  //   // this is triggered on event, by user submitting num of horns they want to see.
  //   // this method populates a new array of hornedbeasts based on num of horns 
  //   // set that new array to state, and send to main.js as prop.

  //   this.setState({
  //     numberOfHorns: e.target.value
  //   });
  // }

  // handleSelect = (e) => {
  //   let selected = e.target.value;

  //   if (selected === '1') {
  //     let numHorns = 
  //   } else if ('2') {

  //   } else if ('3') {

  //   } else {

    // }

*/