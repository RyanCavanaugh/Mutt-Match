import * as React from 'react';
import update = require('react-addons-update');
import { Link, IndexLink } from 'react-router';
import store from '../store';
import { History } from 'react-router';
import BackboneMixin from '../mixins/backbone';

var Index = React.createClass({

  mixins: [History, BackboneMixin],

  getInitialState: function(){
    return{
      username: '',
      dogsize: '',
      dogage: '',
      children: '',
      otherpets: '',
      hypoallergenic: '',
      exercise: '',
      training: '',
      isEditing: false,
      bio: ''
    };
  },



  getModels() {
    var currentUser = store.getSession().currentUser;
    return {
      user: store.getUser(currentUser && currentUser.objectId)
    };
  },



  handleName(e) {
    this.setState({
      user: update(this.state.user, {
        name: {$set: e.target.value}
      })
    });
  },

  handleUploadPhoto(e) {
    e.preventDefault();
    filepicker.pick(
      (Blob) => {
        var newUser = update(this.state.user, {
          userimage: {$set: Blob}
        })
        this.setState({
          users: newUser
        })
        store.createUser(newUser);
      }
    );
  },

  handleSubmit(e) {
    e.preventDefault();
    store.saveUser(this.state.user);
  },


  render() {

    let users = this.state.user;
    let session= store.getSession();
    let currentUser = session.currentUser;
    let username = (currentUser && currentUser.username);


    return (
    <div className="prof">
    <div className="row">
      <div className="large-12 columns"><h3 className="welcome">Welcome {username}</h3></div>
    </div>

      <div className="row">

        <ul className="profile-details">
          <div className="large-5 columns">
          <li>
            <form onSubmit={this.handleSubmit}>
              {users.userimage && <div><img className="user-image" src={users.userimage.url} alt="Profile picture" /></div>}
            </form>
          </li>
          </div>

          <div className="large-7 columns">
          <div className="user-prof-desc">
          <li><h4><strong>Dog Size: </strong>{currentUser.dogsize}</h4></li>
          <li><h4><strong>Children: </strong>{currentUser.children}</h4></li>
          <li><h4><strong>Other pets: </strong>{currentUser.otherpets}</h4></li>
          <li><h4><strong>Hypoallergenic dog: </strong>{currentUser.hypoallergenic}</h4></li>
          <li><h4><strong>Daily exercise: </strong>{currentUser.exercise}</h4></li>
          <li><h4><strong>Training: </strong>{currentUser.training}</h4></li>
          <button className="submit-buttons" onClick={this.handleUploadPhoto}>Change Photo</button>
          </div>
          </div>
        </ul>
        </div>
          <div className="row">
              <h2 className="prof-bio">Bio: </h2><h4 className="prof-bio">{currentUser.bio}</h4>
          </div>
        </div>

    );
  }

});

export default Index;
