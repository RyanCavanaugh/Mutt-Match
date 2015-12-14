import Backbone from 'backbone';

var PetfinderCollection = Backbone.Collection.extend({

  url(){
    return 'http://api.petfinder.com/my.method?key=d552925704895ef0b62de6a72ba33506' + this.id;
  },

  parse(response) {
    return response.places;
  }
});

export default PetfinderCollection;
