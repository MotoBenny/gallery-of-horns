
import './App.css';
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';




class App extends React.Component{
  render() {
    return (
      <>
        <Header></Header>
          <Main title="TEST TITLE" imageUrl="TEST URL" description="TEST DESCRIPTION"></Main>
        <Footer></Footer>
      </>
    )
  }
}






export default App;
