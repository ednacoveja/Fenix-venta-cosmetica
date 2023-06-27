const { DataTypes} = require("sequelize");
module.exports = (sequelize) => {
  sequelize.define(
    "user",
    {
       id:{
         type:DataTypes.INTEGER,
         autoIncrement:true,
         allowNull: false,
         primaryKey: true
       },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      contraseña: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      apellido: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    { 
      //paranoid:true,
      timestamps: true 
    }
  );
};