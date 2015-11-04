import React from 'react';
import { Link, IndexLink } from 'react-router';
import store from '../store';
import { History } from 'react-router';
import BackboneMixin from '../mixins/backbone';


var Index = React.createClass({

  mixins: [History, BackboneMixin],

  getInitialState: function(){    //trying to get back intial values from server
    return{
      username: '',
      dogsize: '',
      dogage: '',
      children: '',
      otherpets: ''
    };
  },

  render() {
      let users = this.state.user
      let session= store.getSession();
      let currentUser = session.currentUser;
      let username = (currentUser && currentUser.username)

    return (
      <div>
      <h3 className="welcome">Welcome {username}</h3>
        <ul>
          <li>Name: {currentUser.username}</li>
          <li>Dogs Size: {currentUser.dogsize}</li>
          <li>Dogs Age: {currentUser.dogage}</li>
          <li>Does well with children: {currentUser.children}</li>
          <li>Does well with other pets: {currentUser.otherpets}</li>
        </ul>
      </div>
    );
  }

});

export default Index;
