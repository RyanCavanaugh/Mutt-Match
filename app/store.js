import _ from 'underscore';
import Backbone from 'backbone';
import Session from './models/session';
import User from './models/user';
import UserCollection from './models/user-collection';
import Comment from './models/comment';
import CommentsCollection from './models/comments-collection';

let session = new Session();
let users = new UserCollection();
let usersCache = {};
let comments = new CommentsCollection();

const Store = _.extend({}, Backbone.Events, {

  initialize() {
    this.listenTo(session, 'change', this.trigger.bind(this, 'change'));
    this.listenTo(users, 'add change remove', this.trigger.bind(this, 'change'));
    this.listenTo(comments, 'add change remove', this.trigger.bind(this, 'change'));
  },

  invalidateSession() {
    return session.invalidate();
  },

  getSession() {
    return session.toJSON();
  },

  authenticateSession(options) {
    return session.authenticate(options);
 },

  restoreSession() {
    return session.restore();
  },

  getUsers(){
    return users.toJSON();
  },

  getUserCollection(){
    return (users = users || new UserCollection());
  },

  fetchUsers(){
    return users.fetch();
  },

  getUser(id) {
   let user = users.get(id);
    if(user) {
      return user.toJSON();
    }
    else {
      users.fetch();
      return {};
    }
  },

  getRecipient(id){
    let user = users.get(id);
     if(user) {
       return user.toJSON();
     }
     else {
       users.fetch();
       return {};
     }
  },

  getComments(){
    return comments.toJSON();
  },

  fetchComments(){
    return comments.fetch;
  },

  getComment(id){
    let comment = comments.get(id);
      if(comment){
        return comment.toJSON();
      }
      else {
        comments.fetch();
        return {};
      }
  },

  saveComment(comment, options){
    return comments.create(comment, options);
  },

  destroyComment(comment){
    return comments.get(comment.objectId).destroy();
  },

//this user should become the currentUser, instead of
  createUser(attributes) {
    let user = new User(attributes);
    return user.save().then(()=> {
      return session.authenticate({sessionToken:
user.get('sessionToken')});
    });
  },

});

Store.initialize();

export default Store;
