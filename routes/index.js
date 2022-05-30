const { Router } = require('express')
const router = Router()

router.use(require('./cart.route'))
router.use(require('./category.route'))
router.use(require('./pill.route'))
router.use(require('./user.route'))

module.exports = router