 const mongoose = require('mongoose');

 const userSchema = new mongoose.Schema({
   username: {
     type: String,
     required: true,
     unique: true,
   },
   email: {
     type: String,
     required: true,
     unique: true,
   },
   password: {
     type: String,
     required: true,
   },
   createdAt: {
     type: Date,
     default: Date.now,
   },
   musicUploads: {
     type: Array,
     default: [],
   },
   favPlaylists: {
     type: Array,
     default: [],
   }
 })

 const userModel = mongoose.model('User', userSchema);
 module.exports = userModel;