import React from "react";


class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>Gallery Of Horns!</h1>
      </header>
    );
  }
}

export default Header;

/* 
Lecture notes


class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>Gallery Of Horns! {this.props.heart}</h1>
      </header>
    );
  }
}


*/