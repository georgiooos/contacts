const express=require('express');
const router=express.Router();
const { check, validationResult } = require('express-validator/check');

const User = require('../models/User');

//route: POST api/users
//desc register user
//access public
router.post(
    '/',
    [
        check('name','mame?')
            .not()
            .isEmpty(),
        check('email','email?')
            .isEmail(),    
        check('password','pass?')
            .isLength({min:6})  
    ],
    (req,res)=>{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()})
        }
        res.send('passed');
    }
);

module.exports = router;