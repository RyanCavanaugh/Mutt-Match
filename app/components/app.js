import React from 'react';
import { Link, IndexLink } from 'react-router';
import BackboneMixin from '../mixins/backbone';
import store from '../store';
import { History } from 'react-router';

var App = React.createClass({
  propTypes: {
    children: React.PropTypes.node
  },

  mixins: [History, BackboneMixin],

  getModels() {
    return{ session: store.getSession()
    }
  },

    handleLogout(e) {
      e.preventDefault();
    store.invalidateSession();
    },


  render() {
    let session = this.state.session;
    let loggedIn = session.isAuthenticated;
    let currentUser = session.currentUser;
    let username = (currentUser && currentUser.email) || 'Me';
    return (
      <div>
        <nav className="top-bar" data-topbar role="navigation">
          <ul className="title-area">
            <li className="name">
              <h1><IndexLink to="/" className="logo">MuttMatch.com</IndexLink></h1>
            </li>
          </ul>

          <section className="top-bar-section">
            {/* Left Nav Section */}
            <ul className="left">

              <li className="name">
                <Link to="/profile">Profile</Link>
              </li>
              <li className="name">
                <Link to="/search">New Search</Link>
              </li>
              <li className="name">
                <Link to="/messages">Messages</Link>
              </li>
              <li className="name">
                <Link to="/view-all-users">All Users</Link>
              </li>

            </ul>

            <ul className="right">
              {loggedIn &&
                <li className="has-dropdown">
                  <a href="#">{username}</a>
                  <ul className="dropdown">
                    <li><a href="#" onClick={this.handleLogout}>Logout</a></li>
                  </ul>
                </li>
                  }
              </ul>
          </section>
        </nav>

        {this.props.children}
      </div>
    );
  }
});

export default App;
