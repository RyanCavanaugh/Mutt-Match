import * as React from 'react';
import store from '../store';
import AddComment from '../components/create-comment';
import BackboneMixin from '../mixins/backbone';
import {Link } from 'react-router';

const CommentList = React.createClass({

  mixins: [BackboneMixin],

  getModels(){
    return {
      comments: store.getComments()
    }
  },

  componentWillMount(){
    store.fetchComments();
  },

  handleDelete(comment,e){
    console.log("current User" , store.getSession().currentUser)
    console.log('creator' , comment.creator)
    if(store.getSession().currentUser.objectId === comment.creator.objectId){
    store.destroyComment(comment)
    }
    else{
    alert("You don't have permission to delete this comment.")
    }
  },

  render(){
    let comments = this.state.comments;

    return (
      <div className="chat-div">
      <h1 className="chat-room-heading">Chat Room</h1>
      <AddComment />
      <div className="comments-list-div">
      <ul className="chat-ul">
        {comments.map((x)=>{
          return (<div className="comment-card-div" key={x.objectId}>
                  <li>CreatedBy: {x.creator.username}</li>
                  <li>Course Name:<Link to={`/chat/${x.objectId}`} state={{comment:x}}>{x.courseName}</Link></li>
                  <li>Course Rating: {x.rating}</li>
                  <li>Course Comment: <span className="comment"><i>{x.comment}</i></span></li>
                  <li><Glyphicon onClick={this.handleDelete.bind(this,x)} glyph="remove" /></li>
                </div>)
        })}
      </ul>
    </div>
      </div>
    )
  }
})

export default CommentList;
