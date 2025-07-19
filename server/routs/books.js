const express = require("express");
const router = express.Router();
const bookscontrollers = require("../controllers/bookscontrollers");


// Home Routre
router.get('/',bookscontrollers.view);

// Add User Router
router.get('/adduser',bookscontrollers.adduser);
router.post('/adduser',bookscontrollers.save);

// Edit User Router

router.get('/edituser/:id',bookscontrollers.edituser);
router.post('/edituser/:id',bookscontrollers.edit);

//Delete User Router

router.get('/deleteuser/:id', bookscontrollers.delete);

router.get('/books',bookscontrollers.show);
router.get('/cart', (req, res) => res.render('cart'));
router.get('/about', (req, res) => res.render('about'));
router.get('/contact', (req, res) => res.render('contact'));
router.get('/login', (req, res) => res.render('login'));
router.get('/register', (req, res) => res.render('register'));


module.exports=router