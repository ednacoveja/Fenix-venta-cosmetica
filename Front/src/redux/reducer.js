const initialState = {
    productos: [],
    allProducts: [],
    user:null,
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_PRODUCTS":
            return {
                ...state,
                productos:action.payload,
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
            const filter = allposteos.filter(el => el.id !== action.payload.id)
            return {
                ...state,
                productos: filter,
            };
        case "SET_USER":
                return {
                    ...state,
                    user: action.payload
                };    

        default:
            return {
                ...state,
            };
    }
};

export default rootReducer;