import React from 'react';
import store from '../store';
import { History } from 'react-router';
import BackboneMixin from '../mixins/backbone';

const ViewUserProfile = React.createClass({
  mixins: [History, BackboneMixin],

  getInitialState() {
    return {
      isEditing: false
    };
  },

  componentWillMount() {
    store.fetchUsers(this.props.params.id);
  },

  getModels() {
    return {
      user: store.getUsers(this.props.params.id),
    };
  },

  render() {
    let user = this.state.user;

      return (
        <div>
          <h1>{user.username}</h1>

          <ul>
            {user.map((c) => <li key={c.objectId}>{c.username}</li>)}
          </ul>
        </div>
      );
    }
  });

export default ViewUserProfile;
