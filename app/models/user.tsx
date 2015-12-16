import * as Backbone from 'backbone';

class User extends Backbone.Model {
	idAttribute = 'objectId';

	urlRoot = "https://api.parse.com/1/users";
}

export default User;
