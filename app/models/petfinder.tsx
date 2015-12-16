import * as Backbone from 'backbone';

class Petfinder extends Backbone.Model {

	urlRoot = "https://api.parse.com/1/classes/Petfinder";

	idAttribute = 'objectId';

	parse(response) {
		return response;
	}
}

export default Petfinder;
