import * as $ from 'jquery'
import * as Backbone from 'backbone';
import User from './user';
import store from '../store';

class Session extends Backbone.Model {
  authenticate(options) {
      if (options.username && options.password) {
        return $.ajax({
          url: "https://api.parse.com/1/login",
          data: {
            username: options.username,
            password: options.password
          }
        }).then((response) => {
          this.set('currentUser', new User(response));
          localStorage.setItem('parse-session-token', response.sessionToken);
          this.trigger('authenticationSucceeded');
          return true;
        }, () => false);
      } else if (options.sessionToken) {
        // I'm authenticating with a sessionToken
        localStorage.setItem('parse-session-token', options.sessionToken);
        this.set('currentUser', new User(options));
        return $.ajax("https://api.parse.com/1/users/me").then((response) => {
          this.set('currentUser', new User(response));
          return true;
        }, () => false);
      } else {
        console.error("Invalid arguments to authenticate");
        var dfd = $.Deferred();
        dfd.reject("Invalid arguments to authenticate");
        return dfd.promise();
      }
    }

    restore() {
      var token = localStorage.getItem('parse-session-token');
      if (token) {
        this.authenticate({
          sessionToken: token
        });
      }
    }

    invalidate() {
      localStorage.removeItem('parse-session-token');
      this.trigger('invalidationSucceeded');
      window.location.reload();
    }

    toJSON() {
      return {
        currentUser: this.get('currentUser') && this.get ('currentUser').toJSON(),
        isAuthenticated: !!this.get('currentUser')
      };
    }
}
export default Session;
