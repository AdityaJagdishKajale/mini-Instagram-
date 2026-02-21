const express = require('express');
const router = express.Router();
const isLoggedIn = require('../middlewares/auth');
const Post = require('../models/Post');
const User = require('../models/User');
const upload = require('../config/multerConfig');
const fs = require('fs');
const path = require('path');

// Ensure upload directory exists
const uploadDir = path.join(__dirname, '../public/images/uploads');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

router.post('/upload', isLoggedIn, upload.single('image'), async (req, res) => {
    try {
        const user = await User.findOne({ email: req.user.email });
        if (!req.file) return res.send('No file uploaded');

        const post = await Post.create({
            image: req.file.filename,
            content: req.body.content,
            user: user._id
        });

        user.posts.push(post._id);
        await user.save();

        res.redirect('/profile');
    } catch (error) {
        console.error(error);
        res.redirect('/profile');
    }
});

router.get('/edit/:id', isLoggedIn, async (req, res) => {
    const post = await Post.findById(req.params.id);
    if (!post) return res.send('Post not found');
    res.render('edit', { post });
});

router.post('/edit/:id', isLoggedIn, async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post.user.toString() === req.user.userid) {
            post.content = req.body.content;
            await post.save();
            res.redirect('/profile');
        } else {
            res.status(401).send('Unauthorized');
        }
    } catch (err) {
        console.error(err);
        res.redirect('/profile');
    }
});

router.post('/delete/:id', isLoggedIn, async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) return res.redirect('/profile');
        if (post.user.toString() === req.user.userid) {
            await Post.findByIdAndDelete(req.params.id);
            const user = await User.findById(req.user.userid);
            if (user) {
                user.posts = user.posts.filter(p => p.toString() !== req.params.id);
                await user.save();
            }
            res.redirect('/profile');
        } else {
            res.status(401).send('Unauthorized');
        }
    } catch (err) {
        console.error(err);
        res.redirect('/profile');
    }
});

module.exports = router;
