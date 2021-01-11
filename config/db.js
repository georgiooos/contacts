const mongoose = require('mongoose');
const config=require('config');
const db=config.get('mongoURI');

const connectDB = () =>{
    mongoose.connect(db,{
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false
    }).then(()=>console.log('mongo connected'))
    .catch(err=>{
        console.error(err.message);
        process.exit();
    })

};

module.exports = connectDB;