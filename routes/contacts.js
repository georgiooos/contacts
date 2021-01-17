const express=require('express');
const router=express.Router();
const auth = require('../middleware/auth')
const { check, validationResult } = require('express-validator/check');

const User = require('../models/User');
const Contact = require('../models/Contact');

//route: GET api/contacts
//desc get contacts
//access private
router.get('/',auth,async(req,res)=>{
    try {
        const contacts = await Contact.find({user:req.user.id}).sort({date:-1});
        res.json(contacts);        
    } catch (err) {
        console.errror(err.message);
        res.status(500).send('server error');
    }
    //res.send('get all contacts');;
});

//route: POST api/contacts
//desc add contact
//access private
router.post(
    '/',
    [
        auth,
        [
            check('name','name required')
                .not()
                .isEmpty()
        ]
    ],
    async (req,res) =>{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()})
        }
        
        const {name,email,phone,type}=req.body;

        try {
            const newContact = new Contact({
                name,
                email,
                phone,
                type,
                user: req.user.id
            });

            const contact = await newContact.save();

            res.json(contact);
        } catch (err) {
            console.error(err.message);
            res.status(500).send('server error');
        }
        
    //res.send('add contact');
    }
);

//route: PUT api/contacts
//desc update contact
//access private
router.put('/:id',(req,res) =>{
    res.send('update contact');
});

//route: DELETE api/contacts
//desc delete contact
//access private
router.delete('/:id',(req,res) =>{
    res.send('delete contact');
});

module.exports = router;