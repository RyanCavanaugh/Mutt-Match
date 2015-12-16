import * as Backbone from 'backbone';
import Comment from '../models/comment';

class ProfilePicsCollection extends Backbone.Collection<any> {
	model = Comment;
	url() { return "https://api.parse.com/1/classes/Pictures" }
  parse(response) {
    return response.results;
  }
}

export default ProfilePicsCollection;
