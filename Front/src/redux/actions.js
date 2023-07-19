import axios from "axios";



export function AddToCarrito(id) {
  return async function (dispatch) {
    var response = await axios.get(`/products/${id}`);
    return dispatch({
      type: "ADD_TO_CARRITO",
      payload: response.data
    });
  }
}

export function deleteItem(id) {
  console.log(id);
  return {
    type: "DELETE_ITEM",
    payload: id
  }
}

export function getProductos() {
  try {
    return async function (dispatch) {
      var response = await axios.get("/products");
      return dispatch({ type: "GET_PRODUCTS", payload: response.data });
    };
  } catch (e) {
    console.log(e);
  }
}

export function createPost(payload) {
  try {
    return async function (dispatch) {
      const response = await axios.post("/products", payload, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return dispatch({ type: "CREATE_POST", payload: response.data });
    };
  } catch (e) {
    console.log(e);
  }
}

export function deletePost(id) {
  try {
    return async function (dispatch) {
      var response = await axios.delete("/products" + id);
      return dispatch({ type: "DELETE_POST", payload: response.data });
    };
  } catch (e) {
    console.log(e);
  }
}

export function createUser(payload) {
  try {
    return async function (dispatch) {
      const response = await axios.post("/users", payload);
      return dispatch({ type: "CREATE_USER", payload: response.data });
    };
  } catch (e) {
    console.log(e);
  }
}

