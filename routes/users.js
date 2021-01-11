const express=require('express');
const router=express.Router();

//route: GET api/users435$#%#$
//desc register user
//access public
router.get('/',(req,res)=>{
    res.send('register user');
});

module.exports = router;