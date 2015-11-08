import User from './user';

var UserCollection = Backbone.Collection.extend({
  model: User,
  url: "https://api.parse.com/1/users",

  parse(response) {
    return response.results;
    console.log(response);
  }
});

export default UserCollection;
