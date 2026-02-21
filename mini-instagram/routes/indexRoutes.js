const express = require('express');
const router = express.Router();
const isLoggedIn = require('../middlewares/auth');
const Post = require('../models/Post');
const User = require('../models/User');

router.get('/', (req, res) => {
    res.render('login');
});

router.get('/register', (req, res) => {
    res.render('register');
});

router.get('/profile', isLoggedIn, async (req, res) => {
    const user = await User.findOne({ email: req.user.email }).populate('posts');
    res.render('profile', { user });
});

router.get('/feed', isLoggedIn, async (req, res) => {
    let page = parseInt(req.query.page) || 1;
    let limit = 4;
    let skip = (page - 1) * limit;

    const posts = await Post.find().populate('user').skip(skip).limit(limit).sort({ createdAt: -1 });
    const totalPosts = await Post.countDocuments();
    const totalPages = Math.ceil(totalPosts / limit);

    res.render('feed', { posts, currentPage: page, totalPages });
});

module.exports = router;
