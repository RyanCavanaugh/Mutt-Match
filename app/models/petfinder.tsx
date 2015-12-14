import Backbone from 'backbone';

var Petfinder = Backbone.Model.extend({

  urlRoot: "https://api.parse.com/1/classes/Petfinder",

  idAttribute: 'objectId',

  parse(response) {
    return response;
  }
});

export default Petfinder;
