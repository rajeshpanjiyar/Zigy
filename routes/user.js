const express = require("express")
const {add, del, show} = require("../controllers/user")

const  router = express.Router()

router.post('/add', add)

router.post('/del', del)

module.exports = router
