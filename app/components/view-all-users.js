import React from 'react';
import { History } from 'react-router';
import store from '../store';
import BackboneMixin from '../mixins/backbone';
import UserCollection from '../models/user-collection';

const ViewUsers = React.createClass({

mixins: [History, BackboneMixin],

  render() {

      <div className="row">
       <div className="small-10 columns">
          <form onSubmit={this.handleSubmit}>
            <fieldset>
              <legend>All Users</legend>

              <h1>{users.username}</h1>



            </fieldset>
          </form>




        </div>
      </div>

  },
});

export default ViewUsers;
