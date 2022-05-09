const User = require('../models/userSchema');

//Render the login page
const renderLogin = (req, res) => {
    res.render('login');
}

//Render the register page
const renderRegister = (req, res) => {
    res.render('register');
}

//Render the home page
const renderHome = (req, res) => {
    res.render('home');
}

//Create a new user
const createUser = (req, res) => {
    const user = new User({
        email: req.body.username,
        password: req.body.password
    });
    user.save().then(() => {
        res.render('secrets');
    }).catch(err => {
        console.log(err);
    }
)}

//Login user
const loginUser = (req, res) => {
    const email = req.body.username;
    const password = req.body.password;

    User.findOne({email: email}).then(user => {
        if(!user) {
            res.render('login', {message: 'User not found'});
        } else {
            if(user.password !== password) {
                res.render('login', {message: 'Password is incorrect'});
            } else {
                res.render('secrets');
            }
        }
    })
}

module.exports = {
    renderLogin,
    renderRegister,
    renderHome,
    createUser,
    loginUser
}