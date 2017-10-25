import React, { Component } from 'react';
import { connect } from "redux-zero/react";
import { addComment } from "./actions";
import './App.css';

const App = ({commentary, selectedComment}) => {
    return (
      <div className="container">
      <form>
        <div className="form-group">
          <label >Name User: </label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label>Comment:</label>
          <textarea className="form-control textarea"> </textarea>
        </div>
        <button type="submit" className="btn btn-default">Submit</button>
      </form>
      </div>
    );
}
const mapToProps = ({commentary, selectedComment}) =>({commentary, selectedComment});

export default connect(mapToProps)(App);
