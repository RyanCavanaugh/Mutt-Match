import React from 'react';
import { Link, IndexLink } from 'react-router';
import store from '../store';
import { History } from 'react-router';
import BackboneMixin from '../mixins/backbone';
import update from 'react-addons-update';


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
      <div className="large-10 columns"><h3 className="welcome">Welcome {username}</h3></div>
    </div>

      <div className="row">

        <ul className="profile-details">
          <div className="medium-5 columns">
          <li>
            <form onSubmit={this.handleSubmit}>
              {users.userimage && <div><img className="user-image" src={users.userimage.url} alt="Profile picture" /></div>}
            </form>
          </li>
          </div>

          <div className="large-7 columns">
          <li><h4><strong>Dog Size: </strong></h4><h5>{currentUser.dogsize}</h5></li>
          <li><h4><strong>Children: </strong></h4><h5>{currentUser.children}</h5></li>
          <li><h4><strong>Other pets: </strong></h4><h5>{currentUser.otherpets}</h5></li>
          <li><h4><strong>Hypoallergenic dog: </strong></h4><h5>{currentUser.hypoallergenic}</h5></li>
          <li><h4><strong>Daily exercise: </strong></h4><h5>{currentUser.exercise}</h5></li>
          <li><h4><strong>Training: </strong></h4><h5>{currentUser.training}</h5></li>
          <button className="submit-buttons" onClick={this.handleUploadPhoto}>Change Photo</button>
          <button className="submit-buttons-edit">Edit</button>
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
