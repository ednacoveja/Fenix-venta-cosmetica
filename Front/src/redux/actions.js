import axios from "axios";

export function getProductos() {
  try {
    return async function (dispatch) {
      var response = await axios.get("http://localhost:3001/productos");
      return dispatch({ type: "GET_PRODUCTS", payload: response.data });
    };
  } catch (e) {
    console.log(e);
  }
}

export function createPost(payload) {
  try {
    return async function (dispatch) {
      const response = await axios.post("http://localhost:3001/productos", payload, {
        /*headers: {
          "Content-Type": "multipart/form-data",
        },*/
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
      var response = await axios.delete("http://localhost:3001/productos"+id);
      return dispatch({ type: "DELETE_POST", payload: response.data });
    };
  } catch (e) {
    console.log(e);
  }
}