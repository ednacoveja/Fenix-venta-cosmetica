import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { createPost, getUsers, deleteUser } from "../redux/actions";
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import "./Admin.css"
import Swal from "sweetalert2";

function Admin() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const usuarios = useSelector((state) => state.users);

  async function borrarUsuario(id) {
    let paranoid = false;
    dispatch(deleteUser(id, paranoid));
    Swal.fire({
      title: "Usuario Eliminado Correctamente",
      color: "#382c4b",
      icon: "success",
      confirmButtonColor: "#382c4b",
      confirmButtonText: "OK",
      background: "#e8e8e8",
    })
    dispatch(getUsers());
  }

  const [input, setInput] = useState({
    name: "",
    description: "",
    image: null,
    type: "",
    price: "",
    rating: "",
  });

  const handlerChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageUpload = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.files[0],
    });
  };

  const handlerSubmit = async (e) => {
    e.preventDefault();

    try {
      await dispatch(createPost(input));
      alert("creado");
      setInput({
        name: "",
        description: "",
        image: null,
        type: "",
        price: "",
        rating: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className="form">
        <br />
        <Link to="/home">
          <button className="buttonHome">Return HOME</button>
        </Link>
        <br />
        <h1 className="titulo">Create your new product</h1>
        <br />
        <form>
          <div>
            <label className="label">Name:</label>
            <input
              className="input"
              type="text"
              name="name"
              value={input.name}
              onChange={(e) => handlerChange(e)}
            />
            <br />
            <br />
            <label className="label">Description:</label>
            <input
              className="input"
              type="text"
              name="description"
              value={input.description}
              onChange={(e) => handlerChange(e)}
            />
            <br />
            <br />
            <label className="label">Price:</label>
            <input
              type="number"
              name="price"
              className="input"
              value={input.price}
              onChange={(e) => handlerChange(e)}
            />
            <br />
            <br />
            <label className="label">Rating:</label>
            <input
              type="number"
              name="rating"
              className="input"
              value={input.rating}
              onChange={(e) => handlerChange(e)}
            />
            <br />
            <br />
            <label className="label">Image:</label>
            <input
              className="input"
              type="file"
              name="image"
              onChange={(e) => handleImageUpload(e)}
            />

            <br />
            <br />
            <label className="label">Type:</label>
            <input
              className="input"
              type="text"
              name="type"
              value={input.type}
              onChange={(e) => handlerChange(e)}
            />
            <br />
            <br />
            <button
              className="buttonCreate"
              type="submit"
              onClick={(e) => handlerSubmit(e)}
            >
              CREATE
            </button>
            <br />
            <br />
          </div>
        </form>
      </div>
      <h1 className="titulo">Usuarios</h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 50 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell >#</TableCell>
              <TableCell >Nombre</TableCell>
              <TableCell >Apellido</TableCell>
              <TableCell >Email</TableCell>
              <TableCell align="right"> Suspender </TableCell>
              <TableCell align="right"> Eliminar </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              usuarios
                ? usuarios.map((user) => {
                  { console.log(user) }
                  return (
                    <TableRow
                      Key={user._id}
                      sw={{ '&:last-child td, &:last-child th': { border: 5 } }}
                    >

                      <TableCell component="th" scope="row">
                        {user._id}
                      </TableCell>
                      <TableCell>{user.firstName}</TableCell>
                      <TableCell>{user.lastName}</TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell align="right">
                      </TableCell>
                      <TableCell align="right">
                        <button
                          onClick={() => borrarUsuario(user._id)}
                          className="buttonUsuario"
                        >
                          Eliminar
                        </button>
                      </TableCell>

                    </TableRow>
                  )
                })
                : null}
          </TableBody>

        </Table>


      </TableContainer>


    </div>
  );
}

export default Admin;
