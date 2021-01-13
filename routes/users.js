const express=require('express');
const router=express.Router();
const bcrypt = require('bcryptjs');
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
    async (req,res)=>{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()})
        }

        const {name,email,password}=req.body;

        try {
            let user = await User.findOne({email})

            if(user){
                return res.status(400).json({msg:'exists'})
            }

            user = new User({
                name,
                email,
                password
            })

            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(password,salt);

            await user.save();

            res.send('saved user')
        } catch (err) {
            console.error(err.message);
            res.status(500).send('error from send user and encrypt try')
        }
        //res.send('passed');
    }
);

module.exports = router;