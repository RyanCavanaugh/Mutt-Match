import React from 'react';
import { History } from 'react-router';
import store from '../store';


const DogSignup = React.createClass({
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
    let dogage = this.refs.dogage.value;
    let dogsize = this.refs.dogsize.value;
    let otherpets = this.refs.otherpets.value;
    let children = this.refs.children.value;
    let hypoallergenic = this.refs.hypoallergenic.value;
    let exercise = this.refs.exercise.value;
    let training = this.refs.training.value;

  store.createUser({username, email, password, dogage, dogsize, otherpets, children, hypoallergenic, exercise, training}).then(()=> {
    let { location } = this.props;
    if (location.state && location.state.nextPathname) {
      this.history.replaceState(null, location.state.nextPathname);
    } else {
      this.history.replaceState(null, '/');
    }

    }, (xhr) => {
      this.setState({ error: xhr.responseJSON.error });
    });
  },

  render() {
    return (
    <div className="row">
      <div className="small-10 columns">
      <form onSubmit={this.handleSubmit}>
        <fieldset>
        <legend>Dog Sign Up</legend>
        <input className= "user-signup" type="text" ref="username" placeholder="Username" />
        <input className= "user-signup" type="text" ref="email" placeholder="Email" />
        <input className= "user-signup" type="text" ref="password" placeholder="Password" />

                      Your dogs age:
                      <select ref="dogage" defaultValue="adult">
                        <option value="puppy">less than 1 year old</option>
                        <option value="young">1-2 years old</option>
                        <option value="adult">2-6 years old</option>
                        <option value="mature">6-9 years old</option>
                        <option value="elderly">10+ years old</option>
                      </select>

                      Your dogs size:
                      <select ref="dogsize" defaultValue="medium">
                        <option value="itty-bitty">Itty Bitty (Less than 10 lbs)</option>
                        <option value="small">Small (11-22 lbs)</option>
                        <option value="medium">Medium (23-50 lbs)</option>
                        <option value="large">Large (51-80 lbs)</option>
                        <option value="super-sized">Super Sized (80 lbs and up)</option>
                      </select>

                        Does you dog do well with other pets?
                        <select ref="otherpets" defaultValue="none">
                          <option value="cat">Cats</option>
                          <option value="dog">Dogs</option>
                          <option value="cat-dog">Dogs and Cats</option>
                          <option value="none">None</option>
                        </select>

                        Does you dog do well with children under 7 years old?
                        <select ref="children" defaultValue="no">
                          <option value="yes">Yes</option>
                          <option value="no">No</option>
                        </select>

                        Is your dog a hypoallergenic breed/mix?
                        <select ref="hypoallergenic" defaultValue="no">
                          <option value="yes">Yes</option>
                          <option value="no">No</option>
                        </select>

                        How much do you exercise your dog currently?
                        <select ref="exercise" defaultValue="no">
                          <option value="none">Little to none</option>
                          <option value="10-20">10-20 minutes a day</option>
                          <option value="20-30">20-30 minutes a day</option>
                          <option value="45+">45+ minutes a day</option>
                        </select>

                        How much training do you give your dog daily?
                        <select ref="training" defaultValue="no">
                          <option value="none">Little to none</option>
                          <option value="10-20">10-20 minutes a day</option>
                          <option value="30+">30+ minutes a day</option>
                        </select>

                        Write a short Bio: <br></br>
                        <input type="textarea" className="bio-section"></input>
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

export default DogSignup;
