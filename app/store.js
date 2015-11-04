import _ from 'underscore';
import Backbone from 'backbone';
import Session from './models/session';
import User from './models/user';

let session = new Session();

const Store = _.extend({}, Backbone.Events, {

  initialize() {
    this.listenTo(session, 'change', this.trigger.bind(this, 'change'));
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
