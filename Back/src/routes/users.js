const { Router } = require("express");
const {
  getUser,
  findOrCreate,

} = require("../controllers/users");

const router = Router();

router.get("/", getUser);
router.post("/", findOrCreate);



module.exports = router;
