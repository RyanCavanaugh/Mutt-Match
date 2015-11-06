import User from './user';

var UserCollection = Backbone.Collection.extend({
  model: User,
  url: "https://api.parse.com/1/classes/users",

  parse(response) {
    return response.results;
  }
});

export default UserCollection;
