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
          <div><img className="user-image" src={user.userimage.url} ></img></div>
          <h1>{user.username}</h1>
          <h3>{user.userage}</h3>
          <h3><strong>Size: </strong>{user.dogsize}</h3>
          <h3><strong>Age: </strong>{user.dogage}</h3>
          <h3><strong>Other Pets: </strong>{user.otherpets}</h3>
          <h3><strong>Hypoallergenic: </strong>{user.hypoallergenic}</h3>
          <h3><strong>Children: </strong>{user.children}</h3>
          <h3><strong>Exercise: </strong>{user.exercise}</h3>
          <h3><strong>Training: </strong>{user.training}</h3>


          <Link to="create-comment"><button>Create a Comment</button></Link>

        </div>
      );
    }
  });

export default ViewUserProfile;
