const mongoose = require('mongoose');

const ProfileInfo = mongoose.Schema({
	name: String,
    password: String,
	status: String,
	Description: String,
	Contact: Number,
    Skills: [String],
    Experience: [{
     from: String,
     to: String,
     Role: String,
     Location: String,
     company: String ,
     Description:String 
    }],
    Education: {
    	Ten: Number,
        Twelve: Number,
        Btech: Number
    },
    Project: [{
        title: String,
        Description: String,
        URL: String
    }]

})

module.exports = mongoose.model('Profile',ProfileInfo);

