import React from 'react';
import { History } from 'react-router';
import store from '../store';
import MessagesCollection from '../models/messages-collection';

const Message = React.createClass({

mixins: [History],

  handleSubmit(e) {
    e.preventDefault();
    store.getMessagesCollection().create({
      messageText: this.refs.messageText.value,
    }, {wait:true});
    this.history.pushState({}, "/view-users")
},
  render() {
    return (
      <div className="row">
       <div className="small-10 columns">
          <form onSubmit={this.handleSubmit}>
            <fieldset>
              <legend>Write your message</legend>
              <input type="text" ref="messageText" placeholder="Message" />
              <button className="submit-button" type="submit">Send</button>
            </fieldset>
          </form>
        </div>
      </div>
    )
  }
})

export default Message;
