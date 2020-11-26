import { takeLatest, put, all, call, delay } from "redux-saga/effects";

import OrdersActionTypes from "./orders.types";

import { 
    fetchOrdersSuccess, 
    fetchOrdersFailure, 
} from "./orders.actions";
import { apiLinkRoot, apiLinkPathOrders, httpJsonHeader, httpRequestJson, } from "../../utils/fetch.utils";

// Funkcie pre LOGIN
export function* startLoadOrdersAsync() {
    try {
        const respon = yield fetch(`${apiLinkRoot}${apiLinkPathOrders.orders}`,
            {
                method: "POST",
                headers: httpJsonHeader(),
            })
        switch (respon.status) {
            case 200:
                const responData = yield respon.json();
                const payload = { data: responData.data }
                yield put(fetchOrdersSuccess(payload));
                break;
            case 400:
                yield put(fetchOrdersFailure("Wrong password!"));
                break;
            case 500:
                yield put(fetchOrdersFailure("Chyba servera."));
                break;
            default:
                yield put(fetchOrdersFailure("Chyba servera."));

        }
    } catch (error) {
        yield put(fetchOrdersFailure("Neznama chyba klienta"));
    }
}

export function* fetchOrdersStart() {
    yield takeLatest(
        OrdersActionTypes.FETCH_ORDERS_START,
        startLoadOrdersAsync
    );
}


export function* ordersSagas() {
    yield all(
        [
            call(fetchOrdersStart), 
        ]
    );
}