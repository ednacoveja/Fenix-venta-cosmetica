import axios from "axios";


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


export const getUsers = () => dispatch => {
  return axios.get("/users")
    .then((d) => dispatch({ type: 'GET_USERS', payload: d.data }))
    .catch((e) => console.log(e))
}


export const createUser = (form) => dispatch => {
  return axios.post("/users", form)
    .then(d => dispatch({ type: 'CREATE_USER', payload: d.data }))
    .catch(e => console.log(e))
}

