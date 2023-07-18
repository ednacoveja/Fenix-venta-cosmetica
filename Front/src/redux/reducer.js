const initialState = {
    productos: [],
    allProducts: [],
    user: null,
    carrito: [],
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TO_CARRITO":
            const item = action.payload;
            return {
                ...state,
                carrito: [...state.carrito, item]
            }
        case "DELETE_ITEM":
            const del = action.payload;
            const compra = state.carrito;
            const index=compra.findIndex((i)=>i._id===del)
            let newArray=[...state.carrito]
            if(index>=0){
                newArray.splice(index,1)
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

        default:
            return {
                ...state,
            };
    }
};

export default rootReducer;