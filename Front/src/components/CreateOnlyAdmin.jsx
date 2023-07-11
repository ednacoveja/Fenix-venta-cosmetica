import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { createPost } from "../redux/actions";

function CreateOnlyAdmin() {

  const dispatch = useDispatch();

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
    </div>
  );
}

export default CreateOnlyAdmin;
