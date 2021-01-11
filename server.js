const express = require('express');
const connectDB = require('./config/db');

const app = express();

//connect db
connectDB();

app.get('/',(req,res)=>
    res.json({msg:'welcome'})
);

//define routs
app.use('/api/users',require('./routes/users'));
app.use('/api/auth',require('./routes/auth'));
app.use('/api/contacts',require('./routes/contacts'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));