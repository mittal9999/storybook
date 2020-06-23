const express = require('express')
const router = express.Router()

//@desc Login/Landing page
//@route GET /

router.get('/login', (req, res) => {
    res.render('/Login')
})

//@desc Dashboard
//@route GET /dashboard

router.get('/dashboard', (req, res) => {
    res.send('dashboard')
})
 module.exports =router