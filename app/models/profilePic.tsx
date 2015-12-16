import * as Backbone from 'backbone';
import * as _ from "underscore";
import store from '../store';
import User from './user';

class Comment extends Backbone.Model {
  idAttribute = "objectId";
  urlRoot = "https://api.parse.com/1/classes/Pictures";

  url(){
    return Backbone.Model.prototype.url.apply(this, arguments);
  }

  defaults(){
    return {
      creator: {toJSON: function(){}},
    }
  }

  toJSON(options){
    if(options){
      return _.extend({},this.attributes,{
        creator: {
          "__type":"File",
          "className":"_User",
          "objectId": this.get('creator').objectId
        },
      })
    }
    else
    {
      return _.clone(this.attributes)
    }
  }

  save(){
    let currentUser = store.getSession().currentUser;
    if(currentUser){
      if(this.isNew())
      this.set('creator', currentUser);
      return Backbone.Model.prototype.save.apply(this, arguments);
    }
  }
}

export default Comment;
