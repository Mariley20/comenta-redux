import React, { Component } from 'react';
import { connect } from "redux-zero/react";
import { addComment, removeComment, reportAbusive } from "./actions";
import './App.css';

const ListComments = ({name, comment, abusive, removeComment, reportAbusive}) => {
      return (
        <div className="box-comment">
            <h3 className="h3-user">{name}</h3>
            {!abusive ?
                <label className="label-comment">{comment}</label>
            :
                <label className="label-comment">Content marked as abusive</label>
              }
              <br />
            <a className="btn btn-remove" onClick={removeComment}>Delete</a>
            <a className="btn btn-abusive" onClick={reportAbusive} >Report abuse</a>
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
            abusive={element.abusive}
            removeComment={() => removeComment(index)}
            reportAbusive = {() => reportAbusive(index)}
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
      <div className="container container-box">
      <form onSubmit = {onSubmit}>
        <div className="form-group">
          <label >Name User: </label>
          <input type="text" className="form-control" ref={(e) => this.userName = e} />
        </div>
        <div className="form-group">
          <label>Comment:</label>
          <input type="text" className="form-control inputComment" ref={(e) => this.comment = e} /> 
        </div>
        <button type="submit" className="btn btn-default">Submit</button>
      </form>
          <div>
            <h3>Comments</h3>
            <label>{commentary.length} comments</label>
            <hr />
            {ListComment}
          </div>
      </div>
    );
}
const mapToProps = ({commentary, selectedComment}) =>({commentary, selectedComment});

export default connect(mapToProps)(App);
