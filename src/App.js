
import './App.css';
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import Data from './data.json'


class App extends React.Component{
  render() {
    return (
      <>
        <Header/>
          <Main data={Data}/>
        <Footer/>
      </>
    )
  }
}






export default App;
