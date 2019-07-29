const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for PersonModels
let PersonModel = new Schema({
	p_name: {
        type: String
    },
    p_age: {
        type: Number
    },
	p_gender: {
		type: String
	},
	p_number: {
		type: Number
	}
},{
    collection: 'personmodels'
});

module.exports = mongoose.model('PersonModel', PersonModel);