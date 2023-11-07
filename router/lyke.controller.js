const { Router } = require('express')
const { lykeController } = require('../controllers/lyke.controller')
const router = Router()


router.get('/lyke', lykeController.getFavorites)
router.post('/lyke', lykeController.postFavorite)
router.delete('/lyke/:id', lykeController.deleteFavorite)

module.exports = router;