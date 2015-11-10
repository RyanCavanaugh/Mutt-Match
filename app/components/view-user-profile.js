import React from 'react';
import store from '../store';
import { History, Link } from 'react-router';
import BackboneMixin from '../mixins/backbone';
import Index from 'components/index';

const ViewUserProfile = React.createClass({
  mixins: [History, BackboneMixin],

  getInitialState() {
    return {
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
          <div><img src={user.userimage.url} ></img></div>
          <h1>{user.username}</h1>
          <h3>{user.userage}</h3>
          <h3>{user.dogsize}</h3>

          <Link to="create-comment"><button>Create a Comment</button></Link>

        </div>
      );
    }
  });

export default ViewUserProfile;
