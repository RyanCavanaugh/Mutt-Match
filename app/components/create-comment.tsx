import * as React from "react";
import store from "../store";
import BackboneMixin from "../mixins/backbone";

const AddComment = React.createClass({

mixins: [BackboneMixin],

handleSubmit(e){
  e.preventDefault();
  store.saveComment({
    comment: this.refs.comment.value
  })

this.refs.comment.value = "";

},

render(){

  return(
    <form className="comment-form" onSubmit={this.handleSubmit}>
    <label className="add-comment">Add Comment</label>
    <textarea ref="comment" className="comment-textarea"></textarea>
    <button className="button round" type="submit">Submit</button>
    </form>
  )
}


});

export default AddComment;
