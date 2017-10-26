import React, { Component } from 'react';
import { connect } from "redux-zero/react";
import { addComment, removeComment } from "./actions";
import './App.css';

const ListComments = ({name, comment, removeComment}) => {
      return (
        <div>
            <p>{name}</p>
            <p>{comment}</p>
            <button onClick={removeComment}>Delete</button> <button>Report abuse</button>
        </div>
      )
}

const App = ({commentary, selectedComment}) => {

   const ListComment = commentary.map((element, index) => {
          return (
            <ListComments
            key = {index}
            name={element.name}
            comment={element.comment}
            removeComment={() => removeComment(index)}
            />
          )
        });
        

  const onSubmit = (e) => {
		e.preventDefault();
		console.log ( 'this..', this);//con truco, es el connect el this.
    addComment(this.userName.value, this.comment.value );
     this.userName.value = "";
     this.comment.value = "";
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
          <textarea className="form-control textarea" ref={(e) => this.comment = e} /> 
        </div>
        <button type="submit" className="btn btn-default">Submit</button>
      </form>
          <div>
            <h3>Comments</h3>
            <label>{commentary.length} comments</label>
          {ListComment}</div>
      </div>
    );
}
const mapToProps = ({commentary, selectedComment}) =>({commentary, selectedComment});

export default connect(mapToProps)(App);
