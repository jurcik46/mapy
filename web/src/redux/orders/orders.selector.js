import { createSelector } from "reselect";

const selectOrders = state => state.orders;

//selekty pre LOGIN
export const selectOrdersData = createSelector(
    [selectOrders],
    (orders) => orders.data
);

export const selectIsFetchingData = createSelector(
    [selectOrders],
    (orders) => orders.isFetching
);

export const selectErrorData = createSelector(
    [selectOrders],
    (orders) => orders.error
);
