const router = require('express').Router()
const {userControllers} = require('../controllers')

router.get("/", userControllers.getAll)
router.get("/:id", userControllers.getById)
router.post("/", userControllers.create)
router.put("/:id", userControllers.update)
router.delete("/:id", userControllers.remove)

module.exports=router