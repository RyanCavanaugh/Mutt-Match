import React from 'react';
import store from '../store';
import { History, Link } from 'react-router';
import BackboneMixin from '../mixins/backbone';

const ViewUserProfile = React.createClass({
  mixins: [History, BackboneMixin],

  getInitialState() {
    return {
      open: false,
      class: "user"
    };
  },

  componentWillMount() {
    store.getUser(this.props.params.id);
  },

  getModels() {
    return {
      user: store.getUser(this.props.params.id),
    };
  },

  render() {
    let user = this.state.user;

      return (
        <div>
          <h1>{user.username}</h1>
          <h3>{user.userage}</h3>
          <h3>{user.dogsize}</h3>

          <Link to="messages"><button>Send {user.username} a message</button></Link>
        </div>
      );
    }
  });

export default ViewUserProfile;
