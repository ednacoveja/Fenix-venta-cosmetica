const { where } = require("sequelize");
const { User } = require("../db");


const getUser = async (req, res) => {
  try {

    let { email } = req.body
    if (email) {
      const usuario = await User.findOne({
        where: {
          email,
        },
      })
      res.status(200).json(usuario)
    }

    const data = await User.findAll();
    if (!data.length) throw new Error("No hay usuarios en la base de datos")

    res.status(200).json(data);
  } catch (err) {
    res.status(500).send({ msg: "Erorr en el servidor: ", err: err.message });
  }
};


const findOrCreate = async (req, res) => {
  try {
    let { email, nombre } = req.body;
    const [user, created] = await User.findOrCreate({
      where: {
        email,
      },
    })
    if (!created) {
      return res.status(200).send({ msg: "So vo amigo", user: user })
    }

    await sendMail(nombre, email)

    res.status(200).send({
      msg: "Usuario Creado Exitosamente",
      user: user,
    })
  } catch (err) {
    res.status(500).send({ msg: "Erorr en el servidor: ", err: err.message });
  }
};




module.exports = {
  getUser,
  findOrCreate,
};
