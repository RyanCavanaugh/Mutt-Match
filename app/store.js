import _ from 'underscore';
import Backbone from 'backbone';
import Session from './models/session';
import User from './models/user';
import UserCollection from './models/user-collection';
import Message from './models/message';
import MessagesCollection from './models/messages-collection';

let session = new Session();
let users = new UserCollection();
let usersCache = {};

const Store = _.extend({}, Backbone.Events, {

  initialize() {
    this.listenTo(session, 'change', this.trigger.bind(this, 'change'));
    this.listenTo(users, 'add change remove', this.trigger.bind(this, 'change'));
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

  getMessagesCollection() {
    return (messages = messages || new MessagesCollection());
  },

  getNewMessage() {
    return new Message();
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
    let
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
