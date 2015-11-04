import React from 'react';
import { History } from 'react-router';
import store from '../store';

const ProfilePic = React.createClass({
  propTypes: {
    location: React.PropTypes.object
  },

  mixins: [ History ],

  getInitialState() {
    return {
      error: false
    }
  },

  handleSubmit(event) {
    event.preventDefault();

    let pic = this.refs.pic.value; 

  store.createUser({pic}).then(()=> {
    let { location } = this.props;
    if (location.state && location.state.nextPathname) {
      this.history.replaceState(null, location.state.nextPathname);
    }
    else {
      this.history.replaceState(null, '/');
    }

    }, (xhr) => {
      this.setState({ error: xhr.responseJSON.error });
    });
  },

});

export default ProfilePic;
