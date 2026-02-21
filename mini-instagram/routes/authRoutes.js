const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

router.post('/register', async (req, res) => {
    try {
        const { username, email, password } = req.body;

        let user = await User.findOne({ email });
        if (user) return res.send('User already exists');

        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);

        user = await User.create({
            username,
            email,
            password: hash
        });

        const token = jwt.sign({ email, userid: user._id }, process.env.JWT_SECRET);
        res.cookie('token', token);
        res.redirect('/profile');
    } catch (error) {
        console.error(error);
        res.redirect('/');
    }
});

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        let user = await User.findOne({ email });
        if (!user) return res.send('Something went wrong');

        bcrypt.compare(password, user.password, (err, result) => {
            if (result) {
                const token = jwt.sign({ email, userid: user._id }, process.env.JWT_SECRET);
                res.cookie('token', token);
                res.redirect('/profile');
            } else {
                res.redirect('/');
            }
        });
    } catch (error) {
        console.error(error);
        res.redirect('/');
    }
});

router.get('/logout', (req, res) => {
    res.cookie('token', '');
    res.redirect('/');
});

module.exports = router;
