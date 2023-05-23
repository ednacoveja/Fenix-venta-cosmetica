const { Router } = require("express");
const {
  getAllPost,
  createPost,
  detailPost,
  eliminarPost,
  editPost,
} = require("../controllers/productos");

const router = Router();
const fileUpload = require("express-fileupload")

router.get("/", getAllPost);
router.get("/:id", detailPost);
router.post("/",fileUpload({
  useTempFiles:true,
  tempFileDir:"./uploads"
}),createPost);
router.delete("/:id", eliminarPost);
router.patch("/:id", editPost);

module.exports = router;
