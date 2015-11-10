import Backbone from 'backbone';
import Comment from '../models/comment';

var ProfilePicsCollection = Backbone.Collection.extend({
  model: Comment,
  url: "https://api.parse.com/1/classes/Pictures",
  parse(response) {
    return response.results;
  }
});

export default ProfilePicsCollection;
