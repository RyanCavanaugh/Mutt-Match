import React from 'react';
import store from '../store';
import {History} from 'react-router';
import BackboneMixin from '../mixins/backbone';
import _ from 'underscore';

const ViewUsers = React.createClass({

  mixins: [History, BackboneMixin],

componentWillMount(){
  store.fetchUsers();
  console.log(users);
},

getModels(){
  return {
    users: store.getUsers()
  };
},

render() {
    let users = this.state.users;

    return (

      <div className="row">
       <div className="small-10 columns">
        <form onSubmit={this.handleSubmit}>

        <fieldset>
        <legend><h3>ALL USERS</h3></legend>

        <ul>
            {users.map((c) => <li key={c.objectId}>{c.username}, {c.dogage}, {c.userage}</li>)}
        </ul>


        </fieldset>

        </form>
      </div>
      </div>
    );
}

});

export default ViewUsers;
