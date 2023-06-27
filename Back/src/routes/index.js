const { Router } = require("express");
const Productos = require("./productos");
const Usuarios = require("./users")
const router = Router();

router.use("/productos", Productos);
router.use("/users", Usuarios);

module.exports = router;
