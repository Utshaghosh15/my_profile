const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const ProfileInfo = require('./SchemaProfile');
const bodyparse = require('body-parser');
const app = express();
const config = require('./config/database')
const passport = require('passport');
const bcrypt = require('bcrypt');
const port = process.env.PORT || 8080;
const jwt = require('jsonwebtoken');

app.use(bodyparse.json());
app.use(cors());
// app.use(passport.initialize());
// app.use(passport.session());

app.use(express.static(path.join(__dirname,'public')));

// const JwtStrategy = require('passport-jwt').Strategy,
//        ExtractJwt = require('passport-jwt').ExtractJwt;

// let opts = {};

// opts.jwtFromRequest = ExtractJwt.fromHeader("authorization");
// opts.secretOrKey = 'secret';
// passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
//     User.findOne({id: jwt_payload._id}, function(err, user) {
//         if (err) {
//             return done(err, false);
//         }
//         if (user) {
//             return done(null, user);
//         } else {
//             return done(null, false);
//         }
//     });
// }));


//Inserting all Data
app.post('/profile', (req,res) => {

  req.body.password = bcrypt.hashSync(req.body.password,10);

  const Profile	= new ProfileInfo({
  	name: req.body.name,
  	password: req.body.password,
	status: req.body.status,
	Contact: req.body.Contact,
    Skills: req.body.Skills,
    Experience: {
    	from: req.body.Experience.from,
    	to: req.body.Experience.to,
    	Role: req.body.Experience.Role,
        Location: req.body.Experience.Description 
    },
    Education: {
    	Ten: req.body.Education.Ten,
        Twelve: req.body.Education.Twelve,
        Btech: req.body.Education.Btech
    }
  });

  Profile.save()
  .then(data => {
  	res.json(data);
  })
  .catch(err => {
  	res.json(err);
  })
})

//Create new User
app.post('/newuser', (req,res) => {

  const Profile	= new ProfileInfo({
  	name: req.body.username,
  	password: req.body.password
  });

  Profile.save()
  .then(data => {
  	res.json(data);
  })
  .catch(err => {
  	res.json(err);
  })
})

//Authenticate
app.post('/authenticate', async (req,res) => {
	const user = await ProfileInfo.findOne({ name: req.body.username });
    
    if(user == null) 
      return res.json({ success: false }); 	 

    if(req.body.password == user.password)
     return res.json({ success: true });       	
    
      
     return res.json({ success: false });	     
})

//get all the users
app.get('/profile/:uname', async (req,res) => {
    try{
      const user = await ProfileInfo.findOne({ name: req.params.uname });
      const password = user.password; 
      res.json(user);	
    }
    catch(err){
     res.json({ message: err });
    }
})

//Delete Skill
app.delete('/profile/deleteSkill/:user/:skill', async (req,res) => {
	try{
       const removePost = await ProfileInfo.updateOne({ name: req.params.user },{ $pull: {Skills: req.params.skill}});
       res.json(removePost);
	}
	catch(err){
		res.json(err);
	}
})

//Delete Experience
app.delete('/profile/deleteExperience/:user/:company', async (req,res) => {

  try{
       const removePost = await ProfileInfo.updateOne({ name: req.params.user },{ $pull: {Experience: { company: req.params.company }}});
       res.json(removePost);
  }
  catch(err){
    res.json(err);
  }
})

//Add Title & Status
app.post('/EditTitle', async (req,res) => {
    try{
       const AddPost = await ProfileInfo.updateOne({ name: req.body.username },{ '$set': { 'status': req.body.Status, 'Description': req.body.Description}});
       res.json(AddPost);
  }
  catch(err){
    res.json(err);
  }
})

//Add Skill
app.get('/profile/AddSkill/:user/:skill', async (req,res) => {
	try{
     const AddPost = await ProfileInfo.updateOne({ name: req.params.user },{ $addToSet: {Skills: req.params.skill} });
     res.json(AddPost);
       
	}
	catch(err){
		res.json(err);
	}
})

//Edit Btech
app.post('/EditEducation', async (req,res) => {
    try{
      const AddPost = await ProfileInfo.update({ name: req.body.username },{ '$set': { 'Education.Btech': req.body.Btech,'Education.Twelve': req.body.Twelve, 'Education.Ten': req.body.Ten } });
       res.json(AddPost);       
  }
  catch(err){
    res.json(err);
  }
})

//Add Experience
app.post('/EditExperience', async (req,res) => {
    try{
      const AddPost = await ProfileInfo.update({ name: req.body.username },{ $addToSet : { Experience: { Role: req.body.Role, company: req.body.company, from : req.body.from, to : req.body.to, Location: req.body.location, Description: req.body.Description} } });
       res.json(AddPost);       
  }
  catch(err){
    res.json(err);
  }

})


//Add Project
app.post('/AddProject', async (req,res) => {
      try{
      const AddPost = await ProfileInfo.update({ name: req.body.name },{ $addToSet : { Project: { title: req.body.title, Description: req.body.Description, URL : req.body.URL} } });
       res.json(AddPost);       
  }
  catch(err){
    res.json(err);
  }
})

//Delete Project
app.delete('/profile/deleteProject/:name/:title', async (req,res) => {
  try{
       const removePost = await ProfileInfo.updateOne({ name: req.params.name },{ $pull: { Project: { title: req.params.title }}});
       res.json(removePost);
  }
  catch(err){
    res.json(err);
  }
})

app.post('/searchprofile', async (req,res) => {
	try{	
      const user = await ProfileInfo.findOne({ name: req.body.name});
      
      if(user == null)
        return res.json({ searchsuccess: false });
      else
        return res.json({ searchsuccess: true });             
	}
	catch(err){
      res.json({message: err});   
	}
})


//Search Users
app.get('/searchprofile/:name', async (req,res) => {
	try{	
      const user = await ProfileInfo.findOne({ name: req.params.name});
      res.json(user);
	}
	catch(err){
      res.json({message: err});   
	}
})

mongoose.connect(config.database,
	              () => 
	               {console.log('Connected to MongoDB')
	             });

app.listen(port, () => console.log('Running at port 8080'));
