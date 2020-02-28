const mongoose = require('mongoose');

const ProfileInfo = mongoose.Schema({
	name: String,
    password: String,
	status: String,
	Contact: Number,
    Skills: [String],
    Experience: [{
     from: String,
     to: String,
     Role: String,
     Location: String,
     company: String 
    }],
    Education: {
    	Ten: Number,
        Twelve: Number,
        Btech: Number
    }

})

module.exports = mongoose.model('Profile',ProfileInfo);

