import Backbone from 'backbone';
import Comment from '../models/comment';

var CommentsCollection = Backbone.Collection.extend({
  model: Comment,
  url: "https://api.parse.com/1/classes/Comments?include=creator",
  parse(response) {
    return response.results;
  }
});

export default CommentsCollection;
