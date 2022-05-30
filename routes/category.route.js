const { Router } = require("express");
const { categoryController } = require("../controllers/category.controller");

const router = Router();

router.post("/admin/category", categoryController.postCat);
router.get("/admin/category", categoryController.getAllCat);
router.get("/admin/category/:id", categoryController.getCatsById);
router.delete("/admin/category/:id", categoryController.deleteCatById);
router.patch("/admin/category/:id", categoryController.patchCat);

module.exports = router;
