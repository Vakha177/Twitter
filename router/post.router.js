const { Router } = require('express')
const { postController } = require('../controllers/post.controller')
const router = Router()


router.get('/posts', postController.getPosts)
router.get('/posts/:id', postController.getPost)
router.post('/posts', postController.postPost)
router.delete('/posts/:id', postController.deletePost)
router.patch('/posts/:id', postController.patchPost)

module.exports = router;