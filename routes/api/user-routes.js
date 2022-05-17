const router = require('express').Router();
const {
    getAllUser,
    getUserById,
    addUser,
    addFriend,
    updateUser,
    removeUser,
    removeFriend
} = require('../../controllers/user-controller');


router
    .route('/')
    .get(getAllUser)
    .post(addUser);

router
    .route('/:userId')
    .get(getUserById)
    .put(updateUser)
    .delete(removeUser);


router
    .route('/:userId/friends/:friendId')
    .post(addFriend)
    .delete(removeFriend)

module.exports = router;