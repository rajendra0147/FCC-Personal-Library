const mongoose = require('mongoose');
const uri = process.env.MONGO_URI;
const db = mongoose.connect(uri).then(()=>{console.log("you are connected")}).catch((err) => {console.log(err)});
module.exports = db;