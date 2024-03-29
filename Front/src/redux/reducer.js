const initialState = {
    productos: [],
    allProducts: [],
    users: [],
    carrito: [],
    userCarrito: [],
    UserLoged: {},
    isLoggedIn: false,
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TO_CARRITO":
            const item = action.payload;
            return {
                ...state,
                carrito: [...state.carrito, item],
            };

        case "CLEAR_CARRITO":
            return {
                ...state,
                carrito: [],
            };
        case "DELETE_ITEM":
            const del = action.payload;
            const compra = state.carrito;
            const index = compra.findIndex((i) => i._id === del)
            let newArray = [...state.carrito]
            if (index >= 0) {
                newArray.splice(index, 1)
            }
            return {
                ...state,
                carrito: newArray,
            };
   
        case "GET_PRODUCTS":
            return {
                ...state,
                productos: action.payload,
                allProducts: action.payload,
            }
        case "CREATE_POST":
            console.log(action.payload);
            return {
                productos: [action.payload, ...state.productos],
            };
        case "DELETE_POST":
            alert(action.payload.data);
            const allposteos = state.productos
            const filter = allposteos.filter(el => el._id !== action.payload.id)
            return {
                ...state,
                productos: filter,
            };

        case "GET_USERS":
            return {
                ...state,
                users: action.payload,
            }

        case "SET_USER":
            return {
                ...state,
                UserLoged: action.payload ? action.payload : null,
                userCarrito: action.payload ? action.payload.carrito : [],
            };
        case "SET_LOGGED_IN":
            return {
                ...state,
                isLoggedIn: action.payload,
            };

        case "EDIT_USER":
            console.log(action.payload)
            return {
                ...state,
            };
        case "CREATE_USER":
            return {
                users: [...state.users, action.payload],
            };
        case "DELETE_USER":
            alert(action.payload.data);
            const allusers = state.users
            const filterA = allusers.filter(el => el._id !== action.payload.id)
            return {
                ...state,
                users: filterA,
            };

        default:
            return {
                ...state,
            };
    }
};

export default rootReducer;