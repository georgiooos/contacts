const express=require('express');
const router=express.Router();

//route: GET api/auth
//desc get logged user
//access private
router.get('/',(req,res)=>{
    res.send('get loggged user');
});

//route: POST api/auth
//desc auth user and get toekn
//access public
router.post('/',(req,res)=>{
    res.send('login user');
});

module.exports = router;