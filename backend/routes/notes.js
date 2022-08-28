const express = require('express');
const User = require('../models/User')
const router = express.Router();

router.get('/', () => {
    console.log(req.body);
    const user = User(req.body);
    user.save()
    req.send(req.body);
})

module.exports = router