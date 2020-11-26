import OrdersActionTypes from "./orders.types";

/**
 * USER actions for LOGIN
 */
export const fetchOrdersStart = ordersData => ({
    type: OrdersActionTypes.FETCH_ORDERS_START,
    payload: ordersData,
 });
 export const fetchOrdersSuccess = ordersData => ({
    type: OrdersActionTypes.FETCH_ORDERS_SUCCESS,
    payload: ordersData,
 });
 
 export const fetchOrdersFailure = error => ({
    type: OrdersActionTypes.FETCH_ORDERS_FAILURE,
    payload: error,
 });
 
