const { Router } = require("express");
const Productos = require("./productos");
const router = Router();

router.use("/productos", Productos);

module.exports = router;
