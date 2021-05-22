const router = require('express').Router();
const User = require('../model/User');
const JsonPlaceholder = require('../model/JsonPlaceholder');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { registerValidation, loginValidation, jsonPlaceholderRegisterValidation, jsonPlaceholderValidation } = require('../validation');


router.post('/register', async (req, res) => {
    // LETS VALIDATE THE DATA BEFORE WE A USER
    const {error} = registerValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    //Checking if the user is already in the database
    const emailExist = await User.findOne({ email: req.body.email });
    if(emailExist) return res.status(400).send('Email already exists');

    //Hash passwords
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);


    //Create a new User
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword
    });
    try{
        const savedUser = await user.save();
        res.send({user: user._id});
    }catch(err){
        res.status(400).send(ree);
    }
});

//LOGIN
router.post('/login', async (req, res) => {
    // LETS VALIDATE THE DATA BEFORE WE A USER
    const {error} = loginValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    //Checking if the email exists
    const user = await User.findOne({ email: req.body.email });
    if(!user) return res.status(400).send('Email is not found');

    //PASSWORD IS CORRECT
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if(!validPass) return res.status(400).send('Invalid password')

    //Create and assign a token
    const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET);
    res.header('auth-token', token).send(token);
});

router.post('/registerJson', async (req, res) => {
    // LETS VALIDATE THE DATA BEFORE WE A USER
    const {error} = jsonPlaceholderRegisterValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    //Checking if the JsonPlaceholder is already in the database
    const titleExist = await JsonPlaceholder.findOne({ title: req.body.title });
    if(titleExist) return res.status(400).send('title already exists');

    //Create a new JsonPlaceholder
    const jsonPlaceholder = new JsonPlaceholder({
        id: req.body.id,
        title: req.body.title,
        url: req.body.url
    });
    try{
        const savedJsonPlaceholder = await jsonPlaceholder.save();
        res.send({jsonPlaceholder: jsonPlaceholder._id});
    }catch(err){
        res.status(400).send(ree);
    }
});


router.post('/search', async (req, res) => {
    // LETS VALIDATE THE DATA BEFORE WE A USER
    const {error} = jsonPlaceholderValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    //Checking if the TITLE exists
    const jsonPlaceholder = await jsonPlaceholder.findOne({ title: req.body.title });
    if(!jsonPlaceholder) return res.status(400).send('Title is not found');

    //Create and assign a token
    const token = jwt.sign({_id: jsonPlaceholder._id}, process.env.TOKEN_SECRET);
    res.header('json-token', token).send(token);
});
module.exports = router;