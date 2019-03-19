import React, { Component } from "react";
import "./App.css";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;
class App extends Component {
  render() {
    return (
      <div className="App">
        <h3>Welcome to React tech store application</h3>
        <Button >Click me!</Button>
      </div>
    );
  }
}

export default App;
