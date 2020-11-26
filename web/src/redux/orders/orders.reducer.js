import OrdersActionTypes from "./orders.types";

const INITIAL_STATE = {
    data: null,
    isFetching: false,
    error: undefined,
};

const ordersReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case OrdersActionTypes.FETCH_ORDERS_START:
            return {
                ...state,
                isFetching: true,
            };
        case OrdersActionTypes.FETCH_ORDERS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                data: action.payload.data,
            };
        case OrdersActionTypes.FETCH_ORDERS_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default ordersReducer;