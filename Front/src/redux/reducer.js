const initialState = {
    productos: [],
    allProducts: []
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_PRODUCTS":
            return {
                ...state,
                productos:
                    state.productos.length === 0 ? action.payload : state.productos,
                allProducts: action.payload,
            }
        case "CREATE_POST":
            alert(action.payload.data);
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

        default:
            return {
                ...state,
            };
    }
};

export default rootReducer;