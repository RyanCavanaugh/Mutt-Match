import * as React from 'react';
import { History } from 'react-router';
import store from '../store';

const Signup = React.createClass({
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

    let email = this.refs.email.value;
    let username = email;
    let password = this.refs.password.value;
    let userage = this.refs.userage.value;
    let dogsize = this.refs.dogsize.value;
    let otherpets = this.refs.otherpets.value;
    let children = this.refs.children.value;
    let hypoallergenic = this.refs.hypoallergenic.value;
    let exercise = this.refs.exercise.value;
    let training = this.refs.training.value;
    let bio = this.refs.bio.value;

  store.createUser({username, email, password, userage, dogsize, otherpets, children, hypoallergenic, exercise, training, bio}).then(()=> {
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

  render() {

    return (
    <div className="row">
      <div className="large-10 columns">
      <form onSubmit={this.handleSubmit}>
        <fieldset>
        <legend>Human Sign Up</legend>
        <input className= "user-signup" type="text" ref="username" placeholder="Username" />
        <input className= "user-signup" type="text" ref="email" placeholder="Email" />
        <input className= "user-signup" type="text" ref="password" placeholder="Password" />

                      Your Age:
                      <select ref="userage" defaultValue="Age: 19-29">
                        <option value="Age: 18 or less">18 or less</option>
                        <option value="Age: 19-29">19-29</option>
                        <option value="Age: 30-44">30-44</option>
                        <option value="Age: 45-69">45-69</option>
                        <option value="Age: 70 and up">70 and up</option>
                      </select>

                      Dog Size Preffered:
                      <select ref="dogsize" defaultValue="Medium">
                        <option value="Itty-bitty">Itty Bitty (Less than 10 lbs)</option>
                        <option value="Small">Small (11-22 lbs)</option>
                        <option value="Medium">Medium (23-50 lbs)</option>
                        <option value="Large">Large (51-80 lbs)</option>
                        <option value="Super-sized">Super Sized (80 lbs and up)</option>
                      </select>

                        Are there other pets in the household?
                        <select ref="otherpets" defaultValue="None">
                          <option value="Cat">A Cat</option>
                          <option value="Dog">A Dog</option>
                          <option value="Cat-dog">A Cat and Dog</option>
                          <option value="None">None</option>
                        </select>

                        Are there (or will there be) children in the household?
                        <select ref="children" defaultValue="no">
                          <option value="yes">Yes</option>
                          <option value="no">No</option>
                          <option value="sometimes">Sometimes</option>
                        </select>

                        Do you (or someone in the household) need a hypoallergenic dog?
                        <select ref="hypoallergenic" defaultValue="no">
                          <option value="yes">Yes</option>
                          <option value="no">No</option>
                        </select>

                        How much exercise can/will you give your dog daily?
                        <select ref="exercise" defaultValue="20-30">
                          <option value="none">Little to none</option>
                          <option value="10-20">10-20 minutes a day</option>
                          <option value="20-30">20-30 minutes a day</option>
                          <option value="45+">45+ minutes a day</option>
                        </select>

                        How much training can/will you give your dog daily?
                        <select ref="training" defaultValue="10-20">
                          <option value="none">Little to none</option>
                          <option value="10-20">10-20 minutes a day</option>
                          <option value="30+">30+ minutes a day</option>
                        </select>

                        Write a short Bio: <br></br>
                      <input type="textarea" ref="bio" className="bio-section"></input>
        <br></br>
        <br></br>
        <button className="submit-buttons" type="submit">Sign Up</button>

        {this.state.error && (
          <p>{this.state.error}</p>
        )}
        </fieldset>
      </form>
      </div>
    </div>
    )
  }
});

export default Signup;
