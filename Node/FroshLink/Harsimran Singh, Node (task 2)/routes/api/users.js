const express = require('express');
const { check, validationResult } = require('express-validator');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');

const UserModel = require('../../model/UserModel');

// route - /api/users
// POST method
// protected route for registration


router.post(
    '/',
    [
        check('name', 'Name is required').not().isEmpty(),
        check('email', 'Invalid email').isEmail(),
        check('password', 'Min. length 5 characters').isLength({ min: 5})
    ],
    async (req, res) =>{
        const validationErr = validationResult(req);

        if(!validationErr.isEmpty()){
            return res.status(400)
                    .json({
                        success: false,
                        error: validationErr.array()
                    });
        }

        const { name, email, password } = req.body;

        try {
            // check for pre-existing user
            let user = await UserModel.findOne({email});

            if(user){
                return res
                        .status(400).json({
                            success: false,
                            msg: 'User already exists'
                    });
            }

            user = new UserModel({
                name,
                email,
                password
            });

            // hashing pwd and name
            const salt = await bcrypt.genSalt(10);
            user.name = await bcrypt.hash(name, salt);
            user.password = await bcrypt.hash(password, salt);

            await user.save();

            // returning a json web token

            const payload = {
                user: {
                    id: user.id
                }
            }

            jwt.sign(
                payload, 
                config.get('jwtEnc'),
                {expiresIn: 360000},
                (err, token) => {
                    if(err) throw err;
                    res.json({ token });
                });

        } catch (err) {
            console.log(err.message);
            res.status(500).json({
                success: false,
                msg: 'Server error'
            });
        }
        
});

module.exports = router;