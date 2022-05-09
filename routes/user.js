const express = require('express');
const userRoutes = require('../controllers/userController');

const router = express.Router();

router.get('/', userRoutes.renderHome);
router.get('/login', userRoutes.renderLogin);
router.get('/register', userRoutes.renderRegister);
router.post('/register', userRoutes.createUser);
router.post('/login', userRoutes.loginUser);

module.exports = router;
