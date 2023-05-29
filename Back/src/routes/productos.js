const { Router } = require("express");
const {
  getAllPost,
  createPost,
  detailPost,
  eliminarPost,
  editPost,
} = require("../controllers/productos");
const multer = require('multer');

const router = Router();
// const fileUpload = require("express-fileupload")
const fileUpload = multer({dest:"uploads/"})

router.get("/", getAllPost);
router.get("/:id", detailPost);
router.post("/",fileUpload.single("image"),createPost);
router.delete("/:id", eliminarPost);
router.patch("/:id", editPost);

module.exports = router;
