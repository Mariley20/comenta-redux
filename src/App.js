import React, { Component } from 'react';
import { connect } from "redux-zero/react";
import { addComment } from "./actions";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        
      </div>
    );
  }
}

const mapToProps = ({commentary, selectedComment}) =>({commentary, selectedComment});

export default connect(mapToProps)(App);
