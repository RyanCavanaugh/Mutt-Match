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

  componentDidMout(){},

  getModels(){
    return {
      users: store.getUsers()
    };
  },

  render() {
    let users = this.state.users;
    console.log(users);
    return (

        <form onSubmit={this.handleSubmit}>

        <h2>ALL USERS</h2>

          <div className="row">
            <div className="large-3 columns">

          <ul className="all-users">
              {users.map((c, i) => {
                return (<li key={c.objectId || i}><Link to={`/view-user-profile/${c.objectId}`}>

                  <div className="userImageBox">

                  <div>
                    <img className="user-image-two" src={c.userimage.url} ></img>
                    <div className="user-data">
                      <h5><strong>Dog Size: </strong>{c.dogsize}</h5>
                      <h5><strong>Hypoallergenic: </strong>{c.hypoallergenic}</h5>
                      <h5><strong>Children: </strong>{c.children}</h5>
                      <h5><strong>Exercise Needs: </strong>{c.exercise}</h5>
                      <h5><strong>Training Needs: </strong>{c.training}</h5>
                      <br></br>
                      <button className="submit-buttons">Add to Favorites</button>
                    </div>
                  </div>
                  </div>

                    </Link>
                  </li>);
                })
              }
          </ul>
        </div>
      </div>

        </form>

    );
  }
});

export default ViewUsers;
