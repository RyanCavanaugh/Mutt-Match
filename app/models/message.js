import Backbone from 'backbone';
import _ from "underscore";
import store from '../store';


const Message = Backbone.Model.extend({
  idAttribute: 'objectId',
  defaults(){
    return {
    messageText: "",
    creator: ""
  }
},
toJSON(options) {
  // I'm saving the model
  if(options) {
    return _.extend({}, this.attributes, {
      creator: {
        "__type": "Pointer",
        "className": "_User",
        "objectId": this.get('creator').objectId
      }
    });
  } else { // I'm using toJSON to use with React
    return _.clone(this.attributes);
  }
},

save() {
  let currentUser = store.getSession().currentUser;
  if(currentUser) {
    if(this.isNew()) {
      this.set('creator', currentUser);
    }
    Backbone.Model.prototype.save.apply(this, arguments);
  } else {
    return new Promise((_, reject) => reject("Invalid session"));
  }
}

});

export default Message;
