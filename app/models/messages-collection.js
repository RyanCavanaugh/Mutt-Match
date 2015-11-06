import Message from '../models/message';

var MessagesCollection = Backbone.Collection.extend({
  model: Message,
  url: "https://api.parse.com/1/classes/Messages",
  parse(response) {
    return response.results;
  }
});

export default MessagesCollection;
