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
      isEditing: false
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
    <div>
    <div className="row">
      <div className="medium-3 columns"><h3 className="welcome">Welcome {username}</h3></div>
    </div>

      <div className="row">

        <ul className="profile-details">
          <div className="medium-6 columns">
          <li>
            <form onSubmit={this.handleSubmit}>
              {users.userimage && <div><img className="user-image" src={users.userimage.url} alt="Profile picture" /></div>}
              <button onClick={this.handleUploadPhoto}>Upload Photo</button>
              <button type="submit">Save</button>
            </form>
          </li>
          </div>

          <div className="medium-6 columns">
          <li>Name: {currentUser.username}</li>
          <li>Dogs Size: {currentUser.dogsize}</li>
          <li>Dogs Age: {currentUser.dogage}</li>
          <li>Does well with children: {currentUser.children}</li>
          <li>Does well with other pets: {currentUser.otherpets}</li>
          <li>Hypoallergenic dog: {currentUser.hypoallergenic}</li>
          <li>Daily exercise: {currentUser.exercise}</li>
          <li>Training: {currentUser.training}</li>
          </div>
        </ul>
        </div>
        </div>




    );
  }

});

export default Index;
