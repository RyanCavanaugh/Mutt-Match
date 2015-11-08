import React from 'react';
import store from '../store';
import {History, Link} from 'react-router';
import BackboneMixin from '../mixins/backbone';
import _ from 'underscore';

const ViewUsers = React.createClass({

  mixins: [History, BackboneMixin],

componentWillMount() {
  store.fetchUsers();
},

getModels(){
  return {
    users: store.getUsers()
  };
},

render() {
    let users = this.state.users;
    console.log(users);
    return (

      <div className="row">
       <div className="small-10 columns">
        <form onSubmit={this.handleSubmit}>

        <fieldset>
        <legend><h3>ALL USERS</h3></legend>

        <ul>
            {users.map((c, i) => {
              return (<li key={c.objectId || i}><Link to={'/profile/${c.objectId}'}>{c.username}</Link></li>);})}
        </ul>

        </fieldset>

        </form>
      </div>
      </div>
    );
}

});

export default ViewUsers;
