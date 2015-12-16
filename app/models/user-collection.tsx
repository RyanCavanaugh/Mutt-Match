import * as Backbone from 'backbone';
import User from './user';

class UserCollection extends Backbone.Collection<User> {
	model = User;
	url() { return "https://api.parse.com/1/users" }

  parse(response) {
    return response.results;
    // console.log(response);
  }
}

export default UserCollection;
