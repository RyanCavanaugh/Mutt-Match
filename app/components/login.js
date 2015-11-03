import React from 'react';
import { Link } from 'react-router';
import { History } from 'react-router';
import store from '../store';

const Login = React.createClass({

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
    event.preventDefault()

    let username = this.refs.email.value;
    let password = this.refs.password.value;

    store.authenticateSession({username, password}).then((loggedIn) =>{
      if (!loggedIn)
      return this.setState({ error: true})



      var { location } = this.props

      if (location.state && location.state.nextPathname) {
        this.history.replaceState(null, location.state.nextPathname)
      } else {
        this.history.replaceState(null, '/')
      }
    })
  },

  render() {
    return (
    <div className="row">
     <div className="small-10 columns">
      <form onSubmit={this.handleSubmit}>

        <fieldset>
        <legend>Login</legend>
        <input className="login-input" ref="email" placeholder="email" />
        <input type="password" ref="password" placeholder="password" />
        <button type="submit">Login</button>
        </fieldset>


        <fieldset>
        <legend>Create an account</legend>

        <fieldset>
        <legend>Looking for a Dog</legend>
        <Link to="/signup"><button>Sign Up</button></Link>
        </fieldset>

        <fieldset>
        <legend>Looking for a home for your dog</legend>
        <Link to="/dog-signup"><button>Sign Up</button></Link>
        </fieldset>


        {this.state.error && (
          <p>Bad login information</p>
        )}
        </fieldset>
      </form>
     </div>
    </div>
    )
  }
})

export default Login;
