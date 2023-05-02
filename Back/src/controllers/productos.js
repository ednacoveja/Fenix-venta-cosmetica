const { Producto } = require("../db");
const { Op } = require("sequelize");

const getAllPost = async (req, res) => {
  const name = req.query.name;
  try {
    if (name) {
      let nameFind = await Producto.findAll({
        where: { name: { [Op.iLike]: `%${name}%` } },
      });
      if (!name.length) {
        res.status(404).send("No se encontro el name");
      } else {
        res.status(200).json(nameFind);
      }
    } else {
      let data = await Producto.findAll({
        order: [["createdAt", "DESC"]],
      });
      if (!data.length) throw new Error("No hay productos en la base de datos");

      res.status(200).json(data);
    }
  } catch (err) {
    res.status(500).send({ msg: "Erorr en el servidor: ", err: err.message });
  }
};

const createPost = async (req, res) => {
  try {
    let { name, description, image, type,price,rating } = req.body;
    let createP = await Producto.create({
      name,
      description,
      image,
      type,
      price,
      rating,
    });

    res.status(200).send(createP);
  } catch (err) {
    res.status(400).send(err);
    console.log(err);
  }
};

const detailPost = async (req, res) => {
  try {
    let { id } = req.params;
    let buscarid = await Producto.findByPk(id);
    if (!buscarid) throw new Error("No se encontro la publicacion");
    res.status(200).json(buscarid);
  } catch (err) {
    res.status(500).send({ msg: "Error en el servidor: ", err: err.message });
  }
};

const eliminarPost = async (req, res) => {
  try {
    let { id } = req.params;
    let buscarid = await Producto.findByPk(id);
    if (!buscarid) {
      res.status(500).json({ msg: "No se encontro ese Producto" });
    }
    if (buscarid) {
      await buscarid.destroy();
    }

    res.status(200).json({ msg: "Se elimino el posteo", Producto: buscarid });
  } catch (err) {
    res.status(500).send({ msg: "Error en el servidor: ", err: err.message });
  }
};

const editPost = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, image } = req.body;
    const findPost = await Producto.findByPk(id);
    if (!findPost) throw new Error("No se encontro la publicacion");
    const fields = {};
    if (name) fields.name = name;
    if (description) fields.description = description;
    if (image) fields.image = image;
    if (fields === {})
      throw new Error("No se recibieron parametros para cambiar");

    await findPost.update(fields);
    console.log(findPost);
    res.status(200).json({
      msg: "Cambios guardados",
      post: findPost,
    });
    return findPost;
  } catch (err) {
    res.status(500).send({ msg: "Error en el servidor", error: err.message });
  }
};

module.exports = {
  getAllPost,
  createPost,
  detailPost,
  eliminarPost,
  editPost,
};
