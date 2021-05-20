const express = require('express');
const router = express.Router();
const authFn = require('../../auth/authFunction');
const UserModel = require('../../model/UserModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('config');
const { check, validationResult } = require('express-validator');

// public, GET api/auth 
router.get('/', authFn, async (req, res) =>{
    const user = await UserModel.findById(req.user.id).select('-password');
    res.status(200)
       .json({
           success: true,
           msg: user
       });
}); 

// public, POST api/auth  --authenticates user and get token
router.post(
    '/',
    [
        check('email', 'Invalid email').isEmail(),
        check('password', 'Password needed').exists()
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

        const { email, password } = req.body;

        try {
            // check for pre-existing user
            let user = await UserModel.findOne({email});

            if(!user){
                return res
                        .status(400).json({
                            success: false,
                            msg: 'No user found'
                    });

            }

            const isMatch = await bcrypt.compare(password, user.password);

            if(!isMatch){
                return res
                        .status(400)
                        .json({
                            success: false,
                            msg: 'Invalid'
                    });
            }

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