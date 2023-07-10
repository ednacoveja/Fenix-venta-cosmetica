const initialState = {
    productos: [],
    allProducts: [],
    user: null,
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_PRODUCTS":
            return {
                ...state,
                productos: action.payload,
                allProducts: action.payload,
            }
        case "CREATE_POST":
            console.log(action.payload.post);
            return {
                productos: [action.payload, ...state.productos],
            };
        case "DELETE_POST":
            alert(action.payload.data);
            const allposteos = state.productos
            const filter = allposteos.filter(el => el.id !== action.payload.id)
            return {
                ...state,
                productos: filter,
            };
        case "GET_USERS":
            return {
                ...state,
                Users: action.payload,
                loading: false,
            };

        case "CREATE_USER":
            return {
                ...state,
                mensajeResultado: action.payload.msg,
                UserLoged: action.payload.user,
                loading: false,
            };

        default:
            return {
                ...state,
            };
    }
};

export default rootReducer;