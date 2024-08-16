const express = require('express');

const { getAllUsers, getUser, createUser, updateUser, deleteUser } = require('./../controllers/userController')

const router = express.Router();                // real middleware

router.route('/')
    .get(getAllUsers)
    .post(createUser);

router.route('/:id')
    .get(getUser)
    .post(createUser)
    .patch(updateUser)
    .delete(deleteUser);

module.exports = router;