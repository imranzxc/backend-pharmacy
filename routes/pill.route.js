const { Router } = require('express')
const { pillsController } = require('../controllers/pill.controller')
const router = Router()

router.post('/admin/pill', pillsController.postPill)
router.get('/admin/pill', pillsController.getAllPills)
router.get('/admin/pill/:id', pillsController.getPillsById)
router.delete('/admin/pill/:id', pillsController.deletePillById)
router.patch('/admin/pill/:id', pillsController.patchPill)

module.exports = router