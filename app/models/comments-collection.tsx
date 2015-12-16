import * as Backbone from 'backbone';
import Comment from '../models/comment';

class CommentsCollection extends Backbone.Collection<Comment> {
	model = Comment;
	url() { return "https://api.parse.com/1/classes/Comments?include=creator"; }
  parse(response) {
    return response.results;
  }
}

export default CommentsCollection;
