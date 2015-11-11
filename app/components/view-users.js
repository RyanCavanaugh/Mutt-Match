import React from 'react';
import store from '../store';
import {History, Link} from 'react-router';
import BackboneMixin from '../mixins/backbone';
import _ from 'underscore';
import Index from 'components/index';

const ViewUsers = React.createClass({

  mixins: [History, BackboneMixin],

  getInitialState(){},

  componentWillMount() {
    store.fetchUsers();
  },

  componentDidMout(){

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


        <h2>ALL USERS</h2>

        <ul className="all-users">
            {users.map((c, i) => {
              return (<li key={c.objectId || i}><Link to={`/view-user-profile/${c.objectId}`}>
                <h3>{c.username}</h3>
                <div><img className="user-image-two" src={c.userimage.url} ></img></div>
                  <h5><strong>Dog Size: </strong>{c.dogsize}</h5>
                  <h5><strong>Hypoallergenic: </strong>{c.hypoallergenic}</h5>
                  <h5><strong>Children: </strong>{c.children}</h5>
                </Link></li>);
              })
            }
        </ul>



        </form>
      </div>
      </div>
    );
  }

});

export default ViewUsers;
