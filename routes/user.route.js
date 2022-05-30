const { Router } = require('express')
const { route } = require('express/lib/application')
const { cartController } = require('../controllers/cart.controller')
const { userController } = require('../controllers/user.controller')
const router = Router()

router.post('/user', userController.postUser)
router.get('/user/pill,', userController.getAllPills)
router.get('/user/category/pill/:id,', userController.getPillsByCat)
router.get('/user/pill/:id', userController.getPillsById)

router.post('/cart', cartController.postCart)
router.patch('/user/:userId/:id', cartController.addPill)
router.patch('/returnPill/:id', cartController.returnPill)
router.patch('/user/:id', cartController.clearCart)
router.patch('/user/:userId/cart/:id', cartController.buyPill)
router.patch('/cash/:userId', cartController.cashRefill)

module.exports = router