import React, { Component } from 'react';
import { connect } from "redux-zero/react";
import { addComment } from "./actions";
import './App.css';

const ListComments = ({commentary}) => {
    let list = commentary.map((element, index) => {
      return (
        <div key={index}>
            <p>{element.name}</p>
            <p>{element.comment}</p>
        </div>
      )
    });
    return (<div>{list}</div>)
}

const App = ({commentary, selectedComment}) => {
  const onSubmit = (e) => {
		e.preventDefault();
		console.log ( 'this..', this);//con truco, es el connect el this.
		addComment(this.userName.value, this.comment.value )
  }
  console.log(commentary)
    return (
      <div className="container">
      <form onSubmit = {onSubmit}>
        <div className="form-group">
          <label >Name User: </label>
          <input type="text" className="form-control" ref={(e) => this.userName = e} />
        </div>
        <div className="form-group">
          <label>Comment:</label>
          <textarea className="form-control textarea" ref={(e) => this.comment = e} > </textarea>
        </div>
        <button type="submit" className="btn btn-default">Submit</button>
      </form>
          <ListComments commentary={commentary} />
      </div>
    );
}
const mapToProps = ({commentary, selectedComment}) =>({commentary, selectedComment});

export default connect(mapToProps)(App);
