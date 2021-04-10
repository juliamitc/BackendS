const mongoose = require('../config/database');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    macaddress: {type: String,require: true},
    celNumber: {type: String,require: true},
    profile: {type: String,require: true},
    name: {type: String,require: true},
	status: {type: String,require: true}
});


module.exports = mongoose.model('Task', TaskSchema);

